const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201132,
  '闪电步伐',
  '在比赛中盘，一段时间内稍微不容易被包围＜中距离＞',
  20113,
  1,
  2,
  174,
  [() => true, () => true],
  [(args) => args.distance_type === 3 && args.phase_random === 1, () => false],
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
