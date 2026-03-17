const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroMakingOuts = require('#/event/ero/common/interface/ero-making-outs');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const EroTouch = require('#/data/ero/ero-touch');
const { part_enum } = require('#/data/ero/part-const');

const { i18n } = require('#/i18n/selector');

class EroNormalMakingOuts extends EroMakingOuts {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_ear(attacker, defender, hook) {
    if (!defender.race) {
      return;
    }
    await i18n().timon.ero_c.pet_ear(
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
    if (!defender.race) {
      return;
    }
    await i18n().timon.ero_c.pull_ear(attacker, defender);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_breast(attacker, defender, hook) {
    const callname = sys_get_colored_callname(attacker.id, defender.id);
    if (
      new EroTouch(defender.id, part_enum.virgin).check(
        attacker.id,
        part_enum.penis,
      ) &&
      defender.sex_code !== 1
    ) {
      await i18n().timon.ero_c.pet_breast_from_back(
        attacker,
        defender,
        callname,
      );
    } else if (hook.arg) {
      if (defender.sex_code === 1) {
        return;
      }
      await i18n().timon.ero_c.pet_breast_first(attacker, defender, callname);
    } else {
      await i18n().timon.ero_c.pet_breast(
        attacker,
        defender,
        callname,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_c.pet_nipple(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_clitoris(attacker, defender, hook) {
    await i18n().timon.ero_c.pet_clitoris(
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
    await i18n().timon.ero_c.finger_fuck(attacker, defender);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async prepare_virgin(attacker, defender, hook) {
    if (!defender.race) {
      return;
    }
    await i18n().timon.ero_c.prepare_virgin_uma(attacker, defender);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    await i18n().timon.ero_c.stimulate_g_spot_by_finger(
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
    await i18n().timon.ero_c.pet_anal(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async prepare_anal(attacker, defender, hook) {
    await i18n().timon.ero_c.prepare_anal(
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
  async pet_leg(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_c.pet_leg(attacker, defender, hook.arg);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_tail(attacker, defender, hook) {
    await i18n().timon.ero_c.pet_tail(attacker, defender);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pull_tail(attacker, defender, hook) {
    await i18n().timon.ero_c.pull_tail(
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
  async cunnilingus(attacker, defender, hook) {
    await i18n().timon.ero_c.cunnilingus(
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
  async ask_cunnilingus(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.clitoris,
        part_enum.mouth,
      ))
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_cunnilingus(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_cunnilingus(attacker, defender, hook) {
    await i18n().timon.ero_c.force_cunnilingus(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suck_virgin(attacker, defender, hook) {
    await i18n().timon.ero_c.suck_virgin(attacker, defender, hook.arg);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_suck_virgin(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.virgin,
        part_enum.mouth,
      ))
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_suck_virgin(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_suck_virgin(attacker, defender, hook) {
    await i18n().timon.ero_c.force_suck_virgin(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async blow_job(attacker, defender, hook) {
    await i18n().timon.ero_c.blow_job(attacker, defender, hook.arg);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_blow_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.mouth,
      ))
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_c.force_blow_job(attacker, defender, hook.arg);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async deep_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_c.deep_blow_job(
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
  async ask_deep_blow_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.mouth,
      ))
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_deep_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_deep_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_c.force_deep_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_job(attacker, defender, hook) {
    await i18n().timon.ero_c.hand_job(attacker, defender, hook.arg);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hand_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.hand,
      ))
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_hand_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_hand_job(attacker, defender, hook) {
    await i18n().timon.ero_c.force_hand_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_and_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_c.hand_and_blow_job(
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
  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.mouth,
      ))
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_hand_and_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_hand_and_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_c.force_hand_and_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tit_job(attacker, defender, hook) {
    await i18n().timon.ero_c.tit_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_tit_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.breast,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_tit_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fuck_tit(attacker, defender, hook) {
    await i18n().timon.ero_c.fuck_tit(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tit_and_blow_job(attacker, defender, hook) {
    await i18n().timon.ero_c.tit_and_blow_job(
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
  async ask_tit_and_blow_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.breast,
      ))
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_tit_and_blow_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async fuck_tit_and_mouth(attacker, defender, hook) {
    await i18n().timon.ero_c.fuck_tit_and_mouth(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
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
    await i18n().timon.ero_c.suck_nipple(
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
  async bite_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_c.bite_nipple(
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
  async ask_milk_and_hand_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.breast,
        part_enum.mouth,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    if (defender.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_c.ask_milk_and_hand_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async milk(attacker, defender, hook) {
    if (attacker.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_c.suck_nipple(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_bite_nipple(attacker, defender, hook) {
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.breast,
        part_enum.mouth,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    if (attacker.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_c.bite_nipple(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async milk_and_hand_job(attacker, defender, hook) {
    if (attacker.sex_code === 1) {
      return;
    }
    await i18n().timon.ero_c.milk_and_hand_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async non_penetrative(attacker, defender, hook) {
    await i18n().timon.ero_c.non_penetrative(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_non_penetrative(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.clitoris,
      ))
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_non_penetrative(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async sixty_nine(attacker, defender, hook) {
    if (((attacker.sex_code > 0) ^ (defender.sex_code > 0)) === 0) {
      return;
    }
    await i18n().timon.ero_c.sixty_nine(attacker, defender, hook.arg);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async armpit_intercourse(attacker, defender, hook) {
    await i18n().timon.ero_c.armpit_intercourse(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_armpit_intercourse(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.body,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
    }
    await i18n().timon.ero_c.ask_armpit_intercourse(
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
  async force_armpit_intercourse(attacker, defender, hook) {
    await i18n().timon.ero_c.force_armpit_intercourse(
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
  async foot_job(attacker, defender, hook) {
    await i18n().timon.ero_c.foot_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_foot_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.foot,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_foot_job(
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
  async force_foot_job(attacker, defender, hook) {
    await i18n().timon.ero_c.force_foot_job(
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
  async tail_job(attacker, defender, hook) {
    await i18n().timon.ero_c.tail_job(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_tail_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.body,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_tail_job(
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
  async force_tail_job(attacker, defender, hook) {
    await i18n().timon.ero_c.force_tail_job(
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
  async hair_fuck(attacker, defender, hook) {
    await i18n().timon.ero_c.hair_fuck(
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
  async ask_hair_fuck(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.body,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    await i18n().timon.ero_c.ask_hair_fuck(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_hair_fuck(attacker, defender, hook) {
    await i18n().timon.ero_c.force_hair_fuck(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }
}

module.exports = EroNormalMakingOuts;
