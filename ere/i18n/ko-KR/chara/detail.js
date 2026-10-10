module.exports = class extends require('#/i18n/zh-CN/chara/detail') {
  base_title = '개인정보';
  get_base_summary_info = (
    skin,
    hair,
    body_hair,
    characteristic,
    sex_title,
  ) => [
    '피부색',
    skin,
    ' 의 ',
    hair,
    ' ',
    body_hair,
    ' ',
    characteristic,
    ' ',
    sex_title,
  ];
  base_hair_info_template = '헤어스타일：%HAIR%';
  base_birthday_info_template = '%YEAR% 년 %MONTH% 월 %DATE% 일 출생';
  base_birthday_info_no_year_template = '%MONTH% 월 %DATE% 일 출생';
  base_header_body = '신체치수';
  get_base_body_info = (height, weight) => [
    '키：',
    height,
    'cm',
    { isDivider: true },
    '체중：',
    weight,
  ];
  base_body_weight_fat = '해, 행복해서 찐 살이야……';
  base_body_weight_heavy = '소폭 증가';
  base_body_weight_normal = '잘 관리됨';
  base_body_hidden = '더 이상 정보가 없다....';
  get_base_female_info = (bust, cup, waist, hip) => [
    '스리 사이즈：B',
    bust,
    ' (',
    cup,
    ' 컵) ・ W',
    waist,
    ' ・ H',
    hip,
  ];
  base_bt_comb_hair = '머리 빗기';
  /** @param {CharaTalk} chara */
  get_base_hair_select = (chara) => [
    chara.get_colored_name(),
    ' 의 새로운 헤어스타일 선택',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_auto_select = (chara, clothe) => [
    '현재 ',
    chara.get_colored_name(),
    ' 은(는) 경주 출전 시, 상황과 행사에 따라 복장을 달리하며, URA 시상식과 육성 종료 후의 명예의 전당 주간에는 경주복 [',
    clothe,
    '] 을 착용합니다.',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_keep_some = (chara, clothe) => [
    '현재 ',
    chara.get_colored_name(),
    ' 은(는) 출전 시, URA 시상식, 육성 종료 후의 명예의 전당 주간에 경주복 [',
    clothe,
    '] 을 착용합니다.',
  ];
  base_clothe_change_confirm = '바꾸시겠습니까?';
  base_clothe_bt_auto_select = '고정 해제';
  base_clothe_bt_keep_current = '현 상태 유지';

  edu_title = '육성현황';
  get_edu_score = (score) => ['평점：', score];
  edu_date_template = '%YEAR% %MONTH% 월 제 %WEEK% 주';
  edu_date_with_playthrough_template =
    '%YEAR% %MONTH% 월 제 %WEEK% 주 (%PLAYTHROUGH% 주차)';
  get_edu_pt = (pt) => ['스킬Pt ', pt, ' 보유'];
  edu_header_attr = '기초 능력치';
  get_edu_attr = (attr_name, attr) => [attr_name, '：', attr];
  edu_header_adapt = '레이스 적성';
  get_edu_adapt = (adapt_name, adapt) => [adapt_name, '：', adapt];
  edu_header_aim_template = '육성목표（%CURRENT%/%TOTAL%）';
  edu_header_aim_finished = '육성목표 (달성!)';
  edu_aim_template = '%DESC% %CURRENT%/%REQUIRE% %MARK%';
  edu_aim_template_in_rec = '%DESC% %REQUIRE%';
  edu_aim_desc_template = '%EDUTIME% %RACE%';
  edu_aim_common_desc_1 = 'G1 레이스 입상';
  edu_aim_common_desc_2 = 'G2 이상 레이스 3착 이내';
  edu_aim_common_desc_3 = '아무 레이스에서 1착';
  edu_aim_require_template = '%REQUIRE% 회';
  edu_aim_require_1 = '1착';
  edu_aim_require_2 = '2착 이내';
  edu_aim_require_3 = '3착 이내';
  edu_aim_require_4 = '4착 이내';
  edu_aim_require_5 = '입상';
  edu_aim_require_20 = '출주';
  edu_aim_mark_done = '✔';
  edu_aim_mark_no = '✘';
  edu_header_language = '언어능력';

  skill_title = '습득스킬';
  skill_header_learnt = '습득완료기술';
  skill_no_skill = '미습득';
  skill_header_available = '해금예정스킬';
  skill_header_gene = '인자상속';
  skill_no_gene = '미상속';
  skill_header_gene_available = '상속가능인자';

  race_title = '출주성적';
  race_header_race = '레이스성적';
  race_no_race = '미출주';
  get_race_summary = (race_count, win, reward) => [
    race_count,
    ' 전 ',
    win,
    ' 승, 총상금 ',
    reward,
  ];
  get_race_result = (year, race, result) => [
    year,
    ' 년 ',
    race,
    ' ・ ',
    result,
  ];
  race_result_tip_template = '인기 %POP% 위 ・ %STYLE%';
  race_header_title = '고유칭호';

  relation_title = '사회적관계';
  relation_header_relation = '대인관계';
  get_relation_entry = (name, relation) => [name, '：', relation];
  relation_no_relation = '신경 쓰이는 인물은 없는 듯 하다...';
  get_relation_take_care = (chara) => [chara, ' 을(를) 돌보는 중'];
  get_relation_be_taken_care = (chara) => [chara, ' 에게 보살핌 받는 중'];
  relation_header_family = '직계 친족';
  get_relation_family_parents = (father, mother) => [
    '아버지는 ',
    father,
    ', 어머니는 ',
    mother,
  ];
  get_relation_first_child_as_father = (date, _, __, chara, is_boy) => [
    is_boy ? '장남' : '장녀',
    ' ',
    chara,
    '의 생년월일：',
    date,
  ];
  get_relation_first_child_as_mother = (date, _, __, chara, is_boy) => [
    '출생일：',
    date,
    ', 낳은 아이：',
    is_boy ? '장남' : '장녀',
    ' ',
    chara,
  ];
  relation_family_children_template = '현재는 %INFO%';
  relation_family_as_father_template = '%COUNT% 명의 아이의 아버지';
  relation_family_as_mother_template = '%COUNT% 명의 아이의 어머니';
  relation_family_child_boy_title_template = '%NUMBER%남';
  relation_family_child_girl_title_template = '%NUMBER%녀';
  get_relation_family_child_entry_as_father = (title, child, mother) => [
    title,
    ' ',
    child,
    ', 어머니는 ',
    mother,
  ];
  get_relation_family_child_entry_as_mother = (title, child, father) => [
    title,
    ' ',
    child,
    ', 아버지는 ',
    father,
  ];
  relation_no_family = '소개할 만한 관계자가 없다...';
  relation_bt_change_callname_to_you_template = '%YOU% 에 대한 호칭 변경';
  relation_bt_reset_callname_to_you_template = '%YOU% 에 대한 호칭 되돌리기';
  relation_bt_change_callname_template = '이 캐릭터의 호칭 변경（%CALLNAME%）';
  relation_bt_reset_callname = '이 캐릭터의 호칭 되돌리기';
  get_relation_change_callname_to_you_confirm = (chara, you) => [
    chara,
    '이(가) ',
    you,
    '을 뭐라고 부르기 원하시나요?',
  ];
  get_relation_change_callname_confirm = (chara) => [
    chara,
    '을(를) 뭐라고 부를까요?',
  ];
  get_relation_change_callname_result = (caller, callee, callname) => [
    caller,
    '은(는) ',
    callee,
    '을(를) ',
    callname,
    '(이)라고 부르기로 했다...',
  ];

  sex_title = '성 기술';
  sex_exp_slave_2_accept =
    '성노예로서의 임무를 받아들이고, 우마무스메 님께 봉사하는 것을 즐기고 있다';
  sex_exp_slave_2_reject =
    '성노예의 신분에 저항하며, 비정상적으로 격렬한 육체적 쾌감에 아직 빠져들지 않았다';
  sex_exp_slave_3_accept =
    '임신 주머니로서의 소명을 받아들이고, 우마무스메 님의 새로운 생명을 품는 기쁨을 만끽하고 있다';
  sex_exp_slave_3_reject =
    '임신 주머니의 신분에 맞서, 인간으로서의 자존심을 아직 버리지 않았다';
  sex_header_inmon = '음문';
  get_sex_exp = (you, sex_count, sleep_info, prison_info) => [
    '지금까지 ',
    you,
    '와 ',
    sex_count,
    '번 잠자리를 함께 했다',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp = (sleep_count) => [', 그 중 수면간 ', sleep_count, '회'];
  get_sex_prison_exp = (prison_count) => [', 감금한 횟수 ', prison_count, '회'];
  get_sex_exp_you = (sex_count, sleep_info, prison_info) => [
    '다른 캐릭터와 총 ',
    sex_count,
    '회 관계를 가졌다',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp_you = (sleep_count) => [
    ', 그중 수면 중 성폭행을 당한 횟수 ',
    sleep_count,
  ];
  get_sex_prison_exp_you = (prison_count) => [
    ', 감금당한 횟수 ',
    prison_count,
    '회',
  ];
  sex_header_abl = '성 기술';
  get_sex_abl_entry = (abl, level) => [abl, '：', level];
  sex_header_jewel = '인자';
  sex_header_mark = '각인';
  sex_image_bt_change_template = '일러스트 변경（현재：%CURRENT%）';
  sex_image_set_template = '제 %SET% 세트';
  sex_image_set_common = '공용';
  sex_image_common_info = '공용 일러스트 사용';
  sex_image_personal_info = '전용 일러스트 사용';

  exp_mouth_title = '정보【입】';
  exp_mouth_gift_desc =
    '균형 잡힌 입술과 구강. 타고난 매력은 어떤 상대라도 무장 해제시킨다.';
  exp_mouth_trained_desc =
    '언제 어디서나 가려움과 외로움을 느낀다…… 정말, 음탕한 입술이네요';
  exp_mouth_drink_semen = '입술에 희미한 흰 자국이 남아 있다……';
  exp_mouth_drink_semen_template = '조금 전 정액 %SEMEN%ml를 마신 모양';
  get_exp_mouth_kiss = (date, chara) => [
    '첫 키스는 ',
    date,
    ', ',
    chara,
    '에게 바쳤다',
  ];
  get_exp_mouth_unknown_kiss = (date, chara) => [
    '사실 첫 키스는 ',
    date,
    '에 이미 ',
    chara,
    '에게 빼앗겼다',
  ];
  get_exp_mouth_kiss_count = (count) => ['키스 횟수 ', count, '회'];
  get_exp_mouth_blow_job = (date, chara) => [
    date,
    ', ',
    chara,
    '와(과) 입의 또 다른 사용법을 탐구했다.',
  ];
  get_exp_mouth_be_blow_job = (date, chara) => [
    date,
    ', ',
    chara,
    '에게 입의 또 다른 사용법을 배웠다',
  ];
  get_exp_mouth_unknown_be_blow_job = (date, chara) => [
    '사실은 이미 ',
    date,
    '에 처음으로 ',
    chara,
    '에게 사용되었다',
  ];
  get_exp_mouth_suck_count = (count) => ['몸을 애무한 횟수 ', count, '회'];
  get_exp_mouth_blow_job_count = (count) => [
    '성기를 애무한 횟수 ',
    count,
    '회',
  ];
  get_exp_mouth_drink_semen = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '의 정액을 맛보고 그 비린 맛에 자신도 모르게 끌렸다',
  ];
  get_exp_mouth_unknown_drink_semen = (date, chara) => [
    '사실은 ',
    date,
    '에 이미 ',
    chara,
    '의 정액 맛에 익숙해져 있었다',
  ];
  get_exp_mouth_drink_semen_count = (count) => ['마신 정액 ', count, 'ml'];
  exp_mouth_poisoned_sens =
    '따뜻한 정액을 마실 때마다 목이 쑤셔서 견딜 수가 없다';
  exp_mouth_poisoned_meek = '따뜻한 정액을 마실 때마다 행복을 느낀다';
  exp_mouth_poisoned_both =
    '따뜻한 정액을 마실 때마다 목구멍이 행복하게 쑤신다';
  get_exp_mouth_drink_secretion = (date, chara) => [
    date,
    ', ',
    chara,
    '의 벛꽃빛 구멍에서 처음으로 기쁨의 꿀을 맛보았다',
  ];
  get_exp_mouth_unknown_drink_secretion = (date, chara) => [
    '사실은 ',
    date,
    '에 이미 ',
    chara,
    '의 애액을 먹여졌다',
  ];
  get_exp_mouth_drink_secretion_count = (count) => ['마신 애액 ', count, 'ml'];
  get_exp_mouth_drink_milk = (date, chara) => [
    date,
    ', 배고파서가 아닌 처음으로 ',
    chara,
    '의 가슴을 빨았다. 맛이 마음에 들었나요?',
  ];
  get_exp_mouth_drink_milk_count = (count) => ['마신 모유 ', count, 'ml'];
  get_exp_mouth_orgasm = (count) => ['쾌감으로 절정에 이른 횟수 ', count, '회'];

  exp_breast_title = '정보【가슴】';
  exp_breast_summary_man = '건실한 대흉근';
  exp_breast_nipple_pink = '분홍색 작은 딸기';
  exp_breast_nipple_deep = '짙은 색의 작은 체리';
  exp_breast_nipple_inverted = '깊은 화산호';
  get_exp_breast_summary_woman = (nipple, size) => [
    '끝부분은 ',
    nipple,
    '의 ',
    size,
    ' 유방',
  ];
  exp_breast_gift_desc =
    '아름다운 곡선을 자랑하는 타고난 풍만한 가슴. 그 완벽한 탄력은 어떤 방문객이라도 발걸음을 멈추게 한다';
  exp_breast_trained_desc =
    '언제 어디서나 가려움과 외로움을 느낀다…… 정말, 음란한 가슴이네요';
  exp_breast_milk = '앞쪽이 조금 젖어 있어도…… 의심하지 마세요. 땀이니까요……';
  exp_breast_milk_template =
    '클립으로 막혀서 지금 %MILK%ml의 모유가 막혀 있어요……젖꼭지가 아파요';
  get_exp_breast_self_milk = (date) => [
    date,
    ', 처음으로 스스로 젖꼭지를 애무했고, 발기했다',
  ];
  get_exp_breast_be_milk = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '에게 젖꼭지를 애무받으며 발기했다',
  ];
  get_exp_breast_unknown_be_milk = (date, chara) => [
    '사실 그 젖가슴은 이미 ',
    date,
    '부터 ',
    chara,
    '의 장난감이다',
  ];
  get_exp_milk_count = (count) => ['희롱당한 횟수 ', count, '회'];
  get_exp_breast_tit_job = (date, chara) => [
    chara,
    '의 육봉은 가슴을 보면 흥분한다는 것을 ',
    date,
    '에 알게 되었다',
  ];
  get_exp_breast_be_tit_job = (date, chara) => [
    chara,
    '의 육봉은 가슴을 보면 흥분한다는 것을 ',
    date,
    '에 배웠다',
  ];
  get_exp_breast_unknown_be_tit_job = (date, chara) => [
    '사실은 ',
    date,
    '부터 가슴은 ',
    chara,
    '의 육봉에 봉사하는 데 익숙해졌다. 본인은 모르지만',
  ];
  get_exp_breast_tit_job_count = (count) => ['성기를 자극한 횟수 ', count];
  get_exp_breast_semen_count = (count) => ['묻은 정액 ', count, 'ml'];
  /**
   * @param {string} date
   * @param {PrintedSpan} chara
   * @param _ 这个参数是第二参加者的占位符，不能删！
   * @param {string} cup
   * @returns {TextContent}
   */
  get_exp_breast_milking = (date, chara, _, cup) => [
    date,
    '、',
    chara,
    '에게 자신의 ',
    cup,
    ' 가슴에 담긴 젖의 맛을 처음 맛보게 했다',
  ];
  get_exp_breast_double_milking = (date, chara, supporter, cup) => [
    date,
    '、',
    chara,
    '와(과) ',
    supporter,
    '에게 자신의 ',
    cup,
    ' 가슴에 담긴 젖의 맛을 처음 맛보게 했다',
  ];
  get_exp_breast_milking_count = (count) => ['수유 횟수 ', count];
  get_exp_breast_milking_amount = (amount) => ['모유 분비량 ', amount, 'ml'];
  get_exp_breast_orgasm = (count) => ['절정 횟수 ', count];

  exp_body_title = '정보【몸】';
  exp_body_no_armpit_hair = '태생적으로 털 없는 겨드랑이다...';
  exp_body_clean_armpit_hair =
    '겨드랑이는 현재 털 하나 없이 매끄러운 상태다...';
  get_exp_body_armpit_hair = (armpit_hair) => ['겨드랑이에는 ', armpit_hair];
  exp_body_trained_desc =
    '다른 사람의 온기를 갈망한다……육체가 음욕 그 자체로 변해 가고 있다';
  get_exp_body_face_semen = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '에게 정액으로 얼굴을 뒤덮였다',
  ];
  get_exp_body_unknown_face_semen = (date, chara) => [
    '사실 얼굴은 ',
    date,
    '에 이미 ',
    chara,
    '의 정액으로 뒤덮인 적이 있었다',
  ];
  get_exp_body_face_semen_count = (count, amount) => [
    '얼굴에 사정받은 횟수 ',
    count,
    ', 묻은 정액 ',
    amount,
    'ml',
  ];
  get_exp_body_body_sex = (date, chara) => [
    date,
    '은(는) 처음으로 몸으로 ',
    chara,
    '의 육봉과 욕망을 받아들인 날이다',
  ];
  get_exp_body_be_body_sex = (date, chara) => [
    date,
    '은(는) 몸이 처음으로 ',
    chara,
    '의 육봉과 욕망으로 가득 찬 날이다',
  ];
  get_exp_body_unknown_be_body_sex = (date, chara) => [
    '사실 ',
    date,
    '부터 잠든 얼굴도 숨결도 무방비한 몸도 이미 ',
    chara,
    '의 육봉을 위한 구멍이 되었다',
  ];
  get_exp_body_body_sex_count = (count) => ['성기를 자극한 횟수 ', count];
  get_exp_body_semen_amount = (amount) => ['묻은 정액 ', amount, 'ml'];
  exp_body_poisoned_sens =
    '따뜻한 정액이 묻을 때마다 피부가 견딜 수 없이 근질거린다';
  exp_body_poisoned_meek = '따뜻한 정액이 묻을 때마다 행복을 느낀다';
  exp_body_poisoned_both =
    '따뜻한 정액이 묻을 때마다 피부가 행복하게 근질거린다';
  get_exp_body_orgasm = (count) => ['절정 횟수 ', count];

  exp_hf_title = '육체정보[손발]';
  exp_hf_header_hand = '정보【손】';
  exp_hand_gift_desc =
    '애무 기술이 신의 경지에 달해, 손가락 놀림만으로 상대의 넋을 빼놓는다';
  get_exp_hf_hand_job = (date, chara) => [
    '손가락은 가장 원시적이고 가장 쓰기 편한 도구다. ',
    date,
    '、',
    chara,
    ' 덕분에 그 사실을 알게 되었다',
  ];
  get_exp_hf_self_hand_job = (date) => [
    '손가락은 가장 원시적이고 가장 쓰기 편한 도구다. ',
    date,
    ', 스스로 그 사실을 알게 되었다',
  ];
  get_exp_hf_be_hand_job = (date, chara) => [
    '손가락은 가장 원시적이고 가장 쓰기 편한 도구다. ',
    chara,
    '에게 ',
    date,
    '에 그 사실을 배웠다',
  ];
  get_exp_hf_unknown_be_hand_job = (date, chara) => [
    '사실 ',
    date,
    ', 손가락에는 이미 ',
    chara,
    '의 애액이 묻어 음란한 냄새가 배어 있었다',
  ];
  get_exp_hf_hand_job_count = (count) => ['음경을 손으로 자극한 횟수 ', count];
  get_exp_hf_touch_vagina_count = (count) => [
    '외음부를 손으로 자극한 횟수 ',
    count,
  ];
  get_exp_hf_touch_anal_count = (count) => [
    '항문을 손으로 자극한 횟수 ',
    count,
  ];
  get_exp_hf_touch_body_count = (count) => ['몸을 쓰다듬은 횟수 ', count];
  get_exp_hf_touch_breast_count = (count) => ['가슴을 만진 횟수 ', count];
  exp_hf_header_foot = '정보【발】';
  exp_foot_gift_desc =
    '발놀림에 1mm의 오차도 허용하지 않으며, 신의 경지에 달한 풋잡 기술을 선보인다';
  get_exp_hf_foot_job = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '의 육봉을 발아래 짓밟았다',
  ];
  get_exp_hf_unknown_be_foot_job = (date, chara) => [
    '사실 발도 발가락도 ',
    chara,
    '의 육봉을 위한 장난감이 되었다. ',
    date,
    ' 이후로 걸을 때면 허전함을 느끼는 걸까',
  ];
  get_exp_hf_foot_job_count = (count) => ['음경을 발로 자극한 횟수 ', count];
  get_exp_hf_step_on_vagina_count = (count) => [
    '외음부를 발로 자극한 횟수 ',
    count,
  ];
  get_exp_hf_step_on_body_count = (count) => ['몸을 밟은 횟수 ', count];

  get_exp_pv_pubic_hair = (pubic_hair) => ['아랫배에는 ', pubic_hair];

  exp_penis_title = '정보【음경】';
  exp_penis_no_pubic_hair = '태생적으로 매끈하다...';
  exp_penis_clean_pubic_hair = '현재 깨끗하게 제모되었다...';
  exp_penis_drug = '약물의 힘으로 얻은';
  get_exp_penis_summary = (drug, color, size) => [
    '아래에는 ',
    drug,
    ' ',
    color,
    ' 빛깔에 ',
    size,
    ' 크기의 육봉이 있다',
  ];
  exp_penis_gift_desc =
    '하늘을 떠받칠 듯 완벽한 용. 쿠퍼액만으로도 난자를 수정시킬 것 같다';
  exp_penis_trained_desc =
    '사정 조절이 느슨해져 조금도 견디지 못하고 쉽게 흘린다';
  get_exp_penis_lose_virgin = (date, chara) => [
    date,
    ', 동정을 ',
    chara,
    '에게 내주었다',
  ];
  get_exp_penis_lose_virgin_sleep = (date, chara) => [
    date,
    ', 동정을 몰래 ',
    chara,
    '에게 내주었다',
  ];
  get_exp_penis_be_lose_virgin = (date, chara) => [
    '동정은 ',
    date,
    '에 ',
    chara,
    '에게 빼앗겼다',
  ];
  get_exp_penis_unknown_be_lose_virgin = (date, chara) => [
    '사실 이미 ',
    date,
    '에 ',
    chara,
    '에게 동정을 빼앗긴 상태였다',
  ];
  get_exp_penis_fuck_body_count = (count) => ['신체 삽입 횟수 ', count];
  get_exp_penis_fuck_vagina_count = (count) => ['질 삽입 횟수 ', count];
  get_exp_penis_fuck_anal_count = (count) => ['항문 삽입 횟수 ', count];
  get_exp_penis_cum_semen_exp = (date, chara, _, amount) => [
    '처음으로 ',
    chara,
    '의 몸에 씨앗 ',
    amount,
    'ml를 쏟아부은 날은 ',
    date,
  ];
  get_exp_penis_unknown_cum_semen_exp = (date, chara, _, amount) => [
    '사실 ',
    date,
    '에 이미 ',
    chara,
    '의 음란한 성기에 정액 ',
    amount,
    'ml를 짜인 적이 있었다',
  ];
  get_exp_penis_cum_count = (count) => ['사정 ', count, '회'];
  get_exp_penis_cum_amount = (amount) => ['배출한 정액 총량 ', amount, 'ml'];
  get_exp_penis_fuck_sleep_vagina = (count, you) => [
    '잠든 사이 ',
    you,
    '을(를) 성폭행한 횟수 ',
    count,
  ];
  get_exp_penis_fuck_sleep_vagina_you = (count) => [
    '잠든 사이 다른 캐릭터를 성폭행한 횟수 ',
    count,
  ];
  get_exp_penis_be_sleep_fuck = (count) => [
    '잠든 사이 성폭행을 당하고도 알아차리지 못한 횟수 ',
    count,
  ];

  exp_vagina_title = '정보【외음부】';
  exp_vagina_no_pubic_hair = '태어날 때부터 음모가 없어, 보드랍고 사랑스럽다';
  exp_vagina_clean_pubic_hair =
    '지금 성기는 털 없이 매끈하고, 보드랍고 사랑스럽다';
  exp_vagina_pink = '옅고 사랑스러운 빛깔';
  exp_vagina_purple = '보랏빛이 감도는 붉은색';
  exp_vagina_deep = '짙고 농익은 빛깔';
  get_exp_vagina_summary = (color) => [color, '의 성기를 지녔다'];
  exp_vagina_gift_desc =
    '살아 있는 듯한 동굴. 찾아온 손님은 남김없이 짜일 수밖에 없다';
  exp_vagina_clitoris_trained_desc =
    '살짝 문지르기만 해도 충혈되어 발기한다……이제는 음란한 콩이다';
  exp_vagina_vagina_trained_desc =
    '온종일 애액을 흘리며 언제든 삽입을 기다리는 음란한 질……이제는 음란한 성기가 되었다';
  exp_vagina_semen = '허벅지 안쪽에 점점이……';
  exp_vagina_semen_template =
    '성기 안에는 아직 정액이 %SEMEN%ml 정도 남아 있다';
  get_exp_vagina_lose_virgin = (date, chara, _, penis) => [
    date,
    ', 처녀를 ',
    chara,
    '의 ',
    penis,
    ' 육봉에 바쳤다',
  ];
  get_exp_vagina_lose_virgin_sleep = (date, chara, _, penis) => [
    date,
    ', 처녀를 몰래 ',
    chara,
    '의 ',
    penis,
    ' 육봉에 바쳤다',
  ];
  get_exp_vagina_be_lose_virgin = (date, chara, _, penis) => [
    '처녀는 ',
    date,
    '에 ',
    chara,
    '의 ',
    penis,
    ' 육봉에 빼앗겼다',
  ];
  get_exp_vagina_unknown_be_lose_virgin = (date, chara, _, penis) => [
    '사실 이미 ',
    date,
    '에 ',
    chara,
    '의 ',
    penis,
    ' 육봉에 처녀를 빼앗긴 상태였다',
  ];
  get_exp_vagina_vagina_touched_count = (count) => ['자극받은 횟수 ', count];
  get_exp_vagina_fucked_count = (count) => ['삽입당한 횟수 ', count];
  get_exp_vagina_cumed_exp = (date, chara, _, amount) => [
    chara,
    '의 씨앗 ',
    amount,
    'ml를 받아들인 날은 ',
    date,
  ];
  get_exp_vagina_unknown_cumed_exp = (date, chara, _, amount) => [
    '사실 소중한 질과 자궁은 ',
    date,
    '에 이미 ',
    chara,
    '의 정액 ',
    amount,
    'ml로 세례를 받은 적이 있었다',
  ];
  get_exp_vagina_out_semen = (amount) => ['묻은 정액 ', amount, 'ml'];
  get_exp_vagina_cumed_semen = (count, amount) => [
    '사정받은 횟수 ',
    count,
    ', 안에 사정된 정액 ',
    amount,
    'ml',
  ];
  exp_vagina_poisoned_sens =
    '따뜻한 정액이 쏟아져 들어올 때마다 자궁이 견딜 수 없이 근질거린다';
  exp_vagina_poisoned_meek = '따뜻한 정액이 쏟아져 들어올 때마다 행복을 느낀다';
  exp_vagina_poisoned_both =
    '따뜻한 정액이 쏟아져 들어올 때마다 자궁이 행복하게 근질거린다';
  get_exp_vagina_squirt_exp = (date, chara) => [
    date,
    '、',
    chara,
    ' 앞에서 처음으로 음란한 꿀을 분출했다',
  ];
  get_exp_vagina_squirt_exp_both = (date, chara, supporter) => [
    date,
    '、',
    chara,
    '와(과) ',
    supporter,
    ' 앞에서 처음으로 음란한 꿀을 분출했다',
  ];
  get_exp_vagina_squirt_exp_self = (date) => [
    date,
    ', 처음으로 스스로 음란한 꿀을 분출했다',
  ];
  get_exp_vagina_unknown_squirt_exp = (date, chara) => [
    '사실 ',
    date,
    '에 이미 ',
    chara,
    '에게 꽃의 꿀을 따인 적이 있었다',
  ];
  get_exp_vagina_unknown_squirt_exp_both = (date, chara, supporter) => [
    '사실 ',
    date,
    '에 이미 ',
    chara,
    '와(과) ',
    supporter,
    '에게 꽃의 꿀을 따인 적이 있었다',
  ];
  get_exp_vagina_unknown_squirt_exp_self = (date) => [
    '사실 ',
    date,
    '에 자신도 모르게 첫 꿀을 분비한 적이 있었다',
  ];
  get_exp_vagina_clitoris_orgasm = (count) => ['음핵 절정 횟수 ', count];
  get_exp_vagina_vagina_orgasm = (count) => ['질 절정 횟수 ', count];
  get_exp_vagina_squirt_count = (count, amount) => [
    '분출 총 ',
    count,
    '회, 분비한 애액 ',
    amount,
    'ml',
  ];
  get_exp_vagina_squirt_amount = (amount) => [
    '분비한 애액 총량 ',
    amount,
    'ml',
  ];
  get_exp_vagina_fuck_sleep_penis = (count, you) => [
    '잠든 사이 ',
    you,
    '을(를) 성폭행한 횟수 ',
    count,
  ];
  get_exp_vagina_fuck_sleep_penis_you = (count) => [
    '잠든 사이 다른 캐릭터를 성폭행한 횟수 ',
    count,
  ];
  get_exp_vagina_be_sleep_fuck = (count) => [
    '잠든 사이 성폭행을 당하고도 알아차리지 못한 횟수 ',
    count,
  ];
  exp_vagina_pregnant_in_growth = '아직 초경이 오지 않았다';
  exp_vagina_pregnant_menstrual_period = '월경 중';
  exp_vagina_pregnant_too_many_birth = '더 이상 씨앗을 받아들일 수 없다';
  exp_vagina_pregnant_timer_template = '%DESC%(%TIMER% 주)';
  exp_vagina_pregnant_egg_prepared = '난자가 수정을 기다리고 있다❤️';
  exp_vagina_pregnant_egg_growth = '새로운 난자가 자라고 있다';
  exp_vagina_pregnant_egg_out = '난자가 활성을 잃고 배출을 기다리고 있다';
  exp_vagina_pregnant_prob_template = '%DESC%(임신 확률 %PROB%%)';
  exp_vagina_pregnant_desc_resume =
    '아이가 무사히 태어났다. 이제 몸을 돌볼 때다';
  exp_vagina_pregnant_desc_no =
    '아기가 머물 방은 아빠가 찾아오기를 기다리고 있다❤️';
  exp_vagina_pregnant_desc_embryo = '작은 새 생명이 이미 자라고 있다';
  exp_vagina_pregnant_desc_fetal =
    '태반이 완전히 형성되었다. 엄마와 아이에게 양질의 단백질을';
  exp_vagina_pregnant_desc_late =
    '태아가 마지막 성숙 단계에 접어들었다. 배는 이미 크게 불러 있다';
  exp_vagina_pregnant_desc_pre_birth =
    '생명의 기적을 맞이할 때가 가까워졌다. 준비를 갖출 때다';
  exp_vagina_pregnant_desc_showing = '배가 이미 크게 불러 있다';
  exp_vagina_pregnant_desc_known =
    '아직 배에는 징후가 없다. 일상의 작은 변화와 검진 결과가 새 생명을 알려 준다';
  get_exp_vagina_pregnant_father = (chara) => [
    '아이의 아버지는 ',
    chara,
    '(으)로 확인되었다',
  ];
  get_exp_vagina_pregnant_father_you = (you) => [
    you,
    '은(는) 아이의 아버지가 ',
    you,
    '임을 알고 있다',
  ];

  exp_anal_title = '정보【엉덩이】';
  exp_anal_gift_desc =
    '모든 것을 삼킬 듯 단단히 조이는 검은 구멍. 들어가면 돌아올 수 없다';
  exp_anal_trained_desc =
    '온기로 가득 채워지고 싶은 직장……이제는 음란한 항문이다';
  exp_anal_semen = '바지 뒤쪽이 젖었다……';
  exp_anal_semen_template = '항문에 정액 %SEMEN%ml가 남아 있기 때문일 것이다';
  get_exp_anal_anal_sex_exp = (date, chara) => [
    date,
    '、',
    chara,
    ' 덕분에 엉덩이가 지닌 성적 의미를 처음 깨달았다',
  ];
  get_exp_anal_be_anal_sex_exp = (date, chara) => [
    date,
    '、',
    chara,
    '에게 엉덩이가 지닌 성적 의미를 처음 배웠다',
  ];
  get_exp_anal_unknown_be_anal_sex_exp = (date, chara) => [
    '사실 ',
    date,
    '에 이미 ',
    chara,
    '에게 농락당한 적이 있었다. 이제는 돌아갈 수 없을 것이다',
  ];
  get_exp_anal_anal_sex_count = (count) => ['성기를 자극한 횟수 ', count];
  get_exp_anal_cum_in_anal_count = (count, amount) => [
    '사정받은 횟수 ',
    count,
    ', 안에 사정된 정액 ',
    amount,
    'ml',
  ];
  exp_anal_poisoned_sens =
    '따뜻한 정액이 쏟아져 들어올 때마다 직장이 견딜 수 없이 근질거린다';
  exp_anal_poisoned_meek = '따뜻한 정액이 쏟아져 들어올 때마다 행복을 느낀다';
  exp_anal_poisoned_both =
    '따뜻한 정액이 쏟아져 들어올 때마다 직장이 행복하게 근질거린다';
  get_exp_anal_orgasm = (count) => ['절정 횟수 ', count];

  exp_sm_title = '정보【가학·피학】';
  exp_sm_sex_title_0 = '암말';
  exp_sm_sex_title_1 = '수말';
  exp_sm_sex_title_10 = '후타나리 암말';
  exp_sm_sadism_talent_template =
    '태어날 때부터 가학을 자신의 사명으로 삼는 음란한 도S %TITLE%. 능욕하는 모습을 상상하기만 해도 흥분한다';
  exp_sm_machoism_abuse_talent_template =
    '태어날 때부터 피학을 자신의 사명으로 삼는 음란한 도M %TITLE%. 욕먹는 모습을 상상하기만 해도 흥분한다';
  exp_sm_machoism_hit_talent_template =
    '태어날 때부터 피학을 자신의 사명으로 삼는 음란한 도M %TITLE%. 맞는 모습을 상상하기만 해도 흥분한다';
  exp_sm_machoism_all_talent_template =
    '태어날 때부터 피학을 자신의 사명으로 삼는 음란한 도M %TITLE%. 능욕당하는 모습을 상상하기만 해도 흥분한다';
  get_exp_sm_sadism_exp = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '을(를) 괴롭혔다',
  ];
  get_exp_sm_abuse_count = (count) => ['다른 사람을 매도한 횟수 ', count];
  get_exp_sm_hit_count = (count) => ['다른 사람을 때린 횟수 ', count];
  get_exp_sm_sadism_count = (count) => ['가학감에 의한 절정 횟수 ', count];
  get_exp_sm_machoism_exp = (date, chara) => [
    date,
    ', 처음으로 ',
    chara,
    '에게 괴롭힘을 당했다',
  ];
  get_exp_sm_be_abused_count = (count) => ['매도당한 횟수 ', count];
  get_exp_sm_be_hit_count = (count) => ['맞은 횟수 ', count];
  get_exp_sm_machoism_count = (count) => ['피학감에 의한 절정 횟수 ', count];

  desc_conjunction = '\n동시에,';
  human_info = '평범한 인간일 뿐이다';
  no_reward_info = '아직 자랑할 만한 성과는 없다...';
  cannot_join_race_info = '레이스에 출주할 수 없다...';
  growth_info = '아직 성장 중이야';
  no_exp_info = '아직 관련 경험이 없다';
  no_known_info = '아직 충분히 알지 못한다';
  no_part_info = '이 부위는 존재하지 않는다...';

  prev_template = '이전 캐릭터 - %NAME%';
  next_template = '다음 캐릭터 - %NAME%';

  get_child_number(num) {
    const first = '장';
    const second = '차';
    const n10 = ['십', '이십', '삼십', '사십'];
    const n0 = ['일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    if (num === 1) {
      return first;
    } else if (num === 2) {
      return second;
    } else if (num < 10) {
      return n0[num - 1];
    } else if (num < 50) {
      let ret = n10[Math.floor(num / 10) - 1];
      if (num % 10 > 0) {
        ret += n0[(num % 10) - 1];
      }
      return ret;
    }
    return num.toString();
  }
};
