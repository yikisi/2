const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100061,
  '胜利的鼓动',
  '在最后200米处于前列时，能够开辟道路，很容易突围',
  10006,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order >= 2 &&
      args.order <= 5 &&
      args.order_rate <= 50 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199,
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
    [0.45, 0, 0],
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
