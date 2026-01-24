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
