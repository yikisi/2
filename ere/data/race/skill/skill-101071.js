const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101071,
  '满天星斗',
  '在终盘的最终直线位于领头时速度少量提升，并根据进入终盘前取得的领先距离提供额外速度',
  10107,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 && args.is_last_straight === 1 && args.order === 1,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [25, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0, 0],
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
  0,
  false,
);
