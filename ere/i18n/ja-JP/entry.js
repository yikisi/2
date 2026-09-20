module.exports = class extends require('#/i18n/zh-CN/entry') {
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

  adapt_template = '%ADAPT%適性';

  edu_0 = 'ジュニア級';
  edu_1 = 'クラシック級';
  edu_2 = 'シニア級';
  pre_edu = '入学予定';

  a_edu_0 = 'ジュニア';
  a_edu_1 = 'クラシック';
  a_edu_2 = 'シニア';

  oot_0 = '育成済み';
  oot_1 = '殿堂入り';

  honour_m = '失格';
  honour_0 = '新米';
  honour_1 = '熟練';
  honour_2 = '中堅';
  honour_3 = 'エリート';
  honour_4 = '伝説';

  title_0 = 'トレーナー';
  title_1 = 'ウマ娘';
  title_2 = '性奴';
  title_3 = '孕袋';

  ui_rl_mark_with_value = '%MARK% (%VAL%)';

  ui_love_icon = '❤️';
  ui_love = '恋慕';
  ui_love_template = '恋慕：%LOVEINFO%';
  get_ui_colored_love = (love) => ['恋慕：', love];
  love_u = '？';
  love_0 = '平常';
  love_1 = 'ほのか';
  love_2 = 'ときめき';
  love_3 = '愛欲';
  love_4 = '熱恋';
  love_5 = '良縁';
  love_6 = '依存';

  ui_relation_icon = '🤝';
  ui_relation = '好感';
  ui_relation_template = '好感：%RELATIONINFO%';
  get_ui_colored_relation = (relation) => ['好感：', relation];
  relation_u = '？';
  relation_0 = '失望';
  relation_1 = '疑念';
  relation_2 = '冷淡';
  relation_3 = '良好';
  relation_4 = '熱意';
  relation_5 = '好意';
  relation_6 = '親密';
  relation_7 = '不変';

  celebration_template = '[%CELEBRATION%]';
  cl_new_year = '新年';
  cl_valentine = 'バレンタイン';
  cl_palace = '殿堂週';
  cl_fans = 'ファン感謝祭';
  cl_temple_fair = '縁日';
  cl_halloween = 'ハロウィン';
  cl_christmas = 'クリスマス';

  tt_disclaimer = '免責事項';
  tt_disclaimer_content = [
    '1. 本ゲームは開発者の自慰とコード練習のために作られた。低俗な趣味の産物であり、営利目的はない。',
    { isBr: true },
    '2. 本ゲームには大量の R18 性的描写が含まれる。多人数、調教、軽度 SM、非合意の性行為、近親相姦などが登場しうる。強制 NTR、重度 SM、流血、R18G などは登場しない。',
    { isBr: true },
    '3. 設計と内容は era および他作品を継ぎはぎしている。era 系列のプレイヤー、またはテキストアドベンチャー愛好者向けであり、一般プレイヤー、とくに未成年者のプレイは厳禁である。',
    { isBr: true },
    '4. 使用素材は開発者制作、インターネット収集、協力者提供を含む。開発者と協力者は世界・種族・国籍を異にし、経済関係もない。',
    { isBr: true },
    '5. 公式の配布先は ',
    {
      content: 'ホスティングリポジトリ',
      url: 'https://gitgud.io/umaera/erauma',
    },
    ' のみ。ゲームの性質上、未成年が触れうる公開の場での展示・拡散を禁じ、営利（販売／景品等）および公開活動（配信等）での使用も禁ずる。',
    { isBr: true },
    '6. 出典を明示し、営利目的を持たず、本免責、',
    {
      content: 'GPL 2.0 only オープンソースライセンス',
      fontWeight: 'bold',
      url: 'https://gnu.ac.cn/licenses/old-licenses/gpl-2.0.html',
    },
    ' と ',
    {
      content: '口上創作規約',
      fontWeight: 'bold',
      url: 'https://gitgud.io/umaera/erauma/-/wikis/LICENSE',
    },
    ' を守る限り、改変および二次開発（派生物は魔改版と呼ぶ）を認める。この許諾は全プレイヤーに直接与えられ、開発者の個別同意は不要だが、タイトル等で魔改版であることを明示し、原版と区別すること。',
    { isBr: true },
    '7. 本声明の解釈権は開発者にあり、更新で内容が変わりうる。最新版に従うこと。',
    { isBr: true },
    '8. これだけ重ねて書いた。大胆な考えがあるなら、いま窓を閉じて削除せよ。削除しなければ、理解し遵守したものとみなす。遵守しない場合の事故と法的責任は、開発者とは無関係である。',
  ];
  tt_disclaimer_accept =
    '上の8条を読み、理解した。自分の責任で、消さず、遊ぶ。';
  tt_disclaimer_reject = '男女は分けておけ！ もうやめる！';
  tt_birthday_notify = (birth_list) => ['今日は', ...birth_list, 'の誕生日！'];
  tt_version_template = 'バージョン：v%VERSION%';
  tt_version_resource = '対応リソースパック：';
  tt_new_game = 'ニューゲーム';
  tt_load_game = 'ロード';
  tt_achieve = '実績';
  tt_chara_achieve = 'キャラ実績';
  tt_help = 'チュートリアル';
  tt_copyrights = 'クレジット';
  tt_links = '関連リンク：';
  tt_link_release = 'EraUma 公開ページ';
  tt_link_desk_engine = 'EraElectron エンジン（PC版）公開ページ';
  tt_link_app_engine = 'ere.app エンジン（Android版）公開ページ';
  tt_link_community = 'ERA トレセン学園（Discord コミュニティ）';
  tt_link_wiki = 'Wiki（説明／設定／口上執筆ガイド……）';

  cr_title_copyrights = 'クレジット';
  cr_header_susai = '主催';
  cr_header_architecture = '設計';
  cr_header_engine = 'エンジン';
  cr_header_developer = '開発';
  cr_header_art = '美術';
  cr_header_translate_reference = '翻訳参考';
  cr_header_tr_repo = "Trainers' Legend G 翻訳（中国語）";
  cr_header_tr_wiki = 'ウマ娘中文 Wiki';
  cr_header_kojo = '口上';
  cr_kojo_tip = '担当キャラIDの最小値順';
  cr_thanks_detail = '謝辞詳細';
  cr_kojo_suffix_template = '（%SUFFIX%）';
  cr_kojo_suffix_temporary = '仮';
  cr_kojo_suffix_part = '一部';
  cr_timon_recruit = '募集の地の文';
  cr_timon_daily = '日常の地の文';
  cr_timon_edu = '育成の地の文';
  cr_timon_love = '恋慕の地の文';
  cr_timon_ero = '調教の地の文';
  cr_timon_basement = '地下室の地の文';
  cr_timon_special = '特殊キャラ（仮）';
  cr_timon_mejiro = 'メジロの呼び声';
  cr_timon_random = 'ランダムイベント';
  cr_timon_guide = '初心者ガイド';
  cr_timon_guide_b = '地下室ガイド';
  cr_header_image = '調教立ち絵';
  cr_image_common = '共通立ち絵';
  cr_image_gif = '指示アニメーション';
  cr_header_lib_en_us = '英語ローカライズ';
  cr_header_lib_ru_ru = 'ロシア語ローカライズ';
  cr_header_lib_ja_jp = '日本語ローカライズ';
  cr_header_kojo_make = '口上制作';
  cr_header_test = 'テスト';
  cr_header_community_management = 'コミュニティ運営';
  cr_header_community_assistant = 'コミュニティ協力';
  cr_header_special_thanks = 'スペシャルサンクス（笑）';
  cr_umamusme_pretty_derby = 'ウ〇娘 プ〇ティーダー〇ー';

  tk_speak_border = ['「', '」'];
  tk_think_border = ['（', '）'];
  tk_past_border = ['（', '）'];
  tk_unknown = '？？？';

  nt_ask = '関連するメモを見る？';
  nt_no = 'あとでタイトルから確認する';

  ui_comma = '、';
  ui_comma2 = '・';
  ui_period = '。';
  ui_exclamation = '！';
  ui_conjunction = ' と ';
  ui_ellipses = '……';
  ui_semicolon = '；';
  ui_back = '戻る';
  ui_back_title = 'タイトルに戻る';
  ui_achieve_title = '新しい実績を獲得！';
  ui_on = 'ON';
  ui_off = 'OFF';
  ui_yes = '確定';
  ui_no = 'キャンセル';
  ui_yes2 = 'はい';
  ui_no2 = 'いいえ';
  ui_reset = 'リセット';
  ui_skip = 'スキップ';
  ui_nothing = 'なし';
  ui_money_template = '%MONEY% ウマコイン';
  ui_get_date = (year, month, week) => [
    year,
    ' 年 ',
    month,
    ' 月 第 ',
    week,
    ' 週',
  ];
  ui_date_without_year_template = '%MONTH% 月 第 %WEEK% 週';
  ui_month_template = '%MONTH% ヶ月';
  ui_too_long_template =
    '（表示幅は全角 %WIDTH% 文字、または半角 %WIDTH*2% 文字を超えられません。入れ直してください！）';
  ui_et_prev = '前の項目';
  ui_et_next = '次の項目';
  ui_pg_prev = '前のページ';
  ui_pg_next = '次のページ';
  ui_ch_prev = '前の人';
  ui_ch_next = '次の人';
  ui_pagination_template = '%CURR% / %TOTAL% ページ';
  ui_default = 'デフォルト';
  ui_game_over = 'GAME OVER';
  ui_invalid_value = '-';
  ui_unknown_value = '?';
  ui_all = 'すべて';
  ui_increase = '上昇';
  ui_decrease = '低下';
  ui_end = '終了';
  ui_cancel = 'やっぱりやめる';
  ui_signature_result = '主な勝ち鞍';
  ui_agree = '同意';
  ui_disagree = '拒否';

  get_ui_reward_header = (chara) => [chara, ' の能力が次のように変わった：'];
  get_ui_change_attr = (attr, change_mark, change_val) => [
    attr,
    ' が ',
    change_mark,
    ' ',
    change_val,
  ];
  get_ui_add_skills = (chara, skills) => [chara, ' は', ...skills, 'を覚えた'];
  ui_get_pt_template = 'スキルPtを %PT% 得た！';
  ui_train_level_up_template = '%ATTR%トレーニングが、より得意になった！';
  get_ui_change_motivation = (chara, motivation) => [
    chara,
    ' のやる気はいま ',
    motivation,
  ];
  get_ui_change_relation = (chara, target, change_mark, val, result) => [
    chara,
    ' の ',
    target,
    ' への好感が ',
    change_mark,
    ' ',
    val,
    '！ 現在：',
    result,
  ];
  get_ui_find_betrayed = (chara, you) => [
    you,
    ' の不実に、',
    chara,
    ' は激しく怒っている……',
  ];
  get_ui_change_love = (chara, you, change_mark, val, result) => [
    chara,
    ' の ',
    you,
    ' への恋慕が ',
    change_mark,
    ' ',
    val,
    '！ 現在：',
    result,
  ];
  get_trigger_love_event = (chara) => [
    '（',
    chara,
    ' との関係は、もう一歩先へ行けそうだ……）',
  ];
  ui_love_level_up = 'もう引き返せない……';
  get_ui_hurt_uma = (chara) => ['【', chara, ' が怪我をした！】'];
  get_ui_hurt_uma_plus = (chara) => ['【', chara, ' の怪我が重くなった！】'];
  get_ui_hurt_tired_uma = (chara) => [
    '【',
    chara,
    ' は疲労のうえ、さらに重い怪我を負った！】',
  ];
  get_ui_add_titles = (chara) => ['【', chara, ' は新しい称号を得た！】'];
  get_ui_too_tired = (chara) => [chara, ' は疲労困憊している……'];
  get_ui_bankrupt_warn = (you) => ['【', you, ' が破産しそうだ！】'];
  get_ui_ignore_event_punish = (chara, you) => [
    '【',
    you,
    ' が構わなかったせいで、',
    chara,
    ' は少し失望した】',
  ];
  get_ui_ignore_event_punish2 = (chara, you) => [
    '【',
    you,
    ' が構わなかったせいで、',
    chara,
    ' は深く失望した】',
  ];
  get_ui_edu_end = (chara) => ['【', chara, ' の育成が終わった】'];
  get_ui_edu_aim_summary_header = (chara) => [chara, ' の育成目標の達成状況：'];
  edu_aim_done = '達成！';
  get_ui_edu_ignore_aim = (chara, count) => [
    chara,
    ' の育成イベントを ',
    count,
    ' 件見逃した……',
  ];

  ui_time_flow = '【時間が流れ始める】';
  ui_new_week = '【新しい一週間が始まった】';

  ui_hd_no_save = 'セーブデータ未ロード';
  get_ui_hd_location = (location) => ['現在：', location];
  get_ui_hd_honour = (honour) => ['名声：', honour];
  ui_hd_income_template = '(%INCOME%)';
  get_ui_hd_money = (money, income = []) => [money, ...income, ' ウマコイン'];
  ui_billing_title_start = '請求：';
  ui_billing_invest_template = '%INCOME% (%CHARA% の投資収益)';
  ui_billing_bonus_template = '%INCOME% (月給＋ボーナス)';
  ui_billing_salary_template = '%INCOME% (月給)';
  ui_billing_borrow_template = '%INCOME% (%CHARA%%MAIN% あと %TIMER% 週)';
  ui_billing_borrow_main = '・メイン';
  ui_billing_slave_template = '%INCOME% (%CHARA% の献金)';
  ui_hd_current_race = '今週のレース';
  ui_hd_races = 'すべて見る';

  ui_no_target = '相手が選ばれていない';
  get_ui_cur_chara_info = (
    title,
    name,
    palace,
    growth,
    motivation,
    edu,
    race,
  ) => [
    '現在のキャラ：',
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
  get_ui_motivation = (motivation) => [this.ui_mot, '・', motivation];
  ui_edu_template = '%EDU%';
  get_ui_race_indicator = (race, delta) => [
    '(',
    race,
    ' まであと ',
    delta,
    ' 週)',
  ];
  get_ui_curr_race_indicator = (race) => ['(今週開催：', race, ')'];

  ui_select_hd_info_template = '情報を見るキャラを選ぶ (%COUNT%)';
  ui_select_hd_interact_template = '相手を選ぶ (%COUNT%)';
  ui_select_hd_name = '名前';
  ui_select_hd_score = '評価';
  ui_select_hd_races = '成績';
  ui_select_hd_edu = '育成';
  ui_select_hd_playthrough = '周回';
  ui_select_clear = '相手をクリア';
  ui_select_no_character = 'チームに他のメンバーはいない';
  ui_select_event_filter_tooltip =
    '* ボタンが赤くなっているキャラは、今週注目すべきイベントがある';
  ui_select_event_filter_template = '特別イベントがあるキャラだけ [%STATUS%]';
  ui_select_order_marks = ['▼', '▲'];

  ui_change_image = '立ち絵切替';
  ui_show_team = 'チームを見る';
  ui_train = 'トレーニング';
  ui_self_train = '自主トレーニング';
  ui_goto_race = 'レース出走';
  ui_register_race = '出走登録';
  ui_goto_sex = '夜のお誘い';
  ui_next_turn = '一週間を終える';
  ui_office_study = '学習指導';
  ui_office_prepare = 'レース前の準備';
  ui_talk = '会話';
  ui_office_gift = 'プレゼントを贈る';
  ui_self_cook = '食事';
  ui_office_cook = '一緒に食事';
  ui_self_rest = '少し休憩';
  ui_office_rest = '一緒に少し休憩';
  ui_self_game = 'ゲーム';
  ui_office_game = '一緒にゲーム';
  ui_change_take_care = '世話する相手を切り替える';
  ui_ask_take_care = '世話を頼む';
  ui_self_update = '自分のエッチスキルを上げる';
  ui_ero_update = 'お互いのエッチスキルを上げる';
  ui_borrow_money = 'お金を借りる';
  ui_celebration_template = '一緒に祝う %CELEBRATION%';
  ui_birthday = '誕生日を祝う';
  ui_check_love = '恋慕イベントを再発火';
  ui_basement_me = '狂愛を乞う';
  ui_recruit = '練習場へ（募集）';
  ui_trainer_office = 'トレーナー室へ';
  ui_clinic = '保健室へ';
  ui_god_together = '一緒に三女神像へ';
  ui_god_alone = '三女神像へ';
  ui_atrium_together = '一緒に中庭へ';
  ui_atrium_alone = '中庭へ';
  ui_rooftop_together = '一緒に屋上へ';
  ui_rooftop_alone = '屋上へ';
  ui_chairman_office = '理事長室へ';
  ui_visitors = '来客応接室へ';
  ui_school_shop = '謎の売店へ';
  ui_out_together = '一緒に外出';
  ui_out_alone = '外出';
  ui_info_page = 'キャラ情報';
  ui_storage = '持ち物';
  ui_races = 'レース記録';
  ui_office_filter_template = 'トレ室の行動を除く [%STATUS%]';
  ui_out_filter_template = '外出の行動を除く [%STATUS%]';
  ui_save_game = 'セーブ';
  ui_load_game = 'ロード';

  ui_foreign_study_template = '%LAN%の学習';
  ui_foreign_rest = '静養';
  ui_foreign_train = '適性トレーニング';
  ui_foreign_travel = '観光';

  ui_act_event_tip = 'この行動にはイベントがある';
  ui_loc_npc_tip_template = 'この場所に %COUNT% 人';
  ui_loc_back_tip = '引き返しでイベントがある';
  ui_loc_event_tip = 'この場所にはイベントがある';
  ui_loc_celebration_tip_template = 'この場所の %COUNT% 人に祭事イベント';

  ui_cost_chara_stamina_tip_template =
    '担当の体力が足りない（必要：%STAMINA%）';
  ui_cost_chara_time_tip_template = '担当の気力が足りない（必要：%TIME%）';
  ui_cost_you_stamina_tip_template = '体力が足りない（必要：%STAMINA%）';
  ui_cost_you_time_tip_template = '気力が足りない（必要：%TIME%）';
  ui_cost_money_tip_template = 'ウマコインが足りない（必要：%MONEY%）';
  ui_foreign_lan_max_tip_template = '%LAN% はもう十分に習熟している';
  ui_foreign_rest_max_tip = '身体はすでに健康に戻っている';
  ui_foreign_train_max_tip = 'コースには完全に適応している';
  ui_celebration_remote_tip = '遠隔では祝えない';

  ui_moon_well_partner_tip = 'そばにまだ人がいる';

  ui_rec_chara_info = '個人情報';
  ui_rec_edu_info = '育成プレビュー';
  ui_rec_exit = 'そのまま去る';

  ui_rec_c_info_template = '%NAME% の個人情報';
  ui_rec_c_body_template = '%NAME% の身体サイズ';
  ui_rec_c_talent_template = '%NAME% の性格特性';
  ui_rec_c_image_template = '%NAME% の調教立ち絵';
  ui_rec_e_train_template = '%NAME% のトレーニング補正';
  ui_rec_e_train_buff_template = '%ATTR%：+%BUFF%%';
  ui_rec_e_adapt_template = '%NAME% の脚質適性';
  ui_rec_e_skill_template = '%NAME% のレース技巧';
  ui_rec_e_aim_template = '%NAME% の育成目標';
  ui_rec_e_title_template = '%NAME% の専属称号';
  ui_rec_e_skill_init = '初期：';
  ui_rec_e_skill_init_pt = 'スキルPt+680';
  ui_rec_e_skill_classic = 'クラシック級で解放：';
  ui_rec_e_skill_after_pt = 'スキルPt+400';
  ui_rec_e_skill_senior = 'シニア級で解放：';

  ui_train_base = '基礎能力';
  ui_train_score = '評価';
  ui_train_pt = 'スキルPt';
  ui_train_race = 'レース能力';
  ui_train_adapt_track = 'バ場適性';
  ui_train_adapt_dis = '距離適性';
  ui_train_adapt_style = '脚質適性';
  ui_train_adapt_ui_conjunction = '・';
  ui_train_learnt_skills = '習得スキル';
  ui_train_learn_skill = 'スキルを覚える';
  ui_train_reset_skill = 'スキルをリセット';
  ui_train_with_s_rate_template =
    '%ATTR%トレーニング Lv.%LEVEL%\n成功率：%SUCCESS%%';
  ui_train_reset_skill_confirm = 'スキルPt 100 でスキルをリセットする？';
  ui_train_skill_header_template = '%NAME% のスキルを選ぶ';
  get_ui_train_skill_pt_info = (pt) => ['スキルPt：', pt];
  ui_train_skill_enable_filter = 'フィルタを開く';
  ui_train_skill_disable_filter = 'フィルタを閉じる';
  get_ui_train_learn_skill = (skill) => [...skill, 'を覚える？'];
  get_ui_train_replace_skill = (skill, remove) => [
    ...skill,
    'を覚える？ ',
    ...remove,
    'と入れ替わる。',
  ];

  get_ui_reg_header = (chara) => [chara, ' の次走を登録する'];
  ui_reg_race_template = '%NAME% (%COUNTRY%) %GRAND% %MARK%';
  ui_grand_live_mark = '🎤';
  ui_reg_registered = '[▲登録済み]';
  get_ui_reg_tip_1_before_begin = (chara) => [
    chara,
    ' はメイクデビューを勝たねば、他のレースには出られない',
  ];
  get_ui_reg_tip_1_after_begin = (chara) => [
    chara,
    ' は、赤く表示されたレースを気にしている',
  ];
  ui_reg_tip_2 = '末尾に星印(*)があるレースは、特別なことが起きうる';
  ui_reg_tip_3 = '末尾に🎤があるレースは大舞台。出走すると名声が増えやすい';
  ui_reg_tip_4 =
    '（仏）などの接尾は海外レース。2週前に登録し、2週前に遠征へ出発する必要がある';
  ui_reg_race_filter_template = '不利なレースを除く [%STATUS%]';
  ui_reg_race_more_info = '詳細を表示 [%STATUS%]';

  get_ui_race_select_contestants = (race) => [
    '次のチームメンバーが ',
    race,
    ' に登録している。避戦を命じる？',
  ];
  ui_race_select_contestant_template = '%NAME% [%STATUS%]';
  ui_race_select_selected = '出走';
  ui_race_select_prevent = '避戦';
  ui_race_select_done = '出走名簿を確定';
  get_ui_race_your_tp = (you) => [you, ' の気力'];
  ui_race_prev_template = '前の人\n%NAME%';
  ui_race_next_template = '次の人\n%NAME%';
  ui_race_item_prev_template = '前の人 %NAME%';
  ui_race_item_next_template = '次の人 %NAME%';
  get_ui_race_preview_contestant_entry = (score, motivation, pop, pop_mark) => [
    score,
    { isDivider: true },
    ...motivation,
    { isDivider: true },
    ' 人気 ',
    pop,
    ' 位 ',
    pop_mark,
  ];
  ui_race_preview_contestant_attr = '%ATTR% (%RANK%)';
  ui_race_preview_contestant_style = '出走脚質';
  get_ui_race_preview_contestant_adapt = (name, adapt) => [name, ' ', adapt];
  ui_race_preview_contestant_tip =
    '* 出走馬は枠番の低い順。チームメンバーは緑、強敵は赤';
  ui_race_bt_go = '出走！';
  ui_race_bt_chart = 'コースデータ';
  ui_race_bt_item = '玩具を装着';
  get_ui_race_preview_equip_item = (chara) => [chara, ' に性玩具を装着：'];
  ui_race_preview_equip_item_part_template = '%NAME% の %PART% に性玩具を装着';
  get_ui_race_preview_item_stg_template = 'あと %COUNT% 個';
  ui_race_preview_equip_item_v_tip = 'まだ処女だ！';
  ui_race_preview_equip_item_a_cond =
    '必要：アナル回数 %REQUIRE%（現在：%CURRENT%）';
  ui_race_start_event = '誰にレース前の声をかける？';
  ui_race_speed_1 = '等倍で見る';
  ui_race_speed_2 = '2倍速で見る';
  ui_race_speed_4 = '4倍速で見る';
  ui_race_few_contestants = '出走馬の表示を減らす';
  ui_race_skip_race = '結果を見る';
  ui_race_timer_template = 'タイマー：%TIMER%';
  ui_race_progress = '経過';
  ui_race_contestant_no = '番号';
  ui_race_contestant_name = '名前';
  ui_race_contestant_style = '脚質';
  ui_race_contestant_total_time = 'タイム';
  ui_race_contestant_speed = 'スピード';
  ui_race_contestant_loc = '相対位置';
  ui_race_contestant_rank = '順位';
  ui_race_contestant_progress_template =
    '%LOCATION% (%LANE% %SLOPE% %BLOCKED% %TEMPTATION%)';
  ui_race_start = 'ゲートイン！';
  ui_race_bad_start = '出遅れ！';
  ui_race_reporter = '実況';
  ui_race_result_summary = '掲示板';
  get_ui_race_result_summary_header = (track, race) => [track, ' ', race];
  ui_race_result_location = '相対位置の集計';
  ui_race_result_location_header = '先頭との相対位置グラフ';
  ui_race_result_speed = 'スピードの集計';
  ui_race_result_speed_header = 'スピード統計図';
  ui_race_result_endurance = '持久力の集計';
  ui_race_result_endurance_header = '持久力統計図';
  ui_race_result_skills = '発動スキルの集計';
  ui_race_result_log = 'レースログ';
  get_ui_race_result = (chara, race, rank) => [
    chara,
    ' は ',
    race,
    ' で ',
    rank,
    '！',
  ];
  ui_race_end_event = '誰を祝う／慰める？';
  ui_race_event_chara_template = '%NAME% (%RANK%)';
  ui_race_event_end = '終了';
  ui_race_event_tip = '* ボタンが赤いキャラには専属イベントがある';
  get_ui_race_honour_reward = (you, up_info) => [
    'チームの活躍で、世間の ',
    you,
    ' への評価が',
    up_info,
    'した！',
  ];
  get_ui_race_honour_pregnant_punish = (you, down_info) => [
    'チームは活躍したが、現役トレーナーの私生児スキャンダルで、世間の ',
    you,
    ' への評価が',
    down_info,
    'した！',
  ];
  get_ui_race_honour_hentai_punish = (you, down_info) => [
    'チームの変態行為で、世間の ',
    you,
    ' への評価が',
    down_info,
    'した！',
  ];
  get_ui_race_honour_lose_punish = (you, down_info) => [
    'チームの敗戦で、世間の ',
    you,
    ' への評価が',
    down_info,
    'した！',
  ];
  get_ui_race_money_reward = (money) => [
    'レース賞金の分け前 ',
    money,
    ' ウマコインを受け取った',
  ];

  get_ui_out_confirm = (chara) => [chara, ' と、どこへ行く？'];
  ui_out_self_confirm = 'ひとりで、どこへ行く？';
  get_ui_bt_talk_with_npc_template = '%NAME% に話しかける';
  ui_deep_interact_with_npc_template =
    'まだそこまでの仲ではない（必要：好感 %R_REQUIRE% 以上、現在：%R_CURRENT%；または恋慕 %L_REQUIRE% 以上、現在：%L_CURRENT%）';
  get_ui_out_bye = (chara, you) => [
    '【',
    chara,
    ' に別れを告げ、',
    you,
    ' は去った】',
  ];
  ui_moon_well_close_tip = '秘湯はいま営業していない';
  ui_mejiro_city_alone_tip = '目白城は独り旅を歓迎しない';
  ui_mejiro_city_love_tip_template =
    'まだそこまでの仲ではない（必要：%REQUIRE% 以上、現在：%CURRENT%）';

  ui_select_action_atrium = '中庭では、何をする？';
  ui_action_atrium_tree_hollow = '枯れた木の洞を見る';
  ui_action_atrium_date = 'デート';
  ui_select_action_river = '川辺では、何をする？';
  ui_action_river_fish = '釣り';
  ui_action_river_walk = '散歩';
  ui_select_action_shopping = '商店街では、何をする？';
  ui_action_shopping_arcade = 'ゲーセンへ';
  ui_action_shopping_drawing = 'くじ引き';
  ui_action_shopping_ktv = 'カラオケ';
  ui_action_shopping_movie = '映画';
  ui_action_shopping_ero_item = 'ピンクの店をのぞく';
  ui_select_action_station = '駅では、何をする？';
  ui_action_station_restaurant = '食事';
  ui_action_station_date = 'デート';
  ui_action_station_shopping = 'デパート巡り';

  ui_race_report_header = '出走予定';

  ui_shop_limited_item_entry_template = '%ITEM%(限)';
  ui_shop_hold = '所持';
  ui_shop_max = '最大';
  ui_shop_buy_template = '購入（%PRICE% ウマコイン）';
  ui_shop_tip = '* 道具を押すと説明\n** 「限」は1つしか持てない';
  get_ui_shop_bargain = (item, discount) => [
    '*** 今週の特価！ ',
    item,
    ' ',
    discount,
    '！',
  ];
  ui_shop_30_off = '30%off';
  ui_shop_50_off = '50%off';
  ui_shop_acc_switch_template = 'ショートカットを隠す [%STATUS%]';
  get_ui_shop_buy = (item, count) => [item, ' を ', count, ' 個買った'];

  get_ui_take_care = (chara) => [chara, ' に、誰の世話を頼む？'];
  get_ui_take_care_change_confirm = (chara, curr) => [
    chara,
    ' はいま ',
    curr,
    ' を世話している。相手を切り替える？',
  ];
  ui_take_care_aim_continue_template = '%NAME%（世話中）';
  ui_take_care_aim_taken_template = '%NAME%（%TEACHER% が世話中）';
  ui_take_care_bt_cancel = '世話をやめる';
  ui_take_care_bt_keep = 'このまま';
  get_ui_take_care_continue = (chara, curr) => [
    chara,
    ' は引き続き ',
    curr,
    ' を世話する',
  ];
  get_ui_take_care_cancel = (chara, prev) => [
    chara,
    ' はもう ',
    prev,
    ' を世話しない',
  ];
  get_ui_take_care_change = (chara, next) => [
    chara,
    ' はこれから ',
    next,
    ' を世話する',
  ];

  ui_storage_have_items =
    'いま持っている道具：（ボタンで使う、または説明を見る）';
  ui_storage_no_items = '道具は持っていない';
  ui_storage_select_header_template = '%ITEM% を使う相手を選ぶ';
  ui_storage_no_targets_template = '%ITEM% を使える相手がいない';

  ui_bt_self_info = '自分の情報';
  ui_bt_chara_info = '相手の情報';

  ui_wur_sleep = '黙って味わう';
  ui_wur_wake = '目を覚ます';

  ui_sex_bt_setting = '設定';
  ui_sex_bt_touch = '身体接触';
  ui_sex_bt_stain = '汚れ確認';
  ui_sex_bt_turn_around = '向きを変える';

  bs_info_template = '薄暗い部屋……%DURABILITY%……';
  bs_no_one_info_template = '薄暗く、無人の部屋……%DURABILITY%……';
  ui_bs_durability_0 = 'だが、まったく無防備';
  ui_bs_durability_1 = 'だが、少し細工すれば足りそう';
  ui_bs_durability_2 = '扉は簡単には開きそうにない';
  ui_bs_durability_3 = '厄介な障害がいくつもある';
  ui_bs_durability_4 = '設備はどれも頑丈だ';
  ui_bs_durability_5 = 'どんな抵抗も、ここでは痛くも痒くもない';

  ui_bs_flatter = '媚びを売る';
  ui_bs_unlock = '脱出を試す';
  ui_bs_relax = 'ただ座る';
  ui_bs_sleep = '少し眠る';
  ui_bs_eat = '少し食べる';
  ui_bs_sex = '夜のお誘い';
  ui_bs_strike = '背後から襲う';
  ui_bs_battle = '正面から抗う';
  ui_bs_release = '解放を願う';
  ui_bs_clock = '時刻を尋ねる';
  ui_bs_guide = '脱出ガイド';

  ui_save_game_header = 'どの欄に保存する？';
  ui_auto_save_template = '%NAME%（自動セーブ）';
  ui_empty_save = '空き欄';
  ui_save_rename = '改名';
  ui_save_name_save = 'この物語に名を付ける';
  ui_save_remove_save = 'この物語の名を消す';
  ui_save_name_save_header = 'セーブ名を入力：';
  ui_save_name_save_confirm_template = 'この物語を [%NAME%] と名付ける？';
  ui_save_name_save_result_template = 'この物語を [%NAME%] と名付けた';
  ui_save_name_remove_confirm_template = '[%NAME%] の名を消す？';
  ui_save_name_remove_result = '名を消した。次回の保存はデフォルト名になる';
  ui_save_override_confirm_template = '%NO% 番のセーブを上書きする？';
  ui_save_save_result_template = '%NO% 番に保存した';
  ui_save_rename_confirm_template = '%NO% 番を [%NAME%] に改名する？';
  ui_save_rename_result_template = '%NO% 番の改名に成功';
  ui_save_rename_cancel_template = '%NO% 番の改名をやめた';

  ui_load_game_header = 'どの欄から読む？';
  ui_load_remove = '削除';
  ui_load_fail_template = '%NO% 番の読み込みに失敗した';
  ui_load_remove_success_template = '%NO% 番を削除した';

  name = new (require('#/i18n/ja-JP/chara/names'))();
  title = new (require('#/i18n/ja-JP/chara/titles'))();
  title_desc = new (require('#/i18n/ja-JP/chara/title-desc'))();
  feature = new (require('#/i18n/ja-JP/chara/feature'))();
  detail = new (require('#/i18n/ja-JP/chara/detail'))();

  kojo = new (require('#/i18n/ja-JP/kojo/entry'))();
  timon = new (require('#/i18n/ja-JP/timon/entry'))();

  new_game = new (require('#/i18n/ja-JP/new-game'))();
  location = new (require('#/i18n/ja-JP/location'))();
  vehicle = new (require('#/i18n/ja-JP/vehicle'))();
  note = new (require('#/i18n/ja-JP/notes'))();
  achievement = new (require('#/i18n/ja-JP/achieve'))();
  achieve_desc = new (require('#/i18n/ja-JP/achieve-desc'))();

  tb_abl = new (require('#/i18n/ja-JP/table/abl'))();
  tb_exp = new (require('#/i18n/ja-JP/table/exp'))();
  tb_item = new (require('#/i18n/ja-JP/table/item'))();
  tb_mark = new (require('#/i18n/ja-JP/table/mark'))();
  tb_param = new (require('#/i18n/ja-JP/table/param'))();
  tb_stain = new (require('#/i18n/ja-JP/table/stain'))();
  tb_status = new (require('#/i18n/ja-JP/table/status'))();
  tb_talent = new (require('#/i18n/ja-JP/table/talent'))();
  abl_desc = new (require('#/i18n/ja-JP/table/abl-desc'))();
  item_desc = new (require('#/i18n/ja-JP/table/item-desc'))();
  status_desc = new (require('#/i18n/ja-JP/table/status-desc'))();
  talent_desc = new (require('#/i18n/ja-JP/table/talent-desc'))();

  sex = new (require('#/i18n/ja-JP/sex/main'))();
  train_action = new (require('#/i18n/ja-JP/sex/actions'))();
  body_part = new (require('#/i18n/ja-JP/sex/parts'))();
  jewel_shop = new (require('#/i18n/ja-JP/sex/shop'))();
  inmon = new (require('#/i18n/ja-JP/sex/inmons'))();
  inmon_desc = new (require('#/i18n/ja-JP/sex/inmon-desc'))();

  clothe = new (require('#/i18n/ja-JP/race/clothes'))();
  race = new (require('#/i18n/ja-JP/race/races'))();
  skill = new (require('#/i18n/ja-JP/race/skills'))();
  skill_desc = new (require('#/i18n/ja-JP/race/skill-desc'))();
  inherit_shop = new (require('#/i18n/ja-JP/race/inherit'))();
  gene = new (require('#/i18n/ja-JP/race/genes'))();
  gene_desc = new (require('#/i18n/ja-JP/race/gene-desc'))();
  mob = require('#/i18n/ja-JP/race/uma-mob.json');
};
