const { get } = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const EroNormalOrgy = require('#/event/ero/common/normal/orgy');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const EroSleepCommunications = require('#/event/ero/common/sleep/communications');
const SleepCommandLines = require('#/event/ero/common/sleep/sleep-common');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');
const CustomizedEro = require('#/event/ero/ero-common');

const { get_breast_cup } = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

class AcuteNormalCommunications extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.kiss(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.kiss(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async french_kiss(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.french_kiss(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.french_kiss(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async relax(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.relax(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.relax(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async lure(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.lure(attacker, defender, hook);
    }
    hook.arg = EroNormalCommunications.check_lure_success(
      attacker.id,
      defender.id,
    );
    await i18n().kojo[this.id].ero.lure(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async talk(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.talk(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.talk(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async switch(attacker, defender) {
    if (defender.id !== this.id) {
      return await super.switch(attacker, defender);
    }
    await i18n().kojo[this.id].ero.switch(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async resist(attacker, defender, hook, extra_flag) {
    if (defender.id !== this.id) {
      return await super.resist(attacker, defender, hook, extra_flag);
    }
    await i18n().kojo[this.id].ero.resist(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      (extra_flag.success = EroNormalCommunications.check_resist_success(
        0,
        this.id,
      )),
    );
  }

  async gargle(attacker, defender, hook) {
    const { me, acute } =
      attacker.id === 0
        ? { me: attacker, acute: defender }
        : { me: defender, acute: attacker };
    await i18n().kojo[this.id].ero.gargle(
      acute,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(0, this.id),
    );
  }

  async wipe_body(attacker, defender, hook) {
    const { me, acute } =
      attacker.id === 0
        ? { me: attacker, acute: defender }
        : { me: defender, acute: attacker };
    await i18n().kojo[this.id].ero.wipe_body(
      acute,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(0, this.id),
    );
  }
}

class AcuteNormalMakingOuts extends EroNormalMakingOuts {
  async pet_ear(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pet_ear(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pet_ear(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async pull_ear(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pull_ear(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pull_ear(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async pet_breast(attacker, defender, hook) {
    if (defender.id !== this.id || defender.sex_code === 1) {
      return await super.pet_breast(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pet_breast(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
      get_breast_cup(this.id, true) >= 'C',
    );
  }

  async pet_nipple(attacker, defender, hook) {
    if (defender.id !== this.id || defender.sex_code === 1) {
      return await super.pet_nipple(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pet_nipple(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async pet_clitoris(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pet_clitoris(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.finger_fuck(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async prepare_virgin(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.prepare_virgin(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.prepare_virgin(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.stimulate_g_spot_by_finger(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.stimulate_g_spot_by_finger(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async pet_anal(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pet_anal(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pet_anal(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.prepare_anal(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async pet_leg(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pet_leg(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pet_leg(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async pet_tail(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pet_tail(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pet_tail(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async pull_tail(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pull_tail(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pull_tail(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async cunnilingus(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.cunnilingus(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.cunnilingus(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async suck_virgin(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.suck_virgin(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.suck_virgin(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_deep_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async force_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_blow_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.force_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_deep_blow_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.force_deep_blow_job(defender);
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_hand_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_hand_and_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async force_hand_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_hand_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.force_hand_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async force_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_hand_and_blow_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.force_hand_and_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_tit_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_tit_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_tit_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      get_breast_cup(this.id, true) >= 'C',
    );
  }

  async ask_tit_and_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_tit_and_blow_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_tit_and_blow_job(defender, attacker);
  }

  async fuck_tit(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.fuck_tit(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.fuck_tit(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      get_breast_cup(this.id, true) >= 'C',
    );
  }

  async fuck_tit_and_mouth(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.fuck_tit_and_mouth(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.fuck_tit_and_mouth(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async suck_anal(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.suck_anal(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.suck_anal(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async suck_nipple(attacker, defender, hook) {
    if (defender.id !== this.id || defender.sex_code === 1) {
      return await super.suck_nipple(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.suck_nipple(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async bite_nipple(attacker, defender, hook) {
    if (defender.id !== this.id || defender.sex_code === 1) {
      return await super.bite_nipple(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.bite_nipple(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_milk_and_hand_job(attacker, defender, hook) {
    if (defender.id !== this.id || defender.sex_code === 1) {
      return await super.ask_milk_and_hand_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_milk_and_hand_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async milk(attacker, defender, hook) {
    if (attacker.id !== this.id || attacker.sex_code === 1) {
      return await super.milk(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.milk(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async ask_non_penetrative(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_non_penetrative(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_non_penetrative(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async sixty_nine(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.sixty_nine(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.sixty_nine(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_hair_fuck(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_hair_fuck(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_hair_fuck(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, 301),
    );
  }

  async force_hair_fuck(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_hair_fuck(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.force_hair_fuck(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_armpit_intercourse(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_armpit_intercourse(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_armpit_intercourse(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async force_armpit_intercourse(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_armpit_intercourse(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.force_armpit_intercourse(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_foot_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_foot_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_foot_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async force_foot_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_foot_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.force_foot_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async ask_tail_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_tail_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_tail_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async force_tail_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_tail_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.force_tail_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }
}

class AcuteNormalFucking extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.missionary(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.missionary(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async missionary_anal_sex(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.missionary_anal_sex(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.missionary_anal_sex(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async sitting_anal_sex(attacker, defender, hook) {
    await this.missionary_anal_sex(attacker, defender, hook);
  }

  async standing_anal_sex(attacker, defender, hook) {
    await this.missionary_anal_sex(attacker, defender, hook);
  }

  async suspended_congress_anal_sex(attacker, defender, hook) {
    await this.missionary_anal_sex(attacker, defender, hook);
  }

  async ask_cowgirl_anal_sex(attacker, defender, hook) {
    await this.missionary_anal_sex(attacker, defender, hook);
  }

  async doggy_style(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.doggy_style(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.doggy_style(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async doggy_style_anal_sex(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.doggy_style_anal_sex(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.doggy_style_anal_sex(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async hug_sitting_anal_sex(attacker, defender, hook) {
    await this.doggy_style_anal_sex(attacker, defender, hook);
  }

  async hug_standing_anal_sex(attacker, defender, hook) {
    await this.doggy_style_anal_sex(attacker, defender, hook);
  }

  async hug_suspended_congress_anal_sex(attacker, defender, hook) {
    await this.doggy_style_anal_sex(attacker, defender, hook);
  }

  async sitting(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.sitting(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.sitting(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async hug_sitting(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hug_sitting(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.hug_sitting(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async standing(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.standing(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.standing(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async hug_standing(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hug_standing(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.hug_standing(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async suspended_congress(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.suspended_congress(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.suspended_congress(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async fucked_suspended_congress(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.fucked_suspended_congress(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.fucked_suspended_congress(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
      hook.arg,
    );
  }

  async hug_suspended_congress(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hug_suspended_congress(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.hug_suspended_congress(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
      di18n.feature.n_c_sex_organ[get('talent:0:茎核类型')],
    );
  }

  async ask_cowgirl(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_cowgirl(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_cowgirl(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async stimulate_g_spot(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.stimulate_g_spot(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.stimulate_g_spot(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async stimulate_large_intestine(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.stimulate_large_intestine(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.stimulate_large_intestine(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async stimulate_womb(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.stimulate_womb(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.stimulate_womb(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async fucked_suspended_congress_anal_sex(attacker, defender, hook) {
    await this.missionary_anal_sex(defender, attacker, hook);
  }
}

class AcuteNormalSm extends EroNormalSm {
  async insult(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.insult(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.insult(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_insult(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        Math.random() < 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
      return;
    }
    return super.insult(defender, attacker, hook);
  }

  async hit_anal(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hit_anal(attacker, defender, hook);
    }
    if (hook.arg && defender.sex_code === 1) {
      return;
    }
    await i18n().kojo[this.id].ero.hit_anal(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async ask_hit_anal(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        Math.random() < 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
      return;
    }
    return super.hit_anal(defender, attacker, hook);
  }

  async hit_anal_hard(attacker, defender, hook) {
    if (defender.id !== this.id || defender.sex_code === 1) {
      return await super.hit_anal_hard(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.hit_anal_hard(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async hit_face_by_penis(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hit_face_by_penis(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.hit_face_by_penis(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }
}

class AcuteNormalOrgy extends EroNormalOrgy {
  async ask_double_blow_job(attacker, defender, supporter, hook) {
    if (attacker.id !== 0 || defender.id !== this.id) {
      return await super.ask_double_blow_job(
        attacker,
        defender,
        supporter,
        hook,
      );
    }
    await i18n().kojo[this.id].ero.ask_double_blow_job(
      defender,
      attacker,
      supporter,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(defender.id, supporter.id),
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(attacker.id, supporter.id),
      hook.arg,
    );
  }

  async double_blow_job(attacker, defender, supporter, hook) {
    await this.ask_double_blow_job(defender, attacker, supporter, hook);
  }

  async double_suck_nipple(attacker, defender, supporter, hook) {
    if (
      attacker.id !== 0 ||
      defender.id !== this.id ||
      defender.sex_code === 1
    ) {
      return await super.double_suck_nipple(
        attacker,
        defender,
        supporter,
        hook,
      );
    }
    await i18n().kojo[this.id].ero.double_suck_nipple(
      defender,
      attacker,
      supporter,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(defender.id, supporter.id),
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(attacker.id, supporter.id),
      hook.arg,
    );
  }
}

class AcuteNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      making_outs: true,
      fucking: true,
      sm: true,
      orgy: true,
    });
    this.communications = new AcuteNormalCommunications(this);
    this.making_outs = new AcuteNormalMakingOuts(this);
    this.fucking = new AcuteNormalFucking(this);
    this.sm = new AcuteNormalSm(this);
    this.orgy = new AcuteNormalOrgy(this);
  }
}

class AcuteSleepCommunications extends EroSleepCommunications {
  async kiss(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.kiss(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.sleep_kiss(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async french_kiss(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.french_kiss(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.sleep_french_kiss(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }
}

class AcuteSleepLines extends SleepCommandLines {
  constructor(root) {
    super(root, { communications: true });
    this.communications = new AcuteSleepCommunications(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(arg) {
    super(arg, { normal: true, sleep: true });
    this.normal = new AcuteNormalLines(this);
    this.sleep = new AcuteSleepLines(this);
  }
};
