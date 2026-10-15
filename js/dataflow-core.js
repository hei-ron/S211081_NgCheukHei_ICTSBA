'use strict';
const DATA={"USER":[{"user_id":"u00001","pw":"pw123","name":"吳卓曦","sex":"男","email":"ng@example.com","phone_no":"852 90001111","member_lvl":"G"},{"user_id":"u00002","pw":"pw456","name":"陳大文","sex":"男","email":"chan@example.com","phone_no":"852 90002222","member_lvl":"S"},{"user_id":"u00003","pw":"pw789","name":"李嘉欣","sex":"女","email":"lee@example.com","phone_no":"852 90003333","member_lvl":"N"},{"user_id":"u00004","pw":"pwabc","name":"張三","sex":"男","email":"zhang@example.com","phone_no":"852 90004444","member_lvl":"G"},{"user_id":"u00005","pw":"pwdef","name":"李四","sex":"女","email":"li@example.com","phone_no":"852 90005555","member_lvl":"S"},{"user_id":"u00006","pw":"pw123","name":"王五","sex":"男","email":"wang@example.com","phone_no":"852 90006666","member_lvl":"N"},{"user_id":"u00007","pw":"pw456","name":"趙六","sex":"女","email":"zhao@example.com","phone_no":"852 90007777","member_lvl":"G"},{"user_id":"u00008","pw":"pw789","name":"林青霞","sex":"女","email":"lin@example.com","phone_no":"852 90008888","member_lvl":"S"},{"user_id":"u00009","pw":"pwabc","name":"周星馳","sex":"男","email":"zhou@example.com","phone_no":"852 90009999","member_lvl":"N"},{"user_id":"u00010","pw":"pwdef","name":"劉德華","sex":"男","email":"liu@example.com","phone_no":"852 90001010","member_lvl":"G"},{"user_id":"u00011","pw":"pw123","name":"郭富城","sex":"男","email":"guo@example.com","phone_no":"852 90001212","member_lvl":"S"},{"user_id":"u00012","pw":"pw456","name":"黎明","sex":"男","email":"lai@example.com","phone_no":"852 90001313","member_lvl":"N"},{"user_id":"u00013","pw":"pw789","name":"張學友","sex":"男","email":"cheung@example.com","phone_no":"852 90001414","member_lvl":"G"},{"user_id":"u00014","pw":"pwabc","name":"陳奕迅","sex":"男","email":"eason@example.com","phone_no":"852 90001515","member_lvl":"S"},{"user_id":"u00015","pw":"pwdef","name":"容祖兒","sex":"女","email":"joey@example.com","phone_no":"852 90001616","member_lvl":"N"},{"user_id":"u00016","pw":"pw123","name":"楊千嬅","sex":"女","email":"miriam@example.com","phone_no":"852 90001717","member_lvl":"G"},{"user_id":"u00017","pw":"pw456","name":"謝霆鋒","sex":"男","email":"nicholas@example.com","phone_no":"852 90001818","member_lvl":"S"},{"user_id":"u00018","pw":"pw789","name":"王菲","sex":"女","email":"faye@example.com","phone_no":"852 90001919","member_lvl":"N"},{"user_id":"u00019","pw":"pwabc","name":"鄭秀文","sex":"女","email":"sammi@example.com","phone_no":"852 90002020","member_lvl":"G"},{"user_id":"u00020","pw":"pwdef","name":"古天樂","sex":"男","email":"louis@example.com","phone_no":"852 90002121","member_lvl":"S"}],"ADDRESS":[{"address_id":"a00001","user_id":"u00001","shop_id":null,"full_address":"香港沙田瀝源?","latitude":22.37,"longitude":114.19,"hub_id":"pt_hub_05","is_default":true},{"address_id":"a00002","user_id":"u00002","shop_id":null,"full_address":"香港大埔太和?","latitude":22.45,"longitude":114.16,"hub_id":"pt_hub_05","is_default":true},{"address_id":"a00003","user_id":"u00003","shop_id":null,"full_address":"香港觀塘秀茂坪?","latitude":22.31,"longitude":114.22,"hub_id":"pt_hub_02","is_default":true},{"address_id":"a00004","user_id":"u00004","shop_id":null,"full_address":"香港荃灣大窩口?","latitude":22.36,"longitude":114.12,"hub_id":"pt_hub_04","is_default":true},{"address_id":"a00005","user_id":"u00005","shop_id":null,"full_address":"香港屯門大興?","latitude":22.4,"longitude":113.97,"hub_id":"pt_hub_04","is_default":true},{"address_id":"a00006","user_id":"u00001","shop_id":null,"full_address":"香港旺角登打士街","latitude":22.31,"longitude":114.17,"hub_id":"pt_hub_02","is_default":false},{"address_id":"a00007","user_id":"u00006","shop_id":null,"full_address":"香港九龍灣啟業?","latitude":22.32,"longitude":114.21,"hub_id":"pt_hub_02","is_default":true},{"address_id":"a00008","user_id":"u00007","shop_id":null,"full_address":"香港元朗朗屏?","latitude":22.44,"longitude":114.02,"hub_id":"pt_hub_04","is_default":true},{"address_id":"a00009","user_id":"u00008","shop_id":null,"full_address":"香港將軍澳寶林?","latitude":22.32,"longitude":114.25,"hub_id":"pt_hub_02","is_default":true},{"address_id":"a00010","user_id":"u00009","shop_id":null,"full_address":"香港柴灣小西灣?","latitude":22.26,"longitude":114.25,"hub_id":"pt_hub_02","is_default":true},{"address_id":"a00011","user_id":null,"shop_id":"s00001","full_address":"深圳寶安區工業園","latitude":22.55,"longitude":113.88,"hub_id":"pt_hub_01","is_default":false},{"address_id":"a00012","user_id":null,"shop_id":"s00002","full_address":"深圳南山區科技園","latitude":22.54,"longitude":113.93,"hub_id":"pt_hub_01","is_default":false},{"address_id":"a00013","user_id":null,"shop_id":"s00003","full_address":"東莞長安鎮工業區","latitude":22.8,"longitude":113.8,"hub_id":"pt_hub_03","is_default":false},{"address_id":"a00014","user_id":null,"shop_id":"s00004","full_address":"廣州天河區商業城","latitude":23.12,"longitude":113.26,"hub_id":"pt_hub_03","is_default":false},{"address_id":"a00015","user_id":null,"shop_id":"s00005","full_address":"深圳龍華新區","latitude":22.65,"longitude":114.01,"hub_id":"pt_hub_01","is_default":false},{"address_id":"a00016","user_id":null,"shop_id":"s00006","full_address":"香港觀塘開源道","latitude":22.31,"longitude":114.22,"hub_id":"pt_hub_02","is_default":false},{"address_id":"a00017","user_id":null,"shop_id":"s00007","full_address":"香港荃灣海盛路","latitude":22.36,"longitude":114.1,"hub_id":"pt_hub_04","is_default":false},{"address_id":"a00018","user_id":null,"shop_id":"s00008","full_address":"香港沙田火炭工業區","latitude":22.39,"longitude":114.19,"hub_id":"pt_hub_05","is_default":false},{"address_id":"a00019","user_id":null,"shop_id":"s00009","full_address":"香港荔枝角青山道","latitude":22.33,"longitude":114.15,"hub_id":"pt_hub_02","is_default":false},{"address_id":"a00020","user_id":null,"shop_id":"s00010","full_address":"香港柴灣嘉業街","latitude":22.27,"longitude":114.24,"hub_id":"pt_hub_02","is_default":false},{"address_id":"a00021","user_id":null,"shop_id":null,"full_address":"深圳寶安集運大倉","latitude":22.56,"longitude":113.89,"hub_id":null,"is_default":false},{"address_id":"a00022","user_id":null,"shop_id":null,"full_address":"九龍灣分區大倉","latitude":22.32,"longitude":114.21,"hub_id":null,"is_default":false},{"address_id":"a00023","user_id":null,"shop_id":null,"full_address":"東莞轉運樞紐","latitude":22.81,"longitude":113.81,"hub_id":null,"is_default":false},{"address_id":"a00024","user_id":null,"shop_id":null,"full_address":"荃灣分區大倉","latitude":22.37,"longitude":114.11,"hub_id":null,"is_default":false},{"address_id":"a00025","user_id":null,"shop_id":null,"full_address":"沙田分區大倉","latitude":22.38,"longitude":114.18,"hub_id":null,"is_default":false},{"address_id":"a00026","user_id":null,"shop_id":null,"full_address":"廣州南沙區港集運路","latitude":22.75,"longitude":113.55,"hub_id":null,"is_default":false},{"address_id":"a00027","user_id":null,"shop_id":null,"full_address":"惠州惠陽區物流大街","latitude":22.82,"longitude":114.45,"hub_id":null,"is_default":false},{"address_id":"a00028","user_id":null,"shop_id":null,"full_address":"中山三角鎮轉運路","latitude":22.68,"longitude":113.42,"hub_id":null,"is_default":false},{"address_id":"a00029","user_id":null,"shop_id":null,"full_address":"佛山順德區順豐路","latitude":22.85,"longitude":113.25,"hub_id":null,"is_default":false},{"address_id":"a00030","user_id":null,"shop_id":null,"full_address":"珠海香洲區金鼎路","latitude":22.35,"longitude":113.58,"hub_id":null,"is_default":false},{"address_id":"a00031","user_id":null,"shop_id":null,"full_address":"香港屯門龍鼓灘路","latitude":22.39,"longitude":113.91,"hub_id":null,"is_default":false},{"address_id":"a00032","user_id":null,"shop_id":null,"full_address":"香港元朗新田村路","latitude":22.48,"longitude":114.07,"hub_id":null,"is_default":false},{"address_id":"a00033","user_id":null,"shop_id":null,"full_address":"香港粉嶺安樂村","latitude":22.5,"longitude":114.14,"hub_id":null,"is_default":false},{"address_id":"a00034","user_id":null,"shop_id":null,"full_address":"香港大角咀洋松街","latitude":22.32,"longitude":114.16,"hub_id":null,"is_default":false},{"address_id":"a00035","user_id":null,"shop_id":null,"full_address":"香港柴灣利眾街","latitude":22.26,"longitude":114.23,"hub_id":null,"is_default":false},{"address_id":"a00036","user_id":null,"shop_id":null,"full_address":"香港葵涌貨櫃碼頭路","latitude":22.34,"longitude":114.12,"hub_id":null,"is_default":false},{"address_id":"a00037","user_id":null,"shop_id":null,"full_address":"香港大埔大富街","latitude":22.46,"longitude":114.18,"hub_id":null,"is_default":false},{"address_id":"a00038","user_id":null,"shop_id":null,"full_address":"江門蓬江區物流大道","latitude":22.6,"longitude":113.08,"hub_id":null,"is_default":false},{"address_id":"a00039","user_id":null,"shop_id":null,"full_address":"肇慶端州區信安路","latitude":23.05,"longitude":112.48,"hub_id":null,"is_default":false},{"address_id":"a00040","user_id":null,"shop_id":null,"full_address":"香港赤?角航運路","latitude":22.3,"longitude":113.93,"hub_id":null,"is_default":false},{"address_id":"a00041","user_id":null,"shop_id":null,"full_address":"香港旺角彌敦道自提點","latitude":22.31,"longitude":114.16,"hub_id":"pt_hub_02","is_default":false},{"address_id":"a00042","user_id":null,"shop_id":null,"full_address":"香港大埔太和自提點","latitude":22.45,"longitude":114.16,"hub_id":"pt_hub_05","is_default":false},{"address_id":"a00043","user_id":null,"shop_id":null,"full_address":"香港觀塘廣場自提點","latitude":22.31,"longitude":114.22,"hub_id":"pt_hub_02","is_default":false},{"address_id":"a00044","user_id":null,"shop_id":null,"full_address":"香港沙田中心自提點","latitude":22.38,"longitude":114.18,"hub_id":"pt_hub_05","is_default":false},{"address_id":"a00045","user_id":null,"shop_id":null,"full_address":"香港屯門市廣場自提點","latitude":22.39,"longitude":113.97,"hub_id":"pt_hub_04","is_default":false},{"address_id":"a00046","user_id":null,"shop_id":null,"full_address":"香港元朗大馬路自提點","latitude":22.44,"longitude":114.02,"hub_id":"pt_hub_04","is_default":false},{"address_id":"a00047","user_id":null,"shop_id":null,"full_address":"香港將軍澳中心自提點","latitude":22.3,"longitude":114.26,"hub_id":"pt_hub_02","is_default":false},{"address_id":"a00048","user_id":null,"shop_id":null,"full_address":"香港荃灣綠楊自提點","latitude":22.37,"longitude":114.11,"hub_id":"pt_hub_04","is_default":false},{"address_id":"a00049","user_id":null,"shop_id":null,"full_address":"香港銅鑼灣地帶自提點","latitude":22.28,"longitude":114.18,"hub_id":"pt_hub_02","is_default":false},{"address_id":"a00050","user_id":null,"shop_id":null,"full_address":"香港柴灣新翠自提點","latitude":22.26,"longitude":114.23,"hub_id":"pt_hub_02","is_default":false}],"SHOP":[{"shop_id":"s00001","name":"霸道總裁之店","shop_type":"書籍","rating":4.8},{"shop_id":"s00002","name":"科技生活館","shop_type":"電子產品","rating":4.2},{"shop_id":"s00003","name":"流行服飾城","shop_type":"服裝","rating":4.5},{"shop_id":"s00004","name":"居家小幫手","shop_type":"家居","rating":4.0},{"shop_id":"s00005","name":"美妝天堂","shop_type":"化妝品","rating":4.7},{"shop_id":"s00006","name":"運動達人","shop_type":"運動用品","rating":4.3},{"shop_id":"s00007","name":"吃貨集中營","shop_type":"食品","rating":4.9},{"shop_id":"s00008","name":"文青文具店","shop_type":"文具","rating":4.1},{"shop_id":"s00009","name":"寵物樂園","shop_type":"寵物用品","rating":4.6},{"shop_id":"s00010","name":"汽車配件庫","shop_type":"汽車用品","rating":4.4},{"shop_id":"s00011","name":"母嬰世界","shop_type":"母嬰用品","rating":4.8},{"shop_id":"s00012","name":"園藝小天地","shop_type":"園藝","rating":4.2},{"shop_id":"s00013","name":"樂器行","shop_type":"樂器","rating":4.5},{"shop_id":"s00014","name":"遊戲基地","shop_type":"玩具","rating":4.0},{"shop_id":"s00015","name":"健康補給站","shop_type":"保健品","rating":4.7},{"shop_id":"s00016","name":"五金行","shop_type":"五金","rating":4.3},{"shop_id":"s00017","name":"戶外探索","shop_type":"戶外用品","rating":4.9},{"shop_id":"s00018","name":"手工藝坊","shop_type":"手工藝品","rating":4.1},{"shop_id":"s00019","name":"鐘錶珠寶","shop_type":"飾品","rating":4.6},{"shop_id":"s00020","name":"鞋包專賣","shop_type":"鞋包","rating":4.4}],"PRODUCT":[{"product_id":"p00001","shop_id":"s00001","name":"霸道總裁愛上我：失戀日記","price":150.0,"stock":100,"volume_unit":0.05},{"product_id":"p00002","shop_id":"s00002","name":"全新智能手機","price":6000.0,"stock":20,"volume_unit":0.1},{"product_id":"p00003","shop_id":"s00002","name":"無線藍牙耳機","price":800.0,"stock":50,"volume_unit":0.02},{"product_id":"p00004","shop_id":"s00003","name":"韓版修身連衣裙","price":299.0,"stock":200,"volume_unit":0.08},{"product_id":"p00005","shop_id":"s00004","name":"多功能摺疊椅","price":199.0,"stock":80,"volume_unit":0.2},{"product_id":"p00006","shop_id":"s00005","name":"保濕精華液","price":350.0,"stock":150,"volume_unit":0.01},{"product_id":"p00007","shop_id":"s00006","name":"專業瑜珈墊","price":120.0,"stock":300,"volume_unit":0.15},{"product_id":"p00008","shop_id":"s00007","name":"進口零食大禮包","price":99.0,"stock":500,"volume_unit":0.06},{"product_id":"p00009","shop_id":"s00008","name":"文青手帳本","price":45.0,"stock":400,"volume_unit":0.02},{"product_id":"p00010","shop_id":"s00009","name":"貓咪專用貓砂","price":65.0,"stock":1000,"volume_unit":0.3},{"product_id":"p00011","shop_id":"s00010","name":"汽車行車紀錄儀","price":450.0,"stock":60,"volume_unit":0.05},{"product_id":"p00012","shop_id":"s00011","name":"嬰兒紙尿褲","price":120.0,"stock":800,"volume_unit":0.25},{"product_id":"p00013","shop_id":"s00012","name":"室內盆栽套裝","price":88.0,"stock":120,"volume_unit":0.1},{"product_id":"p00014","shop_id":"s00013","name":"初學者木結他","price":850.0,"stock":30,"volume_unit":0.4},{"product_id":"p00015","shop_id":"s00014","name":"任天堂Switch遊戲機","price":2300.0,"stock":40,"volume_unit":0.1},{"product_id":"p00016","shop_id":"s00015","name":"維他命C發泡錠","price":60.0,"stock":600,"volume_unit":0.01},{"product_id":"p00017","shop_id":"s00016","name":"家用五金工具箱","price":150.0,"stock":100,"volume_unit":0.15},{"product_id":"p00018","shop_id":"s00017","name":"四人露營帳篷","price":899.0,"stock":25,"volume_unit":0.5},{"product_id":"p00019","shop_id":"s00018","name":"DIY編織包套裝","price":130.0,"stock":200,"volume_unit":0.04},{"product_id":"p00020","shop_id":"s00019","name":"925純銀項鍊","price":580.0,"stock":80,"volume_unit":0.01}],"ORDERS":[{"order_id":"o00001","user_id":"u00001","total":7513.2,"order_time":"10/5/2026 10:00:00","order_status":"處理中"},{"order_id":"o00002","user_id":"u00002","total":8645.0,"order_time":"11/5/2026 14:30:00","order_status":"處理中"},{"order_id":"o00003","user_id":"u00003","total":150.0,"order_time":"12/5/2026 9:15:00","order_status":"已完成"},{"order_id":"o00004","user_id":"u00004","total":269.1,"order_time":"12/5/2026 10:00:00","order_status":"待付款"},{"order_id":"o00005","user_id":"u00005","total":189.05,"order_time":"12/5/2026 11:30:00","order_status":"處理中"},{"order_id":"o00006","user_id":"u00001","total":315.0,"order_time":"13/5/2026 9:00:00","order_status":"處理中"},{"order_id":"o00007","user_id":"u00006","total":120.0,"order_time":"13/5/2026 14:00:00","order_status":"已完成"},{"order_id":"o00008","user_id":"u00007","total":89.1,"order_time":"13/5/2026 16:45:00","order_status":"處理中"},{"order_id":"o00009","user_id":"u00008","total":42.75,"order_time":"14/5/2026 10:20:00","order_status":"處理中"},{"order_id":"o00010","user_id":"u00009","total":65.0,"order_time":"14/5/2026 11:10:00","order_status":"已完成"},{"order_id":"o00011","user_id":"u00010","total":405.0,"order_time":"15/5/2026 8:30:00","order_status":"處理中"},{"order_id":"o00012","user_id":"u00011","total":228.0,"order_time":"15/5/2026 13:15:00","order_status":"處理中"},{"order_id":"o00013","user_id":"u00012","total":88.0,"order_time":"15/5/2026 15:50:00","order_status":"已完成"},{"order_id":"o00014","user_id":"u00013","total":765.0,"order_time":"16/5/2026 9:40:00","order_status":"處理中"},{"order_id":"o00015","user_id":"u00014","total":2185.0,"order_time":"16/5/2026 11:20:00","order_status":"待付款"},{"order_id":"o00016","user_id":"u00015","total":120.0,"order_time":"16/5/2026 14:00:00","order_status":"處理中"},{"order_id":"o00017","user_id":"u00016","total":135.0,"order_time":"17/5/2026 10:00:00","order_status":"處理中"},{"order_id":"o00018","user_id":"u00017","total":854.05,"order_time":"17/5/2026 12:30:00","order_status":"已完成"},{"order_id":"o00019","user_id":"u00018","total":260.0,"order_time":"17/5/2026 16:15:00","order_status":"處理中"},{"order_id":"o00020","user_id":"u00019","total":522.0,"order_time":"18/5/2026 9:00:00","order_status":"處理中"},{"order_id":"o00021","user_id":"u00001","total":1887.3,"order_time":"18/5/2026 9:00:00","order_status":"處理中"},{"order_id":"o00022","user_id":"u00002","total":156.75,"order_time":"18/5/2026 10:00:00","order_status":"處理中"}],"ORDER_PRODUCTS":[{"op_id":"op_00001","order_id":"o00001","product_id":"p00001","quantity":1,"sale_price":135.0,"origin_address_id":"a00011","dest_address_id":"a00001","status":"待轉運","update_time":"11/5/2026 9:00:00"},{"op_id":"op_00002","order_id":"o00001","product_id":"p00002","quantity":1,"sale_price":5400.0,"origin_address_id":"a00012","dest_address_id":"a00041","status":"運輸中","update_time":"12/5/2026 15:30:00"},{"op_id":"op_00003","order_id":"o00002","product_id":"p00003","quantity":1,"sale_price":760.0,"origin_address_id":"a00012","dest_address_id":"a00042","status":"待取件","update_time":"12/5/2026 18:00:00"},{"op_id":"op_00004","order_id":"o00003","product_id":"p00001","quantity":1,"sale_price":150.0,"origin_address_id":"a00011","dest_address_id":"a00003","status":"已簽收","update_time":"13/5/2026 10:00:00"},{"op_id":"op_00005","order_id":"o00004","product_id":"p00004","quantity":1,"sale_price":269.1,"origin_address_id":"a00013","dest_address_id":"a00004","status":"待付款","update_time":"12/5/2026 10:00:00"},{"op_id":"op_00006","order_id":"o00005","product_id":"p00005","quantity":1,"sale_price":189.05,"origin_address_id":"a00014","dest_address_id":"a00043","status":"待發貨","update_time":"12/5/2026 12:00:00"},{"op_id":"op_00007","order_id":"o00006","product_id":"p00006","quantity":1,"sale_price":315.0,"origin_address_id":"a00015","dest_address_id":"a00001","status":"待轉運","update_time":"13/5/2026 9:30:00"},{"op_id":"op_00008","order_id":"o00007","product_id":"p00007","quantity":1,"sale_price":120.0,"origin_address_id":"a00016","dest_address_id":"a00007","status":"已簽收","update_time":"14/5/2026 10:00:00"},{"op_id":"op_00009","order_id":"o00008","product_id":"p00008","quantity":1,"sale_price":89.1,"origin_address_id":"a00017","dest_address_id":"a00044","status":"運輸中","update_time":"14/5/2026 9:00:00"},{"op_id":"op_00010","order_id":"o00009","product_id":"p00009","quantity":1,"sale_price":42.75,"origin_address_id":"a00018","dest_address_id":"a00009","status":"待發貨","update_time":"14/5/2026 10:30:00"},{"op_id":"op_00011","order_id":"o00010","product_id":"p00010","quantity":1,"sale_price":65.0,"origin_address_id":"a00019","dest_address_id":"a00045","status":"已簽收","update_time":"15/5/2026 11:00:00"},{"op_id":"op_00012","order_id":"o00011","product_id":"p00011","quantity":1,"sale_price":405.0,"origin_address_id":"a00020","dest_address_id":"a00001","status":"二次派送中","update_time":"15/5/2026 9:00:00"},{"op_id":"op_00013","order_id":"o00012","product_id":"p00012","quantity":2,"sale_price":114.0,"origin_address_id":"a00011","dest_address_id":"a00001","status":"二次派送中","update_time":"15/5/2026 14:00:00"},{"op_id":"op_00014","order_id":"o00013","product_id":"p00013","quantity":1,"sale_price":88.0,"origin_address_id":"a00012","dest_address_id":"a00001","status":"已簽收","update_time":"16/5/2026 10:00:00"},{"op_id":"op_00015","order_id":"o00014","product_id":"p00014","quantity":1,"sale_price":765.0,"origin_address_id":"a00013","dest_address_id":"a00001","status":"待發貨","update_time":"16/5/2026 10:00:00"},{"op_id":"op_00016","order_id":"o00015","product_id":"p00015","quantity":1,"sale_price":2185.0,"origin_address_id":"a00014","dest_address_id":"a00002","status":"待付款","update_time":"16/5/2026 11:30:00"},{"op_id":"op_00017","order_id":"o00016","product_id":"p00016","quantity":2,"sale_price":60.0,"origin_address_id":"a00015","dest_address_id":"a00046","status":"運輸中","update_time":"16/5/2026 14:30:00"},{"op_id":"op_00018","order_id":"o00017","product_id":"p00017","quantity":1,"sale_price":135.0,"origin_address_id":"a00016","dest_address_id":"a00002","status":"待轉運","update_time":"17/5/2026 10:30:00"},{"op_id":"op_00019","order_id":"o00018","product_id":"p00018","quantity":1,"sale_price":854.05,"origin_address_id":"a00017","dest_address_id":"a00047","status":"已簽收","update_time":"18/5/2026 10:00:00"},{"op_id":"op_00020","order_id":"o00019","product_id":"p00019","quantity":2,"sale_price":130.0,"origin_address_id":"a00018","dest_address_id":"a00003","status":"待發貨","update_time":"17/5/2026 16:30:00"},{"op_id":"op_00021","order_id":"o00020","product_id":"p00020","quantity":1,"sale_price":522.0,"origin_address_id":"a00019","dest_address_id":"a00048","status":"待轉運","update_time":"18/5/2026 9:30:00"},{"op_id":"op_00022","order_id":"o00001","product_id":"p00003","quantity":1,"sale_price":720.0,"origin_address_id":"a00011","dest_address_id":"a00006","status":"待轉運","update_time":"11/5/2026 9:30:00"},{"op_id":"op_00023","order_id":"o00001","product_id":"p00004","quantity":1,"sale_price":269.1,"origin_address_id":"a00012","dest_address_id":"a00006","status":"待轉運","update_time":"11/5/2026 10:00:00"},{"op_id":"op_00024","order_id":"o00002","product_id":"p00015","quantity":1,"sale_price":2185.0,"origin_address_id":"a00013","dest_address_id":"a00041","status":"二次派送中","update_time":"12/5/2026 11:00:00"},{"op_id":"op_00025","order_id":"o00002","product_id":"p00002","quantity":1,"sale_price":5700.0,"origin_address_id":"a00011","dest_address_id":"a00041","status":"運輸中","update_time":"12/5/2026 11:30:00"},{"op_id":"op_00026","order_id":"o00021","product_id":"p00018","quantity":2,"sale_price":809.1,"origin_address_id":"a00011","dest_address_id":"a00042","status":"待轉運","update_time":"18/5/2026 10:00:00"},{"op_id":"op_00027","order_id":"o00021","product_id":"p00004","quantity":1,"sale_price":269.1,"origin_address_id":"a00013","dest_address_id":"a00001","status":"待轉運","update_time":"18/5/2026 10:30:00"},{"op_id":"op_00028","order_id":"o00022","product_id":"p00007","quantity":1,"sale_price":114.0,"origin_address_id":"a00017","dest_address_id":"a00001","status":"二次派送中","update_time":"18/5/2026 11:00:00"},{"op_id":"op_00029","order_id":"o00022","product_id":"p00009","quantity":1,"sale_price":42.75,"origin_address_id":"a00018","dest_address_id":"a00001","status":"待轉運","update_time":"18/5/2026 11:30:00"},{"op_id":"op_00030","order_id":"o00001","product_id":"p00003","quantity":1,"sale_price":720.0,"origin_address_id":"a00012","dest_address_id":"a00042","status":"待轉運","update_time":"18/5/2026 10:00:00"},{"op_id":"op_00031","order_id":"o00001","product_id":"p00004","quantity":1,"sale_price":269.1,"origin_address_id":"a00013","dest_address_id":"a00042","status":"待轉運","update_time":"18/5/2026 10:30:00"}],"PICKUP_POINT":[{"pt_id":"z00001","address_id":"a00041","name":"旺角彌敦道分站","max_capa":50.0,"current_occ":45.0},{"pt_id":"z00002","address_id":"a00042","name":"大埔太和分站","max_capa":30.0,"current_occ":29.5},{"pt_id":"z00003","address_id":"a00043","name":"觀塘廣場分站","max_capa":40.0,"current_occ":20.0},{"pt_id":"z00004","address_id":"a00044","name":"沙田中心分站","max_capa":60.0,"current_occ":30.0},{"pt_id":"z00005","address_id":"a00045","name":"屯門市廣場分站","max_capa":45.0,"current_occ":15.0},{"pt_id":"z00006","address_id":"a00046","name":"元朗大馬路分站","max_capa":35.0,"current_occ":10.0},{"pt_id":"z00007","address_id":"a00047","name":"將軍澳中心分站","max_capa":55.0,"current_occ":25.0},{"pt_id":"z00008","address_id":"a00048","name":"荃灣綠楊分站","max_capa":40.0,"current_occ":30.0},{"pt_id":"z00009","address_id":"a00049","name":"銅鑼灣地帶分站","max_capa":25.0,"current_occ":25.0},{"pt_id":"z00010","address_id":"a00050","name":"柴灣新翠分站","max_capa":30.0,"current_occ":5.0}],"PT_HUB":[{"hub_id":"pt_hub_01","address_id":"a00021","name":"深圳寶安總倉","max_capa":5000.0,"current_occ":3200.5},{"hub_id":"pt_hub_02","address_id":"a00022","name":"九龍灣分區大倉","max_capa":3000.0,"current_occ":1500.0},{"hub_id":"pt_hub_03","address_id":"a00023","name":"東莞轉運樞紐","max_capa":4000.0,"current_occ":2000.0},{"hub_id":"pt_hub_04","address_id":"a00024","name":"荃灣分區大倉","max_capa":2500.0,"current_occ":2490.0},{"hub_id":"pt_hub_05","address_id":"a00025","name":"沙田分區大倉","max_capa":2000.0,"current_occ":500.0},{"hub_id":"pt_hub_06","address_id":"a00026","name":"廣州南沙中轉站","max_capa":4500.0,"current_occ":1200.0},{"hub_id":"pt_hub_07","address_id":"a00027","name":"惠州惠陽物流園","max_capa":3500.0,"current_occ":800.0},{"hub_id":"pt_hub_08","address_id":"a00028","name":"中山三角集散地","max_capa":3000.0,"current_occ":1100.0},{"hub_id":"pt_hub_09","address_id":"a00029","name":"佛山順德倉儲中心","max_capa":3800.0,"current_occ":2500.0},{"hub_id":"pt_hub_10","address_id":"a00030","name":"珠海香洲轉運站","max_capa":2800.0,"current_occ":950.0},{"hub_id":"pt_hub_11","address_id":"a00031","name":"屯門龍鼓灘中心","max_capa":2200.0,"current_occ":1800.0},{"hub_id":"pt_hub_12","address_id":"a00032","name":"元朗新田物流大倉","max_capa":4000.0,"current_occ":3200.0},{"hub_id":"pt_hub_13","address_id":"a00033","name":"北區粉嶺分撥點","max_capa":1800.0,"current_occ":1750.0},{"hub_id":"pt_hub_14","address_id":"a00034","name":"油尖旺大角咀倉","max_capa":1500.0,"current_occ":600.0},{"hub_id":"pt_hub_15","address_id":"a00035","name":"港島柴灣貨倉","max_capa":1200.0,"current_occ":1100.0},{"hub_id":"pt_hub_16","address_id":"a00036","name":"葵青貨櫃碼頭倉","max_capa":6000.0,"current_occ":4500.0},{"hub_id":"pt_hub_17","address_id":"a00037","name":"大埔工業中心","max_capa":2000.0,"current_occ":400.0},{"hub_id":"pt_hub_18","address_id":"a00038","name":"江門蓬江物流站","max_capa":2500.0,"current_occ":300.0},{"hub_id":"pt_hub_19","address_id":"a00039","name":"肇慶端州轉運中心","max_capa":2200.0,"current_occ":150.0},{"hub_id":"pt_hub_20","address_id":"a00040","name":"香港國際機場倉","max_capa":5500.0,"current_occ":5200.0}]};
const addressFixes={'香港沙田瀝源?':'香港沙田瀝源邨','香港大埔太和?':'香港大埔太和邨','香港觀塘秀茂坪?':'香港觀塘秀茂坪邨','香港荃灣大窩口?':'香港荃灣大窩口邨','香港屯門大興?':'香港屯門大興邨','香港九龍灣啟業?':'香港九龍灣啟業邨','香港元朗朗屏?':'香港元朗朗屏邨','香港將軍澳寶林?':'香港將軍澳寶林邨','香港柴灣小西灣?':'香港柴灣小西灣邨','香港赤?角航運路':'香港赤鱲角航運路'};DATA.ADDRESS.forEach(a=>{if(addressFixes[a.full_address])a.full_address=addressFixes[a.full_address]});
const schema={
 USER:{pk:'user_id',desc:'會員帳戶及權限基礎資料',fields:['user_id','pw','name','sex','email','phone_no','member_lvl'],types:{user_id:'text',pw:'text',name:'text',sex:'text',email:'text',phone_no:'text',member_lvl:'text'}},
 ADDRESS:{pk:'address_id',desc:'統一空間主檔：USER / SHOP / HUB / PICKUP_POINT 均可引用',fields:['address_id','user_id','shop_id','full_address','latitude','longitude','hub_id','is_default'],types:{address_id:'text',user_id:'text',shop_id:'text',full_address:'text',latitude:'number',longitude:'number',hub_id:'text',is_default:'boolean'}},
 SHOP:{pk:'shop_id',desc:'商店主檔',fields:['shop_id','name','shop_type','rating'],types:{shop_id:'text',name:'text',shop_type:'text',rating:'number'}},
 PRODUCT:{pk:'product_id',desc:'商品、價格、庫存及體積',fields:['product_id','shop_id','name','price','stock','volume_unit'],types:{product_id:'text',shop_id:'text',name:'text',price:'number',stock:'number',volume_unit:'number'}},
 ORDERS:{pk:'order_id',desc:'訂單交易主檔',fields:['order_id','user_id','total','order_time','order_status'],types:{order_id:'text',user_id:'text',total:'number',order_time:'text',order_status:'text'}},
 ORDER_PRODUCTS:{pk:'op_id',desc:'訂單與商品 M:N 的關聯／物流明細',fields:['op_id','order_id','product_id','quantity','sale_price','origin_address_id','dest_address_id','status','update_time'],types:{op_id:'text',order_id:'text',product_id:'text',quantity:'number',sale_price:'number',origin_address_id:'text',dest_address_id:'text',status:'text',update_time:'text'}},
 PICKUP_POINT:{pk:'pt_id',desc:'自提點容量主檔',fields:['pt_id','address_id','name','max_capa','current_occ'],types:{pt_id:'text',address_id:'text',name:'text',max_capa:'number',current_occ:'number'}},
 PT_HUB:{pk:'hub_id',desc:'跨區集運大倉及容量',fields:['hub_id','address_id','name','max_capa','current_occ'],types:{hub_id:'text',address_id:'text',name:'text',max_capa:'number',current_occ:'number'}}
};
const roles={buyer:{label:'買家',icon:'🛍️',id:'u00001'},shop:{label:'商家',icon:'🏪',id:'s00001'},deliverer:{label:'派送員',icon:'🚚',id:'COURIER'},admin:{label:'管理員',icon:'🛡️',id:'admin'}};
const roleState={shopId:'s00001',hubId:'pt_hub_01'};
let current={role:'buyer',id:'u00001'},loginRole='buyer',cart=[],activeTable='USER',activeQuery=1,checkoutAddress=null,deliveryMode='home',profilePrefs={theme:'system',accent:'default',avatar:'🙂',signature:'探索科技，享受生活。'};
const statusFlow=['待付款','待發貨','已攬收','待轉運','運輸中','二次派送中','待取件','已簽收'];
function esc(v){return String(v??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}
function money(n){return 'HK$ '+Number(n||0).toLocaleString('en-HK',{minimumFractionDigits:2,maximumFractionDigits:2})}
function rows(t){return DATA[t]||[]}
function find(t,pk,v){return rows(t).find(x=>x[pk]===v)}
function address(id){return find('ADDRESS','address_id',id)?.full_address||id}
function prod(id){return find('PRODUCT','product_id',id)}
function shop(id){return find('SHOP','shop_id',id)}
function user(id){return find('USER','user_id',id)}
function order(id){return find('ORDERS','order_id',id)}
function opRows(){return DATA.ORDER_PRODUCTS.map(x=>({...x,product:prod(x.product_id),order:order(x.order_id)}))}
function expectedPickupVolume(addressId,excludeOpId=null){return opRows().filter(x=>x.dest_address_id===addressId&&x.op_id!==excludeOpId&&!['待付款','待取件','已簽收'].includes(x.status)).reduce((sum,x)=>sum+(Number(x.product?.volume_unit)||0)*(Number(x.quantity)||0),0)}
function badge(s){let c=['已簽收','已完成'].includes(s)?'b-green':['運輸中','二次派送中'].includes(s)?'b-blue':s==='待取件'?'b-purple':['待轉運','已攬收'].includes(s)?'b-yellow':'b-gray';return `<span class="badge ${c}">${esc(s)}</span>`}
function toast(m){let d=document.createElement('div');d.textContent=m;document.getElementById('toast').appendChild(d);setTimeout(()=>d.remove(),2400)}
function roleClass(){document.body.className='role-'+current.role}
function renderLogin(){let rs=Object.entries(roles);document.getElementById('roleTabs').innerHTML='<div class="role-indicator" id="roleIndicator"></div>'+rs.map(([k,r],i)=>`<button class="${loginRole===k?'active':''}" onclick="selectLoginRole('${k}')">${r.icon} ${r.label}</button>`).join('');requestAnimationFrame(()=>{let a=document.querySelector('#roleTabs button.active'),ind=document.getElementById('roleIndicator');if(a&&ind){ind.style.left=a.offsetLeft+'px';ind.style.width=a.offsetWidth+'px'}});let r=roles[loginRole];document.getElementById('loginIdLabel').textContent=loginRole==='buyer'?'會員 ID':loginRole==='shop'?'商店 ID':loginRole==='deliverer'?'登入身份':'管理員帳號';document.getElementById('loginId').value=r.id;document.getElementById('loginPw').value=loginRole==='buyer'?'pw123':'';document.getElementById('loginPresets').innerHTML=loginRole==='buyer'?`<div style="font-size:9px;font-weight:900;color:#64748b;margin-bottom:6px">會員快速登入</div><div class="filters">${rows('USER').slice(0,6).map(u=>`<button class="chip" onclick="document.getElementById('loginId').value='${u.user_id}';document.getElementById('loginPw').value='${u.pw}'">🛍️ ${esc(u.name)} · ${u.user_id}</button>`).join('')}</div>`:loginRole==='shop'?`<div class="filters">${rows('SHOP').slice(0,6).map(x=>`<button class="chip" onclick="document.getElementById('loginId').value='${x.shop_id}'">🏪 ${esc(x.name)} · ${x.shop_id}</button>`).join('')}</div>`:loginRole==='deliverer'?'<div class="alert blue">物流操作員是系統角色，不屬於 USER table，因此沒有 d00001 之類的虛構資料。</div>':'<div class="alert blue">Admin 為系統管理權限，不會新增至 USER table。</div>'}
function selectLoginRole(k){loginRole=k;document.body.className='role-'+k;renderLogin()}
function nextId(table,key,prefix,width){let max=0;for(const r of rows(table)){const m=String(r[key]||'').match(/(\d+)$/);if(m)max=Math.max(max,Number(m[1]))}return prefix+String(max+1).padStart(width,'0')}
function roundMoney(value){return Math.round((Number(value)+Number.EPSILON)*100)/100}
function login(){let id=document.getElementById('loginId').value.trim();const previous=current;if(loginRole==='admin'&&id==='admin'){current={role:'admin',id};}else if(loginRole==='deliverer'&&id==='COURIER'){current={role:'deliverer',id:'COURIER'};}else if(loginRole==='shop'&&find('SHOP','shop_id',id)){current={role:'shop',id};roleState.shopId=id;}else if(loginRole==='buyer'&&find('USER','user_id',id)){let u=user(id);if(document.getElementById('loginPw').value!==u.pw){toast('密碼不正確');return}current={role:'buyer',id};}else{toast('登入資料與所選身份不匹配');return}if(previous.role==='buyer'&&(current.role!=='buyer'||previous.id!==current.id)){cart=[];checkoutAddress=null;deliveryMode='home'}roleClass();document.getElementById('login').classList.add('hidden');renderAll();toast(`已進入${roles[current.role].label}工作區`)}
function showLogin(){document.getElementById('login').classList.remove('hidden');renderLogin()}
function toggleMobileNav(){const nav=document.getElementById('nav'),btn=document.getElementById('mobileNavToggle');nav.classList.toggle('mobile-open');btn.setAttribute('aria-expanded',nav.classList.contains('mobile-open')?'true':'false')}
function renderHeader(){let r=roles[current.role],u=current.role==='buyer'?user(current.id):current.role==='shop'?shop(roleState.shopId):{name:current.role==='deliverer'?'物流操作員':'系統管理員'};document.getElementById('rolePill').textContent=r.label.toUpperCase();document.getElementById('userName').textContent=u?.name||r.label;document.getElementById('userSub').textContent=current.role==='buyer'?`USER ${current.id} · ${memberLabel(u?.member_lvl)}`:current.role==='shop'?`SHOP ${roleState.shopId}`:current.role==='deliverer'?'LOGISTICS OPERATOR':'FULL ADMIN';document.getElementById('avatar').textContent=profilePrefs.avatar||(u?.name||r.label).slice(0,1);let views=current.role==='buyer'?[['buyerView','商城'],['profileModal','個人中心']]:current.role==='shop'?[['shopView','營運'],['profileModal','個人中心']]:current.role==='deliverer'?[['delivererView','調度'],['profileModal','個人中心']]:[['adminView','資料庫'],['queryView','SQL Center'],['profileModal','個人中心']];document.getElementById('nav').innerHTML=views.map((v,i)=>v[0]==='profileModal'?`<button onclick="showProfile();document.getElementById('nav').classList.remove('mobile-open')">${v[1]}</button>`:`<button class="${i===0?'active':''}" onclick="switchView('${v[0]}',this);document.getElementById('nav').classList.remove('mobile-open')">${v[1]}</button>`).join('')}
function switchView(id,btn){document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));let el=document.getElementById(id);if(el)el.classList.remove('hidden');document.querySelectorAll('#nav button').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');if(id==='queryView')renderQuery(activeQuery);if(id==='adminView')renderAdmin();if(id==='delivererView')requestAnimationFrame(()=>{renderDataflowLeaflet('delivererMap');renderDataflowLeaflet('tspMap',tspState.best?.route||[])});requestAnimationFrame(()=>Object.values(dataflowMaps||{}).forEach(m=>{try{m.invalidateSize({pan:false})}catch(e){}}))}
function renderAll(){renderHeader();document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));let first=current.role==='buyer'?'buyerView':current.role==='shop'?'shopView':current.role==='deliverer'?'delivererView':'adminView';document.getElementById(first).classList.remove('hidden');document.querySelectorAll('#nav button').forEach((b,i)=>{if(i===0)b.classList.add('active');else b.classList.remove('active')});renderBuyer();renderShop();renderDeliverer();renderQuery(activeQuery);renderAdmin()}
function memberLabel(l){return l==='G'?'黃金會員':l==='S'?'白金會員':'普通會員'}
function discountRate(l){return l==='G'?0.90:l==='S'?0.95:1}
function renderBuyer(){let u=user(current.id),myOps=opRows().filter(x=>x.order?.user_id===current.id),myOrders=rows('ORDERS').filter(x=>x.user_id===current.id),active=myOps.filter(x=>x.status!=='已簽收'),transit=active.filter(x=>x.status==='運輸中'),rate=discountRate(u?.member_lvl);document.getElementById('buyerMetrics').innerHTML=[['我的訂單',myOrders.length+' 筆','ORDERS'],['物流中',active.length+' 件','ORDER_PRODUCTS'],['運輸中',transit.length+' 件','status = 運輸中'],['會員折扣',Math.round((1-rate)*100)+'% OFF',memberLabel(u?.member_lvl)]].map(x=>`<div class="card metric"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="sub">${x[2]}</div></div>`).join('');document.getElementById('memberOfferText').textContent=`${memberLabel(u?.member_lvl)}目前享有 ${rate===0.9?'9 折':rate===0.95?'9.5 折':'無折扣'}優惠；折扣會在付款前即時計算。`;document.getElementById('memberOffer').innerHTML=`<div class="grid g3"><div class="alert ${u?.member_lvl==='N'?'blue':'green'}"><b>${memberLabel(u?.member_lvl)}</b><br>${rate<1?'專屬 '+Math.round((1-rate)*100)+'% 折扣':'升級會員可享更多優惠'}</div><div class="alert orange"><b>自提優惠</b><br>可於結帳時選擇仍有容量的自提點</div><div class="alert blue"><b>容量提醒</b><br>即時顯示接近爆滿的自提點</div></div>`;let cats=['全部',...new Set(rows('PRODUCT').map(x=>x.shop_id))],q=(document.getElementById('productSearch')?.value||'').toLowerCase();document.getElementById('catFilters').innerHTML=cats.map(c=>`<button class="chip" onclick="document.getElementById('productSearch').value='${c==='全部'?'':esc(shop(c)?.name||c)}';renderBuyer()">${c==='全部'?'全部':esc(shop(c)?.name||c)}</button>`).join('');let ps=rows('PRODUCT').filter(p=>`${p.name}${shop(p.shop_id)?.name||''}`.toLowerCase().includes(q));document.getElementById('productGrid').innerHTML=ps.map(p=>`<div class="card product"><div class="pcover">${(p.name.match(/手機|電話|iPhone|Samsung/i)?'📱':p.name.match(/耳機|headphone|earbud/i)?'🎧':p.name.match(/手錶|watch/i)?'⌚':p.name.match(/電腦|laptop|notebook/i)?'💻':p.name.match(/遊戲|switch|console|controller/i)?'🎮':p.name.match(/相機|camera/i)?'📷':p.name.match(/裙|衫|衣|dress|shirt/i)?'👕':'📦')}</div><div class="pbody"><div class="pname">${esc(p.name)}</div><div class="pmeta">${esc(shop(p.shop_id)?.name||'')} · 庫存 ${p.stock}</div><div class="price">${money(p.price*rate)} <span style="font-size:9px;color:#94a3b8;text-decoration:${rate<1?'line-through':'none'}">${rate<1?money(p.price):''}</span></div><div style="display:flex;gap:6px;margin-top:10px"><button class="btn" style="flex:1" onclick="openProductDetail('${p.product_id}')">查看詳情</button><button class="btn primary" style="flex:1" onclick="addToCart('${p.product_id}')">加入購物車</button></div></div></div>`).join('');document.getElementById('activeOrders').innerHTML=myOrders.slice().reverse().map(o=>{let its=myOps.filter(x=>x.order_id===o.order_id);return `<div class="card" style="padding:12px;margin-bottom:7px;cursor:pointer" onclick="openOrderDetail('${o.order_id}')"><div style="display:flex;justify-content:space-between"><b>${o.order_id}</b>${badge(o.order_status)}</div><div style="font-size:9px;color:#64748b;margin-top:4px">${o.order_time} · ${its.length} 件 · ${money(o.total)}</div><div style="font-size:9px;color:var(--accent);font-weight:900;margin-top:7px">查看訂單詳情 →</div></div>`}).join('')||'<div class="alert blue">暫時沒有訂單。</div>';document.getElementById('buyerTracking').innerHTML=active.map(x=>`<div class="event" style="cursor:pointer" onclick="openOrderDetail('${x.order_id}')"><time>${esc(x.update_time)}</time><div>${esc(x.product?.name||x.product_id)} · ${badge(x.status)} · ${esc(address(x.dest_address_id))}<div style="font-size:9px;color:#64748b;margin-top:3px">${buyerStatusLabel(x.status)}</div></div></div>`).join('')||'<div class="alert green">目前沒有進行中的包裹。</div>';document.getElementById('buyerCapacity').innerHTML=rows('PICKUP_POINT').map(p=>{let rem=p.max_capa-p.current_occ,expected=expectedPickupVolume(p.address_id),warning=expected>rem||rem<10;return `<div class="alert ${warning?'red':'green'}" style="margin-bottom:7px"><b>${esc(p.name)}</b> · 剩餘 ${rem.toFixed(2)} m³ · 預估新增 ${expected.toFixed(2)} m³ ${warning?'· 即將爆滿':'· 容量正常'}</div>`}).join('')}
function addToCart(id,qty=1){let p=prod(id);qty=Number(qty);if(!p||p.stock<=0){toast('此商品目前缺貨');return}if(!Number.isInteger(qty)||qty<1){toast('購買數量必須為正整數');return}let row=cart.find(x=>x.product_id===id);if(row)row.quantity=Math.min(p.stock,row.quantity+qty);else cart.push({product_id:id,quantity:Math.min(p.stock,qty)});renderCart();renderBuyer();toast(`已加入購物車：${p.name}`)}
function openCartDrawer(){renderCart();document.getElementById('cartModal').classList.remove('hidden')}
function renderCart(){let u=user(current.id),rate=discountRate(u?.member_lvl);document.getElementById('cartItems').innerHTML=cart.length?cart.map((x,i)=>{let p=prod(x.product_id);if(!p)return '';return `<div class="card" style="margin-bottom:7px"><div style="display:flex;justify-content:space-between;gap:8px"><div><b>${esc(p.name)}</b><div style="font-size:9px;color:#64748b;margin-top:4px">${money(p.price*rate)} / 件</div></div><button class="btn red" onclick="cart.splice(${i},1);renderCart();renderBuyer()">刪除</button></div><div style="display:flex;align-items:center;gap:7px;margin-top:9px"><button class="btn" onclick="changeCartQty(${i},-1)">−</button><b style="min-width:25px;text-align:center">${x.quantity}</b><button class="btn" onclick="changeCartQty(${i},1)">＋</button><span style="margin-left:auto;font-weight:950">${money(p.price*rate*x.quantity)}</span></div></div>`}).join(''):'<div class="alert blue">購物車目前沒有商品。</div>';let total=roundMoney(cart.reduce((s,x)=>s+roundMoney(prod(x.product_id).price*rate)*x.quantity,0));document.getElementById('cartTotal').textContent=money(total);document.getElementById('cartCount').textContent=cart.reduce((s,x)=>s+x.quantity,0)}
function changeCartQty(i,d){let x=cart[i],p=x&&prod(x.product_id);if(!x||!p)return;x.quantity=Math.max(0,Math.min(p.stock,x.quantity+d));if(x.quantity===0)cart.splice(i,1);renderCart();renderBuyer()}
function checkout(){if(!cart.length){toast('購物車沒有商品');return}renderCheckout();document.getElementById('cartModal').classList.add('hidden');document.getElementById('checkoutModal').classList.remove('hidden')}
function renderCheckout(){let u=user(current.id),rate=discountRate(u?.member_lvl),subtotal=cart.reduce((s,x)=>s+prod(x.product_id).price*x.quantity,0),total=roundMoney(cart.reduce((s,x)=>s+roundMoney(prod(x.product_id).price*rate)*x.quantity,0));let userAddrs=rows('ADDRESS').filter(a=>a.user_id===current.id),pts=rows('PICKUP_POINT').filter(p=>p.max_capa-p.current_occ-expectedPickupVolume(p.address_id)>0);document.getElementById('checkoutBody').innerHTML=`<div class="grid g2"><div><h3>配送方式</h3><div class="grid g2"><div class="route-choice ${deliveryMode==='home'?'active':''}" onclick="deliveryMode='home';renderCheckout()"><b>🚚 送貨上門</b><div style="font-size:9px;color:#64748b;margin-top:4px">送到你的 ADDRESS</div></div><div class="route-choice ${deliveryMode==='pickup'?'active':''}" onclick="deliveryMode='pickup';renderCheckout()"><b>📍 自提點取貨</b><div style="font-size:9px;color:#64748b;margin-top:4px">選擇 PICKUP_POINT</div></div></div></div><div><h3>付款方式</h3><select id="payMethod"><option>AlipayHK</option><option>WeChat Pay</option><option>PayMe</option><option>信用卡</option></select></div></div><div style="margin-top:14px"><label>${deliveryMode==='home'?'送貨地址':'自提點'}</label><select id="checkoutAddress">${(deliveryMode==='home'?userAddrs.map(a=>({id:a.address_id,label:a.full_address})):pts.map(p=>({id:p.address_id,label:p.name+' · '+address(p.address_id)}))).map(a=>`<option value="${a.id}" ${a.id===checkoutAddress?'selected':''}>${esc(a.label)}</option>`).join('')}</select></div><div class="card" style="margin-top:14px;background:#f8fafc"><div style="display:flex;justify-content:space-between"><span>原價</span><b>${money(subtotal)}</b></div><div style="display:flex;justify-content:space-between;margin-top:5px"><span>${memberLabel(u?.member_lvl)}折扣</span><b>− ${money(subtotal-total)}</b></div><div style="display:flex;justify-content:space-between;margin-top:8px;font-size:18px"><span>應付</span><b style="color:var(--accent)">${money(total)}</b></div></div><button class="btn primary" style="width:100%;margin-top:12px" onclick="confirmPayment()">確認付款並建立訂單（模擬）</button>`;checkoutAddress=document.getElementById('checkoutAddress')?.value||checkoutAddress||((deliveryMode==='home'?userAddrs[0]:pts[0])?.address_id)}
function confirmPayment(){
  if(current.role!=='buyer'||!user(current.id)){toast('請先以買家身份登入');return}
  if(!cart.length){toast('購物車沒有商品');return}
  const u=user(current.id),rate=discountRate(u?.member_lvl),method=document.getElementById('payMethod')?.value||'',dest=document.getElementById('checkoutAddress')?.value||'';
  const lines=cart.map(c=>({cart:c,p:prod(c.product_id)}));
  if(lines.some(x=>!x.p||!Number.isInteger(x.cart.quantity)||x.cart.quantity<1||x.p.stock<x.cart.quantity)){toast('庫存已變更或購物車資料無效，請重新確認');renderCart();return}
  let destination=null;
  if(deliveryMode==='home') destination=rows('ADDRESS').find(a=>a.address_id===dest&&a.user_id===current.id);
  else destination=rows('PICKUP_POINT').find(p=>p.address_id===dest);
  if(!destination){toast('請選擇有效的配送地址／仍有容量的自提點');return}
  if(deliveryMode==='pickup'){
    const point=destination,rem=point.max_capa-point.current_occ;
    const alreadyExpected=expectedPickupVolume(point.address_id);
    const expected=lines.reduce((sum,x)=>sum+x.p.volume_unit*x.cart.quantity,0);
    if(rem<=0||alreadyExpected+expected>rem){toast('自提點容量不足，請選擇其他自提點或減少商品數量');return}
  }
  const subtotal=roundMoney(lines.reduce((sum,x)=>sum+x.p.price*x.cart.quantity,0)),total=roundMoney(lines.reduce((sum,x)=>sum+roundMoney(x.p.price*rate)*x.cart.quantity,0));
  const id=nextId('ORDERS','order_id','o',5),now=new Date().toLocaleString('en-GB');
  const newOrder={order_id:id,user_id:current.id,total,order_time:now,order_status:'處理中'};
  let opSeq=rows('ORDER_PRODUCTS').reduce((max,r)=>{const m=String(r.op_id||'').match(/(\d+)$/);return m?Math.max(max,Number(m[1])):max},0);const newLines=lines.map(({cart:c,p})=>({op_id:'op_'+String(++opSeq).padStart(5,'0'),order_id:id,product_id:p.product_id,quantity:c.quantity,sale_price:roundMoney(p.price*rate),origin_address_id:rows('ADDRESS').find(a=>a.shop_id===p.shop_id)?.address_id,dest_address_id:dest,status:'已攬收',update_time:now}));
  if(new Set(newLines.map(x=>x.op_id)).size!==newLines.length||newLines.some(x=>rows('ORDER_PRODUCTS').some(y=>y.op_id===x.op_id))){toast('無法產生唯一物流編號，請重新操作');return}
  // Commit only after all validations pass.
  DATA.ORDERS.push(newOrder);DATA.ORDER_PRODUCTS.push(...newLines);lines.forEach(({cart:c,p})=>p.stock-=c.quantity);
  cart=[];checkoutAddress=null;closeModal('checkoutModal');renderAll();toast(`付款成功（模擬）· ${method} · 已建立 ${id}`);
}
function renderShop(){let sid=roleState.shopId,ps=rows('PRODUCT').filter(p=>p.shop_id===sid),ops=opRows().filter(x=>x.product?.shop_id===sid),revenue=ops.reduce((s,x)=>s+x.sale_price*x.quantity,0),stock=ps.reduce((s,x)=>s+x.stock,0);document.getElementById('shopMetrics').innerHTML=[['店內商品',ps.length+' 件','PRODUCT'],['庫存總量',stock+' 件','SUM(stock)'],['交易營收',money(revenue),'SUM(quantity × sale_price)'],['待處理物流',ops.filter(x=>x.status!=='已簽收').length+' 件','ORDER_PRODUCTS']].map(x=>`<div class="card metric"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="sub">${x[2]}</div></div>`).join('');document.getElementById('shopProducts').innerHTML=ps.map(p=>`<tr><td><b>${esc(p.name)}</b><br><span class="mono">${p.product_id}</span></td><td>${money(p.price)}</td><td>${p.stock}</td><td>${p.volume_unit}</td><td><button class="btn orange" onclick="restock('${p.product_id}')">補貨</button></td></tr>`).join('');let m={};ops.forEach(x=>{m[x.product_id]??={q:0,r:0};m[x.product_id].q+=x.quantity;m[x.product_id].r+=x.quantity*x.sale_price});document.getElementById('shopRanking').innerHTML=Object.entries(m).sort((a,b)=>b[1].r-a[1].r).map(([id,v],i)=>`<div style="padding:9px 0;border-bottom:1px solid #eef2f6"><div style="display:flex;justify-content:space-between"><b>${i+1}. ${esc(prod(id)?.name)}</b><b>${money(v.r)}</b></div><div style="font-size:9px;color:#64748b">已售 ${v.q} 件</div></div>`).join('')||'<div class="alert orange">暫無交易。</div>';let quarters=[1,2,3,4].map(q=>{let rev=ops.filter(x=>{let mth=parseInt(String(x.order?.order_time||'').split('/')[1]||'0');return Math.ceil(mth/3)===q}).reduce((a,x)=>a+x.sale_price*x.quantity,0);return {q,rev}}),max=Math.max(...quarters.map(x=>x.rev),1);document.getElementById('quarterChart').innerHTML=`<div style="font-size:10px;font-weight:900">季度營收趨勢</div><div class="chart">${quarters.map(x=>`<div class="barcol"><div class="barvalue">${x.rev?money(x.rev):'—'}</div><div class="bar" style="height:${Math.max(3,x.rev/max*125)}px"></div><div class="barlabel">Q${x.q}</div></div>`).join('')}</div>`;document.getElementById('shopOrders').innerHTML=ops.filter(x=>x.status!=='已簽收').map(x=>`<tr onclick="openOpDetail('${x.op_id}')" style="cursor:pointer"><td>${x.op_id}</td><td>${esc(x.product?.name||x.product_id)}</td><td>${x.quantity}</td><td>${badge(x.status)}</td><td>${esc(address(x.dest_address_id))}</td><td><button class="btn">查看</button></td></tr>`).join('');let ids=[1,2,3,5,6];document.getElementById('shopSqlPanel').innerHTML=ids.map(n=>`<button class="chip" onclick="renderRoleQuery(${n},'shopSqlResult')">SQL ${n} · ${queries[n-1][0]}</button>`).join('')+`<div id="shopSqlResult" style="margin-top:10px"></div>`}
function restock(id){let p=prod(id),v=prompt('補貨數量：','20');if(v!==null&&Number.isInteger(+v)&&+v>0){p.stock+=+v;renderAll();toast('PRODUCT.stock 已更新')}}
function openProductModal(){document.getElementById('newPShop').innerHTML=`<option value="${esc(roleState.shopId)}">${esc(roleState.shopId)} · ${esc(shop(roleState.shopId)?.name||'目前商店')}</option>`;document.getElementById('newPShop').disabled=true;document.getElementById('newPid').value=nextId('PRODUCT','product_id','p',5);document.getElementById('productModal').classList.remove('hidden')}
function createProduct(){let p={product_id:document.getElementById('newPid').value.trim(),shop_id:current.role==='shop'?roleState.shopId:document.getElementById('newPShop').value,name:document.getElementById('newPName').value.trim(),price:+document.getElementById('newPPrice').value,stock:+document.getElementById('newPStock').value,volume_unit:+document.getElementById('newPVol').value};if(current.role!=='shop'||!p.shop_id||!p.product_id||!p.name||!Number.isFinite(p.price)||p.price<=0||!Number.isInteger(p.stock)||p.stock<0||!Number.isFinite(p.volume_unit)||p.volume_unit<=0||rows('PRODUCT').some(x=>x.product_id===p.product_id)){toast('商品資料無效：請檢查 ID、名稱、價格、庫存及體積');return}DATA.PRODUCT.push(p);closeModal('productModal');renderAll();toast('已新增 PRODUCT')}
const countdownState={};let countdownTicker=null;
const statusMinutes={已攬收:180,待轉運:150,運輸中:90,二次派送中:45,待取件:20,待發貨:180,已簽收:0};
function ensureCountdown(x){const key=x.op_id,mins=statusMinutes[x.status]??0;if(!countdownState[key]||countdownState[key].status!==x.status)countdownState[key]={status:x.status,started:null,seconds:mins*60,running:false,finished:false};return countdownState[key]}
function remainingSeconds(x){const st=ensureCountdown(x);if(st.finished)return 0;if(!st.running||st.started===null)return st.seconds;return Math.max(0,st.seconds-Math.floor((Date.now()-st.started)/1000))}
function formatCountdown(sec){let s=Math.max(0,sec),h=Math.floor(s/3600),m=Math.floor((s%3600)/60),ss=s%60;return h?`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`:`${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`}
function remainingTime(x){if(x.status==='已簽收')return '已完成';if(x.status==='待付款')return '付款後可開始';if(!(x.status in statusMinutes))return '未設定';const st=ensureCountdown(x);if(st.finished)return '已到期';if(!st.running)return '尚未開始';const sec=remainingSeconds(x);return sec<=0?'已到期':formatCountdown(sec)}
function startCountdown(opid){const x=find('ORDER_PRODUCTS','op_id',opid);if(!x||x.status==='已簽收'||x.status==='待付款'||!(x.status in statusMinutes)){toast('此狀態暫時不能開始倒數');return}const st=ensureCountdown(x);if(st.running||st.finished||st.seconds<=0){toast(st.finished||st.seconds<=0?'倒數時間已結束':'倒數已經開始');return}st.started=Date.now();st.running=true;if(!countdownTicker)countdownTicker=setInterval(updateCountdowns,1000);updateCountdowns();toast(`已開始 ${opid} 的模擬倒數`)}
function updateCountdowns(){let anyRunning=false;document.querySelectorAll('[data-countdown-op]').forEach(el=>{let x=find('ORDER_PRODUCTS','op_id',el.dataset.countdownOp);if(!x)return;const st=ensureCountdown(x),sec=remainingSeconds(x);if(st.running&&sec<=0){st.running=false;st.finished=true}if(st.running)anyRunning=true;el.textContent=remainingTime(x);const btn=document.querySelector(`[data-countdown-start="${x.op_id}"]`);if(btn){btn.textContent=x.status==='已簽收'?'已完成':x.status==='待付款'?'等待付款':st.finished?'已到期':st.running?'倒數中':'開始倒數';btn.disabled=x.status==='已簽收'||x.status==='待付款'||st.running||st.finished||remainingSeconds(x)<=0}});if(!anyRunning&&countdownTicker){clearInterval(countdownTicker);countdownTicker=null}}


/* ===== v3.4 infographic + Leaflet/OpenStreetMap (policy-aware) ===== */
const dataflowMaps = {};
function renderDataflowBars(items, maxValue, suffix='') {
  if (!items.length) return '<div class="alert blue">目前沒有可顯示的資料。</div>';
  return '<div class="viz-list">' + items.map(item => {
    const v = Number(item.value) || 0;
    const pct = maxValue > 0 ? Math.max(0, Math.min(100, v / maxValue * 100)) : 0;
    const shown = item.display !== undefined ? item.display : `${v}${suffix}`;
    return `<div class="viz-row"><div class="viz-label">${esc(item.label)}</div><div class="viz-track"><div class="viz-fill" style="width:${pct.toFixed(1)}%"></div></div><div class="viz-value">${esc(String(shown))}</div></div>`;
  }).join('') + '</div>';
}
function renderDelivererVisuals() {
  const ops = opRows();
  const statuses = ['已攬收','待轉運','運輸中','二次派送中','待取件','已簽收'];
  const counts = statuses.map(status => ({label:status,value:ops.filter(op => op.status === status).length}));
  const statusHost = document.getElementById('packageStatusChart');
  if (statusHost) statusHost.innerHTML = `<div class="dataflow-map-note">共 ${ops.length} 件物流明細</div>` +
    renderDataflowBars(counts, Math.max(1, ...counts.map(x=>x.value)), ' 件');
  const capacityHost = document.getElementById('pickupCapacityChart');
  if (capacityHost) {
    const capacity = rows('PICKUP_POINT').map(point => {
      const max = Math.max(0, Number(point.max_capa) || 0);
      const occupied = Math.max(0, Number(point.current_occ) || 0);
      const ratio = max ? occupied / max * 100 : 0;
      return {label:point.name || point.address_id,value:Math.min(100,ratio),display:`${ratio.toFixed(0)}%`};
    }).sort((a,b)=>b.value-a.value).slice(0,7);
    capacityHost.innerHTML = renderDataflowBars(capacity, 100);
  }
}
function dataflowMapFallback(id, message) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `<div style="padding:18px;font-size:11px;color:#475569">${esc(message)}</div>`;
}
function dataflowPackageCountForHub(hubId) {
  return opRows().filter(op => {
    const a = find('ADDRESS','address_id',op.dest_address_id);
    return a && a.hub_id === hubId && op.status !== '已簽收';
  }).reduce((sum,op)=>sum + (Number(op.quantity)||1),0);
}
function renderDataflowLeaflet(mapId, routeIds=[]) {
  const el = document.getElementById(mapId);
  if (!el) return;
  const nodes = (typeof tspHubNodes === 'function' ? tspHubNodes() : [])
    .filter(n => Number.isFinite(Number(n.lat)) && Number.isFinite(Number(n.lon)) &&
      Math.abs(Number(n.lat)) <= 90 && Math.abs(Number(n.lon)) <= 180);
  if (!nodes.length) {
    dataflowMapFallback(mapId, '目前沒有有效 Hub 經緯度。請檢查 PT_HUB → ADDRESS 的 latitude / longitude。');
    return;
  }
  const routeNodes = (routeIds || []).map(id => nodes.find(n => n.id === id)).filter(Boolean);
  const routeOrder = new Map(routeNodes.map((node,index)=>[node.id,index+1]));
  // Keep a usable numbered route even before SA has been run.
  const displayNodes = routeNodes.length ? routeNodes : nodes;
  if (!window.L || typeof L.map !== 'function') {
    dataflowMapFallback(mapId, 'Leaflet 尚未載入。請檢查網絡/CDN，並在 Console 查看錯誤；此圖不會呼叫外部地圖圖磚。');
    return;
  }
  let map = dataflowMaps[mapId];
  if (map) {
    map.remove();
    delete dataflowMaps[mapId];
  }
  el.innerHTML = '<div class="df-map-status" id="'+mapId+'Status">正在載入 OpenStreetMap 底圖……</div>';
  map = L.map(el, {zoomControl:true, preferCanvas:true, scrollWheelZoom:true});
  dataflowMaps[mapId] = map;
  const status = () => document.getElementById(mapId+'Status');
  let tileLoaded = 0, tileErrors = 0;
  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    // Do not suppress Referer: OSM's public tile policy requires a valid one for web pages.
    referrerPolicy:'strict-origin-when-cross-origin',
    updateWhenIdle:true,
    keepBuffer:2
  }).addTo(map);
  tiles.on('tileload',()=>{tileLoaded++; if(status() && tileLoaded>0) status().textContent='OpenStreetMap 底圖已載入；標記數字代表路線到訪次序。';});
  tiles.on('tileerror',()=>{
    tileErrors++;
    if(status()) status().textContent = tileLoaded===0
      ? '底圖圖磚載入失敗（已收到 '+tileErrors+' 次錯誤）。若你以 file:// 開啟，請改用 localhost 或 GitHub Pages；請勿以代理或偽造標頭繞過服務政策。數字標記及路線仍可使用。'
      : '部分底圖圖磚載入失敗；請檢查網絡或服務政策。路線標記仍可使用。';
  });
  const markersById = {};
  const markerBounds = [];
  nodes.forEach(node=>{
    const lat=Number(node.lat), lon=Number(node.lon), order=routeOrder.get(node.id);
    const packages=dataflowPackageCountForHub(node.id);
    const title=`${node.name||node.id} (${node.id}) · ${order?`最佳路線第 ${order} 站`:'未列入目前最佳路線'} · 非已簽收包裹 ${packages} 件`;
    const html=order?`<div class="df-number-marker">${order}</div>`:'<div class="df-number-marker other"></div>';
    const icon=L.divIcon({className:'',html,iconSize:order?[30,30]:[13,13],iconAnchor:order?[15,15]:[6.5,6.5]});
    const marker=L.marker([lat,lon],{icon,title,keyboard:true,alt:title}).addTo(map);
    marker.bindPopup(`<strong>${esc(node.name||node.id)}</strong><br>Hub ID：${esc(node.id)}<br>${order?`最佳路線次序：第 ${order} 站`:'未列入目前最佳路線'}<br>未簽收包裹：${packages} 件`);
    markersById[node.id]=marker;
    markerBounds.push([lat,lon]);
  });
  if (routeNodes.length > 1) {
    const latlngs=routeNodes.map(n=>[Number(n.lat),Number(n.lon)]);
    L.polyline(latlngs,{color:'#ffffff',weight:8,opacity:.9,lineCap:'round',lineJoin:'round'}).addTo(map);
    L.polyline(latlngs,{color:'#0284c7',weight:4,opacity:.95,dashArray:'9 7',lineCap:'round',lineJoin:'round'}).addTo(map);
  }
  const bounds=L.latLngBounds(markerBounds);
  if(bounds.isValid()) map.fitBounds(bounds,{padding:[32,32],maxZoom:12});
  if(!routeNodes.length && status()) status().textContent='已顯示全部 Hub。執行 SA 後會按最佳路線標示數字次序。';
  // Maps created inside hidden tabs need a size refresh after the tab becomes visible.
  requestAnimationFrame(()=>{ if(dataflowMaps[mapId]===map){map.invalidateSize({pan:false});if(bounds.isValid())map.fitBounds(bounds,{padding:[32,32],maxZoom:12});} });
}
function renderTspRoutePackageChart(routeIds) {
  const host = document.getElementById('tspRoutePackages');
  if (!host) return;
  if (!routeIds || !routeIds.length) {
    host.innerHTML = '<div class="alert blue">執行 SA 後會按最佳路線顯示每站包裹量。</div>';
    return;
  }
  const nodes = tspState.nodes || [];
  const items = routeIds.map((id,index) => {
    const node = nodes.find(n=>n.id===id);
    return {id,index,node,count:dataflowPackageCountForHub(id)};
  });
  host.innerHTML = '<div class="route-package-grid">' + items.map(x=>
    `<div class="route-package-item"><div class="route-step">第 ${x.index+1} 站 · ${x.index===0?'起點':x.index===items.length-1?'終點':'途經站'}</div><div class="route-hub">${esc(x.node?.name||x.id)}</div><div class="route-count">${x.count}<span style="font-size:10px"> 件</span></div><div class="dataflow-map-note">${esc(x.id)}</div></div>`
  ).join('') + '</div>';
}
function renderTspVisuals() {
  const ini = tspState.initial, best = tspState.best;
  const host = document.getElementById('tspRouteComparison');
  if (host && ini && best) {
    const max = Math.max(ini.cost,best.cost,.01);
    const improvement = ini.cost ? (ini.cost-best.cost)/ini.cost*100 : 0;
    host.innerHTML = `<div><div style="font-size:10px;font-weight:900">初始路線 · ${ini.cost.toFixed(2)} km</div><div class="route-compare-track"><div class="route-compare-fill" style="width:${Math.min(100,ini.cost/max*100).toFixed(1)}%;background:linear-gradient(90deg,#94a3b8,#64748b)"></div></div></div><div><div style="font-size:10px;font-weight:900">SA 最佳路線 · ${best.cost.toFixed(2)} km</div><div class="route-compare-track"><div class="route-compare-fill" style="width:${Math.min(100,best.cost/max*100).toFixed(1)}%"></div></div><div class="dataflow-map-note">相對距離改善：${improvement.toFixed(2)}%</div></div>`;
  }
  renderTspRoutePackageChart(best?.route || []);
  renderDataflowLeaflet('tspMap',best?.route || []);
}
function refreshDataflowMaps() {
  renderDelivererVisuals();
  renderDataflowLeaflet('delivererMap');
  renderDataflowLeaflet('tspMap',tspState.best?.route || []);
  renderTspRoutePackageChart(tspState.best?.route || []);
}
function renderDeliverer(){let ops=opRows().filter(x=>{let a=find('ADDRESS','address_id',x.dest_address_id);return a?.hub_id===roleState.hubId||['運輸中','二次派送中'].includes(x.status)});document.getElementById('deliveryMetrics').innerHTML=[['待處理',ops.filter(x=>x.status!=='已簽收').length+' 件','ORDER_PRODUCTS'],['運輸中',ops.filter(x=>x.status==='運輸中').length+' 件','SQL 2'],['待取件',ops.filter(x=>x.status==='待取件').length+' 件','PICKUP_POINT'],['容量警告',DATA.PICKUP_POINT.filter(p=>p.max_capa-p.current_occ<10).length+' 個','SQL 4 / 8']].map(x=>`<div class="card metric"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="sub">${x[2]}</div></div>`).join('');document.getElementById('hubSelect').innerHTML=rows('PT_HUB').map(h=>`<option value="${h.hub_id}" ${h.hub_id===roleState.hubId?'selected':''}>${esc(h.name)}</option>`).join('');document.getElementById('hubSelect').onchange=function(){roleState.hubId=this.value;renderDeliverer()};document.getElementById('deliveryTasks').innerHTML=ops.slice(0,50).map(x=>`<tr><td>${x.op_id}</td><td>${esc(x.product?.name||x.product_id)}</td><td>${esc(address(x.dest_address_id))}</td><td>${badge(x.status)}</td><td><select ${x.status==='待付款'?'disabled title="付款完成前不可派送"':''} onchange="setOpStatus('${x.op_id}',this.value)">${statusFlow.map(st=>`<option ${st===x.status?'selected':''}>${st}</option>`).join('')}</select>${x.status==='待付款'?'<div class="tsp-mini">付款完成前不可派送</div>':''}</td><td><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><span class="time-badge" data-countdown-op="${x.op_id}">${remainingTime(x)}</span><button class="btn" data-countdown-start="${x.op_id}" onclick="startCountdown('${x.op_id}')" ${x.status==='已簽收'||x.status==='待付款'?'disabled':''}>${x.status==='已簽收'?'已完成':x.status==='待付款'?'等待付款':'開始倒數'}</button></div></td></tr>`).join('');renderCapacity();renderBundles();renderDispatch();renderRouteScenarios();renderDelivererVisuals();renderDataflowLeaflet('delivererMap');document.getElementById('delivererSqlPanel').innerHTML=[2,4,5,7,8,9,10].map(n=>`<button class="chip" onclick="renderRoleQuery(${n},'delivererSqlResult')">SQL ${n} · ${queries[n-1][0]}</button>`).join('')+`<div id="delivererSqlResult" style="margin-top:10px"></div>`;renderRoleQuery(10,'delivererSqlResult')}
function setOpStatus(opid,status){
  const x=find('ORDER_PRODUCTS','op_id',opid);if(!x)return;
  const allowed={'待付款':[],'待發貨':['已攬收'],'已攬收':['待轉運','運輸中'],'待轉運':['運輸中','二次派送中'],'運輸中':['二次派送中','待取件','已簽收'],'二次派送中':['運輸中','待取件','已簽收'],'待取件':['已簽收','運輸中'],'已簽收':[]};
  if(status!==x.status&&!(allowed[x.status]||[]).includes(status)){toast(`不允許狀態轉換：${x.status} → ${status}`);renderAll();return}
  const point=rows('PICKUP_POINT').find(p=>p.address_id===x.dest_address_id),volume=(x.product?.volume_unit||0)*Number(x.quantity||0);
  if(status==='待取件'&&!point){toast('送貨上門包裹不可轉為「待取件」');renderAll();return}
  if(point&&status==='待取件'&&x.status!=='待取件'&&point.current_occ+expectedPickupVolume(point.address_id,opid)+volume>point.max_capa){toast('自提點容量不足，不能將包裹轉為待取件');renderAll();return}
  const old=x.status;
  if(point&&old==='待取件'&&status!=='待取件')point.current_occ=Math.max(0,roundMoney(point.current_occ-volume));
  if(point&&old!=='待取件'&&status==='待取件')point.current_occ=roundMoney(point.current_occ+volume);
  x.status=status;x.update_time=new Date().toLocaleString('en-GB');delete countdownState[opid];
  const orderLines=rows('ORDER_PRODUCTS').filter(r=>r.order_id===x.order_id),order=find('ORDERS','order_id',x.order_id);
  if(order){if(orderLines.every(r=>r.status==='已簽收'))order.order_status='已完成';else if(orderLines.some(r=>['運輸中','二次派送中','待取件','已簽收'].includes(r.status)))order.order_status='部分發貨';else order.order_status='處理中'}
  renderAll();toast(`${opid}：${old} → ${status}`);
}
function renderRoleQuery(n,target){let q=queries[n-1];if(!q)return;let el=document.getElementById(target);if(!el)return;let sql=q[2];if(current.role==='shop'&&n===3)sql=sql.replace('FROM PRODUCT AS p INNER JOIN ORDER_PRODUCTS AS op ON p.product_id=op.product_id','FROM PRODUCT AS p INNER JOIN ORDER_PRODUCTS AS op ON p.product_id=op.product_id').replace('GROUP BY p.product_id,p.name','WHERE p.shop_id=\''+roleState.shopId+'\' GROUP BY p.product_id,p.name');if(n===10)sql+='\\n\\n-- 路徑最佳化（Dijkstra / TSP + SA）由前端模擬層執行，並非此 SQL 直接執行。';el.innerHTML=`<div class="sqlbox">${esc(sql)}</div><div style="margin-top:9px">${queryResultHTML(n)}</div>`}
function queryResultHTML(n){
 if(n===1)return resultTable(['ORDER_ID','OP_ID','STATUS'],opRows().filter(x=>x.order?.user_id===current.id&&x.status!=='已簽收').map(x=>`<tr><td>${x.order_id}</td><td>${x.op_id}</td><td>${badge(x.status)}</td></tr>`).join(''));
 if(n===2)return resultTable(['OP_ID','DEST','PRODUCT'],opRows().filter(x=>x.status==='運輸中').map(x=>`<tr><td>${x.op_id}</td><td>${esc(address(x.dest_address_id))}</td><td>${esc(x.product?.name)}</td></tr>`).join(''));
 if(n===3){let data=opRows().filter(x=>current.role!=='shop'||x.product?.shop_id===roleState.shopId).reduce((m,x)=>(m[x.product_id]??={q:0,r:0},m[x.product_id].q+=x.quantity,m[x.product_id].r+=x.quantity*x.sale_price,m),{});return resultTable(['PRODUCT','SOLD','REVENUE'],Object.entries(data).sort((a,b)=>b[1].r-a[1].r).map(([id,v])=>`<tr><td>${esc(prod(id)?.name)}</td><td>${v.q}</td><td>${money(v.r)}</td></tr>`).join(''))}
 if(n===4)return resultTable(['PT_ID','NAME','REMAINING m³','CAPACITY STATUS'],rows('PICKUP_POINT').map(p=>{let rem=p.max_capa-p.current_occ;return `<tr><td>${p.pt_id}</td><td>${esc(p.name)}</td><td>${rem.toFixed(2)}</td><td>${rem<=0?'<span class="badge b-red">FULL</span>':rem<Math.max(1,p.max_capa*.15)?'<span class="badge b-yellow">NEAR FULL</span>':'<span class="badge b-green">SAFE</span>'}</td></tr>`}).join(''));
 if(n===5)return resultTable(['OP_ID','DEST','MODE'],opRows().map(x=>`<tr><td>${x.op_id}</td><td>${esc(address(x.dest_address_id))}</td><td>${find('PICKUP_POINT','address_id',x.dest_address_id)?'自提點自取':'送貨上門'}</td></tr>`).join(''));
 if(n===6)return resultTable(['OP_ID','STATUS','VALUE'],opRows().filter(x=>x.status!=='已簽收'&&x.sale_price*x.quantity>5000).map(x=>`<tr><td>${x.op_id}</td><td>${badge(x.status)}</td><td>${money(x.sale_price*x.quantity)}</td></tr>`).join(''));
 if(n===7)return resultTable(['DEST','COUNT','OP_IDS'],Object.entries(opRows().filter(x=>x.status==='待轉運').reduce((g,x)=>(g[x.dest_address_id]??=[],g[x.dest_address_id].push(x),g),{})).filter(([,v])=>v.length>=2).map(([d,v])=>`<tr><td>${esc(address(d))}</td><td>${v.length}</td><td>${v.map(x=>x.op_id).join(', ')}</td></tr>`).join(''));
 if(n===8)return resultTable(['PT_ID','REMAINING','EXPECTED','STATUS'],rows('PICKUP_POINT').map(p=>{let rem=p.max_capa-p.current_occ,e=expectedPickupVolume(p.address_id);return `<tr><td>${p.pt_id}</td><td>${rem.toFixed(2)}</td><td>${e.toFixed(2)}</td><td>${rem<=0||e>rem?'<span class="badge b-red">FULL WARNING</span>':rem-e<Math.max(1,p.max_capa*.15)?'<span class="badge b-yellow">NEAR FULL</span>':'<span class="badge b-green">SAFE</span>'}</td></tr>`}).join(''));
 if(n===9){let groups={};opRows().filter(x=>x.status==='二次派送中').forEach(x=>{let uid=x.order?.user_id||'UNKNOWN',key=x.dest_address_id+'|'+uid;(groups[key]??=[]).push(x)});return resultTable(['DEST','RECEIVER','PHONE','PARCEL LINES','VALUE'],Object.entries(groups).map(([key,v])=>{let [d,uid]=key.split('|'),u=user(uid);return `<tr><td>${esc(address(d))}</td><td>${esc(u?.name||'未知收件人')}</td><td>${esc(u?.phone_no||'—')}</td><td>${v.length}</td><td>${money(v.reduce((sum,x)=>sum+x.sale_price*x.quantity,0))}</td></tr>`}).join(''))}
 if(n===10)return resultTable(['HUB','ADDRESS','LATITUDE','LONGITUDE','ACTIVE PARCELS'],rows('PT_HUB').map(h=>{let a=find('ADDRESS','address_id',h.address_id),count=opRows().filter(x=>x.status!=='已簽收'&&find('ADDRESS','address_id',x.dest_address_id)?.hub_id===h.hub_id).length;return `<tr><td>${esc(h.name)}</td><td>${esc(a?.full_address||h.address_id)}</td><td>${Number(a?.latitude||0).toFixed(4)}</td><td>${Number(a?.longitude||0).toFixed(4)}</td><td>${count}</td></tr>`}).join(''));
 return resultTable(['RESULT'], '');
}
function renderRouteScenarios(){let scenarios=[['高峰時段','time','按包裹負載套用示範延誤權重；並非真實交通資料'],['高貨量','load','優先處理包裹量較高目的地'],['跨區集運','distance','按距離成本進行 Dijkstra']];document.getElementById('routeScenario').innerHTML=scenarios.map((x,i)=>`<div class="route-choice ${i===0?'active':''}" onclick="selectRouteScenario('${x[1]}',this)"><b>${x[0]}</b><div style="font-size:9px;color:#64748b;margin-top:4px">${x[2]}</div></div>`).join('');window.routeScenario='time';runDispatchAlgorithm(false)}
function selectRouteScenario(s,el){window.routeScenario=s;document.querySelectorAll('.route-choice').forEach(x=>x.classList.remove('active'));el.classList.add('active');runDispatchAlgorithm(false)}
function runDispatchAlgorithm(show=true){let start=roleState.hubId,targets=rows('PT_HUB').filter(h=>h.hub_id!==start);let base=dijkstra(start,targets.map(h=>h.hub_id));let out=base.map(r=>{let count=opRows().filter(x=>x.status!=='已簽收'&&find('ADDRESS','address_id',x.dest_address_id)?.hub_id===r.target).length;return {...r,count,score:window.routeScenario==='load'?(r.distance/Math.max(count,1)):window.routeScenario==='time'?(r.distance*(1+Math.min(count,10)*0.025)):r.distance}}).filter(r=>r.count>0).sort((a,b)=>a.score-b.score);document.getElementById('routePanel').innerHTML=`<div class="alert blue"><b>SQL 10 前置：</b>先按目的地、status、latitude / longitude 篩選可用 Hub，再以 Dijkstra 計算加權圖；以下結果會因調度情境改變。距離為座標估算，不是真實道路導航。</div><div class="tablewrap" style="margin-top:10px"><table class="table"><thead><tr><th>派單順序</th><th>目的地 Hub</th><th>估算距離 km</th><th>包裹量</th><th>路徑</th><th>調度分數</th></tr></thead><tbody>${out.slice(0,8).map((r,i)=>`<tr><td><b>${i+1}</b></td><td>${esc(find('PT_HUB','hub_id',r.target)?.name||r.target)}</td><td>${r.distance.toFixed(2)}</td><td>${r.count}</td><td>${r.path.join(' → ')}</td><td>${r.score.toFixed(2)}</td></tr>`).join('')}</tbody></table></div><div class="grid g3" style="margin-top:10px">${out.slice(0,3).map((r,i)=>`<div class="card"><b>STOP ${i+1}</b><div style="font-size:12px;font-weight:950;margin-top:5px">${esc(find('PT_HUB','hub_id',r.target)?.name||r.target)}</div><div style="font-size:9px;color:#64748b;margin-top:4px">${r.distance.toFixed(2)} km · ${r.count} 件 · ${r.score.toFixed(2)} score</div></div>`).join('')}</div>`;if(show)toast('派單路徑已重新演算')}
function renderCapacity(){document.getElementById('capacityPanel').innerHTML=rows('PICKUP_POINT').map(p=>{let expected=expectedPickupVolume(p.address_id),rem=p.max_capa-p.current_occ,w=rem<=0||expected>rem;return `<div style="padding:9px 0;border-bottom:1px solid #eef2f6"><div style="display:flex;justify-content:space-between"><b>${esc(p.name)}</b>${w?'<span class="badge b-red">FULL / OVERFLOW</span>':rem<Math.max(1,p.max_capa*.15)?'<span class="badge b-yellow">NEAR FULL</span>':'<span class="badge b-green">SAFE</span>'}</div><div style="font-size:9px;color:#64748b;margin:4px 0">剩餘 ${rem.toFixed(2)} m³ · 預估 ${expected.toFixed(2)} m³</div><div class="progress"><i style="width:${Math.min(100,p.max_capa>0?(p.current_occ+expected)/p.max_capa*100:100)}%"></i></div></div>`}).join('')}
function renderBundles(){let g={};opRows().filter(x=>x.status==='待轉運').forEach(x=>{let a=find('ADDRESS','address_id',x.dest_address_id);if(a?.hub_id===roleState.hubId)(g[x.dest_address_id]??=[]).push(x)});let groups=Object.entries(g).filter(([,v])=>v.length>=2);document.getElementById('bundlePanel').innerHTML=groups.map(([d,v])=>`<div class="alert blue" style="margin-bottom:7px"><b>${esc(address(d))}</b><br>${v.length} 件：${v.map(x=>x.op_id).join(' · ')}</div>`).join('')||'<div class="alert green">沒有符合併單條件的目的地。</div>'}
function renderDispatch(){let g={};opRows().filter(x=>x.status==='二次派送中').forEach(x=>{let a=find('ADDRESS','address_id',x.dest_address_id);if(a?.hub_id===roleState.hubId)(g[x.dest_address_id]??=[]).push(x)});document.getElementById('dispatchPanel').innerHTML=Object.entries(g).map(([d,v])=>{let u=user(v[0].order?.user_id);return `<div class="alert blue" style="margin-bottom:7px"><b>${esc(address(d))}</b><br>${esc(u?.name||'未知')} · ${esc(u?.phone_no||'—')} · ${v.length} 件 · ${money(v.reduce((s,x)=>s+x.sale_price*x.quantity,0))}</div>`}).join('')||'<div class="alert blue">目前沒有二次派送中的包裹。</div>'}
function hav(a,b){const R=111.2,dx=(Number(b.longitude)-Number(a.longitude))*Math.cos((Number(a.latitude)+Number(b.latitude))*Math.PI/360),dy=Number(b.latitude)-Number(a.latitude);return R*Math.sqrt(dx*dx+dy*dy)}

/* ===== TSP + Simulated Annealing Extension ===== */
let tspState={matrix:{},nodes:[],edges:[],initial:null,best:null,logs:[],segments:[]};

function switchDelivererSubpage(page,btn){
  document.getElementById('delivererMainContent').classList.toggle('hidden',page!=='main');
  document.getElementById('delivererTspContent').classList.toggle('hidden',page!=='tsp');
  document.querySelectorAll('#delivererSubnav button').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  if(page==='tsp'){initTspPage();requestAnimationFrame(()=>{renderDataflowLeaflet('tspMap',tspState.best?.route||[]);renderTspRoutePackageChart(tspState.best?.route||[])})}
}

function tspHubNodes(){
  return rows('PT_HUB').map(h=>{
    const a=find('ADDRESS','address_id',h.address_id);
    return a?{id:h.hub_id,name:h.name,address:h.full_address||h.address_id,lat:Number(a.latitude),lon:Number(a.longitude)}:null;
  }).filter(Boolean);
}
function tspGeo(a,b){
  // Equirectangular approximation in kilometres.
  // 1 degree latitude/longitude is converted using R = 111.2 km.
  const R=111.2;
  const dx=(b.lon-a.lon)*Math.cos((a.lat+b.lat)*Math.PI/360);
  const dy=b.lat-a.lat;
  return R*Math.sqrt(dx*dx+dy*dy);
}
function buildTspRoadGraph(nodes){
  /*
    Temporary road graph for the SBA simulation.

    Step 1: build a connected backbone using a Prim-style MST.
    Step 2: add up to 3 nearest-neighbour links per hub.

    Every temporary road is explicitly stored in BOTH directions,
    so Dijkstra can travel between any two hubs in the connected graph.

    Production Access version:
    replace this temporary graph with ROAD_NETWORK records.
  */
  if(nodes.length<=1) return [];

  const edges=[];
  const hasDirected=(from,to)=>edges.some(e=>e.from===from&&e.to===to);

  const addUndirected=(a,b,d)=>{
    const time=d/0.55*60;
    if(!hasDirected(a.id,b.id))
      edges.push({from:a.id,to:b.id,distance:d,time});
    if(!hasDirected(b.id,a.id))
      edges.push({from:b.id,to:a.id,distance:d,time});
  };

  // 1. Prim-style connected backbone.
  const used=new Set([nodes[0].id]);
  while(used.size<nodes.length){
    let best=null;
    for(const a of nodes){
      if(!used.has(a.id)) continue;
      for(const b of nodes){
        if(used.has(b.id)) continue;
        const d=tspGeo(a,b);
        if(!best || d<best.d) best={a,b,d};
      }
    }
    if(!best) break;
    addUndirected(best.a,best.b,best.d);
    used.add(best.b.id);
  }

  // 2. Extra nearest-neighbour roads create alternative Dijkstra paths.
  for(const a of nodes){
    const near=nodes
      .filter(b=>b.id!==a.id)
      .map(b=>({b,d:tspGeo(a,b)}))
      .sort((x,y)=>x.d-y.d)
      .slice(0,3);
    for(const x of near) addUndirected(a,x.b,x.d);
  }

  return edges;
}

function tspDijkstra(startId,nodes,edges){
  const dist={},prev={},q=new Set(nodes.map(n=>n.id));
  nodes.forEach(n=>dist[n.id]=Infinity); dist[startId]=0;
  while(q.size){
    let u=[...q].sort((a,b)=>dist[a]-dist[b])[0];
    q.delete(u);
    if(!Number.isFinite(dist[u])) break;
    for(const e of edges.filter(e=>e.from===u)){
      if(!q.has(e.to)) continue;
      const nd=dist[u]+e.distance;
      if(nd<dist[e.to]){dist[e.to]=nd;prev[e.to]=u;}
    }
  }
  return {dist,prev};
}
function tspPath(prev,start,target){
  const p=[]; let x=target;
  while(x!==undefined){p.unshift(x);if(x===start)break;x=prev[x];}
  return p.length&&p[0]===start?p:[];
}
function buildTspMatrix(nodes,edges){
  const m={};
  for(const s of nodes){
    const d=tspDijkstra(s.id,nodes,edges);
    m[s.id]={};
    for(const t of nodes)m[s.id][t.id]=d.dist[t.id];
  }
  return m;
}
function routeCost(route,m){
  let c=0;
  for(let i=0;i<route.length-1;i++) c+=m[route[i]]?.[route[i+1]]??Infinity;
  return c;
}
function twoOptCandidate(route){
  if(route.length<=3)return route.slice();
  let a=1+Math.floor(Math.random()*(route.length-2));
  let b=1+Math.floor(Math.random()*(route.length-2));
  if(a>b)[a,b]=[b,a];
  if(a===b){b=Math.min(route.length-2,a+1);if(a===b)return route.slice();}
  const r=route.slice();
  const mid=r.slice(a,b+1).reverse();
  r.splice(a,b-a+1,...mid);
  return r;
}
function acceptSA(delta,temp){
  if(delta<=0)return true;
  return Math.random()<Math.exp(-delta/Math.max(temp,1e-12));
}
function routePills(route){
  return `<div class="tsp-route">${route.map((id,i)=>{
    const n=tspState.nodes.find(x=>x.id===id);
    return (i?'<span class="tsp-arrow">→</span>':'')+
      `<span class="tsp-node">${i+1}. ${esc(n?.name||id)}</span>`;
  }).join('')}</div>`;
}
function renderTspControls(){
  const ns=tspHubNodes();
  const start=document.getElementById('tspStart'),end=document.getElementById('tspEnd');
  start.innerHTML=ns.map(n=>`<option value="${n.id}">${esc(n.name)} · ${n.id}</option>`).join('');
  end.innerHTML=ns.map(n=>`<option value="${n.id}">${esc(n.name)} · ${n.id}</option>`).join('');
  if(roleState.hubId&&ns.some(n=>n.id===roleState.hubId))start.value=roleState.hubId;
  if(ns.length>1)end.value=ns[ns.length-1].id;
  const defaults=ns.filter(n=>n.id!==start.value&&n.id!==end.value);
  document.getElementById('tspWaypointChoices').innerHTML=defaults.map(n=>`<label class="chip" style="display:inline-flex;align-items:center;gap:6px"><input type="checkbox" value="${n.id}" style="width:auto" checked> ${esc(n.name)}</label>`).join('');
  start.onchange=()=>renderTspControlsKeepEnd();
  end.onchange=()=>renderTspControlsKeepEnd();
}
function renderTspControlsKeepEnd(){
  const ns=tspHubNodes(),s=document.getElementById('tspStart').value,e=document.getElementById('tspEnd').value;
  document.getElementById('tspWaypointChoices').innerHTML=ns.filter(n=>n.id!==s&&n.id!==e).map(n=>`<label class="chip" style="display:inline-flex;align-items:center;gap:6px"><input type="checkbox" value="${n.id}" style="width:auto" checked> ${esc(n.name)}</label>`).join('');
}
function initTspPage(){
  renderTspControls();
  const ns=tspHubNodes(), edges=buildTspRoadGraph(ns);
  tspState.nodes=ns;tspState.edges=edges;tspState.matrix=buildTspMatrix(ns,edges);
  renderTspTempTables();renderTspMatrix();
  document.getElementById('tspKpi').innerHTML='<div class="card"><div class="tsp-mini">Initial Cost</div><div class="value">—</div></div><div class="card"><div class="tsp-mini">Best Cost</div><div class="value">—</div></div><div class="card"><div class="tsp-mini">Improvement</div><div class="value">—</div></div><div class="card"><div class="tsp-mini">Iterations</div><div class="value">—</div></div><div class="card"><div class="tsp-mini">Status</div><div class="value" style="font-size:14px">Ready</div></div>';
  document.getElementById('tspInitialRoute').innerHTML='<div class="tsp-mini">按「執行 SA 最佳化」開始。</div>';
  document.getElementById('tspBestRoute').innerHTML='<div class="tsp-mini">等待演算結果。</div>';
  document.getElementById('tspLog').innerHTML='<div class="tsp-mini">每 250 iterations 記錄一次狀態，避免測試頁過度膨脹。</div>';
  document.getElementById('tspReconstruction').innerHTML='<div class="tsp-mini">完成 TSP 後會自動顯示每一段 Dijkstra path。</div>';
}
function renderTspTempTables(){
  document.getElementById('tspNodeTable').innerHTML=resultTable(['NODE','NAME','LAT','LON'],tspState.nodes.map(n=>`<tr><td>${n.id}</td><td>${esc(n.name)}</td><td>${n.lat.toFixed(5)}</td><td>${n.lon.toFixed(5)}</td></tr>`).join(''));
  document.getElementById('tspEdgeTable').innerHTML=resultTable(['FROM','TO','DIST km','TIME min'],tspState.edges.slice(0,60).map(e=>`<tr><td>${e.from}</td><td>${e.to}</td><td>${e.distance.toFixed(2)}</td><td>${e.time.toFixed(1)}</td></tr>`).join(''));
}
function renderTspMatrix(){
  const ns=tspState.nodes;
  document.getElementById('tspMatrix').innerHTML=`<div class="tablewrap"><table class="table tsp-matrix"><thead><tr><th>FROM \\ TO</th>${ns.map(n=>`<th>${esc(n.id)}</th>`).join('')}</tr></thead><tbody>${ns.map(a=>`<tr><th>${esc(a.id)}</th>${ns.map(b=>{const v=tspState.matrix[a.id]?.[b.id];return `<td>${Number.isFinite(v)?v.toFixed(2):'∞'}</td>`}).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function runTspSA(){
  const start=document.getElementById('tspStart').value,end=document.getElementById('tspEnd').value;
  const mids=[...document.querySelectorAll('#tspWaypointChoices input:checked')].map(x=>x.value);
  if(!start||!end||start===end){toast('起點與終點必須不同');return;}
  const route=[start,...mids,end],m=tspState.matrix;
  const unreachable=route.filter((id,i)=>i&&(!Number.isFinite(m[route[i-1]]?.[id])));
  if(unreachable.length){
    toast('目前路網仍有不可達節點，請查看 Dijkstra 距離矩陣中的 ∞。');
    return;
  }
  let current=route.slice(),currentCost=routeCost(current,m),best=current.slice(),bestCost=currentCost;
  let T=Math.max(1,Number(document.getElementById('saTemp').value)||1000);
  const alpha=Math.min(.9999,Math.max(.8,Number(document.getElementById('saAlpha').value)||.995));
  const maxIter=10000, logs=[];
  for(let iter=1;iter<=maxIter;iter++){
    const cand=twoOptCandidate(current),cc=routeCost(cand,m),delta=cc-currentCost;
    const accepted=acceptSA(delta,T);
    if(accepted){current=cand;currentCost=cc;}
    if(currentCost<bestCost){best=current.slice();bestCost=currentCost;}
    if(iter===1||iter%250===0||iter===maxIter)logs.push({iter,T,current:currentCost,best:bestCost,delta,accepted});
    T*=alpha;
    if(T<.01)break;
  }
  tspState.initial={route,cost:routeCost(route,m)};tspState.best={route:best,cost:bestCost};tspState.logs=logs;
  renderTspResult(alpha);
}
function renderTspResult(alpha){
  const ini=tspState.initial,b=tspState.best,imp=ini.cost?((ini.cost-b.cost)/ini.cost*100):0;
  document.getElementById('tspKpi').innerHTML=[
    ['Initial Cost',ini.cost.toFixed(2)+' km','TSP 初始路線'],
    ['Best Cost',b.cost.toFixed(2)+' km','SA + 2-opt'],
    ['Improvement',imp.toFixed(2)+' %','相對初始路線'],
    ['Iterations',tspState.logs.at(-1)?.iter||0,'實際迭代次數'],
    ['Cooling Rate',alpha.toFixed(3),'T ← T × α']
  ].map(x=>`<div class="card"><div class="tsp-mini">${x[0]}</div><div class="value">${x[1]}</div><div class="tsp-mini">${x[2]}</div></div>`).join('');
  document.getElementById('tspInitialRoute').innerHTML=`${routePills(ini.route)}<div class="tsp-mini" style="margin-top:9px">Cost = ${ini.cost.toFixed(2)} km</div>`;
  document.getElementById('tspBestRoute').innerHTML=`<div class="tsp-best">${routePills(b.route)}<div class="tsp-mini" style="margin-top:9px"><b>Best Cost = ${b.cost.toFixed(2)} km</b> · Improvement ${imp.toFixed(2)}%</div></div>`;
  document.getElementById('tspLog').innerHTML=resultTable(['ITER','TEMP','CURRENT','BEST','Δ COST','ACCEPT'],tspState.logs.map(x=>`<tr><td>${x.iter}</td><td>${x.T.toFixed(4)}</td><td>${x.current.toFixed(2)}</td><td>${x.best.toFixed(2)}</td><td>${x.delta.toFixed(2)}</td><td>${x.accepted?'<span class="badge b-green">YES</span>':'<span class="badge b-gray">NO</span>'}</td></tr>`).join(''));
  renderTspReconstruction();
  renderTspVisuals();
  toast('TSP + Simulated Annealing 已完成');
}
function renderTspReconstruction(){
  const r=tspState.best.route, ns=tspState.nodes, es=tspState.edges, out=[];
  for(let i=0;i<r.length-1;i++){
    const d=tspDijkstra(r[i],ns,es),path=tspPath(d.prev,r[i],r[i+1]),dist=d.dist[r[i+1]];
    out.push(`<div class="tsp-step"><b>Segment ${i+1}</b> · ${esc(ns.find(n=>n.id===r[i])?.name||r[i])} → ${esc(ns.find(n=>n.id===r[i+1])?.name||r[i+1])}<br><span class="mono">${path.length?path.join(' → '):'UNREACHABLE'}</span><br><span class="tsp-mini">${Number.isFinite(dist)?dist.toFixed(2)+' km shortest path':'不可達'}</span></div>`);
  }
  document.getElementById('tspReconstruction').innerHTML=out.join('')+`<div class="alert green" style="margin-top:10px"><b>Final Route：</b>${r.join(' → ')}<br><span style="font-size:9px">TSP 負責「次序」，Dijkstra 負責「道路路徑」。兩者職責分離。</span></div>`;
}

/* Keep the existing renderDeliverer behaviour, but initialise the TSP page lazily. */

function dijkstra(startId,targets){let hubs=rows('PT_HUB').map(h=>({...h,a:find('ADDRESS','address_id',h.address_id)})).filter(x=>x.a),dist={},prev={},q=new Set(hubs.map(h=>h.hub_id));hubs.forEach(h=>dist[h.hub_id]=Infinity);dist[startId]=0;while(q.size){let u=[...q].sort((a,b)=>dist[a]-dist[b])[0];q.delete(u);if(dist[u]===Infinity)break;let hu=hubs.find(h=>h.hub_id===u);for(let v of q){let hv=hubs.find(h=>h.hub_id===v);let w=hav(hu.a,hv.a);if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;prev[v]=u}}}return targets.map(t=>{let path=[],x=t;while(x){path.unshift(x);if(x===startId)break;x=prev[x];if(x===undefined)break}return {target:t,distance:dist[t],path}})}
function runDijkstra(show=true){let start=roleState.hubId, targets=rows('PT_HUB').filter(h=>h.hub_id!==start).slice(0,7).map(h=>h.hub_id),out=dijkstra(start,targets).filter(x=>Number.isFinite(x.distance)).sort((a,b)=>a.distance-b.distance);document.getElementById('routePanel').innerHTML=`<div class="alert blue" style="margin-bottom:10px"><b>演算流程：</b>目前 HUB 座標 → 建立加權圖 → Dijkstra relaxation → parent 重構路徑 → 生成派車 route table。距離是由經緯度估算的 km，並非真實道路距離。</div><div class="tablewrap"><table class="table"><thead><tr><th>Stop</th><th>目的 Hub</th><th>Shortest km</th><th>Parent Path</th><th>可處理包裹</th></tr></thead><tbody>${out.map((r,i)=>{let h=find('PT_HUB','hub_id',r.target),n=opRows().filter(x=>x.status!=='已簽收'&&find('ADDRESS','address_id',x.dest_address_id)?.hub_id===r.target).length;return `<tr><td><b>${i+1}</b></td><td>${esc(h?.name||r.target)}<br><span class="mono">${r.target}</span></td><td>${r.distance.toFixed(2)}</td><td>${r.path.join(' → ')}</td><td>${n}</td></tr>`}).join('')}</tbody></table></div><div class="grid g3" style="margin-top:10px">${out.slice(0,3).map((r,i)=>`<div class="card" style="padding:13px"><div class="route-step"><span class="route-num">${i+1}</span><div><b style="font-size:10px">${esc(find('PT_HUB','hub_id',r.target)?.name||r.target)}</b><div style="font-size:9px;color:#64748b">${r.distance.toFixed(2)} km shortest path</div></div></div></div>`).join('')}</div>`;if(show)toast('Dijkstra 路徑已重新計算')}
const queries=[
['活躍訂單','INNER JOIN + WHERE',`SELECT o.order_id, o.order_time, op.status FROM ORDERS AS o INNER JOIN ORDER_PRODUCTS AS op ON o.order_id=op.order_id WHERE o.user_id='u00001' AND op.status<>'已簽收';`],
['在途包裹','INNER JOIN + WHERE',`SELECT op.op_id, a.full_address AS final_destination FROM ORDER_PRODUCTS AS op INNER JOIN ADDRESS AS a ON op.dest_address_id=a.address_id WHERE op.status='運輸中';`],
['熱銷商品與營收','SUM + GROUP BY',`SELECT p.product_id,p.name,SUM(op.quantity) AS total_sold,SUM(op.quantity*op.sale_price) AS total_revenue FROM PRODUCT AS p INNER JOIN ORDER_PRODUCTS AS op ON p.product_id=op.product_id GROUP BY p.product_id,p.name ORDER BY SUM(op.quantity*op.sale_price) DESC;`],
['自提點負載','計算欄位 + WHERE',`SELECT pt_id,name,(max_capa-current_occ) AS remaining_space FROM PICKUP_POINT WHERE (max_capa-current_occ)<10;`],
['派送模式','LEFT JOIN + IIF',`SELECT op.op_id,op.dest_address_id,IIF(pp.pt_id IS NULL,'送貨上門','自提點自取') AS delivery_mode FROM ORDER_PRODUCTS AS op LEFT JOIN PICKUP_POINT AS pp ON op.dest_address_id=pp.address_id;`],
['高價值未簽收','計算欄位 + WHERE',`SELECT op.op_id,op.status,(op.sale_price*op.quantity) AS parcel_value FROM ORDER_PRODUCTS AS op WHERE op.status<>'已簽收' AND (op.sale_price*op.quantity)>5000;`],
['Hub 併單','GROUP BY + HAVING',`SELECT dest_address_id,COUNT(op_id) AS parcel_count FROM ORDER_PRODUCTS WHERE status='待轉運' GROUP BY dest_address_id HAVING COUNT(op_id)>=2;`],
['容量預警','SUM + IIF + GROUP BY（示意 SQL）',`SELECT pp.pt_id, pp.name, (pp.max_capa-pp.current_occ) AS remaining_space, SUM(p.volume_unit*op.quantity) AS expected_volume, IIF(SUM(p.volume_unit*op.quantity)>(pp.max_capa-pp.current_occ),'FULL WARNING','SAFE') AS capacity_status FROM (PICKUP_POINT AS pp INNER JOIN ADDRESS AS a ON pp.address_id=a.address_id) INNER JOIN (PRODUCT AS p INNER JOIN ORDER_PRODUCTS AS op ON p.product_id=op.product_id) ON op.dest_address_id=pp.address_id WHERE op.status IN ('待轉運','二次派送中') GROUP BY pp.pt_id, pp.name, pp.max_capa, pp.current_occ;`],
['派車總表','多表 JOIN + GROUP BY（示意 SQL）',`SELECT a.full_address, u.user_id, u.name, u.phone_no, COUNT(op.op_id) AS parcel_lines, SUM(op.sale_price*op.quantity) AS total_value FROM (ORDER_PRODUCTS AS op INNER JOIN ORDERS AS o ON op.order_id=o.order_id) INNER JOIN (ADDRESS AS a INNER JOIN USER AS u ON a.user_id=u.user_id) ON op.dest_address_id=a.address_id WHERE op.status='二次派送中' GROUP BY a.full_address, u.user_id, u.name, u.phone_no;`],
['物流路線規劃','座標篩選 + ORDER BY（SQL 示意；Dijkstra 在應用層執行）',`SELECT hub.hub_id, hub.name AS hub_route, a_hub.full_address AS hub_address, a_hub.latitude, a_hub.longitude, COUNT(op.op_id) AS parcels_to_collect FROM (PT_HUB AS hub INNER JOIN ADDRESS AS a_hub ON hub.address_id=a_hub.address_id) LEFT JOIN ORDER_PRODUCTS AS op ON op.dest_address_id=a_hub.address_id AND op.status<>'已簽收' GROUP BY hub.hub_id, hub.name, a_hub.full_address, a_hub.latitude, a_hub.longitude ORDER BY a_hub.latitude, a_hub.longitude;`]
];
function resultTable(h,rs){return `<div class="tablewrap"><table class="table"><thead><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rs||`<tr><td colspan="${h.length}" style="color:#94a3b8">沒有符合條件的資料。</td></tr>`}</tbody></table></div>`}
function openProductDetail(id){let p=prod(id),u=user(current.id),rate=discountRate(u?.member_lvl);document.getElementById('detailTitle').textContent=p.name;document.getElementById('productDetailBody').innerHTML=`<div class="grid g2"><div><div class="pcover" style="height:220px;border-radius:18px">📦</div></div><div><div class="pmeta">${esc(shop(p.shop_id)?.name||'')}</div><h2 style="margin:5px 0">${esc(p.name)}</h2><div class="price">${money(p.price*rate)}</div><div class="pmeta" style="margin-top:8px">原價 ${money(p.price)} · 庫存 ${p.stock} · 體積 ${p.volume_unit} m³</div><div class="review"><span class="stars">★★★★★</span> <b>${(shop(p.shop_id)?.rating||4.8).toFixed(1)}</b><div style="font-size:9px;color:#64748b">店舖評價</div></div><div class="review"><b>買家評價</b><div style="font-size:10px;margin-top:4px">「商品描述清楚，包裝完整，配送速度理想。」</div></div><div style="display:flex;gap:7px;margin-top:12px"><button class="btn" style="flex:1" onclick="buyNow('${id}')">立即購買</button><button class="btn primary" style="flex:1" onclick="addToCart('${id}');closeModal('productDetailModal')">加入購物車</button></div></div></div>`;document.getElementById('productDetailModal').classList.remove('hidden')}
function buyNow(id){cart=[{product_id:id,quantity:1}];closeModal('productDetailModal');checkout()}
function buyerStatusLabel(status){return ({已攬收:'等待物流轉運',待轉運:'等待集運安排',運輸中:'幹線運輸中',二次派送中:'本地派送中',待取件:'已到達自提點，等待取件',已簽收:'已完成'})[status]||status}
function openOrderDetail(orderId){let o=find('ORDERS','order_id',orderId);if(!o)return;let its=opRows().filter(x=>x.order_id===orderId);document.getElementById('modalTitle').textContent=`訂單 ${orderId}`;document.getElementById('modalBody').innerHTML=`<div class="alert blue" style="margin-bottom:12px"><b>${buyerStatusLabel(o.order_status)}</b><br><span style="font-size:9px">${esc(o.order_time)} · 訂單總額 ${money(o.total)}</span></div><h3>商品明細</h3>${its.map(x=>`<div class="card" style="margin:7px 0"><div style="display:flex;justify-content:space-between"><b>${esc(x.product?.name||x.product_id)}</b>${badge(x.status)}</div><div style="font-size:9px;color:#64748b;margin-top:4px">數量 ${x.quantity} · ${money(x.sale_price)} / 件 · ${esc(address(x.dest_address_id))}</div><div style="font-size:9px;color:var(--accent);font-weight:900;margin-top:5px">${buyerStatusLabel(x.status)}</div></div>`).join('')}<h3 style="margin-top:16px">物流追蹤</h3><div class="timeline">${its.map(x=>`<div class="event"><time>${esc(x.update_time)}</time><div>${esc(x.product?.name||x.product_id)} · ${buyerStatusLabel(x.status)} ${badge(x.status)}</div><div style="font-size:9px;color:#64748b;margin-top:3px">目的地：${esc(address(x.dest_address_id))}</div></div>`).join('')}</div>`;document.getElementById('genericModal').classList.remove('hidden')}
function openOpDetail(opid){let x=find('ORDER_PRODUCTS','op_id',opid);document.getElementById('modalTitle').textContent=`物流明細 ${opid}`;document.getElementById('modalBody').innerHTML=`<div class="grid g2"><div><b>商品</b><div>${esc(prod(x.product_id)?.name||x.product_id)}</div></div><div><b>目前狀態</b><div style="margin-top:4px">${badge(x.status)}</div></div><div><b>目的地</b><div>${esc(address(x.dest_address_id))}</div></div><div><b>模擬剩餘時間</b><div>${remainingTime(x)}</div></div></div>`;document.getElementById('genericModal').classList.remove('hidden')}
function showProfile(){let role=current.role,u=current.role==='buyer'?user(current.id):null,member=u?memberLabel(u.member_lvl):'—';document.getElementById('profileBody').innerHTML=`<div class="profile-card"><div class="profile-avatar">${profilePrefs.avatar}</div><div><h2 style="margin:0">${esc(u?.name||roles[role].label)}</h2><div style="font-size:9px;color:#64748b">${role==='buyer'?member:role==='shop'?'商家帳戶':'物流操作員帳戶'}</div></div></div><div class="grid g2" style="margin-top:16px"><div><label>頭像</label><select id="prefAvatar" onchange="profilePrefs.avatar=this.value;renderHeader()"><option>🙂</option><option>🧑🏻</option><option>👨🏻</option><option>👩🏻</option><option>🧑‍💻</option><option>🚚</option><option>🏪</option></select></div><div><label>系統主題</label><select id="prefTheme" onchange="applyTheme(this.value)"><option value="system">跟隨系統</option><option value="light">淺色</option><option value="dark">深色</option></select></div><div><label>介面色調</label><select id="prefAccent" onchange="profilePrefs.accent=this.value;applyAccent(this.value)"><option value="default">身份主色</option><option value="mono">黑白</option><option value="violet">紫色</option></select></div><div><label>個人簽名</label><input id="prefSig" value="${esc(profilePrefs.signature)}" onchange="profilePrefs.signature=this.value"></div></div>${role==='buyer'?`<div class="card" style="margin-top:14px;background:#f8fafc"><b>會員資料</b><div style="font-size:10px;margin-top:7px">會員等級：${member} · 電郵：${esc(u.email)} · 電話：${esc(u.phone_no)}</div><div style="font-size:10px;margin-top:4px">會員折扣：${discountRate(u.member_lvl)*100}%</div></div>`:role==='shop'?`<div class="card" style="margin-top:14px;background:#fff7ed"><b>商家資料</b><div style="font-size:10px;margin-top:7px">${esc(shop(roleState.shopId)?.name)} · 評分 ${(shop(roleState.shopId)?.rating||0).toFixed(1)} ★</div><div style="font-size:10px;margin-top:4px">簽名：${esc(profilePrefs.signature)}</div></div>`:role==='deliverer'?`<div class="card" style="margin-top:14px;background:#effaff"><b>物流工作資料</b><div style="font-size:10px;margin-top:7px">目前 Hub：${esc(find('PT_HUB','hub_id',roleState.hubId)?.name||roleState.hubId)}</div><div style="font-size:10px;margin-top:4px">今日派送任務會從 ORDER_PRODUCTS 即時計算</div></div>`:`<div class="card" style="margin-top:14px;background:#f5f3ff"><b>管理員工作資料</b><div style="font-size:10px;margin-top:7px">管理範圍：8 張示範資料表及 SQL 查詢</div><div style="font-size:10px;margin-top:4px">注意：目前資料只存在前端 state，並非持久化資料庫。</div></div>`}`;document.getElementById('profileModal').classList.remove('hidden')}
function applyTheme(v){document.documentElement.dataset.theme=v;document.body.classList.toggle('darkmode',v==='dark');profilePrefs.theme=v}
function applyAccent(v){document.body.classList.toggle('monoaccent',v==='mono');if(v==='violet'){document.documentElement.style.setProperty('--accent','#7c3aed');document.documentElement.style.setProperty('--accent2','#6d28d9')}else{document.documentElement.style.removeProperty('--accent');document.documentElement.style.removeProperty('--accent2')}profilePrefs.accent=v}
function renderQuery(n=1){activeQuery=n;document.getElementById('queryTabs').innerHTML=queries.map((q,i)=>`<button class="${i+1===n?'active':''}" onclick="renderQuery(${i+1})">${i+1}. ${q[0]}</button>`).join('');let q=queries[n-1],r='';if(n===1)r=resultTable(['ORDER_ID','TIME','OP_ID','STATUS'],opRows().filter(x=>x.order?.user_id==='u00001'&&x.status!=='已簽收').map(x=>`<tr><td>${x.order_id}</td><td>${x.order?.order_time}</td><td>${x.op_id}</td><td>${badge(x.status)}</td></tr>`).join(''));if(n===2)r=resultTable(['OP_ID','DESTINATION','PRODUCT'],opRows().filter(x=>x.status==='運輸中').map(x=>`<tr><td>${x.op_id}</td><td>${esc(address(x.dest_address_id))}</td><td>${esc(x.product?.name)}</td></tr>`).join(''));if(n===3){let m={};opRows().forEach(x=>{m[x.product_id]??={q:0,r:0};m[x.product_id].q+=x.quantity;m[x.product_id].r+=x.quantity*x.sale_price});r=resultTable(['PRODUCT','SOLD','REVENUE'],Object.entries(m).sort((a,b)=>b[1].r-a[1].r).map(([id,v])=>`<tr><td>${esc(prod(id)?.name)}</td><td>${v.q}</td><td>${money(v.r)}</td></tr>`).join(''))}if(n===4)r=resultTable(['PT_ID','NAME','REMAINING m³'],rows('PICKUP_POINT').filter(p=>p.max_capa-p.current_occ<10).map(p=>`<tr><td>${p.pt_id}</td><td>${esc(p.name)}</td><td>${(p.max_capa-p.current_occ).toFixed(2)}</td></tr>`).join(''));if(n===5)r=resultTable(['OP_ID','DEST','MODE'],opRows().map(x=>`<tr><td>${x.op_id}</td><td>${x.dest_address_id}</td><td>${find('PICKUP_POINT','address_id',x.dest_address_id)?'<span class="badge b-purple">自提點自取</span>':'<span class="badge b-blue">送貨上門</span>'}</td></tr>`).join(''));if(n===6)r=resultTable(['OP_ID','STATUS','VALUE'],opRows().filter(x=>x.status!=='已簽收'&&x.sale_price*x.quantity>5000).map(x=>`<tr><td>${x.op_id}</td><td>${badge(x.status)}</td><td>${money(x.sale_price*x.quantity)}</td></tr>`).join(''));if(n===7){let g={};opRows().filter(x=>x.status==='待轉運').forEach(x=>(g[x.dest_address_id]??=[]).push(x));r=resultTable(['DEST','COUNT','OP_IDS'],Object.entries(g).filter(([,v])=>v.length>=2).map(([d,v])=>`<tr><td>${esc(address(d))}</td><td>${v.length}</td><td>${v.map(x=>x.op_id).join(', ')}</td></tr>`).join(''))}if(n===8)r=resultTable(['PT_ID','NAME','REMAINING','EXPECTED','STATUS'],rows('PICKUP_POINT').map(p=>{let e=expectedPickupVolume(p.address_id);return `<tr><td>${p.pt_id}</td><td>${esc(p.name)}</td><td>${(p.max_capa-p.current_occ).toFixed(2)}</td><td>${e.toFixed(2)}</td><td>${e>p.max_capa-p.current_occ?'<span class="badge b-red">FULL WARNING</span>':'<span class="badge b-green">SAFE</span>'}</td></tr>`}).join(''));if(n===9)r=resultTable(['DEST','RECEIVER','PHONE','PARCEL LINES','VALUE'],(()=>{let g={};opRows().filter(x=>x.status==='二次派送中').forEach(x=>{const uid=x.order?.user_id||'UNKNOWN',key=x.dest_address_id+'|'+uid;(g[key]??=[]).push(x)});return Object.entries(g).map(([key,v])=>{const [d,uid]=key.split('|'),u=user(uid);return `<tr><td>${esc(address(d))}</td><td>${esc(u?.name||'未知收件人')}</td><td>${esc(u?.phone_no||'—')}</td><td>${v.length}</td><td>${money(v.reduce((sum,x)=>sum+x.sale_price*x.quantity,0))}</td></tr>`}).join('')})());if(n===10)r=`<div class="alert blue">請到「派送員 → TSP 路徑最佳化」查看 Temporary Data、Dijkstra 距離矩陣、SA + 2-opt 及最終路徑；以下 SQL 只負責取得 Hub／座標／待處理包裹資料；Dijkstra 與 TSP + SA 由前端模擬程式執行，並非 Access SQL 直接執行演算法。</div>`;document.getElementById('queryDetail').innerHTML=`<div class="section-head" style="margin:0 0 10px"><div><h2>${n}. ${q[0]}</h2><p>${q[1]}</p></div></div><div class="sqlbox">${esc(q[2])}</div><div class="section-head"><div><h2>Demo Result</h2><p>結果由目前 DATA state 即時計算。</p></div></div>${r}`}
function renderAdmin(){let counts=Object.fromEntries(Object.keys(schema).map(k=>[k,rows(k).length]));document.getElementById('adminMetrics').innerHTML=[['資料表','8 張','USER → PT_HUB'],['Records',Object.values(counts).reduce((a,b)=>a+b,0)+' 筆','全部前端 state'],['ORDER_PRODUCTS',counts.ORDER_PRODUCTS+' 筆','交易 × 物流橋樑'],['容量警告',rows('PICKUP_POINT').filter(p=>p.max_capa-p.current_occ<10).length+' 個','PICKUP_POINT']].map(x=>`<div class="card metric"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="sub">${x[2]}</div></div>`).join('');document.getElementById('tableList').innerHTML=Object.keys(schema).map(t=>`<button class="${activeTable===t?'active':''}" onclick="activeTable='${t}';renderAdmin()">${t} <span style="float:right">${rows(t).length}</span></button>`).join('');let sc=schema[activeTable];document.getElementById('adminTableTitle').textContent=activeTable;document.getElementById('adminTableDesc').textContent=sc.desc+' · PK = '+sc.pk;document.getElementById('adminHead').innerHTML='<tr>'+sc.fields.map(f=>`<th>${f}</th>`).join('')+'<th>操作</th></tr>';document.getElementById('adminBody').innerHTML=rows(activeTable).map((r,i)=>`<tr>${sc.fields.map(f=>`<td>${sc.types[f]==='boolean'?(r[f]?'1':'0'):esc(r[f])}</td>`).join('')}<td><button class="btn" onclick="openCrudForm(${i})">編輯</button> <button class="btn red" onclick="deleteRecord(${i})">刪除</button></td></tr>`).join('')}
function openCrudForm(index=null){let sc=schema[activeTable],r=index===null?{}:rows(activeTable)[index];document.getElementById('modalTitle').textContent=(index===null?'新增 ':'編輯 ')+activeTable;document.getElementById('modalBody').innerHTML=`<div class="formgrid">${sc.fields.map(f=>`<div><label for="f_${f}">${f}${f===sc.pk?' · PK':''}</label>${sc.types[f]==='boolean'?`<select id="f_${f}"><option value="true" ${r?.[f]?'selected':''}>1 / True</option><option value="false" ${r?.[f]===false?'selected':''}>0 / False</option></select>`:`<input id="f_${f}" type="${sc.types[f]==='number'?'number':'text'}" value="${esc(r?.[f]??'')}">`}</div>`).join('')}</div><div class="alert blue" style="margin-top:10px">Admin 修改會即時更新所有 SQL、角色畫面及關聯資料。這是前端 state CRUD 示範，不是直接寫入 Access 檔案。</div><button class="btn purple" style="width:100%;margin-top:10px" onclick="saveCrud(${index===null?'null':index})">儲存 ${activeTable}</button>`;document.getElementById('genericModal').classList.remove('hidden')}
function saveCrud(index){
  const table=activeTable,sc=schema[table],obj={};
  for(const f of sc.fields){const el=document.getElementById('f_'+f);if(!el)return;obj[f]=sc.types[f]==='number'?Number(el.value):sc.types[f]==='boolean'?el.value==='true':el.value.trim()}
  if(!String(obj[sc.pk]??'').trim()){toast('Primary Key 不可留空');return}
  if(sc.fields.some(f=>sc.types[f]==='number'&&!Number.isFinite(obj[f]))){toast('數值欄位必須是有效數字');return}
  const old=index===null?null:rows(table)[index];if(index!==null&&!old){toast('記錄已不存在，請重新整理');return}
  if(rows(table).some((r,i)=>r[sc.pk]===obj[sc.pk]&&i!==index)){toast('Primary Key 重複');return}
  const refs={ADDRESS:[['user_id','USER','user_id'],['shop_id','SHOP','shop_id'],['hub_id','PT_HUB','hub_id']],PRODUCT:[['shop_id','SHOP','shop_id']],ORDERS:[['user_id','USER','user_id']],ORDER_PRODUCTS:[['order_id','ORDERS','order_id'],['product_id','PRODUCT','product_id'],['origin_address_id','ADDRESS','address_id'],['dest_address_id','ADDRESS','address_id']],PICKUP_POINT:[['address_id','ADDRESS','address_id']],PT_HUB:[['address_id','ADDRESS','address_id']]};
  if(old&&old[sc.pk]!==obj[sc.pk]){
    const inbound={USER:[['ADDRESS','user_id'],['ORDERS','user_id']],SHOP:[['ADDRESS','shop_id'],['PRODUCT','shop_id']],ADDRESS:[['PICKUP_POINT','address_id'],['PT_HUB','address_id'],['ORDER_PRODUCTS','dest_address_id'],['ORDER_PRODUCTS','origin_address_id']],PRODUCT:[['ORDER_PRODUCTS','product_id']],ORDERS:[['ORDER_PRODUCTS','order_id']]};
    if((inbound[table]||[]).some(([child,field])=>rows(child).some(r=>r[field]===old[sc.pk]))){toast('此主鍵已被其他資料引用，為免破壞關聯，請勿直接更改');return}
  }
  for(const [field,parent,key] of refs[table]||[]){if(obj[field]!==''&&obj[field]!=null&&!rows(parent).some(r=>r[key]===obj[field])){toast(`${field} 找不到對應的 ${parent} 記錄`);return}}
  const nonnegative=['price','stock','volume_unit','quantity','sale_price','total','max_capa','current_occ','latitude','longitude','rating'];
  for(const f of nonnegative){if(f in obj&&obj[f]<0){toast(`${f} 不可為負數`);return}}
  if(table==='PRODUCT'&&(!obj.name||obj.price<=0||obj.volume_unit<=0||!Number.isInteger(obj.stock))){toast('商品名稱、正價格、正體積及整數庫存均為必填');return}
  if(table==='ORDER_PRODUCTS'&&(!Number.isInteger(obj.quantity)||obj.quantity<1)){toast('物流數量必須為正整數');return}
  if(table==='PICKUP_POINT'&&obj.current_occ>obj.max_capa){toast('目前佔用容量不可超過最大容量');return}
  if(table==='PT_HUB'&&obj.current_occ>obj.max_capa){toast('目前佔用容量不可超過最大容量');return}
  if(index===null)DATA[table].push(obj);else DATA[table][index]=obj;
  closeModal('genericModal');renderAll();toast(`${table} 已${index===null?'新增':'更新'}`);
}
function deleteRecord(index){
  const table=activeTable,sc=schema[table],r=rows(table)[index];if(!r)return;
  const refs={USER:[['ADDRESS','user_id'],['ORDERS','user_id']],SHOP:[['ADDRESS','shop_id'],['PRODUCT','shop_id']],ADDRESS:[['PICKUP_POINT','address_id'],['PT_HUB','address_id'],['ORDER_PRODUCTS','dest_address_id'],['ORDER_PRODUCTS','origin_address_id']],PRODUCT:[['ORDER_PRODUCTS','product_id']],ORDERS:[['ORDER_PRODUCTS','order_id']]};
  const dependents=(refs[table]||[]).flatMap(([t,f])=>rows(t).filter(x=>x[f]===r[sc.pk]).map(()=>t));
  if(dependents.length){toast(`不能刪除：仍有 ${dependents.length} 筆關聯記錄（${[...new Set(dependents)].join('、')}）`);return}
  if(!confirm(`確定刪除 ${table} / ${r[sc.pk]}？`))return;
  DATA[table].splice(index,1);renderAll();toast(`${table} record 已刪除`);
}
function closeModal(id){document.getElementById(id).classList.add('hidden')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal').forEach(x=>x.classList.add('hidden'))});
function init(){renderLogin();renderAll()};init();
