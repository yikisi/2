const I18nCharaFeature = require('#/i18n/zh-CN/chara/feature');

module.exports = class extends I18nCharaFeature {
  hair_color_template = '%COLOR%髪';
  uma_hair_color_template = '%COLOR%毛';
  ahoge_hair_template = '%LONG%アホ毛';
  chara_template = '[%NAME%]：%DESC%';

  n_sex = '性別';

  h_sex_0 = '女性';
  h_sex_1 = '男性';
  h_sex_10 = '女性？';

  u_sex_0 = 'ウマ娘';
  u_sex_1 = 'ウマ郎';
  u_sex_10 = 'ウマ娘?';

  n_age = '年齢';

  h_age_0 = '幼年';
  h_age_1 = '少年';
  h_age_2 = '青年';

  u_age_0 = '幼少期';
  u_age_1 = '成長期';
  u_age_2 = '本格化';

  baby_uma_adjective = '幼い';

  n_height_with_cm = '身長 (cm)';

  n_hair_color = '髪色';
  hc_black = '黒';
  hc_dark_brown = '濃茶';
  hc_light_brown = '薄茶';
  hc_auburn = '赤茶';
  hc_blue = '青';
  hc_purple = '紫';
  hc_orange = '橙';
  hc_pink = 'ピンク';
  hc_green = '緑';
  hc_gold = '金';
  hc_white = '白';

  hc_aoge = '青';
  hc_aokage = '青鹿';
  hc_kurokage = '黒鹿';
  hc_kage = '鹿';
  hc_tochikurige = '栃栗';
  hc_kurige = '栗';
  hc_ashike = '芦';

  hair_splitter = '+';

  n_ahoge_hair = 'アホ毛';
  th_none = 'なし';
  th_short = '短い';
  th_middle = '中くらい';
  th_long = '長い';
  th_white = '白い';

  n_front_hair = '前髪';
  fh_thic_bangs = '厚い前髪';
  fh_even_bangs = 'ぱっつん';
  fh_side_part = 'サイド分け';
  fh_exha_ports = 'エキゾースト';
  fh_midd_part = 'センター分け';

  n_back_hair = '後ろ髪';
  bh_shor_hair = 'ショート';
  bh_long_straight = 'ロングストレート';
  bh_twin_tails = 'ツインテール';
  bh_high_ponytail = 'ハイポニーテール';
  bh_hair_bun = 'お団子';
  bh_side_ponytail = 'サイドポニー';
  bh_puf_twintails = 'ふんわりツインテール';
  bh_wing_style = '外ハネ';
  bh_single_braid = '一本編み';
  bh_twin_braids = '二つ編み';
  bh_doub_odango = '二重お団子';

  n_skin_color = '肌色';
  skin_0 = '色白';
  skin_1 = '健康';
  skin_2 = '血色がいい';
  skin_3 = '小麦色';

  n_armpit_hair = '腋毛';
  n_pubic_hair = '陰毛';
  body_hair_talent_0 = '生まれつき滑らか';
  body_hair_talent_1 = '普通';
  body_hair_talent_2 = '濃く硬い';

  body_hair_0 = 'まばらな産毛';
  body_hair_1 = '整った短い毛';
  body_hair_2 = '濃い茂み';
  body_hair_3 = '乱れた巻き毛';
  body_hair_4 = '硬い毛';

  body_hair_talent_suffix = 'しかも急成長中';

  n_sex_organ_color = '性器の色';
  p_color_0 = 'ピンク';
  p_color_1 = '紫がかった';
  p_color_2 = '浅黒い';

  breast_AA = 'かわいい';
  breast_A = '控えめ';
  breast_B = '小さめ';
  breast_C = '程よい';
  breast_D = 'ふくらみ';
  breast_E = '豊満';
  breast_F = '豊か';
  breast_G = '極めて大きい';

  penis_1 = 'かわいそう';
  penis_2 = '貧弱';
  penis_3 = 'たくましい';
  penis_4 = '凶悪';
  penis_5 = '恐ろしい';

  n_chara = '気性';
  'chara_-3' = '弱気';
  'chara_-2' = '臆病';
  'chara_-1' = '真面目';
  chara_0 = '普通';
  chara_1 = '気が強い';
  chara_2 = '頑固';
  chara_3 = '熱血';

  'chara_-3_desc' = 'トレーニングと調教の効果がわずかに上昇する';
  'chara_-2_desc' =
    'レースで出遅れの可能性がわずかに低下し、ブロック時の突破確率がわずかに上昇するが、出走頭数が多いと能力がわずかに低下する';
  'chara_-1_desc' =
    'レース中のスキルクールダウンがわずかに短縮し、トレーニング効果がわずかに上昇する';
  chara_0_desc =
    'レース中の焦りの可能性がわずかに低下し、スキル発動率がわずかに上昇する';
  chara_1_desc =
    'レース中の能力がわずかに上昇するが、敗北時のストレスもわずかに増える';
  chara_2_desc =
    '強敵相手でレース能力がわずかに上昇し、やる気の影響もわずかに大きくなる';
  chara_3_desc =
    '強敵相手でレース能力が上昇するが、強敵のいないレースでは能力がわずかに低下する';

  chara_twisted = '（淫紋・気性転換発動中）';
};
