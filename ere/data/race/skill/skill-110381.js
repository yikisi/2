const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110381,
  'One True Color',
  '残り350mを切って\n前の方で後ろのウマ娘との距離が近いと\n譲らぬ思いで抜け出しやすくなる',
  11038,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance <= 350 &&
      args.order_rate <= 40 &&
      args.order_rate >= 20 &&
      args.bashin_diff_behind <= 1,
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
    [0.25, 0.3, 0],
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
  [1, 3],
  [30, 30],
  0,
  false,
);
