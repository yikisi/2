const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200742,
  '深呼吸',
  '在比赛中盘时重整呼吸，稍微不容易变得疲劳＜长距离＞',
  20074,
  1,
  1,
  217,
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
