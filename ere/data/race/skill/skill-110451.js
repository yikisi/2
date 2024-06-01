const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110451,
  '转圈圈妈咪恶作剧♡',
  '在最终直线处于好位置且和前方马娘距离很近的话更容易完成超越',
  11045,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.order <= 4 &&
      args.bashin_diff_infront <= 1,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.3, 0],
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
  [1, 3],
  [30, 30],
  0,
  false,
);
