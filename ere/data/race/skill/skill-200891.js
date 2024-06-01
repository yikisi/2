const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200891,
  '居中牵制',
  '比赛初盘对战术是居中的赛马娘进行牵制，使其略微容易疲劳',
  20089,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_sashi_otherself >= 1 &&
      args.phase_random === 0 &&
      args.accumulatetime >= 5,
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
    [3, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
  false,
);
