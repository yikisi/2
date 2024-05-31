const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202542,
  'プレッシャー',
  '最終コーナーで中団以降だと前後3人\nずつの速度をほんのわずかに下げ、自分\nの速度をわずかに上げる＜作戦・差し＞',
  20254,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.order_rate >= 40 &&
      args.is_finalcorner_random === 1,
    () => false,
  ],
  [1.8, 0],
  [500, 0],
  [
    [27, 21, 21],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, -0.035, -0.035],
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
  [20, 0],
  1,
  false,
);
