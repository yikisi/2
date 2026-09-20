const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/400000-Sunday-Silence/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/rec-400.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/daily-400.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/edu-400.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/love-400.js'),
  );

  win = (t) => `勝利の約束(${t})`;
  win_desc = (t, a_buff, r_buff) =>
    `出走時の能力+${a_buff}%（最大25%）、好感取得+${r_buff}%（最大30%）。クラシック級以降の連勝数に応じて効果が強くなる。`;
};
