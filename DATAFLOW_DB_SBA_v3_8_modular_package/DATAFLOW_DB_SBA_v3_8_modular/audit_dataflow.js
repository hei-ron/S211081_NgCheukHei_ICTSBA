const fs = require('fs');
const vm = require('vm');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'js', 'dataflow-core.js'), 'utf8');
const match = source.match(/const DATA=(\{.*?\});\nconst addressFixes=/s);
if (!match) throw new Error('Cannot read DATA seed');
const DATA = JSON.parse(match[1]);
const fail = [], warn = [];
const rates = { G: 0.90, S: 0.95, N: 1.00 };
const byId = (table, key) => new Map(DATA[table].map(r => [r[key], r]));
const users = byId('USER', 'user_id'), products = byId('PRODUCT', 'product_id'), orders = byId('ORDERS', 'order_id');
for (const table of Object.keys(DATA)) {
  const key = ({USER:'user_id', ADDRESS:'address_id', SHOP:'shop_id', PRODUCT:'product_id', ORDERS:'order_id', ORDER_PRODUCTS:'op_id', PICKUP_POINT:'pt_id', PT_HUB:'hub_id'})[table];
  const ids = DATA[table].map(r => r[key]);
  if (new Set(ids).size !== ids.length) fail.push(`${table}: duplicate primary key`);
}
const sums = new Map();
for (const op of DATA.ORDER_PRODUCTS) {
  const order = orders.get(op.order_id), user = order && users.get(order.user_id), product = products.get(op.product_id);
  if (!order) fail.push(`${op.op_id}: missing order ${op.order_id}`);
  if (!user) fail.push(`${op.op_id}: missing user for order ${op.order_id}`);
  if (!product) fail.push(`${op.op_id}: missing product ${op.product_id}`);
  if (product && user) {
    const expected = Math.round((Number(product.price) * (rates[user.member_lvl] ?? 1) + Number.EPSILON) * 100) / 100;
    if (Math.abs(Number(op.sale_price) - expected) > 0.001) fail.push(`${op.op_id}: sale_price ${op.sale_price} != expected member price ${expected} (${user.member_lvl})`);
  }
  if (order) sums.set(order.order_id, (sums.get(order.order_id) || 0) + Number(op.sale_price) * Number(op.quantity));
}
for (const order of DATA.ORDERS) {
  const expected = Math.round(((sums.get(order.order_id) || 0) + Number.EPSILON) * 100) / 100;
  if (Math.abs(Number(order.total) - expected) > 0.001) fail.push(`${order.order_id}: total ${order.total} != discounted line sum ${expected}`);
}
for (const p of DATA.PRODUCT) if (p.price <= 0 || p.stock < 0 || p.volume_unit <= 0) fail.push(`${p.product_id}: invalid product numeric values`);
for (const p of DATA.PICKUP_POINT) if (p.current_occ < 0 || p.max_capa < p.current_occ) fail.push(`${p.pt_id}: invalid pickup capacity`);
for (const p of DATA.PT_HUB) if (p.current_occ < 0 || p.max_capa < p.current_occ) fail.push(`${p.hub_id}: invalid hub capacity`);
console.log(`DATAFLOW v3.8 audit: ${Object.keys(DATA).length} tables, ${DATA.ORDERS.length} orders, ${DATA.ORDER_PRODUCTS.length} order lines`);
if (fail.length) { console.error(`FAIL (${fail.length})`); for (const x of fail) console.error(' - ' + x); process.exitCode = 1; }
else console.log('PASS: PK uniqueness, order/product/user references, membership-discounted sale_price, order totals and numeric ranges');
