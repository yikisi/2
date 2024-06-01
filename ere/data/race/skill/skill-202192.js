const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202192,
  '万无一失',
  '没有起跑晚的话就会在中盘一开始时回复少量体力＜先行・长距离＞',
  20219,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.is_badstart === 0 &&
      args.running_style === 2 &&
      args.distance_type === 4 &&
      args.phase_firsthalf_random === 1,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.035, 0, 0],
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
  [20, 0],
  1,
  false,
);
