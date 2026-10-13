const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103700-Eishin-Flash/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/rec-37.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/daily-37.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/edu-37.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/love-37.js'),
  );

  notify_black_treasure = (flash) => [
    flash.get_colored_name(),
    '가 이곳에 관심이 많은 듯합니다… 다음에 혼자 외출하다 만나면 물어봅시다',
  ];

  weak = '허약';
  week_desc = '컨디션 상한이 한 단계 내려간다.';

  derby = '영광의 더비';
  derby_desc = '경기 중 능력치+50%.';

  distracted = '염려';
  distracted_desc = '트레이닝 성공률-5%.';

  duty = '반드시 해야 할 일';
  duty_desc = '트레이닝 성공률+5%.';
};
