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
  // 小金船号
  gold_ship: 0,
  // 善信号
  pama: 0,
};
Object.keys(vehicle_enum).forEach((e, i) => (vehicle_enum[e] = i + 1));
vehicle_enum.keys = Object.keys(vehicle_enum);

const vehicle_influences = {};
vehicle_influences[vehicle_enum.skateboard] = { stamina: 0.8, time: 0.5 };
vehicle_influences[vehicle_enum.bicycle] = { stamina: 0.6, time: 0.5 };
vehicle_influences[vehicle_enum.hoverboard] = { stamina: 0.1, time: 0.4 };
vehicle_influences[vehicle_enum.multi_bicycle] = { stamina: 0.6, time: 0.5 };
vehicle_influences[vehicle_enum.electric_bicycle] = { stamina: 0.1, time: 0.3 };
vehicle_influences[vehicle_enum.car] = { stamina: 0.1, time: 0.15 };
vehicle_influences[vehicle_enum.sports_car] = { stamina: 0.1, time: 0.1 };
vehicle_influences[vehicle_enum.portal] = { stamina: 0, time: 0 };
vehicle_influences[vehicle_enum.gold_ship] = { stamina: 0.15, time: 0.4 };
vehicle_influences[vehicle_enum.pama] = { stamina: 0.1, time: 0.125 };

const location_move_cost = {};
location_move_cost[location_enum.playground] = 50;
location_move_cost[location_enum.trainer] = 40;
location_move_cost[location_enum.clinic] = 40;
location_move_cost[location_enum.god] = 60;
location_move_cost[location_enum.atrium] = 60;
location_move_cost[location_enum.rooftop] = 60;
location_move_cost[location_enum.chairman] = 80;
location_move_cost[location_enum.visitor] = 90;
location_move_cost[location_enum.gate] = 100;
location_move_cost[location_enum.river] = 50;
location_move_cost[location_enum.shopping] = 100;
location_move_cost[location_enum.church] = 150;
location_move_cost[location_enum.station] = 200;
location_move_cost[location_enum.moon_well] = 350;
location_move_cost[location_enum.mejiro] = 500;

module.exports = {
  expedition_weeks: 3,
  location_move_cost,
  vehicle_enum,
  vehicle_influences,
};
