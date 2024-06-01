const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110171,
  '击退，喧鸣之箭',
  '比赛终盘身处前方并有被反超的危险时，会在最终弯道前燃烧斗魂，使速度持续上升',
  11017,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.order_rate <= 50 &&
      args.overtake_target_time >= 2,
    () => true,
  ],
  [(args) => args.is_finalcorner === 1, () => false],
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
