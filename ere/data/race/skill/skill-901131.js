const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901131,
  '活力蹦跳・锁定胜利♡',
  '比赛前半段的弯道若位于好位置则速度稍微提升，若是2200m的比赛则速度持续稍微提升，若处于上坡则提高效果',
  90113,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.distance_rate <= 50 &&
      args.corner !== 0 &&
      args.course_distance === 2200,
    (args) =>
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.distance_rate <= 50 &&
      args.corner !== 0,
  ],
  [3.6, 3],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
  ],
  [
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.15, 0, 0],
    [0.15, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
