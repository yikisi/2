const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200801,
  '先行駆け引き',
  '作戦が先行のウマ娘が掛かると\n落ち着くまで時間がかかる',
  20080,
  1,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_temptation_opponent_count_senko >= 1 &&
      args.is_temptation === 0,
    () => true,
  ],
  [0, 0],
  [500, 500],
  [
    [13, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [50000, 0, 0],
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
);
