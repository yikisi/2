const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201071,
  '姉御肌',
  '追い抜こうとすると速度が上がる\n＜マイル＞',
  20107,
  2,
  4,
  334,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_overtake === 1 &&
      args.accumulatetime >= 5,
    () => true,
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
    [3500, 0, 0],
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
);
