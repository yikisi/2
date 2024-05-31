const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120451,
  '忍法・ほほえみ心結の印',
  'レース中盤のコーナーで好位置にいると\n持久力を回復する\n中距離か長距離レースなら\nさらに速度を少し上げ続ける',
  12045,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.phase === 1 &&
        args.distance_type === 3 &&
        args.corner !== 0 &&
        args.order_rate >= 20 &&
        args.order_rate <= 50) ||
      (args.phase === 1 &&
        args.distance_type === 4 &&
        args.corner !== 0 &&
        args.order_rate >= 20 &&
        args.order_rate <= 50),
    (args) =>
      args.phase === 1 &&
      args.corner !== 0 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
  ],
  [6, 0],
  [500, 500],
  [
    [9, 27, 0],
    [9, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.25, 0],
    [0.055, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
  false,
);
