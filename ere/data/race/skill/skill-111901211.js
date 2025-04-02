const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  111901211,
  '如梦似幻',
  '在比赛终盘的弯道准备超越时一段时间内向前突进，如果是中山竞马场且智力有十二分高超则技能效果提升',
  11190121,
  1,
  UmaSkill.rarity_enum.evol,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.is_overtake === 1 &&
      args.track_id === 10005 &&
      args.base_wiz >= 1200,
    (args) =>
      args.running_style === 4 &&
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.is_overtake === 1,
  ],
  [4, 4],
  [500, 500],
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
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.4, 0, 0],
    [0.35, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
  0,
  false,
  false,
  [9],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
