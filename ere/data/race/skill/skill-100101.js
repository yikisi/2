const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100101,
  '胜利射击！',
  '最终弯道后半处于好位置时会增加动力，持续提升加速度',
  10010,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner_laterhalf === 1 &&
      args.corner !== 0 &&
      args.order >= 3 &&
      args.order_rate <= 40,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
