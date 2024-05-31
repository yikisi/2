const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100511,
  'つぼみ、ほころぶ時',
  'レース中盤のコーナーで競り合っていた\n場合、終盤かつ最終コーナー半ば以降に\n好位置にいると加速力が上がる',
  10051,
  5,
  18,
  340,
  [
    (args) =>
      args.phase === 1 &&
      args.blocked_side_continuetime >= 2 &&
      args.corner !== 0,
    () => true,
  ],
  [
    (args) =>
      (args.phase >= 2 &&
        args.is_finalcorner_laterhalf === 1 &&
        args.order >= 3 &&
        args.order_rate <= 40) ||
      (args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner === 0 &&
        args.order >= 3 &&
        args.order_rate <= 40),
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
