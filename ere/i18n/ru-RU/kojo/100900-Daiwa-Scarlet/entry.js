const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100900-Daiwa-Scarlet/entry')
) {
  ero = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/100900-Daiwa-Scarlet/ero-9.js'),
  );
};
