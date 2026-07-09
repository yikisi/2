// GENERATED START
class I18nKojo900100 {
  static _ = new I18nKojo900100();
  /** @type {KojoFile} */
  daily = require('#/i18n/zh-CN/kojo/900100-Hayakawa-Tazuna/daily-301.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/zh-CN/kojo/900100-Hayakawa-Tazuna/love-301.kojo');
  // GENERATED END

  assist = '私人助理';
  assist_desc = (buff, you) =>
    `自身体力与精力消耗+${buff}%，使 ${you}  的体力与精力消耗-${buff}%。`;
}

module.exports = I18nKojo900100;
