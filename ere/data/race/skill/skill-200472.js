const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200472,
  'ペースキープ',
  'レース中盤に追い抜かれると\n持久力がわずかに回復する',
  20047,
  1,
  1,
  217,
  [() => true, () => true],
  [(args) => args.phase === 1 && args.change_order_onetime > 0, () => true],
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
