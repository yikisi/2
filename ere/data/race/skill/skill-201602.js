const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201602,
  '坚如磐石',
  '在比赛初期发动多个技能时，加速度提高',
  20160,
  2,
  10,
  508,
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
    [0.4, 0, 0],
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
  [60, 0],
  1,
  false,
);
