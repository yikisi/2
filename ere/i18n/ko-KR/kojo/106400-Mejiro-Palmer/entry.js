module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/rec-64.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/daily-64.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/edu-64.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/love-64.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/ero-64.kojo');
  /** @type {KojoFile} */
  basement = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/base-64.kojo');

  aim_desc = '클래식급 6월 2주 차 전까지 G3 이상 경기에서 1착';

  dependence = '의존심';
  dependence_desc = '오직 너만…';

  get_basement_info(pama, you, security_level) {
    switch (security_level) {
      case 1:
        return [
          pama.get_colored_name(),
          '는 조용히 ',
          you.get_colored_name(),
          ' 곁에 앉아 있다. 하지만 ',
          you.get_colored_name(),
          '의 시선을 불안한 듯 피하고 있다……',
        ];
      case 2:
        return [
          pama.get_colored_name(),
          '는 불안한 듯 ',
          you.get_colored_name(),
          '의 얼굴을 보고 있다. 그래도 손을 놓을 생각은 없는 모양이다……',
        ];
      case 3:
        return [
          pama.get_colored_name(),
          '는 여전히 ',
          you.get_colored_name(),
          '을(를) 바라보며 묘하게 웃고 있다……',
        ];
      case 4:
        return [
          pama.get_colored_name(),
          '의 얼굴에 부드러운 미소가 떠 있다. 시선을 피할 기색은 없다……',
        ];
      case 5:
        return [
          '고요한 기다림. 끊이지 않는 시선. 그리고……',
          pama.get_colored_name(),
          '의 악의 없는 미소……',
        ];
    }
    return [];
  }
  notify_go_shopping = (pama) => [
    '【',
    pama.get_colored_name(),
    '와 함께 쇼핑하러 갑시다!】',
  ];
  notify_rooftop = (pama) => [
    '【',
    pama.get_colored_name(),
    '가 옥상에서 기다리고 있습니다】',
  ];
};
