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

  ui_moti = 'Motivation';

  ui_yes = 'YES';
  ui_no = 'NO';

  tb_abl = new (require('#/i18n/en-US/table/abl'))();

  race = new (require('#/i18n/en-US/race/races'))();
};
