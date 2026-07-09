const { proxy_kojo_js } = require('#/i18n/tools');

// GENERATED START
class I18nKojo400000 {
  static _ = new I18nKojo400000();
  recruit = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/400000-Sunday-Silence/rec-400.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/400000-Sunday-Silence/daily-400.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/400000-Sunday-Silence/edu-400.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/400000-Sunday-Silence/love-400.js'),
  );
  // GENERATED END

  win = (t) => `胜利的承诺(${t})`;
  win_desc = (t, a_buff, r_buff) =>
    `参赛时属性+${a_buff}%（最高25%），好感获取+${r_buff}%（最高30%），效果随经典年后连胜次数增强。`;
}

module.exports = I18nKojo400000;
