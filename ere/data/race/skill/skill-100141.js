const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100141,
  '胜利者☆飞扑',
  '在最终直线上仍保有余力且处于前列时，更容易保持优势',
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
  false,
);
