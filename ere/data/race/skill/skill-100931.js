const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100931,
  '幸福的湛蓝光芒',
  '终盘初段的某处位于前方时，稍微向前突进，若是短距离或英里比赛，则提升技能效果',
  10093,
  5,
  18,
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
    [0.35, 0, 0],
    [0.25, 0, 0],
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
  false,
);
