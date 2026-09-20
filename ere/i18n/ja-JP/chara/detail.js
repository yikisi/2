module.exports = class extends require('#/i18n/zh-CN/chara/detail') {
  base_title = '個人情報';
  get_base_summary_info = (
    skin,
    hair,
    body_hair,
    characteristic,
    sex_title,
  ) => [
    '肌色',
    skin,
    ' の ',
    hair,
    ' ',
    body_hair,
    ' ',
    characteristic,
    ' ',
    sex_title,
  ];
  base_hair_info_template = '髪型：%HAIR%';
  base_birthday_info_template = '%YEAR% 年 %MONTH% 月 %DATE% 日生まれ';
  base_birthday_info_no_year_template = '%MONTH% 月 %DATE% 日生まれ';
  base_header_body = '身体サイズ';
  get_base_body_info = (height, weight) => [
    '身長：',
    height,
    'cm',
    { isDivider: true },
    '体重：',
    weight,
  ];
  base_body_weight_fat = 'し、幸せ太り……';
  base_body_weight_heavy = '微増';
  base_body_weight_normal = '管理できている';
  base_body_hidden = 'これ以上のデータはない';
  get_base_female_info = (bust, cup, waist, hip) => [
    'スリーサイズ：B',
    bust,
    ' (',
    cup,
    ' Cup) ・ W',
    waist,
    ' ・ H',
    hip,
  ];
  /** @param {CharaTalk} chara */
  get_base_hair_select = (chara) => [
    chara.get_colored_name(),
    ' の新しい髪型を選ぶ',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_auto_select = (chara, clothe) => [
    'いま ',
    chara.get_colored_name(),
    ' は出走時、場面と祭事に応じて装い、URA表彰式と育成終了後の殿堂週は勝負服 [',
    clothe,
    '] を着る。',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_keep_some = (chara, clothe) => [
    'いま ',
    chara.get_colored_name(),
    ' は出走時、URA表彰式、育成終了後の殿堂週に勝負服 [',
    clothe,
    '] を着る。',
  ];
  base_clothe_change_confirm = '着替える？';
  base_clothe_bt_auto_select = 'その場で選ぶ';
  base_clothe_bt_keep_current = 'このまま';
  base_bt_comb_hair = '髪を梳く';

  edu_title = '育成の状況';
  get_edu_score = (score) => ['評価：', score];
  edu_date_template = '%YEAR% %MONTH% 月 第 %WEEK% 週';
  edu_date_with_playthrough_template =
    '%YEAR% %MONTH% 月 第 %WEEK% 週（第 %PLAYTHROUGH% 周回）';
  get_edu_pt = (pt) => ['スキルPt ', pt, ' 所持'];
  edu_header_attr = '基礎能力';
  get_edu_attr = (attr_name, attr) => [attr_name, '：', attr];
  edu_header_adapt = 'レース適性';
  get_edu_adapt = (adapt_name, adapt) => [adapt_name, '：', adapt];
  edu_header_aim_template = '育成目標（%CURRENT%/%TOTAL%）';
  edu_header_aim_finished = '育成目標（達成！）';
  edu_aim_template = '%DESC% %CURRENT%/%REQUIRE% %MARK%';
  edu_aim_template_in_rec = '%DESC% %REQUIRE%';
  edu_aim_desc_template = '%EDUTIME% %RACE%';
  edu_aim_common_desc_1 = 'G1 入着';
  edu_aim_common_desc_2 = 'G2以上 3着以内';
  edu_aim_common_desc_3 = '任意のレース 1着';
  edu_aim_require_template = '%REQUIRE% 回';
  edu_aim_require_1 = '1着';
  edu_aim_require_2 = '2着以内';
  edu_aim_require_3 = '3着以内';
  edu_aim_require_4 = '4着以内';
  edu_aim_require_5 = '入着';
  edu_aim_require_20 = '出走';
  edu_aim_mark_done = '✔';
  edu_aim_mark_no = '✘';
  edu_header_language = '言語スキル';

  skill_title = 'レース技巧';
  skill_header_learnt = '習得スキル';
  skill_no_skill = '未習得';
  skill_header_available = '未解放スキル';
  skill_header_gene = '因子継承';
  skill_no_gene = '未継承';
  skill_header_gene_available = '継承できる因子';

  race_title = '出走成績';
  race_header_race = 'レース戦績';
  race_no_race = '未出走';
  get_race_summary = (race_count, win, reward) => [
    race_count,
    ' 戦 ',
    win,
    ' 勝、総賞金 ',
    reward,
  ];
  get_race_result = (year, race, result) => [
    year,
    ' 年 ',
    race,
    ' ・ ',
    result,
  ];
  race_result_tip_template = '人気 %POP% 位 ・ %STYLE%';
  race_header_title = '専属称号';

  relation_title = '交友関係';
  relation_header_relation = '対人';
  get_relation_entry = (name, relation) => [name, '：', relation];
  relation_no_relation = '気にかけているキャラはいない';
  get_relation_take_care = (chara) => [chara, ' を世話中'];
  get_relation_be_taken_care = (chara) => [chara, ' に世話されている'];
  relation_header_family = '直系の親族';
  get_relation_family_parents = (father, mother) => [
    '父は ',
    father,
    '、母は ',
    mother,
  ];
  get_relation_first_child_as_father = (date, _, __, chara, is_boy) => [
    is_boy ? '長男' : '長女',
    ' ',
    chara,
    ' は ',
    date,
    ' 生まれ',
  ];
  get_relation_first_child_as_mother = (date, _, __, chara, is_boy) => [
    date,
    ' に ',
    is_boy ? '長男' : '長女',
    ' ',
    chara,
    ' を産んだ',
  ];
  relation_family_children_template = 'いまは %INFO%';
  relation_family_as_father_template = '%COUNT% 人の子の父';
  relation_family_as_mother_template = '%COUNT% 人の子の母';
  relation_family_child_boy_title_template = '%NUMBER%男';
  relation_family_child_girl_title_template = '%NUMBER%女';
  get_relation_family_child_entry_as_father = (title, child, mother) => [
    title,
    ' ',
    child,
    '、母は ',
    mother,
  ];
  get_relation_family_child_entry_as_mother = (title, child, father) => [
    title,
    ' ',
    child,
    '、父は ',
    father,
  ];
  relation_no_family = '紹介できるキャラはいない';
  relation_bt_change_callname_to_you_template = '%YOU% への呼び名を変える';
  relation_bt_reset_callname_to_you_template = '%YOU% への呼び名を戻す';
  relation_bt_change_callname_template =
    'このキャラへの呼び名を変える（%CALLNAME%）';
  relation_bt_reset_callname = 'このキャラへの呼び名を戻す';
  get_relation_change_callname_to_you_confirm = (chara, you) => [
    chara,
    ' に、',
    you,
    ' を何と呼ばせたい？',
  ];
  get_relation_change_callname_confirm = (chara) => [chara, ' を何と呼ぶ？'];
  get_relation_change_callname_result = (caller, callee, callname) => [
    caller,
    ' は ',
    callee,
    ' を ',
    callname,
    ' と呼ぶようになった',
  ];

  sex_title = '性愛の状況';
  sex_exp_slave_2_accept =
    '性奴の務めを受け入れ、ウマ娘様への奉仕を楽しんでいる';
  sex_exp_slave_2_reject =
    '性奴の身分に抗い、異常に激しい肉体の快感にまだ溺れていない';
  sex_exp_slave_3_accept =
    '孕袋の務めを受け入れ、ウマ娘様の新しい命を孕む悦びを味わっている';
  sex_exp_slave_3_reject =
    '孕袋の身分に抗い、人としての誇りをまだ手放していない';
  sex_header_inmon = '淫紋の調整';
  get_sex_exp = (you, sex_count, sleep_info, prison_info) => [
    you,
    ' と ',
    sex_count,
    ' 回床を共にした',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp = (sleep_count) => ['、うち睡眠姦 ', sleep_count, ' 回'];
  get_sex_prison_exp = (prison_count) => [
    '、監禁を ',
    prison_count,
    ' 回行った',
  ];
  get_sex_exp_you = (sex_count, sleep_info, prison_info) => [
    '他キャラと合計 ',
    sex_count,
    ' 回床を共にした',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp_you = (sleep_count) => [
    '、うち睡眠姦された回数 ',
    sleep_count,
  ];
  get_sex_prison_exp_you = (prison_count) => [
    '、監禁された回数 ',
    prison_count,
  ];
  sex_header_abl = '性愛能力';
  get_sex_abl_entry = (abl, level) => [abl, '：', level];
  sex_header_jewel = '所持因子';
  sex_header_mark = '得た刻印';
  sex_image_bt_change_template = '調教立ち絵を変える（現在：%CURRENT%）';
  sex_image_set_template = '第 %SET% セット';
  sex_image_set_common = '共通';
  sex_image_common_info = '共通の調教立ち絵を使う';
  sex_image_personal_info = '専属の調教立ち絵が使える';

  exp_mouth_title = '情報【口】';
  exp_mouth_gift_desc =
    '形の整った唇と口腔。生まれつきの吸い付きは、どんな相手も武装解除する';
  exp_mouth_trained_desc = 'いつどこでも痒さと寂しさを感じる……もう、淫らな唇だ';
  exp_mouth_drink_semen = '唇に淡い白濁が残っている……';
  exp_mouth_drink_semen_template = 'ついさきほど精液 %SEMEN%ml を飲んだ様子';
  get_exp_mouth_kiss = (date, chara) => [
    '初キスは ',
    date,
    '、',
    chara,
    ' に捧げた',
  ];
  get_exp_mouth_unknown_kiss = (date, chara) => [
    '実際には、初キスは ',
    date,
    ' にすでに ',
    chara,
    ' に奪われていた',
  ];
  get_exp_mouth_kiss_count = (count) => ['キスした回数 ', count];
  get_exp_mouth_blow_job = (date, chara) => [
    date,
    '、',
    chara,
    ' と、この口の別の使い方を探った',
  ];
  get_exp_mouth_be_blow_job = (date, chara) => [
    date,
    '、',
    chara,
    ' に、この口の別の使い方を教えられた',
  ];
  get_exp_mouth_unknown_be_blow_job = (date, chara) => [
    '実際には、早くも ',
    date,
    ' に初めて ',
    chara,
    ' に使われていた',
  ];
  get_exp_mouth_suck_count = (count) => ['身体を慰めた回数 ', count];
  get_exp_mouth_blow_job_count = (count) => ['性器を吸った回数 ', count];
  get_exp_mouth_drink_semen = (date, chara) => [
    date,
    '、初めて ',
    chara,
    ' の精液を味わい、その腥い匂いにも知らず惹かれた',
  ];
  get_exp_mouth_unknown_drink_semen = (date, chara) => [
    '実際には、',
    date,
    ' にはすでに ',
    chara,
    ' の精液の味に慣れていた',
  ];
  get_exp_mouth_drink_semen_count = (count) => ['飲んだ精液 ', count, 'ml'];
  exp_mouth_poisoned_sens = '温かい精液を飲むたび、喉が疼いて仕方ない';
  exp_mouth_poisoned_meek = '温かい精液を飲むたび、幸せを感じる';
  exp_mouth_poisoned_both = '温かい精液を飲むたび、喉が幸せに疼く';
  get_exp_mouth_drink_secretion = (date, chara) => [
    date,
    '、',
    chara,
    ' の桜穴から、初めて悦びの蜜を啜った',
  ];
  get_exp_mouth_unknown_drink_secretion = (date, chara) => [
    '実際には、',
    date,
    ' にすでに ',
    chara,
    ' の淫液を飲まされていた',
  ];
  get_exp_mouth_drink_secretion_count = (count) => ['飲んだ愛液 ', count, 'ml'];
  get_exp_mouth_drink_milk = (date, chara) => [
    date,
    '、飢えではなく、初めて ',
    chara,
    ' の胸を吸った。味は気に入っただろうか？',
  ];
  get_exp_mouth_drink_milk_count = (count) => ['飲んだ乳 ', count, 'ml'];
  get_exp_mouth_orgasm = (count) => ['快感でイった回数 ', count];

  exp_breast_title = '情報【胸】';
  exp_breast_summary_man = 'たくましい胸筋';
  exp_breast_nipple_pink = 'ピンクの小さな苺';
  exp_breast_nipple_deep = '濃い色の小さな桜桃';
  exp_breast_nipple_inverted = '深い火山湖';
  get_exp_breast_summary_woman = (nipple, size) => [
    '先端は ',
    nipple,
    ' の ',
    size,
    ' の乳房',
  ];
  exp_breast_gift_desc =
    '曲線の美しい天与の豊乳。完璧な弾力は、どんな訪客も足を止めさせる';
  exp_breast_trained_desc =
    'いつどこでも痒さと寂しさを感じる……もう、淫らな乳房だ';
  exp_breast_milk = '前合わせが少し湿っていても……疑わないで。汗ですから……';
  exp_breast_milk_template =
    'クリップに阻まれ、いま %MILK%ml の乳が溜まっている……乳首が痛い';
  get_exp_breast_self_milk = (date) => [
    date,
    '、初めて自分で乳首を愛撫し、立った',
  ];
  get_exp_breast_be_milk = (date, chara) => [
    date,
    '、初めて ',
    chara,
    ' に乳首を愛撫され、立った',
  ];
  get_exp_breast_unknown_be_milk = (date, chara) => [
    '実際には、その胸はすでに ',
    chara,
    ' の玩具だ。',
    date,
    ' から',
  ];
  get_exp_milk_count = (count) => ['弄ばれた回数 ', count];
  get_exp_breast_tit_job = (date, chara) => [
    chara,
    ' の肉棒は胸で興奮する。',
    date,
    ' にそれを覚えた',
  ];
  get_exp_breast_be_tit_job = (date, chara) => [
    chara,
    ' の肉棒は胸で興奮する。',
    date,
    ' にそれを教えられた',
  ];
  get_exp_breast_unknown_be_tit_job = (date, chara) => [
    '実際には、',
    date,
    ' 以降、胸は ',
    chara,
    ' の肉棒に仕えることに慣れている。本人は知らないが',
  ];
  get_exp_breast_tit_job_count = (count) => ['性器を慰めた回数 ', count];
  get_exp_breast_semen_count = (count) => ['かかった精液 ', count, 'ml'];
  get_exp_breast_milking = (date, chara, _, cup) => [
    date,
    '、',
    chara,
    ' に、自分の ',
    cup,
    ' の胸の中身の味を初めて味わわせた',
  ];
  get_exp_breast_double_milking = (date, chara, supporter, cup) => [
    date,
    '、',
    chara,
    ' と ',
    supporter,
    ' に、自分の ',
    cup,
    ' の胸の中身の味を初めて味わわせた',
  ];
  get_exp_breast_milking_count = (count) => ['授乳した回数 ', count];
  get_exp_breast_milking_amount = (amount) => ['出した乳 ', amount, 'ml'];
  get_exp_breast_orgasm = (count) => ['快感でイった回数 ', count];

  exp_body_title = '情報【身】';
  exp_body_no_armpit_hair = '生まれつき無毛で滑らかな腋';
  exp_body_clean_armpit_hair = '腋はいま滑らかで無毛';
  get_exp_body_armpit_hair = (armpit_hair) => ['腋には ', armpit_hair];
  exp_body_trained_desc =
    '他人の温もりを欲している……肉体は淫欲そのものになりつつある';
  get_exp_body_face_semen = (date, chara) => [
    date,
    '、初めて ',
    chara,
    ' に精液で顔を覆われた',
  ];
  get_exp_body_unknown_face_semen = (date, chara) => [
    '実際には、顔は ',
    date,
    ' にすでに ',
    chara,
    ' の精液に覆われていた',
  ];
  get_exp_body_face_semen_count = (count, amount) => [
    '顔射された回数 ',
    count,
    '、かかった精液 ',
    amount,
    'ml',
  ];
  get_exp_body_body_sex = (date, chara) => [
    date,
    ' は、初めて身体で ',
    chara,
    ' の肉棒と欲望を受け止めた日',
  ];
  get_exp_body_be_body_sex = (date, chara) => [
    date,
    ' は、身体が初めて ',
    chara,
    ' の肉棒と欲望で満たされた日',
  ];
  get_exp_body_unknown_be_body_sex = (date, chara) => [
    '実際には、',
    date,
    ' から、寝顔も吐息も無防備な身体も、すでに ',
    chara,
    ' の肉棒の穴だ',
  ];
  get_exp_body_body_sex_count = (count) => ['性器を慰めた回数 ', count];
  get_exp_body_semen_amount = (amount) => ['かかった精液 ', amount, 'ml'];
  exp_body_poisoned_sens = '温かい精液がかかるたび、肌が疼いて仕方ない';
  exp_body_poisoned_meek = '温かい精液がかかるたび、幸せを感じる';
  exp_body_poisoned_both = '温かい精液がかかるたび、肌が幸せに疼く';
  get_exp_body_orgasm = (count) => ['快感でイった回数 ', count];

  exp_hf_title = '情報【手足】';
  exp_hf_header_hand = '情報【手】';
  exp_hand_gift_desc = '愛撫は神業。指の運びだけで相手の心を蕩かす';
  get_exp_hf_hand_job = (date, chara) => [
    '指は、いちばん原始的でいちばん使いやすい玩具だ。',
    date,
    '、',
    chara,
    ' のおかげでそれを覚えた',
  ];
  get_exp_hf_self_hand_job = (date) => [
    '指は、いちばん原始的でいちばん使いやすい玩具だ。',
    date,
    '、自分でそれを覚えた',
  ];
  get_exp_hf_be_hand_job = (date, chara) => [
    '指は、いちばん原始的でいちばん使いやすい玩具だ。',
    chara,
    ' に ',
    date,
    ' 教えられた',
  ];
  get_exp_hf_unknown_be_hand_job = (date, chara) => [
    '実際には、',
    date,
    '、指はすでに ',
    chara,
    ' の愛液で淫らな匂いを纏っていた',
  ];
  get_exp_hf_hand_job_count = (count) => ['肉棒を揉んだ回数 ', count];
  get_exp_hf_touch_vagina_count = (count) => ['秘部をほじった回数 ', count];
  get_exp_hf_touch_anal_count = (count) => ['尻穴をほじった回数 ', count];
  get_exp_hf_touch_body_count = (count) => ['身体を撫でた回数 ', count];
  get_exp_hf_touch_breast_count = (count) => ['胸を揉んだ回数 ', count];
  exp_hf_header_foot = '情報【足】';
  exp_foot_gift_desc = '脚の動きに1ミリの狂いもない。足コキは神業';
  get_exp_hf_foot_job = (date, chara) => [
    date,
    '、初めて ',
    chara,
    ' の肉棒を足の下に踏みつけた',
  ];
  get_exp_hf_unknown_be_foot_job = (date, chara) => [
    '実際には、足も趾も ',
    chara,
    ' の肉棒の玩具になった。',
    date,
    ' 以降、歩くとき寂しさを感じるか',
  ];
  get_exp_hf_foot_job_count = (count) => ['肉棒を弄った回数 ', count];
  get_exp_hf_step_on_vagina_count = (count) => ['秘部を弄った回数 ', count];
  get_exp_hf_step_on_body_count = (count) => ['身体を踏んだ回数 ', count];

  get_exp_pv_pubic_hair = (pubic_hair) => ['下腹には ', pubic_hair];

  exp_penis_title = '情報【茎】';
  exp_penis_no_pubic_hair = '生まれつき滑らかで無毛';
  exp_penis_clean_pubic_hair = '下腹はいま滑らかで無毛';
  exp_penis_drug = '薬の力で得た';
  get_exp_penis_summary = (drug, color, size) => [
    '下方は',
    drug,
    ' ',
    color,
    ' で ',
    size,
    ' の肉棒',
  ];
  exp_penis_gift_desc =
    '完璧無欠の擎天の龍。先走りは、すでに卵子を孕ませそうだ';
  exp_penis_trained_desc = '精関が緩く、ひとたまりもなく洩れやすい';
  get_exp_penis_lose_virgin = (date, chara) => [
    date,
    '、童貞を ',
    chara,
    ' に渡した',
  ];
  get_exp_penis_lose_virgin_sleep = (date, chara) => [
    date,
    '、童貞をこっそり ',
    chara,
    ' に渡した',
  ];
  get_exp_penis_be_lose_virgin = (date, chara) => [
    '童貞は ',
    date,
    ' に ',
    chara,
    ' に奪われた',
  ];
  get_exp_penis_unknown_be_lose_virgin = (date, chara) => [
    '実際には、すでに ',
    date,
    ' に ',
    chara,
    ' に童貞を奪われていた',
  ];
  get_exp_penis_fuck_body_count = (count) => ['身体を突いた回数 ', count];
  get_exp_penis_fuck_vagina_count = (count) => ['秘部を突いた回数 ', count];
  get_exp_penis_fuck_anal_count = (count) => ['尻穴を突いた回数 ', count];
  get_exp_penis_cum_semen_exp = (date, chara, _, amount) => [
    '初めて ',
    chara,
    ' の身体に種 ',
    amount,
    'ml を注いだのは ',
    date,
  ];
  get_exp_penis_unknown_cum_semen_exp = (date, chara, _, amount) => [
    '実際には、',
    date,
    ' にすでに ',
    chara,
    ' の淫らな秘部に精液 ',
    amount,
    'ml を搾られていた',
  ];
  get_exp_penis_cum_count = (count) => ['射精 ', count, ' 回'];
  get_exp_penis_cum_amount = (amount) => ['出した精液 合計 ', amount, 'ml'];
  get_exp_penis_fuck_sleep_vagina = (count, you) => [
    '眠っているすきに ',
    you,
    ' を犯した回数 ',
    count,
  ];
  get_exp_penis_fuck_sleep_vagina_you = (count) => [
    '眠っているすきに他キャラを犯した回数 ',
    count,
  ];
  get_exp_penis_be_sleep_fuck = (count) => [
    '眠っているすきに犯され、気づかなかった回数 ',
    count,
  ];

  exp_vagina_title = '情報【女陰】';
  exp_vagina_no_pubic_hair = '生まれつき白虎、粉膩で愛らしい';
  exp_vagina_clean_pubic_hair = '秘部はいま滑らかで無毛、粉膩で愛らしい';
  exp_vagina_pink = '淡く愛らしい';
  exp_vagina_purple = '赤く、紫を帯びる';
  exp_vagina_deep = '深く、熟している';
  get_exp_vagina_summary = (color) => [color, ' の秘部を持つ'];
  exp_vagina_gift_desc = '生きもののような洞穴。訪れた客は搾られるほかない';
  exp_vagina_clitoris_trained_desc =
    '軽く擦るだけで充血して勃起する……もう、淫らな豆だ';
  exp_vagina_vagina_trained_desc =
    '終日愛液を出し、いつでも挿入を待つ淫壺……もう、淫らな秘部だ';
  exp_vagina_semen = '太ももの内側に点々と……';
  exp_vagina_semen_template =
    '秘部のなかには、まだ精液 %SEMEN%ml ほど残っている';
  get_exp_vagina_lose_virgin = (date, chara, _, penis) => [
    date,
    '、処女を ',
    chara,
    ' の ',
    penis,
    ' の肉棒に捧げた',
  ];
  get_exp_vagina_lose_virgin_sleep = (date, chara, _, penis) => [
    date,
    '、処女をこっそり ',
    chara,
    ' の ',
    penis,
    ' の肉棒に捧げた',
  ];
  get_exp_vagina_be_lose_virgin = (date, chara, _, penis) => [
    '処女は ',
    date,
    ' に ',
    chara,
    ' の ',
    penis,
    ' の肉棒に奪われた',
  ];
  get_exp_vagina_unknown_be_lose_virgin = (date, chara, _, penis) => [
    '実際には、すでに ',
    date,
    ' に ',
    chara,
    ' の ',
    penis,
    ' の肉棒に処女を奪われていた',
  ];
  get_exp_vagina_vagina_touched_count = (count) => ['弄ばれた回数 ', count];
  get_exp_vagina_fucked_count = (count) => ['刺し入れられた回数 ', count];
  get_exp_vagina_cumed_exp = (date, chara, _, amount) => [
    chara,
    ' の種 ',
    amount,
    'ml を受け入れたのは ',
    date,
  ];
  get_exp_vagina_unknown_cumed_exp = (date, chara, _, amount) => [
    '実際には、大切な膣と子宮は ',
    date,
    ' にすでに ',
    chara,
    ' の精液 ',
    amount,
    'ml で洗礼されていた',
  ];
  get_exp_vagina_out_semen = (amount) => ['かかった精液 ', amount, 'ml'];
  get_exp_vagina_cumed_semen = (count, amount) => [
    '射精を受けた回数 ',
    count,
    '、中に射入された精液 ',
    amount,
    'ml',
  ];
  exp_vagina_poisoned_sens = '温かい精液を注がれるたび、子宮が疼いて仕方ない';
  exp_vagina_poisoned_meek = '温かい精液を注がれるたび、幸せを感じる';
  exp_vagina_poisoned_both = '温かい精液を注がれるたび、子宮が幸せに疼く';
  get_exp_vagina_squirt_exp = (date, chara) => [
    date,
    '、',
    chara,
    ' の前で初めて淫らな蜜を噴いた',
  ];
  get_exp_vagina_squirt_exp_both = (date, chara, supporter) => [
    date,
    '、',
    chara,
    ' と ',
    supporter,
    ' の前で初めて淫らな蜜を噴いた',
  ];
  get_exp_vagina_squirt_exp_self = (date) => [
    date,
    '、初めて自分で淫らな蜜を噴かせた',
  ];
  get_exp_vagina_unknown_squirt_exp = (date, chara) => [
    '実際には、',
    date,
    ' にすでに ',
    chara,
    ' に花蜜を摘まれていた',
  ];
  get_exp_vagina_unknown_squirt_exp_both = (date, chara, supporter) => [
    '実際には、',
    date,
    ' にすでに ',
    chara,
    ' と ',
    supporter,
    ' に花蜜を摘まれていた',
  ];
  get_exp_vagina_unknown_squirt_exp_self = (date) => [
    '実際には、',
    date,
    ' に知らず第一筋の蜜を分泌していた',
  ];
  get_exp_vagina_clitoris_orgasm = (count) => ['豆で絶頂した回数 ', count];
  get_exp_vagina_vagina_orgasm = (count) => ['秘部で絶頂した回数 ', count];
  get_exp_vagina_squirt_count = (count, amount) => [
    '潮吹き 合計 ',
    count,
    ' 回、分泌した愛液 ',
    amount,
    'ml',
  ];
  get_exp_vagina_squirt_amount = (amount) => [
    '分泌した愛液 合計 ',
    amount,
    'ml',
  ];
  get_exp_vagina_fuck_sleep_penis = (count, you) => [
    '眠っているすきに ',
    you,
    ' を犯した回数 ',
    count,
  ];
  get_exp_vagina_fuck_sleep_penis_you = (count) => [
    '眠っているすきに他キャラを犯した回数 ',
    count,
  ];
  get_exp_vagina_be_sleep_fuck = (count) => [
    '眠っているすきに犯され、気づかなかった回数 ',
    count,
  ];
  exp_vagina_pregnant_in_growth = '初潮はまだ来ていない';
  exp_vagina_pregnant_menstrual_period = '月経中';
  exp_vagina_pregnant_too_many_birth = 'これ以上の種は受け止められない';
  exp_vagina_pregnant_timer_template = '%DESC%（%TIMER% 週）';
  exp_vagina_pregnant_egg_prepared = '卵子は受精を待っている❤️';
  exp_vagina_pregnant_egg_growth = '新しい卵子が育っている';
  exp_vagina_pregnant_egg_out = '卵子は失活し、排出を待っている';
  exp_vagina_pregnant_prob_template = '%DESC%（妊娠率 %PROB%%）';
  exp_vagina_pregnant_desc_resume =
    '子は無事に生まれた。いまは身体に集中するとき';
  exp_vagina_pregnant_desc_no = '赤ちゃんの部屋は、パパの光臨を待っている❤️';
  exp_vagina_pregnant_desc_embryo = '小さな新しい命が、すでに育っている';
  exp_vagina_pregnant_desc_fetal = '胎盤は完全にできた。母と子には良質な蛋白を';
  exp_vagina_pregnant_desc_late =
    '胎児は最後の成熟を迎えている。お腹はすでに高く膨らんでいる';
  exp_vagina_pregnant_desc_pre_birth =
    '命の奇跡を迎える時が近い。準備を整えるとき';
  exp_vagina_pregnant_desc_showing = 'お腹はすでに大きく突き出ている';
  exp_vagina_pregnant_desc_known =
    '腹部に兆候はまだない。ふとした生活の変化と検診の結果が、新しい命を告げている';
  get_exp_vagina_pregnant_father = (chara) => [
    '子の父は ',
    chara,
    ' と確認された',
  ];
  get_exp_vagina_pregnant_father_you = (you) => [
    you,
    ' は、子の父が ',
    you,
    ' だと知っている',
  ];

  exp_anal_title = '情報【尻】';
  exp_anal_gift_desc =
    'すべてを呑み込みそうな、締まった黒い穴。行ったら戻れない';
  exp_anal_trained_desc = '温もりで満たされたい直腸……もう、淫らな尻穴だ';
  exp_anal_semen = 'ズボンの後ろが湿った……';
  exp_anal_semen_template = '尻穴に精液 %SEMEN%ml が残っているせいだろう';
  get_exp_anal_anal_sex_exp = (date, chara) => [
    date,
    '、',
    chara,
    ' のおかげで、尻の性的な意味を初めて悟った',
  ];
  get_exp_anal_be_anal_sex_exp = (date, chara) => [
    date,
    '、',
    chara,
    ' に、尻の性的な意味を初めて教えられた',
  ];
  get_exp_anal_unknown_be_anal_sex_exp = (date, chara) => [
    '実際には、',
    date,
    ' にすでに ',
    chara,
    ' に弄ばれていた。もう戻れないだろう',
  ];
  get_exp_anal_anal_sex_count = (count) => ['性器を慰めた回数 ', count];
  get_exp_anal_cum_in_anal_count = (count, amount) => [
    '射精を受けた回数 ',
    count,
    '、中に射入された精液 ',
    amount,
    'ml',
  ];
  exp_anal_poisoned_sens = '温かい精液を注がれるたび、直腸が疼いて仕方ない';
  exp_anal_poisoned_meek = '温かい精液を注がれるたび、幸せを感じる';
  exp_anal_poisoned_both = '温かい精液を注がれるたび、直腸が幸せに疼く';
  get_exp_anal_orgasm = (count) => ['快感でイった回数 ', count];

  exp_sm_title = '情報【虐】';
  exp_sm_sex_title_0 = '牝馬';
  exp_sm_sex_title_1 = '牡馬';
  exp_sm_sex_title_10 = 'ふたなり牝馬';
  exp_sm_sadism_talent_template =
    '生まれながら加虐を己の務めとする淫らなドS %TITLE%。凌辱を頭のなかで想像するだけで興奮する';
  exp_sm_machoism_abuse_talent_template =
    '生まれながら被虐を己の務めとする淫らなドM %TITLE%。罵られる想像をするだけで興奮する';
  exp_sm_machoism_hit_talent_template =
    '生まれながら被虐を己の務めとする淫らなドM %TITLE%。打たれる想像をするだけで興奮する';
  exp_sm_machoism_all_talent_template =
    '生まれながら被虐を己の務めとする淫らなドM %TITLE%。凌辱される想像をするだけで興奮する';
  get_exp_sm_sadism_exp = (date, chara) => [
    date,
    '、初めて ',
    chara,
    ' を虐めた',
  ];
  get_exp_sm_abuse_count = (count) => ['他人を罵った回数 ', count];
  get_exp_sm_hit_count = (count) => ['他人を打った回数 ', count];
  get_exp_sm_sadism_count = (count) => ['加虐感で絶頂した回数 ', count];
  get_exp_sm_machoism_exp = (date, chara) => [
    date,
    '、初めて ',
    chara,
    ' に虐められた',
  ];
  get_exp_sm_be_abused_count = (count) => ['罵られた回数 ', count];
  get_exp_sm_be_hit_count = (count) => ['打たれた回数 ', count];
  get_exp_sm_machoism_count = (count) => ['被虐感で絶頂した回数 ', count];

  desc_conjunction = '\n同時に、';
  human_info = 'ただの人間にすぎない';
  no_reward_info = 'まだ誇れる戦績はない';
  cannot_join_race_info = 'レースに出走できない';
  growth_info = 'まだ成長中だよ';
  no_exp_info = 'まだ関連する経験はない';
  no_known_info = 'まだ十分にわかっていない';
  no_part_info = 'この部位はない';

  prev_template = '前の人 - %NAME%';
  next_template = '次の人 - %NAME%';

  get_child_number(num) {
    const first = '長';
    const second = '次';
    const n10 = ['十', '二十', '三十', '四十'];
    const n0 = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
    if (num === 1) {
      return first;
    } else if (num === 2) {
      return second;
    } else if (num < 10) {
      return n0[num - 1];
    } else if (num < 50) {
      let ret = n10[Math.floor(num / 10) - 1];
      if (num % 10 > 0) {
        ret += n0[(num % 10) - 1];
      }
      return ret;
    }
    return num.toString();
  }
};
