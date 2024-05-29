const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201681,
  '狙うは最前列！',
  'レース終盤にコース取りが上手くなり\n加速力が少し上がる＜ダート＞',
  20168,
  2,
  3,
  394,
  [() => true, () => true],
  [(args) => args.ground_type === 2 && args.phase_random === 2, () => true],
  [3, 0],
  [500, 0],
  [
    [28, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [350, 3000, 0],
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
);
