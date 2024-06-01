const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202032,
  '可疑的作战策略',
  '比赛后半速度略微上升但有时会很累',
  20203,
  1,
  2,
  129,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => false],
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
    [0.25, -1, 0],
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
  false,
);
