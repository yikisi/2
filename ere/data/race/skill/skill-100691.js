const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100691,
  '憧れは桜を越える！',
  '残り300mを切って好位置にいるとき\n前のウマ娘との距離が近いと\n強い想いが花開き速度が上がる',
  10069,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance <= 300 &&
      args.order_rate <= 40 &&
      args.bashin_diff_infront <= 1,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
);
