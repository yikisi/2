module.exports = class extends require('#/i18n/zh-CN/table/mark') {
  name_template = '%NAME% 각인';
  lv_template = 'Lv.%LEVEL%';

  n_pleasure = '쾌락';
  n_ero = '음문';
  n_meek = '동심';
  n_pain = '고통';
  n_shame = '수치';
  n_hate = '반발';

  a_pleasure = '쾌';
  a_ero = '음';
  a_meek = '순';
  a_pain = '통';
  a_shame = '치';
  a_hate = '반';
  a_iron = '강';

  abbr_template = '[%MARK%%LEVEL%]';
  mark_with_level = '%MARK% Lv.%LEVEL%';

  get_mark_with_level_stars = (
    mark_with_level,
    full_stars,
    empty_stars,
    divider = ' ',
  ) => [mark_with_level, divider, full_stars, empty_stars];

  s_title_name = '별칭';

  s_t_no = '성욕 처리용 암말';
  s_t_milk = '착유용 암말';
  s_t_pregnant = '번식용 암말';
  s_t_worker = '헌금용 암말';
  s_t_inherit = '계승용 암말';
  s_t_furniture = '안는 베개용 암말';
  s_t_assistant = '동석용 암말';

  s_option_name = '타입';

  s_o_no = '없음';
  s_o_milk = '모유 노예';
  s_o_pregnant = '임신 노예';
  s_o_worker = '금전 노예';
  s_o_inherit = '인자 노예';
  s_o_furniture = '베개 노예';
  s_o_assistant = '조교 보조';

  s_description_name = '효과';

  s_d_no = '-';
  s_d_milk = '매주 모유 한 잔을 바친다.';
  s_d_pregnant =
    '임신하지 않았을 때는 항상 가임기. 임신율 +10%, 임신 진행 속도 +100%.';
  s_d_worker = '매주 일정량의 우마코인을 바친다.';
  s_d_inherit = '매주 일정량의 계승 인자를 바친다.';
  s_d_furniture =
    '함께 자는 동안 수면 중 성폭력과 납치를 모두 막고, 휴식 시 체력 회복량을 높인다.';
  s_d_assistant =
    '기본 조수로서 다른 캐릭터와의 조교에 부를 수 있다. 한 명만 설정할 수 있다.';
};
