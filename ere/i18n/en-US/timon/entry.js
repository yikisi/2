const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/timon/entry') {
  recruit = proxy_kojo_js(require('#/i18n/en-US/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/en-US/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/en-US/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/en-US/timon/love'));
  basement = proxy_kojo_js(require('#/i18n/en-US/timon/base'));

  ero_c = proxy_kojo_js(require('#/i18n/en-US/timon/sex/ero-common'));
  ero_r = proxy_kojo_js(require('#/i18n/en-US/timon/sex/ero-rape'));
  ero_s = proxy_kojo_js(require('#/i18n/en-US/timon/sex/ero-sleep'));
  ero_o = proxy_kojo_js(require('#/i18n/en-US/timon/sex/ero-others'));

  ero_sys = proxy_kojo_js(require('#/i18n/en-US/timon/sex/system'));
  act_desc_c = proxy_kojo_js(require('#/i18n/en-US/timon/sex/act-desc-common'));
  act_desc_r = proxy_kojo_js(require('#/i18n/en-US/timon/sex/act-desc-rape'));
  act_desc_s = proxy_kojo_js(require('#/i18n/en-US/timon/sex/act-desc-sleep'));

  daily_child = proxy_kojo_js(require('#/i18n/en-US/timon/child/daily'));
  ero_child = proxy_kojo_js(require('#/i18n/en-US/timon/child/ero'));

  game_guides = proxy_kojo_js(require('#/i18n/en-US/timon/guides/game'));
  base_guides = proxy_kojo_js(require('#/i18n/en-US/timon/guides/base'));
  ending = proxy_kojo_js(require('#/i18n/en-US/timon/others/ending'));

  storage = proxy_kojo_js(require('#/i18n/en-US/timon/others/storage'));
  god_shop = proxy_kojo_js(require('#/i18n/en-US/timon/others/god-shop'));
  tachyon_shop = proxy_kojo_js(
    require('#/i18n/en-US/timon/others/tachyon-shop'),
  );
  race = proxy_kojo_js(require('#/i18n/en-US/timon/others/race'));
  others = proxy_kojo_js(require('#/i18n/en-US/timon/others/others'));
  random_events = proxy_kojo_js(require('#/i18n/en-US/timon/others/random'));
  pregnant_slave = proxy_kojo_js(
    require('#/i18n/en-US/timon/others/pregnant-slave'),
  );
  cum = proxy_kojo_js(require('#/i18n/en-US/timon/mejiro/cum'));
  /** @type {KojoFile} */
  cum_events = require('#/i18n/en-US/timon/mejiro/cum-events.kojo');

  strange = 'Stranger';
  strange_desc = (debuff) =>
    `Still barely acquainted... Training effectiveness -${debuff}%. Improve your relationship, or talk it over with the assigned trainer, to clear this status.`;

  report_tenn_spr = 'The king of spring long distance is born!';
  report_tenn_sho = (uma) => [
    'And so, the Autumn Monster of Fuchu falls to ',
    uma,
    '!',
  ];
  report_invincible_g1 = (uma) => [
    'The strong stay strong! The strong stay strong! ',
    uma,
    ' sweeps a G1 without a scratch!',
  ];
  report_invincible_three_crowns =
    'An undefeated Triple Crown! An immortal record in Umamusume history!!!';

  npc_select = 'Who will you talk to?';
  npc_talk = 'Chat';
  npc_sex = 'Proposition';
  npc_out = 'Date';
  get_npc_celebration = (celebration) => `Celebrate ${celebration}`;
  npc_bye = 'Goodbye';

  npc_recruit_in_school = '"Let\'s work hard together!" (Recruit)';
  npc_recruit_out_school = '"Come help me out!" (Recruit)';

  npc_accept_task = 'Accept quest';
  npc_retry_task = 'Try again';

  bt_god_love_event_fuck_me = 'Bear a divine child yourself';
  bt_god_love_event_preg_me = 'Turn the child in your womb divine';

  // it = information timon
  /** @param {CharaTalk} chara */
  get_it_office_study = (chara) => [
    '[Tutored ',
    chara.get_colored_name(),
    ' in studying]',
  ];
  /** @param {CharaTalk} chara */
  get_it_office_prepare = (chara) => [
    '[Helped ',
    chara.get_colored_name(),
    ' with pre-race prep]',
  ];
  /** @param {CharaTalk} chara */
  get_it_talk = (chara) => [
    '[Struck up a chat with ',
    chara.get_colored_name(),
    ']',
  ];
  /** @param {CharaTalk} chara */
  get_it_office_gift = (chara) => [
    '[Gave ',
    chara.get_colored_name(),
    ' a little gift]',
  ];
  it_self_cook = '[Cooked and had a meal alone]';
  /** @param {CharaTalk} chara */
  get_it_office_cook = (chara) => [
    '[Cooked and had a meal with ',
    chara.get_colored_name(),
    ']',
  ];
  it_self_rest = '[Rested alone]';
  /** @param {CharaTalk} chara */
  get_it_office_rest = (chara) => [
    '[Rested with ',
    chara.get_colored_name(),
    ']',
  ];
  it_self_game = '[Played games alone]';
  /** @param {CharaTalk} chara */
  get_it_office_game = (chara) => [
    '[Played games with ',
    chara.get_colored_name(),
    ']',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} celebration
   */
  get_it_celebration = (chara, celebration) => [
    '[Celebrated ',
    celebration,
    ' with ',
    chara.get_colored_name(),
    ']',
  ];
  /** @param {CharaTalk} chara */
  get_it_birthday = (chara) => [
    '[Wished ',
    chara.get_colored_name(),
    ' a happy birthday]',
  ];
  /** @param {CharaTalk} chara */
  get_it_check_love = (chara) => [
    chara.get_colored_name(),
    ' seems ready to reassess your relationship...',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_basement_me = (chara, you) => [
    'Hearing ',
    you.get_colored_name(),
    "'s request, ",
    chara.get_colored_name(),
    ' seems tempted...',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_home_sex = (chara, you) => [
    chara.get_colored_name(),
    ' and ',
    you.get_colored_name(),
    ' arranged to meet at home tonight...',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_arrive_location = (vehicle, location) => [
    '[',
    vehicle,
    ' arrived at ',
    location,
    ']',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_goto_location = (chara, vehicle, location) => [
    '[Headed to ',
    location,
    ' with ',
    chara.get_colored_name(),
    ' via ',
    vehicle,
    ']',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_self_goto_location = (vehicle, location) => [
    '[Headed alone to ',
    location,
    ' via ',
    vehicle,
    ']',
  ];
  it_back_office = '[Turned back]';
  it_force_back_office = '[No one seems to be here... Turned back]';
  /** @param {CharaTalk} chara */
  get_it_npc_sleep = (chara) => [
    '[',
    chara.get_colored_name(),
    ' is exhausted and is heading back to rest]',
  ];

  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_in_recruit = (you, uma) => [
    '[Spotted a few ',
    uma,
    ' on the training grounds. Who caught ',
    you.get_colored_name(),
    "'s eye?]",
  ];
  /** @param {CharaTalk} chara */
  get_it_chara_not_in_recruit = (chara) => [
    '[',
    chara.get_colored_name(),
    ' does not seem to be on the training grounds]',
  ];
  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_recruit_disabled = (you, uma) => [
    '[',
    you.get_colored_name(),
    ' already has enough trainees. Other ',
    uma,
    ' will not accept recruitment from ',
    you.get_colored_name(),
    ']',
  ];
  /** @param {string} uma */
  get_it_no_chara_in_recruit = (uma) => [
    '[No standout ',
    uma,
    ' on the training grounds]',
  ];

  rec_kojo_mark_border = ['[', ']'];
  rec_km_r = 'R';
  rec_km_d = 'D';
  rec_km_ed = 'E';
  rec_km_l = 'L';
  rec_km_er = 'X';
  rec_km_b = 'B';
  rec_km_i = 'I';

  /** @param {CharaTalk} chara */
  get_it_heal_yandere = (chara) => [
    '[',
    chara.get_colored_name(),
    ' has grown gentle again]',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_invest = (income) => [
    '[Received investment returns of ',
    income,
    ' UmaCoin]',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_annal_bonus = (income) => [
    '[Received trainer pay and year-end bonus from the academy: ',
    income,
    ' UmaCoin]',
  ];
  /** @param {PrintedSpan} income */
  get_it_income_salary = (income) => [
    '[Received trainer pay from the academy: ',
    income,
    ' UmaCoin]',
  ];
  /**
   * @param {CharaTalk} you
   * @param {[]} chara_list
   * @returns {TextContent}
   */
  get_it_punish_avoid_race = (you, chara_list) => [
    '[Due to race avoidance by ',
    ...chara_list,
    ', public opinion of ',
    you.get_colored_name(),
    ' has fallen!]',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_reward = (you) => [
    '[',
    you.get_colored_name(),
    ' fulfilled the duty. Standing as a breeding bag has risen]',
  ];
  /** @param {CharaTalk} you */
  get_it_pregnant_slave_punish = (you) => [
    '[For impregnating an Umamusume master, ',
    you.get_colored_name(),
    ' failed as a breeding bag and was punished by Tracen!]',
  ];
  it_pregnant_trainer_punish =
    "[A scandal over an active trainer's illegitimate child stirs public controversy]";
  it_pregnant_uma_punish =
    "[A scandal over an active Umamusume's illegitimate child sets society abuzz]";
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} teacher
   * @param {PrintedSpan} train
   */
  get_it_train_take_care = (chara, teacher, train) => [
    '[Under ',
    teacher.get_colored_name(),
    "'s watch, ",
    chara.get_colored_name(),
    ' did ',
    train,
    ' training]',
  ];
  /**
   * @param {[]} chara_list
   * @param {PrintedSpan} train
   */
  get_it_train_together = (chara_list, train) => [
    '[',
    ...chara_list,
    ' did self-directed ',
    train,
    ' training together]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} train
   */
  get_it_train_lonely = (chara, train) => [
    '[',
    chara.get_colored_name(),
    ' did self-directed ',
    train,
    ' training]',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {string} item lactation medicine
   * @param {string} talent lactation trait name
   */
  get_it_nt_get_milk = (chara, item, talent) => [
    '[Under the influence of ',
    item,
    ', ',
    chara.get_colored_name(),
    ' became ',
    talent,
    '!]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status fat status name
   */
  get_it_nt_become_fat = (chara, status) => [
    '[',
    chara.get_colored_name(),
    ' is now ',
    status,
    '!]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status fat status name
   */
  get_it_nt_not_be_fat = (chara, status) => [
    '[',
    chara.get_colored_name(),
    "'s weight has returned to normal]",
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status migraine status name
   */
  get_it_nt_become_headache = (chara, status) => [
    '[',
    chara.get_colored_name(),
    ' came down with ',
    status,
    '!]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} status migraine status name
   */
  get_it_nt_not_be_headache = (chara, status) => [
    '[',
    chara.get_colored_name(),
    "'s ",
    status,
    ' has healed]',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_have_penis = (chara) => [
    '[',
    chara.get_colored_name(),
    "'s clitoris has grown into a cock!]",
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_nt_love_unlimit = (chara, you) => [
    '[The suppressant given to ',
    chara.get_colored_name(),
    ' has worn off... Love for ',
    you.get_colored_name(),
    ' surges through ',
    chara.get_colored_name(),
    ']',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} up_info
   */
  get_it_nt_train_level_up = (chara, up_info) => [
    '[',
    chara.get_colored_name(),
    "'s ",
    up_info,
    ']',
  ];
  /** @param {CharaTalk} chara */
  get_it_nt_get_jewel = (chara) => [
    '[',
    chara.get_colored_name(),
    ' inherited a new factor!]',
  ];
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} father
   */
  get_it_hb_info = (mother, father) => [
    '[',
    mother.get_colored_name(),
    ' gave birth to a healthy child who faintly resembles ',
    father.get_colored_name(),
    '!]',
  ];
  it_hb_let_mom_name = 'Let the mother name the child';
  it_hb_let_dad_name = 'Let the father name the child';
  it_hb_you_name = 'Name the child yourself';
  it_hb_name_tip = 'What name will you give the child?';
  /**
   * @param {CharaTalk} mother
   * @param {CharaTalk} child
   */
  get_it_name_result = (mother, child) => [
    mother.get_colored_name(),
    "'s child is named ",
    child.get_colored_name(),
  ];
  it_hb_rename = 'Rename the child?';
  /** @param {PrintedSpan} celebration */
  get_it_nt_celebration_notification = (celebration) => [
    '[This week has ',
    celebration,
    '. Your team may have plans that need your attention]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} race
   */
  get_it_nt_race_notification = (chara, race) => [
    '[This week: ',
    chara.get_colored_name(),
    ' is entered in ',
    race,
    ']',
  ];
  /** @param {PrintedSpan} race */
  get_it_nt_foreign_race_notification = (race) => [
    '[',
    race,
    ' is coming up. Entrants are setting out on their expedition]',
  ];
  it_nt_race_contestants = 'The following team members entered this race:';
  /**
   * @param {PrintedSpan} race
   * @param {boolean} you_in_race whether the player is racing
   */
  get_it_nt_to_foreign_confirm = (race, you_in_race) =>
    you_in_race
      ? ['Enter ', race, '?']
      : ['Accompany the entry for ', race, '?'];
  it_nt_foreign_avoid_notification =
    'Their absence has the rumor mill buzzing:';
  it_nt_back_info = '[Returned to Tracen]';
  /** @param {PrintedSpan} race */
  get_it_nt_back_info_from_foreign = (race) => [
    '[The expedition party for ',
    race,
    ' has returned to Tracen]',
  ];
  it_nt_summer_start_notification = '[The yearly Summer Camp begins this week]';
  it_nt_summer_chara_list_start =
    'These team members need to attend Summer Camp this year:';
  /** @param {boolean} just_you */
  get_it_nt_summer_confirm = (just_you) =>
    just_you ? 'Attend Summer Camp?' : 'Tag along for Summer Camp?';
  it_nt_summer_chara_list_follow =
    'These people will tag along for Summer Camp this year:';
  it_nt_back_info_summer =
    '[Those who left for Summer Camp have returned to Tracen]';

  /**
   * @param {string} title
   * @param {[]} chara_list
   * @param {string} item
   */
  get_it_nt_inmon_milk_slave = (title, chara_list, item) =>
    chara_list.length > 1
      ? ['[', title, ' ', ...chara_list, ' each offered a cup of ', item, ']']
      : ['[', title, ' ', ...chara_list, ' offered a cup of ', item, ']'];
  /**
   * @param {string} title
   * @param {CharaTalk} chara
   * @param {PrintedSpan} jewel
   */
  get_it_nt_inmon_inhert_slave = (title, chara, jewel) => [
    '[',
    title,
    ' ',
    chara.get_colored_name(),
    ' offered ',
    jewel,
    ']',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_it_chara_rape_in_sleeping = (chara, you) => [
    '[Intense stimulation jolts ',
    you.get_colored_name(),
    ' awake to find ',
    chara.get_colored_name(),
    ' straddling the body!]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   * @returns {TextContent}
   */
  get_it_multi_rape_in_sleeping = (chara, you, supporter) => [
    '[Intense stimulation jolts ',
    you.get_colored_name(),
    ' awake to find ',
    chara.get_colored_name(),
    ' and ',
    supporter.get_colored_name(),
    ' straddling the body!]',
  ];

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter = (chara, you) => [
    '[',
    you.get_colored_name(),
    ' tried to curry favor with ',
    chara.get_colored_name(),
    ']',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_flatter_masters = (chara, you) => [
    '[',
    you.get_colored_name(),
    ' tried to curry favor with ',
    chara.couple_title,
    ']',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_success = (you) => [
    you.get_colored_name(),
    ' cracked one layer of the lock!',
  ];
  /** @param {CharaTalk} you */
  get_it_unlock_escape = (you) => [
    you.get_colored_name(),
    ' disabled the lock and escaped the basement!',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_sleep = (you) => [
    you.get_colored_name(),
    ' decides to lie down for a short nap to recover...',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat = (you) => [
    'The basement master left some food for ',
    you.get_colored_name(),
    '. ',
    you.get_colored_name(),
    ' decides to eat a little...',
  ];
  /** @param {CharaTalk} you */
  get_it_bs_eat_uma_s = (you) => [
    you.get_colored_name(),
    ' suddenly feels a racing heartbeat, a rush of heat, and a fierce wave of dizziness...',
  ];
  it_bs_strike_success = '[Ambush succeeded]';
  it_bs_strike_fail = '[Ambush failed]';
  it_bs_battle_success = '[Resistance succeeded]';
  it_bs_battle_fail = '[Resistance failed]';
  it_bs_battle_escape = '[Lock disarmed]';
  it_bs_battle_prison = '[Failed to disarm the lock]';
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_release = (chara, you) => [
    '[',
    you.get_colored_name(),
    ' begged ',
    chara.get_colored_name(),
    ' for release]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_clock = (chara, you) => [
    '[',
    you.get_colored_name(),
    ' asked ',
    chara.get_colored_name(),
    ' what time it is]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_find_escape = (chara, you) => [
    '[',
    you.get_colored_name(),
    ' got caught red-handed by ',
    chara.get_colored_name(),
    '!]',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_awake = (chara) => ['[', chara.get_colored_name(), ' woke up]'];
  /** @param {CharaTalk} chara */
  get_it_bs_back = (chara) => ['[', chara.get_colored_name(), ' came back]'];
  it_bs_rescue = '[Rescue arrived]';
  /** @param {CharaTalk} chara */
  get_it_bs_fall_asleep = (chara) => [
    '[',
    chara.get_colored_name(),
    ' collapsed from exhaustion]',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_eat = (chara) => [
    '[',
    chara.get_colored_name(),
    ' ate some food]',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_sleep = (chara) => [
    '[',
    chara.get_colored_name(),
    ' lay down and fell asleep]',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_lure = (chara, you) => [
    '[',
    chara.get_colored_name(),
    ' teased ',
    you.get_colored_name(),
    ']',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_bs_rape = (chara, you) => [
    '[',
    chara.get_colored_name(),
    ' decided to rape ',
    you.get_colored_name(),
    ']',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_fix = (chara) => [
    '[',
    chara.get_colored_name(),
    ' began reinforcing the basement]',
  ];
  /** @param {CharaTalk} chara */
  get_it_bs_chara_leave = (chara) => ['[', chara.get_colored_name(), ' left]'];
  it_bs_final_escape = '[Successfully returned to the training room]';
  /** @param {CharaTalk} chara */
  get_it_bs_downgrade_security = (chara) => [
    '[',
    chara.get_colored_name(),
    "'s guard has slackened]",
  ];

  ed_saying_01 =
    'In a shabby room nine feet by two, red lips lean to bamboo, and love is shared. — Takasugi Shinsaku';
  ed_saying_02 =
    'Money, Umamusume, and women—boys never understand those three. — Will RoXers';
  ed_saying_03 = 'Even a hero can be stopped by a single coin. — Li Luyuan';
  ed_saying_04 =
    'Every slave in chains can cast them off by his own hand. — William Shakespeare';
  ed_saying_05 =
    'I am no longer alone; the love of my life is so near. — Les Miserables';
  ed_saying_06 = "Eclipse first, and the rest nowhere. — Dennis O'Kelly";
  ed_saying_07 = 'If the cuckoo will not sing, kill it. — Oda Nobunaga';
  ed_saying_08 =
    'In detection, I am the court of last resort. — Sherlock Holmes';
  ed_saying_09 =
    'The world judges by victory and defeat; thus Cao Cao stands amidst the heroes. — Su Shi';
  ed_saying_10 =
    'To own a great Umamusume is to hold the greatest throne. — Winston ○hurchill';
  ed_saying_11 =
    "When people sink truly low, their only remaining pleasure is others' misfortune. — Johann Wolfgang von Goethe";
  ed_saying_12 =
    "Freedom is not doing as one pleases, but not being forced against one's will. — Immanuel Kant";
  ed_saying_13 = 'I am my own greatest enemy. — Napoleon Bonaparte';

  // Forward Compatibility
  fc_mejiro_confirm = 'Choose a Mejiro City style';
  fc_mejiro_free = '"Free"';
  fc_mejiro_cum = '"Merciful"';

  fc_race_item_confirm = 'Choose how toys affect race performance';
  fc_race_item_yes = 'Affects races';
  fc_race_item_no = 'No effect';
};
