const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200381,
  '好転一息',
  'レース中盤の直線で持久力が回復する',
  20038,
  2,
  508,
  [() => true, () => true],
  [(args) => args.phase === 1 && args.corner === 0, () => true],
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
    [550, 0, 0],
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
