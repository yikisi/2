const { proxy_kojo_js } = require('#/i18n/tools');

// GENERATED START
class I18nKojo106800 {
  static _ = new I18nKojo106800();
  recruit = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/106800-Kitasan-Black/rec-68.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/106800-Kitasan-Black/daily-68.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/106800-Kitasan-Black/edu-68.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/106800-Kitasan-Black/love-68.js'),
  );
  // GENERATED END

  report_arim_kin = (kita) => [
    { color: kita.color, content: '这就是！巨星的谢幕之际！' },
  ];
}

module.exports = I18nKojo106800;
