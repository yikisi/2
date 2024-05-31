const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120601,
  'もちっと・ハレハレ',
  '終盤の最終コーナー以降で中団以降だと\n少しの間速度がすごく上がる\n中距離レースでは効果が変わり\n少しの間すごく前に出る',
  12060,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate >= 40 &&
      args.distance_type === 3,
    (args) =>
      args.phase >= 2 && args.is_finalcorner === 1 && args.order_rate >= 40,
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
    [0.45, 0, 0],
    [0.45, 0, 0],
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
  false,
);
