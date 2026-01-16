const proxy_kojo_js = require('#/i18n/proxy');

class I18nTimon {
  recruit = proxy_kojo_js(require('#/i18n/zh-CN/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/zh-CN/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/zh-CN/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/zh-CN/timon/love'));
  ero = proxy_kojo_js(require('#/i18n/zh-CN/timon/ero'));
  basement = proxy_kojo_js(require('#/i18n/zh-CN/timon/base'));

  ending = proxy_kojo_js(require('#/i18n/zh-CN/timon/ending'));

  daily_child = proxy_kojo_js(require('#/i18n/zh-CN/timon/daily-child'));
  ero_child = proxy_kojo_js(require('#/i18n/zh-CN/timon/ero-child'));

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

  get eds_slave() {
    return [
      this.ed_saying_01,
      this.ed_saying_02,
      this.ed_saying_03,
      this.ed_saying_04,
      this.ed_saying_05,
    ];
  }

  get eds_crazy_fan() {
    return [
      this.ed_saying_06,
      this.ed_saying_07,
      this.ed_saying_08,
      this.ed_saying_09,
      this.ed_saying_10,
    ];
  }

  get eds_hentai() {
    return [
      this.ed_saying_11,
      this.ed_saying_12,
      this.ed_saying_13,
      this.ed_saying_02,
      this.ed_saying_04,
    ];
  }

  get eds_loser() {
    return [
      this.ed_saying_02,
      this.ed_saying_06,
      this.ed_saying_09,
      this.ed_saying_10,
      this.ed_saying_13,
    ];
  }
}

module.exports = I18nTimon;
