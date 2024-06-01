const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200762,
  '第二体力槽',
  '在体力快要耗尽时略微恢复元气＜长距离＞',
  20076,
  1,
  1,
  217,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.hp_per <= 30, () => false],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
  false,
);
