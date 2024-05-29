const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200411,
  'あきらめ癖',
  '最終直線で最後方付近にいると\n少しあきらめてしまいがちになる',
  20041,
  1,
  4,
  -262,
  [() => true, () => true],
  [
    (args) => args.last_straight_random === 1 && args.distance_diff_rate >= 75,
    () => true,
  ],
  [3, 0],
  [30, 0],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.2, 0, 0],
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
  [-30, 0],
  1,
);
