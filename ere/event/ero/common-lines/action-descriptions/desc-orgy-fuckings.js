const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
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
