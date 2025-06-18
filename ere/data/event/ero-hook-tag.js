const era = require('#/era-electron');

const {
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');

const { item_enum } = require('#/data/ero/item-const');
const { lust_palam_border } = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  part_talents,
  part_touch,
} = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { get_breast_cup } = require('#/data/info-generator');

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
    const chara_touch = era.get(`tcvar:${cid}:阴茎接触部位`),
      other_touch = era.get(`tcvar:${oid}:口腔接触部位`);
    return (
      era.get('tflag:主导权') === cid ||
      (chara_touch === -1 &&
        (other_touch === -1 || other_touch.item === item_enum.gag)) ||
      (chara_touch.owner === oid && chara_touch.part === part_enum.mouth)
    );
  }

  /**
   * @param {number} cid
   * @param {number} oid
   * @returns {boolean}
   */
  static bite_nipple_check(cid, oid) {
    const touch = era.get(`tcvar:${cid}:胸部接触部位`);
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
   * @param {number} chara_part
   * @returns {function(number):boolean}
   */
  static generate_self_talent_check(chara_part) {
    return (chara_id) => {
      return (
        !chara_id ||
        era.get(`talent:${chara_id}:${part_talents[chara_part]}`) === 2 ||
        era.get(`palam:${chara_id}:${part_names[chara_part]}快感`) >=
          era.get(`tcvar:${chara_id}:${part_names[chara_part]}快感上限`) *
            lust_palam_border
      );
    };
  }

  /**
   * @param {number} chara_part
   * @returns {function(number):boolean}
   */
  static generate_self_touch_check(chara_part) {
    return (chara_id) => {
      const touch = era.get(`tcvar:${chara_id}:手部接触部位`),
        other_part_touch = era.get(
          `tcvar:${chara_id}:${part_touch[chara_part]}接触部位`,
        );
      return (
        era.get('tflag:主导权') === chara_id ||
        ((touch === -1 || touch.owner === chara_id) &&
          (other_part_touch === -1 ||
            (other_part_touch.owner === chara_id &&
              other_part_touch.part !== part_enum.item)))
      );
    };
  }

  /**
   * @param {number} chara_part
   * @param {number} other_part
   * @returns {function(number,number):boolean}
   */
  static generate_touch_check(chara_part, other_part) {
    return (chara_id, other_id) => {
      const touch = era.get(
        `tcvar:${chara_id}:${part_touch[chara_part]}接触部位`,
      );
      return (
        era.get('tflag:主导权') === chara_id ||
        (touch === -1 &&
          era.get(`tcvar:${other_id}:${part_touch[other_part]}接触部位`) ===
            -1) ||
        (touch.owner === other_id && touch.part === other_part)
      );
    };
  }

  /**
   * @param {number} chara_id
   * @param {number} other_id
   * @returns {boolean}
   */
  static hand_and_blow_job_check(chara_id, other_id) {
    const touch = era.get(`tcvar:${other_id}:阴茎接触部位`);
    return (
      touch.owner === chara_id &&
      (touch.part === part_enum.mouth || touch.part === part_enum.hand)
    );
  }

  /**
   * @param {number} chara_id
   * @param {number} other_id
   * @returns {boolean}
   */
  static hand_touch_check_for_body(chara_id, other_id) {
    const touch = era.get(`tcvar:${chara_id}:手部接触部位`);
    return (
      era.get('tflag:主导权') === chara_id ||
      touch === -1 ||
      (touch.owner === other_id && touch.part === part_enum.body)
    );
  }

  /**
   * @param {number} chara_id
   * @param {number} other_id
   * @returns {boolean}
   */
  static npc_anal_sex_check(chara_id, other_id) {
    if (!chara_id) {
      return true;
    }
    if (era.get(`status:${chara_id}:超马跳Z`) > 0) {
      return true;
    }
    if (era.get(`ex:${chara_id}:肛门撕裂`)) {
      return false;
    }
    let upper_border = 1;
    if (!era.get(`exp:${chara_id}:肛交次数`)) {
      if (
        era.get(`talent:${chara_id}:淫臀`) !== 2 &&
        !era.get(`talent:${chara_id}:淫乱`)
      ) {
        upper_border = 0;
      }
      upper_border += Math.min(era.get(`exp:${chara_id}:肛门高潮次数`) / 5, 2);
    }
    upper_border += Math.min(era.get(`ex:${chara_id}:肛门高潮`) / 2, 2);
    return (
      get_expansion(get_penis_size(other_id), chara_id, part_enum.anal) <=
      upper_border
    );
  }

  /**
   * @param {number} chara_id
   * @param {number} other_id
   * @returns {boolean}
   */
  static npc_virgin_sex_check(chara_id, other_id) {
    if (!chara_id) {
      return true;
    }
    if (era.get(`status:${chara_id}:超马跳Z`) > 0) {
      return true;
    }
    if (era.get(`ex:${chara_id}:阴道撕裂`)) {
      return false;
    }
    const virgin_state = era.get(`talent:${chara_id}:处女`);
    let upper_border = 1;
    if (
      virgin_state === vp_status_enum.yes ||
      virgin_state === vp_status_enum.dont_know
    ) {
      if (
        !era.get(`talent:${chara_id}:淫乱`) &&
        era.get(`talent:${chara_id}:淫壶`) !== 2
      ) {
        upper_border = 0;
      }
      upper_border += Math.min(era.get(`exp:${chara_id}:阴道高潮次数`) / 5, 2);
    }
    upper_border += Math.min(era.get(`ex:${chara_id}:阴道高潮`) / 2, 2);
    return (
      get_expansion(get_penis_size(other_id), chara_id, part_enum.virgin) <=
      upper_border
    );
  }

  /**
   * @param {number} chara_id
   * @param {number} other_id
   * @returns {boolean}
   */
  static penis_in_anal_check(chara_id, other_id) {
    const touch = era.get(`tcvar:${chara_id}:肛门接触部位`);
    return touch.owner === other_id && touch.part === part_enum.penis;
  }

  /**
   * @param {number} chara_id
   * @param {number} other_id
   * @returns {boolean}
   */
  static penis_in_virgin_check(chara_id, other_id) {
    const touch = era.get(`tcvar:${chara_id}:阴道接触部位`);
    return touch.owner === other_id && touch.part === part_enum.penis;
  }

  /**
   * @param {number} chara_id
   * @returns {boolean}
   */
  static speak_check(chara_id) {
    return (
      era.get('tflag:主导权') === chara_id ||
      era.get(`tcvar:${chara_id}:口腔接触部位`) === -1
    );
  }

  /**
   * @param {number} chara_id
   * @param {number} other_id
   * @returns {boolean}
   */
  static tit_and_blow_job_check(chara_id, other_id) {
    const touch = era.get(`tcvar:${other_id}:阴茎接触部位`);
    return (
      touch.owner === chara_id &&
      (touch.part === part_enum.mouth || touch.part === part_enum.breast) &&
      get_breast_cup(chara_id, true).charCodeAt(0) >= 'C'.charCodeAt(0) &&
      get_penis_size(other_id) >= 3
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
