const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202802,
  '序盤巧者',
  'レース中盤が迫ったとき\n速度がわずかに上がる',
  20280,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.phase_laterhalf_random === 0, () => false],
  [1.8, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
