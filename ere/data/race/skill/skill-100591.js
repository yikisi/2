const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100591,
  '彼方、その先へ…',
  '掛からず、中盤の最終コーナーか\n終盤の最終コーナーではないコーナーを\n中団で進むと奮い立ち加速力が上がる',
  10059,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.phase >= 2 &&
        args.corner !== 0 &&
        args.is_finalcorner === 0 &&
        args.temptation_count === 0 &&
        args.order_rate >= 50 &&
        args.order_rate <= 70) ||
      (args.phase === 1 &&
        args.corner !== 0 &&
        args.is_finalcorner === 1 &&
        args.temptation_count === 0 &&
        args.order_rate >= 50 &&
        args.order_rate <= 70),
    () => true,
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
);
