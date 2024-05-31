const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  1400011,
  'マスターズドライブ',
  'ラストスパートの最中に\n速度がすごく上がる',
  140001,
  5,
  18,
  340,
  [() => true, () => true],
  [(args) => args.is_lastspurt === 1 && args.phase === 3, () => false],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
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
  0,
  false,
);
