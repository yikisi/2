const proxy_kojo_js = require('#/i18n/proxy');

class I18nTimon {
  recruit = proxy_kojo_js(require('#/i18n/zh-CN/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/zh-CN/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/zh-CN/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/zh-CN/timon/love'));
  ero = proxy_kojo_js(require('#/i18n/zh-CN/timon/ero/ero'));
  basement = proxy_kojo_js(require('#/i18n/zh-CN/timon/base'));

  daily_child = proxy_kojo_js(require('#/i18n/zh-CN/timon/child/daily'));
  ero_child = proxy_kojo_js(require('#/i18n/zh-CN/timon/child/ero'));

  game_guides = proxy_kojo_js(require('#/i18n/zh-CN/timon/guides/game'));
  base_guides = proxy_kojo_js(require('#/i18n/zh-CN/timon/guides/base'));
  ending = proxy_kojo_js(require('#/i18n/zh-CN/timon/ending'));

  anniversary = require('#/i18n/zh-CN/timon/others/anniversary.kojo');
  as_pregnant_slave = require('#/i18n/zh-CN/timon/others/as-pregnant-slave.kojo');

  strange = '陌生';
  strange_desc = (debuff) =>
    `彼此还很不熟悉……训练效果-${debuff}%；改善关系或与担当训练员谈论此事可改善该状态。`;

  npc_talk = '聊天';
  npc_sex = '求爱';
  npc_out = '约会';
  get_npc_celebration = (celebration) => `庆祝 ${celebration}`;
  npc_bye = '再见';

  // it = information timon
  /** @param {CharaTalk} chara */
  get_it_office_study = (chara) => [
    '【指导了 ',
    chara.get_colored_name(),
    ' 的学习】',
  ];
  /** @param {CharaTalk} chara */
  get_it_office_prepare = (chara) => [
    '【帮助 ',
    chara.get_colored_name(),
    ' 进行了赛前准备】',
  ];
  /** @param {CharaTalk} chara */
  get_it_talk = (chara) => ['【和 ', chara.get_colored_name(), ' 搭话】'];
  /** @param {CharaTalk} chara */
  get_it_office_gift = (chara) => [
    '【给 ',
    chara.get_colored_name(),
    ' 送上了一份小礼物】',
  ];
  it_self_cook = '【独自做了饭加餐】';
  /** @param {CharaTalk} chara */
  get_it_office_cook = (chara) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起做了饭加餐】',
  ];
  it_self_rest = '【独自一人休息了】';
  /** @param {CharaTalk} chara */
  get_it_office_rest = (chara) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起休息了】',
  ];
  it_self_game = '【独自一人玩了游戏】';
  /** @param {CharaTalk} chara */
  get_it_office_game = (chara) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起打了游戏】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} celebration
   */
  get_it_celebration = (chara, celebration) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起庆祝了 ',
    celebration,
    '】',
  ];
  /** @param {CharaTalk} chara */
  get_it_birthday = (chara) => [
    '【向 ',
    chara.get_colored_name(),
    ' 祝贺生日快乐】',
  ];
  /** @param {CharaTalk} chara */
  get_it_check_love = (chara) => [
    chara.get_colored_name(),
    ' 似乎决定重新审视你们之间的关系……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_basement_me = (chara, you) => [
    '听了 ',
    you.get_colored_name(),
    ' 的请求，',
    chara.get_colored_name(),
    ' 似乎有些意动……',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_it_home_sex = (chara, you) => [
    chara.get_colored_name(),
    ' 与 ',
    you.get_colored_name(),
    '约定晚上在家见面……',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_arrive_location = (vehicle, location) => [
    '【',
    vehicle,
    '抵达了 ',
    location,
    '】',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_goto_location = (chara, vehicle, location) => [
    '【和 ',
    chara.get_colored_name(),
    ' 一起',
    vehicle,
    '前往 ',
    location,
    '】',
  ];
  /**
   * @param {string} vehicle
   * @param {string} location
   */
  get_it_self_goto_location = (vehicle, location) => [
    '【独自',
    vehicle,
    '前往 ',
    location,
    '】',
  ];
  it_back_office = '【折返了】';
  it_force_back_office = '【没有人在的样子……折返了】';

  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_in_recruit = (you, uma) => [
    '【在训练场内见到了几位',
    uma,
    '，是谁吸引了 ',
    you.get_colored_name(),
    ' 的注意力呢？】',
  ];
  /** @param {CharaTalk} chara */
  get_it_chara_not_in_recruit = (chara) => [
    '【',
    chara.get_colored_name(),
    ' 似乎不在训练场】',
  ];
  /**
   * @param {CharaTalk} you
   * @param {string} uma
   */
  get_it_recruit_disabled = (you, uma) => [
    '【',
    you.get_colored_name(),
    ' 已经有一定数量的担当，其他',
    uma,
    '不会同意 ',
    you.get_colored_name(),
    ' 的招募了】',
  ];
  /** @param {string} uma */
  get_it_no_chara_in_recruit = (uma) => ['【训练场没有引人注目的', uma, '】'];

  ed_saying_01 = '九尺二间陋室里，红唇依竹共恩情。——高杉晋作';
  ed_saying_02 = '金钱、赛马娘、女人，男生永远搞不懂这三件事。——威尔・罗〇斯';
  ed_saying_03 = '一文钱难倒英雄汉。——李绿园';
  ed_saying_04 =
    '每一个被束缚的奴隶都可以靠着他自己的手脱掉锁链。——威廉・莎士比亚';
  ed_saying_05 = '我已不再孤单，如今我生命中的挚爱与我如此靠近。——悲惨世界';
  ed_saying_06 = '日蚀当先，万物无光。——丹尼斯・奥凯利';
  ed_saying_07 = '杜鹃不鸣则杀之。——织田信长';
  ed_saying_08 = '探案过程中，我是最后的、最高的上诉法庭。——夏洛克・福尔摩斯';
  ed_saying_09 = '世以成败论人物，故操得在英雄之列。——苏轼';
  ed_saying_10 = '拥有一位伟大的赛马娘，就拥有了最伟大的宝座。——温斯顿・〇吉尔';
  ed_saying_11 =
    '人变得真正低劣时，除了高兴别人的不幸外，已无其他乐趣可言。——约翰・沃尔夫冈・冯・歌德';
  ed_saying_12 = '自由不是随心所欲，而是不必身不由己。——伊曼努尔・康德';
  ed_saying_13 = '我是自己最大的敌人。——拿破仑・波拿巴';
}

module.exports = I18nTimon;
