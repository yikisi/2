const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100381,
  '#LookatCurren',
  '比赛中盘附近处于好位置时赶超的话就会充满气势的开始前进',
  10038,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 65 &&
      args.order >= 2 &&
      args.order_rate <= 50 &&
      args.change_order_onetime < 0,
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
