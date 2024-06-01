const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202852,
  '一跃而上',
  '在终盘初段余力十足的话，稍微向前突进＜追赶・长距离＞',
  20285,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 4 &&
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
