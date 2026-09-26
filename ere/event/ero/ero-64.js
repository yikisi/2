const era = require('#/era-electron');

const { sys_get_base } = require('#/system/ero/sys-calc-distance');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const CustomizedEro = require('#/event/ero/ero-common');
const { i_pama_yandere } = require('#/event/snippets/106400');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroTouch = require('#/data/ero/ero-touch');
const { mark_enum } = require('#/data/ero/mark-const');
const { base_enum, motion_enum, part_enum } = require('#/data/ero/part-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

function kojo() {
  return i18n().kojo[64].ero;
}

function dict() {
  return {
    ...generate_dictionary(64, { call: true, teen: !0 }),
    half_life: +i_pama_yandere(),
  };
}

class PamaNormalCommunications extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg || defender.sex_code === 1) {
      return await super.kiss(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['kiss']({
      ...dict(),
      edu_first: !edu_marks.kiss,
    });
    edu_marks.kiss = 1;
  }

  async lure(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.lure(attacker, defender, hook);
    }
    hook.arg = EroNormalCommunications.check_lure_success(
      attacker.id,
      defender.id,
    );
    if (hook.arg || era.get(`tcvar:${defender.id}:发情`)) {
      await kojo()['lure'](dict());
    }
  }
}

class PamaNormalMakingOuts extends EroNormalMakingOuts {
  async pet_breast(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.pet_breast(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['pet_breast']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.pet_breast,
    });
    edu_marks.pet_breast = 1;
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['prepare_anal']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.prepare_anal,
    });
    edu_marks.prepare_anal = 1;
  }

  async cunnilingus(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.cunnilingus(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['cunnilingus']({
      ...dict(),
      edu_first: !edu_marks.cunnilingus,
    });
    edu_marks.cunnilingus = 1;
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['ask_blow_job']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.ask_blow_job,
    });
    edu_marks.ask_blow_job = 1;
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await kojo()['ask_deep_blow_job']({
      ...dict(),
      is_first: hook.arg,
    });
  }

  async sixty_nine(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.sixty_nine(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['sixty_nine']({
      ...dict(),
      edu_first: !edu_marks.sixty_nine,
    });
    edu_marks.sixty_nine = 1;
  }

  async ask_foot_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_foot_job(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['ask_foot_job']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.ask_foot_job,
    });
    edu_marks.ask_foot_job = 1;
  }
}

class PamaNormalFucking extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.missionary(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['missionary']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.missionary,
    });
    edu_marks.missionary = 1;
  }

  async doggy_style(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.doggy_style(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['doggy_style']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.doggy_style,
    });
    edu_marks.doggy_style = 1;
  }

  async sitting(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.sitting(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['sitting']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.sitting,
    });
    edu_marks.sitting = 1;
  }

  async hug_standing(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hug_standing(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['hug_standing']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.hug_standing,
    });
    edu_marks.hug_standing = 1;
  }

  async ask_cowgirl(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_cowgirl(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['ask_cowgirl']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.ask_cowgirl,
    });
    edu_marks.ask_cowgirl = 1;
  }
}

class PamaNormalSm extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.hit_anal(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    await kojo()['hit_anal']({
      ...dict(),
      is_first: hook.arg,
      edu_first: !edu_marks.hit_anal,
    });
    edu_marks.hit_anal = 1;
  }
}

class PamaNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      making_outs: true,
      fucking: true,
      sm: true,
    });
    this.communications = new PamaNormalCommunications(this);
    this.making_outs = new PamaNormalMakingOuts(this);
    this.fucking = new PamaNormalFucking(this);
    this.sm = new PamaNormalSm(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(cid) {
    super(cid, { normal: true });
    this.normal = new PamaNormalLines(this);
  }

  async ero_start(handle_ero_act) {
    const edu_marks = new PamaEduMarks();
    if (edu_marks.movie_job < 8) {
      edu_marks.movie_job = 0;
    }
    const pama = get_chara_talk(this.id);
    if (
      !era.get(`exp:${this.id}:性爱次数`) &&
      sys_check_awake(0) &&
      sys_check_awake(this.id) &&
      era.get('tflag:强奸') === -1 &&
      era.get(`status:${this.id}:超马跳Z`) === 0 &&
      era.get(`love:${this.id}`) >= 50 &&
      pama.sex_code !== 1 &&
      era.get('cflag:0:性别') > 0
    ) {
      await print_title_with_kojo(kojo(), 'cannot_look_back', pama, dict());
      return;
    }
    if (!sys_check_awake(this.id) || era.get(`status:${this.id}:超马跳Z`) > 0) {
      return super.ero_start(handle_ero_act);
    }
    await kojo()['ero_start'](dict());
  }

  async raping_start(supporter) {
    if (
      supporter > 0 ||
      era.get('cflag:0:性别') === 0 ||
      era.get(`cflag:${this.id}:性别`) === 1
    ) {
      return await super.raping_start(supporter);
    }
    await kojo()['raping_start'](dict());
  }

  async join_3p(l) {
    return (await kojo()['join_3p'](dict()))[0] === 1;
  }

  async join_3p_accept(l) {
    await kojo()['join_3p_accept'](dict());
  }

  async join_3p_reject(l) {
    await kojo()['join_3p_reject'](dict());
  }

  async join_3p_force(l) {
    await kojo()['join_3p_force'](dict());
  }

  async get_mark(level, type, _new) {
    if (!sys_check_awake(this.id)) {
      return await super.get_mark(level, type, _new);
    }
    switch (type) {
      case mark_enum.pleasure:
      case mark_enum.meek:
        await kojo()[`mark_${Object.keys(mark_enum)[type]}`]({
          ...generate_dictionary(this.id),
          level,
        });
        break;
      default:
        return await super.get_mark(level, type, _new);
    }
  }

  async report_pregnant_between_weeks(pama, me, callname, hook, extra_flag) {
    if (extra_flag.mother_id !== this.id) {
      return await super.report_pregnant_between_weeks(
        pama,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    if (era.get(`mark:${this.id}:淫纹`) === 3) {
      await print_title_with_kojo(
        kojo(),
        'report_preg_with_inmon',
        pama,
        generate_dictionary(this.id, { call: !0 }),
      );
    } else if (era.get(`love:${this.id}`) >= 90) {
      await print_title_with_kojo(
        kojo(),
        'report_preg_with_love',
        pama,
        generate_dictionary(this.id),
      );
    } else if (
      LifeEventMarks.get_marks(extra_flag.mother_id).unexpected_pregnant !==
      unexpected_pregnant_enum.father_sleep
    ) {
      await print_title_with_kojo(
        kojo(),
        'report_preg_after_raped_in_sleep',
        pama,
        generate_dictionary(this.id, { call: !0 }),
      );
    } else {
      return await super.report_pregnant_between_weeks(
        pama,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
  }

  async orgasm(pama, me, callname) {
    if (era.get(`love:${this.id}`) < 50) {
      return;
    }
    const last_action = era.get('tflag:前回行动');
    const master = era.get('tflag:主导权');
    const base = sys_get_base(0, this.id);
    if (era.get('nowex:0:阴茎高潮') > 0) {
      if (era.get(`nowex:${this.id}:饮精量`) > 0) {
        if (
          (master === 0 && last_action === ero_hooks.ask_blow_job) ||
          (master === this.id && last_action === ero_hooks.blow_job)
        ) {
          await kojo()['get_semen_blow_job'](dict());
        } else if (
          (master === 0 && last_action === ero_hooks.ask_deep_blow_job) ||
          (master === this.id && last_action === ero_hooks.deep_blow_job)
        ) {
          await kojo()['get_semen_deep_blow_job'](dict());
        } else if (base === base_enum.diff && pama.sex_code === 0) {
          await kojo()['get_semen_sixty_nine'](dict());
        }
      } else if (
        era.get('nowex:0:射精量') > 0 &&
        new EroTouch(0, part_enum.penis).check(this.id, part_enum.foot)
      ) {
        await kojo()['get_semen_foot_job'](dict());
      } else if (era.get(`nowex:${this.id}:膣内精液`) > 0) {
        switch (base) {
          case base_enum.same:
          case base_enum.s_tri:
            switch (era.get(`tcvar:${this.id}:体位`)) {
              case motion_enum.lie:
              case motion_enum.rev:
                await kojo()['get_semen_missionary'](dict());
                break;
              case motion_enum.sit:
                await kojo()['get_semen_sitting'](dict());
            }
            break;
          case base_enum.b_same:
          case base_enum.b_tri:
            await kojo()['get_semen_doggy_style'](dict());
        }
      }
    }
  }
};
