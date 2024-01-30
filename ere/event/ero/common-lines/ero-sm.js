const era = require('#/era-electron');

const {
  ask_action,
  after_refusing_by_defender,
  after_refusing_by_attacker,
} = require('#/event/ero/common-lines/snippets');

const { get_random_value } = require('#/utils/value-utils');

const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers
 */
module.exports = (handlers) => {
  handlers[ero_hooks.ask_insult] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 辱骂自己……】',
      ]);
      if (await ask_action(attacker.id)) {
        await (get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender)(attacker, defender, hook);
        return;
      }
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 继续辱骂自己……】',
      ]);
    }
  };

  handlers[ero_hooks.ask_hit_anal] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 拍打自己的臀部……】',
      ]);
      if (await ask_action(attacker.id)) {
        await (get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender)(attacker, defender, hook);
        return;
      }
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 继续拍打自己的臀部……】',
      ]);
    }
  };

  handlers[ero_hooks.ask_hit_breast] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 拍打自己的胸部……】',
      ]);
      if (await ask_action(attacker.id)) {
        await (get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender)(attacker, defender, hook);
        return;
      }
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 继续拍打自己的胸部……】',
      ]);
    }
  };

  handlers[ero_hooks.ask_hit_face] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 扇自己的耳光……】',
      ]);
      if (await ask_action(attacker.id)) {
        await (get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender)(attacker, defender, hook);
        return;
      }
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 再继续扇自己的耳光……】',
      ]);
    }
  };

  handlers[ero_hooks.ask_virgin_foot_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 践踏自己的阴部……】',
      ]);
      if (await ask_action(attacker.id)) {
        await (get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender)(attacker, defender, hook);
        return;
      }
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 继续践踏自己的阴部……】',
      ]);
    }
  };
};
