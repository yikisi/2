const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202581,
  '脱兎の先へ',
  'レース中盤に持久力を回復し\nさらに速度が少し上がる＜長距離＞',
  20258,
  2,
  9,
  633,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => true],
  [2.4, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.25, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  1,
);
