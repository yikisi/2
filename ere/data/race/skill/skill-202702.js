const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202702,
  '探求心',
  '速度有十二分迅速时稍微提升速度，智力也十二分超群时少量提升速度＜先行・中距离＞',
  20270,
  1,
  0,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 3 &&
      args.base_speed >= 1200 &&
      args.base_wiz >= 1200,
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 3 &&
      args.base_speed >= 1200 &&
      args.base_wiz < 1200,
  ],
  [-0.0001, -0.0001],
  [0, 0],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 0, 0],
    [20, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [20, 0],
  0,
  false,
);
