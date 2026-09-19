const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103000-Rice-Shower/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103000-Rice-Shower/rec-30.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103000-Rice-Shower/daily-30.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103000-Rice-Shower/edu-30.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103000-Rice-Shower/love-30.js'),
  );
};
