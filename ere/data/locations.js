const location_enum = {
  // 中庭
  atrium: 0,
  // 地下室
  basement: 0,
  // 海滩
  beach: 0,
  // 海边市集
  beach_market: 0,
  // 海边训练
  beach_train: 0,
  // 理事长
  chairman: 0,
  // 神社
  church: 0,
  // 大门
  gate: 0,
  // 广州
  guangzhou: 0,
  // 家
  home: 0,
  // 香港
  hongkong: 0,
  // 温泉
  hot_spring: 0,
  // 旅馆
  hotel: 0,
  // 情人旅馆
  love_hotel: 0,
  // 目白城
  mejiro: 0,
  // 训练室
  office: 0,
  // 巴黎
  paris: 0,
  // 操场
  playground: 0,
  // 赛场
  race: 0,
  // 休息室
  restroom: 0,
  // 河边
  river: 0,
  // 天台
  rooftop: 0,
  // 小卖部
  school_shop: 0,
  // 商店街
  shopping: 0,
  // 车站
  station: 0,
  // 夏合宿宿舍
  summer_home: 0,
};
Object.keys(location_enum).forEach((k, i) => (location_enum[k] = i));

const location_name = [];
location_name[location_enum.office] = '训练室';
location_name[location_enum.playground] = '训练场';
location_name[location_enum.atrium] = '中庭';
location_name[location_enum.rooftop] = '天台';
location_name[location_enum.restroom] = '休息室';
location_name[location_enum.chairman] = '理事长办公室';
location_name[location_enum.gate] = '学园大门';
location_name[location_enum.basement] = '地下室';
location_name[location_enum.river] = '河边';
location_name[location_enum.church] = '神社';
location_name[location_enum.shopping] = '商店街';
location_name[location_enum.station] = '车站';
location_name[location_enum.mejiro] = '目白城';
location_name[location_enum.beach] = '海边';
location_name[location_enum.beach_market] = '海边市集';
location_name[location_enum.beach_train] = '海边';
location_name[location_enum.paris] = '巴黎';
location_name[location_enum.home] = '自宅';
location_name[location_enum.hotel] = '酒店';
location_name[location_enum.love_hotel] = '情人酒店';
location_name[location_enum.summer_home] = '夏合宿宿舍';
location_name[location_enum.school_shop] = '神秘的小卖部';
location_name[location_enum.race] = '赛场';
location_name[location_enum.hongkong] = '香港';
location_name[location_enum.guangzhou] = '广州';
location_name[location_enum.hot_spring] = '温泉';

module.exports = {
  location_enum,
  location_name,
};
