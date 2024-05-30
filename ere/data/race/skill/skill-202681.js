const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202681,
  'ブチ☆アゲ↑バイブス',
  'レース中盤に速度が上がり\nさらに持久力を少し回復する\n＜長距離＞',
  20268,
  2,
  10,
  633,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => false],
  [2.4, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.035, 0],
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
