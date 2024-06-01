const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200652,
  '短距齿轮',
  '比赛终盘时，加速力稍微提升＜短距离＞',
  20065,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.distance_type === 1 && args.phase_random === 2, () => false],
  [3, 0],
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
  false,
);
