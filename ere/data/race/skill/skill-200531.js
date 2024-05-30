const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200531,
  '先手必勝',
  'スタート時に加速力が上がる\n＜作戦・逃げ＞',
  20053,
  2,
  10,
  334,
  [() => true, () => true],
  [(args) => args.running_style === 1 && args.phase === 0, () => false],
  [1.2, 0],
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
    [0.4, 0, 0],
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
  [60, 0],
  1,
);
