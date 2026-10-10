module.exports = class extends require('#/i18n/zh-CN/sex/main') {
  n_lust = '욕';
  l_mejiro = '일심동체';

  get_call_assistant_confirm = (title, chara) => [
    title,
    ' ',
    chara,
    '도 부를까요?',
  ];
  get_hd_location = (location, mirror) => [
    location,
    ' ',
    mirror,
    '의 앞에 있다',
  ];
  hd_turn_template = '제 %TURN%턴';
  rape_notification = '성폭행이 발생했다!';
  raped_notification = '역방향 성폭행이 발생했다!';
  get_lover_relation = (relation, love) => ['🤝 ', relation, ' ・ ❤️ ', love];

  n_select_lover = '상대';
  n_select_assistant = '협력자';
  get_assistant_info = (assistant) => ['조수：', assistant];

  redo_action_template = '다시 %ACTION%';
  get_action_info = (chara, action) => [chara, '의 행동:', action];

  stain_header_template = '%NAME%의 오염';
  touch_header_template = '%NAME%의 신체접촉';
  sm_header_template = '%NAME%의 성고문접촉';

  st_act_vagina_filter = '벚꽃상 명령 제외';
  st_act_anal_filter = '국화상 명령 제외';
  st_act_sm_filter = 'SM 명령 제외';
  st_act_pet_filter = '애무 명령 제외';
  st_act_breast_filter = '작은 가슴으로 하는 가슴 성교 제외';
  st_act_ask_filter = '부탁 명령 제외';
  st_act_force_filter = '강제 명령 제외';
  st_simpler_report = '조교 결과 간략 표시';

  try_end = '돌아가기';
  end_info = '【관계가 끝났다】';

  nipple_clamps = '유두 클립';
  clitoris_clamps = '음핵 클립';

  m_lie_right = '머리맡을 향해 바로 눕기';
  m_lie_left = '머리맡을 향해 엎드리기';
  m_sit_right = '발치를 향해 앉기';
  m_sit_left = '머리맡을 향해 앉기';
  m_stand_right = '발치를 향해 서기';
  m_stand_left = '머리맡을 향해 서기';
  m_rev_left = '발치를 향해 엎드리기';
  m_rev_right = '발치를 향해 바로 눕기';

  get_sadism_touch_info = (chara) => ['조금 전 ', chara, '을(를) 괴롭혔다'];
  get_masochism_touch_info = (chara) => [
    '조금 전 ',
    chara,
    '에게 괴롭힘을 당했다',
  ];
  get_item_touch_info = (owner, verb, item) => [
    item,
    '（',
    owner,
    '이(가)',
    verb,
    '）',
  ];
  get_touch_info = (owner, part) => [owner, '의', part];

  get_got_param_info = (chara, pname, has, got, total, limit) => [
    chara,
    '의',
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
    '은(는)',
    jname,
    '을(를) 얻었다:',
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
    '은(는)',
    jname,
    '을(를) 얻었다:',
    has,
    ' + ',
    got,
    ' → ',
    total,
  ];
  get_got_mark_info = (chara, mark) => [
    chara,
    '은(는)',
    mark,
    '을(를) 얻었다!',
  ];
  get_hp_tp_change = (chara, change_info) => [chara, '의', ...change_info];

  orgasm_2 = '이중 절정';
  orgasm_3 = '삼중 절정';
  orgasm_4 = '사중 절정';
  orgasm_5 = '오중 절정';
  orgasm_m = '다중 절정';

  result_title = '우마뾰이 결과';
  jewel_header_template = '%NAME%의 인자';
  mark_header_template = '%NAME%의 각인';
  attr_header_template = '%NAME%의 능력';
  orgasm_header_template = '%NAME%의 절정';
  no_change = '무변화';

  get_jewel_info_start = (self_protect) => [
    '자기방어 인자',
    self_protect,
    '개가 다른 인자와 상쇄된 뒤:',
  ];
  get_jewel_row_start = (jewel_name) => [jewel_name, '：'];
  jewel_has = '보유';
  jewel_got = '획득';
  jewel_lose = '상쇄';
  jewel_total = '합계';

  get_mark_row = (mark_name, old, new_level) => [
    mark_name,
    '：',
    old,
    ' → ',
    new_level,
  ];

  get_orgasm_count = (count) => [
    '이번 조교에서 총 ',
    count,
    '회 절정에 도달했다',
  ];
  get_special_orgasm_count = (count) => [
    '특수 절정 ',
    count,
    '회. 상세 내역: ',
  ];
  get_special_orgasm_detail = (orgasm, count) => [orgasm, ' ', count, '회'];
  orgasm_detail_start = '그중: ';
  get_part_orgasm(part, count, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push(part, '으로 ', count, '회 절정');
      if (unknown_count) {
        ret.push('. 그중 ', unknown_count, '회는 인지하지 못했다');
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
      ret.push('가슴으로 ', count, '회 절정');
      if (unknown_count) {
        ret.push('. 그중 ', unknown_count, '회는 인지하지 못했다');
      }
      if (nipple_count) {
        ret.push(
          '; 그중 ',
          nipple_count,
          '회는 고여 있던 모유가 분출될 때 발생했다',
        );
        if (uk_nipple_count) {
          ret.push('. 그중 ', uk_nipple_count, '회는 알아차리지 못했다');
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
      ret.push('사정 ', count, '회, 정액 ', semen, ' 배출');
      if (unknown_count) {
        ret.push('. 그중 ', unknown_count, '회는 인지하지 못했다');
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
      ret.push('절정: ', cause, '감으로 ', count, '회');
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('；');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_squirt_info = (squirt) => ['분출 ', squirt, '회'];
  get_secretion_info = (secretion) => ['애액 ', secretion];

  orgasm_event_start = '이번 조교에서:';
  get_lose_virginity = (virgin, unsatisfied_desc) =>
    unsatisfied_desc
      ? [virgin, '을(를) 잃고,', unsatisfied_desc]
      : [virgin, '을(를) 잃었다'];

  lust_down_plus = '성욕이 크게 해소되었다!';
  lust_down = '성욕이 대체로 가라앉았다';
  lust_up = '오히려 성욕이 쌓여 버렸다……';

  pressure_down_plus = '스트레스가 크게 줄었다!';
  pressure_down = '팽팽하던 긴장이 조금 풀렸다';

  get_milk_info = (milk) => ['분출량: ', ...this.get_milk_amount(milk)];
  get_drink_info = (liquid_list) => ['마신 액체: ', ...liquid_list];
  get_cum_in_womb_info = (semen) => [
    '성기로 받아들인 양: ',
    ...this.get_semen_amount(semen),
  ];
  get_cum_in_anal_info = (semen) => [
    '항문으로 받아들인 양: ',
    ...this.get_semen_amount(semen),
  ];
  get_milk_amount = (milk) => ['모유 ', milk];
  get_semen_amount = (semen) => ['정액 ', semen];
  get_secretion_amount = (secretion) => ['정액 ', secretion];

  get_wound_info = (parts) => [parts, '이(가) 찢어졌다…… 아팠을 것이다'];

  no_orgasm = '절정이 발생하지 않았다';
};
