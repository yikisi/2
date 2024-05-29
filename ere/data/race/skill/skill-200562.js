const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200562,
  'スタミナキープ',
  'レース中盤が迫ったとき前の方にいると\nわずかに疲れにくくなる\n＜作戦・先行＞',
  20056,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate <= 50,
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
    [0.015, 0, 0],
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
