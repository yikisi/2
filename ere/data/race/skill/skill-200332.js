const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200332,
  '弯道巧者○',
  '变得擅长弯道，速度略微加快',
  20033,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.all_corner_random === 1, () => false],
  [2.4, 0],
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
    [0.15, 0, 0],
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
