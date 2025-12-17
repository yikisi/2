class I18nEntry {
  speed = '速度';
  endurance = '耐力';
  strength = '力量';
  toughness = '根性';
  intelligence = '智力';
  hp = '体力';
  tp = '精力';
  get n_attr() {
    return [
      this.speed,
      this.endurance,
      this.strength,
      this.toughness,
      this.intelligence,
    ];
  }
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

  clothe = new (require('#/i18n/zh-CN/clothes'))();
  race = new (require('#/i18n/zh-CN/races'))();
  skill = new (require('#/i18n/zh-CN/skill-names'))();
  skill_desc = new (require('#/i18n/zh-CN/skill-desc'))();
  gene = new (require('#/i18n/zh-CN/gene-names'))();
  gene_desc = new (require('#/i18n/zh-CN/gene-desc'))();
  note = new (require('#/i18n/zh-CN/notes'))();
  inmon = new (require('#/i18n/zh-CN/inmon-names'))();
  inmon_desc = new (require('#/i18n/zh-CN/inmon-desc'))();
}

module.exports = I18nEntry;
