const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201211,
  '怒涛の追い上げ',
  'レース終盤で追い抜くと\n速度が上がり加速力がちょっと上がる\n＜長距離＞',
  20121,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase === 2 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 1000, 0],
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
  [1, 0],
  [60, 0],
  1,
);
