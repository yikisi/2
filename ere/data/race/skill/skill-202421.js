const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202421,
  '無我夢中',
  'ラストスパートで中団以降にいると\n持久力を少し使って加速力が上がる\n＜差し・長距離＞',
  20242,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 3 &&
      args.is_lastspurt === 1 &&
      args.order_rate >= 40,
    () => false,
  ],
  [1.5, 0],
  [500, 0],
  [
    [31, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, -0.02, 0],
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
  1,
);
