const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200611,
  '升龙',
  '在最终弯道从外道赶超时，速度加快＜作战・居中＞',
  20061,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
    () => false,
  ],
  [3, 0],
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
  1,
  false,
);
