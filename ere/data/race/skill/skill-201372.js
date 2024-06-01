const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201372,
  '干扰',
  '比赛终盘位于前列时，使后面马娘的视野略微变窄＜作战・先行＞',
  20137,
  1,
  3,
  85,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_random === 2 &&
      args.order_rate <= 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-3, 0, 0],
    [0, 0, 0],
  ],
  [
    [10, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [3, 5],
  [10, 10],
  1,
  false,
);
