const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201571,
  '777',
  '距离终点777m的时候，可以略微打起精神',
  20157,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) => args.remain_distance <= 778 && args.remain_distance >= 776,
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
    [0.015, 0, 0],
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
