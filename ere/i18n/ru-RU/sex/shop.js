module.exports = class extends require('#/i18n/zh-CN/sex/shop') {
  abl_tab = 'Умение учиться';
  talent_tab = 'Изменение черты';
  mark_tab = (has_inmon) => (has_inmon ? 'Нанесение клейма ' : 'Снятие клейма');
  transfer_tab = 'Поглощение факторов';
  update_end = 'Закончить прокачку';

  jewel_header_template = 'Факторы: %NAME%';
  abl_header_template = 'Навыки: %NAME%';
  talent_header_template = 'Черты: %NAME%';
  mark_header_template = 'Клейма: %NAME%';
  inmon_header_template = 'Клеймо Похоти: %NAME%';
  transfer_header = 'Умение поглощения';

  price_tip_template = 'Цена: %PRICE%';
  cond_tip_template = '%COND% %EXP% (сейчас %NOW%)';
  multi_cond_tip_template = '%COND% всего спермы (мл) (сейчас %ALL% = %NOW%)';
  jewel_price_template = '%JEWEL%×%COUNT%';
  price_splitter = ' + ';

  get_price_info = (jewel_name, cost, all, chara) => [
    jewel_name,
    ': ',
    ...this.get_addition_price_info(cost, all, chara),
  ];
  get_addition_price_info = (cost, all, chara) => [
    cost,
    '/',
    all,
    ' (',
    chara,
    ')',
  ];

  bt_upgrade = '↑';
  bt_downgrade = '↓';

  abl_tab_tooltip =
    '* Нажмите на название навыка — описание; ↑/↓ — повысить/понизить\n' +
    '** Если факторов зоны не хватает, можно доплатить двойной разницей';
  cf_upgrade = 'Повысить';
  cf_downgrade = 'Понизить';
  get_abl_upgrade_confirm = (chara, abl, upgrade, new_level) => [
    'Хочешь ',
    upgrade,
    ' ',
    abl,
    ' у ',
    chara,
    ' до ',
    new_level,
    '? Стоимость: ',
  ];

  bt_add = 'Получить черту';
  bt_remove = 'Убрать черту';
  bt_t_up = 'Обострить';
  bt_t_down = 'Притупить';
  milk_other_condition =
    'Лактация от [Препарата для лактации] (сейчас: %STATUS%)';
  get_talent_tab_tooltip = (limit) =>
    '* Нажмите на черту — описание; кнопки рядом — чувствительность, получить или убрать\n' +
    '** Если факторов зоны не хватает, можно доплатить двойной разницей\n' +
    `*** Макс. зон с высшей чувствительностью: ${limit}`;
  cf_add = 'добавить черту';
  cf_remove = 'убрать черту';
  cf_s_up = 'повысить';
  cf_s_down = 'понизить';
  get_talent_change_confirm = (chara, talent, change) => [
    'У ',
    chara,
    ' ',
    change,
    ' ',
    talent,
    '? Стоимость: ',
  ];
  get_sens_change_confirm = (chara, talent, change) => [
    'У ',
    chara,
    ' ',
    change,
    ' чувствительность зоны ',
    talent,
    '? Стоимость: ',
  ];
  milk_slave_warning = '(снимет метку [Молочная рабыня]!)';

  ch_cost_meek = 'Снять клеймо Сопротивления фактором покорности';
  ch_cost_pain = 'Снять клеймо Сопротивления фактором боли';
  ch_cost_fear = 'Снять клеймо Сопротивления фактором страха';
  ch_cost_shame = 'Снять клеймо Сопротивления фактором стыда';
  clean_hate_tooltip =
    '* Если клеймо получено, снять клеймо Сопротивления можно соответствующим фактором\n** При равном уровне клейма боль, страх и стыд снимают Сопротивление дешевле покорности, но возможны побочные эффекты';
  bt_clean_pain = 'Снять Боль фактором покорности';
  bt_clean_shame = 'Снять Стыд фактором покорности';
  clean_other_tooltip =
    '* Чем ниже снимаемое клеймо и выше Единство, тем дешевле покорность';
  bt_upgrade_inmon = 'Повысить уровень Похоти';
  bt_get_inmon = 'Превратить Удовольствие в Клеймо похоти';
  unlock_inmon_tooltip = '* Чем выше Единство, тем дешевле апгрейд Похоти';
  sticker_tooltip = 'Клеймо Похоти не даёт ставить метки';
  inmon_slave_template = 'Текущая метка: %SLAVE%';
  inmon_slave_desc_template = 'Эффект: %DESC%';
  inmon_plugin_header = 'Плагины';
  inmon_plugin_tooltip =
    '* Купленный плагин больше не тратит факторы покорности\n** Плагины с одинаковым эффектом ставятся только по одному';
  get_inmon_warning =
    'Клеймить Похотью — крайне аморально и бьёт по репутации! Продолжить?';
  new_option_header = 'Новая метка Похоти';
  change_option_tooltip =
    '* Смена метки стоит 1 000 факторов покорности\n** Снять метку можно бесплатно';
  get_clean_hate_confirm = (chara, jewel, hate) => [
    'Потратить у ',
    chara,
    ' фактор ',
    jewel,
    ', чтобы снять уровень клейма ',
    hate,
    '? Стоимость: ',
  ];
  get_clean_other_confirm = (chara, jewel, mark) => [
    'Потратить у ',
    chara,
    ' фактор ',
    jewel,
    ', чтобы снять уровень клейма ',
    mark,
    '? Стоимость: ',
  ];
  get_get_inmon_confirm = (chara, m_pleasure, m_inmon) => [
    'Превратить у ',
    chara,
    ' клеймо ',
    m_pleasure,
    ' в ',
    m_inmon,
    '? Стоимость: ',
  ];
  get_upgrade_inmon_confirm = (chara, m_inmon, new_inmon) => [
    'Повысить у ',
    chara,
    ' клеймо ',
    m_inmon,
    ' до ',
    new_inmon,
    '? Стоимость: ',
  ];
  get_change_option_confirm = (chara, option) => [
    'Сменить метку Похоти у ',
    chara,
    ' на ',
    option,
    '? Стоимость',
  ];
  get_load_plugin_confirm = (chara, plugin) => [
    'Разблокировать и поставить у ',
    chara,
    ' плагин ',
    plugin,
    '? Стоимость: ',
  ];
  clean_slave_option_confirm = 'Снять метку?';
  s_milk_warning_man = 'Мужчины не дают молоко';
  s_preg_warning_man = 'Мужчины не беременеют';
  s_milk_warning_milk =
    'Сдавать молоко можно только с особенностью [Молочное тело]';
  s_preg_warning_plugin = 'Под защитой от беременности';
  s_inherit_warning_race = 'Факторы сдают только %UMA%';
  s_assi_warning_dup = 'Уже есть одна помощница-рабыня';

  bt_transfer = 'Передать %JEWEL% от %NAME% к %YOU%';
  transfer_tab_tooltip =
    '* 10 000 факторов зоны или покорности у персонажа дают 10 факторов для %YOU%\n' +
    '** 10 000 факторов боли, страха или стыда у персонажа дают 1 фактор покорности для %YOU%';
  get_transfer_confirm = (chara, cost, all, you, you_get) => [
    'Забрать у ',
    chara,
    ' — ',
    cost,
    ' (всего ',
    all,
    '), а ',
    you,
    ' получит ',
    you_get,
    '?',
  ];
};
