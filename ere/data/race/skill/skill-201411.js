const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201411,
  '百万バリキ',
  '上り坂で速度が上がる\n＜作戦・差し＞',
  20141,
  2,
  4,
  334,
  [() => true, () => true],
  [
    (args) => args.running_style === 3 && args.up_slope_random === 1,
    () => true,
  ],
  [2.4, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
);
