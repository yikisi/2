const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120321,
  '超光速微粒子の可能性',
  '終盤の最終コーナー以降で前方だと\n少しの間速度がすごく上がる\n中距離レースでは効果が変わり\n少しの間すごく前に出る',
  12032,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate <= 50 &&
      args.distance_type === 3,
    (args) =>
      args.phase >= 2 && args.is_finalcorner === 1 && args.order_rate <= 50,
  ],
  [4, 4],
  [500, 500],
  [
    [22, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [4500, 0, 0],
    [4500, 0, 0],
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
