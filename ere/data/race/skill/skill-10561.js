const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10561,
  '来てください来てください！',
  'レース終盤に3番手以降で\n前方が詰まると\nお告げの力で少し道を切り開く',
  1056,
  3,
  5,
  240,
  [() => true, () => true],
  [
    (args) => args.phase >= 2 && args.order >= 3 && args.blocked_front === 1,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 1000, 0],
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
  [30, 0],
  0,
);
