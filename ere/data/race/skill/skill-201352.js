const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201352,
  '营养补给',
  '比赛中盘略微回复持久力＜作战・先行＞',
  20135,
  1,
  1,
  217,
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
    [0.015, 0, 0],
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
  [20, 0],
  1,
  false,
);
