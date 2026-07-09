const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106000-Nice-Nature/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/106000-Nice-Nature/rec-60.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/106000-Nice-Nature/daily-60.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/106000-Nice-Nature/edu-60.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/106000-Nice-Nature/love-60.js'),
  );
};
