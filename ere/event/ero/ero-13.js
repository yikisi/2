/**
 * @file 目白麦昆 - 调教
 * @author 伊兰
 */
const era = require('#/era-electron');

const { sys_get_motion } = require('#/system/ero/sys-calc-distance');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const kojo = require('#/event/ero/ero-13.kojo');
const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroTouch = require('#/data/ero/ero-touch');
const { base_enum, part_enum } = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');

function dict() {
  const o = {};
  const mcqueen = get_chara_talk(13);
  o['她'] = mcqueen.sex;
  o['训练员'] = era.get('callname:0:-2');
  o['代表色'] = mcqueen.color;
  o['称呼'] = sys_get_callname(this.id, 0);
  return o;
}

class NormalCom extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.kiss(attacker, defender, hook);
    }
    await kojo['接吻'](dict());
  }

  async french_kiss(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.french_kiss(attacker, defender, hook);
    }
    await kojo['舌吻'](dict());
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
      await kojo['爱抚胸部——育成首次'](dict());
      return;
    }
    await kojo['爱抚胸部'](dict());
  }

  async pet_nipple(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg || defender.sex_code === 1) {
      return await super.pet_nipple(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.pet_nipple) {
      edu_marks.pet_nipple = 1;
      await kojo['爱抚乳头——育成首次'](dict());
      return;
    }
    await kojo['爱抚乳头'](dict());
  }

  async pet_clitoris(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.pet_clitoris) {
      edu_marks.pet_clitoris = 1;
      await kojo['爱抚阴核——育成首次'](dict());
      return;
    }
    await kojo['爱抚阴核'](dict());
  }

  async prepare_virgin(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.prepare_virgin(attacker, defender, hook);
    }
    const life_marks = new McqueenLifeMarks();
    if (!life_marks.prepare_virgin) {
      life_marks.prepare_virgin = 1;
      await kojo['张开阴唇——存档初次'](dict());
      return;
    }
    await kojo['张开阴唇'](dict());
  }

  async finger_fuck(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    const life_marks = new McqueenLifeMarks();
    if (!life_marks.finger_fuck) {
      life_marks.finger_fuck = 1;
      await kojo['手指插入——存档初次'](dict());
      return;
    }
    await kojo['手指插入'](dict());
  }

  async cunnilingus(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.cunnilingus) {
      edu_marks.cunnilingus = 1;
      await kojo['舐阴——育成初次'](dict());
      return;
    }
    await kojo['舐阴'](dict());
  }

  async ask_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    await kojo['请求口交'](dict());
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
    }
    await kojo['请求手搓口交'](dict());
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await kojo['请求深喉'](dict());
  }
}

class NormalFucking extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.missionary(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:处女`) !== vp_status_enum.no) {
      await kojo['插入类体位——失去处女'](dict());
    } else {
      await kojo['正常位——未插入时首次点击'](dict());
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.doggy_style(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:处女`) !== vp_status_enum.no) {
      await kojo['插入类体位——失去处女'](dict());
    } else {
      await kojo['后背位——未插入时首次点击'](dict());
    }
  }

  async sitting(attacker, defender, hook) {
    if (
      attacker.id !== 0 ||
      era.get(`talent:${this.id}:处女`) === vp_status_enum.no
    ) {
      return await super.sitting(attacker, defender, hook);
    }
    await kojo['插入类体位——失去处女'](dict());
  }

  async hug_sitting(attacker, defender, hook) {
    if (
      attacker.id !== 0 ||
      era.get(`talent:${this.id}:处女`) === vp_status_enum.no
    ) {
      return await super.hug_sitting(attacker, defender, hook);
    }
    await kojo['插入类体位——失去处女'](dict());
  }

  async standing(attacker, defender, hook) {
    if (
      attacker.id !== 0 ||
      era.get(`talent:${this.id}:处女`) === vp_status_enum.no
    ) {
      return await super.standing(attacker, defender, hook);
    }
    await kojo['插入类体位——失去处女'](dict());
  }

  async hug_standing(attacker, defender, hook) {
    if (
      attacker.id !== 0 ||
      era.get(`talent:${this.id}:处女`) === vp_status_enum.no
    ) {
      return await super.hug_standing(attacker, defender, hook);
    }
    await kojo['插入类体位——失去处女'](dict());
  }
}

class NormalSm extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.hit_anal(attacker, defender, hook);
    }
    const penis = new EroTouch(0, part_enum.penis);
    const motion = sys_get_motion(0, 13);
    if (
      penis.owner !== 13 ||
      penis.part !== part_enum.virgin ||
      (motion !== base_enum.b_same && motion !== base_enum.b_tri)
    ) {
      return await super.hit_anal(attacker, defender, hook);
    }
    await kojo['后背位拍屁股'](dict());
  }
}

/**
 * @file 目白麦昆 - 调教
 * @author 伊兰
 */
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
