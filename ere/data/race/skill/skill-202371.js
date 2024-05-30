const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202371,
  'アンストッパブル',
  'レース中盤に速度が上がる\n＜作戦・先行＞',
  20237,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.phase_random === 1 && args.running_style === 2, () => false],
  [2.4, 0],
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
  1,
);
