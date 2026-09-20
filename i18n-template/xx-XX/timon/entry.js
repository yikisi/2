const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/timon') {
  recruit = proxy_kojo_js(require('#/i18n/xx-XX/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/xx-XX/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/xx-XX/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/xx-XX/timon/love'));
  basement = proxy_kojo_js(require('#/i18n/xx-XX/timon/base'));

  ero_c = proxy_kojo_js(require('#/i18n/xx-XX/timon/sex/ero-common'));
  ero_r = proxy_kojo_js(require('#/i18n/xx-XX/timon/sex/ero-rape'));
  ero_s = proxy_kojo_js(require('#/i18n/xx-XX/timon/sex/ero-sleep'));
  ero_o = proxy_kojo_js(require('#/i18n/xx-XX/timon/sex/ero-others'));

  ero_sys = proxy_kojo_js(require('#/i18n/xx-XX/timon/sex/system'));
  act_desc_c = proxy_kojo_js(require('#/i18n/xx-XX/timon/sex/act-desc-common'));
  act_desc_r = proxy_kojo_js(require('#/i18n/xx-XX/timon/sex/act-desc-rape'));
  act_desc_s = proxy_kojo_js(require('#/i18n/xx-XX/timon/sex/act-desc-sleep'));

  daily_child = proxy_kojo_js(require('#/i18n/xx-XX/timon/child/daily'));
  ero_child = proxy_kojo_js(require('#/i18n/xx-XX/timon/child/ero'));

  game_guides = proxy_kojo_js(require('#/i18n/xx-XX/timon/guides/game'));
  base_guides = proxy_kojo_js(require('#/i18n/xx-XX/timon/guides/base'));
  ending = proxy_kojo_js(require('#/i18n/xx-XX/timon/others/ending'));

  storage = proxy_kojo_js(require('#/i18n/xx-XX/timon/others/storage'));
  god_shop = proxy_kojo_js(require('#/i18n/xx-XX/timon/others/god-shop'));
  tachyon_shop = proxy_kojo_js(
    require('#/i18n/xx-XX/timon/others/tachyon-shop'),
  );
  race = proxy_kojo_js(require('#/i18n/xx-XX/timon/others/race'));
  others = proxy_kojo_js(require('#/i18n/xx-XX/timon/others/others'));
  random_events = proxy_kojo_js(require('#/i18n/xx-XX/timon/others/random'));
  pregnant_slave = proxy_kojo_js(
    require('#/i18n/xx-XX/timon/others/pregnant-slave'),
  );
  cum = proxy_kojo_js(require('#/i18n/xx-XX/timon/mejiro/cum'));
  /** @type {KojoFile} */
  cum_events = require('#/i18n/xx-XX/timon/mejiro/cum-events.kojo');

  strange = '陌生';
  strange_desc = (debuff) =>
    `彼此还很不熟悉……训练效果-${debuff}%；改善关系或与担当训练员谈论此事可改善该状态。`;

  report_tenn_spr = '春季的长距离之王诞生！';
  report_tenn_sho = (uma) => ['在此，府中秋天的魔物被 ', uma, ' 击灭了！'];
  report_invincible_g1 = (uma) => [
    '强者就是强大，强者就是强大！',
    uma,
    ' 无伤称霸G1！',
  ];
  report_invincible_three_crowns =
    '这是无败三冠！赛马娘历史永不磨灭的大记录达成啦！！！';

  npc_select = '要和谁交谈？';
  npc_talk = '聊天';
  npc_sex = '求爱';
  npc_out = '约会';
  get_npc_celebration = (celebration) => `庆祝 ${celebration}`;
  npc_bye = '再见';

  npc_recruit_in_school = '「一起努力吧！」（招募）';
  npc_recruit_out_school = '「来帮助我吧！」（招募）';

  npc_accept_task = '接受任务';
  npc_retry_task = '再次尝试';

  bt_god_love_event_fuck_me = '自己怀上神胎';
  bt_god_love_event_preg_me = '将腹中胎儿变成神胎';

  // it = information timon
  /** @param {CharaTalk} chara */
  get_it_office_study = (chara) => [
    '【指导了 ',
    chara.get_colored_name(),
    ' 的学习】',
  ];
  /** @param {CharaTalk} chara */
  get_it_office_prepare = (chara) => [
    '【帮助 ',
    chara.get_colored_name(),
    ' 进行了赛前准备】',
  ];
  /** @param {CharaTalk} chara */
  get_it_talk = (chara) => ['【和 ', chara.get_colored_name(), ' 搭话】'];
  /** @param {CharaTalk} chara */
  get_it_office_gift = (chara) => [
    '【给 ',
    chara.get_colored_name(),
    ' 送上了一份小礼物】',
  ];
  it_self_cook = '【独自做了饭加餐】';
  /** @param {CharaTalk} chara */
  get_it_office_cook = (chara) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起做了饭加餐】',
  ];
  it_self_rest = '【独自一人休息了】';
  /** @param {CharaTalk} chara */
  get_it_office_rest = (chara) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起休息了】',
  ];
  it_self_game = '【独自一人玩了游戏】';
  /** @param {CharaTalk} chara */
  get_it_office_game = (chara) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起打了游戏】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} celebration
   */
  get_it_celebration = (chara, celebration) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起庆祝了 ',
    celebration,
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_birthday = (chara) => [
    '【向 ',
    chara.get_colored_name(),
    ' 祝贺生日快乐】',
  ];
  /** @param {CharaTalk} chara */
  get_it_check_love = (chara) => [
    chara.get_colored_name(),
    ' 似乎决定重新审视你们之间的关系……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_basement_me = (chara, you) => [
    '听了 ',
    you.get_colored_name(),
    ' 的请求，',
    chara.get_colored_name(),
    ' 似乎有些意动……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_home_sex = (chara, you) => [
    chara.get_colored_name(),
    ' 与 ',
    you.get_colored_name(),
    '约定晚上在家见面……',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_arrive_location = (vehicle, location) => [
    '【',
    vehicle,
    '抵达了 ',
    location,
    '】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_goto_location = (chara, vehicle, location) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起',
    vehicle,
    '前往 ',
    location,
    '】',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_self_goto_location = (vehicle, location) => [
    '【独自',
    vehicle,
    '前往 ',
    location,
    '】',
  ];
  it_back_office = '【折返了】';
  it_force_back_office = '【没有人在的样子……折返了】';
  /** @param {CharaTalk} chara */
  get_it_npc_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 体力不支，要回去休息了】',
  ];

  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_in_recruit = (you, uma) => [
    '【在训练场内见到了几位',
    uma,
    '，是谁吸引了 ',
    you.get_colored_name(),
    ' 的注意力呢？】',
  ];
  /** @param {CharaTalk} chara */
  get_it_chara_not_in_recruit = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 似乎不在训练场】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_recruit_disabled = (you, uma) => [
    '【',
    you.get_colored_name(),
    ' 已经有一定数量的担当，其他',
    uma,
    '不会同意 ',
    you.get_colored_name(),
    ' 的招募了】',
  ];
  /** @param {string} uma */
  get_it_no_chara_in_recruit = (uma) => ['【训练场没有引人注目的', uma, '】'];

  rec_kojo_mark_border = ['[', ']'];
  rec_km_r = '募';
  rec_km_d = '常';
  rec_km_ed = '育';
  rec_km_l = '爱';
  rec_km_er = '性';
  rec_km_b = '监';
  rec_km_i = '绘';

  /** @param {CharaTalk} chara */
  get_it_heal_yandere = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 重新变得温和起来】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_invest = (income) => ['【收到了投资收益 ', income, ' 马币】'];
  /** @param {PrintedSpan} income */
  get_it_income_annal_bonus = (income) => [
    '【收到了学园发放的训练员工资和年终奖 ',
    income,
    ' 马币】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_salary = (income) => [
    '【收到了学园发放的训练员工资 ',
    income,
    ' 马币】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {[]} chara_list
   * @returns {TextContent}
   */
  get_it_punish_avoid_race = (you, chara_list) => [
    '【因为 ',
    ...chara_list,
    ' 的避战行为，社会对 ',
    you.get_colored_name(),
    ' 的评价降低了！】',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_reward = (you) => [
    '【',
    you.get_colored_name(),
    ' 履行了职责，作为孕袋的评价上升了】',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_punish = (you) => [
    '【让马娘主人怀孕的 ',
    you.get_colored_name(),
    ' 因为孕袋失格，受到了特雷森的处罚！】',
  ];
  it_pregnant_trainer_punish = '【现役训练员的私生子丑闻在社会上引起一阵非议】';
  it_pregnant_uma_punish = '【现役马娘的私生子丑闻使社会各界议论纷纷】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} teacher
   * @param {PrintedSpan} train
   */
  get_it_train_take_care = (chara, teacher, train) => [
    '【在 ',
    teacher.get_colored_name(),
    ' 的照看下，',
    chara.get_colored_name(),
    ' 进行了 ',
    train,
    ' 训练】',
  ];
  /**
   * @param {[]} chara_list
   * @param {PrintedSpan} train
   */
  get_it_train_together = (chara_list, train) => [
    '【',
    ...chara_list,
    ' 一起进行了 ',
    train,
    ' 方面的自主训练】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} train
   */
  get_it_train_lonely = (chara, train) => [
    '【',
    chara.get_colored_name(),
    ' 进行了 ',
    train,
    ' 方面的自主训练】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {string} item 母乳药剂
   * @param {string} talent 母乳体质特性名
   */
  get_it_nt_get_milk = (chara, item, talent) => [
    '【',
    chara.get_colored_name(),
    ' 在',
    item,
    '的影响下变成 ',
    talent,
    ' 了！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  get_it_nt_become_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' ',
    status,
    ' 了！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  get_it_nt_not_be_fat = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' 的体重恢复了正常】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  get_it_nt_become_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' 罹患了 ',
    status,
    '！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  get_it_nt_not_be_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' 的 ',
    status,
    ' 痊愈了】',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_have_penis = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 的阴核长成了一根肉棒！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_nt_love_unlimit = (chara, you) => [
    '【下给 ',
    chara.get_colored_name(),
    ' 的抑制药失效了……',
    chara.get_colored_name(),
    '对 ',
    you.get_colored_name(),
    ' 的恋心汹涌而来】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} up_info
   */
  get_it_nt_train_level_up = (chara, up_info) => [
    '【',
    chara.get_colored_name(),
    ' 的 ',
    up_info,
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_get_jewel = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 继承了新的因子！】',
  ];
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} father
   */
  get_it_hb_info = (mother, father) => [
    '【',
    mother.get_colored_name(),
    ' 生下了一个依稀有着 ',
    father.get_colored_name(),
    ' 外貌的健康的孩子！】',
  ];
  it_hb_let_mom_name = '让母亲取名';
  it_hb_let_dad_name = '让父亲取名';
  it_hb_you_name = '亲自取名';
  it_hb_name_tip = '想给孩子起什么名字呢？';
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} child
   */
  get_it_name_result = (mother, child) => [
    mother.get_colored_name(),
    ' 的孩子起名为 ',
    child.get_colored_name(),
  ];
  it_hb_rename = '要重新取名吗？';
  /** @param {PrintedSpan} celebration */
  get_it_nt_celebration_notification = (celebration) => [
    '【本周有 ',
    celebration,
    '，队伍成员们也许有什么活动需要你关注哦】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} race
   */
  get_it_nt_race_notification = (chara, race) => [
    '【本周有 ',
    chara.get_colored_name(),
    ' 报名参加的 ',
    race,
    '】',
  ];
  /** @param {PrintedSpan} race */
  get_it_nt_foreign_race_notification = (race) => [
    '【',
    race,
    ' 即将举办，参赛选手们要踏上远征之路了】',
  ];
  it_nt_race_contestants = '队伍中以下成员报名了这场赛事：';
  /**
   * @param {PrintedSpan} race
   * @param {boolean} you_in_race 玩家是否参赛
   */
  get_it_nt_to_foreign_confirm = (race, you_in_race) =>
    you_in_race ? ['要参加 ', race, ' 吗？'] : ['要陪同参加 ', race, ' 吗？'];
  it_nt_foreign_avoid_notification = '这些选手的缺席让舆论界流言四起：';
  it_nt_back_info = '【回到特雷森了】';
  /** @param {PrintedSpan} race */
  get_it_nt_back_info_from_foreign = (race) => [
    '【远征 ',
    race,
    ' 的人员回到特雷森了】',
  ];
  it_nt_summer_start_notification = '【一年一度的夏合宿从本周开始】';
  it_nt_summer_chara_list_start = '今年队伍中以下成员需要参加夏合宿：';
  /** @param {boolean} just_you */
  get_it_nt_summer_confirm = (just_you) =>
    just_you ? '要参加夏合宿吗？' : '要跟随参加夏合宿吗？';
  it_nt_summer_chara_list_follow = '今年以下人员会跟随参加夏合宿：';
  it_nt_back_info_summer = '【前往夏合宿的人员回到特雷森了】';

  it_nt_moon_well_cool_down = '【秘汤的效力恢复了】';
  get_it_moon_well_together = (chara) => [
    '【和 ',
    chara.get_colored_name(),
    ' 在秘汤前台】',
  ];

  /**
   * @param {string} title
   * @param {[]} chara_list
   * @param {string} item
   */
  get_it_nt_inmon_milk_slave = (title, chara_list, item) =>
    chara_list.length > 1
      ? ['【', title, ' ', ...chara_list, ' 各贡上了一杯 ', item, '】']
      : ['【', title, ' ', ...chara_list, ' 贡上了一杯 ', item, '】'];
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
    ' 贡上了 ',
    jewel,
    '】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_it_chara_rape_in_sleeping = (chara, you) => [
    '【强烈的刺激使 ',
    you.get_colored_name(),
    ' 从睡梦中惊醒，发现 ',
    chara.get_colored_name(),
    ' 伏在身上！】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   * @returns {TextContent}
   */
  get_it_multi_rape_in_sleeping = (chara, you, supporter) => [
    '【强烈的刺激使 ',
    you.get_colored_name(),
    ' 从睡梦中惊醒，发现 ',
    chara.get_colored_name(),
    ' 与 ',
    supporter.get_colored_name(),
    ' 伏在身上！】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' 尝试讨好 ',
    chara.get_colored_name(),
    '】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter_masters = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' 尝试讨好 ',
    chara.couple_title,
    '】',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_success = (you) => [
    you.get_colored_name(),
    ' 破解了一层机关！',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_fail = (you) => [you.get_colored_name(), ' 未能破解机关……'];
  /** @param {CharaTalk} you */
  get_it_unlock_escape = (you) => [
    you.get_colored_name(),
    ' 成功解除了机关，逃离了地下室！',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_sleep = (you) => [
    you.get_colored_name(),
    ' 决定躺到床上小睡片刻恢复精神……',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat = (you) => [
    '地下室主人给 ',
    you.get_colored_name(),
    ' 留下了一些粮食，',
    you.get_colored_name(),
    ' 决定稍微食用一点……',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat_uma_s = (you) => [
    you.get_colored_name(),
    ' 突然感到心跳加快，热血上涌，同时伴随着强烈的眩晕……',
  ];
  it_bs_strike_success = '【偷袭成功】';
  it_bs_strike_fail = '【偷袭失败】';
  it_bs_battle_success = '【反抗成功】';
  it_bs_battle_fail = '【反抗失败】';
  it_bs_battle_escape = '【解除机关成功】';
  it_bs_battle_prison = '【解除机关失败】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_release = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' 请求 ',
    chara.get_colored_name(),
    ' 释放自己】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_clock = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' 向 ',
    chara.get_colored_name(),
    ' 询问当前的时间】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_find_escape = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' 被 ',
    chara.get_colored_name(),
    ' 逮个正着！】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_awake = (chara) => ['【', chara.get_colored_name(), ' 醒来了】'];
  /** @param {CharaTalk} chara */
  get_it_bs_back = (chara) => ['【', chara.get_colored_name(), ' 回来了】'];
  it_bs_rescue = '【救援到达】';
  /** @param {CharaTalk} chara */
  get_it_bs_fall_asleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 因精力不济而昏睡】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_eat = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 吃了一些食物】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 躺在床上睡着了】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_lure = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' 挑逗了 ',
    you.get_colored_name(),
    '】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_rape = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' 决定强奸 ',
    you.get_colored_name(),
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_fix = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 开始加固地下室】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_leave = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 离开了】',
  ];
  it_bs_final_escape = '【成功回到了训练室】';
  /** @param {CharaTalk} chara */
  get_it_bs_downgrade_security = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 的警戒心放松了】',
  ];

  it_sell_fish_template = '【钓到的鱼卖出了 %MONEY% 马币】';

  ed_saying_01 = '九尺二间陋室里，红唇依竹共恩情。——高杉晋作';
  ed_saying_02 = '金钱、赛马娘、女人，男生永远搞不懂这三件事。——威尔・罗〇斯';
  ed_saying_03 = '一文钱难倒英雄汉。——李绿园';
  ed_saying_04 =
    '每一个被束缚的奴隶都可以靠着他自己的手脱掉锁链。——威廉・莎士比亚';
  ed_saying_05 = '我已不再孤单，如今我生命中的挚爱与我如此靠近。——悲惨世界';
  ed_saying_06 = '日蚀当先，万物无光。——丹尼斯・奥凯利';
  ed_saying_07 = '杜鹃不鸣则杀之。——织田信长';
  ed_saying_08 = '探案过程中，我是最后的、最高的上诉法庭。——夏洛克・福尔摩斯';
  ed_saying_09 = '世以成败论人物，故操得在英雄之列。——苏轼';
  ed_saying_10 = '拥有一位伟大的赛马娘，就拥有了最伟大的宝座。——温斯顿・〇吉尔';
  ed_saying_11 =
    '人变得真正低劣时，除了高兴别人的不幸外，已无其他乐趣可言。——约翰・沃尔夫冈・冯・歌德';
  ed_saying_12 = '自由不是随心所欲，而是不必身不由己。——伊曼努尔・康德';
  ed_saying_13 = '我是自己最大的敌人。——拿破仑・波拿巴';

  // Forward Compatibility - 向前兼容
  fc_mejiro_confirm = '请选择目白城风格';
  fc_mejiro_free = '「自由」';
  fc_mejiro_cum = '「慈爱」';

  fc_race_item_confirm = '请选择带玩具参赛的影响';
  fc_race_item_yes = '有影响';
  fc_race_item_no = '无影响';
};
