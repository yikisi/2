const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106799-Satono-Diamond/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/106799-Satono-Diamond/rec-67-99.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/106799-Satono-Diamond/edu-67-99.js'),
  );

  notify_bs_event = (daiya) => [daiya.get_colored_name(), ' 期待外出……'];
};
