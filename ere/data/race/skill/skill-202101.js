const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202101,
  '高揚感',
  'レース中盤に後ろの方にいると\n速度が上がる＜中距離＞',
  20210,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase_random === 1 &&
      args.order_rate >= 50,
    () => true,
  ],
  [2.4, 0],
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
  1,
);
