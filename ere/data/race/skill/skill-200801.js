const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200801,
  '对先马策略',
  '出走策略是先马的赛马娘陷入焦躁状态时恢复冷静需要耗费时间',
  20080,
  1,
  24,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_temptation_opponent_count_senko >= 1 &&
      args.is_temptation === 0,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TemptationEndTime,
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
    [5, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.RunningStyleTemptationOtherSelf,
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
    [2, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [15, 15],
  1,
  130,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.temp],
);
