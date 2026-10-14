module.exports = class extends require('#/i18n/zh-CN/entry') {
  language = '한국어';

  speed = '스피드';
  endurance = '스태미나';
  strength = '파워';
  toughness = '근성';
  intelligence = '지능';

  hp = '체력';
  tp = '기력';

  abbr_hp = '체';
  abbr_tp = '기';

  ui_mot = '의욕';
  mot_0 = '최악';
  mot_1 = '저조';
  mot_2 = '보통';
  mot_3 = '양호';
  mot_4 = '최상';

  a_g_grass = '잔디';
  a_g_dirt = '더트';
  a_d_short = '단거리';
  a_d_mile = '마일';
  a_d_medium = '중거리';
  a_d_long = '장거리';
  a_s_nige = '도주';
  a_s_senko = '선행';
  a_s_sashi = '선입';
  a_s_okimi = '추입';

  adapt_template = '%ADAPT% 적성';

  edu_0 = '주니어급';
  edu_1 = '클래식급';
  edu_2 = '시니어급';
  pre_edu = '입학 예정';

  a_edu_0 = '주니어';
  a_edu_1 = '클래식';
  a_edu_2 = '시니어';

  oot_0 = '육성 완료';
  oot_1 = '전당 입성';

  honour_m = '실격 ';
  honour_0 = '신참 ';
  honour_1 = '숙련 ';
  honour_2 = '중견 ';
  honour_3 = '거장 ';
  honour_4 = '전설 ';

  title_0 = '트레이너';
  title_1 = '우마무스메';
  title_2 = '성노예';
  title_3 = '임신 주머니';

  ui_rl_mark_with_value = '%MARK% (%VAL%)';

  ui_love_icon = '❤️';
  ui_love = '애정';
  ui_love_template = '애정：%LOVEINFO%';
  get_ui_colored_love = (love) => ['애정：', love];
  love_u = '？';
  love_0 = '중립';
  love_1 = '희미';
  love_2 = '두근거림';
  love_3 = '욕망';
  love_4 = '열애';
  love_5 = '연인';
  love_6 = '의존';

  ui_relation_icon = '🤝';
  ui_relation = '호감';
  ui_relation_template = '호감：%RELATIONINFO%';
  get_ui_colored_relation = (relation) => ['호감：', relation];
  relation_u = '？';
  relation_0 = '실망';
  relation_1 = '의심';
  relation_2 = '냉담';
  relation_3 = '화목';
  relation_4 = '열정';
  relation_5 = '호감';
  relation_6 = '친밀';
  relation_7 = '불변';

  celebration_template = '[%CELEBRATION%]';
  cl_new_year = '새해';
  cl_valentine = '발렌타인데이';
  cl_palace = '전당 주간';
  cl_fans = '팬 대감사제';
  cl_temple_fair = '축제';
  cl_halloween = '할로윈';
  cl_christmas = '크리스마스';

  tt_disclaimer = '면책사항';
  tt_disclaimer_content = [
    '1. 본 게임은 개발자의 취미 활동 및 코딩 연습을 목적으로 제작되었으며, 개발자의 저급한 취향과 저속한 사고방식에서 비롯된 것으로, 어떠한 경제적 수익이나 이익 추구도 없습니다.',
    { isBr: true },
    '2. 본 게임에는 다량의 R18 성인 콘텐츠가 포함되어 있으며, 등장할 수 있는 내용으로는 다자간 성관계, 조교, 경미한 SM, 비동의 성행위, 근친상간 등이 있습니다. 등장하지 않는 내용으로는 강제 NTR, 중증 SM, 잔혹한 장면, R18G 등이 있습니다.',
    { isBr: true },
    '3. 본 게임은 디자인 철학과 게임 콘텐츠 면에서 era 및 기타 다양한 작품을 접목하였으므로, era 시리즈 플레이어 또는 텍스트 에로게 애호가에게만 적합하며, 일반 플레이어에게는 적합하지 않습니다. 특히 미성년자의 플레이는 엄격히 금지됩니다.',
    { isBr: true },
    '4. 본 게임에 사용된 소재 리소스는 개발자 자체 제작, 인터넷 수집 및 협력자 제공을 포함하며, 개발자와 협력자는 서로 다른 세계, 종족, 국가 및 민족 출신이며, 서로 간에 경제적 관계는 존재하지 않습니다.',
    { isBr: true },
    '5. 본 게임의 유일한 공식 배포 주소는 ',
    {
      content: '깃 저장소',
      url: 'https://gitgud.io/umaera/erauma',
    },
    '입니다. 게임의 특성상, 미성년자가 접할 수 있는 공개 장소에서 본 게임을 전시하거나 배포하는 것을 금지하며, 어떠한 상업 활동(판매/부록 제공 등)이나 공개 활동(라이브 방송 등)에서도 본 게임을 사용하는 것을 금지합니다. ',
    { isBr: true },
    '6. 게임의 출처를 명확히 명시하거나 보존하고, 어떠한 상업적 목적이나 경제적 이익도 포함하지 않으며, 본 면책 조항을 준수하는 경우,',
    {
      content: 'GPL 2.0 only 오픈소스 라이선스',
      fontWeight: 'bold',
      url: 'https://gnu.ac.cn/licenses/old-licenses/gpl-2.0.html',
    },
    ' 및 ',
    {
      content: '크리에이티브 커먼즈 저작자표시 라이선스',
      fontWeight: 'bold',
      url: 'https://gitgud.io/umaera/erauma/-/wikis/LICENSE',
    },
    '의 조건 하에, 타인이 본 게임을 기반으로 수정하거나 2차 개발하는 것을 허용합니다(파생 저작물을 모드판 이라 칭함). 이 라이선스는 본 게임의 모든 플레이어에게 직접 부여되며, 개발자의 별도의 명시적 동의를 구할 필요는 없으나, 게임 제목 및 타이틀 화면 등에 모드판임을 명시하고 원본과 명확히 구별해야 합니다.',
    { isBr: true },
    '7. 본 선언의 해석권은 개발자에게 있으며, 버전 업데이트 시 선언 내용이 변경될 수 있으므로 최신 버전을 기준으로 삼아 주십시오.',
    { isBr: true },
    '8. 이상의 여러 가지 조건이 중첩된 점을 고려하여, 과감한 생각을 가진 분들은 지금 창을 닫고 즉시 게임을 삭제하시기 바랍니다. 삭제하지 않는 한 귀하가 본 선언을 이해하고 준수하는 것으로 간주하며, 이를 준수하지 않아 발생하는 어떠한 사고나 법적 책임도 개발자와는 무관합니다.',
  ];
  tt_disclaimer_accept =
    '위의 8가지 내용을 모두 읽고 이해했습니다. 저는 제 행동에 책임을 지며, 삭제하지 않고 게임을 계속하겠습니다.';
  tt_disclaimer_reject = '남사스러워! 안할래!';
  tt_birthday_notify = (birth_list) => ['오늘은 ', ...birth_list, ' 의 생일'];
  tt_version_template = '버전: v%VERSION%';
  tt_version_resource = '리소스팩 버전：';
  tt_new_game = '새 게임';
  tt_load_game = '불러오기';
  tt_achieve = '게임 업적';
  tt_chara_achieve = '캐릭터 업적';
  tt_help = '도움말';
  tt_copyrights = '제작진';
  tt_links = '관련 링크:';
  tt_link_release = 'EraUma 게임 소개 페이지';
  tt_link_desk_engine = 'EraElectron 엔진 (PC판) 릴리즈 페이지';
  tt_link_app_engine = 'ere.app 엔진 (안드로이드판) 릴리즈 페이지';
  tt_link_community = 'ERA 트레센 학원 (Discord 커뮤니티)';
  tt_link_wiki = 'Wiki (사용 설명/게임 설정/기여 코드 작성 가이드 등)';

  cr_title_copyrights = '제작진';
  cr_header_susai = '총괄';
  cr_header_architecture = '설계';
  cr_header_engine = '엔진';
  cr_header_developer = '개발';
  cr_header_art = '미술';
  cr_header_translate_reference = '번역 참고';
  cr_header_tr_repo = "Trainers' Legend G 번역 저장소";
  cr_header_tr_wiki = '우마무스메 중국어 Wiki';
  cr_header_kojo = '캐릭터 대사';
  cr_kojo_tip = '담당 캐릭터 ID의 최솟값 순';
  cr_thanks_detail = '감사의 말 상세';
  cr_kojo_suffix_template = '（%SUFFIX%）';
  cr_kojo_suffix_temporary = '임시';
  cr_kojo_suffix_part = '일부';
  cr_timon_recruit = '영입 지문';
  cr_timon_daily = '일상 지문';
  cr_timon_edu = '육성 지문';
  cr_timon_love = '애정 지문';
  cr_timon_ero = '조교 지문';
  cr_timon_basement = '지하실 지문';
  cr_timon_special = '특수 캐릭터 (임시)';
  cr_timon_mejiro = '메지로의 부름';
  cr_timon_random = '무작위 이벤트';
  cr_timon_guide = '튜토리얼';
  cr_timon_guide_b = '지하실 가이드';
  cr_header_image = '조교 일러스트';
  cr_image_common = '공통 일러스트';
  cr_image_gif = '행동 애니메이션';
  cr_header_lib_en_us = '영어 현지화';
  cr_header_lib_ru_ru = '러시아어 현지화';
  cr_header_lib_ja_jp = '일본어 현지화';
  cr_header_lib_ko_kr = '한국어 현지화';
  cr_header_kojo_make = '캐릭터 대사 제작';
  cr_header_test = '테스트 및 피드백';
  cr_header_community_management = '커뮤니티 운영';
  cr_header_community_assistant = '커뮤니티 협력';
  cr_header_special_thanks = '특별히 감사한 분들 (웃음)';
  cr_umamusme_pretty_derby = '우○무스메 프○티 더○';

  tk_speak_border = ['「', '」'];
  tk_think_border = ['（', '）'];
  tk_past_border = ['（', '）'];
  tk_unknown = '？？？';

  nt_ask = '관련된 쪽지를 볼까요?';
  nt_no = '나중에 메인 페이지에서 본다';

  ui_comma = ', ';
  ui_comma2 = '・';
  ui_period = '.';
  ui_exclamation = '！';
  ui_conjunction = ' 및 ';
  ui_ellipses = '……';
  ui_semicolon = '；';
  ui_back = '돌아가기';
  ui_back_title = '타이틀로 돌아가기';
  ui_achieve_title = '새로운 업적을 획득했습니다!';
  ui_on = 'ON';
  ui_off = 'OFF';
  ui_yes = '예';
  ui_no = '아니요';
  ui_yes2 = '예';
  ui_no2 = '아니요';
  ui_reset = '초기화';
  ui_skip = '결과로 넘기기';
  ui_nothing = '없음';
  ui_money_template = '%MONEY% 우마코인';
  ui_get_date = (year, month, week) => [
    year,
    ' 년 ',
    month,
    ' 월 제 ',
    week,
    ' 주',
  ];
  ui_date_without_year_template = '%MONTH% 월 제 %WEEK% 주';
  ui_month_template = '%MONTH%개월';
  ui_too_long_template =
    '(표시 너비는 전각 %WIDTH%자 또는 반각 %WIDTH*2%자를 넘을 수 없습니다. 다시 입력해 주세요!)';
  ui_et_prev = '이전';
  ui_et_next = '다음';
  ui_pg_prev = '이전 페이지';
  ui_pg_next = '다음 페이지';
  ui_ch_prev = '이전';
  ui_ch_next = '다음';
  ui_pagination_template = '%CURR% / %TOTAL% 페이지';
  ui_default = '기본';
  ui_game_over = 'GAME OVER';
  ui_invalid_value = '（없음）';
  ui_unknown_value = '?';
  ui_all = '전체';
  ui_increase = '상승';
  ui_decrease = '하강';
  ui_end = '종료';
  ui_cancel = '취소';
  ui_signature_result = '주요 시상 이력';
  ui_agree = '동의';
  ui_disagree = '거절';

  get_ui_reward_header = (chara) => [chara, '의 능력이 다음과 같이 변했다:'];
  get_ui_change_attr = (attr, change_mark, change_val) => [
    attr,
    ' 능력치 ',
    change_mark,
    ' ',
    change_val,
  ];
  get_ui_add_skills = (chara, skills) => [
    chara,
    '의 새로 습득한 스킬: ',
    ...skills,
  ];
  ui_get_pt_template = '스킬 Pt를 %PT% 획득했다!';
  ui_train_level_up_template = '%ATTR% 트레이닝을 더 잘하게 되었다!';
  get_ui_change_motivation = (chara, motivation) => [
    chara,
    '의 현재 컨디션은 ',
    motivation,
  ];
  get_ui_change_relation = (chara, target, change_mark, val, result) => [
    chara,
    '의 ',
    target,
    '에 대한 호감이 ',
	val,
    ' ',
	change_mark,
    '! 현재: ',
    result,
  ];
  get_ui_find_betrayed = (chara, you) => [
    you,
    '의 배신에 ',
    chara,
    '은(는) 극도로 분노했다……',
  ];
  get_ui_change_love = (chara, you, change_mark, val, result) => [
    chara,
    '의 ',
    you,
    '에 대한 애정이 ',
	val,
    ' ',
	change_mark,
    '! 현재: ',
    result,
  ];
  get_trigger_love_event = (chara) => [
    '（',
    chara,
    '와(과)의 관계가 한 단계 더 나아갈 수 있을 것 같다……）',
  ];
  ui_love_level_up = '이제 돌이킬 수 없다...';
  get_ui_hurt_uma = (chara) => ['【', chara, '이(가) 부상을 입었다!】'];
  get_ui_hurt_uma_plus = (chara) => ['【', chara, '의 부상이 악화되었다!】'];
  get_ui_hurt_tired_uma = (chara) => [
    '【',
    chara,
    '은(는) 피로가 쌓인 데다 더 심한 부상까지 입었다!】',
  ];
  get_ui_add_titles = (chara) => [
    '【',
    chara,
    '은(는) 새로운 칭호를 획득했다!】',
  ];
  get_ui_too_tired = (chara) => [chara, '의 피로가 극심합니다!'];
  get_ui_bankrupt_warn = (you) => ['【', you, '의 파산이 임박했습니다!】'];
  get_ui_ignore_event_punish = (chara, you) => [
    '【',
    you,
    '이(가) 신경 쓰지 않은 탓에 ',
    chara,
    '은(는) 조금 실망했다】',
  ];
  get_ui_ignore_event_punish2 = (chara, you) => [
    '【',
    you,
    '이(가) 신경 쓰지 않은 탓에 ',
    chara,
    '은(는) 크게 실망했다】',
  ];
  get_ui_edu_end = (chara) => ['【', chara, '의 육성이 종료되었습니다】'];
  get_ui_edu_aim_summary_header = (chara) => [
    chara,
    '의 육성 목표 달성 현황：',
  ];
  edu_aim_done = '완료!';
  get_ui_edu_ignore_aim = (chara, count) => [
    chara,
    '의 ',
    count,
    '개 육성 이벤트를 놓쳤습니다…',
  ];

  ui_time_flow = '【시간이 흐르기 시작한다】';
  ui_new_week = '【새로운 한 주가 시작되었다】';

  ui_hd_no_save = '현재 게임 중이 아닙니다';
  get_ui_hd_location = (location) => ['현재 위치 ', location];
  get_ui_hd_honour = (honour) => ['명성 ', honour];
  ui_hd_income_template = '(%INCOME%)';
  get_ui_hd_money = (money, income = []) => [money, ...income, ' 우마코인'];
  ui_billing_title_start = '청구서：';
  ui_billing_invest_template = '%INCOME% (%CHARA%의 투자 수익)';
  ui_billing_bonus_template = '%INCOME% (월급+연말 상여금)';
  ui_billing_salary_template = '%INCOME% (월급)';
  ui_billing_borrow_template = '%INCOME% (%CHARA%%MAIN% 남은 기간 %TIMER%주)';
  ui_billing_borrow_main = '·주요';
  ui_billing_slave_template = '%INCOME% (%CHARA%의 헌금)';
  ui_hd_current_race = '이번 주의 레이스';
  ui_hd_races = '모두 보기';

  ui_no_target = '상호작용할 캐릭터가 선택되지 않았습니다';
  get_ui_cur_chara_info = (
    title,
    name,
    palace,
    growth,
    motivation,
    edu,
    race,
  ) => [
    '현재 캐릭터：',
    ...title,
    name,
    palace,
    ' (',
    growth,
    ')',
    ...motivation,
    edu,
    ...race,
  ];
  ui_palace_template = '[%PALACE%]';
  get_ui_motivation = (motivation) => [this.ui_mot, '・', motivation];
  ui_edu_template = '%EDU%';
  get_ui_race_indicator = (race, delta) => [
    '(',
    race,
    '까지 앞으로 ',
    delta,
    '주)',
  ];
  get_ui_curr_race_indicator = (race) => ['(이번 주 개최: ', race, ')'];

  ui_select_hd_info_template = '정보를 확인할 캐릭터 선택 (%COUNT%)';
  ui_select_hd_interact_template = '상호작용할 캐릭터 선택 (%COUNT%)';
  ui_select_hd_name = '이름';
  ui_select_hd_score = '평가';
  ui_select_hd_races = '성적';
  ui_select_hd_edu = '육성';
  ui_select_hd_playthrough = '회차';
  ui_select_clear = '선택 초기화';
  ui_select_no_character = '팀에 아무도 없다';
  ui_select_event_filter_tooltip =
    '* 버튼이 빨간색인 캐릭터는 이번 주에 주목할 만한 이벤트가 있습니다';
  ui_select_event_filter_template = '특별 이벤트가 있는 캐릭터만 [%STATUS%]';
  ui_select_order_marks = ['▼', '▲'];

  ui_change_image = '그림 변경';
  ui_show_team = '팀 목록 보기';
  ui_train = '트레이닝';
  ui_self_train = '자율트레이닝';
  ui_goto_race = '레이스 출주';
  ui_register_race = '레이스 등록';
  ui_goto_sex = '침대로 초대';
  ui_next_turn = '다음 주까지 휴식';
  ui_office_study = '학습지도';
  ui_office_prepare = '레이스 전 준비';
  ui_talk = '대화';
  ui_office_gift = '선물 주기';
  ui_self_cook = '식사';
  ui_office_cook = '함께 식사';
  ui_self_rest = '휴식';
  ui_office_rest = '함께 휴식';
  ui_self_game = '게임하기';
  ui_office_game = '함께 게임하기';
  ui_change_take_care = '돌보는 캐릭터 변경';
  ui_ask_take_care = '돌봄 부탁';
  ui_self_update = '자신의 성적 능력 향상';
  ui_ero_update = '상대 성적 능력 향상';
  ui_borrow_money = '돈빌리기';
  ui_celebration_template = '함께 %CELEBRATION% 축하';
  ui_birthday = '생일 축하';
  ui_check_love = '애정 이벤트 재발동';
  ui_basement_me = '광적인 사랑을 갈구한다';
  ui_recruit = '훈련장으로 이동 (모집)';
  ui_trainer_office = '트레이너 사무실로 이동';
  ui_clinic = '보건실로 이동';
  ui_god_together = '함께 세 여신상으로 이동';
  ui_god_alone = '세 여신상으로 이동';
  ui_atrium_together = '함께 안뜰로 이동';
  ui_atrium_alone = '안뜰로 이동';
  ui_rooftop_together = '함께 옥상으로 이동';
  ui_rooftop_alone = '옥상으로 이동';
  ui_chairman_office = '이사장실로 이동';
  ui_visitors = '응접실로 이동';
  ui_school_shop = '매점으로 이동';
  ui_out_together = '함께 외출';
  ui_out_alone = '외출';
  ui_info_page = '캐릭터 정보';
  ui_storage = '소지품';
  ui_races = '레이스 정보';
  ui_office_filter_template = '트레이닝실 활동 제외 [%STATUS%]';
  ui_out_filter_template = '외출 제외 [%STATUS%]';
  ui_save_game = '저장';
  ui_load_game = '불러오기';

  ui_foreign_study_template = '%LAN%어 학습';
  ui_foreign_rest = '요양하기';
  ui_foreign_train = '적응 훈련';
  ui_foreign_travel = '관광';

  ui_act_event_tip = '이 행동에는 이벤트가 있습니다';
  ui_loc_npc_tip_template = '이 장소에 있는 사람 %COUNT% 명';
  ui_loc_back_tip = '돌아올 때 트리거되는 이벤트 존재';
  ui_loc_event_tip = '이 장소에 이벤트 존재';
  ui_loc_celebration_tip_template =
    '이 장소에서 %COUNT% 명이 기념일 이벤트가 있음';

  ui_cost_chara_stamina_tip_template =
    '담당 캐릭터의 체력이 부족합니다 (필요: %STAMINA%)';
  ui_cost_chara_time_tip_template =
    '담당 캐릭터의 기력이 부족합니다 (필요: %TIME%)';
  ui_cost_you_stamina_tip_template = '체력이 부족합니다 (필요: %STAMINA%)';
  ui_cost_you_time_tip_template = '기력이 부족합니다 (필요: %TIME%)';
  ui_cost_money_tip_template = '우마코인이 부족합니다 (필요: %MONEY%)';
  ui_foreign_lan_max_tip_template = '%LAN% 실력은 이미 충분히 숙련되었습니다';
  ui_foreign_rest_max_tip = '이미 건강을 회복했습니다';
  ui_foreign_train_max_tip = '코스에 완전히 적응했습니다';
  ui_celebration_remote_tip = '멀리 떨어져 있으면 함께 축하할 수 없습니다';

  ui_moon_well_partner_tip = '곁에 다른 사람이 있습니다';

  ui_rec_chara_info = '개인 정보';
  ui_rec_edu_info = '육성 미리 보기';
  ui_rec_exit = '나가기';

  ui_rec_c_info_template = '%NAME%의 개인 정보';
  ui_rec_c_body_template = '%NAME%의 신체 치수';
  ui_rec_c_talent_template = '%NAME%의 성격 특성';
  ui_rec_c_image_template = '%NAME%의 조교 일러스트';
  ui_rec_e_train_template = '%NAME%의 트레이닝 보정';
  ui_rec_e_train_buff_template = '%ATTR%：+%BUFF%%';
  ui_rec_e_adapt_template = '%NAME%의 각질 적성';
  ui_rec_e_skill_template = '%NAME%의 습득스킬';
  ui_rec_e_aim_template = '%NAME%의 육성 목표';
  ui_rec_e_title_template = '%NAME%의 고유 칭호';
  ui_rec_e_skill_init = '초기：';
  ui_rec_e_skill_init_pt = '스킬포인트+680';
  ui_rec_e_skill_classic = '클래식 시즌 해금：';
  ui_rec_e_skill_after_pt = '스킬포인트+400';
  ui_rec_e_skill_senior = '시니어 시즌 해금：';

  ui_train_base = '기초 능력치';
  ui_train_score = '평가';
  ui_train_pt = '스킬포인트';
  ui_train_race = '레이스 능력';
  ui_train_adapt_track = '마장 적성';
  ui_train_adapt_dis = '거리 적성';
  ui_train_adapt_style = '각질 적성';
  ui_train_adapt_ui_conjunction = '・';
  ui_train_learnt_skills = '습득완료기술';
  ui_train_learn_skill = '스킬 습득';
  ui_train_reset_skill = '스킬 초기화';
  ui_train_with_s_rate_template =
    '%ATTR%트레이닝 Lv.%LEVEL%\n성공률:%SUCCESS%%';
  ui_train_reset_skill_confirm = '스킬포인트 100을 사용해 스킬을 초기화합니까?';
  ui_train_skill_header_template = '%NAME%의 스킬 선택';
  get_ui_train_skill_pt_info = (pt) => ['스킬포인트：', pt];
  ui_train_skill_enable_filter = '필터 열기';
  ui_train_skill_disable_filter = '필터 닫기';
  get_ui_train_learn_skill = (skill) => ['스킬 ', ...skill, '을(를) 습득할까?'];
  get_ui_train_replace_skill = (skill, remove) => [
    '스킬 ',
    ...skill,
    '을(를) 습득할까? ',
    ...remove,
    '을(를) 대신하게 된다.',
  ];

  get_ui_reg_header = (chara) => [chara, '의 레이스 참가 신청'];
  ui_reg_race_template = '%NAME% (%COUNTRY%) %GRAND% %MARK%';
  ui_grand_live_mark = '🎤';
  ui_reg_registered = '[▲등록됨]';
  get_ui_reg_tip_1_before_begin = (chara) => [
    chara,
    '은(는) 데뷔전을 통과해야 다른 레이스에 참가할 수 있습니다',
  ];
  get_ui_reg_tip_1_after_begin = (chara) => [
    chara,
    '은(는) 빨간색으로 표시된 레이스에 관심이 있습니다',
  ];
  ui_reg_tip_2 =
    '** 별표(*)가 붙은 레이스에 참가하면 특별한 일이 발생할 수 있습니다.';
  ui_reg_tip_3 =
    '*** 🎤가 붙은 레이스에는 그랜드 라이브가 마련되며, 참가 시 더 많은 명성을 얻을 수 있습니다.';
  ui_reg_tip_4 =
    '(프랑스) 등의 표기가 붙은 레이스는 해외 레이스입니다. 2주 전에 등록하고, 2주 전에 원정을 떠나야 합니다';
  ui_reg_race_filter_template = '불리한 레이스 필터링 [%STATUS%]';
  ui_reg_race_more_info = '추가 정보 표시 [%STATUS%]';

  get_ui_race_select_contestants = (race) => [
    '다음 팀원들이 ',
    race,
    '에 등록했습니다. 출주를 취소시킬까요?',
  ];
  ui_race_select_contestant_template = '%NAME% [%STATUS%]';
  ui_race_select_selected = '출주';
  ui_race_select_prevent = '출주 취소';
  ui_race_select_done = '출주 명단 확정';
  get_ui_race_your_tp = (you) => [you, '의 기력'];
  ui_race_prev_template = '이전 캐릭터\n%NAME%';
  ui_race_next_template = '다음 캐릭터\n%NAME%';
  ui_race_item_prev_template = '이전 캐릭터 %NAME%';
  ui_race_item_next_template = '다음 캐릭터 %NAME%';
  get_ui_race_preview_contestant_entry = (score, motivation, pop, pop_mark) => [
    score,
    { isDivider: true },
    ...motivation,
    { isDivider: true },
    ' 인기 ',
    pop,
    '위 ',
    pop_mark,
  ];
  ui_race_preview_contestant_attr = '%ATTR% (%RANK%)';
  ui_race_preview_contestant_style = '출주 각질';
  get_ui_race_preview_contestant_adapt = (name, adapt) => [name, ' ', adapt];
  ui_race_preview_contestant_tip =
    '* 출주자는 게이트 번호순입니다. 팀원은 초록색, 강적은 빨간색으로 표시됩니다';
  ui_race_bt_go = '출주!';
  ui_race_bt_chart = '경기장 정보';
  ui_race_bt_item = '장난감 사용';
  get_ui_race_preview_equip_item = (chara) => [chara, '에게 성인용품 장착: '];
  ui_race_preview_equip_item_part_template = '%NAME%의 %PART%에 성인용품 장착';
  get_ui_race_preview_item_stg_template = '남은 수량 %COUNT%개';
  ui_race_preview_equip_item_v_tip = '아직 처녀다!';
  ui_race_preview_equip_item_a_cond =
    '필요: 항문 경험 %REQUIRE%회 (현재: %CURRENT%)';
  ui_race_start_event = '레이스 전 누구를 응원해야 할까?';
  ui_race_speed_1 = '1배속으로 보기';
  ui_race_speed_2 = '2배속으로 보기';
  ui_race_speed_4 = '4배속으로 보기';
  ui_race_few_contestants = '참가자 수 줄이기';
  ui_race_skip_race = '결과 확인';
  ui_race_timer_template = '타이머: %TIMER%';
  ui_race_progress = '진행';
  ui_race_contestant_no = '번호';
  ui_race_contestant_name = '이름';
  ui_race_contestant_style = '각질';
  ui_race_contestant_total_time = '시간';
  ui_race_contestant_speed = '스피드';
  ui_race_contestant_loc = '상대 위치';
  ui_race_contestant_rank = '순위';
  ui_race_contestant_progress_template =
    '%LOCATION% (%LANE% %SLOPE% %BLOCKED% %TEMPTATION%)';
  ui_race_start = '출발!';
  ui_race_bad_start = '출발 지연!';
  ui_race_reporter = '실황';
  ui_race_result_summary = '결과 게시판';
  get_ui_race_result_summary_header = (track, race) => [track, ' ', race];
  ui_race_result_location = '상대 위치 집계';
  ui_race_result_location_header = '상대 위치 차트';
  ui_race_result_speed = '스피드 집계';
  ui_race_result_speed_header = '스피드 차트';
  ui_race_result_endurance = '스태미나 집계';
  ui_race_result_endurance_header = '스태미나 차트';
  ui_race_result_skills = '스킬발동 차트';
  ui_race_result_log = '레이스 기록';
  get_ui_race_result = (chara, race, rank) => [
    chara,
    '은(는) ',
    race,
    '에서 ',
    rank,
    '！',
  ];
  ui_race_end_event = '누구를 축하/위로해 줄까?';
  ui_race_event_chara_template = '%NAME% (%RANK%)';
  ui_race_event_end = '종료';
  ui_race_event_tip = '* 버튼이 빨간색인 캐릭터는 고유 이벤트가 있습니다';
  get_ui_race_honour_reward = (you, up_info) => [
    '팀원의 뛰어난 활약 덕분에 세간에서 ',
    you,
    '의 평가가 ',
    up_info,
    '했다!',
  ];
  get_ui_race_honour_pregnant_punish = (you, down_info) => [
    '팀원들은 뛰어난 활약을 펼쳤지만, 현역 트레이너의 사생아 스캔들로 인해 세간에서 ',
    you,
    '의 평가가 ',
    down_info,
    '했다!',
  ];
  get_ui_race_honour_hentai_punish = (you, down_info) => [
    '팀원들의 변태적인 행동으로 인해 세간에서 ',
    you,
    '의 평가가 ',
    down_info,
    '했다!',
  ];
  get_ui_race_honour_lose_punish = (you, down_info) => [
    '팀의 패배로 인해 세간에서 ',
    you,
    '의 평가가 ',
    down_info,
    '했다!',
  ];
  get_ui_race_money_reward = (money) => [
    '대회 상금 배분으로  ',
    money,
    ' 우마코인을 받았다',
  ];

  get_ui_out_confirm = (chara) => [chara, '와(과) 어디로 갈까?'];
  ui_out_self_confirm = '혼자 어디로 갈까?';
  get_ui_bt_talk_with_npc_template = '%NAME%에게 말 걸기';
  ui_deep_interact_with_npc_template =
    '아직 그 정도로 가까운 사이가 아닙니다 (필요: 호감 %R_REQUIRE% 이상, 현재: %R_CURRENT%; 또는 애정 %L_REQUIRE% 이상, 현재: %L_CURRENT%)';
  get_ui_out_bye = (chara, you) => [
    '【',
    chara,
    '에게 작별을 고한 뒤, ',
    you,
    '은(는) 자리를 떠났다】',
  ];
  ui_moon_well_close_tip = '비탕은 현재 영업하지 않습니다';
  ui_mejiro_city_alone_tip = '메지로 시티는 혼자 온 손님을 환영하지 않습니다';
  ui_mejiro_city_love_tip_template =
    '아직 그 정도로 가까운 사이가 아닙니다 (필요: %REQUIRE% 이상, 현재: %CURRENT%)';

  ui_select_action_atrium = '안뜰에서 함께 무엇을 할까?';
  ui_action_atrium_tree_hollow = '고목 구멍 구경하기';
  ui_action_atrium_date = '데이트';
  ui_select_action_river = '강가에 가서 뭘 할까?';
  ui_action_river_fish = '낚시한다';
  ui_action_river_walk = '산책';
  ui_select_action_shopping = '상점가에 가서 뭘 할까?';
  ui_action_shopping_arcade = '오락실 가기';
  ui_action_shopping_drawing = '추첨';
  ui_action_shopping_ktv = '노래방';
  ui_action_shopping_movie = '영화 보기';
  ui_action_shopping_ero_item = '성인용품점 둘러보기';
  ui_select_action_station = '역에 가서 무엇을 할까?';
  ui_action_station_restaurant = '식사';
  ui_action_station_date = '데이트';
  ui_action_station_shopping = '쇼핑';

  ui_race_report_header = '출주 예정 레이스';

  ui_shop_limited_item_entry_template = '%ITEM%(한정)';
  ui_shop_hold = '보유';
  ui_shop_max = '최대';
  ui_shop_buy_template = '구매 (%PRICE% 우마코인)';
  ui_shop_tip =
    '* 아이템을 클릭하면 설명을 볼 수 있습니다.\n** 「한정」이 표시된 물품은 한 개만 소지할 수 있습니다.';
  get_ui_shop_bargain = (item, discount) => [
    '*** 이번 주 한정 세일! ',
    item,
    ' ',
    discount,
    '!',
  ];
  ui_shop_30_off = '30% off';
  ui_shop_50_off = '50% off';
  ui_shop_acc_switch_template = '단축키 숨기기 [%STATUS%]';
  get_ui_shop_buy = (item, count) => [item, '을(를) ', count, '개 샀다'];

  get_ui_take_care = (chara) => [chara, '에게 누구를 돌봐 달라고 부탁할까?'];
  get_ui_take_care_change_confirm = (chara, curr) => [
    chara,
    '은(는) 현재 ',
    curr,
    '을(를) 돌보고 있습니다. 대상을 바꿀까요?',
  ];
  ui_take_care_aim_continue_template = '%NAME% (돌보는 중)';
  ui_take_care_aim_taken_template = '%NAME% (%TEACHER%이(가) 돌보는 중)';
  ui_take_care_bt_cancel = '돌봄 중지';
  ui_take_care_bt_keep = '현 상태 유지';
  get_ui_take_care_continue = (chara, curr) => [
    chara,
    '은(는) 계속해서 ',
    curr,
    '을(를) 돌본다',
  ];
  get_ui_take_care_cancel = (chara, prev) => [
    chara,
    '은(는) 더 이상 ',
    prev,
    '을(를) 돌보지 않는다',
  ];
  get_ui_take_care_change = (chara, next) => [
    chara,
    '은(는) 이제부터 ',
    next,
    '을(를) 돌본다',
  ];

  ui_storage_have_items =
    '현재 보유한 아이템: (아이템을 클릭하면 사용하거나 설명을 볼 수 있습니다)';
  ui_storage_no_items = '보유한 아이템이 없습니다';
  ui_storage_select_header_template = '%ITEM%을(를) 사용할 대상 선택';
  ui_storage_no_targets_template = '%ITEM%의 사용 대상이 없다...';

  ui_bt_self_info = '자신정보';
  ui_bt_chara_info = '상대정보';

  ui_wur_sleep = '가만히 즐긴다';
  ui_wur_wake = '눈을 뜬다';

  ui_sex_bt_setting = '설정';
  ui_sex_bt_touch = '신체접촉';
  ui_sex_bt_stain = '불결검사';
  ui_sex_bt_turn_around = '방향 바꾸기';

  bs_info_template = '어둑한 방……%DURABILITY%……';
  bs_no_one_info_template = '어둑하고 텅 빈 방……%DURABILITY%……';
  ui_bs_durability_0 = '하지만 아무런 방비도 없다';
  ui_bs_durability_1 = '하지만 조금 손보면 빠져나갈 수 있을 것 같다';
  ui_bs_durability_2 = '문이 쉽게 열릴 것 같지 않다';
  ui_bs_durability_3 = '까다로운 장애물이 곳곳에 있다';
  ui_bs_durability_4 = '시설이 모두 튼튼하다';
  ui_bs_durability_5 = '여기서는 어떤 저항도 통하지 않는다';

  ui_bs_flatter = '비위 맞추기';
  ui_bs_unlock = '탈출 시도';
  ui_bs_relax = '우두커니 앉아있기';
  ui_bs_sleep = '잠깐 자기';
  ui_bs_eat = '음식 섭취';
  ui_bs_sex = '침대로 유혹';
  ui_bs_strike = '기습 공격';
  ui_bs_battle = '정면으로 반항';
  ui_bs_release = '해방 요청';
  ui_bs_clock = '시간 확인';
  ui_bs_guide = '탈출 가이드';

  ui_save_game_header = '세이브 슬롯 선택';
  ui_auto_save_template = '%NAME% (자동 저장)';
  ui_empty_save = '빈 세이브 슬롯';
  ui_save_rename = '이름 바꾸기';
  ui_save_name_save = '이 이야기에 이름을 지정';
  ui_save_remove_save = '이 이야기의 이름을 초기화';
  ui_save_name_save_header = '세이브 이름 입력:';
  ui_save_name_save_confirm_template =
    '이 이야기의 이름을 [%NAME%](으)로 정할까요?';
  ui_save_name_save_result_template =
    '이 이야기의 제목은 이제 [%NAME%] 입니다...';
  ui_save_name_remove_confirm_template = '[%NAME%] 이름을 지울까요?';
  ui_save_name_remove_result =
    '세이브파일 이름 지정이 취소되었으며 다음 저장 시 기본 이름을 사용합니다...';
  ui_save_override_confirm_template = '%NO%번 슬롯의 세이브를 덮어쓸까요?';
  ui_save_save_result_template = '%NO%번 슬롯에 성공적으로 저장되었습니다';
  ui_save_rename_confirm_template =
    '%NO%번 슬롯의 이름을 [%NAME%](으)로 바꿀까요?';
  ui_save_rename_result_template = '%NO%번 슬롯의 저장 파일 이름 변경 성공';
  ui_save_rename_cancel_template =
    '%NO%번 슬롯의 저장 파일 이름 변경을 취소했습니다';

  ui_load_game_header = '불러올 슬롯 선택';
  ui_load_remove = '삭제';
  ui_load_fail_template = '%NO%번 슬롯을 불러오지 못했습니다';
  ui_load_remove_success_template = '%NO%번 슬롯을 삭제했습니다';

  name = new (require('#/i18n/ko-KR/chara/names'))();
  title = new (require('#/i18n/ko-KR/chara/titles'))();
  title_desc = new (require('#/i18n/ko-KR/chara/title-desc'))();
  feature = new (require('#/i18n/ko-KR/chara/feature'))();
  detail = new (require('#/i18n/ko-KR/chara/detail'))();

  kojo = new (require('#/i18n/ko-KR/kojo/entry'))();
  timon = new (require('#/i18n/ko-KR/timon/entry'))();

  new_game = new (require('#/i18n/ko-KR/new-game'))();
  location = new (require('#/i18n/ko-KR/location'))();
  vehicle = new (require('#/i18n/ko-KR/vehicle'))();
  note = new (require('#/i18n/ko-KR/notes'))();
  achievement = new (require('#/i18n/ko-KR/achieve'))();
  achieve_desc = new (require('#/i18n/ko-KR/achieve-desc'))();

  tb_abl = new (require('#/i18n/ko-KR/table/abl'))();
  tb_exp = new (require('#/i18n/ko-KR/table/exp'))();
  tb_item = new (require('#/i18n/ko-KR/table/item'))();
  tb_mark = new (require('#/i18n/ko-KR/table/mark'))();
  tb_param = new (require('#/i18n/ko-KR/table/param'))();
  tb_stain = new (require('#/i18n/ko-KR/table/stain'))();
  tb_status = new (require('#/i18n/ko-KR/table/status'))();
  tb_talent = new (require('#/i18n/ko-KR/table/talent'))();
  abl_desc = new (require('#/i18n/ko-KR/table/abl-desc'))();
  item_desc = new (require('#/i18n/ko-KR/table/item-desc'))();
  status_desc = new (require('#/i18n/ko-KR/table/status-desc'))();
  talent_desc = new (require('#/i18n/ko-KR/table/talent-desc'))();

  sex = new (require('#/i18n/ko-KR/sex/main'))();
  train_action = new (require('#/i18n/ko-KR/sex/actions'))();
  body_part = new (require('#/i18n/ko-KR/sex/parts'))();
  jewel_shop = new (require('#/i18n/ko-KR/sex/shop'))();
  inmon = new (require('#/i18n/ko-KR/sex/inmons'))();
  inmon_desc = new (require('#/i18n/ko-KR/sex/inmon-desc'))();

  clothe = new (require('#/i18n/ko-KR/race/clothes'))();
  race = new (require('#/i18n/ko-KR/race/races'))();
  skill = new (require('#/i18n/ko-KR/race/skills'))();
  skill_desc = new (require('#/i18n/ko-KR/race/skill-desc'))();
  inherit_shop = new (require('#/i18n/ko-KR/race/inherit'))();
  gene = new (require('#/i18n/ko-KR/race/genes'))();
  gene_desc = new (require('#/i18n/ko-KR/race/gene-desc'))();
  mob = require('#/i18n/ko-KR/race/uma-mob.json');
};
