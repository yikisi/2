const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201661,
  '游戏就到此为止了！',
  '长时间有紧跟在自己身后的马娘则速度略微加快',
  20166,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) => args.behind_near_lane_time >= 3 && args.accumulatetime >= 10,
    () => false,
  ],
  [3, 0],
  [30, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
