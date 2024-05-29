const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110221,
  'Best day ever',
  '終盤の最終コーナー以降に\n好位置にいると速度が上がる\nゴールまで遠い場合最高の走りで\nさらに加速力がちょっと上がる',
  11022,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 401 &&
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 1000, 0],
    [3500, 0, 0],
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
);
