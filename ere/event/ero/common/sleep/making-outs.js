const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroMakingOuts = require('#/event/ero/common/interface/ero-making-outs');

const { i18n } = require('#/i18n/selector');

class EroSleepMakingOuts extends EroMakingOuts {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_ear(attacker, defender, hook) {
    await i18n().timon.ero_s.pet_ear(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pull_ear(attacker, defender, hook) {
    await i18n().timon.ero_s.pull_ear(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_breast(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_s.pet_breast(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_nipple(attacker, defender, hook) {
    await i18n().timon.ero_s.pet_nipple(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_clitoris(attacker, defender, hook) {
    await i18n().timon.ero_s.pet_clitoris(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async finger_fuck(attacker, defender, hook) {
    await i18n().timon.ero_s.finger_fuck(attacker);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async prepare_virgin(attacker, defender, hook) {
    await i18n().timon.ero_s.prepare_virgin(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    await i18n().timon.ero_s.stimulate_g_spot_by_finger(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_anal(attacker, defender, hook) {
    await i18n().timon.ero_s.pet_anal(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async prepare_anal(attacker, defender, hook) {
    await i18n().timon.ero_s.prepare_anal(attacker);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_leg(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_s.pet_leg(attacker, defender, hook.arg);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_tail(attacker, defender, hook) {
    await i18n().timon.ero_s.pet_tail(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pull_tail(attacker, defender, hook) {
    await i18n().timon.ero_s.pull_tail(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cunnilingus(attacker, defender, hook) {
    await i18n().timon.ero_s.cunnilingus(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async blow_job(attacker, defender, hook) {
    await i18n().timon.ero_s.blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async deep_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_s.deep_blow_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_deep_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_s.force_deep_blow_job(attacker, defender);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_job(attacker, defender, hook) {
    await i18n().timon.ero_s.hand_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_and_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_s.hand_and_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fuck_tit(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_s.fuck_tit(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tit_job(attacker, defender, hook) {
    if (attacker.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_s.tit_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tit_and_blow_job(attacker, defender, hook) {
    if (attacker.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_s.tit_and_blow_job(attacker, defender);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suck_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_s.suck_nipple(attacker, defender);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async bite_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_s.bite_nipple(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_armpit_intercourse(attacker, defender, hook) {
    await i18n().timon.ero_s.force_armpit_intercourse(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_foot_job(attacker, defender, hook) {
    await i18n().timon.ero_s.force_foot_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async foot_job(attacker, defender, hook) {
    await i18n().timon.ero_s.foot_job(attacker);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tail_job(attacker, defender, hook) {
    await i18n().timon.ero_s.tail_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }
}

module.exports = EroSleepMakingOuts;
