const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201131,
  '闪光步伐',
  '在比赛中盘，一段时间内不容易被包围＜中距离＞',
  20113,
  2,
  10,
  394,
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
    [0.035, 0.3, 0],
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
  [60, 0],
  1,
  false,
);
