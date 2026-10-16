module.exports = class extends require('#/i18n/zh-CN/table/status') {
  template = '[%NAME%]';

  n_status = '상태';

  normal = '정상';

  remote = '원격';

  pr_1 = '불쾌';
  pr_2 = '걱정';
  pr_3 = '우울';
  pr_4 = '붕괴';

  eo_2 = '욕구불만';
  eo_3 = '흥분';
  eo_4 = '욕구불만!';

  buff207 = '엘피의 도움';
  buff301 = '타즈나의 도움';
  buff305 = '침술 요양';
  buff303 = '에츠코의 도움';
  buff340 = '여신의 소망';
  buff341 = '여신의 사랑';
  buff342 = '여신의 신뢰';
  buff343 = '사타케의 도움';
  buff344 = '료카의 도움';
  buff345 = '라이츠의 도움';
  buff346 = '전설의 격려';
  buff347 = '선구자의 격려';
  buff348 = '아이돌의 격려';

  milk = '모유분비';

  pg_resume = (t) => `산후(${t})`;
  pg_prebirth = '출산임박';
  pg_normal = '임신';

  train_debuff = '훈련 미숙';
  train_buff_1 = '훈련 능숙◯';
  train_buff_2 = '훈련 능숙◎';

  cum = '부름';

  1 = '밤샘';
  2 = '땡땡이';
  3 = '살찜';
  4 = '편두통';
  5 = (t) => `부상(${t})`;
  6 = (t) => `피로(${t})`;
  7 = (t) => `언어 장벽(${t})`;
  8 = (t) => `풍토 부적응(${t})`;
  9 = (t) => `원정 부담(${t})`;
  10 = '숙면';

  15 = '영역';
  16 = '건강차';
  17 = '생일';

  20 = '억제!';
  21 = '혐오약';
  22 = '억제약';
  23 = (t) => `우마토커(${t})`;
  24 = '호감도 안경';
  25 = '조교 횟수 안경';
  26 = '투시 안경';

  30 = '생리';
  31 = '발정';
  32 = '특별휴일';
  33 = '음문스티커';

  35 = '우마 점프 Z';
  36 = '펄롱K';
  37 = '펄롱P';
  38 = '슈퍼 우마 점프 Z';
  39 = '우마 점프 S';
  40 = '콘돔용해';
  41 = '피임';
  42 = '피임';

  tr_leader = '주도';

  v_penis_v = '동정';
  v_penis_d = '무자각비동정';

  v_vagina_v = '처녀';
  v_vagina_d = '무자각비처녀';
  v_vagina_r = '재생처녀';

  tr_erect = '발기';
  tr_lb_breast = '가슴 윤활';
  tr_lb_vagina = '젖음';
  tr_lb_anal = '항문 윤활';
  tr_br_erect = '유두돌출';

  tr_tc_40 = '탈력!';
  tr_tc_41 = '실신!';
  tr_tc_44 = '발정!';
  tr_tc_45 = (t) => `여운!(${t})`;
  tr_tc_46 = (t) => `현자 타임(${t})`;
  tr_tc_47 = '콘돔';
  tr_tc_48 = '질 확장';
  tr_tc_49 = '항문 확장';
  tr_tc_57 = (t) => `절정 제어!(${t})`;
  tr_ex_45 = '질 열상!';
  tr_ex_46 = '항문 열상!';
  tr_ex_55 = (t) => `절정 직전 중단(${t})`;
  tr_te_6 = '목걸이';
  tr_te_7 = '안대';

  race_buff_template = '%BUFF%[%NAME%]';
  r_base = '기초';
  r_away_race = (t) => `원정 부담(${t})`;
  r_tired = (t) => `피로(${t})`;
  r_field = '영역!';
  r_body_off = (t) => `풍토 부적응(${t})`;
  r_tong_tie = (t) => `언어 장벽(${t})`;
  r_hp_low = '체력 저하';
  r_hp_ins = '체력 부족';
  r_tp_low = '기력 저하';
  r_tp_ins = '기력 부족';
  r_p_embryo = '임신 초기';
  r_p_fetal = '안정기';
  r_p_late = '임신 후기';
  r_item_buff = '쾌락의 축복';
  r_item_debuff = '성인용품';
};
