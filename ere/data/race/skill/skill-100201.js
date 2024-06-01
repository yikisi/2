const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100201,
  'Angling×Scheming',
  '在比赛终盘的弯道上处于第一位时，想着这可真是万幸并提升加速度',
  10020,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.phase >= 2 && args.corner !== 0 && args.order === 1,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  0,
  false,
);
