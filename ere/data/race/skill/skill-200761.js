const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200761,
  '火场怪力',
  '在即将耗尽体力时，恢复元气，并且提升速度＜长距离＞',
  20076,
  2,
  9,
  508,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.hp_per <= 30, () => false],
  [1.8, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.35, 0],
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
  [2, 0],
  [60, 0],
  1,
  false,
);
