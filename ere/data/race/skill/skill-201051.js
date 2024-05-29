const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201051,
  'ギアチェンジ',
  'レース中盤に前の方にいると\n速度が上がる＜マイル＞',
  20105,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_random === 1 &&
      args.order_rate <= 50,
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
