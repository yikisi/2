module.exports = class extends require('#/i18n/zh-CN/table/status') {
  n_status = 'Status';

  normal = 'Normal';

  remote = 'Remote';

  pr_1 = 'Unhappy';
  pr_2 = 'Worried';
  pr_3 = 'Depressed!';
  pr_4 = 'Broken!';

  eo_2 = 'Restless';
  eo_3 = 'Aroused';
  eo_4 = 'Frantic!';

  buff207 = "Elfi's Support";
  buff301 = "Toki's Support";
  buff305 = 'Acupuncture Care';
  buff303 = "Etsuko's Support";
  buff340 = "Goddess's Hope";
  buff341 = "Goddess's Love";
  buff342 = "Goddess's Faith";
  buff343 = "Satake's Support";
  buff344 = "Ryouka's Support";
  buff345 = "Akari's Support";
  buff346 = 'Legend Boost';
  buff347 = 'Pioneer Boost';
  buff348 = 'Idol Boost';

  milk = 'Lactating';

  pg_resume = (t) => `Postpartum Recovery (${t})`;
  pg_prebirth = 'About to Give Birth';
  pg_normal = 'Pregnant';

  train_debuff = 'Training Slump';
  train_buff_1 = 'Training Focus';
  train_buff_2 = 'Training Mastery';

  cum = 'Calling';

  1 = 'All-Nighter';
  2 = 'Slacking Off';
  3 = 'Weight Gain';
  4 = 'Migraine';
  5 = (t) => `Injury (${t})`;
  6 = (t) => `Fatigue (${t})`;
  7 = (t) => `Language Barrier (${t})`;
  8 = (t) => `Culture Shock (${t})`;
  9 = (t) => `Away Race (${t})`;
  10 = 'Deep Sleep';

  15 = 'Zone!';
  16 = 'Health Tea';
  17 = 'Birthday';

  20 = 'Restrained!';
  21 = 'Hate Drug';
  22 = 'Suppressant';
  23 = (t) => `Horse Whisperer (${t})`;
  24 = 'Fondness Glasses';
  25 = 'Umapyoi Count Glasses';
  26 = 'X-Ray Glasses';

  30 = 'Period';
  31 = 'In Heat';
  32 = 'Special Leave';
  33 = 'Lewd Crest Sticker';

  35 = 'Umapyoi Z';
  36 = 'Furlong K';
  37 = 'Furlong P';
  38 = 'Super Umapyoi Z';
  39 = 'Umapyoi S';
  40 = 'Condom Dissolved!';
  41 = 'Contraception';
  42 = 'Contraception';

  // Training
  tr_leader = 'Initiative';

  v_penis_v = 'Virgin';
  v_penis_d = 'Unaware Non-Virgin';

  v_vagina_v = 'Virgin';
  v_vagina_d = 'Unaware Non-Virgin';
  v_vagina_r = 'Restored Virgin';

  tr_erect = 'Erect!';
  tr_lb_breast = 'Breast Lube';
  tr_lb_vagina = 'Pussy Lube';
  tr_lb_anal = 'Anal Lube';
  tr_br_erect = 'Nipples Out!';

  tr_tc_40 = 'Collapsed!';
  tr_tc_41 = 'Dazed!';
  tr_tc_44 = 'In Heat!';
  tr_tc_45 = (t) => `Afterglow! (${t})`;
  tr_tc_46 = (t) => `Refractory (${t})`;
  tr_tc_47 = 'Condom';
  tr_tc_48 = 'Pussy Stretched';
  tr_tc_49 = 'Ass Stretched';
  tr_tc_57 = (t) => `Orgasm Control! (${t})`;
  tr_ex_45 = 'Vaginal Tear!';
  tr_ex_46 = 'Anal Tear!';
  tr_ex_55 = (t) => `Edging (${t})`;
  tr_te_6 = 'Collar';
  tr_te_7 = 'Blindfold';

  race_buff_template = '%BUFF%[%NAME%]';
  r_base = 'Base';
  r_away_race = (t) => `Away Race (${t})`;
  r_tired = (t) => `Fatigue (${t})`;
  r_field = 'Zone!';
  r_body_off = (t) => `Culture Shock (${t})`;
  r_tong_tie = (t) => `Language Barrier (${t})`;
  r_hp_low = 'Low Energy';
  r_hp_ins = 'Not Enough Energy';
  r_tp_low = 'Low Focus';
  r_tp_ins = 'Not Enough Focus';
  r_p_embryo = 'Early Pregnancy';
  r_p_fetal = 'Stable Pregnancy';
  r_p_late = 'Late Pregnancy';
  r_item_buff = 'Pleasure Blessing';
  r_item_debuff = 'Sex Toy';
};
