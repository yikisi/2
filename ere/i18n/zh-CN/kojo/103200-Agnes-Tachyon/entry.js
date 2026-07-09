const { proxy_kojo_js } = require('#/i18n/tools');

class I18nKojo103200 {
  static _ = new I18nKojo103200();

  recruit = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/rec-32.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/daily-32.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/edu-32.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/love-32.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/ero-32.js'),
  );
  basement = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/base-32.js'),
  );

  uma_limit = (uma) => `${uma}的极限`;
  uma_limit_desc = (uma) =>
    `${uma}的极限，但不是赛${uma}爱丽速子的极限；仅限比赛时，全属性极大幅度提升。`;

  limited_tachyon = '止步于极限的光子';
  limited_tachyon_desc = (uma) =>
    `明亮、炙热、耀眼、但也就这样了：这就是赛${uma}爱丽速子的极限；训练效果+50%。`;
}

module.exports = I18nKojo103200;
