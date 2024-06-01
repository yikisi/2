const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201592,
  '狂热爱马仕',
  '附近有多个马娘时，加快速度',
  20159,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.near_count >= 3 && args.accumulatetime >= 5, () => false],
  [3, 0],
  [500, 0],
  [
    [27, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
  false,
);
