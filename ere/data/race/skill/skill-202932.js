const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202932,
  '影踏み',
  'レース後半に追い抜こうとすると\n速度がわずかに上がる＜作戦・追込＞',
  20293,
  1,
  4,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.distance_rate >= 50 &&
      args.is_overtake === 1,
    () => true,
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
    [1500, 0, 0],
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
);
