const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201592,
  'ウママニア',
  '近くにウマ娘がたくさんいると\n速度が上がる',
  20159,
  2,
  4,
  508,
  [() => true, () => true],
  [(args) => args.near_count >= 3 && args.accumulatetime >= 5, () => true],
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
