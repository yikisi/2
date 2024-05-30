const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201472,
  'お見通し',
  '左右に移動すると状況を把握して\n視野がわずかに広くなる＜作戦・追込＞',
  20147,
  1,
  2,
  85,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 4 && args.is_move_lane === 1) ||
      (args.running_style === 4 && args.is_move_lane === 2),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [5, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
);
