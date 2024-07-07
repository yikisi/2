const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200292,
  '彻底标记○',
  '与人气第一的马娘选择相同出走策略时能力稍微更容易发挥',
  20029,
  1,
  UmaSkill.rarity_enum.normal,
  0,
  129,
  [() => true, () => true],
  [(args) => args.running_style_equal_popularity_one === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [
      UmaSkill.ability_type_enum.Guts,
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
  [4, 0],
  [30, 0],
  0,
  90,
  false,
  false,
);
