module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200600-Dancing-Brave/entry')
) {
  get_rec_enable_notification(brave) {
    return [
      '【중앙에 교류하러 온 ',
      { color: brave.color, content: '프랑스의 뛰어난 신예' },
      '가 중앙 교류를 위해 왔다고 합니다. 트레이닝장에서 만날 수 있을지도 모릅니다】',
    ];
  }
};
