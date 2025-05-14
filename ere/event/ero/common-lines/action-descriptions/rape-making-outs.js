const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.force_cunnilingus] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行将小豆豆压在 ',
        defender.get_colored_name(),
        ' 的脸上】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行用小豆豆摩擦 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.force_suck_virgin] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行将小穴压在 ',
        defender.get_colored_name(),
        ' 的嘴唇上】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行用小穴摩擦着 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.force_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行将肉棒插入 ',
        defender.get_colored_name(),
        ' 的嘴唇】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行用肉棒搅弄 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.force_deep_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行将肉棒插入 ',
        defender.get_colored_name(),
        ' 的喉咙深处】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行在 ',
      defender.get_colored_name(),
      ' 喉咙深处搅弄着】',
    ]);
  };

  handlers[ero_hooks.force_hand_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行将肉棒伸到 ',
        defender.get_colored_name(),
        ' 手中】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行用肉棒蹭着 ',
      defender.get_colored_name(),
      ' 的双手】',
    ]);
  };

  handlers[ero_hooks.force_hand_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行将肉棒挤开 ',
        defender.get_colored_name(),
        ' 的双手插入口中】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒一边击打着 ',
      defender.get_colored_name(),
      ' 的手一边搅弄着 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.fuck_tit] = (attacker, defender, hook) => {
    if (hook.arg && defender.sex_code !== 1) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行将 ',
        defender.get_colored_name(),
        ' 的乳房聚拢，夹住了肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行用肉棒摩擦着 ',
      defender.get_colored_name(),
      ' 的胸部】',
    ]);
  };

  handlers[ero_hooks.force_hair_fuck] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行用 ',
        defender.get_colored_name(),
        ' 的头发缠住肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行用肉棒摩擦 ',
      defender.get_colored_name(),
      ' 的头发】',
    ]);
  };

  handlers[ero_hooks.force_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行拉过 ',
      defender.get_colored_name(),
      ' 的双足抚弄肉棒】',
    ]);

  handlers[ero_hooks.force_tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行拉过 ',
      defender.get_colored_name(),
      ' 的尾巴缠弄着肉棒】',
    ]);
};
