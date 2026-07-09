module.exports = class extends require('#/i18n/zh-CN/table/status') {
  template = '[%NAME%]';

  n_status = '状态';

  normal = '正常';

  remote = '远程';

  pr_1 = '不快';
  pr_2 = '忧虑';
  pr_3 = '抑郁！';
  pr_4 = '崩溃！';

  eo_2 = '不安';
  eo_3 = '情动';
  eo_4 = '焦躁！';

  buff207 = '艾尔菲相助';
  buff301 = '时刻相助';
  buff305 = '针灸疗养';
  buff303 = '悦子相助';
  buff340 = '女神之望';
  buff341 = '女神之爱';
  buff342 = '女神之信';
  buff343 = '佐岳相助';
  buff344 = '凉花相助';
  buff345 = '灯之相助';
  buff346 = '传奇激励';
  buff347 = '先驱激励';
  buff348 = '偶像激励';

  milk = '泌乳';

  pg_resume = (t) => `产后恢复(${t})`;
  pg_prebirth = '临产';
  pg_normal = '有孕';

  train_debuff = '疏于训练';
  train_buff_1 = '精于训练';
  train_buff_2 = '极擅训练';

  cum = '呼唤';

  1 = '熬夜';
  2 = '摸鱼';
  3 = '发胖';
  4 = '偏头痛';
  5 = (t) => `伤病(${t})`;
  6 = (t) => `疲惫(${t})`;
  7 = (t) => `语言不通(${t})`;
  8 = (t) => `水土不服(${t})`;
  9 = (t) => `客场作战(${t})`;
  10 = '沉睡';

  15 = '领域！';
  16 = '健康茶';
  17 = '生日';

  20 = '克制！';
  21 = '讨厌药';
  22 = '抑制药';
  23 = (t) => `马语者(${t})`;
  24 = '好感度眼镜';
  25 = '马跳次数眼镜';
  26 = '透视眼镜';

  30 = '经期';
  31 = '危险期';
  32 = '特别假期';
  33 = '淫纹贴纸';

  35 = '马跳Z';
  36 = '弗隆K';
  37 = '弗隆P';
  38 = '超马跳Z';
  39 = '马跳S';
  40 = '避孕套溶解！';
  41 = '避孕';
  42 = '避孕';

  // 调教
  tr_leader = '主导权';

  v_penis_v = '童贞';
  v_penis_d = '无自觉非童贞';

  v_vagina_v = '处女';
  v_vagina_d = '无自觉非处女';
  v_vagina_r = '再生处女';

  tr_erect = '勃起！';
  tr_lb_breast = '胸润滑';
  tr_lb_vagina = '穴润滑';
  tr_lb_anal = '菊润滑';
  tr_br_erect = '乳突！';

  tr_tc_40 = '脱力！';
  tr_tc_41 = '失神！';
  tr_tc_44 = '发情！';
  tr_tc_45 = (t) => `余韵！(${t})`;
  tr_tc_46 = (t) => `贤者(${t})`;
  tr_tc_47 = '避孕套';
  tr_tc_48 = '穴扩张';
  tr_tc_49 = '菊扩张';
  tr_tc_57 = (t) => `绝顶控制！(${t})`;
  tr_ex_45 = '膣撕裂！';
  tr_ex_46 = '肛撕裂！';
  tr_ex_55 = (t) => `寸止(${t})`;
  tr_te_6 = '项圈';
  tr_te_7 = '眼罩';

  race_buff_template = '%BUFF%[%NAME%]';
  r_base = '基础';
  r_away_race = (t) => `客场作战(${t})`;
  r_tired = (t) => `疲惫(${t})`;
  r_field = '领域！';
  r_body_off = (t) => `水土不服(${t})`;
  r_tong_tie = (t) => `语言不通(${t})`;
  r_hp_low = '体力低下';
  r_hp_ins = '体力不足';
  r_tp_low = '精力低下';
  r_tp_ins = '精力不足';
  r_p_embryo = '孕早期';
  r_p_fetal = '安定期';
  r_p_late = '孕晚期';
  r_item_buff = '欢愉赐福';
  r_item_debuff = '性玩具';
};
