const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110371,
  '祝您胃口好♪',
  '最终弯道之后完成2次超越的话将把荣耀化作力量在最终直线持续提高速度',
  11037,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.change_order_up_finalcorner_after >= 2 &&
      args.is_last_straight === 1,
    () => false,
  ],
  [6, 0],
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
  false,
);
