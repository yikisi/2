const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100011,
  'Shooting Star',
  '在比赛终盘处于前列并超过对手时，就会乘势向前突进且稍微提升加速度',
  5,
  340,
  [() => true, () => true],
  [
    (
      distance_type,
      ground_type,
      running_style,
      phase,
      phase_random,
      phase_laterhalf_random,
      phase_firsthalf_random,
      order_rate,
      order,
      corner,
      is_final_corner,
      bashin_diff_behind,
      bashin_diff_infront,
      distance_diff_top,
      change_order_onetime,
    ) =>
      phase >= 2 && order >= 1 && order_rate <= 50 && change_order_onetime < 0,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [22, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
);
