const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200721,
  '杀手旋律',
  '比赛中盘位于前列时，容易取得好位置＜中距离＞',
  20072,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase_random === 1 &&
      args.order_rate <= 50,
    () => false,
  ],
  [2.4, 0],
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
  1,
  false,
);
