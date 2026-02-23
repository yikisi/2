class I18nDetail {
  base_title = '个人情报';
  get_base_summary_info = (
    skin,
    hair,
    body_hair,
    characteristic,
    sex_title,
  ) => [
    '肤色',
    skin,
    ' 的 ',
    hair,
    ' ',
    body_hair,
    ' ',
    characteristic,
    ' ',
    sex_title,
  ];
  base_hair_info_template = '发型：%HAIR%';
  base_birthday_info_template = '出生于 %YEAR% 年 %MONTH% 月 %DATE% 日';
  base_birthday_info_no_year_template = '出生于 %MONTH% 月 %DATE% 日';
  base_header_body = '身体尺寸';
  get_base_body_info = (height, weight) => [
    '身高：',
    height,
    'cm',
    { isDivider: true },
    '体重：',
    weight,
  ];
  base_body_weight_fat = '幸、幸福胖哦……';
  base_body_weight_heavy = '微增';
  base_body_weight_normal = '控制得当';
  base_body_hidden = '没有更多数据了';
  get_base_female_info = (bust, cup, waist, hip) => [
    '三围：B',
    bust,
    ' (',
    cup,
    ' Cup) · W',
    waist,
    ' · H',
    hip,
  ];
  /** @param {CharaTalk} chara */
  get_base_hair_select = (chara) => [
    '请选择 ',
    chara.get_colored_name(),
    ' 的新发型',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_auto_select = (chara, clothe) => [
    '现在 ',
    chara.get_colored_name(),
    ' 在参赛时会按照场合和节庆决定着装，在URA颁奖典礼与结束育成后的殿堂周将身着决胜服 [',
    clothe,
    ']。',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_keep_some = (chara, clothe) => [
    '现在 ',
    chara.get_colored_name(),
    ' 在参赛时、URA颁奖典礼与结束育成后的殿堂周将身着决胜服 [',
    clothe,
    ']。',
  ];
  base_clothe_change_confirm = '要更换吗？';
  base_clothe_bt_auto_select = '即时选择';
  base_clothe_bt_keep_current = '保持不变';

  edu_title = '育成情况';
  get_edu_score = (score) => ['评价：', score];
  edu_date_template = '%YEAR% %MONTH% 月 第 %WEEK% 周';
  edu_date_with_playthrough_template =
    '%YEAR% %MONTH% 月 第 %WEEK% 周 (第 %PLAYTHROUGH% 轮)';
  get_edu_pt = (pt) => ['拥有 ', pt, ' 点技能点数'];
  edu_header_attr = '基础属性';
  get_edu_attr = (attr_name, attr) => [attr_name, '：', attr];
  edu_header_adapt = '比赛适应';
  get_edu_adapt = (adapt_name, adapt) => [adapt_name, '：', adapt];
  edu_header_aim_template = '育成目标 (%CURRENT%/%TOTAL%)';
  edu_header_aim_finished = '育成目标 (完成！)';
  edu_aim_template = '%DESC% %CURRENT%/%REQUIRE% %MARK%';
  edu_aim_template_in_rec = '%DESC% %REQUIRE%';
  edu_aim_desc_template = '%EDUTIME% %RACE%';
  edu_aim_common_desc_1 = 'G1 比赛 入着';
  edu_aim_common_desc_2 = 'G2 以上比赛 3 着以内';
  edu_aim_common_desc_3 = '任意比赛 1 着';
  edu_aim_require_template = '%REQUIRE% 次';
  edu_aim_require_1 = '1着';
  edu_aim_require_2 = '2着以内';
  edu_aim_require_3 = '3着以内';
  edu_aim_require_4 = '4着以内';
  edu_aim_require_5 = '入着';
  edu_aim_require_20 = '出走';
  edu_aim_mark_done = '✔';
  edu_aim_mark_no = '✘';
  edu_header_language = '语言技能';

  skill_title = '比赛技巧';
  skill_header_learnt = '习得技能';
  skill_no_skill = '未习得';
  skill_header_available = '待解锁技能';
  skill_header_gene = '因子继承';
  skill_no_gene = '未继承';
  skill_header_gene_available = '可继承因子';

  trainer_info = '一介人类而已';
  growth_info = '还在成长中哦';
  no_exp_info = '还没有相关经历';
  no_known_info = '还没有足够了解';
  no_part_info = '没有这个部位';
}

module.exports = I18nDetail;
