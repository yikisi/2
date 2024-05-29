const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201402,
  'がんばり屋',
  '追い抜こうとするときしばらくの間\n加速力がわずかに上がる＜作戦・差し＞',
  20140,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.is_overtake === 1 &&
      args.accumulatetime >= 5,
    () => true,
  ],
  [4, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 0, 0],
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
