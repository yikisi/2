const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  1400011,
  'マスターズドライブ',
  'ラストスパートの最中に\n速度がすごく上がる',
  140001,
  5,
  340,
  [() => true, () => true],
  [(args) => args.is_lastspurt === 1 && args.phase === 3, () => true],
  [5, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [4500, 0, 0],
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
);
