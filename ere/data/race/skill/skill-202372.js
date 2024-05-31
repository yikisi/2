const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202372,
  '攻めの姿勢',
  'レース中盤に速度がわずかに上がる\n＜作戦・先行＞',
  20237,
  1,
  2,
  217,
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
