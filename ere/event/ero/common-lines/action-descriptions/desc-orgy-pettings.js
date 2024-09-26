const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.ask_double_suck_nipple] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起舔吸自己的乳头】',
    ]);

  handlers[ero_hooks.double_suck_nipple] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起舔吸 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);

  handlers[ero_hooks.ask_double_blow_job] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 要求 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ' 一起侍奉自己的肉棒……】',
    ]);

  handlers[ero_hooks.double_blow_job] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起侍奉 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);

  handlers[ero_hooks.ask_double_cunnilingus] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起舔舐自己的小豆豆】',
    ]);

  handlers[ero_hooks.double_cunnilingus] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起舔舐 ',
      defender.get_colored_name(),
      ' 的小豆豆】',
    ]);

  handlers[ero_hooks.ask_double_suck_virgin] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起用舌头舔弄自己的小穴】',
    ]);

  handlers[ero_hooks.double_suck_virgin] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起用舌头舔弄 ',
      defender.get_colored_name(),
      ' 的小穴】',
    ]);

  handlers[ero_hooks.ask_double_tit_job] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起用双乳侍奉自己的肉棒】',
    ]);

  handlers[ero_hooks.double_tit_job] = (attacker, defender, hook, extra_flag) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起用乳房侍奉 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
};
