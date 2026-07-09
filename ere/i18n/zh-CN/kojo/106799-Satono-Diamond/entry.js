const { proxy_kojo_js } = require('#/i18n/tools');

class I18nKojo106799 {
  static _ = new I18nKojo106799();

  recruit = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/106799-Satono-Diamond/rec-67-99.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/106799-Satono-Diamond/edu-67-99.js'),
  );

  notify_bs_event = (daiya) => [daiya.get_colored_name(), ' 期待外出……'];
}

module.exports = I18nKojo106799;
