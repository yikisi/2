const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100051,
  '闪耀煌星的演剧',
  '在比赛终盘位于前列并突围时，在距终点300米处会变得更加闪耀，大幅提升速度',
  10005,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.order_rate <= 40 &&
      args.behind_near_lane_time_set1 >= 1,
    () => true,
  ],
  [(args) => args.remain_distance <= 300, () => false],
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
