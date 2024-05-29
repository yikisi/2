const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202281,
  '全速前進！',
  'ラストスパートで前方にいると\n速度が上がる＜ダート＞',
  20228,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_random === 3 &&
      args.order_rate <= 50 &&
      args.is_lastspurt === 1,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
);
