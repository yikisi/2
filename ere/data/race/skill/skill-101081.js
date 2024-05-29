const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101081,
  '羅刹、赤翼にて天上へ至らん',
  'レース中間地点で後方にいると\n速度が上がる、その後終盤の\n最終コーナーで追い抜こうとすると\n短い間わずかに前に出る',
  10108,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 50,
    (args) =>
      args.phase >= 2 &&
      args.is_activate_other_skill_detail === 1 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_overtake === 1,
  ],
  [5, 3],
  [500, 500],
  [
    [27, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
    [1500, 0, 0],
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
