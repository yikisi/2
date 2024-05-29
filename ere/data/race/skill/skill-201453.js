const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201453,
  '月影一閃',
  '直線で速度が上がる\n＜作戦・追込＞',
  20145,
  2,
  4,
  508,
  [() => true, () => true],
  [
    (args) => args.running_style === 4 && args.straight_random === 1,
    () => true,
  ],
  [3, 0],
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
    [3500, 0, 0],
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
