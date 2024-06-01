const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110341,
  '灯穗',
  '在终盘的弯道处从后方逼近对手时，到最终直线会提升速度，并根据终盘弯道处超过对手次数提升效果',
  11034,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.order_rate >= 60 &&
      args.is_overtake === 1,
    () => true,
  ],
  [(args) => args.is_last_straight_onetime === 1, () => false],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [11, 1, 1],
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
