const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105002111,
  '見せつけてやる！',
  'レース中盤に後方にいるとしばらくの間\n速度が上がりコース取りがうまくなる\n＜作戦・追込＞',
  10500211,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.phase_random === 1 &&
      args.running_style === 4 &&
      args.order_rate >= 50,
    () => false,
  ],
  [4, 0],
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
