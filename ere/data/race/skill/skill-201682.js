const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201682,
  '前行',
  '在赛程终盘略微冲刺调整姿态＜沙土＞',
  20168,
  1,
  2,
  174,
  [() => true, () => true],
  [(args) => args.ground_type === 2 && args.phase_random === 2, () => false],
  [3, 0],
  [500, 0],
  [
    [28, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.025, 0.2, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [35, 0],
  1,
  false,
);
