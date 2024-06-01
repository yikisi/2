const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200651,
  '短距涡轮',
  '比赛终盘时，加速力提升＜短距离＞',
  20065,
  2,
  10,
  508,
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
  false,
);
