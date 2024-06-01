const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100021,
  '最前端的风景……不会让给任何人！',
  '在比赛中后半段位于第一并拉开差距时，稍微加快速度',
  10002,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order === 1 &&
      args.bashin_diff_behind >= 1,
    () => false,
  ],
  [5, 0],
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
    [0.35, 0, 0],
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
  0,
  false,
);
