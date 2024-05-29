const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105001111,
  '鬼気森然',
  'レース中盤に最後方付近にいると\n持久力を回復し速度がわずかに上がる\n＜作戦・追込＞',
  10500111,
  6,
  2,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_random === 1 &&
      args.distance_diff_rate >= 75,
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 1500, 0],
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
  [2, 0],
  [60, 0],
  1,
);
