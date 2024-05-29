const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100021,
  '先頭の景色は譲らない…！',
  'レース後半に差を付けて先頭にいると\nさらなる脚を使って、速度を上げる',
  10002,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order === 1 &&
      args.bashin_diff_behind >= 1,
    () => true,
  ],
  [5, 0],
  [500, 500],
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
  0,
);
