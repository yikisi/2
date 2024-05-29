const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100931,
  '幸せの青い光',
  '終盤始めのどこかで前方にいると\n少し前に出る、短距離かマイル\nレースの場合は効果が増える',
  10093,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20) ||
      (args.distance_type === 2 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20),
    (args) =>
      (args.distance_type === 3 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20) ||
      (args.distance_type === 4 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20),
  ],
  [5, 5],
  [500, 500],
  [
    [22, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
    [2500, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
);
