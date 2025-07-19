const era = require('#/era-electron');

const { sys_get_motion } = require('#/system/ero/sys-calc-distance');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const kojo = require('#/event/ero/ero-13.kojo');
const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroTouch = require('#/data/ero/ero-touch');
const { base_enum, part_enum } = require('#/data/ero/part-const');

function dict() {
  const o = {};
  const mcqueen = get_chara_talk(13);
  o['她'] = mcqueen.sex;
  o['训练员'] = era.get('callname:0:-2');
  o['代表色'] = mcqueen.color;
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

class NormalSm extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.hit_anal(attacker, defender, hook);
    }
    const my_penis = new EroTouch(0, part_enum.penis);
    const motion = sys_get_motion(0, 13);
    if (
      my_penis.owner !== 13 ||
      my_penis.part !== part_enum.virgin ||
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
    super(root, { communications: true, making_outs: true, sm: true });
    this.communications = new NormalCom(this);
    this.making_outs = new NormalMakingOuts(this);
    this.sm = new NormalSm(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(cid) {
    super(cid, { normal: true });
    this.normal = new McqueenNormal(this);
  }
};
