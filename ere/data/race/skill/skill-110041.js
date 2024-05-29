const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110041,
  'グッときて♪Chu',
  'スキルで持久力を回復すると\nレース後半で前のほうにいる時に\nレッツラゴー！と速度を上げる',
  11004,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.activate_count_heal >= 1 &&
      args.order <= 3,
    () => true,
  ],
  [5, 0],
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
);
