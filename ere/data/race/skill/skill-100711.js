const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100711,
  '一生之梦，刹那飞翔',
  '最终直线上与后方赛马娘距离近的话在这瞬间消耗些许持久力快速提高速度',
  10071,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.is_last_straight === 1 && args.bashin_diff_behind <= 1,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, -0.01, 0],
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
  [1, 0],
  [60, 0],
  0,
  false,
);
