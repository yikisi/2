module.exports = class extends require('#/i18n/zh-CN/sex/main') {
  n_lust = 'Похоть';
  l_mejiro = 'Одно целое';

  get_call_assistant_confirm = (title, chara) => [
    'Позвать ',
    title,
    ' ',
    chara,
    ' вместе?',
  ];
  get_hd_location = (location, mirror) => [
    'Место: ',
    location,
    ' ',
    mirror,
    ' — перед ним',
  ];
  hd_turn_template = 'Ход %TURN%';
  rape_notification = 'Ивент изнасилования активирован!';
  raped_notification = 'Ивент обратного изнасилования активирован!';
  get_lover_relation = (relation, love) => ['🤝 ', relation, ' · ❤️ ', love];

  n_select_lover = 'Партнёр';
  n_select_assistant = 'Помощник';
  get_assistant_info = (assistant) => ['Помощник: ', assistant];

  redo_action_template = 'Снова %ACTION%';
  get_action_info = (chara, action) => [chara, ' действует: ', action];

  stain_header_template = 'Грязь на теле %NAME%';
  touch_header_template = 'Телесные контакты %NAME%';
  sm_header_template = 'Телесные контакты %NAME%';

  st_act_vagina_filter = 'Скрыть команды для вагины';
  st_act_anal_filter = 'Скрыть команды для ануса';
  st_act_sm_filter = 'Скрыть команды садомазохизма';
  st_act_pet_filter = 'Скрыть ласки';
  st_act_breast_filter = 'Скрыть пайзури без молока';
  st_act_ask_filter = 'Скрыть просьбы';
  st_act_force_filter = 'Скрыть принуждение';
  st_simpler_report = 'Краткий отчёт о результатах любви';

  try_end = 'Попытаться закончить';
  end_info = '[Секс закончился]';

  nipple_clamps = 'Зажимы на соски';
  clitoris_clamps = 'Зажим на клитор';

  // 姿势：
  // <br>二维平面，横轴为床，人于床上从床头转动向床尾，共有四种基本位置：躺（lie）、坐（sit）、站（stand）、反向趴着（rev）
  // <br>再考虑人朝向问题，面朝床尾在二维平面上是顺时针朝向（右回，right），面朝床头在二维平面上是逆时针朝向（左回，left）
  // <br>综合之后一共八种姿势
  m_lie_right = 'Лежит лицом к изголовью';
  m_lie_left = 'Лежит ничком к изголовью';
  m_sit_right = 'Сидит лицом к изножью';
  m_sit_left = 'Сидит лицом к изголовью';
  m_stand_right = 'Стоит лицом к изножью';
  m_stand_left = 'Стоит лицом к изголовью';
  m_rev_left = 'Ничком к изножью';
  m_rev_right = 'Лежит к изножью';

  get_sadism_touch_info = (chara) => ['До этого истязала ', chara];
  get_masochism_touch_info = (chara) => ['До этого ', chara, ' истязал(а) её'];
  get_item_touch_info = (owner, verb, item) => [
    item,
    ' (',
    owner,
    ' ',
    verb,
    ')',
  ];
  get_touch_info = (owner, part) => [owner, ' — ', part];

  get_got_param_info = (chara, pname, has, got, total, limit) => [
    chara,
    ' — ',
    pname,
    ': ',
    has,
    ' + ',
    got,
    ' → ',
    total,
    '/',
    limit,
  ];
  get_got_jewel_info = (chara, jname, has, got, _new, total) => [
    chara,
    ' получила ',
    jname,
    ': ',
    has,
    ' + ',
    got,
    ' → ',
    _new,
    ' (',
    total,
    ')',
  ];
  get_got_jewel_info_oot = (chara, jname, has, got, total) => [
    chara,
    ' получила ',
    jname,
    ': ',
    has,
    ' + ',
    got,
    ' → ',
    total,
  ];
  get_got_mark_info = (chara, mark) => [chara, ' получила ', mark, '!'];
  get_hp_tp_change = (chara, change_info) => [chara, ': ', ...change_info];

  orgasm_2 = 'Двойной оргазм';
  orgasm_3 = 'Тройной оргазм';
  orgasm_4 = 'Четверной оргазм';
  orgasm_5 = 'Пятерной оргазм';
  orgasm_m = 'Множественный оргазм';

  result_title = 'Итог любви';
  jewel_header_template = 'Факторы %NAME%';
  mark_header_template = 'Клейма %NAME%';
  attr_header_template = 'Параметры %NAME%';
  orgasm_header_template = 'Оргазмы %NAME%';
  no_change = 'Без изменений';

  get_jewel_info_start = (self_protect) => [
    self_protect,
    ' фактор(ов) самозащиты погашено после взаимодействия с другими факторами: ',
  ];
  get_jewel_row_start = (jewel_name) => [jewel_name, ': '];
  jewel_has = 'Было';
  jewel_got = 'Получено';
  jewel_lose = 'Погашено';
  jewel_total = 'Итого';

  get_mark_row = (mark_name, old, new_level) => [
    mark_name,
    ': ',
    old,
    ' → ',
    new_level,
  ];

  get_orgasm_count = (count) => ['Было ', count, ' оргазмов во время любви.'];
  get_special_orgasm_count = (count) => [
    'Особых оргазмов: ',
    count,
    ', в том числе: ',
  ];
  get_special_orgasm_detail = (orgasm, count) => [orgasm, ' ', count, '.'];
  orgasm_detail_start = 'Из них: ';
  get_part_orgasm(part, count, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push(part, ' — ', 'оргазмов: ', count);
      if (unknown_count) {
        ret.push(', но из них ', unknown_count, ' совсем не почувствовала');
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('; ');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_breast_orgasm(
    count,
    unknown_count,
    nipple_count,
    uk_nipple_count,
    unsatisfied_desc,
  ) {
    const ret = [];
    if (count) {
      ret.push('Из-за груди — ', 'оргазмов: ', count);
      if (unknown_count) {
        ret.push(', но из них ', unknown_count, ' совсем не почувствовала');
      }
      if (nipple_count) {
        ret.push('; а ', nipple_count, ' — при выбросе скопившегося молока');
        if (uk_nipple_count) {
          ret.push(', но ', uk_nipple_count, ' из них не заметила');
        }
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('; ');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_penis_orgasm(count, semen, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push('Эякуляций: ', count, ', всего выпущено ', semen, ' спермы');
      if (unknown_count) {
        ret.push(', но из них ', unknown_count, ' совсем не почувствовал(а)');
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('; ');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_spirit_orgasm(cause, count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push('Оргазмы ', 'от ', cause, ' — ', count);
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('; ');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_squirt_info = (squirt) => ['Сквиртов было ', squirt, ' раз.'];
  get_secretion_info = (secretion) => ['Секреции: ', secretion];

  orgasm_event_start = 'Во время этой любви: ';
  get_lose_virginity = (virgin, unsatisfied_desc) =>
    unsatisfied_desc
      ? ['Потеряна ', virgin, ', ', unsatisfied_desc]
      : ['Потеряна ', virgin];

  lust_down_plus = 'Похоть сильно разрядилась!';
  lust_down = 'Похоть в целом снята';
  lust_up = 'Похоть только возросла…';

  pressure_down_plus = 'Стресс сильно спал!';
  pressure_down = 'Нервы немного отпустило';

  get_milk_info = (milk) => ['Выплеснула ', ...this.get_milk_amount(milk)];
  get_drink_info = (liquid_list) => ['Выпила ', ...liquid_list];
  get_cum_in_womb_info = (semen) => [
    'Киска приняла ',
    ...this.get_semen_amount(semen),
  ];
  get_cum_in_anal_info = (semen) => [
    'Анус принял ',
    ...this.get_semen_amount(semen),
  ];
  get_milk_amount = (milk) => [milk, ' молока'];
  get_semen_amount = (semen) => [semen, ' спермы'];
  get_secretion_amount = (secretion) => [secretion, ' смазки'];

  get_wound_info = (parts) => [parts, ' — разрыв… наверняка очень больно.'];

  no_orgasm = 'Оргазмов не было';
};
