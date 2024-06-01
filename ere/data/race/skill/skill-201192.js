const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201192,
  '保持领先',
  '在比赛中盘拉开差距且位于领头时，略微容易保持领先的优势＜长距离＞',
  20119,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase_random === 1 &&
      args.bashin_diff_behind >= 1 &&
      args.order === 1,
    () => false,
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
