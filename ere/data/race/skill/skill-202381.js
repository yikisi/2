const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202381,
  'ブレイクスルー',
  'レース中盤に後方にいると速度が上がり\nコース取りがうまくなる＜作戦・追込＞',
  20238,
  2,
  10,
  508,
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
    [0.35, 0.035, 0],
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
  false,
);
