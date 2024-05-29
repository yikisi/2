const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202442,
  'やまっけ',
  'レースでごくまれにさらなる力を発揮し\nスピード、パワー、根性が少し上がる\n人気が低いと力を発揮しやすくなる',
  20244,
  1,
  217,
  [() => true, () => true],
  [
    (args) => args.popularity <= 3 && args.random_lot === 15,
    (args) => args.popularity >= 4 && args.random_lot === 30,
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
    [400000, 400000, 400000],
    [400000, 400000, 400000],
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
);
