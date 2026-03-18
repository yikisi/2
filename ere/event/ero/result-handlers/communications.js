const era = require('#/era-electron');

const {
  sys_change_motion_by_base,
  sys_clean_oor_parts,
} = require('#/system/ero/sys-calc-distance');
const sys_do_sex = require('#/system/ero/sys-calc-ero');
const {
  clean_all_parts_without_item,
  clean_part,
  clean_part_without_item,
} = require('#/system/ero/sys-calc-ero-part');
const { change_ero_master } = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const {
  clean_part_stain,
  clean_stain,
  rollback_penis_stain,
} = require('#/system/ero/sys-calc-stain');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');

const EroParticipant = require('#/data/ero/ero-participant');
const EroTouch = require('#/data/ero/ero-touch');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { base_enum, part_enum, part_touch } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

function clean_s_parts(_old, _new) {
  const supporter = era.get('tflag:当前助手');
  if (supporter > 0) {
    [_old, _new].forEach((c) =>
      clean_part_without_item(
        ...Object.values(part_enum)
          .slice(0, 9)
          .filter((p) => new EroTouch(c, p).owner === supporter)
          .map((p) => new EroParticipant(c, p)),
      ),
    );
  }
}

/** @param {Record<string,function(number,number,HookArg,{check:number})>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.go_on] = () => {
    era.set('tflag:投降', 1);
  };

  handlers[ero_hooks.kiss] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    sys_change_motion_by_base(attacker, defender, [base_enum.same]);
    sys_clean_oor_parts(attacker, defender, {
      a: part_enum.mouth,
      d: part_enum.mouth,
    });
  };

  handlers[ero_hooks.french_kiss] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, 0.2),
      new EroParticipant(defender, part_enum.mouth, 0.2),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
  };

  handlers[ero_hooks.relax] = (_, defender, hook) => {
    if (hook.arg === true) {
      add_juel(defender, 12, base_emotion_juel);
    }
  };

  handlers[ero_hooks.lure] = (attacker, defender, hook) => {
    era.add(`nowex:${attacker}:精力消耗`, 20);
    if (!defender) {
      add_juel(defender, 10, base_emotion_juel);
    } else {
      const love = era.get(`love:${defender}`);
      if (love < 50) {
        const lust = era.get(`tcvar:${defender}:发情`);
        add_juel(defender, 14, base_emotion_juel / (1 + lust));
        if (lust) {
          add_juel(defender, 10, base_emotion_juel / 4);
        }
      } else if (love < 75) {
        add_juel(defender, 10, base_emotion_juel / 4);
      } else if (love < 90) {
        add_juel(defender, 10, base_emotion_juel / 2);
      } else {
        add_juel(defender, 10, base_emotion_juel);
      }
    }
    if (hook.arg) {
      era.set(`tcvar:${defender}:发情`, true);
      add_juel(defender, 14, -base_emotion_juel / 2);
    }
  };

  handlers[ero_hooks.talk] = (attacker, defender) => {
    era.add(`nowex:${attacker}:精力消耗`, 10);
    if (attacker === 0 && sys_check_awake(defender)) {
      if (era.get('tflag:强奸') !== attacker) {
        sys_like_chara(defender, 0, 2);
      } else {
        add_juel(defender, 12, base_emotion_juel / 5);
      }
    }
    add_juel(defender, 10, base_emotion_juel / 5);
  };

  handlers[ero_hooks.switch] = (a, d) => {
    clean_s_parts(a, d);
    change_ero_master(d);
    add_juel(d, 10, base_emotion_juel);
  };

  /**
   * @param {number} a
   * @param {number} d
   * @param {HookArg} hook
   * @param {{success:boolean}} extra
   */
  handlers[ero_hooks.resist] = (a, d, hook, { success: s_flag }) => {
    era.add(`nowex:${a}:体力消耗`, 25);
    if (s_flag) {
      clean_s_parts(a, d);
      change_ero_master(a);
      add_juel(d, 12, base_emotion_juel);
      add_juel(d, 10, base_emotion_juel / 2);
    } else {
      add_juel(a, 12, base_emotion_juel / 4);
      add_juel(a, 10, base_emotion_juel / 2);
    }
  };

  handlers[ero_hooks.gargle] = (attacker, defender) => {
    let r_stains = [attacker, defender].map((cid) => {
      if (sys_check_awake(cid) && era.get(`tequip:${cid}:口腔`) === -1) {
        clean_part(new EroParticipant(cid, part_enum.mouth));
        const ret = clean_stain(cid, part_enum.mouth);
        era.add(`nowex:${cid}:精力消耗`, 10);
        return ret;
      }
      return 0;
    });
    if (r_stains[1]) {
      add_juel(defender, 10, base_emotion_juel / 2);
    } else if (!r_stains[0]) {
      add_juel(defender, 14, base_emotion_juel * 0.5);
    }
  };

  handlers[ero_hooks.wipe_body] = (attacker, defender) => {
    clean_all_parts_without_item(attacker, defender);
    const r_stains = [attacker, defender].map((cid) => {
      let tmp = 0;
      if (era.get(`tcvar:${cid}:避孕套`)) {
        era.set(`tcvar:${cid}:避孕套`, 0);
        rollback_penis_stain(cid);
      }
      const part_list = [part_enum.hand, part_enum.foot, part_enum.body];
      [part_enum.penis, part_enum.clitoris]
        .filter((p) => era.get(`tequip:${cid}:${part_touch[p]}`) === -1)
        .forEach((p) => part_list.push(p));
      tmp += clean_stain(cid, ...part_list);
      era.add(`nowex:${attacker}:精力消耗`, 20);
      era.add(`nowex:${attacker}:体力消耗`, 10);
      tmp += clean_part_stain(cid, part_enum.breast, stain_enum.milk);
      if (era.get(`tequip:${cid}:阴道`) === -1) {
        tmp += clean_part_stain(
          cid,
          part_enum.virgin,
          stain_enum.virgin,
          stain_enum.lubricant,
          stain_enum.secretion,
          stain_enum.semen,
        );
        era.add(`nowex:${attacker}:体力消耗`, 10);
      }
      if (era.get(`tequip:${cid}:肛门`) === -1) {
        tmp += clean_part_stain(
          cid,
          part_enum.anal,
          stain_enum.lubricant,
          stain_enum.anal,
          stain_enum.semen,
        );
        era.add(`nowex:${attacker}:体力消耗`, 10);
      }
      return tmp;
    });
    add_juel(
      defender,
      10,
      r_stains[1] > 0
        ? (base_emotion_juel * (Math.min(r_stains[1], 6) + 4)) / 5
        : base_emotion_juel / 2,
    );
  };
};
