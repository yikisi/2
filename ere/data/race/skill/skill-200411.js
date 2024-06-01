const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200411,
  '容易放弃',
  '最终直线位于末尾时更容易放弃',
  20041,
  1,
  4,
  -262,
  [() => true, () => true],
  [
    (args) => args.last_straight_random === 1 && args.distance_diff_rate >= 75,
    () => false,
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
  false,
);
