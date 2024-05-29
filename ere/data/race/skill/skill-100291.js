const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100291,
  'ゆきあかり、おいかけて',
  '残り300mを切って先頭もしくは\n前の方で先頭のウマ娘との距離が近いと\n速度を上げる',
  10029,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_diff_top <= 5 &&
      args.remain_distance <= 300 &&
      args.order_rate <= 40,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
);
