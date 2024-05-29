const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201202,
  'パス上手',
  '追い抜く気持ちが湧き\nわずかに疲れにくくなる＜長距離＞',
  20120,
  1,
  4,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.is_overtake === 1 &&
      args.accumulatetime >= 5,
    () => true,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [150, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
);
