const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200811,
  '差し駆け引き',
  '作戦が差しのウマ娘が掛かると\n落ち着くまで時間がかかる',
  20081,
  1,
  3,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_temptation_opponent_count_sashi >= 1 &&
      args.is_temptation === 0,
    () => true,
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
    [3, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [15, 15],
  1,
);
