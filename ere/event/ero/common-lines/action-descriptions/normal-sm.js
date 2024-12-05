const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.insult] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 辱骂着 ',
      defender.get_colored_name(),
      '……】',
    ]);

  handlers[ero_hooks.ask_insult] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '辱骂自己……】',
    ]);

  handlers[ero_hooks.hit_anal] = handlers[ero_hooks.hit_anal_hard] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      hook.hook === ero_hooks.hit_anal_hard ? '用力' : '',
      '拍打着 ',
      defender.get_colored_name(),
      ' 的臀部……】',
    ]);

  handlers[ero_hooks.ask_hit_anal] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '拍打自己的臀部……】',
    ]);

  handlers[ero_hooks.hit_breast] = handlers[ero_hooks.hit_breast_hard] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      hook.hook === ero_hooks.hit_anal_hard ? '用力' : '',
      '拍打着 ',
      defender.get_colored_name(),
      ' 的胸部……】',
    ]);

  handlers[ero_hooks.ask_hit_breast] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '拍打自己的胸部……】',
    ]);

  handlers[ero_hooks.hit_face] = handlers[ero_hooks.hit_face_hard] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 对 ',
      defender.get_colored_name(),
      ' ',
      hook.hook === ero_hooks.hit_face_hard ? '用力' : '',
      '甩了一记耳光……】',
    ]);

  handlers[ero_hooks.hit_face_by_penis] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒拍打 ',
      defender.get_colored_name(),
      ' 的脸颊……】',
    ]);

  handlers[ero_hooks.ask_hit_face] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' ',
      !hook.arg ? '再继续' : '',
      '扇自己的耳光……】',
    ]);

  handlers[ero_hooks.virgin_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 践踏着 ',
      defender.get_colored_name(),
      ' 的阴部……】',
    ]);

  handlers[ero_hooks.ask_virgin_foot_job] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' ',
      !hook.arg ? '继续' : '',
      '践踏自己的阴部……】',
    ]);
};
