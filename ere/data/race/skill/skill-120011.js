const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120011,
  '威风堂堂，逐梦似锦！',
  '在终盘最终弯道发动技能后心中怀抱声援，速度少量提升处于中山竞马场的话，速度极大提升',
  12001,
  5,
  18,
  340,
  [(args) => args.track_id === 10005, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_activate_any_skill === 1,
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_activate_any_skill === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.25, 0, 0],
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
  [60, 0],
  0,
  false,
);
