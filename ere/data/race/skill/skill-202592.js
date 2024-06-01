const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202592,
  '火急',
  '比赛终盘初段余力十足的话，稍微向前突进＜居中・长距离＞',
  20259,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 3 &&
      args.phase_firsthalf_random === 2 &&
      args.lastspurt === 2,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [22, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
