const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200492,
  '垂れウマ回避',
  'ラストスパートで前が塞がれた時\n加速力がわずかに上がり\nコース取りがちょっとうまくなる',
  20049,
  1,
  3,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.infront_near_lane_time >= 1 &&
      args.is_lastspurt === 1 &&
      args.hp_per >= 1,
    () => true,
  ],
  [3, 0],
  [30, 0],
  [
    [31, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 50, 0],
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
  [20, 0],
  1,
);
