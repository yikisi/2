const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110681,
  '惊叹的饕餮盛宴！',
  '在终盘的弯道处位于前方，且距离终点尚远时，短时间内向前突进并提升微量加速度',
  11068,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.remain_distance >= 600 &&
      args.order <= 3,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [22, 31, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
