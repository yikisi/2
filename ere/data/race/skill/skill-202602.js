const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202602,
  '点火',
  '比赛中触发了13次技能的话，稍微向前突进＜中距离＞',
  20260,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) => args.distance_type === 3 && args.activate_count_all >= 13,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [22, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
