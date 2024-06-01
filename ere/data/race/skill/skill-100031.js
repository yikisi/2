const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100031,
  '究极帝王舞步',
  '在比赛终盘缩小与对手的差距时，就会在最终直线展现出华丽的步伐，大幅提升速度',
  10003,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.order <= 3 &&
      args.bashin_diff_infront <= 1 &&
      args.is_overtake === 1,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
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
  false,
);
