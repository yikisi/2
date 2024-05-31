const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110111,
  'ゲインヒール・スペリアー',
  '中盤に後ろの方で順位を下げた時に\n優しい光で持久力をすごく回復する',
  11011,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.change_order_onetime > 0 &&
      args.order_rate >= 40,
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
  0,
  false,
);
