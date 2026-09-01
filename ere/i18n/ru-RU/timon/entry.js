const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/timon/entry') {
  recruit = proxy_kojo_js(require('#/i18n/ru-RU/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/ru-RU/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/ru-RU/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/ru-RU/timon/love'));
  basement = proxy_kojo_js(require('#/i18n/ru-RU/timon/base'));

  ero_c = proxy_kojo_js(require('#/i18n/ru-RU/timon/sex/ero-common'));
  ero_r = proxy_kojo_js(require('#/i18n/ru-RU/timon/sex/ero-rape'));
  ero_s = proxy_kojo_js(require('#/i18n/ru-RU/timon/sex/ero-sleep'));
  ero_o = proxy_kojo_js(require('#/i18n/ru-RU/timon/sex/ero-others'));

  ero_sys = proxy_kojo_js(require('#/i18n/ru-RU/timon/sex/system'));
  act_desc_c = proxy_kojo_js(require('#/i18n/ru-RU/timon/sex/act-desc-common'));
  act_desc_r = proxy_kojo_js(require('#/i18n/ru-RU/timon/sex/act-desc-rape'));
  act_desc_s = proxy_kojo_js(require('#/i18n/ru-RU/timon/sex/act-desc-sleep'));

  daily_child = proxy_kojo_js(require('#/i18n/ru-RU/timon/child/daily'));
  ero_child = proxy_kojo_js(require('#/i18n/ru-RU/timon/child/ero'));

  game_guides = proxy_kojo_js(require('#/i18n/ru-RU/timon/guides/game'));
  base_guides = proxy_kojo_js(require('#/i18n/ru-RU/timon/guides/base'));
  ending = proxy_kojo_js(require('#/i18n/ru-RU/timon/others/ending'));

  storage = proxy_kojo_js(require('#/i18n/ru-RU/timon/others/storage'));
  god_shop = proxy_kojo_js(require('#/i18n/ru-RU/timon/others/god-shop'));
  tachyon_shop = proxy_kojo_js(
    require('#/i18n/ru-RU/timon/others/tachyon-shop'),
  );
  race = proxy_kojo_js(require('#/i18n/ru-RU/timon/others/race'));
  others = proxy_kojo_js(require('#/i18n/ru-RU/timon/others/others'));
  random_events = proxy_kojo_js(require('#/i18n/ru-RU/timon/others/random'));
  pregnant_slave = proxy_kojo_js(
    require('#/i18n/ru-RU/timon/others/pregnant-slave'),
  );
  cum = proxy_kojo_js(require('#/i18n/ru-RU/timon/mejiro/cum'));
  /** @type {KojoFile} */
  cum_events = require('#/i18n/ru-RU/timon/mejiro/cum-events.kojo');

  strange = 'Незнакомство';
  strange_desc = (debuff) =>
    `Вы ещё плохо знакомы… Эффект тренировок −${debuff}%. Улучшите отношения или обсудите это с ответственным тренером.`;

  report_tenn_spr = 'Родился весенний король длинной дистанции!';
  report_tenn_sho = (uma) => ['Осенний монстр Фучу повержен — ', uma, '!'];
  report_invincible_g1 = (uma) => [
    'Сильный — значит сильный! ',
    uma,
    ' без единой раны берёт G1!',
  ];
  report_invincible_three_crowns =
    'Это непобедимая тройная корона! Рекорд, который навсегда останется в истории умамусумэ!!!';

  npc_select = 'С кем поговорить?';
  npc_talk = 'Болтать';
  npc_sex = 'Ухаживать';
  npc_out = 'Свидание';
  get_npc_celebration = (celebration) => `Отпраздновать: ${celebration}`;
  npc_bye = 'Пока';

  npc_recruit_in_school = '«Давай вместе!» (набор)';
  npc_recruit_out_school = '«Помоги мне!» (набор)';

  npc_accept_task = 'Принять задание';
  npc_retry_task = 'Попробовать снова';

  bt_god_love_event_fuck_me = 'Самой выносить божественный плод';
  bt_god_love_event_preg_me = 'Превратить плод в божественный';

  // it = information timon
  /** @param {CharaTalk} chara */
  get_it_office_study = (chara) => [
    '【Подтянули ',
    chara.get_colored_name(),
    ' по учёбе】',
  ];
  /** @param {CharaTalk} chara */
  get_it_office_prepare = (chara) => [
    '【Помогли ',
    chara.get_colored_name(),
    ' с подготовкой к скачкам】',
  ];
  /** @param {CharaTalk} chara */
  get_it_talk = (chara) => ['【С ', chara.get_colored_name(), ' поболтали】'];
  /** @param {CharaTalk} chara */
  get_it_office_gift = (chara) => [
    '【Подарили ',
    chara.get_colored_name(),
    ' небольшой подарок】',
  ];
  it_self_cook = '【Поели в одиночку】';
  /** @param {CharaTalk} chara */
  get_it_office_cook = (chara) => [
    '【С ',
    chara.get_colored_name(),
    ' вместе поели】',
  ];
  it_self_rest = '【Отдохнули в одиночку】';
  /** @param {CharaTalk} chara */
  get_it_office_rest = (chara) => [
    '【С ',
    chara.get_colored_name(),
    ' вместе отдохнули】',
  ];
  it_self_game = '【Поиграли в одиночку】';
  /** @param {CharaTalk} chara */
  get_it_office_game = (chara) => [
    '【С ',
    chara.get_colored_name(),
    ' вместе поиграли】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} celebration
   */
  get_it_celebration = (chara, celebration) => [
    '【С ',
    chara.get_colored_name(),
    ' вместе отпраздновали: ',
    celebration,
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_birthday = (chara) => [
    '【Поздравили ',
    chara.get_colored_name(),
    ' с днём рождения】',
  ];
  /** @param {CharaTalk} chara */
  get_it_check_love = (chara) => [
    chara.get_colored_name(),
    ' решает заново оценить ваши отношения…',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_basement_me = (chara, you) => [
    'Выслушав просьбу ',
    you.get_colored_name(),
    ', ',
    chara.get_colored_name(),
    ' как будто заинтересовалась…',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_home_sex = (chara, you) => [
    chara.get_colored_name(),
    ' и ',
    you.get_colored_name(),
    ' договорились встретиться дома вечером…',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_arrive_location = (vehicle, location) => [
    '【',
    vehicle,
    'Прибыли в ',
    location,
    '】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_goto_location = (chara, vehicle, location) => [
    '【С ',
    chara.get_colored_name(),
    ' вместе ',
    vehicle,
    ' отправились в ',
    location,
    '】',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_self_goto_location = (vehicle, location) => [
    '【В одиночку ',
    vehicle,
    ' отправились в ',
    location,
    '】',
  ];
  it_back_office = '【Вернулись】';
  it_force_back_office = '【Никого нет… вернулись】';
  /** @param {CharaTalk} chara */
  get_it_npc_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' выбилась из сил и уходит отдыхать】',
  ];

  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_in_recruit = (you, uma) => [
    '【На тренировочном поле несколько ',
    uma,
    ' — кто зацепил взгляд ',
    you.get_colored_name(),
    '?】',
  ];
  /** @param {CharaTalk} chara */
  get_it_chara_not_in_recruit = (chara) => [
    '【',
    chara.get_colored_name(),
    ' вроде бы не на тренировочном поле】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_recruit_disabled = (you, uma) => [
    '【У ',
    you.get_colored_name(),
    ' и у других ',
    uma,
    ' уже достаточно подопечных — другие ',
    you.get_colored_name(),
    ' не согласятся на набор】',
  ];
  /** @param {string} uma */
  get_it_no_chara_in_recruit = (uma) => [
    '【На тренировочном поле нет заметных ',
    uma,
    '】',
  ];

  rec_kojo_mark_border = ['[', ']'];
  rec_km_r = 'Н';
  rec_km_d = 'П';
  rec_km_ed = 'В';
  rec_km_l = 'Л';
  rec_km_er = 'С';
  rec_km_b = 'Пд';
  rec_km_i = 'К';

  /** @param {CharaTalk} chara */
  get_it_heal_yandere = (chara) => [
    '【',
    chara.get_colored_name(),
    ' снова стала мягче】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_invest = (income) => [
    '【Получен доход от инвестиций: ',
    income,
    ' ма-монет】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_annal_bonus = (income) => [
    '【Зарплата тренера и годовая премия от академии: ',
    income,
    ' ма-монет】',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_salary = (income) => [
    '【Зарплата тренера от академии: ',
    income,
    ' ма-монет】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {[]} chara_list
   * @returns {TextContent}
   */
  get_it_punish_avoid_race = (you, chara_list) => [
    '【Из-за уклонения от скачек (',
    ...chara_list,
    ') репутация ',
    you.get_colored_name(),
    ' в обществе упала!】',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_reward = (you) => [
    '【',
    you.get_colored_name(),
    ' исполнил(а) свой долг — оценка беременной шлюхи выросла】',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_punish = (you) => [
    '【',
    you.get_colored_name(),
    ', сделав(шая) хозяйку-умамусумэ беременной, дисквалифицирован(а) как беременная шлюха и наказан(а) Трейсеном!】',
  ];
  it_pregnant_trainer_punish =
    '【Скандал с внебрачным ребёнком действующего тренера всколыхнул общество】';
  it_pregnant_uma_punish =
    '【Скандал с внебрачным ребёнком действующей умамусумэ обсуждают повсюду】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} teacher
   * @param {PrintedSpan} train
   */
  get_it_train_take_care = (chara, teacher, train) => [
    '【Под присмотром ',
    teacher.get_colored_name(),
    ', ',
    chara.get_colored_name(),
    ' отработала ',
    train,
    ' на тренировке】',
  ];
  /**
   * @param {[]} chara_list
   * @param {PrintedSpan} train
   */
  get_it_train_together = (chara_list, train) => [
    '【',
    ...chara_list,
    ' вместе отработали ',
    train,
    ' на самостоятельной тренировке】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} train
   */
  get_it_train_lonely = (chara, train) => [
    '【',
    chara.get_colored_name(),
    ' отработала ',
    train,
    ' на самостоятельной тренировке】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {string} item 母乳药剂
   * @param {string} talent 母乳体质特性名
   */
  get_it_nt_get_milk = (chara, item, talent) => [
    '【',
    chara.get_colored_name(),
    ' под действием ',
    item,
    ' стала ',
    talent,
    '!】',
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
    '!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 发胖状态名
   */
  get_it_nt_not_be_fat = (chara, status) => [
    '【Вес ',
    chara.get_colored_name(),
    ' снова в норме】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  get_it_nt_become_headache = (chara, status) => [
    '【У ',
    chara.get_colored_name(),
    ' заболела: ',
    status,
    '!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status 偏头痛状态名
   */
  get_it_nt_not_be_headache = (chara, status) => [
    '【',
    chara.get_colored_name(),
    ' у ',
    status,
    ' позади】',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_have_penis = (chara) => [
    '【Клитор ',
    chara.get_colored_name(),
    ' вырос в полноценный член!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_nt_love_unlimit = (chara, you) => [
    '【Подавитель, подсыпанный ',
    chara.get_colored_name(),
    ', перестал действовать… и у ',
    chara.get_colored_name(),
    ' к ',
    you.get_colored_name(),
    ' хлынула волна влюблённости】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} up_info
   */
  get_it_nt_train_level_up = (chara, up_info) => [
    '【У ',
    chara.get_colored_name(),
    ' — ',
    up_info,
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_get_jewel = (chara) => [
    '【',
    chara.get_colored_name(),
    ' унаследовала новый фактор!】',
  ];
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} father
   */
  get_it_hb_info = (mother, father) => [
    '【',
    mother.get_colored_name(),
    ' родила здорового ребёнка, внешне смутно похожего на ',
    father.get_colored_name(),
    '!】',
  ];
  it_hb_let_mom_name = 'Пусть имя даст мать';
  it_hb_let_dad_name = 'Пусть отец назовёт';
  it_hb_you_name = 'Назвать самому';
  it_hb_name_tip = 'Как назвать ребёнка?';
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} child
   */
  get_it_name_result = (mother, child) => [
    mother.get_colored_name(),
    ' — ребёнку дали имя ',
    child.get_colored_name(),
  ];
  it_hb_rename = 'Переименовать?';
  /** @param {PrintedSpan} celebration */
  get_it_nt_celebration_notification = (celebration) => [
    '【На этой неделе: ',
    celebration,
    ' — у членов команды может быть что-то, на что стоит обратить внимание】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} race
   */
  get_it_nt_race_notification = (chara, race) => [
    '【На этой неделе ',
    chara.get_colored_name(),
    ' записана на ',
    race,
    '】',
  ];
  /** @param {PrintedSpan} race */
  get_it_nt_foreign_race_notification = (race) => [
    '【Скоро ',
    race,
    ' — участники отправятся в выезд】',
  ];
  it_nt_race_contestants = 'Из команды на эту скачку записаны:';
  /**
   * @param {PrintedSpan} race
   * @param {boolean} you_in_race 玩家是否参赛
   */
  get_it_nt_to_foreign_confirm = (race, you_in_race) =>
    you_in_race
      ? ['Участвовать в ', race, '?']
      : ['Сопроводить на ', race, '?'];
  it_nt_foreign_avoid_notification =
    'Из-за отсутствия этих участниц ходят слухи:';
  it_nt_back_info = '【Вернулись в Трейсен】';
  /** @param {PrintedSpan} race */
  get_it_nt_back_info_from_foreign = (race) => [
    '【Участники выезда на ',
    race,
    ' вернулись в Трейсен】',
  ];
  it_nt_summer_start_notification =
    '【Ежегодный летний сбор начинается с этой недели】';
  it_nt_summer_chara_list_start =
    'В этом году на летний сбор из команды нужны:';
  /** @param {boolean} just_you */
  get_it_nt_summer_confirm = (just_you) =>
    just_you ? 'Участвовать в летнем сборе?' : 'Поехать на летний сбор вместе?';
  it_nt_summer_chara_list_follow = 'В этом году вместе на летний сбор поедут:';
  it_nt_back_info_summer = '【Участники летнего сбора вернулись в Трейсен】';

  it_nt_moon_well_cool_down = '【Тайный источник снова действует】';
  get_it_moon_well_together = (chara) => [
    '【Вместе с ',
    chara.get_colored_name(),
    ' у стойки тайного источника】',
  ];

  /**
   * @param {string} title
   * @param {[]} chara_list
   * @param {string} item
   */
  get_it_nt_inmon_milk_slave = (title, chara_list, item) =>
    chara_list.length > 1
      ? ['【', title, ' ', ...chara_list, ' поднесли по стакану: ', item, '】']
      : ['【', title, ' ', ...chara_list, ' поднесла стакан: ', item, '】'];
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
    ' поднесла: ',
    jewel,
    '】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_it_chara_rape_in_sleeping = (chara, you) => [
    '【Сильное возбуждение разбудило ',
    you.get_colored_name(),
    ' — поверх тела ',
    chara.get_colored_name(),
    '!】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   * @returns {TextContent}
   */
  get_it_multi_rape_in_sleeping = (chara, you, supporter) => [
    '【Сильное возбуждение разбудило ',
    you.get_colored_name(),
    ' — поверх тела ',
    chara.get_colored_name(),
    ' и ',
    supporter.get_colored_name(),
    '!】',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' пытается угодить ',
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
    ' пытается угодить ',
    chara.couple_title,
    '】',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_success = (you) => [
    you.get_colored_name(),
    ' взломал(а) один уровень замка!',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_escape = (you) => [
    you.get_colored_name(),
    ' снял(а) замок и сбежал(а) из подвала!',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_sleep = (you) => [
    you.get_colored_name(),
    ' решил(а) прилечь на кровать и немного восстановить силы…',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat = (you) => [
    'Хозяин подвала оставил ',
    you.get_colored_name(),
    ' немного еды — ',
    you.get_colored_name(),
    ' решил(а) съесть чуть-чуть…',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat_uma_s = (you) => [
    you.get_colored_name(),
    ' вдруг чувствует, как колотится сердце, кровь приливает к голове, и кружится голова…',
  ];
  it_bs_strike_success = '【Внезапная атака удалась】';
  it_bs_strike_fail = '【Внезапная атака провалилась】';
  it_bs_battle_success = '【Сопротивление удалось】';
  it_bs_battle_fail = '【Сопротивление провалилось】';
  it_bs_battle_escape = '【Замок снят】';
  it_bs_battle_prison = '【Снять замок не удалось】';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_release = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' просит ',
    chara.get_colored_name(),
    ' отпустить её】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_clock = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' интересуется у ',
    chara.get_colored_name(),
    ' текущим временем】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_find_escape = (chara, you) => [
    '【',
    you.get_colored_name(),
    ' попалась ',
    chara.get_colored_name(),
    ' с поличным!】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_awake = (chara) => [
    '【',
    chara.get_colored_name(),
    ' проснулась】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_back = (chara) => ['【', chara.get_colored_name(), ' вернулась】'];
  it_bs_rescue = '【Подоспела помощь】';
  /** @param {CharaTalk} chara */
  get_it_bs_fall_asleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' от нехватки энергии провалилась в сон】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_eat = (chara) => [
    '【',
    chara.get_colored_name(),
    ' немного поела】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_sleep = (chara) => [
    '【',
    chara.get_colored_name(),
    ' улеглась в кровать и уснула】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_lure = (chara, you) => [
    '【',
    chara.get_colored_name(),
    ' раздразнила ',
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
    ' решила изнасиловать ',
    you.get_colored_name(),
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_fix = (chara) => [
    '【',
    chara.get_colored_name(),
    ' начала укреплять подвал】',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_leave = (chara) => [
    '【Бдительность ',
    chara.get_colored_name(),
    ' ушла】',
  ];
  it_bs_final_escape = '【Успешно вернулись в тренировочную】';
  /** @param {CharaTalk} chara */
  get_it_bs_downgrade_security = (chara) => [
    '【Бдительность ',
    chara.get_colored_name(),
    ' ослабла】',
  ];

  it_sell_fish_template = '【Пойманная рыба продана за %MONEY% ма-монет】';

  ed_saying_01 =
    'В тесной каморке девять на два — алые губы у бамбука и общая нежность. — Такасуги Синсаку';
  ed_saying_02 =
    'Деньги, умамусумэ и женщины — три вещи, которых парень никогда не поймёт. — Уилл Роджерс';
  ed_saying_03 = 'Без гроша и герой в тупике. — Ли Лююань';
  ed_saying_04 =
    'Каждый раб, закованный в цепи, может снять их своими руками. — Уильям Шекспир';
  ed_saying_05 =
    'Я больше не один: любимая моей жизни так близко. — Отверженные';
  ed_saying_06 = 'Когда впереди затмение — всё меркнет. — Деннис О’Келли';
  ed_saying_07 = 'Если кукушка не поёт — убей её. — Ода Нобунага';
  ed_saying_08 =
    'В расследовании я — последняя и высшая инстанция. — Шерлок Холмс';
  ed_saying_09 =
    'Мир судит людей по успеху и поражению, потому Цао и числят среди героев. — Су Ши';
  ed_saying_10 =
    'Владеть великой умамусумэ — значит владеть величайшим престолом. — Уинстон Черчилль';
  ed_saying_11 =
    'Когда человек становится по-настоящему низок, у него не остаётся радостей, кроме чужого несчастья. — Иоганн Вольфганг фон Гёте';
  ed_saying_12 =
    'Свобода — не делать что угодно, а не быть вынужденным. — Иммануил Кант';
  ed_saying_13 = 'Я — свой самый большой враг. — Наполеон Бонапарт';

  // Forward Compatibility - 向前兼容
  fc_mejiro_confirm = 'Выберите стиль Мэдзиро-сити';
  fc_mejiro_free = '«Свобода»';
  fc_mejiro_cum = '«Милосердие»';

  fc_race_item_confirm = 'Влияние игрушек на результат скачки';
  fc_race_item_yes = 'Есть влияние';
  fc_race_item_no = 'Без влияния';
};
