const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108801211,
  'ミリオンカード',
  'レース終盤始めの方で中団以降にいると\n加速力が上がる、2200m～2400mの\nレースなら持久力を少し使い終盤\n始めの方早めにすごく上がる＜中距離＞',
  10880121,
  6,
  3,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.course_distance >= 2200 &&
      args.course_distance <= 2400 &&
      args.phase_firstquarter_random === 2 &&
      args.order_rate >= 40,
    (args) =>
      (args.distance_type === 3 &&
        args.course_distance < 2200 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 40) ||
      (args.distance_type === 3 &&
        args.course_distance > 2400 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 40),
  ],
  [1.8, 1.8],
  [500, 500],
  [
    [31, 9, 0],
    [31, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [5000, -200, 0],
    [4000, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
);
