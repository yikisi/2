const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  203721,
  '亲手把握未来',
  '心中怀抱继承下来的强烈心愿在比赛后半段向前突进，并稍微回复耐力',
  20372,
  1,
  17,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 && args.distance_rate_after_random === 50) ||
      (args.distance_type === 3 && args.distance_rate_after_random === 50),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.no,
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
    [0.35, 0.015, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [2, 3],
  [30, 30],
  1,
  360,
  false,
  false,
  [3, 4],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.currentSpeed],
);
