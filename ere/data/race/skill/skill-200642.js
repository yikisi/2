const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200642,
  '直線一気',
  'ラストスパートの直線で\n加速力がわずかに上がる＜作戦・追込＞',
  20064,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 && args.is_lastspurt === 1 && args.corner === 0,
    () => true,
  ],
  [0.9, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
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
