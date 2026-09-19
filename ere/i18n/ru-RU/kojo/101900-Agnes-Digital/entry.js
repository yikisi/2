const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/101900-Agnes-Digital/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/101900-Agnes-Digital/rec-19.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/101900-Agnes-Digital/daily-19.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/101900-Agnes-Digital/edu-19.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/101900-Agnes-Digital/love-19.js'),
  );

  // 资深年 1-6月 G1 比赛 3着以内 3次
  aim_desc = 'январь–июнь, G1, финиш в тройке';
};
