const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110051,
  '倾国倾城',
  '最终弯道后，在先头集团突围时，展现闪耀般的华丽动作，短时间速度大幅加快',
  11005,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.change_order_onetime < 0 &&
      args.order_rate <= 40,
    () => false,
  ],
  [4, 0],
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
    [0.45, 0, 0],
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
