const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202061,
  '日本一のウマ娘',
  '期待を背負った強い想いが力に変わり\n最終コーナーで速度が上がる\n＜長距離＞',
  20206,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.distance_type === 4 && args.is_finalcorner_random === 1,
    () => true,
  ],
  [3, 0],
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
