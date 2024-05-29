const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108601211,
  '高嶺の艶笑',
  'レース中盤にしばらくの間速度が上がる\n＜マイル/中距離＞',
  10860121,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 && args.phase_random === 1) ||
      (args.distance_type === 3 && args.phase_random === 1),
    () => true,
  ],
  [4, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
);
