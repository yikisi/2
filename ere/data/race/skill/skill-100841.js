const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100841,
  '霹雳中的奥伏赫变',
  '比赛终盘位于后方时，在最终直线处解除自我封印向前突进，比赛场地为东京竞马场中距离时，以极快速度向前突进',
  10084,
  5,
  18,
  340,
  [
    (args) => args.phase >= 2 && args.order_rate >= 50,
    (args) => args.phase >= 2 && args.order_rate >= 50,
  ],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.track_id === 10006 &&
      args.distance_type === 3,
    (args) => args.is_last_straight === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [22, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.55, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
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
