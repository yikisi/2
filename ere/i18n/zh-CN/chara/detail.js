class I18nDetail {
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
}

module.exports = I18nDetail;
