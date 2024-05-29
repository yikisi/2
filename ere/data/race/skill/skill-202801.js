const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202801,
  '機先の勝負',
  'レース中盤が迫ったとき\n速度が上がる',
  20280,
  2,
  508,
  [() => true, () => true],
  [(args) => args.phase_laterhalf_random === 0, () => true],
  [1.8, 0],
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
