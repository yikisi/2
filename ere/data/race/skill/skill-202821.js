const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202821,
  '万里一空',
  'ラストスパートの直線で前の方だと\n加速力が上がる＜逃げ・長距離＞',
  20282,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 1 &&
      args.is_lastspurt === 1 &&
      args.corner === 0 &&
      args.order <= 3,
    () => false,
  ],
  [0.9, 0],
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
  1,
  false,
);
