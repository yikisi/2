class I18nCharaFeature {
  static _ = new I18nCharaFeature();

  hair_color_template = '%COLOR%发';
  uma_hair_color_template = '%COLOR%毛';
  ahoge_hair_template = '%LONG%呆毛';
  chara_template = '[%NAME%]：%DESC%';

  n_sex = '性别';

  h_sex_0 = '女性';
  h_sex_1 = '男性';
  h_sex_10 = '女性？';

  u_sex_0 = '马娘';
  u_sex_1 = '马郎';
  u_sex_10 = '马娘？';

  n_age = '年龄';

  h_age_0 = '幼年';
  h_age_1 = '少年';
  h_age_2 = '青年';

  u_age_0 = '幼年期';
  u_age_1 = '成长期';
  u_age_2 = '本格期';

  baby_uma_adjective = '幼年';

  n_height_with_cm = '身高 (cm)';

  n_hair_color = '发色';
  hc_black = '黑';
  hc_dark_brown = '深棕';
  hc_light_brown = '浅棕';
  hc_auburn = '红棕';
  hc_blue = '蓝';
  hc_purple = '紫';
  hc_orange = '橙';
  hc_pink = '粉';
  hc_green = '绿';
  hc_gold = '金';
  hc_white = '白';

  hc_aoge = '青';
  hc_aokage = '青鹿';
  hc_kurokage = '黑鹿';
  hc_kage = '鹿';
  hc_tochikurige = '栃栗';
  hc_kurige = '栗';
  hc_ashike = '芦';

  hair_splitter = '+';

  n_ahoge_hair = '呆毛';
  th_none = '无';
  th_short = '短';
  th_middle = '中';
  th_long = '长';
  th_white = '白';

  n_front_hair = '前发';
  // thick bangs
  fh_thic_bangs = '厚刘海';
  // even / blunt / straight bangs
  fh_even_bangs = '齐刘海';
  // side part
  fh_side_part = '侧分';
  // exhaust ports
  fh_exha_ports = '排气口';
  // middle part
  fh_midd_part = '中分';

  n_back_hair = '后发';
  // short hair
  bh_shor_hair = '短发';
  // long straight
  bh_long_straight = '长直发';
  // twintails
  bh_twin_tails = '双马尾';
  // high ponytail
  bh_high_ponytail = '高马尾';
  // bun / hair bun
  bh_hair_bun = '发髻';
  // side ponytail
  bh_side_ponytail = '侧马尾';
  // puffy twintails
  bh_puf_twintails = '蓬松双马尾';
  // winged / outer wings style
  bh_wing_style = '外翼式';
  // single braid
  bh_single_braid = '单辫';
  // twin braids
  bh_twin_braids = '双辫';
  // double odango / twin buns
  bh_doub_odango = '双重丸子头';

  n_skin_color = '肤色';
  skin_0 = '雪白';
  skin_1 = '健康';
  skin_2 = '红润';
  skin_3 = '麦黄';

  n_armpit_hair = '腋毛';
  n_pubic_hair = '腋毛';
  body_hair_talent_0 = '天生光滑';
  body_hair_talent_1 = '普通类型';
  body_hair_talent_2 = '生长快而硬';

  body_hair_0 = '稀疏的绒毛';
  body_hair_1 = '整齐的短毛';
  body_hair_2 = '浓密的丛林';
  body_hair_3 = '杂乱的曲毛';
  body_hair_4 = '刚硬的毛发';

  body_hair_talent_suffix = '且正在飞速成长着';

  n_sex_organ_color = '性器颜色';
  p_color_0 = '粉嫩';
  p_color_1 = '泛紫';
  p_color_2 = '黝黑';

  breast_AA = '可爱';
  breast_A = '娇小';
  breast_B = '小巧';
  breast_C = '可人';
  breast_D = '臌胀';
  breast_E = '丰满';
  breast_F = '丰硕';
  breast_G = '硕大';

  penis_1 = '可怜';
  penis_2 = '寒酸';
  penis_3 = '健壮';
  penis_4 = '凶恶';
  penis_5 = '骇人';

  n_chara = '气性';
  'chara_-3' = '弱气';
  'chara_-2' = '胆小';
  'chara_-1' = '认真';
  chara_0 = '普通';
  chara_1 = '要强';
  chara_2 = '顽固';
  chara_3 = '热血';

  'chara_-3_desc' = '训练和调教的效果稍微上升';
  'chara_-2_desc' =
    '比赛中出迟的可能性稍微下降，被阻拦时突围的概率稍微上升，但参赛人数较多时能力会稍微下降';
  'chara_-1_desc' = '比赛中技能的冷却时间稍微下降，训练效果稍微上升';
  chara_0_desc = '比赛中焦躁的可能性稍微下降，使用技能的概率稍微上升';
  chara_1_desc = '比赛中能力会稍微上升，但是会稍微提高输掉比赛后的压力';
  chara_2_desc = '面对强敌时比赛能力会稍微上升，且干劲的影响稍微变大';
  chara_3_desc = '面对强敌时比赛能力会上升，但是没有强敌的比赛能力会稍微下降';

  chara_twisted = '（淫纹 · 气性转换发动中）';
}

module.exports = I18nCharaFeature;
