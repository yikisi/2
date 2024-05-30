const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202472,
  '食らいつき',
  'レース後半に追い抜こうとすると\n速度がわずかに上がる＜先行/差し＞',
  20247,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 &&
        args.distance_rate >= 50 &&
        args.is_overtake === 1) ||
      (args.running_style === 3 &&
        args.distance_rate >= 50 &&
        args.is_overtake === 1),
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
);
