const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200432,
  '集中力',
  '擅长起跑，晚出发的时间略微减少',
  20043,
  1,
  2,
  129,
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
    [0.9, 0, 0],
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
  false,
);
