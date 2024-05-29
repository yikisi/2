const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100671,
  '晦冥を照らせ永遠の耀き',
  '最終直線に入ったとき好位置につけて\nいると強い意志で速度が上がる\n先頭が近い場合はすごく上がる',
  10067,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight_onetime === 1 &&
      args.order >= 2 &&
      args.order <= 5 &&
      args.distance_diff_top <= 5,
    (args) =>
      args.is_last_straight_onetime === 1 &&
      args.order >= 2 &&
      args.order <= 5 &&
      args.distance_diff_top > 5,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
