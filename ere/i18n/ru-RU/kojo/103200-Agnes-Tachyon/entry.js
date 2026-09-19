const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103200-Agnes-Tachyon/rec-32.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103200-Agnes-Tachyon/daily-32.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103200-Agnes-Tachyon/edu-32.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103200-Agnes-Tachyon/love-32.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103200-Agnes-Tachyon/ero-32.js'),
  );
  basement = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103200-Agnes-Tachyon/base-32.js'),
  );

  uma_limit = (uma) => `${uma} — предел`;
  uma_limit_desc = (uma) =>
    `${uma} — предел, но не предел скаковой ${uma} Агнес Тахион; только во время заездов все характеристики резко повышаются.`;

  limited_tachyon = 'Фотон, остановившийся у предела';
  limited_tachyon_desc = (uma) =>
    `Яркая, обжигающая, ослепительная — но и только: вот он, предел ${uma} Агнес Тахион; эффект тренировок +50%.`;
};
