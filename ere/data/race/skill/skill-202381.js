const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202381,
  'ブレイクスルー',
  'レース中盤に後方にいると速度が上がり\nコース取りがうまくなる＜作戦・追込＞',
  20238,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.phase_random === 1 &&
      args.running_style === 4 &&
      args.order_rate >= 50,
    () => true,
  ],
  [2.4, 0],
  [500, 500],
  [
    [27, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 350, 0],
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
  [30, 30],
  1,
);
