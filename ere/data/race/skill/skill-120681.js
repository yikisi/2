const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120681,
  '众星捧月，一马当先！',
  '序盘以及中盘在前方被超越或进行竞争时短时间内提升速度，若是长距离比赛，则在比赛后半段位于前二名时，速度少量持续提升',
  12068,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.phase <= 1 &&
        args.change_order_onetime > 0 &&
        args.accumulatetime >= 5 &&
        args.order_rate <= 50) ||
      (args.phase <= 1 &&
        args.blocked_side_continuetime >= 2 &&
        args.accumulatetime >= 5 &&
        args.order_rate <= 50),
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.order <= 2 &&
      args.distance_rate >= 50 &&
      args.distance_type === 4,
  ],
  [3, 6],
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
    [0.35, 0, 0],
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
  true,
);
