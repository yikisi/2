const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  104102211,
  '驀進！爆進！バクシーン！',
  '直線でしばらくの間前に出る＜短距離＞',
  10410221,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) => args.distance_type === 1 && args.straight_random === 1,
    () => false,
  ],
  [4, 0],
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
