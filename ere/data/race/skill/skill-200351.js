const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200351,
  '円弧のマエストロ',
  '無駄のないコーナリングで\n持久力が回復する',
  20035,
  2,
  4,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.corner_random === 1 ||
      args.corner_random === 2 ||
      args.corner_random === 3 ||
      args.corner_random === 4,
    () => true,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 0, 0],
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
  [2, 0],
  [60, 0],
  1,
);
