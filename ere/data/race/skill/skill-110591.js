const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110591,
  'ときめきが呼ぶほうへ',
  '終盤目前の下り坂で中団に控えていて\nゴールまで遠いとレースを\n思いっきり楽しんで速度を上げる',
  11059,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.slope === 2 &&
      args.phase === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.remain_distance >= 500,
    () => true,
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
);
