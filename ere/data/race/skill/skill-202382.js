const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202382,
  '打開策',
  'レース中盤に後方にいると\n速度がわずかに上がり、コース取りが\nわずかにうまくなる＜作戦・追込＞',
  20238,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.phase_random === 1 &&
      args.running_style === 4 &&
      args.order_rate >= 50,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [27, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.015, 0],
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
  [1, 3],
  [10, 10],
  1,
);
