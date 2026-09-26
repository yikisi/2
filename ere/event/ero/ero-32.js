const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { sys_get_base } = require('#/system/ero/sys-calc-distance');
const {
  check_pregnant_unprotect,
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const {
  check_erect,
  check_lubrication,
} = require('#/system/ero/sys-calc-ero-status');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const { set_palam_to_max } = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const CustomizedEro = require('#/event/ero/ero-common');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const EroNormalItems = require('#/event/ero/common/normal/items');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const { mark_enum } = require('#/data/ero/mark-const');
const { base_enum, part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

const { i18n } = require('#/i18n/selector');

const kojo = () => i18n().kojo[32].ero;

class TachyonNormalCommunications extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.kiss(attacker, defender, hook);
    }
    await kojo().kiss(
      attacker,
      defender,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async lure(attacker, defender, hook) {
    if (attacker.id === this.id) {
      await kojo().lure_by_tachyon(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      hook.arg = EroNormalCommunications.check_lure_success(
        attacker.id,
        defender.id,
      );
      await kojo().lure(
        defender,
        attacker,
        sys_get_colored_callname(defender.id, attacker.id),
        sys_get_colored_callname(attacker.id, defender.id),
        hook.arg,
      );
    }
  }
}

class TachyonNormalMakingOuts extends EroNormalMakingOuts {
  async pet_breast(attacker, defender, hook) {
    if (defender.id !== this.id || defender.sex_code === 1) {
      return await super.pet_breast(attacker, defender, hook);
    }
    await kojo().pet_breast(defender, attacker);
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    await kojo().finger_fuck(
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
    await kojo().prepare_virgin(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async pet_anal(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.pet_anal(attacker, defender, hook);
    }
    await kojo().pet_anal(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    await kojo().prepare_anal(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    await kojo().ask_blow_job(defender);
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await kojo().ask_deep_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async force_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.force_blow_job(attacker, defender, hook);
    }
    await kojo().force_blow_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.force_deep_blow_job(attacker, defender, hook);
    }
    await kojo().force_deep_blow_job(
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async blow_job(attacker, defender, hook) {
    if (attacker.id !== this.id) {
      return await super.blow_job(attacker, defender, hook);
    }
    await kojo().blow_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
      hook.arg,
    );
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    await kojo().ask_hand_job(defender);
  }

  async ask_tit_job(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.ask_tit_job(attacker, defender, hook);
    }
    await kojo().ask_tit_job(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async fuck_tit(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.fuck_tit(attacker, defender, hook);
    }
    await kojo().fuck_tit(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async tit_job(attacker, defender, hook) {
    if (attacker.id !== this.id || !hook.arg) {
      return await super.tit_job(attacker, defender, hook);
    }
    await kojo().tit_job(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
      check_erect(0),
    );
  }

  async tit_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== this.id || !hook.arg) {
      return await super.tit_and_blow_job(attacker, defender, hook);
    }
    await kojo().tit_and_blow_job(
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async ask_non_penetrative(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_non_penetrative(attacker, defender, hook);
    }
    await kojo().ask_non_penetrative(defender);
  }

  async non_penetrative(attacker, defender, hook) {
    return super.non_penetrative(defender, attacker, hook);
  }

  async self_finger_fuck(attacker, defender, hook) {
    if (
      attacker.id !== this.id ||
      defender.id !== 0 ||
      defender.sex_code === 0
    ) {
      return await super.self_finger_fuck(attacker, defender, hook);
    }
    await kojo().self_finger_fuck(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
      check_lubrication(attacker.id, part_enum.virgin),
    );
  }
}

class TachyonNormalFucking extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (defender.id !== this.root.id) {
      return await super.missionary(attacker, defender, hook);
    }
    await kojo().missionary(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async doggy_style(attacker, defender, hook) {
    if (defender.id !== this.root.id) {
      return await super.doggy_style(attacker, defender, hook);
    }
    await kojo().doggy_style(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async hug_standing(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.hug_standing(attacker, defender, hook);
    }
    await kojo().hug_standing(defender);
  }

  async stimulate_g_spot(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.stimulate_g_spot(attacker, defender, hook);
    }
    await kojo().stimulate_g_spot(
      defender,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async ask_stimulate_glans_by_virgin(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.ask_stimulate_glans_by_virgin(
        attacker,
        defender,
        hook,
      );
    }
    await kojo().ask_stimulate_glans_by_virgin(defender, attacker);
  }

  async ask_fuck(attacker, defender, hook) {
    if (attacker.id !== this.id || !hook.arg) {
      return await super.ask_fuck(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await kojo().ask_fuck(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        sys_get_colored_callname(defender.id, attacker.id),
      );
    } else {
      await this.missionary(defender, attacker, hook);
    }
  }
}

class TachyonNormalSm extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hit_anal(attacker, defender, hook);
    }
    await kojo().hit_anal(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
      hook.arg,
    );
  }

  async hit_face(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hit_face(attacker, defender, hook);
    }
    await kojo().hit_face(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }
}

class TachyonNormalItems extends EroNormalItems {
  async use_item(attacker, defender, hook, extra_flag) {
    if (
      attacker.id === 0 &&
      defender.id === this.id &&
      extra_flag.stay === void 0 &&
      extra_flag.item === item_enum.love_eggs &&
      extra_flag.part === part_enum.anal
    ) {
      await kojo().use_love_eggs_in_anal(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
    return await super.use_item(attacker, defender, hook, extra_flag);
  }
}

class TachyonNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      fucking: true,
      items: true,
      making_outs: true,
      sm: true,
    });
    this.communications = new TachyonNormalCommunications(this);
    this.making_outs = new TachyonNormalMakingOuts(this);
    this.fucking = new TachyonNormalFucking(this);
    this.sm = new TachyonNormalSm(this);
    this.items = new TachyonNormalItems(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(root) {
    super(root, { normal: true });
    this.normal = new TachyonNormalLines(this);
  }

  async ero_start(h) {
    const callname = sys_get_colored_callname(this.id, 0);
    const life_marks = new TachyonLifeMarks();
    const me = get_chara_talk(0);
    const tachyon = get_chara_talk(this.id);
    if (
      sys_check_awake(0) &&
      sys_check_awake(this.id) &&
      me.sex_code > 0 &&
      tachyon.sex_code !== 1
    ) {
      if (era.getCharactersInTrain().length === 2) {
        if (
          check_pregnant_unprotect(0) &&
          check_pregnant_unprotect(this.id) &&
          era.get(`love:${this.id}`) >= 75 &&
          life_marks.reward < 3 &&
          era.get(`cflag:${this.id}:位置`) === 0
        ) {
          life_marks.reward++;
          switch (life_marks.reward) {
            case 1:
              await print_title_with_kojo(
                kojo(),
                'ero_start_reward1',
                tachyon,
                me,
                callname,
              );
              set_stain(0, part_enum.penis, stain_enum.semen);
              set_stain(this.id, part_enum.virgin, stain_enum.secretion);
              await quick_make_love(
                new EroParticipant(this.id, part_enum.hand),
                new EroParticipant(this.id, part_enum.virgin),
                false,
              );
              await quick_make_love(
                new EroParticipant(0, part_enum.penis),
                new EroParticipant(this.id, part_enum.body),
                false,
              );
              await quick_make_love(
                new EroParticipant(this.id, part_enum.hit),
                new EroParticipant(this.id, part_enum.mouth, -0.5),
                false,
              );
              await quick_make_love(
                new EroParticipant(this.id, part_enum.mouth),
                new EroParticipant(0, part_enum.penis),
                false,
              );
              set_palam_to_max(0, part_enum.penis);
              set_palam_to_max(this.id, part_enum.mouth);
              await quick_make_love(
                new EroParticipant(this.id, part_enum.mouth),
                new EroParticipant(0, part_enum.penis),
                false,
              );
              break;
            case 2:
              if (
                get_expansion(get_penis_size(0), this.id, part_enum.virgin) > 1
              ) {
                life_marks.reward--;
                return;
              }
              await print_title_with_kojo(
                kojo(),
                'ero_start_reward2',
                tachyon,
                me,
                callname,
              );
              set_stain(0, part_enum.penis, stain_enum.semen);
              set_stain(this.id, part_enum.virgin, stain_enum.secretion);
              await quick_make_love(
                new EroParticipant(0, part_enum.penis),
                new EroParticipant(this.id, part_enum.virgin),
                false,
              );
              await quick_make_love(
                new EroParticipant(0, part_enum.hit),
                new EroParticipant(this.id, part_enum.anal),
                false,
              );
              await quick_make_love(
                new EroParticipant(0, part_enum.hand),
                new EroParticipant(this.id, part_enum.breast),
                false,
              );
              set_palam_to_max(0, part_enum.penis);
              set_palam_to_max(this.id, part_enum.virgin);
              await quick_make_love(
                new EroParticipant(0, part_enum.penis),
                new EroParticipant(this.id, part_enum.virgin),
                false,
              );
              await quick_make_love(
                new EroParticipant(this.id, part_enum.mouth),
                new EroParticipant(0, part_enum.penis),
                false,
              );
              break;
            case 3:
              if (
                get_expansion(get_penis_size(0), this.id, part_enum.anal) > 1
              ) {
                life_marks.reward--;
                return;
              }
              await print_title_with_kojo(
                kojo(),
                'ero_start_reward3',
                tachyon,
                me,
                callname,
              );
              set_stain(0, part_enum.penis, stain_enum.semen);
              set_stain(this.id, part_enum.anal, stain_enum.anal);
              await quick_make_love(
                new EroParticipant(0, part_enum.penis),
                new EroParticipant(this.id, part_enum.anal),
                false,
              );
              await quick_make_love(
                new EroParticipant(0, part_enum.hand),
                new EroParticipant(this.id, part_enum.anal),
                false,
              );
              set_palam_to_max(0, part_enum.penis);
              set_palam_to_max(this.id, part_enum.anal);
              if (tachyon.sex_code === 0) {
                set_palam_to_max(this.id, part_enum.clitoris);
              }
              await quick_make_love(
                new EroParticipant(0, part_enum.penis),
                new EroParticipant(this.id, part_enum.anal),
                false,
              );
          }
        } else if (sys_check_cuckold(this.id)) {
          await kojo().ero_start_cuckold(
            tachyon,
            callname,
            sys_get_colored_callname(this.id, 25),
          );
        }
      } else if (
        era.getCharactersInTrain().includes(25) &&
        sys_check_cuckold(25)
      ) {
        await kojo().ero_start_cuckold_coffee(
          tachyon,
          callname,
          sys_get_colored_callname(this.id, 25),
        );
      }
    }
  }

  async ero_end(h) {
    if (
      era.get('flag:角色性别') !== 1 &&
      era.get('cflag:0:性别') > 0 &&
      sys_check_awake(this.id) &&
      era.getCharactersInTrain().includes(25) &&
      sys_check_awake(25) &&
      sys_check_cuckold(25)
    ) {
      await kojo().ero_end_cuckold_coffee(
        get_chara_talk(this.id),
        sys_get_colored_callname(this.id, 0),
      );
    }
  }

  async orgasm(tachyon, me, callname) {
    callname = sys_get_colored_callname(this.id, 0);
    const penis_touched_part = era.get('tcvar:0:阴茎接触部位');
    const base = sys_get_base(0, this.id);
    if (
      sys_check_awake(this.id) &&
      era.get('tflag:强奸') !== 0 &&
      penis_touched_part.owner === this.id
    ) {
      const last_action = era.get('tflag:前回行动'),
        other_action = era.get('tflag:对手行动'),
        master = era.get('tflag:主导权');
      if (
        penis_touched_part.part === part_enum.mouth &&
        era.get('nowex:0:阴茎高潮') > 0 &&
        era.get(`nowex:${this.id}:饮精量`) > 0
      ) {
        if (
          (master === 0 && last_action === ero_hooks.ask_tit_and_blow_job) ||
          (master === this.id && other_action === ero_hooks.tit_and_blow_job)
        ) {
          await kojo().cum_in_mouth_tr_tit(tachyon, me, callname);
        } else if (
          master === 0 &&
          last_action === ero_hooks.force_deep_blow_job
        ) {
          await kojo().cum_in_throat_force(tachyon, me);
        } else if (
          (master !== 0 || last_action !== ero_hooks.ask_deep_blow_job) &&
          (master !== this.id || other_action !== ero_hooks.deep_blow_job)
        ) {
          await kojo().cum_in_throat(tachyon, me, callname);
        }
      } else if (
        penis_touched_part.part === part_enum.breast &&
        era.get('nowex:0:阴茎高潮') > 0
      ) {
        await kojo().cum_in_tit(tachyon, me, callname);
      } else if (
        penis_touched_part.part === part_enum.clitoris &&
        era.get(`nowex:${this.id}:外阴高潮`) +
          era.get(`nowex:${this.id}:阴道高潮`) >
          0
      ) {
        await kojo().orgasm_non_penetrative(tachyon, callname);
      } else if (
        penis_touched_part.part === part_enum.virgin &&
        era.get('nowex:0:阴茎高潮') > 0 &&
        era.get(`nowex:${this.id}:膣内精液`) > 0 &&
        !master &&
        era.get('tcvar:0:上下') > era.get(`tcvar:${this.id}:上下`)
      ) {
        switch (base) {
          case base_enum.same:
          case base_enum.s_tri:
            await kojo().cum_in_missionary(tachyon, me);
            break;
          case base_enum.b_same:
          case base_enum.b_tri:
            await kojo().cum_in_back(tachyon);
        }
      } else if (
        penis_touched_part.part === part_enum.anal &&
        era.get('nowex:0:阴茎高潮') > 0 &&
        era.get(`nowex:${this.id}:肠内精液`) > 0 &&
        !master &&
        era.get('tcvar:0:上下') > era.get(`tcvar:${this.id}:上下`) &&
        (base === base_enum.same || base === base_enum.s_tri)
      ) {
        await kojo().cum_in_anal_missionary(tachyon, me);
      }
    }
  }

  async get_mark(level, type, _new) {
    if (!sys_check_awake(this.id) || type === mark_enum.ero) {
      return await super.get_mark(level, type, _new);
    }
    const callname = sys_get_colored_callname(this.id, 0);
    const love = era.get(`love:${this.id}`);
    const tachyon = get_chara_talk(this.id);
    switch (type) {
      case mark_enum.meek:
        if (level === 3) {
          get_custom_mec(this.id).set_callname();
        }
      // eslint-disable-next-line no-fallthrough
      case mark_enum.pleasure:
      case mark_enum.pain:
      case mark_enum.shame:
        await kojo()[`mark_${Object.keys(mark_enum)[type]}`](
          tachyon,
          callname,
          level,
          love,
        );
        break;
      case mark_enum.hate:
        await kojo().mark_hate(
          tachyon,
          get_chara_talk(0),
          callname,
          level,
          love,
        );
    }
  }
};
