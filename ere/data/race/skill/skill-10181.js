const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10181,
  '女帝的荣耀',
  '在最终弯道从中后方赶超时，犹如女帝般的奔跑会使速度少量加快',
  1018,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order >= 3 &&
      args.change_order_onetime < 0,
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
    [0.25, 0, 0],
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
  [30, 0],
  0,
  false,
);
