const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202132,
  '気迫を込めて',
  'レース中盤に前の方にいると\n後ろの速度をほんのわずかに下げ\n自分の速度をわずかに上げる＜中距離＞',
  20213,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 && args.phase_random === 1 && args.order <= 3,
    () => false,
  ],
  [1.8, 0],
  [500, 0],
  [
    [27, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, -0.035, 0],
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
  [20, 0],
  1,
  false,
);
