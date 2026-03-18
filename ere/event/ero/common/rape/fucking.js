const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroFucking = require('#/event/ero/common/interface/ero-fucking');
const EroRapedFucking = require('#/event/ero/common/rape/raped-fucking');

const {
  get_colored_body_hair,
  get_colored_hair,
  get_skin_color,
} = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

class EroRapeFucking extends EroFucking {
  /** @type {EroFucking} */
  raped;

  constructor(root) {
    super(root);
    this.raped = new EroRapedFucking(root);
  }

  /** @param {boolean} is_raper */
  get_this(is_raper) {
    return is_raper ? this : this.raped;
  }

  async missionary(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.missionary(
        attacker,
        defender,
        get_colored_body_hair(defender.id),
      );
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.doggy_style(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        get_colored_hair(defender.id),
      );
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async sitting(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.sitting(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async hug_sitting(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.hug_sitting(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async standing(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.standing(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async hug_standing(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.hug_standing(
        attacker,
        defender,
        get_colored_body_hair(defender.id),
      );
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async suspended_congress(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.suspended_congress(attacker, defender);
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async hug_suspended_congress(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.hug_suspended_congress(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        defender.race > 0
          ? get_colored_body_hair(defender.id)
          : get_colored_hair(defender.id),
      );
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async ask_cowgirl(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.ask_cowgirl(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }

  async stimulate_g_spot(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_r.stimulate_g_spot(attacker, defender);
    } else {
      await i18n().timon.ero_r.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
        get_skin_color(defender.id),
      );
    }
  }
}

module.exports = EroRapeFucking;
