const era = require('#/era-electron');

const { count_part_stain_in_range } = require('#/system/ero/sys-calc-stain');

const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {number} chara_id
 * @param {string} talent_name
 * @returns {number}
 */
function check_base_ask_sm(chara_id, talent_name) {
  return (
    50 * (era.get('tflag:强奸') === 0) +
    50 * era.get(`talent:${chara_id}:抖S`) +
    25 * era.get(`talent:${chara_id}:小恶魔`) +
    10 * era.get(`talent:0:${talent_name}`) -
    100
  );
}

/** @param {Record<string,function(number,number):number>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.ask_insult] = (chara_id) =>
    check_base_ask_sm(chara_id, '喜欢责骂');

  handlers[ero_hooks.ask_hit_anal] = (chara_id) =>
    check_base_ask_sm(chara_id, '喜欢痛苦') +
    5 * Math.max(era.get('talent:0:淫臀'), 0) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.anal,
        stain_enum.saliva,
        undefined,
        (e) => 3 + e,
      );

  handlers[ero_hooks.ask_hit_breast] = (chara_id) =>
    check_base_ask_sm(chara_id, '喜欢痛苦') +
    5 * Math.max(era.get('talent:0:淫乳'), 0) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.breast,
        stain_enum.saliva,
        undefined,
        (e) => 3 + e,
      );

  handlers[ero_hooks.ask_hit_face] = (chara_id) =>
    check_base_ask_sm(chara_id, '喜欢痛苦') +
    2.5 * Math.max(era.get('talent:0:淫口'), 0) +
    2.5 * Math.max(era.get('talent:0:淫身'), 0) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.mouth,
        stain_enum.saliva,
        undefined,
        (e) => 3 + e,
      );

  handlers[ero_hooks.ask_virgin_foot_job] = (chara_id) =>
    25 * era.get(`talent:${chara_id}:抖S`) +
    10 * era.get(`talent:${chara_id}:小恶魔`) +
    5 * Math.max(era.get('talent:0:淫核'), 0) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.clitoris,
        stain_enum.saliva,
        undefined,
        (e) => 3 + e,
      ) -
    75;

  handlers[ero_hooks.use_lubricating_fluid] = () => 0;

  handlers[ero_hooks.use_medicine] = () => 0;

  handlers[ero_hooks.use_item] = () => -75;

  handlers[ero_hooks.ask_use_item] = (chara_id) =>
    50 * era.get(`talent:${chara_id}:抖S`) +
    25 * era.get(`talent:${chara_id}:小恶魔`) -
    50;
};
