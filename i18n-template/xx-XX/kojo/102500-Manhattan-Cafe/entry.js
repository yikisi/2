const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102500-Manhattan-Cafe/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/102500-Manhattan-Cafe/rec-25.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/102500-Manhattan-Cafe/daily-25.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/102500-Manhattan-Cafe/edu-25.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/102500-Manhattan-Cafe/love-25.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/102500-Manhattan-Cafe/ero-25.js'),
  );
  basement = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/102500-Manhattan-Cafe/base-25.js'),
  );

  report_arim_kin = (cafe) => ['获胜的是 ', cafe, '！世代交替，由此证明！'];
};
