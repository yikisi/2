const era = require('#/era-electron');

const { merge_stain } = require('#/system/ero/sys-calc-stain');

const EroBodyPart = require('#/data/ero/body-part');
const { part_enum, part_touch, touch_list } = require('#/data/ero/part-const');

/**
 * @param {number} chara_id
 * @param {number} chara_part
 * @param {number} touched_chara_id
 * @param {number} touched_chara_part
 * @param {number} [ero_item]
 */
function set_part(
  chara_id,
  chara_part,
  touched_chara_id,
  touched_chara_part,
  ero_item,
) {
  const part_touch_name = part_touch[chara_part];
  const last_touched = era.get(`tcvar:${chara_id}:${part_touch_name}接触部位`);
  if (
    last_touched !== -1 &&
    chara_part !== part_enum.sadism &&
    chara_part !== part_enum.masochism &&
    chara_part !== part_enum.item
  ) {
    era.set(
      `tcvar:${last_touched.owner}:${part_touch[last_touched.part]}接触部位`,
      -1,
    );
  }
  if (touched_chara_part === -1) {
    era.set(`tcvar:${chara_id}:${part_touch_name}接触部位`, -1);
  } else {
    era.set(
      `tcvar:${chara_id}:${part_touch_name}接触部位`,
      new EroBodyPart(touched_chara_id, touched_chara_part, ero_item),
    );
  }
}

module.exports = {
  /**
   * @param {EroParticipant} attacker
   * @param {EroParticipant} defender
   * @param {number} [item]
   */
  change_part(attacker, defender, item) {
    set_part(attacker.id, attacker.part, defender.id, defender.part, item);
    set_part(defender.id, defender.part, attacker.id, attacker.part, item);
    merge_stain(attacker, defender, item);
  },
  /** @param {number} ids */
  clean_all_parts(...ids) {
    ids.forEach((chara_id) =>
      touch_list.forEach((part) => set_part(chara_id, part, -1, -1)),
    );
  },
  /** @param {EroParticipant} participants */
  clean_part(...participants) {
    participants.forEach((participant) =>
      set_part(participant.id, participant.part, -1, -1),
    );
  },
  /** @param {EroParticipant} participants */
  clean_part_without_item: (...participants) =>
    participants.forEach(
      (p) =>
        era.get(`tcvar:${p.id}:${part_touch[p.part]}接触部位`).part !==
          part_enum.item && set_part(p.id, p.part, -1, -1),
    ),
  /** @param {number} ids */
  reset_parts(...ids) {
    ids.forEach((chara_id) => {
      touch_list.forEach((part) => {
        era.set(`tcvar:${chara_id}:${part_touch[part]}接触部位`, -1);
      });
    });
  },
};
