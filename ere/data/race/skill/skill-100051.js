const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100051,
  '煌星のヴォードヴィル',
  '終盤に前の方で少し抜け出ていると\n残り300ｍを切ってから輝きを増し\n速度がすごく上がる',
  10005,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.order_rate <= 40 &&
      args.behind_near_lane_time_set1 >= 1,
    () => true,
  ],
  [(args) => args.remain_distance <= 300, () => false],
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
    [0.45, 0, 0],
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
