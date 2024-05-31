const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201162,
  'ささやき',
  'レース中盤にすぐ前のウマ娘を\nわずかに戸惑わせる＜中距離＞',
  20116,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase === 1 &&
      args.blocked_front_continuetime >= 1,
    () => false,
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
    [-0.01, 0, 0],
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
  [10, 10],
  1,
  false,
);
