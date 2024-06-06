const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  300091,
  '挚友与劲敌',
  '无声铃鹿终于找到独属于自己的跑法，并将之化为对亲友的激励。无声铃鹿的能力能更好地发挥。',
  30009,
  UmaSkill.rarity_enum.normal,
  0,
  0,
  [() => true, () => true],
  [(args) => args.is_exist_chara_id === 1002, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [
      UmaSkill.ability_type_enum.Power,
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
