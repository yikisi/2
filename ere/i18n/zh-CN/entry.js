class I18nEntry {
  language = '简体中文';

  speed = '速度';
  endurance = '耐力';
  strength = '力量';
  toughness = '根性';
  intelligence = '智力';

  hp = '体力';
  tp = '精力';

  abbr_hp = '体';
  abbr_tp = '精';

  ui_mot = '干劲';
  mot_0 = '极差';
  mot_1 = '较差';
  mot_2 = '一般';
  mot_3 = '较佳';
  mot_4 = '极佳';

  a_g_grass = '草地';
  a_g_dirt = '泥地';
  a_d_short = '短距离';
  a_d_mile = '英里赛';
  a_d_medium = '中距离';
  a_d_long = '长距离';
  a_s_nige = '逃马';
  a_s_senko = '先马';
  a_s_sashi = '差马';
  a_s_okimi = '追马';

  adapt_template = '%ADAPT%适性';

  edu_0 = '新秀年';
  edu_1 = '经典年';
  edu_2 = '资深年';
  pre_edu = '待入学';

  a_edu_0 = '新秀';
  a_edu_1 = '经典';
  a_edu_2 = '资深';

  oot_0 = '已育成';
  oot_1 = '殿堂';

  honour_m = '失格';
  honour_0 = '新手';
  honour_1 = '老练';
  honour_2 = '中坚';
  honour_3 = '精英';
  honour_4 = '传奇';

  title_0 = '训练员';
  title_1 = '马娘';
  title_2 = '性奴';
  title_3 = '孕袋';

  ui_rl_mark_with_value = '%MARK% (%VAL%)';

  ui_love_icon = '❤️';
  ui_love = '爱慕';
  ui_love_template = '爱慕：%LOVEINFO%';
  get_ui_colored_love = (love) => ['爱慕：', love];
  love_u = '？';
  love_0 = '平常';
  love_1 = '朦胧';
  love_2 = '暧昧';
  love_3 = '爱欲';
  love_4 = '热恋';
  love_5 = '佳偶';
  love_6 = '依存';

  ui_relation_icon = '🤝';
  ui_relation = '好感';
  ui_relation_template = '好感：%RELATIONINFO%';
  get_ui_colored_relation = (relation) => ['好感：', relation];
  relation_u = '？';
  relation_0 = '失望';
  relation_1 = '怀疑';
  relation_2 = '冷淡';
  relation_3 = '融洽';
  relation_4 = '热忱';
  relation_5 = '喜爱';
  relation_6 = '亲密';
  relation_7 = '不渝';

  celebration_template = '[%CELEBRATION%]';
  cl_new_year = '新年';
  cl_valentine = '情人节';
  cl_palace = '殿堂周';
  cl_fans = '粉丝感谢祭';
  cl_temple_fair = '庙会';
  cl_halloween = '万圣节';
  cl_christmas = '圣诞节';

  tt_disclaimer = '免责声明';
  tt_disclaimer_content = [
    '1. 本游戏仅为开发者自娱自乐及代码练习所用，开发它是因为开发者趣味低下，思想低俗所致，无任何经济收益和利益驱动。',
    { isBr: true },
    '2. 本游戏含有大量的 R18 色情内容，内容中可能会出现的有：多P、调教、轻度 SM、非合意性行为、近亲相奸等，不会出现的有：强制 NTR、重度 SM、血腥、R18G 等。',
    { isBr: true },
    '3. 本游戏在设计理念和游戏内容上缝合了大量 era 与其他各类作品，仅适合 era 系列玩家或文字黄油爱好者进行游玩，不适合普通玩家游玩，特别是严格禁止未成年人游玩。',
    { isBr: true },
    '4. 本游戏所使用的素材资源包括开发者自制、互联网收集与协力者提供，开发者与协力者来自于不同的世界、种族、国家和民族，彼此之间也不存在经济关系。',
    { isBr: true },
    '5. 本游戏的唯一指定官方发布地址即 ',
    { content: '托管仓库', url: 'https://gitgud.io/umaera/erauma' },
    '；因为游戏本身的性质，禁止在任何未成年人可以接触到的公开场合展示或传播本游戏，更禁止任何人在任何商业活动（贩卖/附送等）和公开活动（直播等）中使用本游戏。',
    { isBr: true },
    '6. 在明确注明或保留游戏来源、不涉及任何商业目的和经济受益、并同样遵守本免责声明、',
    {
      content: 'GPL 2.0 only 开源协议',
      fontWeight: 'bold',
      url: 'https://gnu.ac.cn/licenses/old-licenses/gpl-2.0.html',
    },
    ' 与 ',
    {
      content: '口上创作协议',
      fontWeight: 'bold',
      url: 'https://gitgud.io/umaera/erauma/-/wikis/LICENSE',
    },
    ' 的情况下，允许他人基于本游戏进行修改或二次开发（衍生产物称为魔改版）。该授权将直接赋予本游戏的所有玩家，不需要专门征求开发者的明确同意，但需要在游戏标题和标题界面等处标明是魔改版并与原版做出明显区分。',
    { isBr: true },
    '7. 本声明的解释权归开发者所有，且在版本更新中声明内容可能有所变更，请以最新版本为准。',
    { isBr: true },
    '8. 基于以上叠了这么多层 buff，建议有大胆想法的人请现在关掉窗口并立刻删除游戏，只要不删就默认你已经理解并遵守该声明，在不遵守的情况下出现的任何事故和法律责任都和开发者没有任何关系。',
  ];
  tt_disclaimer_accept =
    '我读完并理解了以上 8 条，我对自己负责，我不删，我要玩。';
  tt_disclaimer_reject = '分男女搭配！不玩了！';
  tt_birthday_notify = (birth_list) => ['今天是 ', ...birth_list, ' 的诞生日'];
  tt_version_template = '版本号：v%VERSION%';
  tt_version_resource = '适配资源包版本：';
  tt_new_game = '开始新游戏';
  tt_load_game = '加载存档';
  tt_achieve = '游戏成就';
  tt_chara_achieve = '角色成就';
  tt_help = '帮助说明';
  tt_copyrights = '制作鸣谢';
  tt_links = '相关链接：';
  tt_link_release = 'EraUma 游戏发布页（🪜）';
  tt_link_desk_engine = 'EraElectron 引擎（PC 版）发布页（🪜）';
  tt_link_app_engine = 'ere.app 引擎（安卓版）发布页（🪜）';
  tt_link_community = 'ERA 特雷森学园（Discord 社区🪜）';
  tt_link_wiki = 'Wiki（使用说明/游戏设定/口上写作指引……🪜）';

  cr_title_copyrights = '鸣谢';
  cr_header_susai = '主催';
  cr_header_architecture = '架构';
  cr_header_engine = '引擎';
  cr_header_developer = '开发';
  cr_header_art = '美术';
  cr_header_translate_reference = '翻译参考';
  cr_header_tr_repo = "Trainers' Legend G 译文仓库";
  cr_header_tr_wiki = '赛马娘中文 Wiki';
  cr_header_kojo = '口上';
  cr_kojo_tip = '以负责角色ID最小值排序';
  cr_thanks_detail = '详细鸣谢';
  cr_kojo_suffix_template = '（%SUFFIX%）';
  cr_kojo_suffix_temporary = '临时';
  cr_kojo_suffix_part = '部分';
  cr_timon_recruit = '招募地文';
  cr_timon_daily = '日常地文';
  cr_timon_edu = '育成地文';
  cr_timon_love = '爱慕地文';
  cr_timon_ero = '调教地文';
  cr_timon_basement = '地下室地文';
  cr_timon_special = '特殊角色（临时）';
  cr_timon_mejiro = '麦吉罗的呼唤';
  cr_timon_random = '随机事件';
  cr_timon_guide = '新手教学';
  cr_timon_guide_b = '地下室教学';
  cr_header_image = '调教立绘';
  cr_image_common = '通用立绘';
  cr_image_gif = '指令动画';
  cr_header_lib_en_us = '英语本地化';
  cr_header_lib_ru_ru = '俄语本地化';
  cr_header_lib_ja_jp = '日语本地化';
  cr_header_kojo_make = '口上制作';
  cr_header_test = '测试反馈';
  cr_header_community_management = '社区管理';
  cr_header_community_assistant = '社区贡献';
  cr_header_special_thanks = '特别鸣谢（笑）';
  cr_umamusme_pretty_derby = '午马牧师妹 · 普瑞提达比';

  tk_speak_border = ['「', '」'];
  tk_think_border = ['（', '）'];
  tk_past_border = ['（', '）'];
  tk_unknown = '？？？';

  nt_ask = '是否查看相关的小纸条？';
  nt_no = '之后去标题界面确认';

  ui_comma = '，';
  ui_comma2 = '、';
  ui_period = '。';
  ui_exclamation = '！';
  ui_conjunction = ' 和 ';
  ui_ellipses = '……';
  ui_semicolon = '；';
  ui_back = '返回';
  ui_back_title = '返回标题';
  ui_achieve_title = '获得新成就！';
  ui_on = '开';
  ui_off = '关';
  ui_yes = '确定';
  ui_no = '取消';
  ui_yes2 = '是';
  ui_no2 = '否';
  ui_reset = '重置';
  ui_skip = '跳过';
  ui_nothing = '无';
  ui_money_template = '%MONEY% 马币';
  ui_get_date = (year, month, week) => [
    year,
    ' 年 ',
    month,
    ' 月 第 ',
    week,
    ' 周',
  ];
  ui_date_without_year_template = '%MONTH% 月 第 %WEEK% 周';
  ui_month_template = '%MONTH% 个月';
  ui_too_long_template =
    '（显示宽度不能超过 %WIDTH% 个全角字符或 %WIDTH*2% 个半角字符，请重新输入！）';
  ui_et_prev = '前一项';
  ui_et_next = '后一项';
  ui_pg_prev = '前一页';
  ui_pg_next = '后一页';
  ui_ch_prev = '前一位';
  ui_ch_next = '后一位';
  ui_pagination_template = '第 %CURR% 页 / 共 %TOTAL% 页';
  ui_default = '默认';
  ui_game_over = 'GAME OVER';
  ui_invalid_value = '-';
  ui_unknown_value = '?';
  ui_all = '全部';
  ui_increase = '提高';
  ui_decrease = '降低';
  ui_end = '结束';
  ui_cancel = '还是算了';
  ui_signature_result = '主胜鞍';
  ui_agree = '同意';
  ui_disagree = '拒绝';

  get_ui_reward_header = (chara) => [chara, ' 的属性有了如下变化：'];
  get_ui_change_attr = (attr, change_mark, change_val) => [
    attr,
    ' ',
    change_mark,
    ' 了 ',
    change_val,
  ];
  get_ui_add_skills = (chara, skills) => [chara, ' 习得了', ...skills];
  ui_get_pt_template = '获得了 %PT% 点技能点数！';
  ui_train_level_up_template = '%ATTR%训练 变得更擅长了！';
  get_ui_change_motivation = (chara, motivation) => [
    chara,
    ' 的干劲现在是 ',
    motivation,
  ];
  get_ui_change_relation = (chara, target, change_mark, val, result) => [
    chara,
    ' 对 ',
    target,
    ' 的好感 ',
    change_mark,
    ' 了 ',
    val,
    '！现在为：',
    result,
  ];
  get_ui_find_betrayed = (chara, you) => [
    you,
    ' 的不忠让 ',
    chara,
    ' 无比愤怒……',
  ];
  get_ui_change_love = (chara, you, change_mark, val, result) => [
    chara,
    ' 对 ',
    you,
    ' 的爱慕 ',
    change_mark,
    ' 了 ',
    val,
    '！现在为：',
    result,
  ];
  get_trigger_love_event = (chara) => [
    '（和 ',
    chara,
    ' 的关系似乎可以更进一步了……）',
  ];
  ui_love_level_up = '已经不能回头了……';
  get_ui_hurt_uma = (chara) => ['【', chara, ' 受伤了！】'];
  get_ui_hurt_uma_plus = (chara) => ['【', chara, ' 的受伤程度加深了！】'];
  get_ui_hurt_tired_uma = (chara) => [
    '【',
    chara,
    ' 在疲惫之下受了更加严重的伤！】',
  ];
  get_ui_add_titles = (chara) => ['【', chara, ' 获得了新称号！】'];
  get_ui_too_tired = (chara) => ['【', chara, ' 深陷疲惫！】'];
  get_ui_ignore_event_punish = (chara, you) => [
    '【因为 ',
    you,
    ' 的忽视，',
    chara,
    ' 有些失望】',
  ];
  get_ui_ignore_event_punish2 = (chara, you) => [
    '【因为 ',
    you,
    ' 的忽视，',
    chara,
    ' 无比失望】',
  ];
  get_ui_bankrupt_warn = (you) => ['【', you, ' 即将破产！】'];
  get_ui_edu_end = (chara) => ['【', chara, ' 的育成结束了】'];
  get_ui_edu_aim_summary_header = (chara) => [chara, ' 的育成目标完成情况：'];
  edu_aim_done = '完成！';
  get_ui_edu_ignore_aim = (chara, count) => [
    '错过了 ',
    chara,
    ' 的 ',
    count,
    ' 个育成事件……',
  ];

  ui_time_flow = '【时间开始流动】';
  ui_new_week = '【新的一周开始了】';

  ui_hd_no_save = '当前未加载存档';
  get_ui_hd_location = (location) => ['位于 ', location];
  get_ui_hd_honour = (honour) => [honour, ' 声望'];
  ui_hd_income_template = '(%INCOME%)';
  get_ui_hd_money = (money, income = []) => [money, ...income, ' 马币'];
  ui_billing_title_start = '账单：';
  ui_billing_invest_template = '%INCOME% (%CHARA% 投资收益)';
  ui_billing_bonus_template = '%INCOME% (月工资+年终奖)';
  ui_billing_salary_template = '%INCOME% (月工资)';
  ui_billing_borrow_template = '%INCOME% (%CHARA%%MAIN% 余 %TIMER% 周)';
  ui_billing_borrow_main = '· 主要';
  ui_billing_slave_template = '%INCOME% (%CHARA% 献金)';
  ui_hd_current_race = '本周赛事';
  ui_hd_races = '查看全部';

  ui_no_target = '未选择互动角色';
  get_ui_cur_chara_info = (
    title,
    name,
    palace,
    growth,
    motivation,
    edu,
    race,
  ) => [
    '当前角色：',
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
  get_ui_motivation = (motivation) => [this.ui_mot, '·', motivation];
  ui_edu_template = '%EDU%';
  get_ui_race_indicator = (race, delta) => [
    '(距 ',
    race,
    ' 还有 ',
    delta,
    ' 周)',
  ];
  get_ui_curr_race_indicator = (race) => ['(本周有 ', race, ')'];

  ui_select_hd_info_template = '选择要查看情报的角色 (%COUNT%)';
  ui_select_hd_interact_template = '选择要互动的角色 (%COUNT%)';
  ui_select_hd_name = '名字';
  ui_select_hd_score = '评价';
  ui_select_hd_races = '成绩';
  ui_select_hd_edu = '育成';
  ui_select_hd_playthrough = '周目';
  ui_select_clear = '清空互动';
  ui_select_no_character = '队伍中没有其他成员';
  ui_select_event_filter_tooltip =
    '* 选择按钮显示为红色的角色本周有特殊事件需要关注';
  ui_select_event_filter_template = '仅显示有特殊事件的角色 [%STATUS%]';
  ui_select_order_marks = ['▼', '▲'];

  ui_change_image = '切换立绘';
  ui_show_team = '查看队伍列表';
  ui_train = '训练';
  ui_self_train = '自主训练';
  ui_goto_race = '出走比赛';
  ui_register_race = '登记出走';
  ui_goto_sex = '邀请上床';
  ui_next_turn = '休息到下周';
  ui_office_study = '指导学习';
  ui_office_prepare = '赛前准备';
  ui_talk = '聊天';
  ui_office_gift = '送礼物';
  ui_self_cook = '加餐';
  ui_office_cook = '一起加餐';
  ui_self_rest = '小憩';
  ui_office_rest = '一起小憩';
  ui_self_game = '打游戏';
  ui_office_game = '一起打游戏';
  ui_change_take_care = '切换照看角色';
  ui_ask_take_care = '请求照看';
  ui_self_update = '提升自身性爱能力';
  ui_ero_update = '提升角色性爱能力';
  ui_borrow_money = '借钱';
  ui_celebration_template = '一起庆祝 %CELEBRATION%';
  ui_birthday = '庆祝生日';
  ui_check_love = '重新触发爱慕事件';
  ui_basement_me = '乞求狂爱';
  ui_recruit = '前往训练场 (招募)';
  ui_trainer_office = '前往训练员办公室';
  ui_clinic = '前往保健室';
  ui_god_together = '一起前往三女神像';
  ui_god_alone = '前往三女神像';
  ui_atrium_together = '一起前往中庭';
  ui_atrium_alone = '前往中庭';
  ui_rooftop_together = '一起前往天台';
  ui_rooftop_alone = '前往天台';
  ui_chairman_office = '前往理事长办公室';
  ui_visitors = '前往访客接待室';
  ui_school_shop = '前往小卖部';
  ui_out_together = '一起外出';
  ui_out_alone = '外出';
  ui_info_page = '角色情报';
  ui_storage = '持有物品';
  ui_races = '出走情报';
  ui_office_filter_template = '筛除训练室活动 [%STATUS%]';
  ui_out_filter_template = '筛除外出活动 [%STATUS%]';
  ui_save_game = '保存故事';
  ui_load_game = '加载存档';

  ui_foreign_study_template = '%LAN%学习';
  ui_foreign_rest = '休息调养';
  ui_foreign_train = '适应性训练';
  ui_foreign_travel = '旅行观光';

  ui_act_event_tip = '该行动存在触发事件';
  ui_loc_npc_tip_template = '该地点有 %COUNT% 人';
  ui_loc_back_tip = '存在折返触发事件';
  ui_loc_event_tip = '该地点存在触发事件';
  ui_loc_celebration_tip_template = '该地点 %COUNT% 人有节庆事件';

  ui_cost_chara_stamina_tip_template = '角色体力不足 (需要：%STAMINA%)';
  ui_cost_chara_time_tip_template = '角色精力不足 (需要：%TIME%)';
  ui_cost_you_stamina_tip_template = '体力不足 (需要：%STAMINA%)';
  ui_cost_you_time_tip_template = '精力不足 (需要：%TIME%)';
  ui_cost_money_tip_template = '马币不足 (需要：%MONEY%)';
  ui_foreign_lan_max_tip_template = '%LAN%已非常熟练';
  ui_foreign_rest_max_tip = '身体已调理至健康';
  ui_foreign_train_max_tip = '已完全适应跑道';
  ui_celebration_remote_tip = '无法远程庆祝';

  ui_moon_well_partner_tip = '身边还有其他人';

  ui_rec_chara_info = '个人情报';
  ui_rec_edu_info = '育成预览';
  ui_rec_exit = '直接离开';

  ui_rec_c_info_template = '%NAME% 的个人情报';
  ui_rec_c_body_template = '%NAME% 的身体尺寸';
  ui_rec_c_talent_template = '%NAME% 的性格特征';
  ui_rec_c_image_template = '%NAME% 的调教立绘';
  ui_rec_e_train_template = '%NAME% 的训练加成';
  ui_rec_e_train_buff_template = '%ATTR%：+%BUFF%%';
  ui_rec_e_adapt_template = '%NAME% 的脚质适应';
  ui_rec_e_skill_template = '%NAME% 的比赛技巧';
  ui_rec_e_aim_template = '%NAME% 的育成目标';
  ui_rec_e_title_template = '%NAME% 的专属称号';
  ui_rec_e_skill_init = '初始：';
  ui_rec_e_skill_init_pt = '技能点数+680';
  ui_rec_e_skill_classic = '经典年解锁：';
  ui_rec_e_skill_after_pt = '技能点数+400';
  ui_rec_e_skill_senior = '资深年解锁：';

  ui_train_base = '基础能力';
  ui_train_score = '评价';
  ui_train_pt = '技能点数';
  ui_train_race = '比赛能力';
  ui_train_adapt_track = '场地适性';
  ui_train_adapt_dis = '距离适性';
  ui_train_adapt_style = '策略适性';
  ui_train_adapt_ui_conjunction = '·';
  ui_train_learnt_skills = '习得技能';
  ui_train_learn_skill = '学习技能';
  ui_train_reset_skill = '重置技能';
  ui_train_with_s_rate_template = '%ATTR%训练 Lv.%LEVEL%\n成功率：%SUCCESS%%';
  ui_train_reset_skill_confirm = '要用 100 点技能点数重置技能吗？';
  ui_train_skill_header_template = '为 %NAME% 选择技能';
  get_ui_train_skill_pt_info = (pt) => ['技能点数：', pt];
  ui_train_skill_enable_filter = '打开筛选器';
  ui_train_skill_disable_filter = '关闭筛选器';
  get_ui_train_learn_skill = (skill) => ['要学习', ...skill, '吗？'];
  get_ui_train_replace_skill = (skill, remove) => [
    '要学习',
    ...skill,
    '吗？将取代',
    ...remove,
    '。',
  ];

  get_ui_reg_header = (chara) => ['为 ', chara, ' 报名下一场比赛'];
  ui_reg_race_template = '%NAME% (%COUNTRY%) %GRAND% %MARK%';
  ui_grand_live_mark = '🎤';
  ui_reg_registered = '[▲已登记]';
  get_ui_reg_tip_1_before_begin = (chara) => [
    chara,
    ' 需要先通过出道战出道才能参加其他比赛',
  ];
  get_ui_reg_tip_1_after_begin = (chara) => [chara, ' 很关注显示为红色的比赛'];
  ui_reg_tip_2 = '参加带有星号(*)后缀的比赛可能会有特殊的事情发生';
  ui_reg_tip_3 = '带有🎤后缀的比赛会开设大舞台，参加能够获得更多的声望';
  ui_reg_tip_4 =
    '带有(法)等后缀的比赛是海外赛事，需要在参赛两周前注册，并提前两周出发远征';
  ui_reg_race_filter_template = '筛除不利比赛 [%STATUS%]';
  ui_reg_race_more_info = '显示更多信息 [%STATUS%]';

  get_ui_race_select_contestants = (race) => [
    '下列队伍成员登记出走了 ',
    race,
    '，要要求避战吗？',
  ];
  ui_race_select_contestant_template = '%NAME% [%STATUS%]';
  ui_race_select_selected = '出走';
  ui_race_select_prevent = '避战';
  ui_race_select_done = '确认出走名单';
  get_ui_race_your_tp = (you) => [you, ' 的精力'];
  ui_race_prev_template = '前一位\n%NAME%';
  ui_race_next_template = '后一位\n%NAME%';
  ui_race_item_prev_template = '前一位 %NAME%';
  ui_race_item_next_template = '前一位 %NAME%';
  get_ui_race_preview_contestant_entry = (score, motivation, pop, pop_mark) => [
    score,
    { isDivider: true },
    ...motivation,
    { isDivider: true },
    ' 第 ',
    pop,
    ' 人气 ',
    pop_mark,
  ];
  ui_race_preview_contestant_attr = '%ATTR% (%RANK%)';
  ui_race_preview_contestant_style = '出走策略';
  get_ui_race_preview_contestant_adapt = (name, adapt) => [name, ' ', adapt];
  ui_race_preview_contestant_tip =
    '* 参赛选手按跑道号从低到高显示，队伍成员显示为绿名，强敌显示为红名';
  ui_race_bt_go = '出走！';
  ui_race_bt_chart = '赛道数据';
  ui_race_bt_item = '装备玩具';
  get_ui_race_preview_equip_item = (chara) => ['为 ', chara, ' 装备性玩具：'];
  ui_race_preview_equip_item_part_template = '为 %NAME% 的 %PART% 装备性玩具';
  get_ui_race_preview_item_stg_template = '还有 %COUNT% 件';
  ui_race_preview_equip_item_v_tip = '还是处女！';
  ui_race_preview_equip_item_a_cond =
    '需要：肛交次数 %REQUIRE% (当前：%CURRENT%)';
  ui_race_start_event = '要给谁赛前打气？';
  ui_race_speed_1 = '一倍速观看';
  ui_race_speed_2 = '二倍速观看';
  ui_race_speed_4 = '四倍速观看';
  ui_race_few_contestants = '减少参赛选手显示';
  ui_race_skip_race = '查看结果';
  ui_race_timer_template = '计时器：%TIMER%';
  ui_race_progress = '进程';
  ui_race_contestant_no = '号码';
  ui_race_contestant_name = '名字';
  ui_race_contestant_style = '策略';
  ui_race_contestant_total_time = '用时';
  ui_race_contestant_speed = '速度';
  ui_race_contestant_loc = '相对位置';
  ui_race_contestant_rank = '排名';
  ui_race_contestant_progress_template =
    '%LOCATION% (%LANE% %SLOPE% %BLOCKED% %TEMPTATION%)';
  ui_race_start = '出闸！';
  ui_race_bad_start = '出迟！';
  ui_race_reporter = '解说';
  ui_race_result_summary = '揭示板';
  get_ui_race_result_summary_header = (track, race) => [track, ' ', race];
  ui_race_result_location = '相对位置统计';
  ui_race_result_location_header = '与头马相对位置统计图';
  ui_race_result_speed = '速度统计';
  ui_race_result_speed_header = '速度统计图';
  ui_race_result_endurance = '持久力统计';
  ui_race_result_endurance_header = '持久力统计图';
  ui_race_result_skills = '发动技能统计';
  ui_race_result_log = '比赛日志';
  get_ui_race_result = (chara, race, rank) => [
    chara,
    ' 取得了 ',
    race,
    ' 的 ',
    rank,
    '！',
  ];
  ui_race_end_event = '要祝贺/安慰谁？';
  ui_race_event_chara_template = '%NAME% (%RANK%)';
  ui_race_event_end = '结束';
  ui_race_event_tip = '* 互动按钮显示为红色的角色有专属剧情事件';
  get_ui_race_honour_reward = (you, up_info) => [
    '因为队伍成员的出色表现，社会对 ',
    you,
    ' 的评价',
    up_info,
    '了！',
  ];
  get_ui_race_honour_pregnant_punish = (you, down_info) => [
    '虽然队伍成员表现很出色，但现役训练员的私生子丑闻还是让社会对 ',
    you,
    ' 的评价',
    down_info,
    '了！',
  ];
  get_ui_race_honour_hentai_punish = (you, down_info) => [
    '因为队伍成员的变态行为，社会对 ',
    you,
    ' 的评价',
    down_info,
    '了！',
  ];
  get_ui_race_honour_lose_punish = (you, down_info) => [
    '因为队伍成员的比赛失利，社会对 ',
    you,
    ' 的评价',
    down_info,
    '了！',
  ];
  get_ui_race_money_reward = (money) => ['收到了比赛赏金分成 ', money, ' 马币'];

  get_ui_out_confirm = (chara) => ['要和 ', chara, ' 一起去哪里？'];
  ui_out_self_confirm = '要独自去哪里？';
  get_ui_bt_talk_with_npc_template = '和 %NAME% 攀谈';
  ui_deep_interact_with_npc_template =
    '关系并未达到如此程度 (需要：%R_REQUIRE%以上，当前：%R_CURRENT%；或：%L_REQUIRE%以上，当前：%L_CURRENT%)';
  get_ui_out_bye = (chara, you) => [
    '【和 ',
    chara,
    ' 道别后，',
    you,
    ' 离开了】',
  ];
  ui_moon_well_close_tip = '秘汤暂不营业';
  ui_mejiro_city_alone_tip = '目白城不欢迎独身的旅客';
  ui_mejiro_city_love_tip_template =
    '关系并未达到如此程度 (需要：%REQUIRE%以上，当前：%CURRENT%)';

  ui_select_action_atrium = '前往中庭做什么呢？';
  ui_action_atrium_tree_hollow = '看看枯树洞';
  ui_action_atrium_date = '约会';
  ui_select_action_river = '前往河边做什么呢？';
  ui_action_river_fish = '钓鱼';
  ui_action_river_walk = '散步';
  ui_select_action_shopping = '前往商店街做什么呢？';
  ui_action_shopping_arcade = '去街机厅';
  ui_action_shopping_drawing = '抽奖';
  ui_action_shopping_ktv = '唱卡拉OK';
  ui_action_shopping_movie = '看电影';
  ui_action_shopping_ero_item = '逛粉红色的小店';
  ui_select_action_station = '前往车站做什么呢？';
  ui_action_station_restaurant = '吃饭';
  ui_action_station_date = '约会';
  ui_action_station_shopping = '逛商场';

  ui_race_report_header = '比赛出走预定';

  ui_shop_limited_item_entry_template = '%ITEM%(限)';
  ui_shop_hold = '持有';
  ui_shop_max = '最大';
  ui_shop_buy_template = '购买 (%PRICE% 马币)';
  ui_shop_tip = '* 点击道具查看说明\n** 带「限」字样的商品只能拥有一件';
  get_ui_shop_bargain = (item, discount) => [
    '*** 本周特惠！',
    item,
    ' ',
    discount,
    '！',
  ];
  ui_shop_30_off = '30%off';
  ui_shop_50_off = '50%off';
  ui_shop_acc_switch_template = '隐藏快捷键 [%STATUS%]';
  get_ui_shop_buy = (item, count) => ['购买了 ', count, ' 个 ', item];

  get_ui_take_care = (chara) => ['想请 ', chara, ' 照看谁？'];
  get_ui_take_care_change_confirm = (chara, curr) => [
    chara,
    ' 现在正在照看 ',
    curr,
    '。要切换照看角色吗？',
  ];
  ui_take_care_aim_continue_template = '%NAME%（照看中）';
  ui_take_care_aim_taken_template = '%NAME%（%TEACHER% 照看中）';
  ui_take_care_bt_cancel = '取消照看';
  ui_take_care_bt_keep = '保持原状';
  get_ui_take_care_continue = (chara, curr) => [chara, ' 会继续照看 ', curr];
  get_ui_take_care_cancel = (chara, prev) => [chara, ' 不再照看 ', prev, ' 了'];
  get_ui_take_care_change = (chara, next) => [
    chara,
    ' 从现在开始将照看 ',
    next,
  ];

  ui_storage_have_items =
    '目前拥有以下道具：（点击道具按钮可以使用或查看说明）';
  ui_storage_no_items = '没有持有任何道具';
  ui_storage_select_header_template = '选择要使用%ITEM%的对象';
  ui_storage_no_targets_template = '没有可以使用%ITEM%的对象';

  ui_bt_self_info = '个人情报';
  ui_bt_chara_info = '对方情报';

  ui_wur_sleep = '默默享受';
  ui_wur_wake = '就此醒来';

  ui_sex_bt_setting = '设置';
  ui_sex_bt_touch = '身体接触';
  ui_sex_bt_stain = '脏污检查';
  ui_sex_bt_turn_around = '转身';

  bs_info_template = '昏暗的房间……%DURABILITY%……';
  bs_no_one_info_template = '昏暗、空无一人的房间……%DURABILITY%……';
  ui_bs_durability_0 = '但完全没有防备';
  ui_bs_durability_1 = '但看来只需略施小计';
  ui_bs_durability_2 = '大门似乎很难打开';
  ui_bs_durability_3 = '存在大量棘手的障碍';
  ui_bs_durability_4 = '所有的设施都坚不可摧';
  ui_bs_durability_5 = '任何反抗对这里都不痛不痒';

  ui_bs_flatter = '虚与委蛇';
  ui_bs_unlock = '尝试脱困';
  ui_bs_relax = '只是静坐';
  ui_bs_sleep = '小睡片刻';
  ui_bs_eat = '略微进食';
  ui_bs_sex = '邀请上床';
  ui_bs_strike = '背面偷袭';
  ui_bs_battle = '正面反抗';
  ui_bs_release = '请求释放';
  ui_bs_clock = '询问时间';
  ui_bs_guide = '逃生指南';

  ui_save_game_header = '要保存至哪个栏位？';
  ui_auto_save_template = '%NAME% (自动存档)';
  ui_empty_save = '空存档栏位';
  ui_save_rename = '改名';
  ui_save_name_save = '为这个故事命名';
  ui_save_remove_save = '取消这个故事的命名';
  ui_save_name_save_header = '请输入存档命名：';
  ui_save_name_save_confirm_template = '要将这个故事命名为 [%NAME%] 吗？';
  ui_save_name_save_result_template = '为这个故事取名为 [%NAME%]';
  ui_save_name_remove_confirm_template = '要取消这个故事的命名 [%NAME%] 吗？';
  ui_save_name_remove_result = '取消了存档的命名，下次保存将使用默认名';
  ui_save_override_confirm_template = '要覆盖 %NO% 号栏位的存档吗？';
  ui_save_save_result_template = '已保存至 %NO% 号栏位';
  ui_save_rename_confirm_template =
    '要将 %NO% 号栏位的存档改名为 [%NAME%] 吗？';
  ui_save_rename_result_template = '%NO% 号栏位的存档改名成功';
  ui_save_rename_cancel_template = '放弃了给 %NO% 号栏位的存档改名';

  ui_load_game_header = '要从哪个栏位读取？';
  ui_load_remove = '删除';
  ui_load_fail_template = '未能成功读取 %NO% 号栏位的存档';
  ui_load_remove_success_template = '成功删除 %NO% 号栏位的存档';

  name = require('#/i18n/zh-CN/chara/names')._;
  title = require('#/i18n/zh-CN/chara/titles')._;
  title_desc = require('#/i18n/zh-CN/chara/title-desc')._;
  feature = require('#/i18n/zh-CN/chara/feature')._;
  detail = require('#/i18n/zh-CN/chara/detail')._;

  kojo = require('#/i18n/zh-CN/kojo/entry')._;
  timon = require('#/i18n/zh-CN/timon/entry')._;

  new_game = require('#/i18n/zh-CN/new-game')._;
  location = require('#/i18n/zh-CN/location')._;
  vehicle = require('#/i18n/zh-CN/vehicle')._;
  note = require('#/i18n/zh-CN/notes')._;
  achievement = require('#/i18n/zh-CN/achieve')._;
  achieve_desc = require('#/i18n/zh-CN/achieve-desc')._;

  tb_abl = require('#/i18n/zh-CN/table/abl')._;
  tb_exp = require('#/i18n/zh-CN/table/exp')._;
  tb_item = require('#/i18n/zh-CN/table/item')._;
  tb_mark = require('#/i18n/zh-CN/table/mark')._;
  tb_param = require('#/i18n/zh-CN/table/param')._;
  tb_stain = require('#/i18n/zh-CN/table/stain')._;
  tb_status = require('#/i18n/zh-CN/table/status')._;
  tb_talent = require('#/i18n/zh-CN/table/talent')._;
  abl_desc = require('#/i18n/zh-CN/table/abl-desc')._;
  item_desc = require('#/i18n/zh-CN/table/item-desc')._;
  status_desc = require('#/i18n/zh-CN/table/status-desc')._;
  talent_desc = require('#/i18n/zh-CN/table/talent-desc')._;

  sex = require('#/i18n/zh-CN/sex/main')._;
  train_action = require('#/i18n/zh-CN/sex/actions')._;
  body_part = require('#/i18n/zh-CN/sex/parts')._;
  jewel_shop = require('#/i18n/zh-CN/sex/shop')._;
  inmon = require('#/i18n/zh-CN/sex/inmons')._;
  inmon_desc = require('#/i18n/zh-CN/sex/inmon-desc')._;

  clothe = require('#/i18n/zh-CN/race/clothes')._;
  race = require('#/i18n/zh-CN/race/races')._;
  skill = require('#/i18n/zh-CN/race/skills')._;
  skill_desc = require('#/i18n/zh-CN/race/skill-desc')._;
  inherit_shop = require('#/i18n/zh-CN/race/inherit')._;
  gene = require('#/i18n/zh-CN/race/genes')._;
  gene_desc = require('#/i18n/zh-CN/race/gene-desc')._;
  mob = require('#/i18n/zh-CN/race/uma-mob.json');
}

module.exports = I18nEntry;
