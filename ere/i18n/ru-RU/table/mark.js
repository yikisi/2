module.exports = class extends require('#/i18n/zh-CN/table/mark') {
  name_template = 'Клеймо: %NAME%';
  lv_template = 'Lv.%LEVEL%';

  n_pleasure = 'Кайф';
  n_ero = 'Похоть';
  n_meek = 'Единство';
  n_pain = 'Боль';
  n_shame = 'Стыд';
  n_hate = 'Бунт';

  a_pleasure = 'Уд';
  a_ero = 'Пх';
  a_meek = 'Ед';
  a_pain = 'Бл';
  a_shame = 'Ст';
  a_hate = 'Сп';
  a_iron = 'Стл';

  abbr_template = '[%MARK%%LEVEL%]';
  mark_with_level = '%MARK% Lv.%LEVEL%';

  get_mark_with_level_stars = (
    mark_with_level,
    full_stars,
    empty_stars,
    divider = ' ',
  ) => [mark_with_level, divider, full_stars, empty_stars];

  s_title_name = 'Прозвище';

  s_t_no = 'Кобыла для разрядки';
  s_t_milk = 'Кобыла для доения';
  s_t_pregnant = 'Кобыла для размножения';
  s_t_worker = 'Кобыла для дани';
  s_t_inherit = 'Кобыла для наследства';
  s_t_furniture = 'Кобыла-подушка';
  s_t_assistant = 'Кобыла для постели';

  s_option_name = 'Метка';

  s_o_no = 'Нет';
  s_o_milk = 'Молочная рабыня';
  s_o_pregnant = 'Беременная рабыня';
  s_o_worker = 'Денежная рабыня';
  s_o_inherit = 'Рабыня факторов';
  s_o_furniture = 'Рабыня-подушка';
  s_o_assistant = 'Рабыня-помощница';

  s_description_name = 'Эффект';

  s_d_no = '-';
  s_d_milk = 'Каждую неделю даёт стакан молока.';
  s_d_pregnant =
    'Вне беременности всегда в опасном периоде; шанс беременности +10%, скорость беременности +100%.';
  s_d_worker = 'Каждую неделю даёт ма-монеты.';
  s_d_inherit = 'Каждую неделю даёт факторы наследства.';
  s_d_furniture =
    'Как партнёр по сну блокирует sleep-sex и похищения; усиливает восстановление сил во сне.';
  s_d_assistant =
    'Как помощница по умолчанию может быть вызвана в секс с другими. Можно назначить только одну.';
};
