const era = require('#/era-electron');

const { sys_check_distance } = require('#/system/ero/sys-calc-distance');
const {
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');

const EroTouch = require('#/data/ero/ero-touch');
const { item_enum } = require('#/data/ero/item-const');
const { lust_palam_border } = require('#/data/ero/orgasm-const');
const {
  part2jid,
  part_enum,
  part_talents,
  part_touch,
} = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { get_breast_cup } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

class EroHookTag {
  /** @type {(number|function(number,number):boolean)[]} */
  attacker_tags;
  /** @type {(number|function(number,number):boolean)[]} */
  defender_tags;
  /** @type {number} */
  condition;

  static condition_type = { no: 0, active: 1, in_active: 2 };
  static default_tags = new EroHookTag(
    [],
    [],
    EroHookTag.condition_type.active,
  );

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static ask_blow_job_check(cid, oid) {
    const ctouch = era.get(`tcvar:${cid}:阴茎接触部位`);
    const otouch = era.get(`tcvar:${oid}:口腔接触部位`);
    return (
      era.get('tflag:主导权') === cid ||
      (ctouch === -1 &&
        (otouch === -1 || otouch.item === item_enum.gag) &&
        sys_check_distance(cid, oid, {
          a: part_enum.penis,
          d: part_enum.mouth,
        })) ||
      (ctouch.owner === oid && ctouch.part === part_enum.mouth)
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static bite_nipple_check(cid, oid) {
    const touch = new EroTouch(cid, part_enum.breast);
    return touch.owner === oid && touch.part === part_enum.mouth;
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static blow_job_check(cid, oid) {
    const touch = era.get(`tcvar:${cid}:口腔接触部位`);
    return (
      (touch.owner === oid && touch.part === part_enum.penis) ||
      touch.item === item_enum.gag
    );
  }

  /**
   * @param {number} cpart
   * @returns {function(number):boolean}
   */
  static generate_self_talent_check(cpart) {
    return (cid) => {
      const pname = i18n('zh-CN').tb_param[part2jid[cpart]];
      return (
        !cid ||
        era.get(`talent:${cid}:${part_talents[cpart]}`) === 2 ||
        era.get(`palam:${cid}:${pname}快感`) >=
          era.get(`tcvar:${cid}:${pname}快感上限`) * lust_palam_border
      );
    };
  }

  /**
   * @param {number} cpart
   * @returns {function(number):boolean}
   */
  static generate_self_touch_check(cpart) {
    return (cid) => {
      const touch = era.get(`tcvar:${cid}:手部接触部位`);
      const otouch = era.get(`tcvar:${cid}:${part_touch[cpart]}接触部位`);
      return (
        era.get('tflag:主导权') === cid ||
        ((touch === -1 || touch.owner === cid) &&
          (otouch === -1 ||
            (otouch.owner === cid && otouch.part !== part_enum.item)))
      );
    };
  }

  /**
   * @param {number} cpart
   * @param {number} opart
   * @returns {function(number,number):boolean}
   */
  static generate_touch_check(cpart, opart) {
    return (cid, oid) => {
      const touch = era.get(`tcvar:${cid}:${part_touch[cpart]}接触部位`);
      return (
        era.get('tflag:主导权') === cid ||
        (touch === -1 &&
          era.get(`tcvar:${oid}:${part_touch[opart]}接触部位`) === -1 &&
          sys_check_distance(cid, oid, { a: cpart, d: opart })) ||
        (touch.owner === oid && touch.part === opart)
      );
    };
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static hand_and_blow_job_check(cid, oid) {
    const touch = era.get(`tcvar:${oid}:阴茎接触部位`);
    return (
      touch.owner === cid &&
      (touch.part === part_enum.mouth || touch.part === part_enum.hand)
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static hand_touch_check_for_body(cid, oid) {
    const touch = era.get(`tcvar:${cid}:手部接触部位`);
    return (
      era.get('tflag:主导权') === cid ||
      touch === -1 ||
      (touch.owner === oid && touch.part === part_enum.body)
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static npc_anal_sex_check(cid, oid) {
    if (!cid) {
      return true;
    }
    if (era.get(`status:${cid}:超马跳Z`) > 0) {
      return true;
    }
    if (era.get(`ex:${cid}:肛门撕裂`)) {
      return false;
    }
    let upper_border = 1;
    if (!era.get(`exp:${cid}:肛交次数`)) {
      if (
        era.get(`talent:${cid}:淫臀`) !== 2 &&
        !era.get(`talent:${cid}:淫乱`)
      ) {
        upper_border = 0;
      }
      upper_border += Math.min(era.get(`exp:${cid}:肛门高潮次数`) / 5, 2);
    }
    upper_border += Math.min(era.get(`ex:${cid}:肛门高潮`) / 2, 2);
    return (
      get_expansion(get_penis_size(oid), cid, part_enum.anal) <= upper_border
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static npc_virgin_sex_check(cid, oid) {
    if (!cid) {
      return true;
    }
    if (era.get(`status:${cid}:超马跳Z`) > 0) {
      return true;
    }
    if (era.get(`ex:${cid}:阴道撕裂`)) {
      return false;
    }
    const virgin_state = era.get(`talent:${cid}:处女`);
    let upper_border = 1;
    if (
      virgin_state === vp_status_enum.yes ||
      virgin_state === vp_status_enum.dont_know
    ) {
      if (
        !era.get(`talent:${cid}:淫乱`) &&
        era.get(`talent:${cid}:淫壶`) !== 2
      ) {
        upper_border = 0;
      }
      upper_border += Math.min(era.get(`exp:${cid}:阴道高潮次数`) / 5, 2);
    }
    upper_border += Math.min(era.get(`ex:${cid}:阴道高潮`) / 2, 2);
    return (
      get_expansion(get_penis_size(oid), cid, part_enum.virgin) <= upper_border
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static penis_in_anal_check(cid, oid) {
    const touch = era.get(`tcvar:${cid}:肛门接触部位`);
    return touch.owner === oid && touch.part === part_enum.penis;
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static penis_in_virgin_check(cid, oid) {
    const touch = era.get(`tcvar:${cid}:阴道接触部位`);
    return touch.owner === oid && touch.part === part_enum.penis;
  }

  /**
   * @param {number} cid
   * @returns {boolean}
   */
  static speak_check(cid) {
    return (
      era.get('tflag:主导权') === cid ||
      era.get(`tcvar:${cid}:口腔接触部位`) === -1
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static tit_and_blow_job_check(cid, oid) {
    const touch = era.get(`tcvar:${oid}:阴茎接触部位`);
    return (
      touch.owner === cid &&
      (touch.part === part_enum.mouth || touch.part === part_enum.breast) &&
      get_breast_cup(cid, true).charCodeAt(0) >= 'C'.charCodeAt(0) &&
      get_penis_size(oid) >= 3
    );
  }

  /**
   * @param {(number|function(number,number):boolean)[]} attacker_tags
   * @param {(number|function(number,number):boolean)[]} defender_tags
   * @param {number} condition
   */
  constructor(
    attacker_tags,
    defender_tags,
    condition = EroHookTag.condition_type.active,
  ) {
    this.attacker_tags = attacker_tags.filter((e, i, l) => l.indexOf(e) === i);
    this.defender_tags = defender_tags.filter((e, i, l) => l.indexOf(e) === i);
    this.condition = condition;
  }
}

module.exports = EroHookTag;
