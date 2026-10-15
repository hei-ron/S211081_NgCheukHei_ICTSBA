(function(){
  const originalBuyer=window.renderBuyer, originalShop=window.renderShop, originalAdmin=window.renderAdmin, originalRenderAll=window.renderAll;
  window.renderBuyerDeliveryVisuals=function(){
    const mapHost=document.getElementById('buyerDeliveryMap'), summary=document.getElementById('buyerDeliveryMapSummary'), chart=document.getElementById('buyerStatusChart');
    if(!mapHost||!chart||typeof opRows!=='function')return;
    const mine=opRows().filter(x=>x.order?.user_id===current.id);
    const statuses=['待付款','待發貨','已攬收','待轉運','運輸中','二次派送中','待取件','已簽收'];
    const counts=statuses.map(status=>({label:status,value:mine.filter(x=>x.status===status).length,display:String(mine.filter(x=>x.status===status).length)}));
    chart.innerHTML=renderDataflowBars(counts,Math.max(1,...counts.map(x=>x.value)));
    const active=mine.filter(x=>x.status!=='已簽收'), shipment=active[0]||mine[0];
    if(!shipment){mapHost.innerHTML='<div class="df-map-status">目前沒有可顯示的包裹資料。</div>';summary.textContent='建立訂單後，這裡會按包裹資料顯示 Hub 路線示意。';return;}
    const from=find('ADDRESS','address_id',shipment.origin_address_id),to=find('ADDRESS','address_id',shipment.dest_address_id);
    const route=[from?.hub_id,to?.hub_id].filter((id,i,arr)=>id&&arr.indexOf(id)===i);
    summary.textContent=`包裹 ${shipment.op_id} · ${buyerStatusLabel(shipment.status)}。此路線為 Hub 之間的示意連線，不代表司機即時位置或真實道路導航。`;
    renderDataflowLeaflet('buyerDeliveryMap',route);
  };
  function shopVisuals(){
    const trend=document.getElementById('shopTrendChart'),note=document.getElementById('shopForecastNote'),risk=document.getElementById('shopInventoryRisk');
    if(!trend||!risk||typeof opRows!=='function')return;
    const sid=roleState.shopId, products=rows('PRODUCT').filter(p=>p.shop_id===sid), ops=opRows().filter(x=>x.product?.shop_id===sid);
    const monthOf=x=>{const m=String(x.order?.order_time||'').match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);return m?`${m[3]}-${String(m[2]).padStart(2,'0')}`:null};
    const keys=[...new Set(ops.map(monthOf).filter(Boolean))].sort().slice(-6);
    const monthly=keys.map(key=>({label:key,value:ops.filter(x=>monthOf(x)===key).reduce((sum,x)=>sum+Number(x.sale_price||0)*Number(x.quantity||0),0)}));
    const max=Math.max(1,...monthly.map(x=>x.value));
    trend.innerHTML=monthly.length?`<div class="viz-list">${monthly.map(x=>`<div class="viz-row"><div class="viz-label">${esc(x.label)}</div><div class="viz-track"><div class="viz-fill" style="width:${(x.value/max*100).toFixed(1)}%"></div></div><div class="viz-value" style="width:auto">${esc(money(x.value))}</div></div>`).join('')}</div>`:'<div class="alert orange">缺少可解析的訂單日期，暫時無法按月統計。</div>';
    note.textContent=monthly.length>=3?`最近 ${monthly.length} 個有效月份的歷史營收已列出；目前樣本未必連續，不會把簡單變化誤稱為可靠預測。`:'目前有效月份少於 3 個，資料不足以建立有意義的未來預測。建議累積連續月份的交易記錄後再分析。';
    const sold={};ops.forEach(x=>sold[x.product_id]=(sold[x.product_id]||0)+Number(x.quantity||0));
    const items=products.map(p=>({name:p.name,stock:Number(p.stock)||0,sold:sold[p.product_id]||0})).sort((a,b)=>(a.stock/(a.sold+1))-(b.stock/(b.sold+1))).slice(0,6);
    risk.innerHTML=items.length?items.map(x=>`<div class="alert ${x.stock<=Math.max(5,x.sold*.25)?'orange':'blue'}" style="margin-bottom:7px"><b>${esc(x.name)}</b><br>現有庫存 ${x.stock} 件 · 歷史售出 ${x.sold} 件${x.stock<=Math.max(5,x.sold*.25)?' · 建議檢視補貨':' · 暫未達示範低庫存門檻'}</div>`).join(''):'<div class="alert blue">目前沒有商品資料。</div>';
  }
  function adminVisuals(){
    const opsHost=document.getElementById('adminOpsChart'),finHost=document.getElementById('adminFinanceChart');
    if(!opsHost||!finHost||typeof rows!=='function')return;
    const statuses=['待付款','待發貨','已攬收','待轉運','運輸中','二次派送中','待取件','已簽收'];
    const distribution=statuses.map(status=>({label:status,value:rows('ORDER_PRODUCTS').filter(x=>x.status===status).length,display:String(rows('ORDER_PRODUCTS').filter(x=>x.status===status).length)}));
    opsHost.innerHTML=renderDataflowBars(distribution,Math.max(1,...distribution.map(x=>x.value)));
    const detailRevenue=rows('ORDER_PRODUCTS').reduce((sum,x)=>sum+Number(x.sale_price||0)*Number(x.quantity||0),0);
    const orderRevenue=rows('ORDERS').reduce((sum,x)=>sum+Number(x.total||0),0);
    const byShop=rows('SHOP').map(sh=>({name:sh.name,revenue:rows('ORDER_PRODUCTS').filter(x=>prod(x.product_id)?.shop_id===sh.shop_id).reduce((sum,x)=>sum+Number(x.sale_price||0)*Number(x.quantity||0),0)})).sort((a,b)=>b.revenue-a.revenue);
    finHost.innerHTML=`<div class="grid g2"><div class="alert green"><b>商品明細營收合計</b><br>${money(detailRevenue)}<div class="dataflow-map-note">Σ sale_price × quantity</div></div><div class="alert blue"><b>訂單總額合計</b><br>${money(orderRevenue)}<div class="dataflow-map-note">Σ ORDERS.total；與明細可能有差異</div></div></div><div style="font-weight:900;margin:12px 0 6px">各店商品明細營收</div>${renderDataflowBars(byShop.map(x=>({label:x.name,value:x.revenue,display:money(x.revenue)})),Math.max(1,...byShop.map(x=>x.revenue)))}<div class="alert orange" style="margin-top:12px"><b>成本／支出／利潤目前無法可靠計算</b><br>現有八張資料表沒有商品成本、運輸成本、人工、租金或其他支出欄位。為避免虛構財務數字，此處只展示可由現有資料推算的營收。</div>`;
  }
  if(typeof originalBuyer==='function')window.renderBuyer=function(){originalBuyer.apply(this,arguments);window.renderBuyerDeliveryVisuals();};
  if(typeof originalShop==='function')window.renderShop=function(){originalShop.apply(this,arguments);shopVisuals();};
  if(typeof originalAdmin==='function')window.renderAdmin=function(){originalAdmin.apply(this,arguments);adminVisuals();};
  if(typeof originalRenderAll==='function')window.renderAll=function(){originalRenderAll.apply(this,arguments);window.renderBuyerDeliveryVisuals();shopVisuals();adminVisuals();};
  // Re-render once because the base page's init() runs before this enhancement script.
  try{window.renderBuyerDeliveryVisuals();shopVisuals();adminVisuals();}catch(e){console.warn('DATAFLOW visualization enhancement:',e);}
})();
