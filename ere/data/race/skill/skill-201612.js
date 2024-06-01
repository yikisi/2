const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201612,
  '爬山虎',
  '在比赛中盘发动多个技能时，速度提高',
  20161,
  2,
  10,
  508,
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
  false,
);
