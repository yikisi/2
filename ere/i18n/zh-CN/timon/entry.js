const proxy_kojo_js = require('#/i18n/proxy');

class I18nTimon {
  recruit = proxy_kojo_js(require('#/i18n/zh-CN/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/zh-CN/timon/daily'));

  daily_child = proxy_kojo_js(require('#/i18n/zh-CN/timon/daily-child'));
  ero_child = proxy_kojo_js(require('#/i18n/zh-CN/timon/ero-child'));
}

module.exports = I18nTimon;
