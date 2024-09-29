const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.go_on] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 放弃了抵抗，任 ',
      defender.get_colored_name(),
      ' 施为……】',
    ]);

  handlers[ero_hooks.kiss] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      hook.arg ? '' : '继续',
      '亲吻 ',
      defender.get_colored_name(),
      ' 的嘴唇……】',
    ]);

  handlers[ero_hooks.french_kiss] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 对 ',
      defender.get_colored_name(),
      ' 法式湿吻……】',
    ]);

  handlers[ero_hooks.relax] = (attacker, _, hook) => {
    if (
      sys_check_awake(attacker.id) &&
      !era.get(`tcvar:${attacker.id}:脱力`) &&
      !era.get(`tcvar:${attacker.id}:失神`)
    ) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 试着调整呼吸……】',
      ]);
    } else {
      hook.arg = false;
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 毫无反应……】',
      ]);
    }
  };

  handlers[ero_hooks.lure] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 挑逗着 ',
      defender.get_colored_name(),
      '……】',
    ]);

  handlers[ero_hooks.talk] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ' 闲话家常……】',
    ]);

  handlers[ero_hooks.switch] = (attacker, defender) => {
    if (
      !defender.id &&
      (era.get(`tcvar:${defender.id}:脱力`) ||
        era.get(`tcvar:${defender.id}:失神`))
    ) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 暂时不想再继续了……】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将主导权交给 ',
        defender.get_colored_name(),
        '……】',
      ]);
    }
  };

  handlers[ero_hooks.resist] = (attacker) =>
    era.printAndWait(['【', attacker.get_colored_name(), ' 激烈反抗……】']);

  handlers[ero_hooks.gargle] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ' 一起漱口……】',
    ]);

  handlers[ero_hooks.wipe_body] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 擦拭自己和 ',
      defender.get_colored_name(),
      ' 的身体……】',
    ]);
};
