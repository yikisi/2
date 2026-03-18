const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroMakingOuts = require('#/event/ero/common/interface/ero-making-outs');
const EroRapedMakingOuts = require('#/event/ero/common/rape/raped-making-outs');

const {
  get_colored_body_hair,
  get_colored_hair,
  get_skin_color,
} = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

class EroRapeMakingOuts extends EroMakingOuts {
  /** @type {EroMakingOuts} */
  raped;

  constructor(root) {
    super(root);
    this.raped = new EroRapedMakingOuts(root);
  }

  /** @param {boolean} is_raper */
  get_this(is_raper) {
    return is_raper ? this : this.raped;
  }

  async pet_ear(attacker, defender, hook) {
    if (!defender.race) {
      return;
    }
    await i18n().timon.ero_r.pet_ear(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async pull_ear(attacker, defender, hook) {
    if (!defender.race) {
      return;
    }
    await i18n().timon.ero_r.pull_ear(attacker, defender);
  }

  async pet_breast(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.pet_breast(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async pet_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.pet_nipple(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async pet_clitoris(attacker, defender, hook) {
    await i18n().timon.ero_r.pet_clitoris(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async finger_fuck(attacker, defender, hook) {
    await i18n().timon.ero_r.finger_fuck(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      defender.race > 0
        ? get_colored_body_hair(defender.id)
        : get_colored_hair(defender.id),
    );
  }

  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    await i18n().timon.ero_r.stimulate_g_spot_by_finger(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async pet_leg(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.pet_leg(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      get_skin_color(defender.id),
    );
  }

  async pet_tail(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.pet_tail(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      get_colored_body_hair(defender.id),
    );
  }

  async pull_tail(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.pull_tail(attacker, defender);
  }

  async cunnilingus(attacker, defender, hook) {
    await i18n().timon.ero_r.cunnilingus(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async suck_virgin(attacker, defender, hook) {
    await i18n().timon.ero_r.cunnilingus(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.ask_blow_job(attacker, defender, hook.arg);
  }

  async force_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_r.force_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_r.ask_deep_blow_job(attacker, defender, hook.arg);
  }

  async force_deep_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_r.force_deep_blow_job(attacker, defender, hook.arg);
  }

  async ask_hand_job(attacker, defender, hook) {
    await i18n().timon.ero_r.ask_or_force_hand_job(
      attacker,
      defender,
      hook.arg,
    );
  }

  async force_hand_job(attacker, defender, hook) {
    await i18n().timon.ero_r.ask_or_force_hand_job(
      attacker,
      defender,
      hook.arg,
    );
  }

  async ask_tit_job(attacker, defender, hook) {
    if (era.get(`talent:${defender.id}:乳房尺寸`) < 0) {
      return;
    }
    await i18n().timon.ero_r.ask_tit_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async fuck_tit_and_mouth(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.ask_or_force_tit_and_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_tit_and_blow_job(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.ask_or_force_tit_and_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async bite_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_r.bite_nipple(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }
}

module.exports = EroRapeMakingOuts;
