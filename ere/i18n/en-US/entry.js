/**
 * @author Katze (translator)
 */
module.exports = class extends require('#/i18n/zh-CN/entry') {
  language = 'English';

  speed = 'Speed';
  endurance = 'Stamina';
  strength = 'Power';
  toughness = 'Guts';
  intelligence = 'Wit';

  hp = 'Energy';
  tp = 'Focus';

  abbr_hp = 'EN';
  abbr_tp = 'FO';

  ui_mot = 'Mood';
  mot_0 = 'Awful';
  mot_1 = 'Poor';
  mot_2 = 'Normal';
  mot_3 = 'Good';
  mot_4 = 'Great';

  a_g_grass = 'Turf';
  a_g_dirt = 'Dirt';
  a_d_short = 'Sprint';
  a_d_mile = 'Mile';
  a_d_medium = 'Medium';
  a_d_long = 'Long';
  a_s_nige = 'Front Runner';
  a_s_senko = 'Pace Chaser';
  a_s_sashi = 'Late Surger';
  a_s_okimi = 'End Closer';

  adapt_template = '%ADAPT% Aptitude';

  edu_0 = 'Junior Year';
  edu_1 = 'Classic Year';
  edu_2 = 'Senior Year';
  pre_edu = 'Awaiting Enrollment';

  a_edu_0 = 'Junior';
  a_edu_1 = 'Classic';
  a_edu_2 = 'Senior';

  oot_0 = 'Trained';
  oot_1 = 'Hall of Fame';

  honour_m = 'Disqualified';
  honour_0 = 'Rookie';
  honour_1 = 'Veteran';
  honour_2 = 'Mainstay';
  honour_3 = 'Elite';
  honour_4 = 'Legend';

  title_0 = 'Trainer';
  title_1 = 'Umamusume';
  title_2 = 'Sex Slave';
  title_3 = 'Womb';

  ui_rl_mark_with_value = '%MARK% (%VAL%)';

  ui_love_icon = '❤️';
  ui_love = 'Infatuation';
  ui_love_template = 'Infatuation: %LOVEINFO%';
  get_ui_colored_love = (love) => ['Infatuation: ', love];
  love_u = '?';
  love_0 = 'Neutral';
  love_1 = 'Faint';
  love_2 = 'Ambiguous';
  love_3 = 'Desire';
  love_4 = 'Passionate';
  love_5 = 'Soulmates';
  love_6 = 'Dependence';

  ui_relation_icon = '🤝';
  ui_relation = 'Fondness';
  ui_relation_template = 'Fondness: %RELATIONINFO%';
  get_ui_colored_relation = (relation) => ['Fondness: ', relation];
  relation_u = '?';
  relation_0 = 'Disappointed';
  relation_1 = 'Suspicious';
  relation_2 = 'Cold';
  relation_3 = 'Cordial';
  relation_4 = 'Warm';
  relation_5 = 'Fond';
  relation_6 = 'Close';
  relation_7 = 'Unwavering';

  celebration_template = '[%CELEBRATION%]';
  cl_new_year = 'New Year';
  cl_valentine = "Valentine's Day";
  cl_palace = 'Hall of Fame Week';
  cl_fans = 'Fan Appreciation';
  cl_temple_fair = 'Temple Fair';
  cl_halloween = 'Halloween';
  cl_christmas = 'Christmas';

  tt_disclaimer = 'Disclaimer';
  tt_disclaimer_content = [
    '1. This game exists purely for the developer to have fun and practice coding. It exists because the developer has low tastes and vulgar thoughts, and produces no economic profit or commercial motive.',
    { isBr: true },
    '2. This game contains heavy R18 erotic content. Content that may appear includes: group sex, training, light SM, non-consensual sex, incest, and more. Content that will not appear includes: forced NTR, heavy SM, gore, R18G, and more.',
    { isBr: true },
    '3. In design and content, this game stitches together a great deal of era and other works. It is only suitable for era series players or text-eroge fans, not for casual players, and is strictly forbidden for minors.',
    { isBr: true },
    '4. Assets used in this game include developer-made materials, materials collected online, and materials provided by collaborators. The developer and collaborators come from different worlds, races, countries, and peoples, and have no economic relationship with one another.',
    { isBr: true },
    '5. The only official release location for this game is ',
    { content: 'the host repository', url: 'https://gitgud.io/umaera/erauma' },
    '; due to the nature of the game, it is forbidden to display or distribute it in any public place accessible to minors, and it is further forbidden for anyone to use this game in any commercial activity (sale/giveaway, etc.) or public event (livestreams, etc.).',
    { isBr: true },
    '6. Provided the game source is clearly credited or retained, no commercial purpose or economic benefit is involved, and the same Disclaimer, ',
    {
      content: 'GPL 2.0 only open-source license',
      fontWeight: 'bold',
      url: 'https://gnu.ac.cn/licenses/old-licenses/gpl-2.0.html',
    },
    ' and ',
    {
      content: 'Dialogue Creation License',
      fontWeight: 'bold',
      url: 'https://gitgud.io/umaera/erauma/-/wikis/LICENSE',
    },
    ' are observed, others may modify or create derivative works based on this game (called modded versions). This authorization is granted directly to all players of this game without needing explicit consent from the developer, but modded versions must be clearly labeled as such on the title and title screen and clearly distinguished from the original.',
    { isBr: true },
    '7. Interpretation of this disclaimer belongs to the developer, and its contents may change with version updates. Always refer to the latest version.',
    { isBr: true },
    '8. With that many buff layers stacked, anyone with bold ideas should close the window now and delete the game. If you do not delete it, you are assumed to understand and follow this disclaimer. Any accidents or legal liability arising from non-compliance have nothing to do with the developer.',
  ];
  tt_disclaimer_accept =
    'I read and understand all 8 points. I take responsibility for myself. I will not delete it. I want to play.';
  tt_disclaimer_reject = "Nonsense! I'm not gonna play!";
  tt_birthday_notify = (birth_list) => [
    'Today is the birthday of ',
    ...birth_list,
    '',
  ];
  tt_version_template = 'Version: v%VERSION%';
  tt_version_resource = 'Compatible resource pack version: ';
  tt_new_game = 'New Game';
  tt_load_game = 'Load Save';
  tt_achieve = 'Game Achievements';
  tt_chara_achieve = 'Character Achievements';
  tt_help = 'Help';
  tt_copyrights = 'Credits';
  tt_links = 'Related Links:';
  tt_link_release = 'EraUma Release Page';
  tt_link_desk_engine = 'EraElectron Engine (PC) Release Page';
  tt_link_app_engine = 'ere.app Engine (Android) Release Page';
  tt_link_community = 'ERA Tracen Academy (Discord)';
  tt_link_wiki = 'Wiki (usage / settings / dialogue writing guide...)';

  cr_title_copyrights = 'Credits';
  cr_header_susai = 'Producer';
  cr_header_architecture = 'Architecture';
  cr_header_engine = 'Engine';
  cr_header_developer = 'Development';
  cr_header_art = 'Art';
  cr_header_translate_reference = 'Translation Reference';
  cr_header_tr_repo = "Trainers' Legend G Translation Repo";
  cr_header_tr_wiki = 'Uma Musume Chinese Wiki';
  cr_header_kojo = 'Dialogue';
  cr_kojo_tip = 'Sorted by lowest assigned character ID';
  cr_thanks_detail = 'Detailed Credits';
  cr_kojo_suffix_template = '(%SUFFIX%)';
  cr_kojo_suffix_temporary = 'Temporary';
  cr_kojo_suffix_part = 'Partial';
  cr_timon_recruit = 'Recruitment Text';
  cr_timon_daily = 'Daily Text';
  cr_timon_edu = 'Career Text';
  cr_timon_love = 'Infatuation Text';
  cr_timon_ero = 'Training Text';
  cr_timon_basement = 'Basement Text';
  cr_timon_special = 'Special Characters (Temporary)';
  cr_timon_mejiro = "mejiro's Call";
  cr_timon_random = 'Random Events';
  cr_timon_guide = 'Beginner Tutorial';
  cr_timon_guide_b = 'Basement Tutorial';
  cr_header_image = 'Training Sprites';
  cr_image_common = 'Generic Sprites';
  cr_image_gif = 'Command Animations';
  cr_header_lib_en_us = 'English Localization';
  cr_header_lib_ru_ru = 'Russian Localization';
  cr_header_lib_ja_jp = 'Japanese Localization';
  cr_header_kojo_make = 'Kojo Production';
  cr_header_test = 'Testing Feedback';
  cr_header_community_management = 'Community Management';
  cr_header_community_assistant = 'Community Contributions';
  cr_header_special_thanks = 'Special Thanks (lol)';
  cr_umamusme_pretty_derby = 'Uma Musume Pretty Derby';

  tk_speak_border = ['「', '」'];
  tk_think_border = ['(', ')'];
  tk_past_border = ['(', ')'];
  tk_unknown = '???';

  nt_ask = 'View the related notes?';
  nt_no = 'Check them later from the title screen';

  ui_comma = ', ';
  ui_comma2 = ', ';
  ui_period = '.';
  ui_exclamation = '!';
  ui_conjunction = ' and ';
  ui_ellipses = '...';
  ui_semicolon = '; ';
  ui_back = 'Back';
  ui_back_title = 'Back to Title';
  ui_achieve_title = 'New Achievement!';
  ui_on = 'On';
  ui_off = 'Off';
  ui_yes = 'Confirm';
  ui_no = 'Cancel';
  ui_yes2 = 'Yes';
  ui_no2 = 'No';
  ui_reset = 'Reset';
  ui_skip = 'Skip';
  ui_nothing = 'None';
  ui_money_template = '%MONEY% UmaCoin';
  ui_get_date = (year, month, week) => [year, ' / ', month, ' Week ', week, ''];
  ui_date_without_year_template = 'Month %MONTH% Week %WEEK%';
  ui_month_template = '%MONTH% months';
  ui_too_long_template =
    '(Display width cannot exceed %WIDTH% full-width characters or %WIDTH*2% half-width characters. Please re-enter!)';
  ui_et_prev = 'Previous';
  ui_et_next = 'Next';
  ui_pg_prev = 'Previous Page';
  ui_pg_next = 'Next Page';
  ui_ch_prev = 'Previous';
  ui_ch_next = 'Next';
  ui_pagination_template = 'Page %CURR% / %TOTAL%';
  ui_default = 'Default';
  ui_game_over = 'GAME OVER';
  ui_invalid_value = '-';
  ui_unknown_value = '?';
  ui_all = 'All';
  ui_increase = 'raised';
  ui_decrease = 'lowered';
  ui_end = 'End';
  ui_cancel = 'Never mind';
  ui_signature_result = 'Signature Wins';
  ui_agree = 'Agree';
  ui_disagree = 'Refuse';

  get_ui_reward_header = (chara) => [chara, ' gained the following changes:'];
  get_ui_change_attr = (attr, change_mark, change_val) => [
    attr,
    ' ',
    change_mark,
    ' by ',
    change_val,
  ];
  get_ui_add_skills = (chara, skills) => [chara, ' learned ', ...skills];
  ui_get_pt_template = 'Gained %PT% skill points!';
  ui_train_level_up_template = '%ATTR% Training got better!';
  get_ui_change_motivation = (chara, motivation) => [
    chara,
    "'s Motivation is now ",
    motivation,
  ];
  get_ui_change_relation = (chara, target, change_mark, val, result) => [
    chara,
    "'s Fondness toward ",
    target,
    ' ',
    change_mark,
    ' by ',
    val,
    '! Now: ',
    result,
  ];
  get_ui_find_betrayed = (chara, you) => [
    you,
    "'s infidelity enraged ",
    chara,
    '...',
  ];
  get_ui_change_love = (chara, you, change_mark, val, result) => [
    chara,
    "'s Infatuation for ",
    you,
    ' ',
    change_mark,
    ' by ',
    val,
    '! Now: ',
    result,
  ];
  get_trigger_love_event = (chara) => [
    '(Your relationship with ',
    chara,
    ' seems ready to go further...)',
  ];
  ui_love_level_up = 'There is no going back...';
  get_ui_hurt_uma = (chara) => ['[', chara, ' is injured!]'];
  get_ui_hurt_uma_plus = (chara) => ['[', chara, "'s injury got worse!]"];
  get_ui_hurt_tired_uma = (chara) => [
    '[',
    chara,
    ' took a worse injury while exhausted!]',
  ];
  get_ui_add_titles = (chara) => ['[', chara, ' earned a new title!]'];
  get_ui_ignore_event_punish = (chara, you) => [
    '[Because ',
    you,
    ' neglected them, ',
    chara,
    ' is a little disappointed]',
  ];
  get_ui_ignore_event_punish2 = (chara, you) => [
    '[Because ',
    you,
    ' neglected them, ',
    chara,
    ' is deeply disappointed]',
  ];

  ui_time_flow = '[Time begins to flow]';
  ui_new_week = '[A new week begins]';

  ui_hd_no_save = 'No save loaded';
  get_ui_hd_location = (location) => ['At ', location];
  get_ui_hd_honour = (honour) => [honour, ' Renown'];
  ui_hd_income_template = '(%INCOME%)';
  get_ui_hd_money = (money, income = []) => [money, ...income, ' UmaCoin'];
  ui_billing_title_start = 'Bill: ';
  ui_billing_invest_template = '%INCOME% (%CHARA% investment income)';
  ui_billing_bonus_template = '%INCOME% (monthly pay + year-end bonus)';
  ui_billing_salary_template = '%INCOME% (monthly pay)';
  ui_billing_borrow_template = '%INCOME% (%CHARA%%MAIN% %TIMER% weeks left)';
  ui_billing_borrow_main = '· primary';
  ui_billing_slave_template = '%INCOME% (%CHARA% tribute)';
  ui_hd_current_race = 'This Week Races';
  ui_hd_races = 'View All';

  ui_no_target = 'No interaction target selected';
  get_ui_cur_chara_info = (
    title,
    name,
    palace,
    growth,
    motivation,
    edu,
    race,
  ) => [
    'Current character: ',
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
  get_ui_motivation = (motivation) => [this.ui_mot, '·', motivation];
  ui_edu_template = '%EDU%';
  get_ui_race_indicator = (race, delta) => [
    '(',
    delta,
    ' weeks until ',
    race,
    ')',
  ];
  get_ui_curr_race_indicator = (race) => ['(Race this week: ', race, ')'];

  ui_select_hd_info_template = 'Choose a character to inspect (%COUNT%)';
  ui_select_hd_interact_template =
    'Choose a character to interact with (%COUNT%)';
  ui_select_hd_name = 'Name';
  ui_select_hd_score = 'Rating';
  ui_select_hd_races = 'Record';
  ui_select_hd_edu = 'Career';
  ui_select_hd_playthrough = 'Run';
  ui_select_clear = 'Clear Interaction';
  ui_select_no_character = 'No other members on the team';
  ui_select_event_filter_tooltip =
    '* Characters with red select buttons have special events this week';
  ui_select_event_filter_template =
    'Only show characters with special events [%STATUS%]';
  ui_select_order_marks = ['▼', '▲'];

  ui_change_image = 'Switch Sprite';
  ui_show_team = 'View Team List';
  ui_train = 'Train';
  ui_self_train = 'Self-Training';
  ui_goto_race = 'Enter Race';
  ui_register_race = 'Register for Race';
  ui_goto_sex = 'Invite to Bed';
  ui_next_turn = 'Rest Until Next Week';
  ui_office_study = 'Study Guidance';
  ui_office_prepare = 'Race Prep';
  ui_talk = 'Chat';
  ui_office_gift = 'Give Gift';
  ui_self_cook = 'Extra Meal';
  ui_office_cook = 'Eat Together';
  ui_self_rest = 'Nap';
  ui_office_rest = 'Nap Together';
  ui_self_game = 'Play Games';
  ui_office_game = 'Play Games Together';
  ui_change_take_care = 'Switch Care Target';
  ui_ask_take_care = 'Request Care';
  ui_self_update = 'Improve Own Sex Skills';
  ui_ero_update = 'Improve Character Sex Skills';
  ui_borrow_money = 'Borrow Money';
  ui_celebration_template = 'Celebrate %CELEBRATION% Together';
  ui_birthday = 'Celebrate Birthday';
  ui_check_love = 'Retrigger Infatuation Event';
  ui_basement_me = 'Beg for Mad Love';
  ui_recruit = 'Go to Training Grounds (Recruit)';
  ui_trainer_office = 'Go to Trainer Office';
  ui_clinic = 'Go to Infirmary';
  ui_god_together = 'Visit Three Goddess Statue Together';
  ui_god_alone = 'Go to Three Goddess Statue';
  ui_atrium_together = 'Visit Atrium Together';
  ui_atrium_alone = 'Go to Atrium';
  ui_rooftop_together = 'Visit Rooftop Together';
  ui_rooftop_alone = 'Go to Rooftop';
  ui_chairman_office = 'Go to Chair Office';
  ui_visitors = 'Go to Visitor Lounge';
  ui_school_shop = 'Go to School Shop';
  ui_out_together = 'Go Out Together';
  ui_out_alone = 'Go Out';
  ui_info_page = 'Character Info';
  ui_storage = 'Inventory';
  ui_races = 'Race Info';
  ui_office_filter_template = 'Hide office activities [%STATUS%]';
  ui_out_filter_template = 'Hide outing activities [%STATUS%]';
  ui_save_game = 'Save Story';
  ui_load_game = 'Load Save';

  ui_foreign_study_template = 'Study %LAN%';
  ui_foreign_rest = 'Rest and Recover';
  ui_foreign_train = 'Aptitude Training';
  ui_foreign_travel = 'Sightseeing';

  ui_act_event_tip = 'This action can trigger an event';
  ui_loc_npc_tip_template = '%COUNT% people here';
  ui_loc_back_tip = 'Returning can trigger an event';
  ui_loc_event_tip = 'This location can trigger an event';
  ui_loc_celebration_tip_template = '%COUNT% people have festival events here';

  ui_cost_chara_stamina_tip_template =
    'Character Energy too low (need: %STAMINA%)';
  ui_cost_chara_time_tip_template = 'Character Focus too low (need: %TIME%)';
  ui_cost_you_stamina_tip_template = 'Energy too low (need: %STAMINA%)';
  ui_cost_you_time_tip_template = 'Focus too low (need: %TIME%)';
  ui_cost_money_tip_template = 'Not enough UmaCoin (need: %MONEY%)';
  ui_foreign_lan_max_tip_template = '%LAN% is already highly fluent';
  ui_foreign_rest_max_tip = 'Body already restored to full health';
  ui_foreign_train_max_tip = 'Fully adapted to the track';
  ui_celebration_remote_tip = 'Cannot celebrate remotely';

  ui_rec_chara_info = 'Personal Info';
  ui_rec_edu_info = 'Career Preview';
  ui_rec_exit = 'Leave';

  ui_rec_c_info_template = "%NAME%'s Personal Info";
  ui_rec_c_body_template = "%NAME%'s Body Measurements";
  ui_rec_c_talent_template = "%NAME%'s Personality Traits";
  ui_rec_c_image_template = "%NAME%'s Training Sprites";
  ui_rec_e_train_template = "%NAME%'s Training Bonuses";
  ui_rec_e_train_buff_template = '%ATTR%: +%BUFF%%';
  ui_rec_e_adapt_template = "%NAME%'s Running Aptitudes";
  ui_rec_e_skill_template = "%NAME%'s Race Skills";
  ui_rec_e_aim_template = "%NAME%'s Career Goals";
  ui_rec_e_title_template = "%NAME%'s Exclusive Titles";
  ui_rec_e_skill_init = 'Initial: ';
  ui_rec_e_skill_init_pt = 'Skill Points +680';
  ui_rec_e_skill_classic = 'Classic Year unlock: ';
  ui_rec_e_skill_after_pt = 'Skill Points +400';
  ui_rec_e_skill_senior = 'Senior Year unlock: ';

  ui_train_base = 'Base Stats';
  ui_train_score = 'Rating';
  ui_train_pt = 'Skill Points';
  ui_train_race = 'Race Ability';
  ui_train_adapt_track = 'Surface Aptitude';
  ui_train_adapt_dis = 'Distance Aptitude';
  ui_train_adapt_style = 'Style Aptitude';
  ui_train_adapt_ui_conjunction = '·';
  ui_train_learnt_skills = 'Learned Skills';
  ui_train_learn_skill = 'Learn Skill';
  ui_train_reset_skill = 'Reset Skills';
  ui_train_with_s_rate_template =
    '%ATTR% Training Lv.%LEVEL%\nSuccess Rate: %SUCCESS%%';
  ui_train_reset_skill_confirm = 'Spend 100 skill points to reset skills?';
  ui_train_skill_header_template = 'Choose a skill for %NAME%';
  get_ui_train_skill_pt_info = (pt) => ['Skill Points: ', pt];
  ui_train_skill_enable_filter = 'Open Filter';
  ui_train_skill_disable_filter = 'Close Filter';
  get_ui_train_learn_skill = (skill) => ['Learn ', ...skill, '?'];
  get_ui_train_replace_skill = (skill, remove) => [
    'Learn ',
    ...skill,
    '? This will replace ',
    ...remove,
    '.',
  ];

  get_ui_reg_header = (chara) => ['Register ', chara, ' for the next race'];
  ui_reg_race_template = '%NAME% (%COUNTRY%) %GRAND% %MARK%';
  ui_grand_live_mark = '🎤';
  ui_reg_registered = '[▲ Registered]';
  get_ui_reg_tip_1_before_begin = (chara) => [
    chara,
    ' must debut via the debut race before entering other races',
  ];
  get_ui_reg_tip_1_after_begin = (chara) => [
    chara,
    ' is watching races shown in red',
  ];
  ui_reg_tip_2 = 'Races with an asterisk (*) suffix may trigger special events';
  ui_reg_tip_3 =
    'Races with a 🎤 suffix host a grand stage and grant more Renown';
  ui_reg_tip_4 =
    'Races with suffixes like (FR) are overseas. Register two weeks ahead and depart two weeks early';
  ui_reg_race_filter_template = 'Hide unfavorable races [%STATUS%]';
  ui_reg_race_more_info = 'Show more info [%STATUS%]';

  get_ui_race_select_contestants = (race) => [
    'The following team members registered for ',
    race,
    '. Force them to sit out?',
  ];
  ui_race_select_contestant_template = '%NAME% [%STATUS%]';
  ui_race_select_selected = 'Enter';
  ui_race_select_prevent = 'Sit Out';
  ui_race_select_done = 'Confirm Entrants';
  get_ui_race_your_tp = (you) => [you, "'s Focus"];
  ui_race_prev_template = 'Previous\n%NAME%';
  ui_race_next_template = 'Next\n%NAME%';
  ui_race_item_prev_template = 'Previous %NAME%';
  ui_race_item_next_template = 'Next %NAME%';
  get_ui_race_preview_contestant_entry = (score, motivation, pop, pop_mark) => [
    score,
    { isDivider: true },
    ...motivation,
    { isDivider: true },
    ' Popularity #',
    pop,
    ' ',
    pop_mark,
  ];
  ui_race_preview_contestant_attr = '%ATTR% (%RANK%)';
  ui_race_preview_contestant_style = 'Running Style';
  get_ui_race_preview_contestant_adapt = (name, adapt) => [name, ' ', adapt];
  ui_race_preview_contestant_tip =
    '* Entrants shown by post position low to high. Team members are green; strong rivals are red';
  ui_race_bt_go = 'Race!';
  ui_race_bt_chart = 'Track Data';
  ui_race_bt_item = 'Equip Toys';
  get_ui_race_preview_equip_item = (chara) => [
    'Equip sex toys for ',
    chara,
    ':',
  ];
  ui_race_preview_equip_item_part_template =
    'Equip a sex toy for %NAME% on %PART%';
  get_ui_race_preview_item_stg_template = '%COUNT% remaining';
  ui_race_preview_equip_item_v_tip = 'Still a virgin!';
  ui_race_preview_equip_item_a_cond =
    'Requires: Anal sex count %REQUIRE% (current: %CURRENT%)';
  ui_race_start_event = 'Who do you want to pump up before the race?';
  ui_race_speed_1 = '1x Speed';
  ui_race_speed_2 = '2x Speed';
  ui_race_speed_4 = '4x Speed';
  ui_race_few_contestants = 'Show fewer entrants';
  ui_race_skip_race = 'View Results';
  ui_race_timer_template = 'Timer: %TIMER%';
  ui_race_progress = 'Progress';
  ui_race_contestant_no = 'No.';
  ui_race_contestant_name = 'Name';
  ui_race_contestant_style = 'Style';
  ui_race_contestant_total_time = 'Time';
  ui_race_contestant_speed = 'Speed';
  ui_race_contestant_loc = 'Relative Pos.';
  ui_race_contestant_rank = 'Rank';
  ui_race_contestant_progress_template =
    '%LOCATION% (%LANE% %SLOPE% %BLOCKED% %TEMPTATION%)';
  ui_race_start = 'They are off!';
  ui_race_bad_start = 'Late start!';
  ui_race_reporter = 'Commentary';
  ui_race_result_summary = 'Results Board';
  get_ui_race_result_summary_header = (track, race) => [track, ' ', race];
  ui_race_result_location = 'Relative Position Stats';
  ui_race_result_location_header = 'Relative Position vs Leader';
  ui_race_result_speed = 'Speed Stats';
  ui_race_result_speed_header = 'Speed Chart';
  ui_race_result_endurance = 'Endurance Stats';
  ui_race_result_endurance_header = 'Endurance Chart';
  ui_race_result_skills = 'Skill Activation Stats';
  ui_race_result_log = 'Race Log';
  get_ui_race_result = (chara, race, rank) => [
    chara,
    ' finished ',
    race,
    ' in ',
    rank,
    '!',
  ];
  ui_race_end_event = 'Who do you want to congratulate / comfort?';
  ui_race_event_chara_template = '%NAME% (%RANK%)';
  ui_race_event_end = 'End';
  ui_race_event_tip =
    '* Characters with red interact buttons have exclusive story events';
  get_ui_race_honour_reward = (you, up_info) => [
    "Thanks to the team's outstanding performance, society's view of ",
    you,
    ' has ',
    up_info,
    '!',
  ];
  get_ui_race_honour_pregnant_punish = (you, down_info) => [
    "The team performed well, but a scandal over an active Trainer's illegitimate child still made society ",
    down_info,
    ' its view of ',
    you,
    '!',
  ];
  get_ui_race_honour_hentai_punish = (you, down_info) => [
    "Because of the team's lewd behavior, society's view of ",
    you,
    ' has ',
    down_info,
    '!',
  ];
  get_ui_race_honour_lose_punish = (you, down_info) => [
    "Because of the team's race losses, society's view of ",
    you,
    ' has ',
    down_info,
    '!',
  ];
  get_ui_race_money_reward = (money) => [
    'Received race prize share: ',
    money,
    ' UmaCoin',
  ];

  get_ui_out_confirm = (chara) => ['Where do you want to go with ', chara, '?'];
  ui_out_self_confirm = 'Where do you want to go alone?';
  get_ui_bt_talk_with_npc_template = 'Chat with %NAME%';
  ui_deep_interact_with_npc_template =
    'Relationship is not that close yet (need: %R_REQUIRE%+ Fondness, current: %R_CURRENT%; or %L_REQUIRE%+ Infatuation, current: %L_CURRENT%)';
  get_ui_out_bye = (chara, you) => [
    '[After saying goodbye to ',
    chara,
    ', ',
    you,
    ' left]',
  ];
  ui_mejiro_city_alone_tip = 'Mejiro Castle does not welcome solo travelers';
  ui_mejiro_city_love_tip_template =
    'Relationship is not that close yet (need: %REQUIRE%+, current: %CURRENT%)';

  ui_select_action_atrium = 'What will you do at the atrium?';
  ui_action_atrium_tree_hollow = 'Check the hollow tree';
  ui_action_atrium_date = 'Date';
  ui_select_action_river = 'What will you do by the river?';
  ui_action_river_fish = 'Fish';
  ui_action_river_walk = 'Walk';
  ui_select_action_shopping = 'What will you do on the shopping street?';
  ui_action_shopping_arcade = 'Arcade';
  ui_action_shopping_drawing = 'Lottery';
  ui_action_shopping_ktv = 'Karaoke';
  ui_action_shopping_movie = 'Movie';
  ui_action_shopping_ero_item = 'Browse the pink shop';
  ui_select_action_station = 'What will you do at the station?';
  ui_action_station_restaurant = 'Eat';
  ui_action_station_date = 'Date';
  ui_action_station_shopping = 'Mall';

  ui_race_report_header = 'Race Schedule';

  ui_shop_limited_item_entry_template = '%ITEM%(Ltd)';
  ui_shop_hold = 'Owned';
  ui_shop_max = 'Max';
  ui_shop_buy_template = 'Buy (%PRICE% UmaCoin)';
  ui_shop_tip =
    '* Tap an item for details\n** Items marked Ltd can only be owned once';
  get_ui_shop_bargain = (item, discount) => [
    '*** Weekly special! ',
    item,
    ' ',
    discount,
    '!',
  ];
  ui_shop_30_off = '30%off';
  ui_shop_50_off = '50%off';
  ui_shop_acc_switch_template = 'Hide hotkeys [%STATUS%]';
  get_ui_shop_buy = (item, count) => ['Bought ', count, 'x ', item];

  get_ui_take_care = (chara) => ['Who do you want ', chara, ' to look after?'];
  get_ui_take_care_change_confirm = (chara, curr) => [
    chara,
    ' is currently looking after ',
    curr,
    '. Switch care target?',
  ];
  ui_take_care_aim_continue_template = '%NAME% (in care)';
  ui_take_care_aim_taken_template = '%NAME% (cared for by %TEACHER%)';
  ui_take_care_bt_cancel = 'Stop Care';
  ui_take_care_bt_keep = 'Keep As Is';
  get_ui_take_care_continue = (chara, curr) => [
    chara,
    ' will keep looking after ',
    curr,
  ];
  get_ui_take_care_cancel = (chara, prev) => [
    chara,
    ' will no longer look after ',
    prev,
  ];
  get_ui_take_care_change = (chara, next) => [
    chara,
    ' will now look after ',
    next,
  ];

  ui_storage_have_items =
    'You currently have the following items: (tap an item button to use it or view details)';
  ui_storage_no_items = 'No items held';
  ui_storage_select_header_template = 'Choose a target for %ITEM%';
  ui_storage_no_targets_template = 'No valid targets for %ITEM%';

  ui_bt_self_info = 'Personal Info';
  ui_bt_chara_info = 'Target Info';

  ui_wur_sleep = 'Quietly Enjoy';
  ui_wur_wake = 'Wake Up';

  ui_sex_bt_setting = 'Settings';
  ui_sex_bt_touch = 'Body Contact';
  ui_sex_bt_stain = 'Stain Check';
  ui_sex_bt_turn_around = 'Turn Around';

  bs_info_template = 'A dim room...%DURABILITY%...';
  bs_no_one_info_template = 'A dim, empty room...%DURABILITY%...';
  ui_bs_durability_0 = 'but completely unguarded';
  ui_bs_durability_1 = 'but a little trick should do';
  ui_bs_durability_2 = 'the door looks hard to open';
  ui_bs_durability_3 = 'many nasty obstacles remain';
  ui_bs_durability_4 = 'every fixture seems unbreakable';
  ui_bs_durability_5 = 'no resistance matters here';

  ui_bs_flatter = 'Play Along';
  ui_bs_unlock = 'Try to Escape';
  ui_bs_relax = 'Just Sit';
  ui_bs_sleep = 'Nap';
  ui_bs_eat = 'Eat a Little';
  ui_bs_sex = 'Invite to Bed';
  ui_bs_strike = 'Backstab Ambush';
  ui_bs_battle = 'Face Them Head-On';
  ui_bs_release = 'Beg for Release';
  ui_bs_clock = 'Ask the Time';
  ui_bs_guide = 'Escape Guide';

  ui_save_game_header = 'Which slot do you want to save to?';
  ui_auto_save_template = '%NAME% (Autosave)';
  ui_empty_save = 'Empty Slot';
  ui_save_rename = 'Rename';
  ui_save_name_save = 'Name This Story';
  ui_save_remove_save = 'Remove This Story Name';
  ui_save_name_save_header = 'Enter a save name:';
  ui_save_name_save_confirm_template = 'Name this story [%NAME%]?';
  ui_save_name_save_result_template = 'This story is now named [%NAME%]';
  ui_save_name_remove_confirm_template = 'Remove the story name [%NAME%]?';
  ui_save_name_remove_result =
    'Save name removed. Next save will use the default name';
  ui_save_override_confirm_template = 'Overwrite the save in slot %NO%?';
  ui_save_save_result_template = 'Saved to slot %NO%';
  ui_save_rename_confirm_template = 'Rename the save in slot %NO% to [%NAME%]?';
  ui_save_rename_result_template = 'Slot %NO% renamed successfully';
  ui_save_rename_cancel_template = 'Canceled renaming slot %NO%';

  ui_load_game_header = 'Which slot do you want to load?';
  ui_load_remove = 'Delete';
  ui_load_fail_template = 'Failed to load the save in slot %NO%';
  ui_load_remove_success_template = 'Deleted the save in slot %NO%';

  name = new (require('#/i18n/en-US/chara/names'))();
  title = new (require('#/i18n/en-US/chara/titles'))();
  title_desc = new (require('#/i18n/en-US/chara/title-desc'))();
  feature = new (require('#/i18n/en-US/chara/feature'))();
  detail = new (require('#/i18n/en-US/chara/detail'))();

  kojo = new (require('#/i18n/en-US/kojo/entry'))();
  timon = new (require('#/i18n/en-US/timon/entry'))();

  new_game = new (require('#/i18n/en-US/new-game'))();
  location = new (require('#/i18n/en-US/location'))();
  vehicle = new (require('#/i18n/en-US/vehicle'))();
  note = new (require('#/i18n/en-US/notes'))();
  achievement = new (require('#/i18n/en-US/achieve'))();
  achieve_desc = new (require('#/i18n/en-US/achieve-desc'))();

  tb_abl = new (require('#/i18n/en-US/table/abl'))();
  tb_exp = new (require('#/i18n/en-US/table/exp'))();
  tb_item = new (require('#/i18n/en-US/table/item'))();
  tb_mark = new (require('#/i18n/en-US/table/mark'))();
  tb_param = new (require('#/i18n/en-US/table/param'))();
  tb_stain = new (require('#/i18n/en-US/table/stain'))();
  tb_status = new (require('#/i18n/en-US/table/status'))();
  tb_talent = new (require('#/i18n/en-US/table/talent'))();
  abl_desc = new (require('#/i18n/en-US/table/abl-desc'))();
  item_desc = new (require('#/i18n/en-US/table/item-desc'))();
  status_desc = new (require('#/i18n/en-US/table/status-desc'))();
  talent_desc = new (require('#/i18n/en-US/table/talent-desc'))();

  sex = new (require('#/i18n/en-US/sex/main'))();
  train_action = new (require('#/i18n/en-US/sex/actions'))();
  body_part = new (require('#/i18n/en-US/sex/parts'))();
  jewel_shop = new (require('#/i18n/en-US/sex/shop'))();
  inmon = new (require('#/i18n/en-US/sex/inmons'))();
  inmon_desc = new (require('#/i18n/en-US/sex/inmon-desc'))();

  clothe = new (require('#/i18n/en-US/race/clothes'))();
  race = new (require('#/i18n/en-US/race/races'))();
  skill = new (require('#/i18n/en-US/race/skills'))();
  skill_desc = new (require('#/i18n/en-US/race/skill-desc'))();
  inherit_shop = new (require('#/i18n/en-US/race/inherit'))();
  gene = new (require('#/i18n/en-US/race/genes'))();
  gene_desc = new (require('#/i18n/en-US/race/gene-desc'))();
  mob = require('#/i18n/en-US/race/uma-mob.json');
};
