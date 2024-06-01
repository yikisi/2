const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201002,
  '着手准备',
  '在比赛中盘，稍微准备好向终点进发＜短距离＞',
  20100,
  1,
  2,
  174,
  [() => true, () => true],
  [(args) => args.distance_type === 1 && args.phase_random === 1, () => false],
  [4, 0],
  [500, 0],
  [
    [28, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.025, 0.2, 0],
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
  [35, 0],
  1,
  false,
);
