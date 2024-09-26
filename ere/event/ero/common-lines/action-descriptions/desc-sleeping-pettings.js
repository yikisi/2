const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.pet_ear] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 温暖的耳朵……】',
    ]);

  handlers[ero_hooks.pull_ear] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉扯着着沉睡的 ',
      defender.get_colored_name(),
      ' 温暖的耳朵……】',
    ]);

  handlers[ero_hooks.pet_breast] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 柔软的胸部……】',
    ]);

  handlers[ero_hooks.pet_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 敏感的乳头……】',
    ]);

  handlers[ero_hooks.pet_clitoris] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 风流的小豆豆……】',
    ]);

  handlers[ero_hooks.finger_fuck] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手指插入了沉睡的 ',
      defender.get_colored_name(),
      ' 风流的小穴……】',
    ]);

  handlers[ero_hooks.prepare_virgin] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 张开了沉睡的 ',
      defender.get_colored_name(),
      ' 羞涩的阴唇……】',
    ]);

  handlers[ero_hooks.stimulate_g_spot_by_finger] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手指玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 隐秘的G点……】',
    ]);

  handlers[ero_hooks.pet_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 小巧的菊门……】',
    ]);

  handlers[ero_hooks.prepare_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 张开了沉睡的 ',
      defender.get_colored_name(),
      ' 羞涩的菊门……】',
    ]);

  handlers[ero_hooks.pet_leg] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 抚摸着沉睡的 ',
      defender.get_colored_name(),
      ' 丰满的大腿……】',
    ]);

  handlers[ero_hooks.fuck_tit] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 双乳聚拢，摩擦着自己的肉棒……】',
    ]);

  handlers[ero_hooks.tit_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将双乳聚拢，摩擦着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒……】',
    ]);

  handlers[ero_hooks.tit_and_blow_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 一边用胸部摩擦着 ',
      defender.get_colored_name(),
      ' 耸立的肉棒，一边张口吮吸着沉睡的龟头……】',
    ]);

  handlers[ero_hooks.bite_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 轻轻啮咬着沉睡的 ',
      defender.get_colored_name(),
      ' 敏感的乳头……】',
    ]);

  handlers[ero_hooks.force_armpit_intercourse] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 无防备的手拉起，用肉棒摩擦着腋下……】',
    ]);

  handlers[ero_hooks.force_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉过沉睡的 ',
      defender.get_colored_name(),
      ' 健康的双足，踩弄着自己的肉棒……】',
    ]);

  handlers[ero_hooks.foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒踩在脚下……】',
    ]);

  handlers[ero_hooks.tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用尾巴缠弄着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒……】',
    ]);
};
