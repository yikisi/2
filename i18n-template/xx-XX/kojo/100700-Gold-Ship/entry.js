const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100700-Gold-Ship/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100700-Gold-Ship/rec-7.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100700-Gold-Ship/daily-7.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/xx-XX/kojo/100700-Gold-Ship/edu-7.js'));
  love = proxy_kojo_js(require('#/i18n/xx-XX/kojo/100700-Gold-Ship/love-7.js'));
  ero = proxy_kojo_js(require('#/i18n/xx-XX/kojo/100700-Gold-Ship/ero-7.js'));
  basement = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100700-Gold-Ship/base-7.js'),
  );
};
