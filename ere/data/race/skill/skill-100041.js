const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100041,
  '紅焔ギア/LP1211-M',
  '最終コーナー以降で前の方にいると\nギアを変えて加速力が上がる',
  10004,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 && args.order <= 5 && args.order_rate <= 50,
    () => true,
  ],
  [4, 0],
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
    [4000, 0, 0],
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
  0,
);
