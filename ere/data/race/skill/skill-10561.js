const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10561,
  '快点来啊快点来啊！',
  '在比赛终盘前方受阻时，能够借助预言之力开辟道路',
  1056,
  3,
  18,
  240,
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
    [0.25, 0.1, 0],
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
  false,
);
