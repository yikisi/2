const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201281,
  '悍马娘',
  '在上坡时不容易疲劳＜作战・领放＞',
  20128,
  2,
  9,
  508,
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
    [0.055, 0, 0],
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
  [60, 0],
  1,
  false,
);
