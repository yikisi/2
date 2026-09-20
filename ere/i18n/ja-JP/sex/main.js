module.exports = class extends require('#/i18n/zh-CN/sex/main') {
  n_lust = '欲';
  l_mejiro = '一心同体';

  get_call_assistant_confirm = (title, chara) => [
    title,
    ' ',
    chara,
    ' も呼ぶ？',
  ];
  get_hd_location = (location, mirror) => [
    location,
    ' ',
    mirror,
    ' の前にいる',
  ];
  hd_turn_template = '第 %TURN% ターン';
  rape_notification = '強姦が発生した！';
  raped_notification = '逆強姦が発生した！';
  get_lover_relation = (relation, love) => ['🤝 ', relation, ' ・ ❤️ ', love];

  n_select_lover = '相手';
  n_select_assistant = '助手';
  get_assistant_info = (assistant) => ['助手：', assistant];

  redo_action_template = 'もう一度 %ACTION%';
  get_action_info = (chara, action) => [chara, ' の行動：', action];

  stain_header_template = '%NAME% の汚れ';
  touch_header_template = '%NAME% の接触';
  sm_header_template = '%NAME% の接触';

  st_act_vagina_filter = '桜花賞コマンドを除く';
  st_act_anal_filter = '菊花賞コマンドを除く';
  st_act_sm_filter = 'SMコマンドを除く';
  st_act_pet_filter = '愛撫コマンドを除く';
  st_act_breast_filter = '貧乳パイズリを除く';
  st_act_ask_filter = '依頼コマンドを除く';
  st_act_force_filter = '強制コマンドを除く';
  st_simpler_report = '調教結果を簡略表示';

  try_end = '終えようとする';
  end_info = '【情事が終わった】';

  nipple_clamps = '乳首クリップ';
  clitoris_clamps = '陰核クリップ';

  m_lie_right = '枕元を向いて仰向け';
  m_lie_left = '枕元を向いてうつ伏せ';
  m_sit_right = '足元を向いて座る';
  m_sit_left = '枕元を向いて座る';
  m_stand_right = '足元を向いて立つ';
  m_stand_left = '枕元を向いて立つ';
  m_rev_left = '足元を向いてうつ伏せ';
  m_rev_right = '足元を向いて仰向け';

  get_sadism_touch_info = (chara) => ['さきほど ', chara, ' を虐めた'];
  get_masochism_touch_info = (chara) => ['さきほど ', chara, ' に虐められた'];
  get_item_touch_info = (owner, verb, item) => [
    item,
    '（',
    owner,
    ' が',
    verb,
    '）',
  ];
  get_touch_info = (owner, part) => [owner, ' の ', part];

  get_got_param_info = (chara, pname, has, got, total, limit) => [
    chara,
    ' の ',
    pname,
    '：',
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
    ' は ',
    jname,
    ' を得た：',
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
    ' は ',
    jname,
    ' を得た：',
    has,
    ' + ',
    got,
    ' → ',
    total,
  ];
  get_got_mark_info = (chara, mark) => [chara, ' は ', mark, ' を得た！'];
  get_hp_tp_change = (chara, change_info) => [chara, ' の ', ...change_info];

  orgasm_2 = '二重絶頂';
  orgasm_3 = '三重絶頂';
  orgasm_4 = '四重絶頂';
  orgasm_5 = '五重絶頂';
  orgasm_m = '多重絶頂';

  result_title = '調教結果';
  jewel_header_template = '%NAME% の因子';
  mark_header_template = '%NAME% の刻印';
  attr_header_template = '%NAME% の能力';
  orgasm_header_template = '%NAME% の絶頂';
  no_change = '変化なし';

  get_jewel_info_start = (self_protect) => [
    '自衛因子 ',
    self_protect,
    ' 個が他因子と相殺されたあと：',
  ];
  get_jewel_row_start = (jewel_name) => [jewel_name, '：'];
  jewel_has = '所持';
  jewel_got = '獲得';
  jewel_lose = '相殺';
  jewel_total = '合計';

  get_mark_row = (mark_name, old, new_level) => [
    mark_name,
    '：',
    old,
    ' → ',
    new_level,
  ];

  get_orgasm_count = (count) => ['今回の調教で合計 ', count, ' 回絶頂した'];
  get_special_orgasm_count = (count) => ['特殊絶頂 ', count, ' 回。内訳：'];
  get_special_orgasm_detail = (orgasm, count) => [orgasm, ' ', count, ' 回'];
  orgasm_detail_start = 'うち：';
  get_part_orgasm(part, count, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push(part, 'で ', count, ' 回絶頂');
      if (unknown_count) {
        ret.push('。そのうち ', unknown_count, ' 回は感知できなかった');
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
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
      ret.push('胸で ', count, ' 回絶頂');
      if (unknown_count) {
        ret.push('。そのうち ', unknown_count, ' 回は感知できなかった');
      }
      if (nipple_count) {
        ret.push(
          '；うち ',
          nipple_count,
          ' 回は溜まった乳が噴き出すときに起きた',
        );
        if (uk_nipple_count) {
          ret.push('。そのうち ', uk_nipple_count, ' 回は気づかなかった');
        }
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_penis_orgasm(count, semen, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push('射精 ', count, ' 回、精液 ', semen);
      if (unknown_count) {
        ret.push('。そのうち ', unknown_count, ' 回は感知できなかった');
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_spirit_orgasm(cause, count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push(cause, '感で ', count, ' 回絶頂');
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_squirt_info = (squirt) => ['潮吹き ', squirt, ' 回'];
  get_secretion_info = (secretion) => ['愛液 ', secretion];

  orgasm_event_start = '今回の調教で：';
  get_lose_virginity = (virgin, unsatisfied_desc) =>
    unsatisfied_desc
      ? [virgin, ' を失い、', unsatisfied_desc]
      : [virgin, ' を失った'];

  lust_down_plus = '性欲が大きく解き放たれた！';
  lust_down = '性欲はだいたい収まった';
  lust_up = 'かえって性欲が溜まってしまった……';

  pressure_down_plus = 'ストレスが大きく和らいだ！';
  pressure_down = '張り詰めた神経が少し緩んだ';

  get_milk_info = (milk) => [...this.get_milk_amount(milk), ' を噴き出した'];
  get_drink_info = (liquid_list) => [...liquid_list, ' を飲んだ'];
  get_cum_in_womb_info = (semen) => [
    '秘部で ',
    ...this.get_semen_amount(semen),
    ' を受け止めた',
  ];
  get_cum_in_anal_info = (semen) => [
    '尻穴で ',
    ...this.get_semen_amount(semen),
    ' を受け止めた',
  ];
  get_milk_amount = (milk) => ['母乳 ', milk];
  get_semen_amount = (semen) => ['精液 ', semen];
  get_secretion_amount = (secretion) => ['精液 ', secretion];

  get_wound_info = (parts) => [parts, ' が裂けた……痛かっただろう'];

  no_orgasm = '絶頂は起きなかった';
};
