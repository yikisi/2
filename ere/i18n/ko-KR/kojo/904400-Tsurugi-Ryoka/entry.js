module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904400-Tsurugi-Ryoka/entry')
) {
  photographer = '빛을 쫓는 자';
  photographer_desc = (buff) =>
    buff
      ? '팀원의 기력 소모에 따른 스트레스 해소 효과가 높아지며, 스트레스 획득-20%.'
      : '팀원의 기력 소모에 따른 스트레스 해소 효과가 높아진다.';
};
