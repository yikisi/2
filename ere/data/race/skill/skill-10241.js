const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10241,
  '勝利のキッス☆',
  '最終コーナー以降に前の方で競り合うと\nわずかに抜け出しやすくなる',
  1024,
  3,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.blocked_side_continuetime >= 2 &&
      args.order <= 3,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, 2000, 0],
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
);
