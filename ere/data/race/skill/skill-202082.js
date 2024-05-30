const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202082,
  'ワンチャンス',
  'レース終盤始めの方で中団以降にいると\n加速力がわずかに上がる＜中距離＞',
  20208,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate >= 40,
    () => false,
  ],
  [1.8, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
);
