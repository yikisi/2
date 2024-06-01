const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100171,
  '汝等，瞻仰皇帝之神威吧',
  '在比赛终盘赶超3次后，最终直线上会大幅加速',
  10017,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 && args.change_order_up_end_after >= 3,
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
