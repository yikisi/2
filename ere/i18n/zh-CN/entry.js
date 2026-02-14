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
  moti_0 = '极差';
  moti_1 = '较差';
  moti_2 = '一般';
  moti_3 = '较佳';
  moti_4 = '极佳';

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

  ui_love = '爱慕';
  ui_love_template = '爱慕：%LOVEINFO%';
  love_u = '？';
  love_0 = '平常';
  love_1 = '朦胧';
  love_2 = '暧昧';
  love_3 = '爱欲';
  love_4 = '热恋';
  love_5 = '佳偶';
  love_6 = '依存';

  ui_relation = '好感';
  ui_relation_template = '好感：%RELATIONINFO%';
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
  tt_link_release = 'EraUma 游戏发布页';
  tt_link_desk_engine = 'EraElectron 引擎（PC 版）发布页';
  tt_link_app_engine = 'ere.app 引擎（安卓版）发布页';
  tt_link_community = 'ERA 特雷森学园（Discord 社区）';
  tt_link_wiki = 'Wiki（使用说明/游戏设定/口上写作指引……）';

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
  cr_kojo_detail = '详细口上鸣谢';
  cr_kojo_suffix_template = '（%SUFFIX%）';
  cr_kojo_suffix_recruit = '招募';
  cr_kojo_suffix_basement = '地下室';
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
  ui_conjunction = ' 和 ';
  ui_ellipses = '……';
  ui_back = '返回';
  ui_back_title = '返回标题';
  ui_achieve_title = '获得新成就！';
  ui_on = '开';
  ui_off = '关';
  ui_yes = '确定';
  ui_no = '取消';
  ui_yes2 = '是';
  ui_no2 = '否';
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
  ui_month_template = '%MONTH% 个月';
  ui_too_long_template =
    '（显示宽度不能超过 %WIDTH% 个全角字符或 %WIDTH*2% 个半角字符，请重新输入！）';
  ui_et_prev = '前一项';
  ui_et_next = '后一项';
  ui_pg_prev = '前一页';
  ui_pg_next = '后一页';
  ui_default = '默认';
  ui_game_over = 'GAME OVER';
  ui_invalid_value = '-';

  get_ui_hd_location = (location) => ['位于 ', location];
  get_ui_hd_honour = (honour) => [honour, ' 声望'];
  ui_hd_income_template = '(%INCOME%)';
  get_ui_hd_money = (money, income) => [money, ...income, ' 马币'];
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
  get_ui_motivation = (motivation) => [this.ui_mot, motivation];
  ui_edu_template = '%EDU%';
  get_ui_race_indicator = (race, delta) => [
    '(距 ',
    race,
    ' 还有 ',
    delta,
    ' 周)',
  ];
  get_ui_curr_race_indicator = (race) => ['(本周有 ', race, ')'];

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
  ui_cost_jpy_tip_template = '马币不足 (需要：%MONEY%)';
  ui_foreign_lan_max_tip_template = '%LAN%已非常熟练';
  ui_foreign_rest_max_tip = '身体已调理至健康';
  ui_foreign_train_max_tip = '已完全适应跑道';

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

  name = new (require('#/i18n/zh-CN/chara/names'))();
  title = new (require('#/i18n/zh-CN/chara/titles'))();
  title_desc = new (require('#/i18n/zh-CN/chara/title-desc'))();
  feature = new (require('#/i18n/zh-CN/chara/feature'))();

  kojo = new (require('#/i18n/zh-CN/kojo/entry'))();
  timon = new (require('#/i18n/zh-CN/timon/entry'))();

  new_game = new (require('#/i18n/zh-CN/new-game'))();
  location = new (require('#/i18n/zh-CN/location'))();
  achievement = new (require('#/i18n/zh-CN/achieve'))();
  achieve_desc = new (require('#/i18n/zh-CN/achieve-desc'))();
  note = new (require('#/i18n/zh-CN/notes'))();

  tb_abl = new (require('#/i18n/zh-CN/table/abl'))();
  tb_exp = new (require('#/i18n/zh-CN/table/exp'))();
  tb_item = new (require('#/i18n/zh-CN/table/item'))();
  tb_mark = new (require('#/i18n/zh-CN/table/mark'))();
  tb_param = new (require('#/i18n/zh-CN/table/param'))();
  tb_stain = new (require('#/i18n/zh-CN/table/stain'))();
  tb_status = new (require('#/i18n/zh-CN/table/status'))();
  tb_talent = new (require('#/i18n/zh-CN/table/talent'))();
  abl_desc = new (require('#/i18n/zh-CN/table/abl-desc'))();
  item_desc = new (require('#/i18n/zh-CN/table/item-desc'))();
  status_desc = new (require('#/i18n/zh-CN/table/status-desc'))();
  talent_desc = new (require('#/i18n/zh-CN/table/talent-desc'))();

  train_action = new (require('#/i18n/zh-CN/sex/actions'))();
  jewel_shop = new (require('#/i18n/zh-CN/sex/shop'))();
  inmon = new (require('#/i18n/zh-CN/sex/inmons'))();
  inmon_desc = new (require('#/i18n/zh-CN/sex/inmon-desc'))();

  clothe = new (require('#/i18n/zh-CN/race/clothes'))();
  race = new (require('#/i18n/zh-CN/race/races'))();
  skill = new (require('#/i18n/zh-CN/race/skills'))();
  skill_desc = new (require('#/i18n/zh-CN/race/skill-desc'))();
  inherit_shop = new (require('#/i18n/zh-CN/race/inherit'))();
  gene = new (require('#/i18n/zh-CN/race/genes'))();
  gene_desc = new (require('#/i18n/zh-CN/race/gene-desc'))();
  mob = require('#/i18n/zh-CN/race/uma-mob.json');
}

module.exports = I18nEntry;
