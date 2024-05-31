const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100481,
  'YEAH☆VIVID TIME!',
  '最終直線を走行中に前の方で\n追い抜こうとするか詰め寄られると\nテンションを上げて速度を上げる',
  10048,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.is_last_straight === 1 &&
        args.order_rate <= 40 &&
        args.overtake_target_time >= 1) ||
      (args.is_last_straight === 1 &&
        args.order_rate <= 40 &&
        args.is_overtake === 1),
    () => false,
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
  false,
);
