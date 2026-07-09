module.exports = class extends require('#/i18n/zh-CN/new-game') {
  rp_select = '选择要扮演的角色';
  rp_select_me = '我自己';
  rp_select_tip_1 = '带有 * 号后缀的角色有口上';
  rp_select_tip_2 = '只有完成了个人成就的角色才能进行扮演';
  rp_select_tip_3 = (clist) => [...clist, ' 等特殊角色无法扮演'];

  intro_info1 =
    '十年寒窗终于金榜题名，\n邮箱里的那封信烫着金漆，\n闪着与你刚刚拿到的那块训练员徽章同样颜色的光芒。\n\n你用还在颤抖的手取下了上面的火漆————';
  intro_info2 =
    '聘书\n…………\n…………\n…………\n…………\n…………\n…………\n…………兹聘请贵方担任我校训练员一职。';
  intro_info3 = '日本中央特雷森学园理事长';
  intro_sign = (name) => ['(署名)', { isBlank: 2 }, name];
  intro_time = ['(时间)', { isBlank: 2 }, '2000 年 1 月 1 日'];
  intro_input_name =
    '——然后在左下角签上了自己的名字（输入名字后回车，限定10个字符以内）';
  intro_select_sex = '（请选择性别）';
  intro_resign = '重新签名';
  intro_submit = '提交聘书';
  intro_re_select_sex = '重新选择性别';

  set_diff_header = '游戏模式';
  set_dif0 = '地上神国';
  set_dif0_desc =
    '三女神平等保佑着所有马娘|特雷森的马娘远超同侪|马娘憧憬着纯粹的爱';
  set_dif1 = '尘世间';
  set_dif1_desc =
    '三女神的目光并未投注这里|特雷森只是著名学园之一|马娘面临着现实的压力';
  set_dif2 = '特雷普';
  set_dif2_desc =
    '三女神关照着马娘，除了你的队伍|比赛中总有强敌出现|马娘将尝试各种方式排遣压力|特雷森对训练员严苛而残忍';
  set_dif3 = '世界之敌';
  set_dif3_desc =
    '三女神关照着马娘，除了你和你的队伍|比赛中总有强敌出现|马娘讨厌你|特雷森对训练员严苛而残忍';
  set_dif4 = '鹅摸啦';
  set_dif4_desc =
    '三女神格外关照你的队伍|特雷森的马娘远超同侪|马娘将不择手段地占有你|马娘的孩子们也会';
  set_dif5 = 'Uma3rb';
  set_dif5_desc =
    '三女神格外关照你的队伍|特雷森的马娘远超同侪|马娘裤裆很松且一直在发情|马娘可以挂满玩具完赛';
  set_dif6 = '嗦多马';
  set_dif6_desc =
    '和鹅摸啦难度同|但是所有成员都是FUTA|特雷森对训练员严苛而残忍';
  set_dif7 = '幻想♂︎乡';
  set_dif7_desc =
    '和鹅摸啦难度同|但是所有成员都是男性|特雷森对训练员严苛而残忍';
  set_guide = '显示新手教学';
  set_ng_tooltip = '* 初次游玩强烈建议从【地上神国】或【尘世间】模式开始游戏！';
  set_detail = '逐项调整';
  set_mode_header = '预设';
  set_option_header = '游戏选项';
  set_next = '进入游戏';

  set_train_diff = '训练难度';
  set_td_0 = '易如反掌';
  set_td_1 = '勉为其难';
  set_td_2 = '举步维艰';
  set_td_0_desc = '训练成功率+25%';
  set_td_2_desc = '训练成功率-25%';

  set_train_buff = '训练加成';
  set_tb_0 = '事半功倍';
  set_tb_1 = '计日程功';
  set_tb_2 = '事倍功半';
  set_tb_0_desc = '训练加成+25%';
  set_tb_2_desc = '训练加成-25%';

  set_race_diff = '比赛难度';
  set_rd_0 = '不堪一击';
  set_rd_1 = '旗鼓相当';
  set_rd_2 = '强手如林';
  set_rd_0_desc = '对手评分-20%';
  set_rd_2_desc = '对手评分+10%；启用传奇强敌';

  set_hurt = '马娘可能受伤';
  set_ht_0 = '安然无恙';
  set_ht_1 = '险遭不测';

  set_pressure = '马娘承受压力';
  set_ps_0 = '轻装上阵';
  set_ps_1 = '负重前行';

  set_money_price = '商店的经营者';
  set_mp_0 = '乐善好施';
  set_mp_1 = '循规蹈矩';
  set_mp_2 = '奸诈狡猾';
  set_mp_0_desc = '商店道具价格-50%';
  set_mp_2_desc = '商店道具价格+100%';

  set_sex_skill_price = '调教技能的因子消耗';
  set_race_skill_price = '比赛能力的因子消耗';
  set_sp_0 = '低';
  set_sp_1 = '中';
  set_sp_2 = '高';
  set_sp_0_desc = '因子消耗量-50%';
  set_sp_2_desc = '因子消耗量+100%';

  set_game_over = '游戏结束';
  set_go_0 = '不散筵席';
  set_go_1 = '+粉丝袭击';
  set_go_2 = '+金钱奴隶';
  set_go_3 = '+情爱囹圄';
  set_go_0_desc = '你的训练员生涯将一直持续，直到声望归零';
  set_go_1_desc =
    '马娘的生涯成绩将决定你的生死……即使是她对你有一点点的厌恶也会导致育成结束成为你人生的终点';
  set_go_2_desc =
    '你对马娘的债务也会决定你的命运，请负起成年人的责任，好好管理自己的资产';
  set_go_3_desc =
    '无望之爱会结出什么样的果实？现在你也有机会在爱意构筑的囚牢中结束自己的人生';

  set_honour = '声望的变化';
  set_hn_0 = '与日俱增';
  set_hn_1 = '不增不减';
  set_hn_2 = '逐渐衰减';
  set_hn_0_desc = '你的声望会缓慢增长；每回合声望+1';
  set_hn_1_desc = '你的声望如无其他因素不会变化';
  set_hn_2_desc = '你的声望会逐渐衰减；每回合声望-1';

  set_honour_empty = '身败名裂时';
  set_he_0 = '黯然退场';
  set_he_1 = '黑暗交易';
  set_he_0_desc = '声望归零了，一切都结束了……游戏系统，将我们带回标题';
  set_he_1_desc = '想在声望归零后继续下去？即使以你的一切作为代价？';

  set_chara_sex = '马娘性别';
  set_cs_0 = '群芳环绕';
  set_cs_1 = '阳刚爆表';
  set_cs_2 = '阴阳并济';
  set_cs_3 = '现实投射';
  set_cs_0_desc = '被美女包围了！';
  set_cs_1_desc = '挥洒着青春汗水的帅哥们……';
  set_cs_2_desc = '各位女……女士？';
  set_cs_3_desc = '耳饰的位置表示着什么呢？';

  set_relation = '马娘初见好感';

  set_relation_buff = '好感提升难度';
  set_love_buff = '爱慕提升难度';
  set_diff_easy = '容易';
  set_diff_normal = '一般';
  set_diff_hard = '困难';
  set_diff_easy_desc = '获取+50%';
  set_diff_hard_desc = '获取-50%';

  set_relation_change = '好感的变化';
  set_rc_0 = '与日俱增';
  set_rc_1 = '君子之交';
  set_rc_2 = '相看相厌';
  set_rc_0_desc = '马娘们对你的好感与日俱增；每回合好感+5';
  set_rc_1_desc = '马娘们对你的好感不会受时间影响';
  set_rc_2_desc = '马娘们会逐渐对你产生厌恶；每回合好感-10';

  set_love = '马娘初见爱慕';

  set_love_change = '爱慕的变化';
  set_lc_0 = '不敢肖想';
  set_lc_1 = '逐渐吸引';
  set_lc_0_desc = '只有主动的行为才能让马娘爱上你；可触发爱慕升级事件';
  set_lc_1_desc =
    '马娘们会逐渐被你吸引，直到依存……即使你什么都不做；每回合爱慕+1，不会触发爱慕升级';

  set_unfaith = '对出轨的看法';
  set_uf_0 = '心胸开阔';
  set_uf_1 = '不可原谅';
  set_uf_0_desc = '马娘只在乎和你在一起的点点滴滴';
  set_uf_1_desc = '小心独占力……';

  set_extreme = '马娘极端行为';
  set_eb_0 = '不会进行';
  set_eb_1 = '有可能';
  set_eb_2 = '尽量抑制';
  set_eb_3 = '积极采取';
  set_eb_0_desc = '马娘不会对你做什么，很安全';
  set_eb_1_desc = '马娘在求而不得的时候有很低的可能夜袭或者绑架你';
  set_eb_2_desc = '马娘会尽量抑制夜袭和绑架的欲望……但是很勉强';
  set_eb_3_desc = '在你看不见的地方，她们会露出扭曲的笑容……';

  set_talent = '天生特性';
  set_tt_0 = '淫娃荡妇';
  set_tt_1 = '生而不同';
  set_tt_2 = '冰清玉洁';
  set_tt_3 = '石芯玉女';
  set_tt_0_desc = '以我所见，皆为母马';
  set_tt_1_desc = '每个人都独一无二';
  set_tt_2_desc = '马娘的身体完美无暇，找不到丝毫弱点';
  set_tt_3_desc = '极难让她们感到快感';

  set_abl_update = '角色对性技的学习';
  set_au_0 = '兴趣缺缺';
  set_au_1 = '敏而好学';

  set_resist = '角色的强奸抵抗';
  set_rs_0 = '一推就倒';
  set_rs_1 = '激烈反抗';

  set_ero_item = '道具影响';
  set_ei_0 = '流水冲锋';
  set_ei_1 = '寸步难行';
  set_ei_0_desc =
    '某观众「有时候比赛会变得有点奇怪，比如选手的脸色、衣服的湿度……但是还是很精彩」';
  set_ei_1_desc =
    '某观众「翻着白眼跑得歪歪斜斜，跑道都湿了——这可是有马纪念，能不能尊重点！」；带玩具比赛基础属性-25%';

  set_mejiro_style = '目白城的风格';
  set_ms_0 = '自由';
  set_ms_1 = '慈爱';
  set_ms_0_desc = '随你喜欢❤️';
  set_ms_1_desc = '麦吉罗在呼唤……';

  set_child_love = '不伦之恋';
  set_cl_0 = '不允许';
  set_cl_1 = '允许';
  set_cl_0_desc = '孩子们对你只有孺慕之情……除非你主动打破';
  set_cl_1_desc = '孩子们对你只有孺慕之情……吗？';

  set_height = '马娘的身高';
  set_hg_0 = '这么矮的妈妈';
  set_hg_1 = '一般就好';
  set_hg_2 = '我想被支配！';
  set_hg_0_desc = '被萝莉环绕的天国……';
  set_hg_1_desc = '马娘身高将自然分布';
  set_hg_2_desc = '巨大马娘不可战胜！';

  set_gd_0 = '我已完全掌握！';
  set_gd_1 = '第一次的时候显示一下吧';

  cus_intro_header = '捏人时间！要随机生成角色吗？';
  bt_cus_random = '随机生成';
  bt_cus_default = '默认就好';
  bt_cus_set = '自己设置';

  cus_body_header = '首先来决定身体细节！';
  bt_cus_confirm = '就这样！';

  cus_birthday_header =
    '然后是身高和生日！\nPS：开发者就假定您并非出生于2月29日啦';
  cus_birthday_month = '出生月份';
  cus_bm_prev = '前一月';
  cus_bm_next = '后一月';
  cus_birthday_date = '出生日期';
  cus_bd_prev_5 = '前五天';
  cus_bd_prev = '前一天';
  cus_bd_next = '后一天';
  cus_bd_next_5 = '后五天';

  cus_breast_header = '您希望您的女性象征有何种规模？\nPS：不是越大越好！';
  cus_breast_1 = '……我是砧板';
  cus_breast_2 = '当然是稀有价值啦';
  cus_breast_3 = '普通的就好';
  cus_breast_4 = '希望能大一点！';
  cus_breast_5 = '我要傲视一切（不是）';

  cus_penis_header = '您希望您的「作案工具」有何种规模？\nPS：不是越大越好！';
  cus_penis_1 = '所有人都能容纳的那种！';
  cus_penis_2 = '比上面那个偏大一点就好';
  cus_penis_3 = '普通的就好';
  cus_penis_4 = '当然要雄伟的！';
  cus_penis_5 = '我要让所有人都痛并快乐着！';

  cus_uma_header = '现在是幻想时间！如果您变成了马娘，您认为您是什么气性？';

  cus_uma_color_header_template =
    '嗯嗯，您认为您将会是 %CHARA% 气性啊……那么您会是什么毛色的马娘呢？';

  cus_call_header = '那么就到称呼环节啦！';
  cus_call_3 = '哦哦，您取了一个很喜欢马蹄的名字呢！';
  cus_call_179 = '哦哦，您取了一个很萝莉控的名字呢！';
  cus_call_621 = '哦哦，您取了一个很想被欺负的名字呢！';

  cus_set_callname = '希望旁白君如何称呼您呢？';
  cus_set_by_self = '自己决定！';

  get_cus_callname_confirm = (actual, call) => [
    actual,
    ' 训练员，旁白君从此就称您为 ',
    call,
    ' 了！',
  ];

  cus_taiwu_header = '最后是来自开发者的馈赠！';

  taiwu_talent_speed = '迅由危亡';
  taiwu_talent_stamina = '纯凭自然';
  taiwu_talent_power = '锋从磨砺';
  taiwu_talent_guts = '香自苦寒';
  taiwu_talent_wiz = '意随心寂';

  taiwu_talent_speed_desc = '迅由危亡，千钧一发，您的速度远胜常人。';
  taiwu_talent_stamina_desc = '纯凭自然，浑然天成，您的耐力远胜常人。';
  taiwu_talent_power_desc = '锋从磨砺，伏虎降龙，您的力量远胜常人。';
  taiwu_talent_guts_desc = '香自苦寒，动心忍性，您的根性远胜常人。';
  taiwu_talent_wiz_desc = '意随心寂，感悟自生，您的智力远胜常人。';

  cus_final_header = '再来检查一下吧！';
  get_cus_f_name = (name) => [name, ' 训练员'];
  get_cus_f_male = (callname, sex, height) => [
    '旁白君称为：',
    callname,
    { isDivider: true },
    '性别：',
    sex,
    { isDivider: true },
    '身高：',
    height,
    'cm',
  ];
  get_cus_f_female = (callname, sex, height, female_info) => [
    ...this.get_cus_f_male(callname, sex, height),
    { isDivider: true },
    ...female_info,
  ];
  get_cus_f_hair = (hair, hair_color) => [
    '发型：',
    hair,
    { isDivider: true },
    '发色：',
    hair_color,
  ];
  get_cus_f_uma = (body_hair, chara) => [
    '如果马娘化，认为自己将是 ',
    body_hair,
    ' ',
    chara,
    ' 马娘',
  ];
  get_cus_f_skin_male = (skin, armpit, pubic, pv_color, penis) => [
    ...this.get_cus_f_skin_female(skin, armpit, pubic, pv_color),
    { isDivider: true },
    '阴茎长度：',
    penis,
  ];
  get_cus_f_skin_female = (skin, armpit, pubic, pv_color) => [
    '肤色：',
    skin,
    { isDivider: true },
    '腋毛：',
    armpit,
    { isDivider: true },
    '阴毛：',
    pubic,
    { isDivider: true },
    '性器颜色：',
    pv_color,
  ];
  cus_f_talent = '性格特征：';
  cus_f_xp = '其他特征：';
  cus_f_gift = '开发者的馈赠：';
  bt_random_talents = '随机一下特征';
  bt_random_all = '全部随机！';
  bt_re_make = '我要重选！';
  bt_exit = '我不玩了……';
};
