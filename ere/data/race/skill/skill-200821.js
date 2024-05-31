const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200821,
  '追込駆け引き',
  '作戦が追込のウマ娘が掛かると\n落ち着くまで時間がかかる',
  20082,
  1,
  3,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_temptation_opponent_count_oikomi >= 1 &&
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
    [4, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [15, 15],
  1,
  false,
);
