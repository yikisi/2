const era = require('#/era-electron');

const { merge_stain } = require('#/system/ero/sys-calc-stain');

const EroBodyPart = require('#/data/ero/body-part');
const { part_enum, part_touch, touch_list } = require('#/data/ero/part-const');

/**
 * @param {number} cid
 * @param {number} cpart
 * @param {number} touched_chara_id
 * @param {number} touched_chara_part
 * @param {number} [ero_item]
 */
function set_part(cid, cpart, touched_chara_id, touched_chara_part, ero_item) {
  const part_touch_name = part_touch[cpart];
  const last_touched = era.get(`tcvar:${cid}:${part_touch_name}接触部位`);
  if (
    last_touched !== -1 &&
    cpart !== part_enum.sadism &&
    cpart !== part_enum.masochism &&
    cpart !== part_enum.item
  ) {
    era.set(
      `tcvar:${last_touched.owner}:${part_touch[last_touched.part]}接触部位`,
      -1,
    );
  }
  if (touched_chara_part === -1) {
    era.set(`tcvar:${cid}:${part_touch_name}接触部位`, -1);
  } else {
    era.set(
      `tcvar:${cid}:${part_touch_name}接触部位`,
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
    ids.forEach((cid) =>
      touch_list.forEach((part) => set_part(cid, part, -1, -1)),
    );
  },
  /** @param {number} ids */
  clean_all_parts_without_item(...ids) {
    ids.forEach((cid) =>
      touch_list.forEach((part) => {
        if (
          era.get(`tcvar:${cid}:${part_touch[part]}接触部位`).part !==
          part_enum.item
        ) {
          set_part(cid, part, -1, -1);
        }
      }),
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
    participants.forEach((p) => {
      if (
        era.get(`tcvar:${p.id}:${part_touch[p.part]}接触部位`).part !==
        part_enum.item
      ) {
        set_part(p.id, p.part, -1, -1);
      }
    }),
  /** @param {number} ids */
  reset_parts(...ids) {
    ids.forEach((cid) =>
      touch_list.forEach((part) =>
        era.set(`tcvar:${cid}:${part_touch[part]}接触部位`, -1),
      ),
    );
  },
};
