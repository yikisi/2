const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201212,
  '追い上げ',
  'レース終盤で追い抜くと\n速度がわずかに上がり加速力が\nほんのちょっと上がる＜長距離＞',
  20121,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase === 2 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, 500, 0],
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
  [20, 0],
  1,
);
