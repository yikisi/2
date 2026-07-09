const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100400-Maruzensky/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100400-Maruzensky/rec-4.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100400-Maruzensky/daily-4.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/xx-XX/kojo/100400-Maruzensky/edu-4.js'));
  love = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100400-Maruzensky/love-4.js'),
  );

  mygo = '迷茫';
};
