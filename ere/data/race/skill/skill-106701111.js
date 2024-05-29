const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106701111,
  '金剛不壊',
  'レース中盤が迫ったとき\n中団以降にいると持久力を回復し\n速度がわずかに上がる＜作戦・差し＞',
  10670111,
  6,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate >= 40,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 1500, 0],
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
);
