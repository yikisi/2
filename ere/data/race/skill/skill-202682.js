const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202682,
  'バイブス上昇',
  'レース中盤に速度がわずかに上がり\nさらに持久力をちょっと回復する\n＜長距離＞',
  20268,
  1,
  2,
  263,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => true],
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
    [0.15, 0.005, 0],
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
  [10, 10],
  1,
);
