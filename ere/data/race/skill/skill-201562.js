const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201562,
  '幸运7号',
  '枠号为7时稍微会有好事发生',
  20156,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.random_lot <= 50 && args.post_number === 7, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [1, 2, 3],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 40, 40],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [15, 15],
  1,
  false,
);
