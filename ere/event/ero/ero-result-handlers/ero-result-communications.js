const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_do_sex = require('#/system/ero/sys-calc-ero');
const {
  clean_part,
  clean_part_without_item,
} = require('#/system/ero/sys-calc-ero-part');
const { change_ero_master } = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const {
  clean_stain,
  clean_part_stain,
  rollback_penis_stain,
} = require('#/system/ero/sys-calc-stain');

const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part_enum, part_touch } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { stain_enum } = require('#/data/ero/stain-const');

/** @param {Record<string,function(number,number,HookArg,{check:number})>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
  };

  handlers[ero_hooks.french_kiss] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, 0.2),
      new EroParticipant(defender, part_enum.mouth, 0.2),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
  };

  handlers[ero_hooks.relax] = (_, defender, hook) =>
    hook.arg === true && add_juel(defender, '恐惧', base_emotion_juel);

  handlers[ero_hooks.lure] = (attacker, defender, hook) => {
    era.add(`nowex:${attacker}:精力消耗`, 20);
    if (!defender) {
      add_juel(defender, '顺从', base_emotion_juel);
    } else {
      const love = era.get(`love:${defender}`);
      if (love < 50) {
        const lust = era.get(`tcvar:${defender}:发情`);
        add_juel(defender, '反感', base_emotion_juel / (1 + lust));
        if (lust) {
          add_juel(defender, '顺从', base_emotion_juel / 4);
        }
      } else if (love < 75) {
        add_juel(defender, '顺从', base_emotion_juel / 4);
      } else if (love < 90) {
        add_juel(defender, '顺从', base_emotion_juel / 2);
      } else {
        add_juel(defender, '顺从', base_emotion_juel);
      }
    }
    if (hook.arg) {
      era.set(`tcvar:${defender}:发情`, true);
      add_juel(defender, '反感', -base_emotion_juel / 2);
    }
  };

  handlers[ero_hooks.talk] = (attacker, defender) => {
    era.add(`nowex:${attacker}:精力消耗`, 10);
    add_juel(defender, '顺从', base_emotion_juel / 4);
  };

  handlers[ero_hooks.switch] = (_, defender) => {
    change_ero_master(defender);
    add_juel(defender, '顺从', base_emotion_juel);
  };

  /**
   * @param {number} attacker
   * @param {number} defender
   * @param {HookArg} hook
   * @param {{success:boolean}} extra_flag
   */
  handlers[ero_hooks.resist] = (attacker, defender, hook, extra_flag) => {
    era.add(`nowex:${attacker}:体力消耗`, 25);
    if (extra_flag.success) {
      change_ero_master(attacker);
      add_juel(defender, '恐惧', base_emotion_juel);
    } else {
      add_juel(attacker, '恐惧', base_emotion_juel / 4);
    }
  };

  handlers[ero_hooks.gargle] = (attacker, defender) => {
    let remove_stains = [0, 0];
    [attacker, defender].forEach((chara_id, i) => {
      if (
        sys_check_awake(chara_id) &&
        era.get(`tequip:${chara_id}:口腔`) === -1
      ) {
        remove_stains[i] = clean_stain(chara_id, part_enum.mouth);
        clean_part(new EroParticipant(chara_id, part_enum.mouth));
        era.add(`nowex:${chara_id}:精力消耗`, 10);
      }
    });
    if (remove_stains[1]) {
      add_juel(defender, '顺从', base_emotion_juel / 2);
    } else if (!remove_stains[0]) {
      add_juel(defender, '反感', base_emotion_juel * 0.5);
    }
  };

  handlers[ero_hooks.wipe_body] = (attacker, defender) => {
    let removed_stains;
    [attacker, defender].forEach((chara_id) => {
      removed_stains = 0;
      if (era.get(`tcvar:${chara_id}:避孕套`)) {
        era.set(`tcvar:${chara_id}:避孕套`, 0);
        rollback_penis_stain(chara_id);
      }
      const part_list = [part_enum.hand, part_enum.foot, part_enum.body];
      [part_enum.penis, part_enum.clitoris]
        .filter(
          (part) => era.get(`tequip:${chara_id}:${part_touch[part]}`) === -1,
        )
        .forEach((e) => part_list.push(e));
      removed_stains += clean_stain(chara_id, ...part_list);
      clean_part(...part_list.map((e) => new EroParticipant(chara_id, e)));
      era.add(`nowex:${attacker}:精力消耗`, 20);
      era.add(`nowex:${attacker}:体力消耗`, 10);
      removed_stains += clean_part_stain(
        chara_id,
        part_enum.breast,
        stain_enum.milk,
      );
      clean_part_without_item(new EroParticipant(chara_id, part_enum.breast));
      if (era.get(`tequip:${chara_id}:阴道`) === -1) {
        removed_stains += clean_part_stain(
          chara_id,
          part_enum.virgin,
          stain_enum.virgin,
          stain_enum.lubricant,
          stain_enum.secretion,
          stain_enum.semen,
        );
        clean_part(new EroParticipant(chara_id, part_enum.virgin));
        era.add(`nowex:${attacker}:体力消耗`, 10);
      }
      if (era.get(`tequip:${chara_id}:肛门`) === -1) {
        removed_stains += clean_part_stain(
          chara_id,
          part_enum.anal,
          stain_enum.lubricant,
          stain_enum.anal,
          stain_enum.semen,
        );
        clean_part(new EroParticipant(chara_id, part_enum.anal));
        era.add(`nowex:${attacker}:体力消耗`, 10);
      }
    });
    add_juel(
      defender,
      '顺从',
      removed_stains
        ? (base_emotion_juel * (Math.min(removed_stains, 6) + 4)) / 5
        : base_emotion_juel / 2,
    );
  };
};
