const era = require('#/era-electron');

const { sys_get_base } = require('#/system/ero/sys-calc-distance');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const EroSleepFucking = require('#/event/ero/common/sleep/fucking');
const SleepCommandLines = require('#/event/ero/common/sleep/sleep-common');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');
const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroTouch = require('#/data/ero/ero-touch');
const { mark_enum } = require('#/data/ero/mark-const');
const { base_enum, motion_enum, part_enum } = require('#/data/ero/part-const');

const { i18n } = require('#/i18n/selector');

const kojo = () => i18n().kojo[56].ero;

class KitaruNormalCommunications extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.kiss(attacker, defender, hook);
    }
    await kojo().kiss(
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
    await kojo().french_kiss(
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
    await kojo().talk(
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
    await kojo().lure(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      (hook.arg = EroNormalCommunications.check_lure_success(
        attacker.id,
        defender.id,
      )),
    );
  }
}

class KitaruNormalMakingOuts extends EroNormalMakingOuts {
  async pet_ear(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pet_ear(attacker, defender, hook);
    }
    await kojo().pet_ear(
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
    await kojo().pull_ear(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async pet_breast(attacker, defender, hook) {
    if (attacker.id === 0) {
      if (new EroTouch(this.id, part_enum.virgin).check(0, part_enum.penis)) {
        await kojo().pet_breast_from_back(
          defender,
          attacker,
          sys_get_colored_callname(attacker.id, defender.id),
        );
      } else {
        await kojo().pet_breast(
          defender,
          attacker,
          sys_get_colored_callname(attacker.id, defender.id),
          hook.arg,
        );
      }
    } else if (defender.sex_code === 1) {
      await kojo().kitaru_pet_breast_first(
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      return await super.pet_breast(attacker, defender, hook);
    }
  }

  async pet_nipple(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pet_nipple(attacker, defender, hook);
    }
    await kojo().pet_nipple(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    await kojo().finger_fuck(defender, attacker);
  }

  async blow_job(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.blow_job(attacker, defender, hook);
    }
    await kojo().blow_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    await kojo().ask_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async force_blow_job(attacker, defender, hook) {
    await kojo().force_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      hook.arg,
    );
  }

  async deep_blow_job(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.deep_blow_job(attacker, defender, hook);
    }
    await kojo().deep_blow_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
      hook.arg,
    );
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await kojo().ask_deep_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_deep_blow_job(attacker, defender, hook);
    }
    await kojo().force_deep_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async hand_job(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.hand_job(attacker, defender, hook);
    }
    await kojo().hand_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    await kojo().ask_hand_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      hook.arg,
    );
  }

  async force_hand_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_hand_job(attacker, defender, hook);
    }
    await kojo().force_hand_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async hand_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.hand_and_blow_job(attacker, defender, hook);
    }
    await kojo().hand_and_blow_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
      hook.arg,
    );
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
    }
    await kojo().ask_hand_and_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async force_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_hand_and_blow_job(attacker, defender, hook);
    }
    await kojo().force_hand_and_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async tit_job(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.tit_job(attacker, defender, hook);
    }
    await kojo().tit_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async ask_tit_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_tit_job(attacker, defender, hook);
    }
    await kojo().ask_tit_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async tit_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.tit_and_blow_job(attacker, defender, hook);
    }
    await kojo().tit_and_blow_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async ask_tit_and_blow_job(attacker, defender, hook) {
    await kojo().ask_tit_and_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      hook.arg,
    );
  }

  async foot_job(attacker, defender, hook) {
    await kojo().foot_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }
}

class KitaruNormalFucking extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.missionary(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().missionary(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.doggy_style(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().doggy_style(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async sitting(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.sitting(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().sitting(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async hug_sitting(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hug_sitting(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().hug_sitting(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async standing(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.standing(attacker, defender, hook);
    }
    await kojo().standing(
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
    await kojo().hug_standing(
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
    if (hook.arg) {
      await kojo().suspended_congress(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async hug_suspended_congress(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hug_suspended_congress(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().hug_suspended_congress(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async ask_cowgirl(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_cowgirl(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().ask_cowgirl(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async ask_stimulate_glans_by_virgin(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_stimulate_glans_by_virgin(
        attacker,
        defender,
        hook,
      );
    }
    if (hook.arg) {
      await kojo().ask_stimulate_glans_by_virgin(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async ask_stimulate_glans_by_anal(attacker, defender, hook) {
    return await this.ask_stimulate_glans_by_virgin(attacker, defender, hook);
  }

  async stimulate_g_spot(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.stimulate_g_spot(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().stimulate_g_spot(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await kojo().common_continue_fucking(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  async ask_fuck(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.ask_fuck(attacker, defender, hook);
    }
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.virgin,
        part_enum.penis,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    if (hook.arg) {
      await kojo().ask_fuck(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await kojo().common_continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  async cowgirl(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.cowgirl(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().cowgirl(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      await kojo().common_continue_fucking(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  async stimulate_glans_by_virgin(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.stimulate_glans_by_virgin(attacker, defender, hook);
    }
    await kojo().stimulate_glans_by_virgin(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async ask_stimulate_g_spot(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.ask_stimulate_g_spot(attacker, defender, hook);
    }
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.virgin,
        part_enum.penis,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    await kojo().ask_stimulate_g_spot(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async ask_stimulate_womb(attacker, defender, hook) {
    await this.ask_stimulate_g_spot(attacker, defender, hook);
  }
}

class KitaruNormalSm extends EroNormalSm {
  async ask_insult(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.ask_insult(attacker, defender, hook);
    }
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        Math.random() < 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
    }
    await kojo().ask_insult(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async ask_hit_anal(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.ask_hit_anal(attacker, defender, hook);
    }
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        Math.random() < 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
    }
    await kojo().ask_hit_anal(
      attacker,
      defender,
      sys_get_colored_callname(defender.id, attacker.id),
      hook.arg,
    );
  }
}

class KitaruNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      making_outs: true,
      fucking: true,
      sm: true,
    });
    this.communications = new KitaruNormalCommunications(this);
    this.making_outs = new KitaruNormalMakingOuts(this);
    this.fucking = new KitaruNormalFucking(this);
    this.sm = new KitaruNormalSm(this);
  }
}

class KitaruSleepFucking extends EroSleepFucking {
  async stimulate_glans_by_virgin(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.stimulate_glans_by_virgin(attacker, defender, hook);
    }
    if (hook.arg) {
      await kojo().stimulate_sleep_glans_by_virgin(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    } else {
      return await this.root.root.normal.stimulate_glans_by_virgin(
        attacker,
        defender,
        hook,
      );
    }
  }
}

class KitaruSleepLines extends SleepCommandLines {
  constructor(root) {
    super(root, { fucking: true });
    this.fucking = new KitaruSleepFucking(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(chara_id) {
    super(chara_id, { normal: true, sleep: true });
    this.normal = new KitaruNormalLines(this);
    this.sleep = new KitaruSleepLines(this);
  }

  async ero_start(h) {
    if (era.get('tflag:强奸') >= 0 || !sys_check_awake(this.id)) {
      return;
    }
    await kojo().ero_start(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async orgasm(kitaru, me, _call) {
    if (era.get('tflag:主导权') === 0) {
      if (
        era.get(`nowex:${this.id}:阴道高潮`) > 0 &&
        era.get('tcvar:0:体位') === motion_enum.stand &&
        era.get(`tcvar:${this.id}:体位`) === motion_enum.stand
      ) {
        switch (sys_get_base(0, this.id)) {
          case base_enum.same:
            await kojo().orgasm_standing(
              get_chara_talk(this.id),
              get_chara_talk(0),
            );
            break;
          case base_enum.b_same:
            await kojo().orgasm_hug_standing(
              get_chara_talk(this.id),
              get_chara_talk(0),
            );
        }
      }
    }
  }

  async get_mark(level, type, _new) {
    if (!sys_check_awake(this.id)) {
      return await super.get_mark(level, type, _new);
    }
    const callname = sys_get_colored_callname(this.id, 0),
      kitaru = get_chara_talk(this.id),
      me = get_chara_talk(0);
    switch (type) {
      case mark_enum.pleasure:
        if (kitaru.sex_code === 1) {
          return await super.get_mark(level, type, _new);
        }
        await kojo().mark_pleasure(kitaru, me, level);
        break;
      case mark_enum.meek:
      case mark_enum.pain:
      case mark_enum.shame:
        await kojo()[`mark_${Object.keys(mark_enum)[type]}`](kitaru, me, level);
        break;
      case mark_enum.hate:
        await kojo().mark_hate(kitaru, me, callname, level);
        break;
      case mark_enum.ero:
        if ((level >= 2 && _new) || kitaru.sex_code === 1) {
          return await super.get_mark(level, type, _new);
        }
        await kojo().mark_ero(kitaru, me, callname, level);
    }
  }
};
