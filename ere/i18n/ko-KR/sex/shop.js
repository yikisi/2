module.exports = class extends require('#/i18n/zh-CN/sex/shop') {
  abl_tab = '능력 습득';
  talent_tab = '특성 변경';
  mark_tab = (has_inmon) => (has_inmon ? '각인 조정' : '각인 제거');
  transfer_tab = '인자 채집';
  update_end = '강화 종료';

  jewel_header_template = '%NAME%의 인자';
  abl_header_template = '%NAME%의 능력';
  talent_header_template = '%NAME%의 특성';
  mark_header_template = '%NAME%의 각인';
  inmon_header_template = '%NAME%의 음문';
  transfer_header = '채음보양';

  price_tip_template = '필요: %PRICE%';
  cond_tip_template = '%COND% %EXP% (현재 %NOW%)';
  multi_cond_tip_template = '%COND% 정액 총 부착량(ml) (현재 %ALL% = %NOW%)';
  jewel_price_template = '%JEWEL%×%COUNT%';
  price_splitter = ' + ';

  get_price_info = (jewel_name, cost, all, chara) => [
    jewel_name,
    '：',
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
    '* 능력명을 누르면 설명을 볼 수 있습니다. ↑/↓로 올리거나 내릴 수 있습니다.\n' +
    '** 부위별 조교 인자가 부족하면 인자 2배로 부족분을 보충할 수 있습니다.';
  cf_upgrade = '강화';
  cf_downgrade = '약화';
  get_abl_upgrade_confirm = (chara, abl, upgrade, new_level) => [
    chara,
    '의',
    abl,
    '을(를)',
    upgrade,
    '하여',
    new_level,
    '로 바꿀까요? 소비:',
  ];

  bt_add = '특성 획득';
  bt_remove = '특성 제거';
  bt_t_up = '감도 올리기';
  bt_t_down = '감도 내리기';
  milk_other_condition = '[모유 약제]로 인한 약물성 수유 중 (현재: %STATUS%)';
  get_talent_tab_tooltip = (limit) =>
    '* 특성명을 누르면 설명을 볼 수 있습니다. 뒤의 버튼으로 감도와 특성을 조절할 수 있습니다.\n' +
    '** 부위별 조교 인자가 부족하면 인자 2배로 부족분을 보충할 수 있습니다.\n' +
    `*** 최고 감도로 만들 수 있는 부위 수:${limit}`;
  cf_add = '획득';
  cf_remove = '제거';
  cf_s_up = '상승';
  cf_s_down = '하락';
  get_talent_change_confirm = (chara, talent, change) => [
    chara,
    '의',
    talent,
    '특성을',
    change,
    '할까요? 소비:',
  ];
  get_sens_change_confirm = (chara, talent, change) => [
    chara,
    '의',
    talent,
    '을(를)',
    change,
    '시킬까요? 소비:',
  ];
  milk_slave_warning = '(음문 효과 [모유 노예]는 취소됩니다!)';

  ch_cost_meek = '순종 인자로 반항 각인 제거';
  ch_cost_pain = '고통 인자로 반항 각인 제거';
  ch_cost_fear = '공포 인자로 반항 각인 제거';
  ch_cost_shame = '치욕 인자로 반항 각인 제거';
  clean_hate_tooltip =
    '* 각인을 획득한 경우, 해당 인자를 사용하여 반발각인을 제거할 수 있습니다\n** 각인 등급이 동일한 경우, 고통, 공포, 수치 세 가지 인자를 사용하여 반발각인을 제거하는 데 드는 비용은 복종보다 낮지만, 부작용이 발생할 수 있습니다';
  bt_clean_pain = '순종 인자를 사용하여 고통각인을 제거';
  bt_clean_shame = '순종 인자를 사용하여 수치각인 제거';
  clean_other_tooltip =
    '* 제거할 각인의 레벨이 낮을수록, 동심각인의 레벨이 높을수록, 소모되는 순종 인자는 줄어든다';
  bt_upgrade_inmon = '음문 등급 올리기';
  bt_get_inmon = '쾌락각인을 음문으로 바꾼다';
  unlock_inmon_tooltip =
    '* 일심동체의 정도(동심각인의 등급)가 높을수록, 음문의 업그레이드 비용이 낮아집니다';
  sticker_tooltip = '음문 스티커는 조작할 수 없습니다';
  inmon_slave_template = '현재 옵션: %SLAVE%';
  inmon_slave_desc_template = '효과: %DESC%';
  inmon_plugin_header = '사용 가능한 플러그인';
  inmon_plugin_tooltip =
    '* 구매하여 해제한 플러그인은 이후 순종 인자를 소비하지 않습니다.\n** 같은 계열의 효과는 한 번에 하나만 적용할 수 있습니다.';
  get_inmon_warning = '타입을 정말로 취소하시겠습니까?';
  new_option_header = '새로운 음문 타입 선택';
  change_option_tooltip =
    '* 옵션 변경에는 순종 인자 1,000 필요\n** 옵션 해제는 무료';
  get_clean_hate_confirm = (chara, jewel, hate) => [
    chara,
    '의',
    jewel,
    '으로',
    hate,
    '을(를) 1단계 제거할까요? 소비:',
  ];
  get_clean_other_confirm = (chara, jewel, mark) => [
    chara,
    '의',
    jewel,
    '으로',
    mark,
    '을(를) 1단계 제거할까요? 소비:',
  ];
  get_get_inmon_confirm = (chara, m_pleasure, m_inmon) => [
    chara,
    '의',
    m_pleasure,
    '을(를)',
    m_inmon,
    '로 바꿀까요? 소비:',
  ];
  get_upgrade_inmon_confirm = (chara, m_inmon, new_inmon) => [
    chara,
    '의',
    m_inmon,
    '을(를)',
    new_inmon,
    '로 강화할까요? 소비:',
  ];
  get_change_option_confirm = (chara, option) => [
    chara,
    '의 음문 옵션을',
    option,
    '로 변경할까요? 소비',
  ];
  get_load_plugin_confirm = (chara, plugin) => [
    chara,
    '에게',
    plugin,
    '을(를) 해제하여 장착할까요? 소비:',
  ];
  clean_slave_option_confirm = '타입을 정말로 취소하시겠습니까?';
  s_milk_warning_man = '남성은 모유를 바칠 수 없습니다……';
  s_preg_warning_man = '남성은 임신할 수 없습니다……';
  s_milk_warning_milk = '[모유체질] 만 모유를 바칠 수 있습니다……';
  s_preg_warning_plugin = '불임의 가호를 받았습니다……';
  s_inherit_warning_race = '%UMA%만 인자를 상납할 수 있습니다.';
  s_assi_warning_dup = '이미 조수가 한 명 있습니다.';

  bt_transfer = '%NAME%의 %JEWEL%을(를) %YOU%에게 이전';
  transfer_tab_tooltip =
    '* 캐릭터의 부위별 인자와 순종 인자 10,000을 %YOU%의 인자 10으로 교환할 수 있습니다.\n' +
    '** 캐릭터의 고통·공포·치욕 인자 10,000을 %YOU%의 순종 인자 1로 교환할 수 있습니다.';
  get_transfer_confirm = (chara, cost, all, you, you_get) => [
    chara,
    '의',
    cost,
    '(합계',
    all,
    ')을(를)',
    you,
    '의',
    you_get,
    '로 교환할까요?',
  ];
};
