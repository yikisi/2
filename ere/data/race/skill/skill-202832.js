const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202832,
  '二段構え',
  'レース中盤にスキルを発動すると\n速度がちょっと上がる\nその後レース終盤にスキルを\n発動するとちょっと前に出る＜ダート＞',
  20283,
  1,
  263,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase === 1 &&
      args.is_activate_any_skill === 1,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.phase >= 2 &&
      args.is_activate_any_skill === 1,
  ],
  [2.4, 2.4],
  [500, 500],
  [
    [27, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [500, 0, 0],
    [500, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [10, 10],
  1,
);
