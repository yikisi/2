const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202241,
  '小弯道◎',
  '擅长小弯道的比赛',
  20224,
  2,
  UmaSkill.rarity_enum.normal,
  0,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.track_id === 10001 ||
      args.track_id === 10002 ||
      args.track_id === 10004 ||
      args.track_id === 10010 ||
      args.track_id === 10103 ||
      args.track_id === 10104,
    () => false,
  ],
  [-0.0001, 0],
  [0, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Wiz,
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
    [60, 0, 0],
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
  [5, 0],
  [45, 0],
  0,
  90,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.wiz],
);
