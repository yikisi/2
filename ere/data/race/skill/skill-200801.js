const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200801,
  '对先行策略',
  '战术是先行的赛马娘陷入焦躁状态时恢复冷静需要耗费时间',
  20080,
  1,
  3,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_temptation_opponent_count_senko >= 1 &&
      args.is_temptation === 0,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [13, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [5, 0, 0],
    [0, 0, 0],
  ],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [2, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [15, 15],
  1,
  false,
);
