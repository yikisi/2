const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110261,
  'オペレーション・Cacao',
  '中盤のコーナーで先団を走行中\n後ろに他ウマ娘を検知すると\nわずかに息を入れ、さらに速度を上げる',
  11026,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order <= 4 &&
      args.phase === 1 &&
      args.corner !== 0 &&
      args.bashin_diff_behind <= 3,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 150, 0],
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
  [1, 2],
  [30, 30],
  0,
);
