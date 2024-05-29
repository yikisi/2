const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110711,
  'Danser le présent',
  '終盤の最終直線で好位置にいるとき\n後ろのウマ娘と近いと\n持久力を使って速度を上げ\nさらにわずかに前に出る',
  11071,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_last_straight === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40 &&
      args.bashin_diff_behind <= 1,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 22, 9],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 1500, -300],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
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
