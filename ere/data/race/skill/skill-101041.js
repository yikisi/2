const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101041,
  '暁の御旗『葛城栄主』！',
  '第3コーナーで先頭なら速度を少し上げ\n持久力を少し回復する、東京の\n中距離レースなら効果時間が増える',
  10104,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.corner === 3 &&
      args.order === 1 &&
      args.track_id === 10006 &&
      args.distance_type === 3,
    (args) => args.corner === 3 && args.order === 1,
  ],
  [6, 5],
  [500, 500],
  [
    [27, 9, 0],
    [27, 9, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 350, 0],
    [2500, 350, 0],
  ],
  [
    [1, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
);
