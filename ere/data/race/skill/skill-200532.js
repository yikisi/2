const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200532,
  '先駆け',
  'スタート時に\n加速力がわずかに上がる\n＜作戦・逃げ＞',
  20053,
  1,
  1,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 1 && args.phase === 0, () => true],
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
    [2000, 0, 0],
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
