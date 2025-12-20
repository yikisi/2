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
  ero_tagged_hooks[actions.insult] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.imp,
      EroHookTag.speak_check,
    ],
    [action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_insult] = new EroHookTag(
    [action_tags.awake, action_tags.m_abused],
    [action_tags.awake, action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.hit_anal] = new EroHookTag(
    [action_tags.imp],
    [action_tags.body],
  );

  ero_tagged_hooks[actions.ask_hit_anal] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.body,
      action_tags.m_hit,
      EroHookTag.generate_touch_check(part_enum.anal, part_enum.hand),
    ],
    [action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.hit_breast] = new EroHookTag(
    [action_tags.sadism],
    [action_tags.breast],
  );

  ero_tagged_hooks[actions.ask_hit_breast] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.breast,
      action_tags.m_hit,
      EroHookTag.generate_touch_check(part_enum.breast, part_enum.hand),
    ],
    [action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.hit_face] = new EroHookTag(
    [action_tags.super_sadism],
    [action_tags.body],
  );

  ero_tagged_hooks[actions.hit_face_by_penis] = new EroHookTag(
    [action_tags.penis, action_tags.sadism],
    [],
  );

  ero_tagged_hooks[actions.ask_hit_face] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.body,
      action_tags.m_hit,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        (era.get(`tcvar:${oid}:手部接触部位`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.mouth,
            d: part_enum.hand,
          })),
    ],
    [action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.virgin_foot_job] = new EroHookTag(
    [action_tags.sadism],
    [action_tags.clitoris],
  );

  ero_tagged_hooks[actions.ask_virgin_foot_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.clitoris,
      EroHookTag.generate_touch_check(part_enum.clitoris, part_enum.foot),
    ],
    [action_tags.awake, action_tags.sadism],
    EroHookTag.condition_type.no,
  );

  // 性虐派生系
  ero_tagged_hooks[actions.hit_anal_hard] = new EroHookTag(
    [action_tags.super_sadism],
    [
      (cid) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === actions.hit_anal ||
            last_action === actions.hit_anal_hard) &&
          era.get(`tflag:前回对手`) === cid
        );
      },
    ],
  );
  ero_derive_check[actions.hit_anal_hard] = true;

  ero_tagged_hooks[actions.hit_breast_hard] = new EroHookTag(
    [action_tags.super_sadism],
    [
      action_tags.breast,
      (cid) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === actions.hit_breast ||
            last_action === actions.hit_breast_hard) &&
          era.get(`tflag:前回对手`) === cid
        );
      },
    ],
  );
  ero_derive_check[actions.hit_breast_hard] = true;

  ero_tagged_hooks[actions.hit_face_hard] = new EroHookTag(
    [action_tags.super_sadism],
    [
      (cid) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === actions.hit_face ||
            last_action === actions.hit_face_hard) &&
          era.get(`tflag:前回对手`) === cid
        );
      },
    ],
  );
  ero_derive_check[actions.hit_face_hard] = true;
};
