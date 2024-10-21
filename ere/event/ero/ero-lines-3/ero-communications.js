const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_lure_success = require('#/event/ero/snippets/check-lure-success');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.talk] = async (attacker, defender) => {
    if (defender.id !== 3 || !era.get('status:3:腿伤')) {
      throw new Error();
    }
    await defender.say_and_wait('……');
    await attacker.say_and_wait('……');
    await attacker.print_and_wait(
      '情欲燃起，反倒不想说话，而是搂在一起，耳鬓厮磨，用唇吻和气息互相交流。',
    );
    await attacker.print_and_wait([
      '每当接触到',
      defender.sex,
      '的肌肤，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的身体便瞬间发紧，似乎想把我留住，让彼此贴近的时间延长。',
    ]);
  };

  handlers[ero_hooks.lure] = async (attacker, defender, hook) => {
    if (defender.id !== 3) {
      throw new Error();
    }
    await attacker.print_and_wait([
      '看着面前的可爱生物，不由自主地将',
      defender.sex,
      '抱在怀里，伸手调弄',
      defender.sex,
      '的秀发，抚摸',
      defender.sex,
      '的头。',
    ]);
    await defender.say_and_wait('干嘛……又把人当小孩子……');
    hook.arg = check_lure_success(attacker.id, defender.id);
    if (hook.arg || era.get(`tcvar:${defender.id}:发情`)) {
      await attacker.print_and_wait('虽然这么说……不过尾巴倒是摇了起来呢。');
      await attacker.print_and_wait('似乎是想让继续的样子。');
    }
  };

  handlers[ero_hooks.switch] = async (attacker, defender) => {
    if (defender.id !== 3) {
      throw new Error();
    }
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '！你又欺负我——',
    ]);
    await attacker.print_and_wait([
      '看见眼前鼓起腮帮的小马不禁一笑，双手把住',
      defender.sex,
      '幼嫩的肩膀，一转将',
      defender.sex,
      '举起……',
    ]);
    await defender.say_and_wait('欸？');
    await attacker.print_and_wait('天旋地转……');
    await attacker.say_and_wait('现在，是你的时间了。');
    await attacker.print_and_wait('坏笑着告诉还有些发愣的担当。');
    await attacker.say_and_wait([
      '帝王老师，',
      attacker.actual_name,
      ' 同学等着被你教育呢。',
    ]);
  };
};
