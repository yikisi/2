const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100581,
  'I Never Goof Up!',
  '比赛终盘完成超越时，会以永不放弃之心向前突进',
  10058,
  5,
  18,
  340,
  [() => true, () => true],
  [(args) => args.phase >= 2 && args.change_order_onetime < 0, () => false],
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
    [0.25, 0.3, 0],
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
  [30, 30],
  0,
  false,
);
