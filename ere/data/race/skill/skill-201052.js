const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201052,
  'ギアシフト',
  'レース中盤に前の方にいると\n速度がわずかに上がる＜マイル＞',
  20105,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_random === 1 &&
      args.order_rate <= 50,
    () => true,
  ],
  [2.4, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
);
