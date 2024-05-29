const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202031,
  '博打うち',
  'レース後半に速度がすごく上がるが\nすごく疲れてしまうことがある',
  20203,
  2,
  4,
  334,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => true],
  [1.8, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 8, 1],
    [1, 1, 1],
  ],
  [
    [4500, -10000, 0],
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
  [1, 0],
  [60, 0],
  1,
);
