const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120011,
  '威風堂々、夢錦！',
  '終盤最終コーナーでスキルを発動すると\n声援を胸に速度を少し上げる\n中山レース場ならすごく上げる',
  12001,
  5,
  18,
  340,
  [(args) => args.track_id === 10005, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_activate_any_skill === 1,
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_activate_any_skill === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 0, 0],
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
