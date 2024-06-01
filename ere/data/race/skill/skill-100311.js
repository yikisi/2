const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100311,
  '充能完毕！全速前进！',
  '剩余300m左右处于前方的话提高速度，若刚好上完坡则速度大幅提高',
  10031,
  5,
  18,
  340,
  [
    (args) =>
      args.remain_distance <= 305 &&
      args.remain_distance >= 300 &&
      args.slope === 1,
    () => true,
  ],
  [
    (args) =>
      (args.remain_distance <= 299 &&
        args.remain_distance >= 295 &&
        args.order <= 2 &&
        args.slope === 0) ||
      (args.remain_distance <= 299 &&
        args.remain_distance >= 295 &&
        args.order <= 2 &&
        args.slope === 2),
    (args) =>
      args.remain_distance <= 299 &&
      args.remain_distance >= 295 &&
      args.order <= 2,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
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
