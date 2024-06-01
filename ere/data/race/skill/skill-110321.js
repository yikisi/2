const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110321,
  '夏空光晕',
  '在比赛后半的弯道位于好位置时，短时间内速度大幅提升，若是中山竞马场则根据自身速度同时提升加速度',
  11032,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.corner !== 0 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.track_id === 10005,
    (args) =>
      args.distance_rate >= 50 &&
      args.corner !== 0 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
  ],
  [4, 4],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 22, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0.05, 0],
    [0.45, 0, 0],
  ],
  [
    [1, 1, 0],
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
