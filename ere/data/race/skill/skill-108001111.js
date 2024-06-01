const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108001111,
  '情报强者',
  '在比赛序盘发动多个技能时，提升加速度如果比赛为英里或中距离，则技能效果增加',
  10800111,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 && args.activate_count_start >= 3) ||
      (args.distance_type === 3 && args.activate_count_start >= 3),
    (args) =>
      (args.distance_type === 1 && args.activate_count_start >= 3) ||
      (args.distance_type === 4 && args.activate_count_start >= 3),
  ],
  [3, 3],
  [500, 500],
  [
    [31, 0, 0],
    [31, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.5, 0, 0],
    [0.4, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
  false,
);
