const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200441,
  '钢铁意志',
  '在比赛序盘或中盘前方堵塞时，保持坚定的意志恢复持久力，并且路线选择变得更明智',
  20044,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.phase <= 1 &&
      args.accumulatetime >= 5 &&
      args.blocked_front_continuetime >= 1,
    () => false,
  ],
  [2, 0],
  [500, 0],
  [
    [9, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.035, 0],
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
  [2, 0],
  [60, 0],
  1,
  false,
);
