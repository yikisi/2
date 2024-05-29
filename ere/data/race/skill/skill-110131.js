const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110131,
  '最強の名を懸けて',
  'レース終盤かつ最終コーナー以降に\n前の方で詰め寄られると\n速度を上げ続ける',
  11013,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order <= 4 &&
      args.overtake_target_time >= 1,
    () => true,
  ],
  [6, 0],
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
  0,
);
