const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110011,
  '激动人心♪海中深潜',
  '比赛中盘时如果使用了两次技能且位于队伍中间时，回复体力并少量提升速度',
  11001,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.order >= 2 &&
      args.order_rate <= 80 &&
      args.activate_count_middle >= 2,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.25, 0],
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
  [1, 2],
  [30, 30],
  0,
  false,
);
