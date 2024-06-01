const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202601,
  '闪光',
  '比赛中触发了13次技能的话，向前突进＜中距离＞',
  20260,
  2,
  10,
  508,
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
    [0.35, 0, 0],
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
  [60, 0],
  1,
  false,
);
