const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201401,
  '努力家',
  '追い抜こうとするときしばらくの間\n加速力が少し上がる＜作戦・差し＞',
  20140,
  2,
  334,
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
    [3000, 0, 0],
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
  [40, 0],
  1,
);
