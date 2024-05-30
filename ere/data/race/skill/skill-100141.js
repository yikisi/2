const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100141,
  'プランチャ☆ガナドール',
  '最終直線で余力を持って前にいると\nより優位を保ちやすくなる',
  10014,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 && args.hp_per >= 30 && args.order <= 2,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.3, 0],
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
  [1, 3],
  [30, 30],
  0,
);
