const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201161,
  '魅惑的细语',
  '在比赛中盘让前面的马娘困惑＜中距离＞',
  20116,
  2,
  11,
  508,
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
    [-0.03, 0, 0],
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
  false,
);
