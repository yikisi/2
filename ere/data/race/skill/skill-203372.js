const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  203372,
  '反击',
  '比赛终盘最终弯道及之后位置若对手发动加速技能，一小段时间内略微向前突进',
  20337,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.is_other_character_activate_advantage_skill === 27) ||
      (args.distance_type === 4 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.is_other_character_activate_advantage_skill === 27) ||
      (args.distance_type === 3 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.is_other_character_activate_advantage_skill === 22) ||
      (args.distance_type === 4 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.is_other_character_activate_advantage_skill === 22),
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.no,
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
    [0.05, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
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
  [3, 0],
  [20, 0],
  1,
  180,
  false,
  false,
  [4, 5],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
