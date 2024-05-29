const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202131,
  '荒ぶる旋風',
  'レース中盤に前の方にいると\n後ろの速度をわずかに下げ\n自分の速度を上げる＜中距離＞',
  20213,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 && args.phase_random === 1 && args.order <= 3,
    () => true,
  ],
  [1.8, 0],
  [500, 500],
  [
    [27, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, -1500, 0],
    [0, 0, 0],
  ],
  [
    [1, 10, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  1,
);
