const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.ask_supporter_prepare_virgin] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【在',
      attacker.get_colored_name(),
      ' 的授意下，',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 张开 ',
      defender.get_colored_name(),
      ' 的阴唇……】',
    ]);

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
      ' 一起舔吸自己的乳头……】',
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
      ' 的乳头……】',
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
      ' 的肉棒……】',
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
      ' 一起舔舐自己的小豆豆……】',
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
      ' 的小豆豆……】',
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
      ' 一起用舌头舔弄自己的小穴……】',
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
      ' 的小穴……】',
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
      ' 一起用双乳侍奉自己的肉棒……】',
    ]);

  handlers[ero_hooks.double_tit_job] = (attacker, defender, hook, extra_flag) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 一起用乳房侍奉 ',
      defender.get_colored_name(),
      ' 的肉棒……】',
    ]);

  handlers[ero_hooks.ask_double_fuck] = (
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
      ' 与 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '轮流抽插自己的小穴……】',
    ]);

  handlers[ero_hooks.ask_double_penetration] = (
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
      ' 与 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '一前一后抽插自己下面的两个淫穴……】',
    ]);

  handlers[ero_hooks.ask_spit_roast] = handlers[
    ero_hooks.ask_spit_roast_anal_sex
  ] = (attacker, defender, hook, extra_flag) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 与 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '一上一下抽插自己的口穴与',
      hook.hook === ero_hooks.ask_spit_roast ? '小穴' : '屁穴',
      '……】',
    ]);

  handlers[ero_hooks.ask_cunnilingus_with_fucking] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' 在自己',
      hook.arg ? '插入' : '抽插',
      ' ',
      defender.get_colored_name(),
      ' 时舔舐她风流的小豆豆……】',
    ]);

  handlers[ero_hooks.fuck_69] = (attacker, defender, hook, extra_flag) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 与 ',
        get_chara_talk(extra_flag.supporter).get_colored_name(),
        ' 摆成六九式后被自己插入……】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 继续抽插着与 ',
        get_chara_talk(extra_flag.supporter).get_colored_name(),
        ' 摆成六九式相互口交的 ',
        defender.get_colored_name(),
        '……】',
      ]);
    }
  };

  handlers[ero_hooks.double_fuck] = (attacker, defender, hook, extra_flag) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '轮流抽插着 ',
      defender.get_colored_name(),
      ' 的小穴……】',
    ]);

  handlers[ero_hooks.double_penetration] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '一前一后抽插着 ',
      defender.get_colored_name(),
      ' 下面的两个淫穴……】',
    ]);

  handlers[ero_hooks.spit_roast] = handlers[ero_hooks.spit_roast_anal_sex] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      get_chara_talk(extra_flag.supporter).get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '一上一下抽插着 ',
      defender.get_colored_name(),
      ' 的口穴与',
      hook.hook === ero_hooks.ask_spit_roast ? '小穴' : '屁穴',
      '……】',
    ]);
};
