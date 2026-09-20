const era = require('#/era-electron');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/108900-Cheval-Grand/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/108900-Cheval-Grand/rec-89.kojo');
  /** @type {KojoFile} */
  basement = require('#/i18n/ja-JP/kojo/108900-Cheval-Grand/base-89.kojo');

  aim_desc = '12月第2週まで G3以上のレース 3着以内';

  get_basement_info(grand, you, can_strike, is_grand_awake, security_level) {
    if (can_strike) {
      return [
        grand.get_colored_name(),
        ' が料理を持って戻ってきたばかりだ。食卓は、奇襲のための罠になっている……',
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
            ' は、罪悪感に濡れた瞳でそっと ',
            you.get_colored_name(),
            ' を見つめ、',
          );
        } else if (relation >= 0) {
          ret.push(
            grand.get_colored_name(),
            ' は両手を固く握りしめ、指の関節が白くなり、',
          );
        } else {
          ret.push(
            grand.get_colored_name(),
            ' の虚ろな瞳が、',
            you.get_colored_name(),
            ' の一挙一動を追い、',
          );
        }
      } else if (relation_check) {
        ret.push(grand.get_colored_name(), ' は無意識にスカートを握りしめ、');
      } else {
        ret.push(
          grand.get_colored_name(),
          ' は謝りの言葉を独り言のように漏らし、',
        );
      }
      if (security_level >= 4) {
        ret.push('罪悪感と疑いのあいだで、後者の方が勝っているようだ。');
      } else if (security_level === 3) {
        ret.push(
          '思い出が、',
          grand.sex,
          ' を過激な行動から止めているらしい。',
        );
      } else {
        ret.push(
          you.get_colored_name(),
          ' の幸福と独占欲のあいだで、もがいている。',
        );
      }
      return ret;
    } else {
      return [
        grand.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の名前を呟きながら、小さなベッドの隅で眠っている。短い髪に、細かな汗が滲んでいる。',
      ];
    }
  }
};
