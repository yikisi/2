const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202932,
  '踏影',
  '比赛后半段进行超越时，速度稍微提升＜作战・追赶＞',
  20293,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.distance_rate >= 50 &&
      args.is_overtake === 1,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
