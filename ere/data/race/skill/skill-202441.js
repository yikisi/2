const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202441,
  '胜负师',
  '比赛中偶尔会发挥更强的实力速度、力量、根性大幅提升人气较低的情况下更容易触发',
  20244,
  2,
  8,
  508,
  [() => true, () => true],
  [
    (args) => args.popularity <= 3 && args.random_lot <= 30,
    (args) => args.popularity >= 4 && args.random_lot <= 60,
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
    [80, 80, 80],
    [80, 80, 80],
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
  [30, 30],
  0,
  false,
);
