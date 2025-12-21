class I18nEntry {
  language = '简体中文';

  speed = '速度';
  endurance = '耐力';
  strength = '力量';
  toughness = '根性';
  intelligence = '智力';
  get n_attr() {
    return [
      this.speed,
      this.endurance,
      this.strength,
      this.toughness,
      this.intelligence,
    ];
  }
  hp = '体力';
  tp = '精力';
  get n_base() {
    return [this.hp, this.tp];
  }

  abbr_hp = '体';
  abbr_tp = '精';

  ui_moti = '干劲';
  moti_0 = '极差';
  moti_1 = '较差';
  moti_2 = '一般';
  moti_3 = '较佳';
  moti_4 = '极佳';
  get n_moti() {
    return [this.moti_0, this.moti_1, this.moti_2, this.moti_3, this.moti_4];
  }

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
  get n_adapt() {
    return [
      this.a_g_grass,
      this.a_g_dirt,
      this.a_d_short,
      this.a_d_mile,
      this.a_d_medium,
      this.a_d_long,
      this.a_s_nige,
      this.a_s_senko,
      this.a_s_sashi,
      this.a_s_okimi,
    ];
  }
  get n_style() {
    return [this.a_s_nige, this.a_s_senko, this.a_s_sashi, this.a_s_okimi];
  }
  adapt_template = '%ADAPT%适性';

  edu_0 = '新秀年';
  edu_1 = '经典年';
  edu_2 = '资深年';
  get n_edu() {
    return [this.edu_0, this.edu_1, this.edu_2];
  }

  oot_0 = '已育成';
  oot_1 = '殿堂';
  get n_oot() {
    return [this.oot_0, this.oot_1];
  }

  train_debuff = '疏于训练';
  train_buff_1 = '精于训练';
  train_buff_2 = '极擅训练';
  get train_buff_desc() {
    return [this.train_debuff, '', this.train_buff_1, this.train_buff_2];
  }

  honour_m = '失格';
  honour_0 = '新手';
  honour_1 = '老练';
  honour_2 = '中坚';
  honour_3 = '精英';
  honour_4 = '传奇';
  get m_honour() {
    return [
      this.honour_0,
      this.honour_1,
      this.honour_2,
      this.honour_3,
      this.honour_4,
    ];
  }

  title_0 = '训练员';
  title_1 = '马娘';
  title_2 = '性奴';
  title_3 = '孕袋';
  get n_title() {
    return [this.title_0, this.title_1, this.title_2, this.title_3];
  }

  love_u = '？';
  love_0 = '平常';
  love_1 = '朦胧';
  love_2 = '暧昧';
  love_3 = '爱欲';
  love_4 = '热恋';
  love_5 = '佳偶';
  love_6 = '依存';
  get m_love() {
    return [
      this.love_0,
      this.love_1,
      this.love_2,
      this.love_3,
      this.love_4,
      this.love_5,
      this.love_6,
    ];
  }

  relation_u = '？';
  relation_0 = '失望';
  relation_1 = '怀疑';
  relation_2 = '冷淡';
  relation_3 = '融洽';
  relation_4 = '热忱';
  relation_5 = '喜爱';
  relation_6 = '亲密';
  relation_7 = '不渝';
  get m_relation() {
    return [
      this.relation_0,
      this.relation_1,
      this.relation_2,
      this.relation_3,
      this.relation_4,
      this.relation_5,
      this.relation_6,
      this.relation_7,
    ];
  }

  skin_0 = '雪白';
  skin_1 = '健康';
  skin_2 = '红润';
  skin_3 = '麦黄';
  get n_skin() {
    return [this.skin_0, this.skin_1, this.skin_2, this.skin_3];
  }

  penis_1 = '可怜';
  penis_2 = '寒酸';
  penis_3 = '健壮';
  penis_4 = '凶恶';
  penis_5 = '骇人';
  get n_penis() {
    return [
      '',
      this.penis_1,
      this.penis_2,
      this.penis_3,
      this.penis_4,
      this.penis_5,
    ];
  }

  p_color_0 = '粉嫩';
  p_color_1 = '泛紫';
  p_color_2 = '黝黑';
  get n_c_penis() {
    return [this.p_color_0, this.p_color_1, this.p_color_2];
  }

  v_penis_v = '童贞';
  v_penis_d = '无自觉非童贞';

  v_vagina_v = '处女';
  v_vagina_d = '无自觉非处女';
  v_vagina_r = '再生处女';

  tt_new_game = '开始新游戏';
  tt_load_game = '加载存档';
  tt_help = '帮助说明';
  tt_copyrights = '制作鸣谢';

  ui_back = '返回';
  ui_achieve_title = '获得新成就！';
  ui_yes = '确定';
  ui_no = '取消';

  achievement = new (require('#/i18n/zh-CN/achieve'))();
  achieve_desc = new (require('#/i18n/zh-CN/achieve-desc'))();
  note = new (require('#/i18n/zh-CN/notes'))();

  tb_abl = new (require('#/i18n/zh-CN/table/abl'))();
  tb_mark = new (require('#/i18n/zh-CN/table/mark'))();

  train_action = new (require('#/i18n/zh-CN/sex/actions'))();
  inmon = new (require('#/i18n/zh-CN/sex/inmons'))();
  inmon_desc = new (require('#/i18n/zh-CN/sex/inmon-desc'))();

  clothe = new (require('#/i18n/zh-CN/race/clothes'))();
  race = new (require('#/i18n/zh-CN/race/races'))();
  skill = new (require('#/i18n/zh-CN/race/skills'))();
  skill_desc = new (require('#/i18n/zh-CN/race/skill-desc'))();
  gene = new (require('#/i18n/zh-CN/race/genes'))();
  gene_desc = new (require('#/i18n/zh-CN/race/gene-desc'))();
}

module.exports = I18nEntry;
