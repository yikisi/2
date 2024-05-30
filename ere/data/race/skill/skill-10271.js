const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10271,
  '燃えろ筋肉！',
  'レース終盤のコーナーで中団にいると\n前の位置につこうとして\n加速力が少し上がる',
  1027,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.order_rate >= 65 &&
      args.order_rate <= 70,
    () => false,
  ],
  [4, 0],
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
    [0.3, 0, 0],
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
  [30, 0],
  0,
);
