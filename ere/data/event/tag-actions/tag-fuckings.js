const era = require('#/era-electron');

const { sys_check_distance } = require('#/system/ero/sys-calc-distance');

const { part_enum } = require('#/data/ero/part-const');
const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_action_names, ero_tagged_hooks, ero_derive_check) => {
  ero_action_names[ero_actions.missionary] = '正常位';
  ero_tagged_hooks[ero_actions.missionary] = new EroHookTag(
    [ero_action_tags.insert],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.missionary_anal_sex] = '正常位肛交';
  ero_tagged_hooks[ero_actions.missionary_anal_sex] = new EroHookTag(
    [ero_action_tags.insert],
    [ero_action_tags.anal],
  );

  ero_action_names[ero_actions.doggy_style] = '后背位';
  ero_tagged_hooks[ero_actions.doggy_style] =
    ero_tagged_hooks[ero_actions.missionary];

  ero_action_names[ero_actions.doggy_style_anal_sex] = '后背位肛交';
  ero_tagged_hooks[ero_actions.doggy_style_anal_sex] =
    ero_tagged_hooks[ero_actions.missionary_anal_sex];

  ero_action_names[ero_actions.sitting] = '对面坐位';
  ero_tagged_hooks[ero_actions.sitting] = new EroHookTag(
    [ero_action_tags.insert],
    [ero_action_tags.awake, ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.sitting_anal_sex] = '对面坐位肛交';
  ero_tagged_hooks[ero_actions.sitting_anal_sex] = new EroHookTag(
    [ero_action_tags.insert],
    [ero_action_tags.anal, ero_action_tags.awake],
  );

  ero_action_names[ero_actions.hug_sitting] = '背面坐位';
  ero_tagged_hooks[ero_actions.hug_sitting] =
    ero_tagged_hooks[ero_actions.sitting];

  ero_action_names[ero_actions.hug_sitting_anal_sex] = '背面坐位肛交';
  ero_tagged_hooks[ero_actions.hug_sitting_anal_sex] =
    ero_tagged_hooks[ero_actions.sitting_anal_sex];

  ero_action_names[ero_actions.standing] = '对面立位';
  ero_tagged_hooks[ero_actions.standing] =
    ero_tagged_hooks[ero_actions.sitting];

  ero_action_names[ero_actions.standing_anal_sex] = '对面立位肛交';
  ero_tagged_hooks[ero_actions.standing_anal_sex] =
    ero_tagged_hooks[ero_actions.sitting_anal_sex];

  ero_action_names[ero_actions.hug_standing] = '背面立位';
  ero_tagged_hooks[ero_actions.hug_standing] =
    ero_tagged_hooks[ero_actions.sitting];

  ero_action_names[ero_actions.hug_standing_anal_sex] = '背面立位肛交';
  ero_tagged_hooks[ero_actions.hug_standing_anal_sex] =
    ero_tagged_hooks[ero_actions.sitting_anal_sex];

  ero_action_names[ero_actions.suspended_congress] = '火车便当位';
  ero_tagged_hooks[ero_actions.suspended_congress] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.height_check],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.suspended_congress_anal_sex] = '火车便当肛交';
  ero_tagged_hooks[ero_actions.suspended_congress_anal_sex] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.height_check],
    [ero_action_tags.anal],
  );

  ero_action_names[ero_actions.fucked_suspended_congress] = '逆火车便当';
  ero_tagged_hooks[ero_actions.fucked_suspended_congress] = new EroHookTag(
    [ero_action_tags.virgin, ero_action_tags.height_check],
    [ero_action_tags.insert],
  );

  ero_action_names[ero_actions.fucked_suspended_congress_anal_sex] =
    '逆火车便当肛交';
  ero_tagged_hooks[ero_actions.fucked_suspended_congress_anal_sex] =
    new EroHookTag(
      [ero_action_tags.anal, ero_action_tags.height_check],
      [ero_action_tags.insert],
    );

  ero_action_names[ero_actions.hug_suspended_congress] = '背向火车便当';
  ero_tagged_hooks[ero_actions.hug_suspended_congress] =
    ero_tagged_hooks[ero_actions.suspended_congress];

  ero_action_names[ero_actions.hug_suspended_congress_anal_sex] =
    '背向便当肛交';
  ero_tagged_hooks[ero_actions.hug_suspended_congress_anal_sex] =
    ero_tagged_hooks[ero_actions.suspended_congress_anal_sex];

  ero_action_names[ero_actions.ask_cowgirl] = '请求女上位';
  ero_tagged_hooks[ero_actions.ask_cowgirl] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        (era.get(`tcvar:${cid}:阴茎接触部位`) === -1 &&
          era.get(`tcvar:${oid}:阴道接触部位`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.penis,
            d: part_enum.virgin,
          })),
    ],
    [ero_action_tags.awake, ero_action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_cowgirl_anal_sex] = '请求女上位肛交';
  ero_tagged_hooks[ero_actions.ask_cowgirl_anal_sex] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        (era.get(`tcvar:${cid}:阴茎接触部位`) === -1 &&
          era.get(`tcvar:${oid}:肛门接触部位`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.penis,
            d: part_enum.anal,
          })),
    ],
    [ero_action_tags.anal, ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_fuck] = '请求插入';
  ero_tagged_hooks[ero_actions.ask_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
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
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_fuck_anal] = '请求插入菊花';
  ero_tagged_hooks[ero_actions.ask_fuck_anal] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
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
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.cowgirl] = '女上位';
  ero_tagged_hooks[ero_actions.cowgirl] = new EroHookTag(
    [ero_action_tags.virgin, EroHookTag.npc_virgin_sex_check],
    [ero_action_tags.insert],
  );

  ero_action_names[ero_actions.cowgirl_anal_sex] = '女上位肛交';
  ero_tagged_hooks[ero_actions.cowgirl_anal_sex] = new EroHookTag(
    [ero_action_tags.anal, EroHookTag.npc_anal_sex_check],
    [ero_action_tags.insert],
  );

  // 性交派生系
  ero_action_names[ero_actions.ask_stimulate_glans_by_virgin] = '请求自己动';
  ero_tagged_hooks[ero_actions.ask_stimulate_glans_by_virgin] = new EroHookTag(
    [ero_action_tags.insert],
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      EroHookTag.penis_in_virgin_check,
    ],
  );
  ero_derive_check[ero_actions.ask_stimulate_glans_by_virgin] = true;

  ero_action_names[ero_actions.ask_stimulate_glans_by_anal] = '请求自己动';
  ero_tagged_hooks[ero_actions.ask_stimulate_glans_by_anal] = new EroHookTag(
    [ero_action_tags.insert],
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      EroHookTag.penis_in_anal_check,
    ],
  );
  ero_derive_check[ero_actions.ask_stimulate_glans_by_anal] = true;

  ero_action_names[ero_actions.stimulate_g_spot] = '深入蹂躏G点';
  ero_tagged_hooks[ero_actions.stimulate_g_spot] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.insert],
    [ero_action_tags.virgin, EroHookTag.penis_in_virgin_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_g_spot] = true;

  ero_action_names[ero_actions.stimulate_large_intestine] = '蹂躏S状结肠';
  ero_tagged_hooks[ero_actions.stimulate_large_intestine] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.insert],
    [ero_action_tags.anal, EroHookTag.penis_in_anal_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_large_intestine] = true;

  ero_action_names[ero_actions.stimulate_womb] = '隔着刺激子宫';
  ero_tagged_hooks[ero_actions.stimulate_womb] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.insert],
    [
      ero_action_tags.anal,
      (chara_id) => era.get(`cflag:${chara_id}:阴道尺寸`) > 0,
      EroHookTag.penis_in_anal_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_womb] = true;

  ero_action_names[ero_actions.ask_stimulate_g_spot] = '请求深入G点';
  ero_tagged_hooks[ero_actions.ask_stimulate_g_spot] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      EroHookTag.npc_virgin_sex_check,
      EroHookTag.penis_in_virgin_check,
    ],
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_stimulate_g_spot] = true;

  ero_action_names[ero_actions.stimulate_glans_by_virgin] = '绞紧小穴';
  ero_tagged_hooks[ero_actions.stimulate_glans_by_virgin] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      EroHookTag.npc_virgin_sex_check,
      EroHookTag.penis_in_virgin_check,
    ],
    [ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_glans_by_virgin] = true;

  ero_action_names[ero_actions.ask_stimulate_large_intestine] = '请求刺激结肠';
  ero_tagged_hooks[ero_actions.ask_stimulate_large_intestine] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_stimulate_large_intestine] = true;

  ero_action_names[ero_actions.ask_stimulate_womb] = '请求刺激子宫';
  ero_tagged_hooks[ero_actions.ask_stimulate_womb] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      (chara_id) => era.get(`cflag:${chara_id}:阴道尺寸`) > 0,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_stimulate_womb] = true;

  ero_action_names[ero_actions.stimulate_glans_by_anal] = '绞紧后穴';
  ero_tagged_hooks[ero_actions.stimulate_glans_by_anal] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_glans_by_anal] = true;
};
