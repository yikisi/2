const era = require('#/era-electron');

const { sys_check_distance } = require('#/system/ero/sys-calc-distance');

const { part_enum } = require('#/data/ero/part-const');
const { action_tags, actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_tagged_hooks, ero_derive_check) => {
  ero_tagged_hooks[actions.missionary] = new EroHookTag(
    [action_tags.insert],
    [action_tags.virgin],
  );

  ero_tagged_hooks[actions.missionary_anal_sex] = new EroHookTag(
    [action_tags.insert],
    [action_tags.anal],
  );

  ero_tagged_hooks[actions.doggy_style] = ero_tagged_hooks[actions.missionary];

  ero_tagged_hooks[actions.doggy_style_anal_sex] =
    ero_tagged_hooks[actions.missionary_anal_sex];

  ero_tagged_hooks[actions.sitting] = new EroHookTag(
    [action_tags.insert],
    [action_tags.awake, action_tags.virgin],
  );

  ero_tagged_hooks[actions.sitting_anal_sex] = new EroHookTag(
    [action_tags.insert],
    [action_tags.anal, action_tags.awake],
  );

  ero_tagged_hooks[actions.hug_sitting] = ero_tagged_hooks[actions.sitting];

  ero_tagged_hooks[actions.hug_sitting_anal_sex] =
    ero_tagged_hooks[actions.sitting_anal_sex];

  ero_tagged_hooks[actions.standing] = ero_tagged_hooks[actions.sitting];

  ero_tagged_hooks[actions.standing_anal_sex] =
    ero_tagged_hooks[actions.sitting_anal_sex];

  ero_tagged_hooks[actions.hug_standing] = ero_tagged_hooks[actions.sitting];

  ero_tagged_hooks[actions.hug_standing_anal_sex] =
    ero_tagged_hooks[actions.sitting_anal_sex];

  ero_tagged_hooks[actions.suspended_congress] = new EroHookTag(
    [action_tags.insert, action_tags.height_check],
    [action_tags.virgin],
  );

  ero_tagged_hooks[actions.suspended_congress_anal_sex] = new EroHookTag(
    [action_tags.insert, action_tags.height_check],
    [action_tags.anal],
  );

  ero_tagged_hooks[actions.fucked_suspended_congress] = new EroHookTag(
    [action_tags.virgin, action_tags.height_check],
    [action_tags.insert],
  );

  ero_tagged_hooks[actions.fucked_suspended_congress_anal_sex] = new EroHookTag(
    [action_tags.anal, action_tags.height_check],
    [action_tags.insert],
  );

  ero_tagged_hooks[actions.hug_suspended_congress] =
    ero_tagged_hooks[actions.suspended_congress];

  ero_tagged_hooks[actions.hug_suspended_congress_anal_sex] =
    ero_tagged_hooks[actions.suspended_congress_anal_sex];

  ero_tagged_hooks[actions.ask_cowgirl] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        (era.get(`tcvar:${cid}:阴茎接触部位`) === -1 &&
          era.get(`tcvar:${oid}:阴道接触部位`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.penis,
            d: part_enum.virgin,
          })),
    ],
    [action_tags.awake, action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_cowgirl_anal_sex] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        (era.get(`tcvar:${cid}:阴茎接触部位`) === -1 &&
          era.get(`tcvar:${oid}:肛门接触部位`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.penis,
            d: part_enum.anal,
          })),
    ],
    [action_tags.anal, action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_fuck] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.virgin,
      EroHookTag.npc_virgin_sex_check,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        (era.get(`tcvar:${cid}:阴道接触部位`) === -1 &&
          era.get(`tcvar:${oid}:阴茎接触部位`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.virgin,
            d: part_enum.penis,
          })),
    ],
    [action_tags.awake, action_tags.insert],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_fuck_anal] = new EroHookTag(
    [
      action_tags.anal,
      action_tags.awake,
      EroHookTag.npc_anal_sex_check,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        (era.get(`tcvar:${cid}:肛门接触部位`) === -1 &&
          era.get(`tcvar:${oid}:阴茎接触部位`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.anal,
            d: part_enum.penis,
          })),
    ],
    [action_tags.awake, action_tags.insert],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.cowgirl] = new EroHookTag(
    [action_tags.virgin, EroHookTag.npc_virgin_sex_check],
    [action_tags.insert],
  );

  ero_tagged_hooks[actions.cowgirl_anal_sex] = new EroHookTag(
    [action_tags.anal, EroHookTag.npc_anal_sex_check],
    [action_tags.insert],
  );

  // 性交派生系
  ero_tagged_hooks[actions.ask_stimulate_glans_by_virgin] = new EroHookTag(
    [action_tags.insert],
    [action_tags.awake, action_tags.virgin, EroHookTag.penis_in_virgin_check],
  );
  ero_derive_check[actions.ask_stimulate_glans_by_virgin] = true;

  ero_tagged_hooks[actions.ask_stimulate_glans_by_anal] = new EroHookTag(
    [action_tags.insert],
    [action_tags.anal, action_tags.awake, EroHookTag.penis_in_anal_check],
  );
  ero_derive_check[actions.ask_stimulate_glans_by_anal] = true;

  ero_tagged_hooks[actions.stimulate_g_spot] = new EroHookTag(
    [action_tags.awake, action_tags.insert],
    [action_tags.virgin, EroHookTag.penis_in_virgin_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.stimulate_g_spot] = true;

  ero_tagged_hooks[actions.stimulate_large_intestine] = new EroHookTag(
    [action_tags.awake, action_tags.insert],
    [action_tags.anal, EroHookTag.penis_in_anal_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.stimulate_large_intestine] = true;

  ero_tagged_hooks[actions.stimulate_womb] = new EroHookTag(
    [action_tags.awake, action_tags.insert],
    [
      action_tags.anal,
      // CFLAGNAME:5 = 阴道尺寸
      (cid) => era.get(`cflag:${cid}:5`) > 0,
      EroHookTag.penis_in_anal_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.stimulate_womb] = true;

  ero_tagged_hooks[actions.ask_stimulate_g_spot] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.virgin,
      EroHookTag.npc_virgin_sex_check,
      EroHookTag.penis_in_virgin_check,
    ],
    [action_tags.awake, action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.ask_stimulate_g_spot] = true;

  ero_tagged_hooks[actions.stimulate_glans_by_virgin] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.virgin,
      EroHookTag.npc_virgin_sex_check,
      EroHookTag.penis_in_virgin_check,
    ],
    [action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.stimulate_glans_by_virgin] = true;

  ero_tagged_hooks[actions.ask_stimulate_large_intestine] = new EroHookTag(
    [
      action_tags.anal,
      action_tags.awake,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [action_tags.awake, action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.ask_stimulate_large_intestine] = true;

  ero_tagged_hooks[actions.ask_stimulate_womb] = new EroHookTag(
    [
      action_tags.anal,
      action_tags.awake,
      // CFLAGNAME:5 = 阴道尺寸
      (cid) => era.get(`cflag:${cid}:5`) > 0,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [action_tags.awake, action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.ask_stimulate_womb] = true;

  ero_tagged_hooks[actions.stimulate_glans_by_anal] = new EroHookTag(
    [
      action_tags.anal,
      action_tags.awake,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.stimulate_glans_by_anal] = true;
};
