module.exports = class extends (
  require('#/i18n/zh-CN/kojo/905000-Hoshina-Kiyoko/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/905000-Hoshina-Kiyoko/daily-350.kojo');

  npc_func = '비탕 요양';

  buff = '휴양이 인도하는 기적';
  buff_desc = (buff) =>
    buff
      ? '한층 더 의욕적으로 비탕을 관리한다. 최대 연속 이용 횟수+1, 효능 회복 속도와 스트레스 해소 효과가 높아지며, 요양한 대상의 트레이닝 보정도 상승한다.'
      : '의욕적으로 비탕을 관리한다. 최대 연속 이용 횟수+1, 효능 회복 속도와 스트레스 해소 효과가 높아진다.';
};
