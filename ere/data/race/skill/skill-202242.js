const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202242,
  '小弯道○',
  '稍微擅长小弯道的比赛',
  20224,
  1,
  UmaSkill.rarity_enum.normal,
  0,
  129,
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
    [40, 0, 0],
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
  [30, 0],
  0,
  70,
  false,
  false,
);
