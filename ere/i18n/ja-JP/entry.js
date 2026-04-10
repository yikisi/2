const I18nEntry = require('#/i18n/zh-CN/entry');

module.exports = class extends I18nEntry {
  language = '日本語';

  speed = 'スピード';
  endurance = 'スタミナ';
  strength = 'パワー';
  toughness = '根性';
  intelligence = '賢さ';

  hp = '体力';
  tp = '気力';

  abbr_hp = '体';
  abbr_tp = '気';

  ui_mot = 'やる気';
  mot_0 = '絶不調';
  mot_1 = '不調';
  mot_2 = '普通';
  mot_3 = '好調';
  mot_4 = '絶好調';

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
  pre_edu = '入学予定';

  a_edu_0 = 'ジュニア';
  a_edu_1 = 'クラシ';
  a_edu_2 = 'シニア';

  honour_m = '失格';
  honour_0 = '新米';
  honour_1 = '熟練';
  honour_2 = '中堅';
  honour_3 = '精英';
  honour_4 = '伝説';

  title_0 = 'トレーナー';
  title_1 = 'ウマ娘';
  title_2 = '性奴';
  title_3 = '孕袋';

  ui_love = '愛慕';
  ui_love_template = '愛慕: %LOVEINFO%';
  get_ui_colored_love = (love) => ['愛慕: ', love];
  love_0 = '平常';
  love_1 = '淡恋';
  love_2 = '微恋';
  love_3 = '愛欲';
  love_4 = '熱恋';
  love_5 = '良縁';
  love_6 = '依存';

  ui_relation = '好感';
  ui_relation_template = '好感: %RELATIONINFO%';
  get_ui_colored_relation = (relation) => ['好感: ', relation];
  relation_0 = '失望';
  relation_1 = '疑念';
  relation_2 = '冷淡';
  relation_3 = '良好';
  relation_4 = '熱意';
  relation_5 = '好意';
  relation_6 = '親密';
  relation_7 = '不変';

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
  cr_thanks_detail = '詳細鳴謝';
  cr_kojo_suffix_template = ' (%SUFFIX%)';
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
  cr_header_image = '調教立ち絵';
  cr_image_common = '共通立ち絵';
  cr_image_gif = '指示アニメーション';
  cr_header_kojo_make = '口上制作';
  cr_header_test = 'テスト';
  cr_header_community_management = 'コミュニティ運営';
  cr_header_community_assistant = 'コミュニティ協力';
  cr_header_special_thanks = '特別鳴謝w';
  cr_umamusme_pretty_derby = 'ウ〇娘 プ〇ティーダー〇ー';

  ui_comma = ', ';
  ui_comma2 = this.ui_comma;
  ui_conjunction = this.ui_comma;
  ui_ellipses = '...';
  ui_back = '戻る';
  ui_back_title = 'タイトルに戻る';
  ui_achieve_title = '新しい実績を獲得！';
  ui_on = 'ON';
  ui_off = 'OFF';
  ui_yes = '確定';
  ui_no = 'キャンセル';
  ui_yes2 = 'はい';
  ui_no2 = 'いいえ';
  ui_skip = 'スキップ';
  ui_nothing = '無し';
  ui_money_template = '¥%MONEY%';
  ui_get_date = (year, month, week) => [
    year,
    ' 年 ',
    month,
    ' 月 第 ',
    week,
    ' 週',
  ];
  ui_month_template = '%MONTH% ヶ月';
  ui_too_long_template =
    '(表示幅は全角 %WIDTH% 文字または半角 %WIDTH*2% 文字を超えることはできません。再入力してください！)';
  ui_et_prev = '前の項目';
  ui_et_next = '次の項目';
  ui_pg_prev = '前のページ';
  ui_pg_next = '次のページ';
  ui_default = 'デフォルト';
  ui_game_over = 'GAME OVER';
  ui_invalid_value = '-';
  ui_unknown_value = '?';

  ui_hd_no_save = '現在セーブデータ未ロード';
  get_ui_hd_location = (location) => ['現在: ', location];
  get_ui_hd_honour = (honour) => ['名声: ', honour];
  get_ui_hd_money = (money, income = []) => [money, ...income, ' ウマコイン'];
  ui_billing_title_start = '請求書:';
  ui_billing_invest_template = '%INCOME% (%CHARA% 投資収益)';
  ui_billing_bonus_template = '%INCOME% (月給＋ボーナス)';
  ui_billing_salary_template = '%INCOME% (月給)';
  ui_billing_borrow_template = '%INCOME% (%CHARA%%MAIN% 残り %TIMER% 週)';
  ui_billing_borrow_main = '· メイン';
  ui_billing_slave_template = '%INCOME% (%CHARA% 献金)';
  ui_hd_current_race = '今週のレース';
  ui_hd_races = '全てを見る';

  get_ui_cur_chara_info = (
    title,
    name,
    palace,
    growth,
    motivation,
    edu,
    race,
  ) => [...title, name, palace, ' (', growth, ')', ...motivation, edu, ...race];
  get_ui_race_indicator = (race, delta) => ['(', race, ' まで ', delta, ' 週)'];
  get_ui_curr_race_indicator = (race) => ['(今週開催: ', race, ')'];

  ui_change_image = '立ち絵切替';

  name = new (require('#/i18n/ja-JP/chara/names'))();
  title = new (require('#/i18n/ja-JP/chara/titles'))();
  feature = new (require('#/i18n/ja-JP/chara/feature'))();

  kojo = new (require('#/i18n/ja-JP/kojo/entry'))();

  location = new (require('#/i18n/ja-JP/location'))();

  tb_abl = new (require('#/i18n/ja-JP/table/abl'))();
  tb_item = new (require('#/i18n/ja-JP/table/item'))();
  tb_status = new (require('#/i18n/ja-JP/table/status'))();
  abl_desc = new (require('#/i18n/ja-JP/table/abl-desc'))();

  clothe = new (require('#/i18n/ja-JP/race/clothes'))();
  race = new (require('#/i18n/ja-JP/race/races'))();
  skill = new (require('#/i18n/ja-JP/race/skills'))();
  skill_desc = new (require('#/i18n/ja-JP/race/skill-desc'))();
  mob = require('#/i18n/ja-JP/race/uma-mob.json');
};
