const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200194,
  '秋风',
  '擅长秋季的比赛，速度和力量上升',
  20019,
  2,
  8,
  461,
  [() => true, () => true],
  [(args) => args.season === 3, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [1, 3, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [60, 60, 0],
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
  [1, 3],
  [30, 30],
  0,
  false,
);
