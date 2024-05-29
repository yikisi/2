const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100891,
  'Celeste Oath',
  'レース中間付近で前の方にいると速度が\n上がりさらに持久力がわずかに回復する\n2400ｍ以上のレースだと回復量が\n増える',
  10089,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.course_distance >= 2400,
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 9, 0],
    [27, 9, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 350, 0],
    [3500, 150, 0],
  ],
  [
    [1, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
);
