const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  990021,
  '辛苦的马生在等我',
  '比赛终盘时直接失速，并且想象着凌辱一般的嫌恶眼神快要去了；如果之前高潮过，则使所有选手一起失速',
  99002,
  1,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.debuff,
    UmaSkill.skill_border_enum.cheat,
  ),
  5000,
  [(args) => args.phase < 2 && args.orgasm === 1, () => true],
  [(args) => args.phase === 2, (args) => args.phase === 2],
  [60, 60],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.HpRate,
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
    [-1, -1, 0],
    [-1, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.All,
      UmaSkill.target_type_enum.Self,
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
  [0, 0],
  [0, 0],
  0,
  9999,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.hpRate],
);
