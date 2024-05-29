const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201393,
  '鋭脚円刃',
  'コーナーで速度が上がる＜作戦・差し＞',
  20139,
  2,
  4,
  508,
  [() => true, () => true],
  [
    (args) => args.running_style === 3 && args.all_corner_random === 1,
    () => true,
  ],
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
