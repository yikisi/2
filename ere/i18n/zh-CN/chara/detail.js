class I18nDetail {
  static _ = new I18nDetail();

  base_title = '个人情报';
  get_base_summary_info = (
    skin,
    hair,
    body_hair,
    characteristic,
    sex_title,
  ) => [
    '肤色',
    skin,
    ' 的 ',
    hair,
    ' ',
    body_hair,
    ' ',
    characteristic,
    ' ',
    sex_title,
  ];
  base_hair_info_template = '发型：%HAIR%';
  base_birthday_info_template = '出生于 %YEAR% 年 %MONTH% 月 %DATE% 日';
  base_birthday_info_no_year_template = '出生于 %MONTH% 月 %DATE% 日';
  base_header_body = '身体尺寸';
  get_base_body_info = (height, weight) => [
    '身高：',
    height,
    'cm',
    { isDivider: true },
    '体重：',
    weight,
  ];
  base_body_weight_fat = '幸、幸福胖哦……';
  base_body_weight_heavy = '微增';
  base_body_weight_normal = '控制得当';
  base_body_hidden = '没有更多数据了';
  get_base_female_info = (bust, cup, waist, hip) => [
    '三围：B',
    bust,
    ' (',
    cup,
    ' Cup) · W',
    waist,
    ' · H',
    hip,
  ];
  base_bt_comb_hair = '梳头';
  /** @param {CharaTalk} chara */
  get_base_hair_select = (chara) => [
    '请选择 ',
    chara.get_colored_name(),
    ' 的新发型',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_auto_select = (chara, clothe) => [
    '现在 ',
    chara.get_colored_name(),
    ' 在参赛时会按照场合和节庆决定着装，在URA颁奖典礼与结束育成后的殿堂周将身着决胜服 [',
    clothe,
    ']。',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_keep_some = (chara, clothe) => [
    '现在 ',
    chara.get_colored_name(),
    ' 在参赛时、URA颁奖典礼与结束育成后的殿堂周将身着决胜服 [',
    clothe,
    ']。',
  ];
  base_clothe_change_confirm = '要更换吗？';
  base_clothe_bt_auto_select = '即时选择';
  base_clothe_bt_keep_current = '保持不变';

  edu_title = '育成情况';
  get_edu_score = (score) => ['评价：', score];
  edu_date_template = '%YEAR% %MONTH% 月 第 %WEEK% 周';
  edu_date_with_playthrough_template =
    '%YEAR% %MONTH% 月 第 %WEEK% 周 (第 %PLAYTHROUGH% 轮)';
  get_edu_pt = (pt) => ['拥有 ', pt, ' 点技能点数'];
  edu_header_attr = '基础属性';
  get_edu_attr = (attr_name, attr) => [attr_name, '：', attr];
  edu_header_adapt = '比赛适应';
  get_edu_adapt = (adapt_name, adapt) => [adapt_name, '：', adapt];
  edu_header_aim_template = '育成目标 (%CURRENT%/%TOTAL%)';
  edu_header_aim_finished = '育成目标 (完成！)';
  edu_aim_template = '%DESC% %CURRENT%/%REQUIRE% %MARK%';
  edu_aim_template_in_rec = '%DESC% %REQUIRE%';
  edu_aim_desc_template = '%EDUTIME% %RACE%';
  edu_aim_common_desc_1 = 'G1 比赛 入着';
  edu_aim_common_desc_2 = 'G2 以上比赛 3 着以内';
  edu_aim_common_desc_3 = '任意比赛 1 着';
  edu_aim_require_template = '%REQUIRE% 次';
  edu_aim_require_1 = '1着';
  edu_aim_require_2 = '2着以内';
  edu_aim_require_3 = '3着以内';
  edu_aim_require_4 = '4着以内';
  edu_aim_require_5 = '入着';
  edu_aim_require_20 = '出走';
  edu_aim_mark_done = '✔';
  edu_aim_mark_no = '✘';
  edu_header_language = '语言技能';

  skill_title = '比赛技巧';
  skill_header_learnt = '习得技能';
  skill_no_skill = '未习得';
  skill_header_available = '待解锁技能';
  skill_header_gene = '因子继承';
  skill_no_gene = '未继承';
  skill_header_gene_available = '可继承因子';

  race_title = '出走成绩';
  race_header_race = '赛事战绩';
  race_no_race = '未出走';
  get_race_summary = (race_count, win, reward) => [
    race_count,
    ' 战 ',
    win,
    ' 胜，总赏金 ',
    reward,
  ];
  get_race_result = (year, race, result) => [year, ' 年 ', race, ' · ', result];
  race_result_tip_template = '第 %POP% 人气 · %STYLE%';
  race_header_title = '专属称号';

  relation_title = '社交关系';
  relation_header_relation = '人际交往';
  get_relation_entry = (name, relation) => [name, '：', relation];
  relation_no_relation = '没有在意的角色';
  get_relation_take_care = (chara) => ['照看 ', chara, ' 中'];
  get_relation_be_taken_care = (chara) => ['被 ', chara, ' 照看中'];
  relation_header_family = '直系亲属';
  get_relation_family_parents = (father, mother) => [
    '父亲是 ',
    father,
    '，母亲是 ',
    mother,
  ];
  get_relation_first_child_as_father = (date, _, __, chara, is_boy) => [
    is_boy ? '长子' : '长女',
    ' ',
    chara,
    ' 出生于 ',
    date,
  ];
  get_relation_first_child_as_mother = (date, _, __, chara, is_boy) => [
    '在 ',
    date,
    ' 生下了 ',
    is_boy ? '长子' : '长女',
    ' ',
    chara,
  ];
  relation_family_children_template = '现在是 %INFO%';
  relation_family_as_father_template = '%COUNT% 个孩子的父亲';
  relation_family_as_mother_template = '%COUNT% 个孩子的母亲';
  relation_family_child_boy_title_template = '%NUMBER%子';
  relation_family_child_girl_title_template = '%NUMBER%女';
  get_relation_family_child_entry_as_father = (title, child, mother) => [
    title,
    ' ',
    child,
    '，其母为 ',
    mother,
  ];
  get_relation_family_child_entry_as_mother = (title, child, father) => [
    title,
    ' ',
    child,
    '，其父为 ',
    father,
  ];
  relation_no_family = '没有可以介绍的角色';
  relation_bt_change_callname_to_you_template = '修改对 %YOU% 的称呼';
  relation_bt_reset_callname_to_you_template = '重置对 %YOU% 的称呼';
  relation_bt_change_callname_template = '修改对该角色的称呼 (%CALLNAME%)';
  relation_bt_reset_callname = '重置对该角色的称呼';
  get_relation_change_callname_to_you_confirm = (chara, you) => [
    '想让 ',
    chara,
    ' 怎么称呼 ',
    you,
    '？',
  ];
  get_relation_change_callname_confirm = (chara) => [
    '想怎么称呼 ',
    chara,
    '？',
  ];
  get_relation_change_callname_result = (caller, callee, callname) => [
    caller,
    ' 开始称呼 ',
    callee,
    ' 为 ',
    callname,
    ' 了',
  ];

  sex_title = '性爱情况';
  sex_exp_slave_2_accept = '接受了性奴的职责，享受着侍奉马娘大人的快乐';
  sex_exp_slave_2_reject = '抗拒着性奴的身份，仍未沉溺于异常猛烈的肉体快感中';
  sex_exp_slave_3_accept = '接受了孕袋的职责，享受着为马娘大人孕育新生命的快乐';
  sex_exp_slave_3_reject = '抗拒着孕袋的身份，倔强地维持着身为人类的骄傲';
  sex_header_inmon = '淫纹定制';
  get_sex_exp = (you, sex_count, sleep_info, prison_info) => [
    '和 ',
    you,
    ' 上过 ',
    sex_count,
    ' 次床',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp = (sleep_count) => ['，包括 ', sleep_count, ' 次睡奸'];
  get_sex_prison_exp = (prison_count) => ['，实施过 ', prison_count, ' 次监禁'];
  get_sex_exp_you = (sex_count, sleep_info, prison_info) => [
    '和其他角色共上过 ',
    sex_count,
    ' 次床',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp_you = (sleep_count) => [
    '，包括 ',
    sleep_count,
    ' 次被睡奸',
  ];
  get_sex_prison_exp_you = (prison_count) => [
    '，被监禁过 ',
    prison_count,
    ' 次',
  ];
  sex_header_abl = '性爱能力';
  get_sex_abl_entry = (abl, level) => [abl, '：', level];
  sex_header_jewel = '持有因子';
  sex_header_mark = '获得刻印';
  sex_image_bt_change_template = '更改调教立绘 (当前：%CURRENT%)';
  sex_image_set_template = '第 %SET% 套';
  sex_image_set_common = '通用';
  sex_image_common_info = '使用通用调教立绘';
  sex_image_personal_info = '专属调教立绘可用';

  exp_mouth_title = '情报【口】';
  exp_mouth_gift_desc = '构造完美的唇齿口腔，天生的吸力能让任何对手缴械投降';
  exp_mouth_trained_desc =
    '无论何时何地都能感觉到瘙痒和寂寞……已经是一张淫荡的嘴唇了';
  exp_mouth_drink_semen = '唇边有着淡淡的白浊……';
  exp_mouth_drink_semen_template = '刚刚饮下了 %SEMEN%ml 精液的样子';
  get_exp_mouth_kiss = (date, chara) => ['初吻在 ', date, ' 献给了 ', chara];
  get_exp_mouth_unknown_kiss = (date, chara) => [
    '实际上，初吻在 ',
    date,
    ' 就已被 ',
    chara,
    ' 夺走',
  ];
  get_exp_mouth_kiss_count = (count) => ['接过 ', count, ' 次吻'];
  get_exp_mouth_blow_job = (date, chara) => [
    '在 ',
    date,
    ' 与 ',
    chara,
    ' 探索了这张嘴的另一种用法',
  ];
  get_exp_mouth_be_blow_job = (date, chara) => [
    '在 ',
    date,
    ' 被 ',
    chara,
    ' 教会了这张嘴的另一种用法',
  ];
  get_exp_mouth_unknown_be_blow_job = (date, chara) => [
    '实际上，早在 ',
    date,
    ' 就初次被 ',
    chara,
    ' 使用过了',
  ];
  get_exp_mouth_suck_count = (count) => ['抚慰过 ', count, ' 次身体'];
  get_exp_mouth_blow_job_count = (count) => ['吸吮过 ', count, ' 次性器'];
  get_exp_mouth_drink_semen = (date, chara) => [
    '在 ',
    date,
    ' 第一次品尝了 ',
    chara,
    ' 的精液，莫名地为那腥臭的味道而着迷',
  ];
  get_exp_mouth_unknown_drink_semen = (date, chara) => [
    '实际上，在 ',
    date,
    '，就已经开始习惯 ',
    chara,
    ' 精液的味道了',
  ];
  get_exp_mouth_drink_semen_count = (count) => ['饮用过 ', count, 'ml 精液'];
  exp_mouth_poisoned_sens = '每次饮下温热的精液，喉咙就会躁动难耐';
  exp_mouth_poisoned_meek = '每次饮下温热的精液，就会感到幸福';
  exp_mouth_poisoned_both = '每次饮下温热的精液，喉咙就会幸福地躁动起来';
  get_exp_mouth_drink_secretion = (date, chara) => [
    date,
    '，从 ',
    chara,
    ' 的樱穴中第一次采饮了欢愉的蜜液',
  ];
  get_exp_mouth_unknown_drink_secretion = (date, chara) => [
    '实际上，在 ',
    date,
    ' 就被喂食了 ',
    chara,
    ' 的淫液',
  ];
  get_exp_mouth_drink_secretion_count = (count) => [
    '饮用过 ',
    count,
    'ml 爱液',
  ];
  get_exp_mouth_drink_milk = (date, chara) => [
    date,
    '，第一次并非因饥饿而吮吸了 ',
    chara,
    ' 的乳房，不知对味道是否满意呢？',
  ];
  get_exp_mouth_drink_milk_count = (count) => ['饮用过 ', count, 'ml 乳汁'];
  get_exp_mouth_orgasm = (count) => ['因为快感去过 ', count, ' 次'];

  exp_breast_title = '情报【胸】';
  exp_breast_summary_man = '健硕的胸肌';
  exp_breast_nipple_pink = '粉色小草莓';
  exp_breast_nipple_deep = '深色小樱桃';
  exp_breast_nipple_inverted = '幽深火山湖';
  get_exp_breast_summary_woman = (nipple, size) => [
    '顶端是 ',
    nipple,
    ' 的 ',
    size,
    ' 乳房',
  ];
  exp_breast_gift_desc = '曲线优美的天赐丰乳，完美的弹性让任何访客流连忘返';
  exp_breast_trained_desc =
    '无论何时何地都能感觉到瘙痒和寂寞……已经是一对淫荡的乳房了';
  exp_breast_milk = '如果前襟有些湿润………请不要怀疑，那只是汗液哦……';
  exp_breast_milk_template =
    '因为夹子的阻碍，现在蓄积了 %MILK%ml 乳汁……乳头好痛';
  get_exp_breast_self_milk = (date) => [
    '在 ',
    date,
    ' 第一次自己爱抚了乳头，立起来了',
  ];
  get_exp_breast_be_milk = (date, chara) => [
    '在 ',
    date,
    ' 第一次被 ',
    chara,
    ' 爱抚了乳头，立起来了',
  ];
  get_exp_breast_unknown_be_milk = (date, chara) => [
    '实际上，那对胸部已经成为 ',
    chara,
    ' 的玩物了，从 ',
    date,
    ' 开始',
  ];
  get_exp_milk_count = (count) => ['被玩弄过 ', count, ' 次'];
  get_exp_breast_tit_job = (date, chara) => [
    chara,
    ' 的肉棒会因为胸部兴奋，在 ',
    date,
    ' 学会了这一点',
  ];
  get_exp_breast_be_tit_job = (date, chara) => [
    chara,
    ' 的肉棒会因为胸部兴奋，在 ',
    date,
    ' 被教会了这一点',
  ];
  get_exp_breast_unknown_be_tit_job = (date, chara) => [
    '实际上，在 ',
    date,
    ' 之后，胸部已经适应侍弄 ',
    chara,
    ' 的肉棒了，虽然本人并不知情',
  ];
  get_exp_breast_tit_job_count = (count) => ['抚慰过性器 ', count, ' 次'];
  get_exp_breast_semen_count = (count) => ['沾染过 ', count, 'ml 精液'];
  /**
   * @param {string} date
   * @param {PrintedSpan} chara
   * @param _ 这个参数是第二参加者的占位符，不能删！
   * @param {string} cup
   * @returns {TextContent}
   */
  get_exp_breast_milking = (date, chara, _, cup) => [
    date,
    '，让 ',
    chara,
    ' 第一次品尝了自己那对 ',
    cup,
    ' 乳房中内容物的味道',
  ];
  get_exp_breast_double_milking = (date, chara, supporter, cup) => [
    date,
    '，让 ',
    chara,
    ' 与 ',
    supporter,
    ' 第一次品尝了自己那对 ',
    cup,
    ' 乳房中内容物的味道',
  ];
  get_exp_breast_milking_count = (count) => ['进行授乳 ', count, ' 次'];
  get_exp_breast_milking_amount = (amount) => ['产出了 ', amount, 'ml 乳汁'];
  get_exp_breast_orgasm = (count) => ['因为快感去过 ', count, ' 次'];

  exp_body_title = '情报【身】';
  exp_body_no_armpit_hair = '有着天生无毛的光洁腋下';
  exp_body_clean_armpit_hair = '腋下现在光洁无毛';
  get_exp_body_armpit_hair = (armpit_hair) => ['腋下有着 ', armpit_hair];
  exp_body_trained_desc = '渴求着他人的温暖……肉体仿佛已经成为淫欲本身';
  get_exp_body_face_semen = (date, chara) => [
    '在 ',
    date,
    ' 初次被 ',
    chara,
    ' 以精液覆面',
  ];
  get_exp_body_unknown_face_semen = (date, chara) => [
    '实际上，脸上在 ',
    date,
    ' 就覆盖了 ',
    chara,
    ' 的精液',
  ];
  get_exp_body_face_semen_count = (count, amount) => [
    '被颜射了 ',
    count,
    ' 次，沾染过 ',
    amount,
    'ml 精液',
  ];
  get_exp_body_body_sex = (date, chara) => [
    date,
    '，是第一次用身体接纳 ',
    chara,
    ' 的肉棒和欲望的日子',
  ];
  get_exp_body_be_body_sex = (date, chara) => [
    date,
    '，是身体第一次被 ',
    chara,
    ' 的肉棒用欲望填满的日子',
  ];
  get_exp_body_unknown_be_body_sex = (date, chara) => [
    '实际上，从 ',
    date,
    ' 起，睡颜，喘息，无防备的身体，都已成了 ',
    chara,
    ' 的肉棒套',
  ];
  get_exp_body_body_sex_count = (count) => ['抚慰性器 ', count, ' 次'];
  get_exp_body_semen_amount = (amount) => ['沾染过 ', amount, 'ml 精液'];
  exp_body_poisoned_sens = '每次染上温热的精液，肌肤就会躁动难耐';
  exp_body_poisoned_meek = '每次染上温热的精液，就会感到幸福';
  exp_body_poisoned_both = '每次染上温热的精液，肌肤就会幸福地躁动起来';
  get_exp_body_orgasm = (count) => ['因为快感去过 ', count, ' 次'];

  exp_hf_title = '情报【手足】';
  exp_hf_header_hand = '情报【手】';
  exp_hand_gift_desc = '爱抚技术自然如神，手指运转间就能让对方心荡神驰';
  get_exp_hf_hand_job = (date, chara) => [
    '手指，果然是最原始也最好用的取乐道具呀，在 ',
    date,
    ' 因 ',
    chara,
    ' 学会了这一点',
  ];
  get_exp_hf_self_hand_job = (date) => [
    '手指，果然是最原始也最好用的取乐道具呀，在 ',
    date,
    ' 自己学会了这一点',
  ];
  get_exp_hf_be_hand_job = (date, chara) => [
    '手指，果然是最原始也最好用的取乐道具呀，被 ',
    chara,
    ' 在 ',
    date,
    ' 教会了这一点',
  ];
  get_exp_hf_unknown_be_hand_job = (date, chara) => [
    '实际上，在 ',
    date,
    '，手指就被 ',
    chara,
    ' 的爱液涂上了色情的气味',
  ];
  get_exp_hf_hand_job_count = (count) => ['揉弄过肉棒 ', count, ' 次'];
  get_exp_hf_touch_vagina_count = (count) => ['抠弄过小穴 ', count, ' 次'];
  get_exp_hf_touch_anal_count = (count) => ['抠弄过屁穴 ', count, ' 次'];
  get_exp_hf_touch_body_count = (count) => ['抚弄过身体 ', count, ' 次'];
  get_exp_hf_touch_breast_count = (count) => ['揉弄过乳房 ', count, ' 次'];
  exp_hf_header_foot = '情报【足】';
  exp_foot_gift_desc = '腿脚运动连一毫米的偏差都不存在，足交技术自然如神';
  get_exp_hf_foot_job = (date, chara) => [
    '在 ',
    date,
    ' 第一次将 ',
    chara,
    ' 的肉棒踩在了脚下',
  ];
  get_exp_hf_unknown_be_foot_job = (date, chara) => [
    '实际上，连足与趾都成了 ',
    chara,
    ' 肉棒的玩物，在 ',
    date,
    ' 之后走路时会觉得寂寞吗',
  ];
  get_exp_hf_foot_job_count = (count) => ['抚弄过肉棒 ', count, ' 次'];
  get_exp_hf_step_on_vagina_count = (count) => ['抚弄过小穴 ', count, ' 次'];
  get_exp_hf_step_on_body_count = (count) => ['踩踏过身体 ', count, ' 次'];

  get_exp_pv_pubic_hair = (pubic_hair) => ['小腹有着 ', pubic_hair];

  exp_penis_title = '情报【茎】';
  exp_penis_no_pubic_hair = '天生光滑无毛';
  exp_penis_clean_pubic_hair = '小腹现在光洁无毛';
  exp_penis_drug = '借助药物获得的';
  get_exp_penis_summary = (drug, color, size) => [
    '下方是',
    drug,
    ' ',
    color,
    ' 而 ',
    size,
    ' 的肉棒',
  ];
  exp_penis_gift_desc = '完美无敌的擎天巨龙，汩出的先走汁仿佛已能让卵子受孕';
  exp_penis_trained_desc = '精关不牢，容易一泻千里';
  get_exp_penis_lose_virgin = (date, chara) => [
    '在 ',
    date,
    ' 将童贞交给了 ',
    chara,
  ];
  get_exp_penis_lose_virgin_sleep = (date, chara) => [
    '在 ',
    date,
    ' 将童贞偷偷交给了 ',
    chara,
  ];
  get_exp_penis_be_lose_virgin = (date, chara) => [
    '童贞在 ',
    date,
    ' 被 ',
    chara,
    ' 夺走了',
  ];
  get_exp_penis_unknown_be_lose_virgin = (date, chara) => [
    '实际上，已在 ',
    date,
    ' 被 ',
    chara,
    ' 夺走了童贞',
  ];
  get_exp_penis_fuck_body_count = (count) => ['戳弄身体 ', count, ' 次'];
  get_exp_penis_fuck_vagina_count = (count) => ['戳弄小穴 ', count, ' 次'];
  get_exp_penis_fuck_anal_count = (count) => ['戳弄屁穴 ', count, ' 次'];
  get_exp_penis_cum_semen_exp = (date, chara, _, amount) => [
    '第一次向 ',
    chara,
    ' 的身体注入 ',
    amount,
    'ml 种子，是在 ',
    date,
  ];
  get_exp_penis_unknown_cum_semen_exp = (date, chara, _, amount) => [
    '实际上，在 ',
    date,
    ' 就被',
    chara,
    ' 淫乱的小穴榨取了 ',
    amount,
    'ml 精液',
  ];
  get_exp_penis_cum_count = (count) => ['射精 ', count, ' 次'];
  get_exp_penis_cum_amount = (amount) => ['共射出 ', amount, 'ml 精液'];
  get_exp_penis_fuck_sleep_vagina = (count, you) => [
    '曾趁熟睡之机侵犯过 ',
    you,
    ' ',
    count,
    ' 次',
  ];
  get_exp_penis_fuck_sleep_vagina_you = (count) => [
    '曾趁熟睡之机侵犯过其他角色 ',
    count,
    ' 次',
  ];
  get_exp_penis_be_sleep_fuck = (count) => [
    '曾被趁熟睡之机侵犯过 ',
    count,
    ' 次且没有察觉',
  ];

  exp_vagina_title = '情报【女阴】';
  exp_vagina_no_pubic_hair = '天生白虎，粉腻可人';
  exp_vagina_clean_pubic_hair = '小穴现在光洁无毛，粉腻可人';
  exp_vagina_pink = '粉嫩可人';
  exp_vagina_purple = '红润泛紫';
  exp_vagina_deep = '深邃成熟';
  get_exp_vagina_summary = (color) => ['有着 ', color, ' 的小穴'];
  exp_vagina_gift_desc = '宛如活物般的洞穴，任何造访的客人都只能任其榨取';
  exp_vagina_clitoris_trained_desc =
    '轻轻摩擦便会充血勃起……已经是一颗淫荡的小豆豆了';
  exp_vagina_vagina_trained_desc =
    '全天候分泌爱液随时等待插入的淫壶……已经是一个淫荡的小穴了';
  exp_vagina_semen = '大腿内侧星星点点……';
  exp_vagina_semen_template = '小穴内大概还有 %SEMEN%ml 精液呢';
  get_exp_vagina_lose_virgin = (date, chara, _, penis) => [
    '在 ',
    date,
    ' 将处女献给了 ',
    chara,
    ' ',
    penis,
    ' 的肉棒',
  ];
  get_exp_vagina_lose_virgin_sleep = (date, chara, _, penis) => [
    '在 ',
    date,
    ' 将处女偷偷献给了 ',
    chara,
    ' ',
    penis,
    ' 的肉棒',
  ];
  get_exp_vagina_be_lose_virgin = (date, chara, _, penis) => [
    '处女在 ',
    date,
    ' 被 ',
    chara,
    ' ',
    penis,
    ' 的肉棒夺走了',
  ];
  get_exp_vagina_unknown_be_lose_virgin = (date, chara, _, penis) => [
    '实际上，已在 ',
    date,
    ' 被 ',
    chara,
    ' ',
    penis,
    ' 的肉棒夺走了处女',
  ];
  get_exp_vagina_vagina_touched_count = (count) => ['被玩弄过 ', count, ' 次'];
  get_exp_vagina_fucked_count = (count) => ['被刺入过 ', count, ' 次'];
  get_exp_vagina_cumed_exp = (date, chara, _, amount) => [
    '接纳了 ',
    chara,
    ' 的 ',
    amount,
    'ml 种子，是在 ',
    date,
  ];
  get_exp_vagina_unknown_cumed_exp = (date, chara, _, amount) => [
    '实际上，宝贵的阴道和子宫在  ',
    date,
    ' 就受到 ',
    chara,
    ' 的 ',
    amount,
    'ml 精液洗礼',
  ];
  get_exp_vagina_out_semen = (amount) => ['沾染过 ', amount, 'ml 精液'];
  get_exp_vagina_cumed_semen = (count, amount) => [
    '承受过 ',
    count,
    ' 次射精，被射入过 ',
    amount,
    'ml 精液',
  ];
  exp_vagina_poisoned_sens = '每次被射进温热的精液，子宫就会躁动难耐';
  exp_vagina_poisoned_meek = '每次被射进温热的精液，就会感到幸福';
  exp_vagina_poisoned_both = '每次被射进温热的精液，子宫就会幸福地躁动起来';
  get_exp_vagina_squirt_exp = (date, chara) => [
    date,
    ' 在 ',
    chara,
    ' 面前第一次喷出了淫乱的蜜液',
  ];
  get_exp_vagina_squirt_exp_both = (date, chara, supporter) => [
    date,
    ' 在 ',
    chara,
    ' 与 ',
    supporter,
    ' 面前第一次喷出了淫乱的蜜液',
  ];
  get_exp_vagina_squirt_exp_self = (date) => [
    date,
    ' 第一次让自己喷出了淫乱的蜜液',
  ];
  get_exp_vagina_unknown_squirt_exp = (date, chara) => [
    '实际上，在 ',
    date,
    ' 就被 ',
    chara,
    ' 采摘了花蜜',
  ];
  get_exp_vagina_unknown_squirt_exp_both = (date, chara, supporter) => [
    '实际上，在 ',
    date,
    ' 就被 ',
    chara,
    ' 与 ',
    supporter,
    ' 采摘了花蜜',
  ];
  get_exp_vagina_unknown_squirt_exp_self = (date) => [
    '实际上，在 ',
    date,
    ' 就不知不觉间分泌了第一缕蜜液',
  ];
  get_exp_vagina_clitoris_orgasm = (count) => ['因小豆豆高潮过 ', count, ' 次'];
  get_exp_vagina_vagina_orgasm = (count) => ['因小穴高潮过 ', count, ' 次'];
  get_exp_vagina_squirt_count = (count, amount) => [
    '共潮吹 ',
    count,
    ' 次，分泌爱液 ',
    amount,
    'ml',
  ];
  get_exp_vagina_squirt_amount = (amount) => ['共分泌爱液 ', amount, 'ml'];
  get_exp_vagina_fuck_sleep_penis = (count, you) => [
    '曾趁熟睡之机侵犯过 ',
    you,
    ' ',
    count,
    ' 次',
  ];
  get_exp_vagina_fuck_sleep_penis_you = (count) => [
    '曾趁熟睡之机侵犯过其他角色 ',
    count,
    ' 次',
  ];
  get_exp_vagina_be_sleep_fuck = (count) => [
    '曾被趁熟睡之机侵犯过 ',
    count,
    ' 次且没有察觉',
  ];
  exp_vagina_pregnant_in_growth = '初潮还没有来';
  exp_vagina_pregnant_menstrual_period = '月经来潮中';
  exp_vagina_pregnant_too_many_birth = '无法承受更多种子了';
  exp_vagina_pregnant_timer_template = '%DESC% (%TIMER% 周)';
  exp_vagina_pregnant_egg_prepared = '卵子正在等待受精❤️';
  exp_vagina_pregnant_egg_growth = '新的卵子正在成长中';
  exp_vagina_pregnant_egg_out = '卵子已经失活，等待排出体外';
  exp_vagina_pregnant_prob_template = '%DESC% (怀孕率 %PROB%%)';
  exp_vagina_pregnant_desc_resume = '孩子已经顺利出生，现在是时候专注身体了';
  exp_vagina_pregnant_desc_no = '宝宝的房间等待着爸爸的临幸❤️';
  exp_vagina_pregnant_desc_embryo = '小小的新生命已在孕育';
  exp_vagina_pregnant_desc_fetal =
    '胎盘已经完全形成，母亲和孩子要摄入优质蛋白哦';
  exp_vagina_pregnant_desc_late = '胎儿正在迎来最后的成熟，小腹已经高高隆起';
  exp_vagina_pregnant_desc_pre_birth =
    '迎接生命奇迹的时刻即将到来，该做好准备了';
  exp_vagina_pregnant_desc_showing = '肚子已经大大地挺了起来';
  exp_vagina_pregnant_desc_known =
    '腹部尚且没有迹象，无意间改变的生活习惯与体检报告却在昭示生命的新生';
  get_exp_vagina_pregnant_father = (chara) => ['孩子的父亲确认为是 ', chara];
  get_exp_vagina_pregnant_father_you = (you) => [
    you,
    ' 知道孩子的父亲是 ',
    you,
  ];

  exp_anal_title = '情报【臀】';
  exp_anal_gift_desc = '仿佛能吞噬一切的紧实黑洞，定让人有去无回';
  exp_anal_trained_desc = '时刻渴望被温暖填满的直肠……已经是一个淫荡的屁穴了';
  exp_anal_semen = '裤子的后面变湿了……';
  exp_anal_semen_template = '是因为屁穴内还滞留着 %SEMEN%ml 精液吧';
  get_exp_anal_anal_sex_exp = (date, chara) => [
    date,
    '，因 ',
    chara,
    ' 初次领会了臀部的性意义',
  ];
  get_exp_anal_be_anal_sex_exp = (date, chara) => [
    date,
    '，被 ',
    chara,
    ' 初次教会了臀部的性意义',
  ];
  get_exp_anal_unknown_be_anal_sex_exp = (date, chara) => [
    '实际上，在 ',
    date,
    ' 就被 ',
    chara,
    ' 玩弄过，大概回不去了吧',
  ];
  get_exp_anal_anal_sex_count = (count) => ['抚慰性器 ', count, ' 次'];
  get_exp_anal_cum_in_anal_count = (count, amount) => [
    '承受过 ',
    count,
    ' 次射精，被射入过 ',
    amount,
    'ml 精液',
  ];
  exp_anal_poisoned_sens = '每次被射进温热的精液，直肠就会躁动难耐';
  exp_anal_poisoned_meek = '每次被射进温热的精液，就会感到幸福';
  exp_anal_poisoned_both = '每次被射进温热的精液，直肠就会幸福地躁动起来';
  get_exp_anal_orgasm = (count) => ['因为快感去了 ', count, ' 次'];

  exp_sm_title = '情报【虐】';
  exp_sm_sex_title_0 = '母马';
  exp_sm_sex_title_1 = '公马';
  exp_sm_sex_title_10 = '扶她母马';
  exp_sm_sadism_talent_template =
    '仿佛生来便是以施虐为己任的淫乱抖 S %TITLE%，只要在脑内想像凌辱他人就能兴奋起来';
  exp_sm_machoism_abuse_talent_template =
    '仿佛生来便是以受虐为己任的淫乱抖 M %TITLE%，只要在脑内想像被他人责骂就能兴奋起来';
  exp_sm_machoism_hit_talent_template =
    '仿佛生来便是以受虐为己任的淫乱抖 M %TITLE%，只要在脑内想像被他人击打就能兴奋起来';
  exp_sm_machoism_all_talent_template =
    '仿佛生来便是以受虐为己任的淫乱抖 M %TITLE%，只要在脑内想像被他人凌辱就能兴奋起来';
  get_exp_sm_sadism_exp = (date, chara) => ['在 ', date, ' 初次虐待了 ', chara];
  get_exp_sm_abuse_count = (count) => ['责骂他人 ', count, ' 次'];
  get_exp_sm_hit_count = (count) => ['击打他人 ', count, ' 次'];
  get_exp_sm_sadism_count = (count) => ['因施虐感而高潮了 ', count, ' 次'];
  get_exp_sm_machoism_exp = (date, chara) => [
    '在 ',
    date,
    ' 初次被 ',
    chara,
    ' 虐待',
  ];
  get_exp_sm_be_abused_count = (count) => ['被责骂 ', count, ' 次'];
  get_exp_sm_be_hit_count = (count) => ['被击打 ', count, ' 次'];
  get_exp_sm_machoism_count = (count) => ['因受虐感而高潮了 ', count, ' 次'];

  desc_conjunction = '\n同时，';
  human_info = '一介人类而已';
  no_reward_info = '还没有可称道的战绩';
  cannot_join_race_info = '不能出走比赛';
  growth_info = '还在成长中哦';
  no_exp_info = '还没有相关经历';
  no_known_info = '还没有足够了解';
  no_part_info = '没有这个部位';

  prev_template = '前一位 - %NAME%';
  next_template = '后一位 - %NAME%';

  get_child_number(num) {
    const first = '长';
    const second = '次';
    const n10 = ['十', '廿', '卅', '卌'];
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
}

module.exports = I18nDetail;
