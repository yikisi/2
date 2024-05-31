const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101071,
  'Billions of stars',
  '終盤の最終直線で先頭にいると速度が\n少し上がる、終盤開始までに取った\nリードの距離に応じて効果が増える',
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
