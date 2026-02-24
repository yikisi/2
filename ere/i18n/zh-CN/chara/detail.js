class I18nDetail {
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
    '，母亲是',
    mother,
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
  sex_image_bt_change_template = '更改调教立绘 (当前：第 %SET% 套)';
  sex_image_set_template = '第 %SET% 套';
  sex_image_personal_info = '使用专属调教立绘';

  human_info = '一介人类而已';
  no_reward_info = '还没有可称道的战绩';
  cannot_join_race_info = '不能出走比赛';
  growth_info = '还在成长中哦';
  no_exp_info = '还没有相关经历';
  no_known_info = '还没有足够了解';
  no_part_info = '没有这个部位';

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
