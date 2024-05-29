const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110351,
  '夢の先へ、届け！',
  'ラストスパートの最終直線に中団以降で\n速度を少しずつ上げ、効果中スキルを\n発動すると3回まで効果が増える',
  11035,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_lastspurt === 1 &&
      args.is_last_straight === 1 &&
      args.order_rate >= 40,
    () => true,
  ],
  [6, 0],
  [500, 0],
  [
    [27, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 500, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
