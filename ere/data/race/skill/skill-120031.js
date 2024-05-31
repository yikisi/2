const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120031,
  '歌舞歓楽や、ああをかし',
  'レース後半に前の方で詰め寄られると\n終盤の最終コーナー後半以降で速度が\n上がる、2400m～2500mのレースでは\nさらにわずかに前に出る',
  12003,
  5,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate <= 50 &&
      args.overtake_target_time >= 2,
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate <= 50 &&
      args.overtake_target_time >= 2,
  ],
  [
    (args) =>
      (args.phase >= 2 &&
        args.is_finalcorner_laterhalf === 1 &&
        args.course_distance >= 2400 &&
        args.course_distance <= 2500) ||
      (args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner === 0 &&
        args.course_distance >= 2400 &&
        args.course_distance <= 2500),
    (args) =>
      (args.phase >= 2 && args.is_finalcorner_laterhalf === 1) ||
      (args.phase >= 2 && args.is_finalcorner === 1 && args.corner === 0),
  ],
  [5, 5],
  [500, 500],
  [
    [27, 22, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.15, 0],
    [0.35, 0, 0],
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
  false,
);
