const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201591,
  'ウマ好み',
  '近くにウマ娘がたくさんいると\n速度がわずかに上がる',
  20159,
  1,
  217,
  [() => true, () => true],
  [(args) => args.near_count >= 3 && args.accumulatetime >= 5, () => true],
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
    [1500, 0, 0],
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
