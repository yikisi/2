const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/101900-Agnes-Digital/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/en-US/kojo/101900-Agnes-Digital/rec-19.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/en-US/kojo/101900-Agnes-Digital/daily-19.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/en-US/kojo/101900-Agnes-Digital/edu-19.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/en-US/kojo/101900-Agnes-Digital/love-19.js'),
  );

  aim_desc = 'Top 3 in G1 races from January to June';
};
