const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202021,
  '強攻策',
  'レース中盤に後方にいると\nしばらくの間速度が少し上がる\n＜作戦・追込＞',
  20202,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_random === 1 &&
      args.order_rate >= 50,
    () => true,
  ],
  [4, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
);
