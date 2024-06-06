const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  300101,
  '憧憬的应援',
  '在比赛后段的弯道上，无声铃鹿感受到众人的祈愿，因此恢复耐力。',
  30010,
  UmaSkill.rarity_enum.gold,
  9,
  0,
  [() => true, () => true],
  [
    (args) =>
      args.is_exist_chara_id === 1002 &&
      args.remain_distance_viewer_id >= 800 &&
      args.remain_distance_viewer_id <= 850,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
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
    [0.055, 0, 0],
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
