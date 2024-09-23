/**
 * @file 调教地文 - 爱抚系5
 *
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const {
  sys_get_colored_full_callname,
} = require('#/system/sys-calc-chara-others');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.tribbing] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将下体抵近 ',
        defender.get_colored_name(),
        ' 的下体，用阴核互相摩擦着……】',
      ]);
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 继续与 ',
        defender.get_colored_name(),
        ' 互相摩擦着阴核……】',
      ]);
    }
  };

  handlers[ero_hooks.self_pet_nipple] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前玩弄着 ',
      sys_get_colored_full_callname(attacker.id, attacker.id),
      ' 的胸部……】',
    ]);
  };

  handlers[ero_hooks.self_hand_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前套弄着 ',
      sys_get_colored_full_callname(attacker.id, attacker.id),
      ' 的肉棒……】',
    ]);
  };

  handlers[ero_hooks.self_pet_clitoris] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前玩弄着 ',
      sys_get_colored_full_callname(attacker.id, attacker.id),
      ' 的阴核……】',
    ]);
  };

  handlers[ero_hooks.self_finger_fuck] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前戳弄着 ',
      sys_get_colored_full_callname(attacker.id, attacker.id),
      ' 的小穴……】',
    ]);
  };

  handlers[ero_hooks.self_pet_anal] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前戳弄着 ',
      sys_get_colored_full_callname(attacker.id, attacker.id),
      ' 的屁穴……】',
    ]);
  };
};
