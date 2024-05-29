const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120351,
  'GO! Full-send',
  'レース中盤に中団で追い抜くと\n第3コーナーで少しの間速度が上がる\n2400ｍのレースで人気が高いと\n上げ続ける',
  12035,
  5,
  18,
  340,
  [
    (args) =>
      args.phase === 1 &&
      args.change_order_onetime < 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    (args) =>
      args.phase === 1 &&
      args.change_order_onetime < 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [
    (args) =>
      args.corner === 3 &&
      args.course_distance === 2400 &&
      args.popularity <= 3,
    (args) => args.corner === 3,
  ],
  [6, 4],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
