const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201151,
  '独占力',
  'レース終盤に後ろの方にいると\n前の速度を下げる＜中距離＞',
  20115,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-2500, 0, 0],
    [0, 0, 0],
  ],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [30, 30],
  1,
);
