const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202202,
  '川崎竞马场○',
  '稍微擅长川崎竞马场的比赛',
  20220,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.track_id === 10103, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [2, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 0, 0],
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
  [2, 0],
  [30, 0],
  0,
  false,
);
