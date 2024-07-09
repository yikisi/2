const race_event_enum = {
  bad_start: 0,
  blocked: 0,
  compete_fight: 0,
  final_push: 0,
  finish: 0,
  loc_mind_nige_ex: 0,
  loc_mind_nige_over_take: 0,
  loc_mind_nige_speed_up: 0,
  loc_mind_other_ex: 0,
  loc_mind_other_quick: 0,
  loc_mind_other_relax: 0,
  temp_continue: 0,
  temp_end: 0,
  temptation: 0,
};
Object.keys(race_event_enum).forEach((k, i) => (race_event_enum[k] = i));

const race_event_names = {};
race_event_names[race_event_enum.bad_start] = '出迟！';
race_event_names[race_event_enum.blocked] = '被挡住了！';
race_event_names[race_event_enum.compete_fight] = '展开冲刺竞逐！';
race_event_names[race_event_enum.final_push] = '开始冲刺！';
race_event_names[race_event_enum.finish] = '冲线！';
race_event_names[race_event_enum.loc_mind_nige_ex] = race_event_names[
  race_event_enum.loc_mind_other_ex
] = '大幅提升自己的速度！';
race_event_names[race_event_enum.loc_mind_nige_over_take] = '在试图超越！';
race_event_names[race_event_enum.loc_mind_nige_speed_up] = '想要扩大优势！';
race_event_names[race_event_enum.loc_mind_other_quick] = '紧追不舍！';
race_event_names[race_event_enum.loc_mind_other_relax] = '放缓节奏以保持体力！';
race_event_names[race_event_enum.temp_continue] = '的心绪迟迟无法平复！';
race_event_names[race_event_enum.temp_end] = '冷静下来了';
race_event_names[race_event_enum.temptation] = '好像有些不冷静！';

module.exports = {
  acc_up_hill_mode: 2 / 3,
  frame_rate: 15,
  loc_mind_multiply_velocity_ideal: [1, 1.04, 1.05, 1.25, 1.04, 0.945, 1.25],
  max_attr: 2000,
  max_extra_attr: 400,
  mod_acceleration_adapt_distance: [0.4, 0.5, 0.6, 1, 1, 1, 1, 1],
  mod_acceleration_adapt_ground: [0.1, 0.3, 0.5, 0.7, 0.8, 0.9, 1, 1.05],
  mod_acceleration_style: [
    [1.17, 0.94, 0.956],
    [1, 1, 0.996],
    [0.985, 1, 0.996],
    [0.938, 1, 1],
    [0.931, 1, 0.997],
  ],
  mod_attr_intelligence_adapt_style: [0.1, 0.2, 0.4, 0.6, 0.75, 0.85, 1, 1.1],
  mod_attr_stamina_style: [0.86, 0.95, 0.89, 1, 0.995],
  mod_motivation_coefficients: {
    default: [0.96, 0.98, 1, 1.02, 1.04],
    2: [0.94, 0.97, 1, 1.03, 1.06],
  },
  mod_stamina_cost_mess_dirt: [1, 1, 1, 1.01, 1.02],
  mod_stamina_cost_mess_grass: [1, 1, 1, 1.02, 1.02],
  mod_velocity_final_adapt_distance: [0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 1, 1.05],
  mod_velocity_style: [
    [1.063, 0.98, 0.968],
    [1, 0.99, 0.97],
    [0.978, 0.991, 0.975],
    [0.938, 0.996, 0.99],
    [0.931, 0.998, 1],
  ],
  race_de_acc: [-1.2, -0.8, -1, -0.5, -1.2],
  race_event_enum,
  race_event_names,
  start_acc: 24,
  start_velocity: 3,
};
