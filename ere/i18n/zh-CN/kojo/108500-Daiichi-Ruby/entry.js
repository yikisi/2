const { proxy_kojo_js } = require('#/i18n/tools');

class I18nKojo108500 {
  static _ = new I18nKojo108500();

  recruit = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/108500-Daiichi-Ruby/rec-85.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/108500-Daiichi-Ruby/daily-85.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/108500-Daiichi-Ruby/edu-85.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/108500-Daiichi-Ruby/love-85.js'),
  );
}

module.exports = I18nKojo108500;
