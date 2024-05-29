const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201691,
  '潜伏態勢',
  'レース中盤が迫ったとき\n中団以降にいると持久力を回復する\n＜作戦・差し＞',
  20169,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate >= 40,
    () => true,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0, 0],
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
  [60, 0],
  1,
);
