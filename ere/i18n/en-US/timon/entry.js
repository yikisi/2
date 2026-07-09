const { proxy_kojo_js } = require('#/i18n/tools');
const I18nTimon = require('#/i18n/zh-CN/timon/entry');

module.exports = class extends I18nTimon {
  recruit = proxy_kojo_js(require('#/i18n/en-US/timon/recruit'));
};
