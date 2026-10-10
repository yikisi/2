const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/400000-Sunday-Silence/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/400000-Sunday-Silence/rec-400.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/400000-Sunday-Silence/daily-400.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/400000-Sunday-Silence/edu-400.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/400000-Sunday-Silence/love-400.js'),
  );

  win = (t) => `승리의 약속(${t})`;
  win_desc = (t, a_buff, r_buff) =>
    `경기 중 능력치+${a_buff}%(최대25%), 호감 획득+${r_buff}%(최대30%). 클래식급 이후 연승 횟수에 따라 효과가 커진다.`;
};
