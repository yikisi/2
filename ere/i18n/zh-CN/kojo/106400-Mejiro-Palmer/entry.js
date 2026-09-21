// GENERATED START
class I18nKojo106400 {
  static _ = new I18nKojo106400();
  /** @type {KojoFile} */
  recruit = require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/rec-64.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/daily-64.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/edu-64.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/love-64.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/ero-64.kojo');
  /** @type {KojoFile} */
  basement = require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/base-64.kojo');
  // GENERATED END

  dependence = '依存心';
  dependence_desc = '唯有你……';

  notify_go_shopping = (pama) => [
    '【和 ',
    pama.get_colored_name(),
    ' 去买东西吧！】',
  ];
  notify_rooftop = (pama) => ['【', pama.get_colored_name(), ' 在天台等待】'];

  aim_desc = '经典年 6 月第 2 周前 G3 以上比赛 1 着';

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} you
   * @param {number} security_level
   */
  get_basement_info(pama, you, security_level) {
    switch (security_level) {
      case 1:
        return [
          pama.get_colored_name(),
          ' 静静坐在 ',
          you.get_colored_name(),
          ' 的身边，却在不安地避开 ',
          you.get_colored_name(),
          ' 看向',
          pama.sex,
          '的眼神……',
        ];
      case 2:
        return [
          pama.get_colored_name(),
          ' 看着 ',
          you.get_colored_name(),
          ' 的脸有些不安，却依旧没有放开手的打算……',
        ];
      case 3:
        return [
          pama.get_colored_name(),
          ' 依旧在看着 ',
          you.get_colored_name(),
          '，暧昧地微笑着……',
        ];
      case 4:
        return [
          pama.get_colored_name(),
          ' 的脸上带着一点轻飘飘的笑容，没有半点想要移开眼神的打算……',
        ];
      case 5:
        return [
          '安静的等待，无时无刻的视线，以及……面对 ',
          pama.get_colored_name(),
          ' 那毫无恶意的微笑……',
        ];
    }
    return [];
  }
}

module.exports = I18nKojo106400;
