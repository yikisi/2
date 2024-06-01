const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110261,
  '行动代号・可可',
  '中盘弯道位于前方集团时若检测到后方有其他马娘的话将稍微调整呼吸，加快速度',
  11026,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order <= 4 &&
      args.phase === 1 &&
      args.corner !== 0 &&
      args.bashin_diff_behind <= 3,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.015, 0],
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
  [1, 2],
  [30, 30],
  0,
  false,
);
