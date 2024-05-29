const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110071,
  'Adventure of 564',
  '在比赛后半段的某个地方少量提升速度，顺便使其他所有技能的冷却时间减少一半',
  11007,
  5,
  18,
  340,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => true],
  [5, 0],
  [500, 0],
  [
    [27, 37, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 2, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
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
