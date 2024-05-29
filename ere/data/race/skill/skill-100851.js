const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100851,
  '至上であれ',
  '冷静に走行し終盤突入時に後方付近だと\n少し前に出て、先頭から4人までの\nウマ娘をちょっと萎縮させる',
  10085,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.order_rate >= 60 &&
      args.order_rate <= 90 &&
      args.temptation_count === 0,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [22, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, -0.05, 0],
    [0, 0, 0],
  ],
  [
    [1, 7, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
);
