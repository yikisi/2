const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100311,
  'チャージ完了！全速前進！',
  '残り300m付近で前の方だと速度を少し\n上げる、ちょうど坂を上りきったところ\nだった場合はすごく上げる',
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
