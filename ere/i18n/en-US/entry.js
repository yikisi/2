const I18nEntry = require('#/i18n/zh-CN/entry');

module.exports = class extends I18nEntry {
  language = 'English';

  speed = 'Speed';
  endurance = 'Stamina';
  strength = 'Power';
  toughness = 'Guts';
  intelligence = 'Wiz';

  abbr_hp = 'HP';
  abbr_tp = 'TP';

  edu_0 = 'Junior';
  edu_1 = 'Classic';
  edu_2 = 'Senior';

  a_edu_0 = this.edu_0;
  a_edu_1 = this.edu_1;
  a_edu_2 = this.edu_2;

  ui_moti = 'Motivation';
  moti_0 = 'Worst';
  moti_1 = 'Worse';
  moti_2 = 'Normal';
  moti_3 = 'Better';
  moti_4 = 'Best';

  tt_birthday_notify = (birth_list) => [
    'Today is the birthday of ',
    ...birth_list,
  ];

  cr_title_copyrights = 'Special Thanks to';
  cr_header_susai = 'Director';
  cr_header_architecture = 'Architecture';
  cr_header_engine = 'Engine';
  cr_header_developer = 'Developer';
  cr_header_art = 'Art';
  cr_header_translate_reference = 'Translation Reference';
  cr_header_tr_repo = "Trainers' Legend G TRANS (Chinese)";
  cr_header_tr_wiki = 'Umamusume Wiki (Chinese)';
  cr_header_kojo = 'Kojo';
  cr_kojo_tip = 'Ordered by Lowest Character ID';
  cr_kojo_detail = 'Detailed Kojo Thanks';
  cr_kojo_suffix_template = ' (%SUFFIX%)';
  cr_kojo_suffix_recruit = 'Recruit';
  cr_kojo_suffix_basement = 'Basement';
  cr_kojo_suffix_temporary = 'Temporary';
  cr_kojo_suffix_part = 'Partially';
  cr_timon_recruit = 'Recruit Timon';
  cr_timon_daily = 'Daily Timon';
  cr_timon_edu = 'Edu Timon';
  cr_timon_love = 'Love Timon';
  cr_timon_ero = 'Ero Timon';
  cr_timon_basement = 'Basement Timon';
  cr_timon_special = 'Special Characters (Temporary)';
  cr_timon_mejiro = 'Call of Mejiro';
  cr_timon_random = 'Random Events';
  cr_timon_guide = 'Guides';
  cr_timon_guide_b = 'Basement Guides';
  cr_header_kojo_make = 'Kojo Scripts';
  cr_header_test = 'Test';
  cr_header_community_management = 'Community Management';
  cr_header_community_assistant = 'Community Assistance';
  cr_header_special_thanks = 'Special Thanks (lol)';
  cr_umamusme_pretty_derby = 'Umam*sume Pr*tty D*rby';

  ui_comma = ', ';
  ui_comma2 = this.ui_comma;
  ui_conjunction = ' and ';
  ui_back = 'BACK';
  ui_achieve_title = 'New Achievement!';
  ui_yes = 'YES';
  ui_no = 'NO';
  ui_skip = 'SKIP';
  ui_nothing = 'NOTHING';
  ui_money_template = '¥%MONEY%';
  ui_get_date = (year, month, week) => ['Week ', week, ' ', month, '/', year];
  ui_month_template = '%MONTH% months';

  name = new (require('#/i18n/en-US/chara/names'))();

  kojo = new (require('#/i18n/en-US/kojo/entry'))();

  tb_abl = new (require('#/i18n/en-US/table/abl'))();

  race = new (require('#/i18n/en-US/race/races'))();
};
