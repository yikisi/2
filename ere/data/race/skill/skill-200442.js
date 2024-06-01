const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200442,
  '隐身蓑衣',
  '在比赛序盘或中盘前方堵塞时，保持坚定的意志稍微恢复持久力，并且路线选择稍微变得明智',
  20044,
  1,
  1,
  217,
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
    [0.015, 0.015, 0],
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
  [20, 0],
  1,
  false,
);
