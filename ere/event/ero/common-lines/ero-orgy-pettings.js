/**
 * @file 调教地文 - 银趴爱抚系
 *
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { penis_desc } = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_double_suck_nipple] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起舔吸自己的乳头】',
    ]);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.double_suck_nipple] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起舔吸 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_double_blow_job] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    if (hook.arg) {
      await era.printAndWait([
        attacker.get_colored_name(),
        ` 叉开腿，${penis_desc[get_penis_size(attacker.id)]} 的肉棒昂然挺立，`,
        defender.get_colored_name(),
        ' 和 ',
        supporter.get_colored_name(),
        ' 在 ',
        attacker.get_colored_name(),
        ' 的示意下张开嘴巴凑上前去……',
      ]);
    } else {
      await era.printAndWait([
        '在',
        attacker.get_colored_name(),
        ' 的示意下，',
        defender.get_colored_name(),
        ' 和 ',
        supporter.get_colored_name(),
        ' 用嘴巴交替侍奉着肉棒……',
      ]);
    }
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.double_blow_job] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起侍奉 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_double_cunnilingus] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起舔舐自己的小豆豆】',
    ]);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.double_cunnilingus] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起舔舐 ',
      defender.get_colored_name(),
      ' 的小豆豆】',
    ]);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_double_suck_virgin] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起用舌头舔弄自己的小穴】',
    ]);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.double_suck_virgin] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起用舌头舔弄 ',
      defender.get_colored_name(),
      ' 的小穴】',
    ]);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_double_tit_job] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起用双乳侍奉自己的肉棒】',
    ]);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.double_tit_job] = async (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    const supporter = get_chara_talk(extra_flag.supporter);
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起用乳房侍奉 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };
};
