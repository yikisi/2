const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201611,
  '翘尾巴',
  '在比赛中盘发动多个技能时，速度略微提高',
  20161,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.activate_count_middle >= 3, () => false],
  [3, 0],
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
