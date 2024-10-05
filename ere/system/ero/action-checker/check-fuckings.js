const era = require('#/era-electron');

const {
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { count_part_stain_in_range } = require('#/system/ero/sys-calc-stain');

const { talent2acceptable } = require('#/data/ero/battle-const');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const {
  pregnant_stage_enum,
  vp_status_enum,
} = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

const talent2acceptable_anal = {
  '-4': -5,
  0: 0,
  1: 10,
  2: 15,
};

/** @param {number} chara_id */
function get_acceptable_from_pregnant(chara_id) {
  if (
    era.get(`status:${chara_id}:反避孕套`) ||
    era.get(`status:${chara_id}:经期`) ||
    era.get('tcvar:0:避孕套')
  ) {
    return 40;
  }
  const pregnant_stage = era.get(`cflag:${chara_id}:妊娠阶段`);
  if (pregnant_stage === pregnant_stage_enum.fetal) {
    return 20;
  } else if (pregnant_stage >> pregnant_stage_enum.embryo > 0) {
    return 10;
  }
  return 0;
}

/** @param {Record<string,function(number,number):number>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.missionary] =
    handlers[ero_hooks.doggy_style] =
    handlers[ero_hooks.sitting] =
    handlers[ero_hooks.hug_sitting] =
    handlers[ero_hooks.standing] =
    handlers[ero_hooks.hug_standing] =
    handlers[ero_hooks.suspended_congress] =
    handlers[ero_hooks.hug_suspended_congress] =
    handlers[ero_hooks.ask_cowgirl] =
      (chara_id) => {
        let virgin_check = era.get(`talent:${chara_id}:处女`);
        virgin_check =
          virgin_check === vp_status_enum.virgin ||
          virgin_check === vp_status_enum.dont_know;
        return (
          10 * era.get(`talent:${chara_id}:工口意愿`) +
          talent2acceptable[era.get(`talent:${chara_id}:淫壶`)] +
          get_acceptable_from_pregnant(chara_id) +
          count_part_stain_in_range(
            chara_id,
            part_enum.penis,
            stain_enum.anal,
            undefined,
            (e) => e + 1,
          ) -
          20 * era.get(`ex:${chara_id}:阴道撕裂`) -
          10 *
            Math.max(
              get_expansion(get_penis_size(0), chara_id, part_enum.virgin) -
                virgin_check -
                1,
              -1,
            ) -
          10 * (era.get(`talent:${chara_id}:贞洁看法`) === 1) * virgin_check -
          90
        );
      };

  handlers[ero_hooks.ask_stimulate_glans_by_virgin] = handlers[
    ero_hooks.stimulate_g_spot
  ] = (chara_id) =>
    10 * era.get(`talent:${chara_id}:工口意愿`) +
    talent2acceptable[era.get(`talent:${chara_id}:淫壶`)] +
    get_acceptable_from_pregnant(chara_id) +
    count_part_stain_in_range(
      chara_id,
      part_enum.penis,
      stain_enum.anal,
      undefined,
      (e) => e + 1,
    ) -
    20 * era.get(`ex:${chara_id}:阴道撕裂`) -
    10 *
      Math.max(
        get_expansion(get_penis_size(0), chara_id, part_enum.virgin) - 1,
        -1,
      ) -
    90;

  handlers[ero_hooks.missionary_anal_sex] =
    handlers[ero_hooks.doggy_style_anal_sex] =
    handlers[ero_hooks.sitting_anal_sex] =
    handlers[ero_hooks.hug_sitting_anal_sex] =
    handlers[ero_hooks.standing_anal_sex] =
    handlers[ero_hooks.hug_standing_anal_sex] =
    handlers[ero_hooks.suspended_congress_anal_sex] =
    handlers[ero_hooks.hug_suspended_congress_anal_sex] =
    handlers[ero_hooks.ask_cowgirl_anal_sex] =
      (chara_id) =>
        10 * era.get(`talent:${chara_id}:工口意愿`) +
        talent2acceptable_anal[era.get(`talent:${chara_id}:淫臀`)] +
        count_part_stain_in_range(
          chara_id,
          part_enum.penis,
          stain_enum.dirt,
          undefined,
          (e) => e + 1,
        ) -
        20 * era.get(`ex:${chara_id}:肛门撕裂`) -
        10 *
          Math.max(
            get_expansion(get_penis_size(0), chara_id, part_enum.anal) -
              !era.get(`exp:${chara_id}:肛交经验`) -
              1,
            -1,
          ) -
        65;

  handlers[ero_hooks.ask_stimulate_glans_by_anal] = handlers[
    ero_hooks.stimulate_large_intestine
  ] = (chara_id) =>
    10 * era.get(`talent:${chara_id}:工口意愿`) +
    talent2acceptable_anal[era.get(`talent:${chara_id}:淫臀`)] +
    count_part_stain_in_range(
      chara_id,
      part_enum.penis,
      stain_enum.dirt,
      undefined,
      (e) => e + 1,
    ) -
    20 * era.get(`ex:${chara_id}:肛门撕裂`) -
    10 *
      Math.max(
        get_expansion(get_penis_size(0), chara_id, part_enum.anal) - 1,
        -1,
      ) -
    65;

  handlers[ero_hooks.stimulate_womb] = (chara_id) =>
    10 * era.get(`talent:${chara_id}:工口意愿`) +
    talent2acceptable[era.get(`talent:${chara_id}:淫壶`)] +
    talent2acceptable_anal[era.get(`talent:${chara_id}:淫臀`)] +
    count_part_stain_in_range(
      chara_id,
      part_enum.penis,
      stain_enum.dirt,
      undefined,
      (e) => e + 1,
    ) -
    20 * era.get(`ex:${chara_id}:阴道撕裂`) -
    20 * era.get(`ex:${chara_id}:肛门撕裂`) -
    10 *
      Math.max(
        get_expansion(get_penis_size(0), chara_id, part_enum.anal) - 1,
        -1,
      ) -
    65;

  handlers[ero_hooks.ask_fuck] =
    handlers[ero_hooks.cowgirl] =
    handlers[ero_hooks.stimulate_glans_by_virgin] =
    handlers[ero_hooks.ask_stimulate_g_spot] =
    handlers[ero_hooks.fucked_suspended_congress] =
      (chara_id) =>
        10 * era.get(`talent:${chara_id}:工口意愿`) +
        talent2acceptable[era.get(`talent:${chara_id}:早泄`)] +
        count_part_stain_in_range(
          chara_id,
          part_enum.virgin,
          stain_enum.anal,
          undefined,
          (e) => e + 1,
        ) -
        10 *
          Math.max(
            get_expansion(get_penis_size(chara_id), 0, part_enum.virgin) - 1,
            -1,
          ) -
        50;

  handlers[ero_hooks.ask_fuck_anal] =
    handlers[ero_hooks.cowgirl_anal_sex] =
    handlers[ero_hooks.stimulate_glans_by_anal] =
    handlers[ero_hooks.ask_stimulate_large_intestine] =
    handlers[ero_hooks.ask_stimulate_womb] =
    handlers[ero_hooks.fucked_suspended_congress_anal_sex] =
      (chara_id) =>
        10 * era.get(`talent:${chara_id}:工口意愿`) +
        talent2acceptable[era.get(`talent:${chara_id}:早泄`)] +
        count_part_stain_in_range(
          chara_id,
          part_enum.anal,
          stain_enum.anal,
          undefined,
          (e) => e + 1,
        ) -
        10 *
          Math.max(
            get_expansion(get_penis_size(chara_id), 0, part_enum.anal) - 1,
            -1,
          ) -
        50;
};
