const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201662,
  'お先に失礼っ！',
  'すぐ後ろにウマ娘が長くいると\n速度が上がる',
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
