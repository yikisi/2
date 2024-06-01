const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200841,
  '领放焦躁',
  '比赛中盘令战术是领放的赛马娘焦躁，使其略微容易疲劳',
  20084,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_nige_otherself >= 1 && args.phase_random === 1,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.01, 0, 0],
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
  [2, 5],
  [10, 10],
  1,
  false,
);
