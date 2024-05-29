const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202032,
  'あやしげな作戦',
  'レース後半に速度が少し上がるが\nすごく疲れてしまうことがある',
  20203,
  1,
  129,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => true],
  [1.8, 0],
  [500, 500],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 8, 1],
    [1, 1, 1],
  ],
  [
    [2500, -10000, 0],
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
  [20, 0],
  1,
);
