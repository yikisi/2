const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201272,
  '领者的自尊心',
  '在比赛序盘或中盘，稍微擅于超越和竞争＜作战・领放＞',
  20127,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 1 &&
        args.phase <= 1 &&
        args.change_order_onetime > 0 &&
        args.accumulatetime >= 5) ||
      (args.running_style === 1 &&
        args.phase <= 1 &&
        args.blocked_side_continuetime >= 2 &&
        args.accumulatetime >= 5),
    () => false,
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
