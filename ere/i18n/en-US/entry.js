const I18nEntry = require('#/i18n/zh-CN/entry');

module.exports = class extends I18nEntry {
  language = 'English';
  you = 'You';

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

  ui_moti = 'Motivation';

  ui_yes = 'YES';
  ui_no = 'NO';

  name = new (require('#/i18n/en-US/chara/names'))();

  tb_abl = new (require('#/i18n/en-US/table/abl'))();

  race = new (require('#/i18n/en-US/race/races'))();
};
