/**
 * @file 调教地文 - 银趴爱抚系
 *
 * @author 雞雞
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { penis_desc } = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  /** @author 雞雞 */
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
        ' 叉开腿，',
        penis_desc[get_penis_size(attacker.id)],
        ' 的肉棒昂然挺立，',
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
};
