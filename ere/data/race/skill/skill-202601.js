const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202601,
  'ルミネセンス',
  'レース中にスキルを13回発動すると\n前に出る＜中距離＞',
  20260,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.distance_type === 3 && args.activate_count_all >= 13,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [22, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
  false,
);
