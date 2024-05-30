const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200911,
  '差しためらい',
  'レース終盤に作戦・差しのウマ娘を\nためらわせて速度をわずかに下げる',
  20091,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_sashi_otherself >= 1 && args.phase_random === 2,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.15, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [
    [3, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [10, 10],
  1,
);
