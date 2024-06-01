const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100561,
  '快来了要来了让它来啊！',
  '在比赛终盘前方受阻时，能够借助预言之力开辟道路',
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
