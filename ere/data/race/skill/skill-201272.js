const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201272,
  '先頭プライド',
  'レース序盤または中盤に\n追い抜かれるか競り合ったとき\n速度がわずかに上がる＜作戦・逃げ＞',
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
);
