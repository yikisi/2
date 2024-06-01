const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200741,
  '冷却',
  '在比赛中盘时重整呼吸，不容易变得疲劳＜长距离＞',
  20074,
  2,
  9,
  508,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => false],
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
    [0.055, 0, 0],
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
  [60, 0],
  1,
  false,
);
