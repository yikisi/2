const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201072,
  '負けん気',
  '追い抜こうとすると\n速度がわずかに上がる＜マイル＞',
  20107,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_overtake === 1 &&
      args.accumulatetime >= 5,
    () => true,
  ],
  [2.4, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, 0, 0],
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
);
