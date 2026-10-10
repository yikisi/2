const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105600-Matikanefukukitaru/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/rec-56.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/daily-56.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/edu-56.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/love-56.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/ero-56.js'),
  );

  dependency = '운세의존';
  dependency_desc = '오늘의 운세는 어떨까?';

  daikichi = '대길';
  daikichi_desc =
    '영력이 넘친다! 트레이닝 성공률+10%, 모든 트레이닝 효과+5%, 호감 획득+10%, 경기 중 능력치+5%.';

  chuukichi = '중길';
  chuukichi_desc =
    '운이 좋다! 트레이닝 성공률+5%, 모든 트레이닝 효과+5%, 경기 중 능력치+3%.';

  shoukichi = '소길';
  shoukichi_desc = '어쨌든 나쁘지 않다! 트레이닝 성공률+5%, 경기 중 능력치+1%.';

  kyou = '흉';
  kyou_desc =
    '이럴 때 후쿠키타루를 위로해 준다면? 트레이닝 성공률-10%, 모든 트레이닝 효과-10%, 경기 중 능력치-10%, 호감 획득+20%.';

  ptsd = 'PTSD';
  ptsd_desc =
    '마주해야만 하는 그림자. 트레이닝 성공률-10%, 모든 트레이닝 효과-10%, 경기 중 능력치-10%, 컨디션 상한-3.';

  antei = '안정';
  antei_desc =
    '트레이너가 곁에 있다면 틀림없이 대길! 트레이닝 성공률+10%, 모든 트레이닝 효과+5%, 호감 획득+10%, 경기 중 능력치+5%.';

  achieve_track_aim_template =
    '최상 컨디션으로 참가한 G2 이상 경기 수：%COUNT%';
};
