const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201082,
  'スピードイーター',
  'レース中盤に前の方にいると\n後ろの速度をわずかに奪う＜マイル＞',
  20108,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 && args.phase_random === 1 && args.order <= 3,
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [21, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-1500, 1500, 0],
    [0, 0, 0],
  ],
  [
    [10, 1, 0],
    [0, 0, 0],
  ],
  [
    [5, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [30, 0],
  1,
);
