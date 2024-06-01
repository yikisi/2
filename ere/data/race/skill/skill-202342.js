const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202342,
  '玩泥巴◎',
  '变得擅长赛场状态为重或不良的比赛，速度上升＜沙土＞',
  20234,
  1,
  0,
  174,
  [() => true, () => true],
  [
    (args) =>
      (args.ground_type === 2 && args.ground_condition === 3) ||
      (args.ground_type === 2 && args.ground_condition === 4),
    () => false,
  ],
  [-0.0001, 0],
  [0, 0],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [60, 0, 0],
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
  [45, 0],
  0,
  false,
);
