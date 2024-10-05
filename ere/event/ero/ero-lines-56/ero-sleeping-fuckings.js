const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} sleeping_handlers
 * @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers
 */
module.exports = (sleeping_handlers, handlers) => {
  sleeping_handlers[ero_hooks.stimulate_glans_by_virgin] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (attacker.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait(['哈啊……哈……']);
      await attacker.print_and_wait([
        '勉强能适应呢，毕竟，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的肉棒，是还没睡醒的样子。',
      ]);
      await attacker.print_and_wait(['这个时候的话,就该我来帮忙了吧。']);
      await attacker.print_and_wait([
        '深呼吸，稍稍绷紧小腹，让蠕动着的小穴唤醒 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的肉棒。',
      ]);
      await attacker.say_and_wait(['唔！！！咿呀！！！']);
      await attacker.print_and_wait([
        '被唤醒的怪物肉棒给本来还能跟上 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 节奏的自己带来了几乎失去意识般的快感。',
      ]);
    } else {
      return await handlers[ero_hooks.stimulate_glans_by_virgin](
        attacker,
        defender,
        hook,
      );
    }
  };
};
