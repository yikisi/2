const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202112,
  '气势十足',
  '在最终弯道处于后方位置的话则会略微提高速度＜英里＞',
  20211,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_finalcorner_random === 1 &&
      args.order_rate >= 50,
    () => false,
  ],
  [1.8, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
