const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201502,
  '策士',
  'レース終盤に後ろの方にいると\n視野がわずかに広くなる＜作戦・追込＞',
  20150,
  1,
  85,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [50000, 0, 0],
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
