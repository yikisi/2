const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100151,
  'ヴィットーリアに捧ぐ舞踏',
  '最終コーナー以降に前の方で\n前または後ろのウマ娘と距離が近いと\n王たる輝きで速度が上がる',
  10015,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.is_finalcorner === 1 &&
        args.bashin_diff_behind <= 1 &&
        args.order <= 4) ||
      (args.is_finalcorner === 1 &&
        args.bashin_diff_infront <= 1 &&
        args.order <= 4),
    () => false,
  ],
  [5, 0],
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
  false,
);
