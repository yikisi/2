const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  300141,
  '不撓不屈',
  '真剣勝負、いざ参ります！',
  30014,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.remain_distance >= 350 && args.remain_distance <= 400,
    () => false,
  ],
  [3, 0],
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
