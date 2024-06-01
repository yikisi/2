const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201282,
  '随势而动',
  '在上坡时略微不容易疲劳＜作战・领放＞',
  20128,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 && args.slope === 1 && args.accumulatetime >= 10,
    () => false,
  ],
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
