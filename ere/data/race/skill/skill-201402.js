const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201402,
  '努力之人',
  '准备进行超越时，略微提升加速力＜作战・居中＞',
  20140,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.is_overtake === 1 &&
      args.accumulatetime >= 5,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
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
