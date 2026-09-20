const I18nStatus = require('#/i18n/zh-CN/table/status');

module.exports = class extends I18nStatus {
  n_status = '状態';

  normal = '正常';

  remote = '遠隔';

  pr_1 = '不快';
  pr_2 = '憂い';
  pr_3 = 'うつ！';
  pr_4 = '崩壊！';

  eo_2 = '不安';
  eo_3 = 'ときめき';
  eo_4 = '焦燥！';

  buff207 = 'エルフィの助け';
  buff301 = 'タズナの助け';
  buff305 = '鍼灸療養';
  buff303 = '悦子の助け';
  buff340 = '女神の望み';
  buff341 = '女神の愛';
  buff342 = '女神の信頼';
  buff343 = '佐岳の助け';
  buff344 = '涼花の助け';
  buff345 = '灯の助け';
  buff346 = '伝説の激励';
  buff347 = '先駆の激励';
  buff348 = 'アイドルの激励';

  milk = '泌乳';

  pg_resume = (t) => `産後(${t})`;
  pg_prebirth = '臨月';
  pg_normal = '妊娠';

  train_debuff = '練習ベタ';
  train_buff_1 = '練習上手○';
  train_buff_2 = '練習上手◎';

  cum = '呼び声';

  1 = '夜ふかし気味';
  2 = 'なまけ癖';
  3 = '太り気味';
  4 = '片頭痛';
  5 = (t) => `傷病(${t})`;
  6 = (t) => `疲れた(${t})`;
  7 = (t) => `言葉が通じない(${t})`;
  8 = (t) => `慣れない土地(${t})`;
  9 = (t) => `アウェイ(${t})`;
  10 = '昏睡';

  15 = '領域！';
  16 = '健康茶';
  17 = '誕生日';

  20 = '抑制！';
  21 = '嫌い薬';
  22 = '抑制薬';
  23 = (t) => `ウマ語り(${t})`;
  24 = '好感度眼鏡';
  25 = '調教回数眼鏡';
  26 = '透視眼鏡';

  30 = '生理';
  31 = '危険日';
  32 = '特別休暇';
  33 = '淫紋シール';

  35 = 'ウマ跳びZ';
  36 = 'フロンK';
  37 = 'フロンP';
  38 = '超ウマ跳びZ';
  39 = 'ウマ跳びS';
  40 = 'コンドーム溶解！';
  41 = '避妊';
  42 = '避妊';

  tr_leader = '主導権';

  v_penis_v = '童貞';
  v_penis_d = '無自覚非童貞';

  v_vagina_v = '処女';
  v_vagina_d = '無自覚非処女';
  v_vagina_r = '再生処女';

  tr_erect = '勃起！';
  tr_lb_breast = '胸潤滑';
  tr_lb_vagina = '秘部潤滑';
  tr_lb_anal = '菊潤滑';
  tr_br_erect = '乳首勃起！';

  tr_tc_40 = '脱力！';
  tr_tc_41 = '失神！';
  tr_tc_44 = '発情！';
  tr_tc_45 = (t) => `余韻！(${t})`;
  tr_tc_46 = (t) => `賢者タイム(${t})`;
  tr_tc_47 = 'コンドーム';
  tr_tc_48 = '秘部拡張';
  tr_tc_49 = '菊拡張';
  tr_tc_57 = (t) => `絶頂制御！(${t})`;
  tr_ex_45 = '膣裂傷！';
  tr_ex_46 = '肛裂傷！';
  tr_ex_55 = (t) => `寸止め(${t})`;
  tr_te_6 = '首輪';
  tr_te_7 = 'アイマスク';

  race_buff_template = '%BUFF%[%NAME%]';
  r_base = '基礎';
  r_away_race = (t) => `アウェイ(${t})`;
  r_tired = (t) => `疲れた(${t})`;
  r_field = '領域！';
  r_body_off = (t) => `慣れない土地(${t})`;
  r_tong_tie = (t) => `言葉が通じない(${t})`;
  r_hp_low = '体力低下';
  r_hp_ins = '体力不足';
  r_tp_low = '気力低下';
  r_tp_ins = '気力不足';
  r_p_embryo = '妊娠初期';
  r_p_fetal = '安定期';
  r_p_late = '妊娠後期';
  r_item_buff = '快楽の祝福';
  r_item_debuff = '性玩具';
};
