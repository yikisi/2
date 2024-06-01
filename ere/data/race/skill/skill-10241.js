const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10241,
  '胜利之吻☆',
  '最终弯道之后处于前列进行名次争夺时，在直线上略微容易突围',
  1024,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.blocked_side_continuetime >= 2 &&
      args.order <= 3,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.2, 0],
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
  [15, 15],
  0,
  false,
);
