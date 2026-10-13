module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904700-Speed-Symboli/entry')
) {
  buff = '원정의 선구자';
  buff_desc = (buff) =>
    buff
      ? '최상의 컨디션인 팀원의 트레이닝 성공률과 효과가 상승한다.'
      : '최상의 컨디션인 팀원의 트레이닝 성공률과 효과가 조금 상승한다.';

  /**
   * @param {CharaTalk} speed
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(speed, you) {
    return [
      '【',
      { color: speed.color, content: `전설의 ${speed.uma_sex_title}` },
      '가 ',
      you.get_colored_name(),
      '의 활약에 관심을 보이는 듯하다. 응접실에서 만날 수 있을지도 모른다】',
    ];
  }
};
