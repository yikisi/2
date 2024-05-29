const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10141,
  '熱血☆アミーゴ',
  '最終直線で余力を持って前にいると\nわずかに優位を保ちやすくなる',
  1014,
  3,
  5,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 && args.hp_per >= 30 && args.order <= 2,
    () => true,
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
    [1500, 2000, 0],
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
  [15, 15],
  0,
);
