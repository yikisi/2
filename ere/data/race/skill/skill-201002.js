const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201002,
  '仕掛け準備',
  'レース中盤にしばらくの間\nコース取りが少し上手くなり\n加速力がわずかに上がる＜短距離＞',
  20100,
  1,
  2,
  174,
  [() => true, () => true],
  [(args) => args.distance_type === 1 && args.phase_random === 1, () => true],
  [4, 0],
  [500, 0],
  [
    [28, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [250, 2000, 0],
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
  [3, 0],
  [35, 0],
  1,
);
