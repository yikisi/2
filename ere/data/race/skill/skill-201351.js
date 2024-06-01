const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201351,
  '大胃王',
  '比赛中盘回复持久力＜作战・先行＞',
  20135,
  2,
  9,
  508,
  [() => true, () => true],
  [(args) => args.running_style === 2 && args.phase_random === 1, () => false],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0, 0],
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
  [2, 0],
  [60, 0],
  1,
  false,
);
