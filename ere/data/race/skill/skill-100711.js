const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100711,
  '一期の夢、刹那の飛翔',
  '最終直線で後ろのウマ娘と距離が近いと\nこの瞬間に懸け持久力をわずかに使い\n少しの間速度がすごく上がる',
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
);
