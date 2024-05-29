const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200491,
  'ノンストップガール',
  'ラストスパートで前が塞がれた時\n加速力が上がり\nコース取りが少しうまくなる',
  20049,
  2,
  394,
  [() => true, () => true],
  [
    (args) =>
      args.infront_near_lane_time >= 1 &&
      args.is_lastspurt === 1 &&
      args.hp_per >= 1,
    () => true,
  ],
  [3, 0],
  [30, 30],
  [
    [31, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [4000, 250, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
);
