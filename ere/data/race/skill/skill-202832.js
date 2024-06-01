const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202832,
  '两手准备',
  '比赛中盘发动技能时速度略微提升，之后在比赛终盘发动技能时，略微向前突进＜沙土＞',
  20283,
  1,
  2,
  263,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase === 1 &&
      args.is_activate_any_skill === 1,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.phase >= 2 &&
      args.is_activate_any_skill === 1,
  ],
  [2.4, 2.4],
  [500, 500],
  [
    [27, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.05, 0, 0],
    [0.05, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [10, 10],
  1,
  true,
);
