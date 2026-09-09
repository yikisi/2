const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/104600-Smart-Falcon/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/104600-Smart-Falcon/rec-46.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/104600-Smart-Falcon/daily-46.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/104600-Smart-Falcon/edu-46.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/104600-Smart-Falcon/love-46.js'),
  );
};
