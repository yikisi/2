const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202291,
  '明鏡止水',
  'スキルで持久力を回復していると\nレース中盤始めの方に後方で\n速度が上がる＜ダート＞',
  20229,
  2,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.order_rate >= 50 &&
      args.activate_count_heal >= 1 &&
      args.distance_rate <= 42 &&
      args.phase === 1,
    () => true,
  ],
  [1.8, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  1,
);
