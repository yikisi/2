const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100561,
  '来ます来てます来させます！',
  'レース終盤に3番手以降で\n前方が詰まると\nお告げの力で道を切り開く',
  10056,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.phase >= 2 && args.order >= 3 && args.blocked_front === 1,
    () => false,
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
    [0.35, 0.1, 0],
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
  0,
  false,
);
