class I18nKojo900101 {
  /** @type {KojoFile} */
  daily = require('#/i18n/zh-CN/kojo/900101/daily-301.kojo');

  assist = '私人助理';
  assist_desc = (buff, you) =>
    `自身体力与精力消耗+${buff}%，使 ${you}  的体力与精力消耗-${buff}%。`;
}

module.exports = I18nKojo900101;
