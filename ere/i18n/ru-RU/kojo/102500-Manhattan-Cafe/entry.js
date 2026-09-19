const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102500-Manhattan-Cafe/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102500-Manhattan-Cafe/rec-25.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102500-Manhattan-Cafe/daily-25.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102500-Manhattan-Cafe/edu-25.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102500-Manhattan-Cafe/love-25.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102500-Manhattan-Cafe/ero-25.js'),
  );
  basement = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/102500-Manhattan-Cafe/base-25.js'),
  );

  // Движок передаёт уже спан `uma.get_colored_name()`, не CharaTalk.
  report_arim_kin = (cafe) => [
    {
      color: cafe.color,
      content: 'Побеждает ',
    },
    cafe,
    {
      color: cafe.color,
      content: '! Смена поколений — вот доказательство!',
    },
  ];
};
