const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201652,
  '来得正好！',
  '跑位贴紧前方马娘时，减少自身所承受的阻力',
  20165,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.infront_near_lane_time >= 3 && args.accumulatetime >= 10,
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
