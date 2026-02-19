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
}

module.exports = I18nDetail;
