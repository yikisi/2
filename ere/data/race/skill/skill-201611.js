const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201611,
  '尻尾上がり',
  'レース中盤にスキルを多く発動すると\n速度がわずかに上がる',
  20161,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.activate_count_middle >= 3, () => false],
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
  false,
);
