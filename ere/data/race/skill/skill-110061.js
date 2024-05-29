const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110061,
  '聖夜のミラクルラン！',
  'スキルで持久力を3回以上回復すると\nレース後半で勝利に向かい\n呼吸を整えて力強く踏み込んでいく',
  11006,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) => args.activate_count_heal >= 3 && args.distance_rate >= 50,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 9],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 3000, 350],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
