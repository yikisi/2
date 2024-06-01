const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100301,
  '蓝蔷薇追猎者',
  '在比赛终盘完成超越并身处前方时，最终直线上会爆发出强烈的意志，使得速度提升',
  10030,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 && args.order <= 4 && args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
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
  false,
);
