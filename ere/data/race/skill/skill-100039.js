const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100039,
  '没有舞步，我依然……',
  '在比赛终盘中幅提升速度，并恢复冷静',
  10003,
  5,
  18,
  340,
  [(args) => args.phase >= 2, () => true],
  [(args) => args.is_last_straight === 1, () => false],
  [5, 0],
  [500, 0],
  [
    [27, 13, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.3, 0, 0],
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
  [40, 0],
  0,
  false,
);
