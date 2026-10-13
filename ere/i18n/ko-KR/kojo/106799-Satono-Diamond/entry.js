const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106799-Satono-Diamond/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/106799-Satono-Diamond/rec-67-99.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/106799-Satono-Diamond/edu-67-99.js'),
  );

  notify_bs_event = (daiya) => [
    daiya.get_colored_name(),
    '가 외출을 기대하고 있습니다…',
  ];
};
