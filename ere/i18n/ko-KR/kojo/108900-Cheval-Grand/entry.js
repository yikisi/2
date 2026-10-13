const era = require('#/era-electron');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/108900-Cheval-Grand/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/108900-Cheval-Grand/rec-89.kojo');
  /** @type {KojoFile} */
  basement = require('#/i18n/ko-KR/kojo/108900-Cheval-Grand/base-89.kojo');

  aim_desc = '12월 2주 차 전까지 G3 이상 경기에서 3착 이내';

  get_basement_info(grand, you, can_strike, is_grand_awake, security_level) {
    if (can_strike) {
      return [
        grand.get_colored_name(),
        '이 음식을 들고 막 돌아왔다. 식탁에는 기습을 위한 함정이 설치되어 있다……',
      ];
    } else if (is_grand_awake) {
      const ret = [];
      const relation = era.get(`relation:${this.id}:0`);
      const love = era.get(`love:${this.id}`);
      const relation_check =
        relation >= (era.get('flag:极端行为限制') || 1) * love;
      if (love >= 85) {
        if (relation_check) {
          ret.push(
            grand.get_colored_name(),
            '은 죄책감에 젖은 눈으로 살며시 ',
            you.get_colored_name(),
            '을(를) 바라보며, ',
          );
        } else if (relation >= 0) {
          ret.push(
            grand.get_colored_name(),
            '은 손마디가 하얗게 질릴 만큼 두 손을 꼭 움켜쥔 채, ',
          );
        } else {
          ret.push(
            grand.get_colored_name(),
            '의 공허한 눈동자가 ',
            you.get_colored_name(),
            '의 일거수일투족을 쫓고 있으며, ',
          );
        }
      } else if (relation_check) {
        ret.push(grand.get_colored_name(), '은 무의식중에 치마를 움켜쥔 채, ');
      } else {
        ret.push(grand.get_colored_name(), '은 혼잣말처럼 사과를 중얼거리며, ');
      }
      if (security_level >= 4) {
        ret.push('죄책감과 의심 중에서는 후자가 더 큰 듯하다.');
      } else if (security_level === 3) {
        ret.push('추억이 ', grand.sex, '의 과격한 행동을 막아 주는 듯하다.');
      } else {
        ret.push(
          '지금도 ',
          you.get_colored_name(),
          '의 행복과 독점욕 사이에서 괴로워하고 있다.',
        );
      }
      return ret;
    } else {
      return [
        grand.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '의 이름을 중얼거리며 작은 침대 한쪽에서 잠들어 있다. 짧은 머리카락 사이로 잔땀이 배어 있다.',
      ];
    }
  }
};
