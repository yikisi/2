const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202552,
  '快速',
  '在比赛后半的随机位置稍微向前突进，并极少量回复体力',
  20255,
  1,
  2,
  263,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => false],
  [3, 0],
  [500, 0],
  [
    [22, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.0035, 0],
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
  [2, 3],
  [10, 10],
  1,
  false,
);
