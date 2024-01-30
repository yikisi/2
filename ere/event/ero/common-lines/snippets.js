const era = require('#/era-electron');

const { add_juel } = require('#/system/ero/sys-calc-juel');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');

const { base_emotion_juel } = require('#/data/ero/juel-const');

module.exports = {
  /**
   * @param {CharaTalk} attacker
   * @param _
   * @param {HookArg} hook
   */
  async after_refusing_by_attacker(attacker, _, hook) {
    await attacker.say_and_wait('果然不可以吗……');
    await attacker.print_and_wait(
      '顺着气氛提出的下流请求，果然还是会有极限的……',
    );
    await attacker.print_and_wait(
      '就这样，虽然身体还有些躁动，也只能这样结束了。',
    );
    await attacker.print_and_wait('不过……');
    hook.override = true;
    add_juel(attacker.id, '恐惧', base_emotion_juel * 2);
    sys_change_lust(attacker.id, 100);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async after_refusing_by_defender(attacker, defender, hook) {
    await defender.print_and_wait('不要露出那种眼神……');
    await defender.print_and_wait('总不会以为什么请求这边都会乖乖答应吧！');
    await defender.print_and_wait('……真是');
    hook.override = true;
    add_juel(attacker.id, '恐惧', base_emotion_juel * 2);
    sys_change_lust(attacker.id, 100);
  },
  /**
   * @param {number} attacker
   * @returns {Promise<boolean>}
   */
  async ask_action(attacker) {
    if (!attacker || era.get('tflag:强奸') > 0) {
      return false;
    }
    era.printMultiColumns([
      {
        accelerator: 0,
        config: { align: 'center', width: 12 },
        content: '同意',
        type: 'button',
      },
      {
        accelerator: 100,
        config: { align: 'center', width: 12 },
        content: '拒绝',
        type: 'button',
      },
    ]);
    return (await era.input()) > 0;
  },
};
