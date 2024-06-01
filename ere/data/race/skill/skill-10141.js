const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10141,
  '热血☆兄弟',
  '在最终直线上仍保有余力且处于前列时，更容易保持优势',
  1014,
  3,
  18,
  240,
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
    [0.15, 0.2, 0],
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
  false,
);
