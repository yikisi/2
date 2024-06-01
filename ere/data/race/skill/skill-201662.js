const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201662,
  '先走一步！',
  '身后有马娘长时间紧追的话将会提高速度',
  20166,
  2,
  10,
  508,
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
  1,
  false,
);
