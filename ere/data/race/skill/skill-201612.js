const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201612,
  '尻尾の滝登り',
  'レース中盤にスキルを多く発動すると\n速度が上がる',
  20161,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.activate_count_middle >= 3, () => true],
  [3, 0],
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
);
