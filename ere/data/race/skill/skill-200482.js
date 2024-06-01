const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200482,
  '混战冷静',
  '比赛中盘被包围时，持久力略微回复',
  20048,
  1,
  1,
  217,
  [() => true, () => true],
  [(args) => args.phase === 1 && args.is_surrounded === 1, () => false],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
  false,
);
