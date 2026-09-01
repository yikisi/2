const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102400-Mayano-Top-Gun/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102400-Mayano-Top-Gun/rec-24.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102400-Mayano-Top-Gun/daily-24.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102400-Mayano-Top-Gun/edu-24.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102400-Mayano-Top-Gun/love-24.js'),
  );
};
