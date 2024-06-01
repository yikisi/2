const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100151,
  '献给维多利亚的舞蹈',
  '最终弯道之后处于前列，和前面或者后面的马娘距离接近时，王者般的光辉会使速度加快',
  10015,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.is_finalcorner === 1 &&
        args.bashin_diff_behind <= 1 &&
        args.order <= 4) ||
      (args.is_finalcorner === 1 &&
        args.bashin_diff_infront <= 1 &&
        args.order <= 4),
    () => false,
  ],
  [5, 0],
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
  0,
  false,
);
