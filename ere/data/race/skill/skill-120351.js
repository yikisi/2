const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120351,
  'GO! 全力以赴',
  '若比赛中盘在队伍中间位置超越过对手，则在第三弯道时短时间内提升速度如果是2400ｍ的比赛且自身高人气，则持续提升速度',
  12035,
  5,
  18,
  340,
  [
    (args) =>
      args.phase === 1 &&
      args.change_order_onetime < 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    (args) =>
      args.phase === 1 &&
      args.change_order_onetime < 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [
    (args) =>
      args.corner === 3 &&
      args.course_distance === 2400 &&
      args.popularity <= 3,
    (args) => args.corner === 3,
  ],
  [6, 4],
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
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  0,
  false,
);
