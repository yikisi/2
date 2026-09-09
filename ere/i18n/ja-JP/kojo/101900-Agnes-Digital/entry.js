const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/101900-Agnes-Digital/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/rec-19.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/daily-19.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/edu-19.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/love-19.js'),
  );

  // シニア級1〜6月のG1で3着以内を3回
  aim_desc = 'シニア級1〜6月のG1で3着以内';
};
