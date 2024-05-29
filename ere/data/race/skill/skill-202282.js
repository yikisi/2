const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202282,
  'まっしぐら',
  'ラストスパートで前方にいると\n速度がわずかに上がる＜ダート＞',
  20228,
  1,
  2,
  217,
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
);
