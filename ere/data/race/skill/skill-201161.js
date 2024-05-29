const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201161,
  '魅惑のささやき',
  'レース中盤にすぐ前のウマ娘を\n戸惑わせる＜中距離＞',
  20116,
  2,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase === 1 &&
      args.blocked_front_continuetime >= 1,
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
    [-300, 0, 0],
    [0, 0, 0],
  ],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [30, 30],
  1,
);
