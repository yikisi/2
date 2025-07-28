const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');

module.exports = class extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (attacker.id !== 32) {
      return await super.kiss(attacker, defender, hook);
    }
    await defender.print_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      ' 柔润的唇瓣印在了自己的双唇上。',
    ]);
    await attacker.say_and_wait('咕啾……啾啪……啾……');
    await defender.print_and_wait('一开始只是轻啄的接触，逐渐变成舌头交缠……');
  }

  async lure(attacker, defender, hook) {
    if (attacker.id === 32) {
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 娇媚的目光，勾引地望着自己。',
      ]);
      if (attacker.sex_code > 0 && era.get('tcvar:32:发情')) {
        await defender.print_and_wait(
          '开合的双唇无论上下都淌着汁水，等待被填满的幸福……',
        );
      }
    } else {
      await attacker.print_and_wait([
        '伸手抚摸 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的屁股……',
      ]);
      hook.arg = EroNormalCommunications.check_lure_success(
        attacker.id,
        defender.id,
      );
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
    }
  }
};
