const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200851,
  '逃げためらい',
  'レース終盤に作戦・逃げのウマ娘を\nためらわせて速度をわずかに下げる',
  20085,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_nige_otherself >= 1 && args.phase_random === 2,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-1500, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [10, 10],
  1,
);
