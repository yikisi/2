const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200491,
  '永不停歇的少女',
  '最后冲刺阶段前方拥挤时，会更擅长回避',
  20049,
  2,
  10,
  394,
  [() => true, () => true],
  [
    (args) =>
      args.infront_near_lane_time >= 1 &&
      args.is_lastspurt === 1 &&
      args.hp_per >= 1,
    () => false,
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
    [0.4, 0.025, 0],
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
  false,
);
