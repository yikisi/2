const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200732,
  '食い下がり',
  '最終コーナー以降に詰め寄られると\n速度がわずかに上がり、加速力が\nほんのちょっと上がる＜中距離＞',
  20073,
  1,
  2,
  217,
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
    [0.15, 0.05, 0],
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
  [20, 0],
  1,
);
