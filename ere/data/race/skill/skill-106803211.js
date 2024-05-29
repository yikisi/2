const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106803211,
  '万里飛び越えソイヤッ！',
  'ラストスパートの直線で前の方だと\n加速力が上がる、その後最終直線で\nわずかに前に出る＜逃げ・長距離＞',
  10680321,
  6,
  3,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 1 &&
      args.is_lastspurt === 1 &&
      args.corner === 0 &&
      args.order <= 3,
    (args) =>
      args.is_activate_other_skill_detail === 1 && args.is_last_straight === 1,
  ],
  [0.9, 3],
  [500, 500],
  [
    [31, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [4000, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
);
