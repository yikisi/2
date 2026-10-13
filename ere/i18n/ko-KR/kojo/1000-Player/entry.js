const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/kojo/1000-Player/entry') {
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/1000-Player/daily-0'));
  edu = proxy_kojo_js(require('#/i18n/ko-KR/kojo/1000-Player/edu-0'));
  ero = proxy_kojo_js(require('#/i18n/ko-KR/kojo/1000-Player/ero-0'));

  akuochi = '타락';
  akuochi_desc = '즐기면 그만이다.';

  b_l_time = '졸음';
  b_l_time_desc = '머리가 멍해서 언제 쓰러져도 이상하지 않다!';

  b_l_stamina = '기진맥진';
  b_l_stamina_desc = '더는 움직일 수 없다. 기력 소모가 크게 증가한다!';

  pn_1 = '경주용 암말';
  pn_1_desc =
    '현역 우마무스메지만 시니어급 레이스에만 출전할 수 있다. 급여가 없으며, 출전 시 상금 배분+400%.';
  pn_2_desc =
    '현역 성노예. 시니어급 레이스에만 출전할 수 있다. 급여가 없으며, 출전 시 상금 배분+400%. 성적 봉사로 명성을 얻는다.';
  pn_3_desc =
    '현역 임신 주머니. 시니어급 레이스에만 출전할 수 있다. 급여가 없으며, 출전 시 상금 배분+400%. 우마무스메와의 성교·출산으로 명성을 얻고, 자녀의 출전 명성 보상+100%.';

  rape = '손쉬운 악행';
  rape_desc = '「Dirty Deeds Done Dirt Cheap……」범하고, 유린하고, 정복하라!';
};
