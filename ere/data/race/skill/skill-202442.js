const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202442,
  '投机之心',
  '比赛中极少情况下发挥更强的实力速度、力量、根性少量提升人气较低的情况下更容易触发',
  20244,
  1,
  0,
  217,
  [() => true, () => true],
  [
    (args) => args.popularity <= 3 && args.random_lot <= 15,
    (args) => args.popularity >= 4 && args.random_lot <= 30,
  ],
  [-0.0001, -0.0001],
  [0, 0],
  [
    [1, 3, 4],
    [1, 3, 4],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 40, 40],
    [40, 40, 40],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
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
