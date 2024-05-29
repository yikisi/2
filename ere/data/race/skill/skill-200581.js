const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200581,
  'スピードスター',
  '最終コーナーで前方にいると\n速度が上がる＜作戦・先行＞',
  20058,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.is_finalcorner_random === 1 &&
      args.order_rate <= 50,
    () => true,
  ],
  [1.8, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
  1,
);
