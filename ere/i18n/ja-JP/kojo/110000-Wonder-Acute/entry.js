const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/110000-Wonder-Acute/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/110000-Wonder-Acute/rec-100.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/110000-Wonder-Acute/daily-100.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/110000-Wonder-Acute/edu-100.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/110000-Wonder-Acute/love-100.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/110000-Wonder-Acute/ero-100.js'),
  );
};
