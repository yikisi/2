const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103200-Agnes-Tachyon/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/rec-32.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/daily-32.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/edu-32.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/love-32.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/ero-32.js'),
  );
  basement = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/base-32.js'),
  );

  uma_limit = (uma) => `${uma}의 한계`;
  uma_limit_desc = (uma) =>
    `${uma}의 한계지만, 경주 ${uma} 아그네스 타키온의 한계는 아니다. 경기 중에만 모든 능력이 매우 크게 상승한다.`;

  limited_tachyon = '한계에 멈춰 선 광자';
  limited_tachyon_desc = (uma) =>
    `밝고, 뜨겁고, 눈부시지만 거기까지. 이것이 경주 ${uma} 아그네스 타키온의 한계다. 트레이닝 효과+50%.`;
};
