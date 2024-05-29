const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202441,
  '勝負師',
  'レースでたまにさらなる力を発揮し\nスピード、パワー、根性がすごく上がる\n人気が低いと力を発揮しやすくなる',
  20244,
  2,
  508,
  [() => true, () => true],
  [
    (args) => args.popularity <= 3 && args.random_lot === 30,
    (args) => args.popularity >= 4 && args.random_lot === 60,
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
    [800000, 800000, 800000],
    [800000, 800000, 800000],
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
);
