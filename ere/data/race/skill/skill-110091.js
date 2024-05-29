const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110091,
  "Queen's Lumination",
  'レース後半の直線で前の方にいると\n速度を少し上げ続ける、さらに先頭で\n後ろのウマ娘と近い場合効果が増える',
  11009,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.corner === 0 &&
      args.order === 1 &&
      args.bashin_diff_behind <= 1,
    (args) => args.distance_rate >= 50 && args.corner === 0 && args.order <= 2,
  ],
  [6, 6],
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
    [3500, 0, 0],
    [2500, 0, 0],
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
