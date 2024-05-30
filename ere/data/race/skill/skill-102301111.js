const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  102301111,
  '想定通り、余裕十分',
  'レース中盤が迫ったとき前の方にいると\n持久力をすごく回復する＜作戦・先行＞',
  10230111,
  6,
  25,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate <= 50,
    () => false,
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
    [0.075, 0, 0],
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
