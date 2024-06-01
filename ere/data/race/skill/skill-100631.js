const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100631,
  '百炼成钢',
  '如果能冷静地进行比赛，在最终冲刺的关键时刻会持续少量提升速度',
  10063,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_lastspurt === 1 &&
      args.phase === 3 &&
      args.temptation_count === 0,
    () => false,
  ],
  [6, 0],
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
    [0.25, 0, 0],
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
