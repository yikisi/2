const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110271,
  'あなたに捧げるフリーポア',
  '終盤目前の下り坂で2番手以降かつ\n先頭から4バ身以内にいると\n少しの間速度が上がる、中距離レース\nでは加速力もちょっと上がる',
  11027,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.slope === 2 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.distance_diff_top <= 10 &&
      args.distance_type === 3,
    (args) =>
      args.distance_rate >= 60 &&
      args.slope === 2 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.distance_diff_top <= 10 &&
      args.distance_type !== 3,
  ],
  [4, 4],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 1000, 0],
    [3500, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
