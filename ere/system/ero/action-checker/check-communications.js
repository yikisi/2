const era = require('#/era-electron');

const { count_part_stain_in_range } = require('#/system/ero/sys-calc-stain');

const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(number,number):number>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = (chara_id) =>
    15 * (era.get(`talent:${chara_id}:贞洁看法`) === -1) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.mouth,
        stain_enum.lubricant,
        stain_enum.dirt,
      ) -
    75;

  handlers[ero_hooks.french_kiss] = (chara_id) =>
    15 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.mouth,
        stain_enum.lubricant,
        stain_enum.dirt,
      ) -
    75;

  handlers[ero_hooks.gargle] = handlers[ero_hooks.wipe_body] = () => 0;
};
