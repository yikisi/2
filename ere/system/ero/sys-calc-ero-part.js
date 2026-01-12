const era = require('#/era-electron');

const { merge_stain } = require('#/system/ero/sys-calc-stain');

const EroTouch = require('#/data/ero/ero-touch');
const { part_enum, part_touch, touch_list } = require('#/data/ero/part-const');

/**
 * @param {number} cid
 * @param {number} cpart
 * @param {number} t_cid
 * @param {number} t_cpart
 * @param {number} [ero_item]
 */
function set_part(cid, cpart, t_cid, t_cpart, ero_item) {
  const touch = new EroTouch(cid, cpart);
  if (
    cpart !== part_enum.sadism &&
    cpart !== part_enum.masochism &&
    cpart !== part_enum.item
  ) {
    const t_touch = new EroTouch(touch.owner, touch.part);
    if (t_touch.owner === cid && t_touch.part === cpart) {
      t_touch.clean();
    }
  }
  if (t_cpart === -1) {
    touch.clean();
  } else {
    touch.set(t_cid, t_cpart, ero_item);
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
  /** @param {EroParticipant} p_list */
  clean_part(...p_list) {
    p_list.forEach((p) => set_part(p.id, p.part, -1, -1));
  },
  /** @param {EroParticipant} p_list */
  clean_part_without_item: (...p_list) =>
    p_list.forEach((p) => {
      if (new EroTouch(p.id, p.part).part !== part_enum.item) {
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
