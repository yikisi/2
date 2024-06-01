const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201001,
  '万事俱备！',
  '在比赛中盘，准备好向终点进发＜短距离＞',
  20100,
  2,
  10,
  394,
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
