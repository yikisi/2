const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110121,
  '大碗的爱！一生有口福！',
  '比赛中盘完成三次追赶，在临近终盘的下坡路位于后方时，短时间内速度提升并略微提升加速度',
  11012,
  5,
  18,
  340,
  [(args) => args.change_order_up_middle >= 3, () => true],
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.slope === 2 &&
      args.order_rate >= 50,
    () => false,
  ],
  [4, 0],
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
    [0.35, 0.1, 0],
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
