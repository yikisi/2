const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100461,
  '闪亮闪亮☆STARDOM',
  '在比赛中盘的直线位于前方并被后面的马娘拉近距离时，绝不让步的想法将会化作动力',
  10046,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.corner === 0 &&
      args.order <= 2 &&
      args.bashin_diff_behind <= 1,
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
