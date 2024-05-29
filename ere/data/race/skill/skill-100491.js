const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100491,
  '剣ヶ峰より、狂気に嗤え',
  '最終コーナー以降に追い抜こうと\nしていた場合、残り400ｍを切ってから\n好位置にいると速度が上がる\n人気が低い場合はすごく上がる',
  10049,
  5,
  5,
  340,
  [
    (args) => args.is_finalcorner === 1 && args.is_overtake === 1,
    (args) => args.is_finalcorner === 1 && args.is_overtake === 1,
  ],
  [
    (args) =>
      args.remain_distance <= 400 &&
      args.order_rate >= 30 &&
      args.order_rate <= 50 &&
      args.popularity >= 4,
    (args) =>
      args.remain_distance <= 400 &&
      args.order_rate >= 30 &&
      args.order_rate <= 50 &&
      args.popularity < 4,
  ],
  [5, 5],
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
    [4500, 0, 0],
    [3500, 0, 0],
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
);
