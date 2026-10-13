module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200400-Montjeu/entry')
) {
  get_visit_notification(montjeu) {
    return [
      '【중앙에 교류하러 오는 ',
      {
        color: montjeu.color,
        content: `프랑스의 전설적인 ${montjeu.uma_sex_title}`,
      },
      '가 중앙 교류 방문을 준비 중이라고 합니다. 접견실에서 만날 수 있을지도 모릅니다】',
    ];
  }
};
