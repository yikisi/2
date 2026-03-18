const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroFucking = require('#/event/ero/common/interface/ero-fucking');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { part_enum } = require('#/data/ero/part-const');

const { i18n } = require('#/i18n/selector');

class EroNormalFucking extends EroFucking {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async missionary(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.missionary(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async missionary_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.missionary(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
        true,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async doggy_style(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.doggy_style(attacker, defender);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async doggy_style_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.doggy_style(attacker, defender, true);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async sitting(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.sitting(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async sitting_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.sitting(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
        true,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_sitting(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.hug_sitting(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_sitting_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.hug_sitting(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
        true,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async standing(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.standing(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async standing_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.standing(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        true,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_standing(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.hug_standing(attacker, defender);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_standing_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.hug_standing(attacker, defender, true);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suspended_congress(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.suspended_congress(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suspended_congress_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.suspended_congress(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
        true,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fucked_suspended_congress(attacker, defender, hook) {
    if (!hook.arg) {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fucked_suspended_congress_anal_sex(attacker, defender, hook) {
    if (!hook.arg) {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_suspended_congress(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.hug_suspended_congress(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hug_suspended_congress_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.hug_suspended_congress(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
        true,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_cowgirl(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.virgin,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await i18n().timon.ero_c.ask_cowgirl(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_cowgirl_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.anal,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await i18n().timon.ero_c.ask_cowgirl(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
        true,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_stimulate_glans_by_virgin(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.virgin,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await i18n().timon.ero_c.ask_stimulate_glans_by_hole(attacker, defender);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_stimulate_glans_by_anal(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.anal,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await i18n().timon.ero_c.ask_stimulate_glans_by_hole(
        attacker,
        defender,
        true,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_g_spot(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.stimulate_g_spot(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_womb(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.stimulate_womb(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_fuck(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.virgin,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await i18n().timon.ero_c.ask_fuck(attacker, defender);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_fuck_anal(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await i18n().timon.ero_c.ask_fuck(attacker, defender, false);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cowgirl(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.cowgirl(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cowgirl_anal_sex(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.cowgirl(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        false,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_virgin(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.stimulate_glans_by_hole(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_anal(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_c.stimulate_glans_by_hole(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        false,
      );
    } else {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_stimulate_g_spot(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.virgin,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await i18n().timon.ero_c.ask_stimulate_hole(attacker, defender);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_stimulate_womb(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await i18n().timon.ero_c.ask_stimulate_hole(attacker, defender, true);
    } else {
      await i18n().timon.ero_c.continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }
}

module.exports = EroNormalFucking;
