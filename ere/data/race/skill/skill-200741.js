const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200741,
  'クールダウン',
  'レース中盤に息を入れて疲れにくくなる\n＜長距離＞',
  20074,
  2,
  9,
  508,
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
