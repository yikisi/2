const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202541,
  '威風堂々',
  '最終コーナーで中団以降だと\n前後3人ずつの速度をわずかに下げ\n自分の速度を上げる＜作戦・差し＞',
  20254,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.order_rate >= 40 &&
      args.is_finalcorner_random === 1,
    () => true,
  ],
  [1.8, 0],
  [500, 500],
  [
    [27, 21, 21],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, -1500, -1500],
    [0, 0, 0],
  ],
  [
    [1, 9, 10],
    [0, 0, 0],
  ],
  [
    [0, 3, 3],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  1,
);
