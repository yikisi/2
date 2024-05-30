const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110581,
  'Spooky-Scary-Happy',
  '最終直線に入ったとき前の方だと速度を\n上げ、前2人後ろ2人までの\nウマ娘をちょっと萎縮させる',
  11058,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.is_last_straight_onetime === 1 && args.order_rate <= 40,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 21, 21],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, -0.05, -0.05],
    [0, 0, 0],
  ],
  [
    [1, 9, 10],
    [0, 0, 0],
  ],
  [
    [0, 2, 2],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
