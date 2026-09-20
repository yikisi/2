const { proxy_kojo_js } = require('#/i18n/tools');

class I18nTimon {
  static _ = new I18nTimon();

  recruit = proxy_kojo_js(require('#/i18n/ja-JP/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/ja-JP/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/ja-JP/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/ja-JP/timon/love'));
  basement = proxy_kojo_js(require('#/i18n/ja-JP/timon/base'));

  ero_c = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/ero-common'));
  ero_r = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/ero-rape'));
  ero_s = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/ero-sleep'));
  ero_o = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/ero-others'));

  ero_sys = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/system'));
  act_desc_c = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/act-desc-common'));
  act_desc_r = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/act-desc-rape'));
  act_desc_s = proxy_kojo_js(require('#/i18n/ja-JP/timon/sex/act-desc-sleep'));

  daily_child = proxy_kojo_js(require('#/i18n/ja-JP/timon/child/daily'));
  ero_child = proxy_kojo_js(require('#/i18n/ja-JP/timon/child/ero'));

  game_guides = proxy_kojo_js(require('#/i18n/ja-JP/timon/guides/game'));
  base_guides = proxy_kojo_js(require('#/i18n/ja-JP/timon/guides/base'));
  ending = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/ending'));

  storage = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/storage'));
  god_shop = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/god-shop'));
  tachyon_shop = proxy_kojo_js(
    require('#/i18n/ja-JP/timon/others/tachyon-shop'),
  );
  race = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/race'));
  others = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/others'));
  random_events = proxy_kojo_js(require('#/i18n/ja-JP/timon/others/random'));
  pregnant_slave = proxy_kojo_js(
    require('#/i18n/ja-JP/timon/others/pregnant-slave'),
  );
  cum = proxy_kojo_js(require('#/i18n/ja-JP/timon/mejiro/cum'));
  /** @type {KojoFile} */
  cum_events = require('#/i18n/ja-JP/timon/mejiro/cum-events.kojo');

  strange = '疎遠';
  strange_desc = (debuff) =>
    `まだお互いによく知らない……トレーニング効果-${debuff}%。関係を改善するか、担当トレーナーに相談すると、この状態は和らぐ。`;

  report_tenn_spr = '春の長距離の王が誕生した！';
  report_tenn_sho = (uma) => [
    'ここに、府中の秋の魔物は ',
    uma,
    ' に討たれた！',
  ];
  report_invincible_g1 = (uma) => [
    '強い者は強い、強い者は強い！',
    uma,
    ' 無傷でG1を制した！',
  ];
  report_invincible_three_crowns =
    'これは無敗三冠！ ウマ娘史に消えない大記録が達成された！！！';

  npc_select = '誰と話す？';
  npc_talk = '雑談';
  npc_sex = '求愛';
  npc_out = 'デート';
  get_npc_celebration = (celebration) => `${celebration}を祝う`;
  npc_bye = 'さようなら';

  npc_recruit_in_school = '「一緒に頑張ろう！」（募集）';
  npc_recruit_out_school = '「力を貸してほしい！」（募集）';

  npc_accept_task = '依頼を受ける';
  npc_retry_task = 'もう一度挑む';

  bt_god_love_event_fuck_me = '自ら神の子を宿す';
  bt_god_love_event_preg_me = '腹の子を神の子にする';

  // it = information timon
  /** @param {CharaTalk} chara */
  get_it_office_study = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の学習を指導した】',
  ];
  /** @param {CharaTalk} chara */
  get_it_office_prepare = (chara) => [
    '【',
    chara.get_colored_name(),
    ' のレース前準備を手伝った】',
  ];
  /** @param {CharaTalk} chara */
  get_it_talk = (chara) => ['【', chara.get_colored_name(), ' に声をかけた】'];
  /** @param {CharaTalk} chara */
  get_it_office_gift = (chara) => [
    '【',
    chara.get_colored_name(),
    ' に小さな贈り物をした】',
  ];
  it_self_cook = '【ひとりでご飯を作って食べた】';
  /** @param {CharaTalk} chara */
  get_it_office_cook = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒にご飯を作って食べた】',
  ];
  it_self_rest = '【ひとりで休んだ】';
  /** @param {CharaTalk} chara */
  get_it_office_rest = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に休んだ】',
  ];
  it_self_game = '【ひとりでゲームをした】';
  /** @param {CharaTalk} chara */
  get_it_office_game = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と一緒にゲームをした】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} celebration
   */
  get_it_celebration = (chara, celebration) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に ',
    celebration,
    ' を祝った】',
  ];
  /** @param {CharaTalk} chara */
  get_it_birthday = (chara) => [
    '【',
    chara.get_colored_name(),
    ' に誕生日おめでとうを伝えた】',
  ];
  /** @param {CharaTalk} chara */
  get_it_check_love = (chara) => [
    chara.get_colored_name(),
    ' は、ふたりの関係を改めて見つめ直すつもりらしい……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_basement_me = (chara, you) => [
    you.get_colored_name(),
    ' の頼みを聞き、',
    chara.get_colored_name(),
    ' は少し心を動かしたようだ……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_home_sex = (chara, you) => [
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    'と、夜に家で会う約束をした……',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_arrive_location = (vehicle, location) => [
    '【',
    vehicle,
    'は ',
    location,
    ' に着いた】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_goto_location = (chara, vehicle, location) => [
    '【',
    chara.get_colored_name(),
    ' と一緒に',
    vehicle,
    'で ',
    location,
    ' へ向かった】',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_self_goto_location = (vehicle, location) => [
    '【ひとりで',
    vehicle,
    'で ',
    location,
    ' へ向かった】',
  ];
  it_back_office = '【引き返した】';
  it_force_back_office = '【誰もいないようだ……引き返した】';
  /** @param {CharaTalk} chara */
  get_it_npc_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は体力が持たず、休むために戻る】',
  ];

  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_in_recruit = (you, uma) => [
    '【トレーニング場で何人かの',
    uma,
    'を見かけた。誰が ',
    you.get_colored_name(),
    ' の目を引いたのだろう？】',
  ];
  /** @param {CharaTalk} chara */
  get_it_chara_not_in_recruit = (chara) => [
    '【',
    chara.get_colored_name(),
    ' はトレーニング場にいないようだ】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_recruit_disabled = (you, uma) => [
    '【',
    you.get_colored_name(),
    ' にはすでに十分な担当がいる。ほかの',
    uma,
    'は ',
    you.get_colored_name(),
    ' の募集には応じないだろう】',
  ];
  /** @param {string} uma */
  get_it_no_chara_in_recruit = (uma) => [
    '【トレーニング場に目を引く',
    uma,
    'はいない】',
  ];

  rec_kojo_mark_border = ['[', ']'];
  rec_km_r = '募';
  rec_km_d = '常';
  rec_km_ed = '育';
  rec_km_l = '恋';
  rec_km_er = '性';
  rec_km_b = '監';
  rec_km_i = '絵';

  /** @param {CharaTalk} chara */
  get_it_heal_yandere = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は再び穏やかになった】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_invest = (income) => [
    '【投資の収益 ',
    income,
    ' ウマコインを受け取った】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_annal_bonus = (income) => [
    '【学園からトレーナー給与と年末賞与 ',
    income,
    ' ウマコインを受け取った】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_salary = (income) => [
    '【学園からトレーナー給与 ',
    income,
    ' ウマコインを受け取った】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {[]} chara_list
   * @returns {TextContent}
   */
  get_it_punish_avoid_race = (you, chara_list) => [
    '【',
    ...chara_list,
    ' の避戦により、社会の ',
    you.get_colored_name(),
    ' への評価が下がった！】',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_reward = (you) => [
    '【',
    you.get_colored_name(),
    ' は務めを果たし、孕袋としての評価が上がった】',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_punish = (you) => [
    '【ウマ娘の主人を妊娠させた ',
    you.get_colored_name(),
    ' は孕袋失格として、トレセンの処分を受けた！】',
  ];
  it_pregnant_trainer_punish =
    '【現役トレーナーの隠し子スキャンダルが、世間で物議を醸した】';
  it_pregnant_uma_punish =
    '【現役ウマ娘の隠し子スキャンダルが、各界で取り沙汰されている】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} teacher
   * @param {PrintedSpan} train
   */
  get_it_train_take_care = (chara, teacher, train) => [
    '【',
    teacher.get_colored_name(),
    ' の見守りのなか、',
    chara.get_colored_name(),
    ' は ',
    train,
    ' のトレーニングをした】',
  ];
  /**
   * @param {[]} chara_list
   * @param {PrintedSpan} train
   */
  get_it_train_together = (chara_list, train) => [
    '【',
    ...chara_list,
    ' は一緒に ',
    train,
    ' の自主トレーニングをした】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} train
   */
  get_it_train_lonely = (chara, train) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    train,
    ' の自主トレーニングをした】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {string} item 母乳药剂
   * @param {string} talent 母乳体质特性名
   */
  get_it_nt_get_milk = (chara, item, talent) => [
    '【',
    chara.get_colored_name(),
    ' は',
    item,
    'の影響で ',
    talent,
    ' になった！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  get_it_nt_become_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    status,
    ' になった！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  get_it_nt_not_be_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' の体重は元に戻った】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  get_it_nt_become_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    status,
    ' を患った！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  get_it_nt_not_be_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' の ',
    status,
    ' は治った】',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_have_penis = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の陰核が一本の肉棒に育った！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_nt_love_unlimit = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' に飲ませた抑制薬が切れた……',
    chara.get_colored_name(),
    'の ',
    you.get_colored_name(),
    ' への恋心が、どっと溢れてくる】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} up_info
   */
  get_it_nt_train_level_up = (chara, up_info) => [
    '【',
    chara.get_colored_name(),
    ' の ',
    up_info,
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_get_jewel = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は新しい因子を継承した！】',
  ];
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} father
   */
  get_it_hb_info = (mother, father) => [
    '【',
    mother.get_colored_name(),
    ' は、どこか ',
    father.get_colored_name(),
    ' に似た健康な子を産んだ！】',
  ];
  it_hb_let_mom_name = '母親に名付けさせる';
  it_hb_let_dad_name = '父親に名付けさせる';
  it_hb_you_name = '自分で名付ける';
  it_hb_name_tip = '子供にどんな名前をつける？';
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} child
   */
  get_it_name_result = (mother, child) => [
    mother.get_colored_name(),
    ' の子供の名は ',
    child.get_colored_name(),
  ];
  it_hb_rename = '名付け直す？';
  /** @param {PrintedSpan} celebration */
  get_it_nt_celebration_notification = (celebration) => [
    '【今週は ',
    celebration,
    '。チームの面々にも、目を向けてほしい行事があるかもしれない】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} race
   */
  get_it_nt_race_notification = (chara, race) => [
    '【今週は ',
    chara.get_colored_name(),
    ' が出走登録した ',
    race,
    ' がある】',
  ];
  /** @param {PrintedSpan} race */
  get_it_nt_foreign_race_notification = (race) => [
    '【',
    race,
    ' がまもなく開催される。出走する選手たちは遠征の途につく】',
  ];
  it_nt_race_contestants = 'チームのうち、次の面々がこのレースに登録した：';
  /**
   * @param {PrintedSpan} race
   * @param {boolean} you_in_race プレイヤーが出走するか
   */
  get_it_nt_to_foreign_confirm = (race, you_in_race) =>
    you_in_race ? [' ', race, ' に出走する？'] : [' ', race, ' に同行する？'];
  it_nt_foreign_avoid_notification =
    'これらの選手の欠場が、世論に噂を広げている：';
  it_nt_back_info = '【トレセンへ戻った】';
  /** @param {PrintedSpan} race */
  get_it_nt_back_info_from_foreign = (race) => [
    '【',
    race,
    ' へ遠征していた面々がトレセンへ戻った】',
  ];
  it_nt_summer_start_notification = '【年に一度の夏合宿が今週から始まる】';
  it_nt_summer_chara_list_start = '今年、チームのうち次の面々が夏合宿に出る：';
  /** @param {boolean} just_you */
  get_it_nt_summer_confirm = (just_you) =>
    just_you ? '夏合宿に参加する？' : '夏合宿に同行する？';
  it_nt_summer_chara_list_follow = '今年、次の面々が夏合宿に同行する：';
  it_nt_back_info_summer = '【夏合宿へ向かった面々がトレセンへ戻った】';

  it_nt_moon_well_cool_down = '【秘湯の効能が戻った】';
  get_it_moon_well_together = (chara) => [
    '【',
    chara.get_colored_name(),
    ' と秘湯の受付にいる】',
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
          ' はそれぞれ ',
          item,
          ' を一杯献上した】',
        ]
      : ['【', title, ' ', ...chara_list, ' は ', item, ' を一杯献上した】'];
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
    ' は ',
    jewel,
    ' を献上した】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_it_chara_rape_in_sleeping = (chara, you) => [
    '【強い刺激で ',
    you.get_colored_name(),
    ' は眠りから飛び起き、',
    chara.get_colored_name(),
    ' が体の上に伏せているのを見つけた！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   * @returns {TextContent}
   */
  get_it_multi_rape_in_sleeping = (chara, you, supporter) => [
    '【強い刺激で ',
    you.get_colored_name(),
    ' は眠りから飛び起き、',
    chara.get_colored_name(),
    ' と ',
    supporter.get_colored_name(),
    ' が体の上に伏せているのを見つけた！】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に取り入ろうとした】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter_masters = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.couple_title,
    ' に取り入ろうとした】',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_success = (you) => [
    you.get_colored_name(),
    ' は機関を一層解いた！',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_fail = (you) => [
    you.get_colored_name(),
    ' は仕掛けを解けなかった……',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_escape = (you) => [
    you.get_colored_name(),
    ' は機関を解き、地下室から逃れた！',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_sleep = (you) => [
    you.get_colored_name(),
    ' はベッドに横になり、少し眠って気力を戻すことにした……',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat = (you) => [
    '地下室の主人は ',
    you.get_colored_name(),
    ' に食料を残していた。',
    you.get_colored_name(),
    ' は少しだけ食べることにした……',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat_uma_s = (you) => [
    you.get_colored_name(),
    ' は突然、心拍が速まり、熱い血が上り、強い眩暈に襲われた……',
  ];
  it_bs_strike_success = '【奇襲成功】';
  it_bs_strike_fail = '【奇襲失敗】';
  it_bs_battle_success = '【反抗成功】';
  it_bs_battle_fail = '【反抗失敗】';
  it_bs_battle_escape = '【機関の解除に成功】';
  it_bs_battle_prison = '【機関の解除に失敗】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_release = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に解放を願った】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_clock = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' に今の時刻を尋ねた】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_find_escape = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' にその場で捕まった！】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_awake = (chara) => [
    '【',
    chara.get_colored_name(),
    ' が目覚めた】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_back = (chara) => [
    '【',
    chara.get_colored_name(),
    ' が戻ってきた】',
  ];
  it_bs_rescue = '【救援が到着した】';
  /** @param {CharaTalk} chara */
  get_it_bs_fall_asleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は気力が尽きて昏睡した】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_eat = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は少し食事をした】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' はベッドに横になり眠った】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_lure = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' を挑発した】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_rape = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' を犯すことにした】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_fix = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は地下室の補強を始めた】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_leave = (chara) => [
    '【',
    chara.get_colored_name(),
    ' は立ち去った】',
  ];
  it_bs_final_escape = '【トレーナー室へ無事に戻った】';
  /** @param {CharaTalk} chara */
  get_it_bs_downgrade_security = (chara) => [
    '【',
    chara.get_colored_name(),
    ' の警戒が緩んだ】',
  ];

  it_sell_fish_template = '【釣った魚を売り、%MONEY% ウマコインになった】';

  ed_saying_01 = '九尺二間の陋室に、紅唇竹に依りて恩情を共にす。——高杉晋作';
  ed_saying_02 =
    '金とウマ娘と女。男にはこの三つが永遠にわからない。——ウィル・ロ〇ス';
  ed_saying_03 = '一文銭、英雄漢を倒す。——李緑園';
  ed_saying_04 =
    '縛られた奴隷はみな、自ら鎖を外すことができる。——ウィリアム・シェイクスピア';
  ed_saying_05 =
    'もう独りではない。いま、生涯の最愛がこれほど近くにいる。——レ・ミゼラブル';
  ed_saying_06 = 'エクリプス先んず、万物光なし。——デニス・オケリー';
  ed_saying_07 = '鳴かぬなら殺してしまえ時鳥。——織田信長';
  ed_saying_08 =
    '捜査において、私は最後にして最高の上訴裁判所である。——シャーロック・ホームズ';
  ed_saying_09 = '世は成敗をもって人物を論ず、故に操は英雄の列にあり。——蘇軾';
  ed_saying_10 =
    '偉大なウマ娘を持つ者は、最も偉大な玉座を持つ。——ウィンストン・〇チル';
  ed_saying_11 =
    '人が真に下劣になると、他人の不幸を喜ぶほかに楽しみは残らない。——ヨハン・ヴォルフガング・フォン・ゲーテ';
  ed_saying_12 =
    '自由とは思いのままにすることではなく、己を失わずに済むことだ。——イマヌエル・カント';
  ed_saying_13 = '私は自分自身の最大の敵である。——ナポレオン・ボナパルト';

  // Forward Compatibility - 前方互換
  fc_mejiro_confirm = 'メジロシティの方針を選んでください';
  fc_mejiro_free = '「自由」';
  fc_mejiro_cum = '「慈愛」';

  fc_race_item_confirm = '玩具を付けて出走したときの影響を選んでください';
  fc_race_item_yes = '影響あり';
  fc_race_item_no = '影響なし';
}

module.exports = I18nTimon;
