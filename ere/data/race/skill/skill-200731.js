const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200731,
  '勝利への執念',
  '最終コーナー以降に詰め寄られると\n速度が上がり、加速力がちょっと上がる\n＜中距離＞',
  20073,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.is_finalcorner === 1 &&
      args.overtake_target_time >= 2,
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
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
  [1, 0],
  [60, 0],
  1,
);
