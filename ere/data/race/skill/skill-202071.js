const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202071,
  '泰然自若',
  'レース中盤始めの方に中団にいると\n速度をわずかに落として\n持久力をすごく回復する＜長距離＞',
  20207,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase_firsthalf_random === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    () => true,
  ],
  [1.2, 0],
  [500, 500],
  [
    [9, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [750, -1500, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [60, 0],
  1,
);
