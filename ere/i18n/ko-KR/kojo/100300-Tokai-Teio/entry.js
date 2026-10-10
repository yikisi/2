const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100300-Tokai-Teio/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/rec-3.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/daily-3.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/edu-3.js'));
  love = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/love-3.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/ero-3.js'));
  basement = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/base-3.js'),
  );

  notify_leg_hurt = (teio, s_hurt) => [
    '【',
    teio.get_colored_name(),
    '에게 ',
    s_hurt,
    ' 발생!】',
  ];

  hurt = '다리 부상!';
  hurt_desc =
    '심각한 다리 부상으로, 세 여신조차 완치할 수 없다. 트레이닝 효과-20%, 체력·기력 상한-200, 소모+10%, 스트레스 획득+10%. 목표 경기에서 우승하지 못하면 명성-5, 입착하지 못하면 스트레스+25%, 명성-10.';

  report_arim_kin = (teio) => [teio, ', 기적의 부활!'];
  report_long_dis = (teio) => [
    '한계를 넘어 세계의 끝을 향해 달린다―',
    teio,
    ', 또다시 승리를 거머쥐다!',
  ];
};
