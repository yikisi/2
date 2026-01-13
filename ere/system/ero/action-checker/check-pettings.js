const era = require('#/era-electron');

const {
  check_lubrication,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { count_part_stain_in_range } = require('#/system/ero/sys-calc-stain');

const { talent2acceptable } = require('#/data/ero/battle-const');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(number,number):number>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.pet_ear] = (chara_id) =>
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.hand,
        stain_enum.chocolate,
        undefined,
        (e) => 2 + e,
      ) -
    50;

  handlers[ero_hooks.pull_ear] = (chara_id) =>
    10 * era.get(`talent:${chara_id}:喜欢痛苦`) +
    10 * era.get(`talent:${chara_id}:圣母`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.hand,
        stain_enum.chocolate,
        undefined,
        (e) => 2 + e,
      ) -
    50;

  /**
   * @param {string|string[]} talent_names
   * @param {[number,number,number|undefined,function(number):number]|[number,number,number|undefined,function(number):number][]} counter_params
   * @param {string} [ex_name]
   * @returns {function(number): number}
   */
  function checker_generator(talent_names, counter_params, ex_name) {
    /** @type {string[]} */
    const names = Array.isArray(talent_names) ? talent_names : [talent_names];
    /** @type {[number,number,number|undefined,function(number):number][]} */
    const params = Array.isArray(counter_params[0])
      ? counter_params
      : [counter_params];
    return (chara_id) =>
      10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
      names.reduce(
        (p, c) => p + talent2acceptable[era.get(`talent:${chara_id}:${c}`)],
        0,
      ) +
      params.reduce(
        (p, c) => p + 10 * count_part_stain_in_range(chara_id, ...c),
        0,
      ) -
      (ex_name ? 20 * era.get(`ex:${chara_id}:${ex_name}`) : 0) -
      50;
  }

  handlers[ero_hooks.pet_breast] = handlers[ero_hooks.pet_nipple] =
    checker_generator('淫乳', [
      part_enum.hand,
      stain_enum.semen,
      stain_enum.dirt,
      (e) => 2 + e,
    ]);

  handlers[ero_hooks.pet_clitoris] = checker_generator(
    '淫核',
    [part_enum.hand, stain_enum.chocolate, stain_enum.dirt, (e) => 2 + e],
    '阴道撕裂',
  );

  handlers[ero_hooks.finger_fuck] = handlers[ero_hooks.prepare_virgin] = (
    chara_id,
  ) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫壶`)] +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.hand,
        stain_enum.chocolate,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    20 * era.get(`ex:${chara_id}:阴道撕裂`) -
    10 * (era.get(`talent:${chara_id}:处女`) === vp_status_enum.virgin) -
    50;

  handlers[ero_hooks.stimulate_g_spot_by_finger] = checker_generator(
    '淫壶',
    [part_enum.hand, stain_enum.chocolate, stain_enum.dirt, (e) => 2 + e],
    '阴道撕裂',
  );

  handlers[ero_hooks.pet_anal] = checker_generator('淫臀', [
    part_enum.hand,
    stain_enum.semen,
    stain_enum.dirt,
    (e) => 2 + e,
  ]);

  handlers[ero_hooks.prepare_anal] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫臀`)] +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.hand,
        stain_enum.semen,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    20 * era.get(`ex:${chara_id}:肛门撕裂`) -
    10 * !era.get(`exp:${chara_id}:肛交次数`) -
    50;

  handlers[ero_hooks.pet_leg] = handlers[ero_hooks.pet_tail] =
    handlers[ero_hooks.pet_ear];

  handlers[ero_hooks.pull_tail] = handlers[ero_hooks.pull_ear];

  handlers[ero_hooks.cunnilingus] = checker_generator(
    '淫核',
    [part_enum.mouth, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
    '阴道撕裂',
  );

  handlers[ero_hooks.ask_cunnilingus] = checker_generator('淫口', [
    part_enum.clitoris,
    stain_enum.lubricant,
    stain_enum.dirt,
    (e) => 1 + e,
  ]);

  handlers[ero_hooks.force_cunnilingus] = (chara_id) =>
    handlers[ero_hooks.ask_cunnilingus](chara_id) + 10;

  handlers[ero_hooks.suck_virgin] = checker_generator(
    '淫壶',
    [part_enum.mouth, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
    '阴道撕裂',
  );

  handlers[ero_hooks.ask_suck_virgin] = checker_generator('淫口', [
    part_enum.virgin,
    stain_enum.lubricant,
    stain_enum.dirt,
    (e) => 1 + e,
  ]);

  handlers[ero_hooks.force_suck_virgin] = (chara_id) =>
    handlers[ero_hooks.ask_suck_virgin](chara_id) + 10;

  handlers[ero_hooks.blow_job] = checker_generator('早泄', [
    part_enum.mouth,
    stain_enum.lubricant,
    stain_enum.dirt,
    (e) => 2 + e,
  ]);

  handlers[ero_hooks.ask_blow_job] = checker_generator('淫口', [
    part_enum.penis,
    stain_enum.lubricant,
    stain_enum.anal,
    (e) => 1 + e,
  ]);

  handlers[ero_hooks.force_blow_job] = (chara_id) =>
    handlers[ero_hooks.ask_blow_job](chara_id) + 10;

  handlers[ero_hooks.deep_blow_job] = handlers[ero_hooks.blow_job];

  handlers[ero_hooks.ask_deep_blow_job] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫口`)] +
    10 * era.get(`talent:${chara_id}:喜欢痛苦`) +
    10 * era.get(`talent:${chara_id}:圣母`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.mouth,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    60;

  handlers[ero_hooks.force_deep_blow_job] = (chara_id) =>
    handlers[ero_hooks.ask_deep_blow_job](chara_id) + 10;

  handlers[ero_hooks.hand_job] = checker_generator('早泄', [
    part_enum.hand,
    stain_enum.lubricant,
    stain_enum.dirt,
    (e) => 2 + e,
  ]);

  handlers[ero_hooks.ask_hand_job] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    10 * era.get(`talent:${chara_id}:神之手`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.penis,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    50;

  handlers[ero_hooks.force_hand_job] = (chara_id) =>
    handlers[ero_hooks.ask_hand_job](chara_id) + 10;

  handlers[ero_hooks.hand_and_blow_job] = checker_generator('早泄', [
    [part_enum.hand, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
    [part_enum.mouth, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
  ]);

  handlers[ero_hooks.ask_hand_and_blow_job] = checker_generator('淫口', [
    part_enum.penis,
    stain_enum.lubricant,
    stain_enum.anal,
    (e) => 1 + e,
  ]);

  handlers[ero_hooks.force_hand_and_blow_job] = (chara_id) =>
    handlers[ero_hooks.ask_hand_and_blow_job](chara_id) + 10;

  handlers[ero_hooks.tit_job] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:早泄`)] -
    10 *
      (!check_lubrication(0, part_enum.breast) &&
        !check_lubrication(chara_id, part_enum.penis)) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.breast,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    50;

  handlers[ero_hooks.ask_tit_job] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫乳`)] -
    10 *
      (!check_lubrication(chara_id, part_enum.breast) &&
        !check_lubrication(0, part_enum.penis)) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.penis,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    50;

  handlers[ero_hooks.fuck_tit] = (chara_id) =>
    handlers[ero_hooks.ask_tit_job](chara_id) + 10;

  handlers[ero_hooks.tit_and_blow_job] = (chara_id) =>
    handlers[ero_hooks.tit_job](chara_id) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.mouth,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      );

  handlers[ero_hooks.ask_tit_and_blow_job] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫乳`)] -
    talent2acceptable[era.get(`talent:${chara_id}:淫口`)] -
    10 *
      (!check_lubrication(chara_id, part_enum.breast) &&
        !check_lubrication(0, part_enum.penis)) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.penis,
        stain_enum.lubricant,
        stain_enum.anal,
        (e) => 1 + e,
      ) -
    50;

  handlers[ero_hooks.fuck_tit_and_mouth] = (chara_id) =>
    handlers[ero_hooks.ask_tit_and_blow_job](chara_id) + 10;

  handlers[ero_hooks.suck_anal] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫臀`)] +
    10 * Math.min(era.get(`talent:${chara_id}:洁净重视`), 0) -
    50;

  handlers[ero_hooks.milk] = (chara_id) =>
    talent2acceptable[era.get(`talent:${chara_id}:淫口`)] +
    5 * era.get('talent:0:泌乳') +
    40 * !era.get(`cflag:${chara_id}:母方角色`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.breast,
        stain_enum.lubricant,
        stain_enum.anal,
        (e) => 1 + e,
      ) -
    50;

  handlers[ero_hooks.ask_bite_nipple] = (chara_id) =>
    talent2acceptable[era.get(`talent:${chara_id}:淫口`)] +
    10 * era.get(`talent:${chara_id}:抖S`) +
    10 * era.get(`talent:${chara_id}:小恶魔`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.breast,
        stain_enum.lubricant,
        stain_enum.anal,
        (e) => 1 + e,
      ) -
    50;

  handlers[ero_hooks.milk_and_hand_job] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫口`)] +
    10 * era.get(`talent:${chara_id}:早泄`) +
    25 * !era.get(`cflag:${chara_id}:母方角色`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.breast,
        stain_enum.lubricant,
        stain_enum.anal,
        (e) => 1 + e,
      ) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.hand,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    50;

  handlers[ero_hooks.suck_nipple] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫乳`)] +
    5 * era.get(`talent:${chara_id}:泌乳`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.mouth,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    50;

  handlers[ero_hooks.bite_nipple] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫乳`)] +
    10 * era.get(`talent:${chara_id}:喜欢痛苦`) +
    10 * era.get(`talent:${chara_id}:圣母`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.mouth,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    50;

  handlers[ero_hooks.ask_milk_and_hand_job] = checker_generator('淫乳', [
    [part_enum.mouth, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
    [part_enum.penis, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
  ]);

  handlers[ero_hooks.ask_non_penetrative] = checker_generator(
    ['淫身', '淫核'],
    [part_enum.penis, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
    '阴道撕裂',
  );

  handlers[ero_hooks.non_penetrative] = checker_generator(
    ['早泄'],
    [
      [part_enum.body, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
      [part_enum.clitoris, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
    ],
  );

  handlers[ero_hooks.sixty_nine] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    talent2acceptable[era.get(`talent:${chara_id}:淫口`)] +
    talent2acceptable[
      era.get(
        `talent:${chara_id}:${get_penis_size(chara_id) ? '早泄' : '淫核'}`,
      )
    ] +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.mouth,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) +
    10 *
      count_part_stain_in_range(
        chara_id,
        get_penis_size(0) ? part_enum.penis : part_enum.clitoris,
        stain_enum.lubricant,
        stain_enum.anal,
        (e) => 1 + e,
      ) -
    20 * era.get(`ex:${chara_id}:肛门撕裂`) -
    50;

  handlers[ero_hooks.hair_fuck] = handlers[ero_hooks.tail_job] = (chara_id) =>
    10 * era.get(`talent:${chara_id}:工口意愿`) +
    10 * era.get(`talent:${chara_id}:小恶魔`) -
    50;

  handlers[ero_hooks.ask_hair_fuck] = handlers[ero_hooks.ask_tail_job] = (
    chara_id,
  ) =>
    10 * era.get(`talent:${chara_id}:工口意愿`) +
    10 * era.get(`talent:${chara_id}:圣母`) -
    50;

  handlers[ero_hooks.force_hair_fuck] = handlers[ero_hooks.force_tail_job] = (
    chara_id,
  ) => handlers[ero_hooks.ask_hair_fuck](chara_id) + 10;

  handlers[ero_hooks.foot_job] = checker_generator('早泄', [
    part_enum.foot,
    stain_enum.lubricant,
    stain_enum.dirt,
    (e) => 2 + e,
  ]);

  handlers[ero_hooks.ask_foot_job] = (chara_id) =>
    10 * (era.get(`talent:${chara_id}:工口意愿`) === 1) +
    10 * era.get(`talent:${chara_id}:神之足`) +
    10 *
      count_part_stain_in_range(
        chara_id,
        part_enum.penis,
        stain_enum.lubricant,
        stain_enum.dirt,
        (e) => 2 + e,
      ) -
    50;

  handlers[ero_hooks.force_foot_job] = (chara_id) =>
    handlers[ero_hooks.ask_foot_job](chara_id) + 10;

  handlers[ero_hooks.armpit_intercourse] = checker_generator('早泄', [
    part_enum.body,
    stain_enum.lubricant,
    stain_enum.dirt,
    (e) => 2 + e,
  ]);

  handlers[ero_hooks.ask_armpit_intercourse] = checker_generator('淫身', [
    part_enum.penis,
    stain_enum.lubricant,
    stain_enum.dirt,
    (e) => 2 + e,
  ]);

  handlers[ero_hooks.force_armpit_intercourse] = (chara_id) =>
    handlers[ero_hooks.ask_armpit_intercourse](chara_id) + 10;

  handlers[ero_hooks.tribbing] = checker_generator(
    '淫核',
    [part_enum.clitoris, stain_enum.lubricant, stain_enum.dirt, (e) => 2 + e],
    '阴道撕裂',
  );
};
