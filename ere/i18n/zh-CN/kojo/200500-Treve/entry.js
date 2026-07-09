const { proxy_kojo_js } = require('#/i18n/tools');

// GENERATED START
class I18nKojo200500 {
  static _ = new I18nKojo200500();
  recruit = proxy_kojo_js(require('#/i18n/zh-CN/kojo/200500-Treve/rec-205.js'));
  daily = proxy_kojo_js(require('#/i18n/zh-CN/kojo/200500-Treve/daily-205.js'));
  edu = proxy_kojo_js(require('#/i18n/zh-CN/kojo/200500-Treve/edu-205.js'));
  love = proxy_kojo_js(require('#/i18n/zh-CN/kojo/200500-Treve/love-205.js'));
  ero = proxy_kojo_js(require('#/i18n/zh-CN/kojo/200500-Treve/ero-205.js'));
  // GENERATED END

  aim_desc = '5 场其他 G1 比赛 1着';

  /**
   * @param {CharaTalk} treve
   * @returns {TextContent}
   */
  get_rec_enable_notification(treve) {
    return [
      '【据说有 ',
      { color: treve.color, content: '一名优秀的法国幼驹' },
      ' 已经来到中央交流，也许可以在训练场遇到】',
    ];
  }
}

module.exports = I18nKojo200500;
