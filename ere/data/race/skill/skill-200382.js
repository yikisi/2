const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200382,
  '直線回復',
  'レース中盤の直線で\n持久力がわずかに回復する',
  20038,
  1,
  1,
  217,
  [() => true, () => true],
  [(args) => args.phase === 1 && args.corner === 0, () => false],
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
  false,
);
