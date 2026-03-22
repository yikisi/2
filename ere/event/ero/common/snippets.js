const era = require('#/era-electron');

const { add_juel } = require('#/system/ero/sys-calc-juel');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const EroTouch = require('#/data/ero/ero-touch');
const { base_emotion_juel } = require('#/data/ero/juel-const');

const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} attacker
   * @param _
   * @param {HookArg} hook
   */
  async after_refusing_by_attacker(attacker, _, hook) {
    await i18n().timon.ero_c.after_refused(attacker);
    hook.override = true;
    // JEWELNAME:12 = 恐惧
    add_juel(attacker.id, 12, base_emotion_juel * 2);
    sys_change_lust(attacker.id, 100);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async after_refusing_by_defender(attacker, defender, hook) {
    await i18n().timon.ero_c.after_refused(defender, false);
    hook.override = true;
    add_juel(attacker.id, 12, base_emotion_juel * 2);
    sys_change_lust(attacker.id, 100);
  },
  /**
   * @param {number} attacker
   * @param {number} [defender]
   * @param {number} [attacker_part]
   * @param {number} [defender_part]
   * @returns {Promise<boolean>}
   */
  async ask_action(attacker, defender, attacker_part, defender_part) {
    if (
      !attacker ||
      era.get('tflag:强奸') > 0 ||
      defender === void 0 ||
      new EroTouch(attacker, attacker_part).check(defender, defender_part)
    ) {
      return false;
    }
    if (!(await select_yes_or_no([], i18n().ui_agree, i18n().ui_disagree))) {
      if (era.get('tflag:主导权') === attacker) {
        era.set('tflag:前回行动', -2);
      } else {
        era.set('tflag:对手行动', -2);
      }
      return true;
    }
    return false;
  },
};
