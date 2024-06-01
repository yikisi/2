const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100391,
  '以姬之名，手握胜利',
  '在最终直线进行名次争夺时，可爱地飞奔提升速度',
  10039,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 && args.blocked_side_continuetime >= 2,
    () => false,
  ],
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
  [1, 0],
  [60, 0],
  0,
  false,
);
