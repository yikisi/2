const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200851,
  '领放彷徨',
  '比赛终盘令战术是领放的赛马娘彷徨，使其速度略微下降',
  20085,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_nige_otherself >= 1 && args.phase_random === 2,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.15, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [10, 10],
  1,
  false,
);
