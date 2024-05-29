const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200652,
  'スプリントギア',
  'レース終盤に加速力がわずかに上がる\n＜短距離＞',
  20065,
  1,
  217,
  [() => true, () => true],
  [(args) => args.distance_type === 1 && args.phase_random === 2, () => true],
  [3, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
);
