const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  102301211,
  '計画的クールダウン',
  'レース中盤に持久力をすごく回復する\n＜長距離＞',
  10230121,
  6,
  2,
  633,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => true],
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
    [750, 0, 0],
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
