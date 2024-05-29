const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110121,
  '大盛り！ファーストバイト！',
  'レース中盤に3回追い抜いた場合\n終盤目前の下り坂で後方にいると\n少しの間速度が上がり\nさらに加速力がちょっと上がる',
  11012,
  5,
  5,
  340,
  [(args) => args.change_order_up_middle >= 3, () => true],
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.slope === 2 &&
      args.order_rate >= 50,
    () => true,
  ],
  [4, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 1000, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
