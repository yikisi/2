class I18nMark {
  static _ = new I18nMark();

  name_template = '%NAME%刻印';
  lv_template = 'Lv.%LEVEL%';

  n_pleasure = '欢愉';
  n_ero = '淫纹';
  n_meek = '同心';
  n_pain = '苦痛';
  n_shame = '羞耻';
  n_hate = '反抗';

  a_pleasure = '欢';
  a_ero = '淫';
  a_meek = '顺';
  a_pain = '痛';
  a_shame = '耻';
  a_hate = '反';
  a_iron = '钢';

  abbr_template = '[%MARK%%LEVEL%]';
  mark_with_level = '%MARK% Lv.%LEVEL%';

  get_mark_with_level_stars = (
    mark_with_level,
    full_stars,
    empty_stars,
    divider = ' ',
  ) => [mark_with_level, divider, full_stars, empty_stars];

  s_title_name = '别称';

  s_t_no = '泄欲用母马';
  s_t_milk = '榨乳用母马';
  s_t_pregnant = '繁殖用母马';
  s_t_worker = '献金用母马';
  s_t_inherit = '继承用母马';
  s_t_furniture = '抱枕用母马';
  s_t_assistant = '陪床用母马';

  s_option_name = '词条';

  s_o_no = '无';
  s_o_milk = '乳奴';
  s_o_pregnant = '孕奴';
  s_o_worker = '金奴';
  s_o_inherit = '珠奴';
  s_o_furniture = '枕奴';
  s_o_assistant = '助奴';

  s_description_name = '效果';

  s_d_no = '-';
  s_d_milk = '每周提供一杯乳汁。';
  s_d_pregnant = '未怀孕时总是处于危险期，怀孕率+10%，怀孕速度+100%。';
  s_d_worker = '每周提供一定马币。';
  s_d_inherit = '每周提供一定继承因子。';
  s_d_furniture = '作为床伴时阻止所有睡奸和绑架，提高休息的体力恢复。';
  s_d_assistant = '作为默认助手可呼唤加入与其他角色的性爱。只能设定一个。';
}

module.exports = I18nMark;
