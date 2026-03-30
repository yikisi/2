const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroCommunications = require('#/event/ero/common/interface/ero-communications');
const EroRapedCommunications = require('#/event/ero/common/rape/raped-communications');

const { i18n } = require('#/i18n/selector');

class EroRapeCommunications extends EroCommunications {
  /** @type {EroCommunications} */
  raped;

  constructor(root) {
    super(root);
    this.raped = new EroRapedCommunications(root);
  }

  /** @param {boolean} is_raper */
  get_this(is_raper) {
    return is_raper ? this : this.raped;
  }

  async kiss(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.kiss(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async french_kiss(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.french_kiss(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async resist(attacker, defender, hook, extra) {
    extra.success = EroCommunications.check_resist_success(
      attacker.id,
      defender.id,
    );
    if (era.get('flag:惩戒力度') === 3) {
      await i18n().timon.ero_c.resist(
        attacker,
        defender,
        hook.arg,
        extra.success,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }
}

module.exports = EroRapeCommunications;
