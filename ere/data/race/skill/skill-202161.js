const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202161,
  '自制力',
  '智力上升，稍微不容易变得焦躁',
  20216,
  1,
  0,
  217,
  [() => true, () => true],
  [(args) => args.always === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [5, 29, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [60, -3, 0],
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
  [2, 5],
  [10, 20],
  0,
  false,
);
