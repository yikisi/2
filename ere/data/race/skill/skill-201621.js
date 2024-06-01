const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201621,
  '竭尽全力',
  '在比赛终盘发动多个技能时，耐力略微回复',
  20162,
  1,
  1,
  217,
  [() => true, () => true],
  [(args) => args.activate_count_end_after >= 3, () => false],
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
