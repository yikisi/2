module.exports = class extends require('#/i18n/zh-CN/table/mark') {
  name_template = '%NAME% Mark';
  lv_template = 'Lv.%LEVEL%';

  n_pleasure = 'Pleasure';
  n_ero = 'Lewd Crest';
  n_meek = 'Bond';
  n_pain = 'Pain';
  n_shame = 'Shame';
  n_hate = 'Defiance';

  a_pleasure = 'Pl';
  a_ero = 'Lw';
  a_meek = 'Bn';
  a_pain = 'Pn';
  a_shame = 'Sh';
  a_hate = 'Df';
  a_iron = 'Ir';

  abbr_template = '[%MARK%%LEVEL%]';
  mark_with_level = '%MARK% Lv.%LEVEL%';

  get_mark_with_level_stars = (
    mark_with_level,
    full_stars,
    empty_stars,
    divider = ' ',
  ) => [mark_with_level, divider, full_stars, empty_stars];

  s_title_name = 'Title';

  s_t_no = 'Pleasure Mare';
  s_t_milk = 'Dairy Mare';
  s_t_pregnant = 'Breeding Mare';
  s_t_worker = 'Tribute Mare';
  s_t_inherit = 'Legacy Mare';
  s_t_furniture = 'Body Pillow Mare';
  s_t_assistant = 'Bedside Mare';

  s_option_name = 'Tag';

  s_o_no = 'None';
  s_o_milk = 'Milking Slave';
  s_o_pregnant = 'Breeding Slave';
  s_o_worker = 'Coin Slave';
  s_o_inherit = 'Spark Slave';
  s_o_furniture = 'Pillow Slave';
  s_o_assistant = 'Helper Slave';

  s_description_name = 'Effect';

  s_d_no = '-';
  s_d_milk = 'Provides one cup of milk each week.';
  s_d_pregnant =
    'Always in heat while not pregnant. Pregnancy rate +10%, pregnancy speed +100%.';
  s_d_worker = 'Provides some UmaCoin each week.';
  s_d_inherit = 'Provides some inheritance factors each week.';
  s_d_furniture =
    'As a bed partner, blocks all sleep sex and kidnapping, and boosts Energy recovery from rest.';
  s_d_assistant =
    'As the default assistant, can be called into sex with other characters. Only one can be set.';
};
