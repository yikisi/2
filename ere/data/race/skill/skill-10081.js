const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10081,
  '加速X',
  '在最后200米处于前列进行名次争夺时，竞争力变强，速度也会加快',
  1008,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      (args.order >= 3 &&
        args.order_rate <= 50 &&
        args.remain_distance <= 200 &&
        args.bashin_diff_infront <= 1) ||
      (args.order >= 3 &&
        args.order_rate <= 50 &&
        args.remain_distance <= 200 &&
        args.bashin_diff_behind <= 1),
    () => false,
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
    [0.25, 0, 0],
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
  [30, 0],
  0,
  false,
);
