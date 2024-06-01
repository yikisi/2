const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202471,
  '猛追',
  '比赛后半段进行追赶时，速度提升＜先行/居中＞',
  20247,
  2,
  10,
  508,
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
