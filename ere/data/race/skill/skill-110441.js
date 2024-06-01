const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110441,
  '珍藏秘宝',
  '比赛中盘后下坡时处于后方，消耗少许持久力在短暂内向前推进；之后若是干劲在好调或绝好调，则于终盘的最后直线短暂加速',
  11044,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.phase >= 1 && args.slope === 2 && args.order_rate >= 50,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.phase >= 2 &&
      args.is_last_straight === 1 &&
      args.motivation >= 4,
  ],
  [3, 3],
  [500, 500],
  [
    [22, 9, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, -0.02, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
  true,
);
