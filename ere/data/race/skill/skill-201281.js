const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201281,
  'じゃじゃウマ娘',
  '上り坂で疲れにくくなる\n＜作戦・逃げ＞',
  20128,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 && args.slope === 1 && args.accumulatetime >= 10,
    () => true,
  ],
  [0, 0],
  [500, 500],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 0, 0],
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
);
