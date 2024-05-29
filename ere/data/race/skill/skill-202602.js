const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202602,
  'イグニッション',
  'レース中にスキルを13回発動すると\nわずかに前に出る＜中距離＞',
  20260,
  1,
  4,
  217,
  [() => true, () => true],
  [
    (args) => args.distance_type === 3 && args.activate_count_all >= 13,
    () => true,
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
    [1500, 0, 0],
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
  [20, 0],
  1,
);
