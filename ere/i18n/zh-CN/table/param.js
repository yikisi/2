class I18nParam {
  static _ = new I18nParam();

  get_jewel_count = (jewel, count) => [jewel, '：', count];
  jewel_with_count = '%JEWEL%×%COUNT%';

  n_jewel = '因子';

  // 缩写
  abbr0 = '口';
  abbr1 = '胸';
  abbr2 = '身';
  abbr3 = '茎';
  abbr4 = '核';
  abbr5 = '膣';
  abbr6 = '菊';
  abbr7 = 'Ｓ';
  abbr8 = 'Ｍ';

  abbr10 = '顺';
  abbr11 = '痛';
  abbr12 = '恐';
  abbr13 = '羞';

  // 快感名
  param0 = '口腔快感';
  param1 = '胸部快感';
  param2 = '身体快感';
  param3 = '阴茎快感';
  param4 = '外阴快感';
  param5 = '阴道快感';
  param6 = '肛门快感';
  param7 = '施虐快感';
  param8 = '受虐快感';

  // 因子名
  jewel0 = '口腔因子';
  jewel1 = '胸部因子';
  jewel2 = '身体因子';
  jewel3 = '阴茎因子';
  jewel4 = '外阴因子';
  jewel5 = '阴道因子';
  jewel6 = '肛门因子';
  jewel7 = '施虐因子';
  jewel8 = '受虐因子';

  jewel10 = '顺从因子';
  jewel11 = '痛苦因子';
  jewel12 = '恐惧因子';
  jewel13 = '羞耻因子';
  jewel14 = '反感因子';
  jewel15 = '自卫因子';

  jewel20 = '粉因子';
  jewel21 = '蓝因子';
  jewel22 = '白因子';

  // 以下不能改，程序逻辑依赖这些中文名，和csv里注册的是相同的
  0 = '口腔';
  1 = '胸部';
  2 = '身体';
  3 = '阴茎';
  4 = '外阴';
  5 = '阴道';
  6 = '肛门';
  7 = '施虐';
  8 = '受虐';

  10 = '顺从';
  11 = '痛苦';
  12 = '恐惧';
  13 = '羞耻';
  14 = '反感';
  15 = '自卫';

  20 = '粉';
  21 = '蓝';
  22 = '白';
}

module.exports = I18nParam;
