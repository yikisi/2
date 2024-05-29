const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201692,
  '静かな呼吸',
  'レース中盤が迫ったとき\n中団以降にいると持久力を\nわずかに回復する＜作戦・差し＞',
  20169,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate >= 40,
    () => true,
  ],
  [0, 0],
  [500, 500],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [150, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
);
