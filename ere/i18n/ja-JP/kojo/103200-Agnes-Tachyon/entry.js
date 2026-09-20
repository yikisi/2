const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/rec-32.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/daily-32.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/love-32.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/ero-32.js'),
  );
  basement = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/base-32.js'),
  );

  uma_limit = (uma) => `${uma}の限界`;
  uma_limit_desc = (uma) =>
    `${uma}の限界。だが、ウマ${uma}アグネスタキオンの限界ではない。レース時のみ、全能力が極めて大きく上昇する。`;

  limited_tachyon = '限界で止まった光子';
  limited_tachyon_desc = (uma) =>
    `明るく、熱く、眩しい。だが、それまでだ。これがウマ${uma}アグネスタキオンの限界。トレーニング効果+50%。`;
};
