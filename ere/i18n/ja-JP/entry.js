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

  tt_birthday_notify = (birth_list) => [
    '今日は',
    ...birth_list,
    'の誕生日です',
  ];
  tt_new_game = 'ニューゲーム';
  tt_load_game = 'ロード';
  tt_help = 'チュートリアル';
  tt_copyrights = 'クレジット';

  cr_title_copyrights = 'クレジット';
  cr_header_susai = '主催';
  cr_header_architecture = '設計';
  cr_header_engine = 'エンジン';
  cr_header_developer = '開発';
  cr_header_art = '美術';
  cr_header_translate_reference = '翻訳参考';
  cr_header_tr_repo = "Trainers' Legend G 翻訳 (中国語)";
  cr_header_tr_wiki = 'ウマ娘中文 Wiki';
  cr_header_kojo = '口上';
  cr_kojo_tip = '担当キャラID最小値順でソート';
  cr_kojo_detail = '詳細口上鳴謝';
  cr_kojo_suffix_template = '（%SUFFIX%）';
  cr_kojo_suffix_recruit = '募集';
  cr_kojo_suffix_basement = '地下室';
  cr_kojo_suffix_temporary = '臨時';
  cr_kojo_suffix_part = '部分';
  cr_timon_recruit = '募集地の文';
  cr_timon_daily = '日常地の文';
  cr_timon_edu = '育成地の文';
  cr_timon_love = '愛慕地の文';
  cr_timon_ero = '調教地の文';
  cr_timon_basement = '地下室地の文';
  cr_timon_special = '特殊キャラ (臨時)';
  cr_timon_mejiro = 'メジロの呼び声';
  cr_timon_random = 'ランダムイベント';
  cr_timon_guide = '初心者ガイド';
  cr_timon_guide_b = '地下室ガイド';
  cr_header_kojo_make = '口上制作';
  cr_header_test = 'テスト';
  cr_header_community_management = 'コミュニティ運営';
  cr_header_community_assistant = 'コミュニティ協力';
  cr_header_special_thanks = '特別鳴謝w';
  cr_umamusme_pretty_derby = 'ウ〇娘 プ〇ティーダー〇ー';

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
  abl_desc = new (require('#/i18n/ja-JP/table/abl-desc'))();

  clothe = new (require('#/i18n/ja-JP/race/clothes'))();
  race = new (require('#/i18n/ja-JP/race/races'))();
  skill = new (require('#/i18n/ja-JP/race/skills'))();
  skill_desc = new (require('#/i18n/ja-JP/race/skill-desc'))();
  mob = require('#/i18n/ja-JP/race/uma-mob.json');
};
