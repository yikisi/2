const era = require('#/era-electron');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/108900-Cheval-Grand/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/108900-Cheval-Grand/rec-89.kojo');
  /** @type {KojoFile} */
  basement = require('#/i18n/ru-RU/kojo/108900-Cheval-Grand/base-89.kojo');

  aim_desc = '12 月第 2 周前 G3 以上比赛 3 着以内';

  /**
   * @param {CharaTalk} grand
   * @param {CharaTalk} you
   * @param {boolean} can_strike
   * @param {boolean} is_grand_awake
   * @param {number} security_level
   */
  get_basement_info(grand, you, can_strike, is_grand_awake, security_level) {
    if (can_strike) {
      return [
        grand.get_colored_name(),
        ' 带着料理刚刚回到这里，餐桌正是为偷袭准备的陷阱……',
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
            ' 用溢满愧疚的双眼偷偷望向 ',
            you.get_colored_name(),
            '，',
          );
        } else if (relation >= 0) {
          ret.push(
            grand.get_colored_name(),
            ' 的双手紧绞在一起，指关节因用力而泛白，',
          );
        } else {
          ret.push(
            grand.get_colored_name(),
            ' 空洞的双眼紧随 ',
            you.get_colored_name(),
            ' 的每个动作，',
          );
        }
      } else if (relation_check) {
        ret.push(grand.get_colored_name(), ' 不自觉地紧攥着裙摆，');
      } else {
        ret.push(grand.get_colored_name(), ' 自言自语说着道歉的话，');
      }
      if (security_level >= 4) {
        ret.push('愧疚与怀疑间，似乎后者更据上风。');
      } else if (security_level === 3) {
        ret.push('看来回忆成为了', grand.sex, '没有做出过激行为的理由。');
      } else {
        ret.push('正挣扎于 ', you.get_colored_name(), ' 的幸福与独占欲之间。');
      }
      return ret;
    } else {
      return [
        grand.get_colored_name(),
        ' 呢喃着 ',
        you.get_colored_name(),
        ' 的名字睡在小床的一角，短发间布满了细密的汗珠。',
      ];
    }
  }
};
