const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200431,
  '专注',
  '擅长起跑，晚出发的时间减少',
  20043,
  2,
  10,
  394,
  [() => true, () => true],
  [(args) => args.always === 1, () => false],
  [0, 0],
  [500, 0],
  [
    [10, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
