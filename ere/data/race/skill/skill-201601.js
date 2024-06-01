const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201601,
  '打好基础',
  '在比赛初期发动多个技能时，加速度略微提高',
  20160,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.activate_count_start >= 3, () => false],
  [3, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
