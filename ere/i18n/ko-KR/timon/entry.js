const { proxy_kojo_js } = require('#/i18n/tools');

class I18nTimon {
  static _ = new I18nTimon();

  recruit = proxy_kojo_js(require('#/i18n/ko-KR/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/ko-KR/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/ko-KR/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/ko-KR/timon/love'));
  basement = proxy_kojo_js(require('#/i18n/ko-KR/timon/base'));

  ero_c = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-common'));
  ero_r = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-rape'));
  ero_s = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-sleep'));
  ero_o = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-others'));

  ero_sys = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/system'));
  act_desc_c = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/act-desc-common'));
  act_desc_r = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/act-desc-rape'));
  act_desc_s = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/act-desc-sleep'));

  daily_child = proxy_kojo_js(require('#/i18n/ko-KR/timon/child/daily'));
  ero_child = proxy_kojo_js(require('#/i18n/ko-KR/timon/child/ero'));

  game_guides = proxy_kojo_js(require('#/i18n/ko-KR/timon/guides/game'));
  base_guides = proxy_kojo_js(require('#/i18n/ko-KR/timon/guides/base'));
  ending = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/ending'));

  storage = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/storage'));
  god_shop = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/god-shop'));
  tachyon_shop = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/others/tachyon-shop'),
  );
  race = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/race'));
  others = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/others'));
  random_events = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/random'));
  pregnant_slave = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/others/pregnant-slave'),
  );
  cum = proxy_kojo_js(require('#/i18n/ko-KR/timon/mejiro/cum'));
  /** @type {KojoFile} */
  cum_events = require('#/i18n/ko-KR/timon/mejiro/cum-events.kojo');

  strange = '서먹함';
  strange_desc = (debuff) =>
    `아직 서로를 잘 모른다…… 트레이닝 효과 -${debuff}%. 관계를 개선하거나 담당 트레이너와 상담하면 이 상태를 완화할 수 있다.`;

  report_tenn_spr = '봄의 장거리 왕이 탄생했다!';
  report_tenn_sho = (uma) => ['이곳 후추의 가을 마물은', uma, '에게 쓰러졌다!'];
  report_invincible_g1 = (uma) => [
    '강한 자는 강하다, 강한 자는 강하다!',
    uma,
    '무패로 G1을 제패했다!',
  ];
  report_invincible_three_crowns =
    '무패 3관이다! 우마무스메 역사에 길이 남을 대기록이 달성되었다!!!';

  npc_select = '누구와 이야기할까?';
  npc_talk = '잡담';
  npc_sex = '구애';
  npc_out = '데이트';
  get_npc_celebration = (celebration) => `${celebration}축하하기`;
  npc_bye = '작별 인사';

  npc_recruit_in_school = '「함께 갑시다!」(영입)';
  npc_recruit_out_school = '「함께 갑시다!」(영입)';

  npc_accept_task = '의뢰 수락';
  npc_retry_task = '다시 도전';

  bt_god_love_event_fuck_me = '직접 신의 아이를 품는다';
  bt_god_love_event_preg_me = '배 속의 아이를 신의 아이로 만든다';

  // it = information timon
  /** @param {CharaTalk} chara */
  get_it_office_study = (chara) => [
    '【',
    chara.get_colored_name(),
    '의 학습을 지도했다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_office_prepare = (chara) => [
    '【',
    chara.get_colored_name(),
    '의 레이스 준비를 도왔다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_talk = (chara) => [
    '【',
    chara.get_colored_name(),
    '에게 말을 걸었다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_office_gift = (chara) => [
    '【',
    chara.get_colored_name(),
    '에게 작은 선물을 주었다】',
  ];
  it_self_cook = '【혼자 밥을 지어 먹었다】';
  /** @param {CharaTalk} chara */
  get_it_office_cook = (chara) => [
    '【',
    chara.get_colored_name(),
    '과(와) 함께 밥을 지어 먹었다】',
  ];
  it_self_rest = '【혼자 쉬었다】';
  /** @param {CharaTalk} chara */
  get_it_office_rest = (chara) => [
    '【',
    chara.get_colored_name(),
    '과(와) 함께 쉬었다】',
  ];
  it_self_game = '【혼자 게임을 했다】';
  /** @param {CharaTalk} chara */
  get_it_office_game = (chara) => [
    '【',
    chara.get_colored_name(),
    '과(와) 함께 게임을 했다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} celebration
   */
  get_it_celebration = (chara, celebration) => [
    '【',
    chara.get_colored_name(),
    '과(와) 함께 ',
    celebration,
    '을(를) 축하했다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_birthday = (chara) => [
    '【',
    chara.get_colored_name(),
    '에게 생일 축하 인사를 건넸다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_check_love = (chara) => [
    chara.get_colored_name(),
    '과(와) 의 관계를 다시 한번 되돌아보자……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_basement_me = (chara, you) => [
    you.get_colored_name(),
    '의 부탁을 듣고 ',
    chara.get_colored_name(),
    '은(는) 조금 마음이 움직인 듯하다……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_home_sex = (chara, you) => [
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '과(와) 밤에 집에서 만나기로 약속했다……',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_arrive_location = (vehicle, location) => [
    '【',
    location,
    '에 도착했다】',
	'【',
	vehicle,
	'】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_goto_location = (chara, vehicle, location) => [
    '【',
    chara.get_colored_name(),
    '과(와) 함께 ',
    location,
    '(으)로 향했다】',
	'【',
	vehicle,
	'】',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_self_goto_location = (vehicle, location) => [
    '【혼자 ',
    location,
    '(으)로 향했다】',
	'【',
	vehicle,
	'】',
  ];
  it_back_office = '【복귀】';
  it_force_back_office = '【아무도 없는 것 같아 돌아왔다……】';
  /** @param {CharaTalk} chara */
  get_it_npc_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 체력이 버티지 못해 쉬러 돌아간다】',
  ];

  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_in_recruit = (you, uma) => [
    '【트레이닝장에서 몇 명의 ',
    uma,
    '를 발견했다. 누가 ',
    you.get_colored_name(),
    '의 눈길을 끌었을까?】',
  ];
  /** @param {CharaTalk} chara */
  get_it_chara_not_in_recruit = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 트레이닝장에 없는 듯하다】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_recruit_disabled = (you, uma) => [
    '【',
    you.get_colored_name(),
    '에게는 이미 담당이 충분하다. 다른 ',
    uma,
    '는 ',
    you.get_colored_name(),
    '의 모집에 응하지 않을 것이다】',
  ];
  /** @param {string} uma */
  get_it_no_chara_in_recruit = (uma) => [
    '【트레이닝장에 눈길을 끄는',
    uma,
    '는 없었다】',
  ];

  rec_kojo_mark_border = ['[', ']'];
  rec_km_r = '모집';
  rec_km_d = '일상';
  rec_km_ed = '육성';
  rec_km_l = '연애';
  rec_km_er = '성인';
  rec_km_b = '감금';
  rec_km_i = '그림';

  /** @param {CharaTalk} chara */
  get_it_heal_yandere = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 다시 차분해졌다】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_invest = (income) => [
    '【투자 수익 ',
    income,
    '우마 코인을 받았다】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_annal_bonus = (income) => [
    '【학원에서 트레이너 급여와 연말 상여금 ',
    income,
    '우마 코인을 받았다】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_salary = (income) => [
    '【학원에서 트레이너 급여 ',
    income,
    '우마 코인을 받았다】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {[]} chara_list
   * @returns {TextContent}
   */
  get_it_punish_avoid_race = (you, chara_list) => [
    '【',
    ...chara_list,
    '의 출전 취소로 ',
    you.get_colored_name(),
    '에 대한 평가가 떨어졌다!】',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_reward = (you) => [
    '【',
    you.get_colored_name(),
    '은(는) 의무를 다해 임신 주머니로서의 평가가 올랐다】',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_punish = (you) => [
    '【우마무스메 주인을 임신시킨 ',
    you.get_colored_name(),
    '은(는) 임신 주머니 실격으로 트레센의 처분을 받았다!】',
  ];
  it_pregnant_trainer_punish =
    '【현역 트레이너의 숨겨진 자녀 스캔들이 세간에 논란을 일으켰다】';
  it_pregnant_uma_punish =
    '【현역 우마무스메의 숨겨진 자녀 스캔들이 각계에서 화제가 되고 있다】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} teacher
   * @param {PrintedSpan} train
   */
  get_it_train_take_care = (chara, teacher, train) => [
    '【',
    teacher.get_colored_name(),
    '이(가) 지켜보는 가운데 ',
    chara.get_colored_name(),
    '은(는) ',
    train,
    '트레이닝을 했다】',
  ];
  /**
   * @param {[]} chara_list
   * @param {PrintedSpan} train
   */
  get_it_train_together = (chara_list, train) => [
    '【',
    ...chara_list,
    '은(는) 함께 ',
    train,
    '자율 트레이닝을 했다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} train
   */
  get_it_train_lonely = (chara, train) => [
    '【',
    chara.get_colored_name(),
    '은(는) ',
    train,
    '자율 트레이닝을 했다】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {string} item 母乳药剂
   * @param {string} talent 母乳体质特性名
   */
  get_it_nt_get_milk = (chara, item, talent) => [
    '【',
    chara.get_colored_name(),
    '은(는) ',
    item,
    '의 영향으로 ',
    talent,
    '상태가 되었다!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  get_it_nt_become_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    '은(는) ',
    status,
    '상태가 되었다!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  get_it_nt_not_be_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    '의 체중이 원래대로 돌아왔다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  get_it_nt_become_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    '은(는) ',
    status,
    '에 걸렸다!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  get_it_nt_not_be_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    '의 ',
    status,
    '이(가) 나았다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_have_penis = (chara) => [
    '【',
    chara.get_colored_name(),
    '의 음핵이 한 자루의 육봉으로 자라났다!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_nt_love_unlimit = (chara, you) => [
    '【',
    chara.get_colored_name(),
    '에게 먹인 억제제의 효과가 끝났다…… ',
    chara.get_colored_name(),
    '의 ',
    you.get_colored_name(),
    '을(를) 향한 연심이 한꺼번에 넘쳐흐른다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} up_info
   */
  get_it_nt_train_level_up = (chara, up_info) => [
    '【',
    chara.get_colored_name(),
    '의 ',
    up_info,
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_get_jewel = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 새로운 인자를 계승했다!】',
  ];
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} father
   */
  get_it_hb_info = (mother, father) => [
    '【',
    mother.get_colored_name(),
    '은(는) ',
    father.get_colored_name(),
    '의 모습을 어렴풋이 닯은 건강한 아이를 출산했다!】',
  ];
  it_hb_let_mom_name = '어머니에게 이름을 짓게 한다';
  it_hb_let_dad_name = '아버지에게 이름을 짓게 한다';
  it_hb_you_name = '직접 이름을 짓는다';
  it_hb_name_tip = '아이에게 어떤 이름을 지어줄까?';
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} child
   */
  get_it_name_result = (mother, child) => [
    mother.get_colored_name(),
    '의 아이 이름은 ',
    child.get_colored_name(),
  ];
  it_hb_rename = '이름을 다시 지을까요?';
  /** @param {PrintedSpan} celebration */
  get_it_nt_celebration_notification = (celebration) => [
    '【이번 주는 ',
    celebration,
    '. 팀원들에게도 관심을 기울여야 할 행사가 있을지 모른다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} race
   */
  get_it_nt_race_notification = (chara, race) => [
    '【이번 주에는 ',
    chara.get_colored_name(),
    '이(가) 출전 등록한 ',
    race,
    '이(가) 열린다】',
  ];
  /** @param {PrintedSpan} race */
  get_it_nt_foreign_race_notification = (race) => [
    '【',
    race,
    '이(가) 곧 개최된다. 출전 선수들이 원정길에 오른다】',
  ];
  it_nt_race_contestants = '팀에서 다음 인원들이 이 레이스에 등록했다:';
  /**
   * @param {PrintedSpan} race
   * @param {boolean} you_in_race プレイヤーが出走するか
   */
  get_it_nt_to_foreign_confirm = (race, you_in_race) =>
    you_in_race ? [' ', race, '에 출전할까요?'] : [' ', race, '에 동행할까요?'];
  it_nt_foreign_avoid_notification =
    '다음 선수들의 결장으로 세간에 소문이 퍼지고 있다:';
  it_nt_back_info = '【트레센으로 돌아왔다】';
  /** @param {PrintedSpan} race */
  get_it_nt_back_info_from_foreign = (race) => [
    '【',
    race,
    '(으)로 원정을 떠났던 인원들이 트레센으로 돌아왔다】',
  ];
  it_nt_summer_start_notification =
    '【매년 열리는 여름 합숙이 이번 주부터 시작된다.】';
  it_nt_summer_chara_list_start =
    '올해 팀에서 다음 인원들이 여름 합숙에 참가한다:';
  /** @param {boolean} just_you */
  get_it_nt_summer_confirm = (just_you) =>
    just_you ? '여름 합숙에 참가할까요?' : '여름 합숙에 동행할까요?';
  it_nt_summer_chara_list_follow = '올해 다음 인원들이 여름 합숙에 동행한다:';
  it_nt_back_info_summer =
    '【여름 합숙을 떠났던 인원들이 트레센으로 돌아왔다】';

  it_nt_moon_well_cool_down = '【비밀 온천의 효력이 회복되었습니다】';
  get_it_moon_well_together = (chara) => [
    '【',
    chara.get_colored_name(),
    '와 함께 비밀 온천 안내 데스크에 있습니다】',
  ];

  /**
   * @param {string} title
   * @param {[]} chara_list
   * @param {string} item
   */
  get_it_nt_inmon_milk_slave = (title, chara_list, item) =>
    chara_list.length > 1
      ? [
          '【',
          title,
          ' ',
          ...chara_list,
          '은(는) 각각 ',
          item,
          ' 한 잔을 바쳤다】',
        ]
      : ['【', title, ' ', ...chara_list, '은(는) ', item, ' 한 잔을 바쳤다】'];
  /**
   * @param {string} title
   * @param {CharaTalk} chara
   * @param {PrintedSpan} jewel
   */
  get_it_nt_inmon_inhert_slave = (title, chara, jewel) => [
    '【',
    title,
    ' ',
    chara.get_colored_name(),
    '은(는) ',
    jewel,
    '을(를) 바쳤다】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_it_chara_rape_in_sleeping = (chara, you) => [
    '【강한 자극에 ',
    you.get_colored_name(),
    '은(는) 잠에서 벌떡 깨어나 ',
    chara.get_colored_name(),
    '이(가) 몸 위에 엎드려 있는 것을 발견했다!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   * @returns {TextContent}
   */
  get_it_multi_rape_in_sleeping = (chara, you, supporter) => [
    '【강한 자극에 ',
    you.get_colored_name(),
    '은(는) 잠에서 벌떡 깨어나 ',
    chara.get_colored_name(),
    '와(과) ',
    supporter.get_colored_name(),
    '이(가) 몸 위에 엎드려 있는 것을 발견했다!】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter = (chara, you) => [
    '【',
    you.get_colored_name(),
    '은(는) ',
    chara.get_colored_name(),
    '의 환심을 사려 했다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter_masters = (chara, you) => [
    '【',
    you.get_colored_name(),
    '은(는) ',
    chara.couple_title,
    '의 환심을 사려 했다】',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_success = (you) => [
    you.get_colored_name(),
    '은(는) 한 층의 잠금 장치를 파악했다!',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_fail = (you) => [
    you.get_colored_name(),
    '：장치를 풀지 못했습니다…',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_escape = (you) => [
    you.get_colored_name(),
    '은(는) 성공적으로 잠금을 해제하고 지하실에서 탈출했다!',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_sleep = (you) => [
    you.get_colored_name(),
    '은(는) 기력을 회복하기 위해 침대에 누워 잠을 청하기로 했다……',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat = (you) => [
    '지하실 주인이 ',
    you.get_colored_name(),
    '에게 남겨둔 음식이 있다. ',
    you.get_colored_name(),
    '은(는) 그것을 조금 먹기로 했다……',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat_uma_s = (you) => [
    you.get_colored_name(),
    '의 심박수가 빨라지고 몸이 뜨거워지기 시작했다. 동시에 강한 현기증이 몰려온다……',
  ];
  it_bs_strike_success = '【기습 성공】';
  it_bs_strike_fail = '【기습 실패】';
  it_bs_battle_success = '【저항 성공】';
  it_bs_battle_fail = '【저항 실패】';
  it_bs_battle_escape = '【잠금 해제 성공】';
  it_bs_battle_prison = '【잠금 해제 실패】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_release = (chara, you) => [
    '【',
    you.get_colored_name(),
    '은(는) ',
    chara.get_colored_name(),
    '에게 풀어 달라고 부탁했다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_clock = (chara, you) => [
    '【',
    you.get_colored_name(),
    '은(는) ',
    chara.get_colored_name(),
    '에게 시간을 물었다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_find_escape = (chara, you) => [
    '【',
    you.get_colored_name(),
    '은(는) ',
    chara.get_colored_name(),
    '에게 현장에서 붙잡혔다!】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_awake = (chara) => [
    '【',
    chara.get_colored_name(),
    '이(가) 깨어났다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_back = (chara) => [
    '【',
    chara.get_colored_name(),
    '이(가) 돌아왔다】',
  ];
  it_bs_rescue = '【구조대가 도착했다】';
  /** @param {CharaTalk} chara */
  get_it_bs_fall_asleep = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 기력이 다해 혼수상태에 빠졌다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_eat = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 식사를 조금 했다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 침대에 누워 잠들었다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_lure = (chara, you) => [
    '【',
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '을(를) 도발했다】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_rape = (chara, you) => [
    '【',
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '을(를) 범하기로 했다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_fix = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 지하실을 보강하기 시작했다】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_leave = (chara) => [
    '【',
    chara.get_colored_name(),
    '은(는) 떠났다】',
  ];
  it_bs_final_escape = '【트레이너실로 무사히 돌아왔다】';
  /** @param {CharaTalk} chara */
  get_it_bs_downgrade_security = (chara) => [
    '【',
    chara.get_colored_name(),
    '의 경계가 느슨해졌다】',
  ];

  it_sell_fish_template = '【잡은 물고기를 %MONEY% 우마코인에 팔았습니다】';

  ed_saying_01 =
    '아홉 자 두 칸의 누추한 방에서, 붉은 입술이 대나무에 기대어 정을 나눈다. ——다카스기 신사쿠';
  ed_saying_02 =
    '돈과 우마무스메와 여자. 남자는 이 셋을 영원히 이해하지 못한다. ——윌 로○스';
  ed_saying_03 = '동전 한 닢이 영웅을 쓰러뜨린다. ——이녹원';
  ed_saying_04 =
    '사슬에 묶인 노예는 누구나 스스로 그 사슬을 풀 수 있다. ——윌리엄 셰익스피어';
  ed_saying_05 =
    '이제 혼자가 아니다. 평생의 사랑이 지금 이토록 가까이 있다. ——레 미제라블';
  ed_saying_06 = '이클립스가 앞서면, 모든 것이 빛을 잃는다. ——데니스 오켈리';
  ed_saying_07 = '울지 않으면 죽여 버려라, 두견새야. ——오다 노부나가';
  ed_saying_08 = '수사에 있어 나는 최후이자 최고의 항소 법원이다. ——셜록 홈즈';
  ed_saying_09 =
    '세상은 성공과 실패로 인물을 평가하니, 조조도 영웅의 반열에 든다. ——소식';
  ed_saying_10 =
    '위대한 우마무스메를 가진 자는 가장 위대한 왕좌를 가진다. ——윈스턴 ○칠';
  ed_saying_11 =
    '사람이 정말로 비열해지면, 남의 불행을 즐기는 것 외에는 즐거움이 남지 않는다. ——요한 볼프강 폰 괴테';
  ed_saying_12 =
    '자유란 마음대로 하는 것이 아니라, 자신을 잃지 않고 살아가는 것이다. ——임마누엘 칸트';
  ed_saying_13 = '나는 나 자신의 가장 큰 적이다. ——나폴레옹 보나파르트';

  // Forward Compatibility - 前方互換
  fc_mejiro_confirm = '메지로 시티의 방침을 선택해 주세요.';
  fc_mejiro_free = '「자유」';
  fc_mejiro_cum = '「자애」';

  fc_race_item_confirm =
    '장난감을 장착하고 출전했을 때의 영향을 선택해 주세요.';
  fc_race_item_yes = '영향 있음';
  fc_race_item_no = '영향 없음';
}

module.exports = I18nTimon;
