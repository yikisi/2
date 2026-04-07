// 这个顺序也是解说的优先顺序，不能变换
const race_event_enum = {
  finish: 0,
  loc_change: 0,
  lost_stamina: 0,
  full_speed_push: 0,
  final_push: 0,
  compete_fight: 0,
  orgasm: 0,
  blocked: 0,
  temp_wrong_style: 0,
  loc_mind_nige_ex: 0,
  loc_mind_other_ex: 0,
  temptation: 0,
  loc_mind_nige_over_take: 0,
  loc_mind_nige_speed_up: 0,
  loc_mind_other_quick: 0,
  loc_mind_other_relax: 0,
  temp_end: 0,
  temp_continue: 0,
};
Object.keys(race_event_enum).forEach((k, i) => (race_event_enum[k] = i));
race_event_enum.keys = Object.keys(race_event_enum);

module.exports = {
  acc_up_hill_mode: 2 / 3,
  frame_rate: 15,
  loc_mind_multiply_velocity_ideal: [1, 1.04, 1.05, 1.25, 1.04, 0.945, 1.25],
  max_attr: 2000,
  max_extra_attr: 400,
  mod_acceleration_adapt_distance: [0.4, 0.5, 0.6, 1, 1, 1, 1, 1, 1.05],
  mod_acceleration_adapt_ground: [0.1, 0.3, 0.5, 0.7, 0.8, 0.9, 1, 1.05, 1.1],
  mod_acceleration_style: [
    [1.17, 0.94, 0.96],
    [1, 1, 0.996],
    [0.985, 1, 0.996],
    [0.938, 1, 1],
    [0.931, 1, 0.997],
  ],
  mod_attr_intelligence_adapt_style: [
    0.1, 0.2, 0.4, 0.6, 0.75, 0.85, 1, 1.1, 1.15,
  ],
  mod_attr_stamina_style: [0.86, 0.95, 0.89, 1, 0.995],
  mod_motivation_coefficients: {
    default: [0.96, 0.98, 1, 1.02, 1.04],
    2: [0.94, 0.97, 1, 1.03, 1.06],
  },
  mod_stamina_cost_mess_dirt: [1, 1, 1, 1.01, 1.02],
  mod_stamina_cost_mess_grass: [1, 1, 1, 1.02, 1.02],
  mod_velocity_final_adapt_distance: [
    0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 1, 1.05, 1, 1,
  ],
  mod_velocity_style: [
    [1.063, 0.969, 0.956],
    [1, 0.9828, 0.962],
    [0.978, 0.9906, 0.9749],
    [0.938, 0.9976, 0.994],
    [0.931, 1, 1],
  ],
  race_de_acc: [-1.2, -0.8, -1, -0.5, -1.2],
  race_event_enum,
  start_acc: 24,
  start_velocity: 3,
};
