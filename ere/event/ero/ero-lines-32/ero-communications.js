const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_lure_success = require('#/event/ero/snippets/check-lure-success');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = async (attacker, defender) => {
    if (attacker.id !== 32) {
      throw new Error();
    }
    await defender.print_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      ' 柔润的唇瓣印在了自己的双唇上。',
    ]);
    await attacker.say_and_wait('咕啾……啾啪……啾……');
    await defender.print_and_wait('一开始只是轻啄的接触，逐渐变成舌头交缠……');
  };

  handlers[ero_hooks.lure] = async (attacker, defender, hook) => {
    if (defender.id !== 32) {
      throw new Error();
    }
    await attacker.print_and_wait([
      '伸手抚摸 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的屁股……',
    ]);
    hook.arg = check_lure_success(attacker.id, defender.id);
    if (hook.arg || era.get(`tcvar:${defender.id}:发情`)) {
      era.println();
      await defender.say_and_wait([
        '嗯……',
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️',
      ]);
      era.println();
      await attacker.print_and_wait([
        '为了更容易被摸到，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 主动挺起了屁股。',
      ]);
      await attacker.print_and_wait('整个手掌充分感受到了臀肉的触感……');
    }
  };
};
