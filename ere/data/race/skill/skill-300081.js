const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  300081,
  '哼喵咔快跑祈愿！',
  '向无声铃鹿施下能够畅快奔跑的魔咒让她更好的发挥自己的能力',
  30008,
  UmaSkill.rarity_enum.normal,
  0,
  0,
  [() => true, () => true],
  [(args) => args.is_exist_chara_id === 1002, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [
      UmaSkill.ability_type_enum.Stamina,
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
      UmaSkill.target_type_enum.CharaId,
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
    [1002, 0, 0],
    [0, 0, 0],
  ],
  [0, 0],
  [0, 0],
  0,
  false,
);
