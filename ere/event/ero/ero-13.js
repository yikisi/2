const era = require('#/era-electron');

const { sys_get_base } = require('#/system/ero/sys-calc-distance');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const CustomizedEro = require('#/event/ero/ero-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const EroTouch = require('#/data/ero/ero-touch');
const { base_enum, part_enum } = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');
const { get_breast_cup } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

function kojo() {
  return i18n().kojo[13].ero;
}

function dict() {
  return generate_dictionary(13, { call: !0 });
}

class NormalCom extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.kiss(attacker, defender, hook);
    }
    await kojo()['kiss'](dict());
  }

  async french_kiss(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.french_kiss(attacker, defender, hook);
    }
    await kojo()['french_kiss'](dict());
  }
}

class NormalMakingOuts extends EroNormalMakingOuts {
  async pet_breast(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg || defender.sex_code === 1) {
      return await super.pet_breast(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.pet_breast) {
      edu_marks.pet_breast = 1;
      await kojo()['pet_breast_first'](dict());
      return;
    }
    await kojo()['pet_breast'](dict());
  }

  async pet_nipple(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg || defender.sex_code === 1) {
      return await super.pet_nipple(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.pet_nipple) {
      edu_marks.pet_nipple = 1;
      await kojo()['pet_nipple_first'](dict());
      return;
    }
    await kojo()['pet_nipple'](dict());
  }

  async pet_clitoris(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.pet_clitoris) {
      edu_marks.pet_clitoris = 1;
      await kojo()['pet_clitoris_first'](dict());
      return;
    }
    await kojo()['pet_clitoris'](dict());
  }

  async prepare_virgin(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.prepare_virgin(attacker, defender, hook);
    }
    const life_marks = new McqueenLifeMarks();
    if (!life_marks.prepare_virgin) {
      life_marks.prepare_virgin = 1;
      await kojo()['prepare_virgin_first'](dict());
      return;
    }
    await kojo()['prepare_virgin'](dict());
  }

  async finger_fuck(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    const life_marks = new McqueenLifeMarks();
    if (!life_marks.finger_fuck) {
      life_marks.finger_fuck = 1;
      await kojo()['finger_fuck_first'](dict());
      return;
    }
    await kojo()['finger_fuck'](dict());
  }

  async cunnilingus(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.cunnilingus) {
      edu_marks.cunnilingus = 1;
      await kojo()['cunnilingus_first'](dict());
      return;
    }
    await kojo()['cunnilingus'](dict());
  }

  async ask_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    await kojo()['ask_blow_job'](dict());
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
    }
    await kojo()['ask_hand_and_blow_job'](dict());
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await kojo()['ask_deep_blow_job'](dict());
  }

  async ask_tit_job(atk, def, hook) {
    if (atk.id !== 0 || !hook.arg || get_breast_cup(this.id, true) >= 'B') {
      return await super.ask_tit_job(atk, def, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.ask_tit_job) {
      await kojo()['ask_tit_job_first'](dict());
      edu_marks.ask_tit_job = 1;
      return;
    }
    await kojo()['ask_tit_job'](dict());
  }
}

class NormalFucking extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.missionary(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:处女`) !== vp_status_enum.no) {
      await kojo()['lose_virginity'](dict());
    } else {
      await kojo()['missionary'](dict());
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.doggy_style(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:处女`) !== vp_status_enum.no) {
      await kojo()['lose_virginity'](dict());
    } else {
      await kojo()['doggy_style'](dict());
    }
  }

  async sitting(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.sitting(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:处女`) !== vp_status_enum.no) {
      await kojo()['lose_virginity'](dict());
    } else {
      await kojo()['sitting'](dict());
    }
  }

  async hug_sitting(attacker, defender, hook) {
    if (
      attacker.id !== 0 ||
      era.get(`talent:${this.id}:处女`) === vp_status_enum.no
    ) {
      return await super.hug_sitting(attacker, defender, hook);
    }
    await kojo()['lose_virginity'](dict());
  }

  async standing(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.standing(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:处女`) !== vp_status_enum.no) {
      await kojo()['lose_virginity'](dict());
    } else {
      await kojo()['standing'](dict());
    }
  }

  async hug_standing(attacker, defender, hook) {
    if (
      attacker.id !== 0 ||
      era.get(`talent:${this.id}:处女`) === vp_status_enum.no
    ) {
      return await super.hug_standing(attacker, defender, hook);
    }
    await kojo()['lose_virginity'](dict());
  }
}

class NormalSm extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.hit_anal(attacker, defender, hook);
    }
    const penis = new EroTouch(0, part_enum.penis);
    const base = sys_get_base(0, this.id);
    if (
      penis.owner !== this.id ||
      penis.part !== part_enum.virgin ||
      (base !== base_enum.b_same && base !== base_enum.b_tri)
    ) {
      return await super.hit_anal(attacker, defender, hook);
    }
    await kojo()['hit_anal_when_doggy_style'](dict());
  }
}

class McqueenNormal extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      making_outs: true,
      fucking: true,
      sm: true,
    });
    this.communications = new NormalCom(this);
    this.making_outs = new NormalMakingOuts(this);
    this.fucking = new NormalFucking(this);
    this.sm = new NormalSm(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(cid) {
    super(cid, { normal: true });
    this.normal = new McqueenNormal(this);
  }
};
