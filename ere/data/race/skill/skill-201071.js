const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201071,
  '御姐气质',
  '更容易赶超成功＜英里＞',
  20107,
  2,
  10,
  334,
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
