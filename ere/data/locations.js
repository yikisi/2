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
  // 保健室
  clinic: 0,
  // 大门
  gate: 0,
  // 三女神像
  god: 0,
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
  // 纽约
  new_york: 0,
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
  // 训练员办公室
  trainer: 0,
  // 访客接待室
  visitor: 0,
  // 迪拜
  dubai: 0,
  // 秘汤
  moon_well: 0,
};
Object.keys(location_enum).forEach((k, i) => (location_enum[k] = i));
location_enum.keys = Object.keys(location_enum);

const foreign_locations = {
  [location_enum.dubai]: 1,
  [location_enum.guangzhou]: 1,
  [location_enum.hongkong]: 1,
  [location_enum.new_york]: 1,
  [location_enum.paris]: 1,
};

module.exports = {
  foreign_locations,
  location_enum,
};
