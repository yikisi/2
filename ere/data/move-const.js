const { location_enum } = require('#/data/locations');

const vehicle_enum = {
  // 滑板
  skateboard: 0,
  // 自行车
  bicycle: 0,
  // 平衡车
  hoverboard: 0,
  // 双人自行车
  multi_bicycle: 0,
  // 电动自行车
  electric_bicycle: 0,
  // 小汽车
  car: 0,
  // 跑车
  sports_car: 0,
  // 便携式空间门
  portal: 0,
};
Object.keys(vehicle_enum).forEach((e, i) => (vehicle_enum[e] = i + 1));

const vehicle_names = [];
vehicle_names[vehicle_enum.skateboard] = '滑板';
vehicle_names[vehicle_enum.bicycle] = '自行车';
vehicle_names[vehicle_enum.hoverboard] = '平衡车';
vehicle_names[vehicle_enum.multi_bicycle] = '双人自行车';
vehicle_names[vehicle_enum.electric_bicycle] = '电动车';
vehicle_names[vehicle_enum.car] = '小汽车';
vehicle_names[vehicle_enum.sports_car] = '跑车';
vehicle_names[vehicle_enum.portal] = '便携式空间门';

const vehicle_verbs = {};
vehicle_verbs[vehicle_enum.skateboard] = '踩';
vehicle_verbs[vehicle_enum.bicycle] = '骑';
vehicle_verbs[vehicle_enum.hoverboard] = '踩';
vehicle_verbs[vehicle_enum.multi_bicycle] = '骑';
vehicle_verbs[vehicle_enum.electric_bicycle] = '骑';
vehicle_verbs[vehicle_enum.car] = '开';
vehicle_verbs[vehicle_enum.sports_car] = '开';
vehicle_verbs[vehicle_enum.portal] = '用';

const vehicle_influences = {};
vehicle_influences[vehicle_enum.skateboard] = { stamina: 0.8, time: 0.5 };
vehicle_influences[vehicle_enum.bicycle] = { stamina: 0.6, time: 0.5 };
vehicle_influences[vehicle_enum.hoverboard] = { stamina: 0.1, time: 0.4 };
vehicle_influences[vehicle_enum.multi_bicycle] = { stamina: 0.6, time: 0.5 };
vehicle_influences[vehicle_enum.electric_bicycle] = { stamina: 0.1, time: 0.3 };
vehicle_influences[vehicle_enum.car] = { stamina: 0.1, time: 0.15 };
vehicle_influences[vehicle_enum.sports_car] = { stamina: 0.1, time: 0.1 };
vehicle_influences[vehicle_enum.portal] = { stamina: 0, time: 0 };

const location_move_cost = {};
location_move_cost[location_enum.playground] = 100;
location_move_cost[location_enum.atrium] = 100;
location_move_cost[location_enum.rooftop] = 100;
location_move_cost[location_enum.gate] = 100;
location_move_cost[location_enum.river] = 100;
location_move_cost[location_enum.shopping] = 150;
location_move_cost[location_enum.church] = 200;
location_move_cost[location_enum.station] = 300;

module.exports = {
  location_move_cost,
  vehicle_enum,
  vehicle_influences,
  vehicle_names,
  vehicle_verbs,
};
