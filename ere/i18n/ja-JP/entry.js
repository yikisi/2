const I18nEntry = require('#/i18n/zh-CN/entry');

module.exports = class extends I18nEntry {
  language = '日本語';

  speed = 'スピード';
  endurance = 'スタミナ';
  strength = 'パワー';
  toughness = '根性';
  intelligence = '賢さ';

  abbr_hp = '体';
  abbr_tp = '精';

  ui_moti = 'やる気';
  moti_0 = '絶不調';
  moti_1 = '不調';
  moti_2 = '普通';
  moti_3 = '好調';
  moti_4 = '絶好調';

  a_g_grass = '芝';
  a_g_dirt = 'ダート';
  a_d_short = '短距離';
  a_d_mile = 'マイル';
  a_d_medium = '中距離';
  a_d_long = '長距離';
  a_s_nige = '逃げ';
  a_s_senko = '先行';
  a_s_sashi = '差し';
  a_s_okimi = '追込';

  edu_0 = 'ジュニア級';
  edu_1 = 'クラシック級';
  edu_2 = 'シニア級';

  a_edu_0 = this.edu_0;
  a_edu_1 = this.edu_1;
  a_edu_2 = this.edu_2;

  tt_new_game = 'ニューゲーム';
  tt_load_game = 'ロード';
  tt_help = 'チュートリアル';
  tt_copyrights = 'クレジット';

  tt_birthday_notify = (birth_list) => [
    '今日は',
    ...birth_list,
    'の誕生日です',
  ];

  ui_comma = ', ';
  ui_comma2 = this.ui_comma;
  ui_conjunction = this.ui_comma;
  ui_yes = 'はい';
  ui_no = 'いいえ';
  ui_money_template = '¥%MONEY%';

  name = new (require('#/i18n/ja-JP/chara/names'))();
  title = new (require('#/i18n/ja-JP/chara/titles'))();

  kojo = new (require('#/i18n/ja-JP/kojo/entry'))();

  tb_abl = new (require('#/i18n/ja-JP/table/abl'))();
  tb_item = new (require('#/i18n/ja-JP/table/item'))();

  clothe = new (require('#/i18n/ja-JP/race/clothes'))();
  race = new (require('#/i18n/ja-JP/race/races'))();
  skill = new (require('#/i18n/ja-JP/race/skills'))();
  skill_desc = new (require('#/i18n/ja-JP/race/skill-desc'))();
  mob = require('#/i18n/ja-JP/race/uma-mob.json');
};
