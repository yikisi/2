const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201072,
  '不服输',
  '略微容易赶超成功＜英里＞',
  20107,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_overtake === 1 &&
      args.accumulatetime >= 5,
    () => false,
  ],
  [2.4, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
