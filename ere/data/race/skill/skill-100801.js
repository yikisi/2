const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100801,
  'Info: Acquired',
  'レース後半まで前方をキープしていて\nライバルのウマ娘が加速スキルを発動\nすると少し前に出る、URAのダート\nレースならさらに速度がわずかに上がる',
  10080,
  5,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate_in20_continue === 1 &&
      args.track_id >= 10001 &&
      args.track_id <= 10010 &&
      args.ground_type === 2,
    (args) => args.distance_rate >= 50 && args.order_rate_in20_continue === 1,
  ],
  [
    (args) => args.is_other_character_activate_advantage_skill === 31,
    (args) => args.is_other_character_activate_advantage_skill === 31,
  ],
  [5, 5],
  [500, 500],
  [
    [22, 27, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.15, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
