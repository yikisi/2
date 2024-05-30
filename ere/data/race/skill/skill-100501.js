const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100501,
  'Nemesis',
  '最終コーナー以降で中団から\n前へ出る時、切れ味が増し速度が上がる',
  10050,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 75 &&
      args.is_overtake === 1,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
);
