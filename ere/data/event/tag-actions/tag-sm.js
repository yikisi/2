const era = require('#/era-electron');

const { part_enum } = require('#/data/ero/part-const');
const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_action_names, ero_tagged_hooks, ero_derive_check) => {
  ero_action_names[ero_actions.insult] = '侮辱';
  ero_tagged_hooks[ero_actions.insult] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.sadism,
      EroHookTag.speak_check,
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_insult] = '请求侮辱';
  ero_tagged_hooks[ero_actions.ask_insult] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.m_abused],
    [ero_action_tags.awake, ero_action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.hit_anal] = '打屁股';
  ero_tagged_hooks[ero_actions.hit_anal] = new EroHookTag(
    [ero_action_tags.sadism],
    [ero_action_tags.body],
  );

  ero_action_names[ero_actions.ask_hit_anal] = '请求打屁股';
  ero_tagged_hooks[ero_actions.ask_hit_anal] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      ero_action_tags.m_hit,
      EroHookTag.generate_touch_check(part_enum.anal, part_enum.hand),
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.hit_breast] = '打奶光';
  ero_tagged_hooks[ero_actions.hit_breast] = new EroHookTag(
    [ero_action_tags.sadism],
    [ero_action_tags.breast],
  );

  ero_action_names[ero_actions.ask_hit_breast] = '请求打奶光';
  ero_tagged_hooks[ero_actions.ask_hit_breast] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.m_hit,
      EroHookTag.generate_touch_check(part_enum.breast, part_enum.hand),
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.hit_face] = '打耳光';
  ero_tagged_hooks[ero_actions.hit_face] =
    ero_tagged_hooks[ero_actions.hit_anal];

  ero_action_names[ero_actions.hit_face_by_penis] = '阴茎耳光';
  ero_tagged_hooks[ero_actions.hit_face_by_penis] = new EroHookTag(
    [ero_action_tags.penis, ero_action_tags.sadism],
    [],
  );

  ero_action_names[ero_actions.ask_hit_face] = '请求打耳光';
  ero_tagged_hooks[ero_actions.ask_hit_face] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      ero_action_tags.m_hit,
      (chara_id, other_id) =>
        era.get('tflag:主导权') === chara_id ||
        era.get(`tcvar:${other_id}:手部接触部位`) === -1,
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.virgin_foot_job] = '践踏阴部';
  ero_tagged_hooks[ero_actions.virgin_foot_job] = new EroHookTag(
    [ero_action_tags.sadism],
    [ero_action_tags.clitoris],
  );

  ero_action_names[ero_actions.ask_virgin_foot_job] = '请求践踏阴部';
  ero_tagged_hooks[ero_actions.ask_virgin_foot_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.clitoris,
      EroHookTag.generate_touch_check(part_enum.clitoris, part_enum.foot),
    ],
    [ero_action_tags.awake, ero_action_tags.sadism],
    EroHookTag.condition_type.no,
  );

  // 性虐派生系
  ero_action_names[ero_actions.hit_anal_hard] = '用力打屁股';
  ero_tagged_hooks[ero_actions.hit_anal_hard] = new EroHookTag(
    [ero_action_tags.sadism],
    [
      (chara_id) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === ero_actions.hit_anal ||
            last_action === ero_actions.hit_anal_hard) &&
          era.get(`tflag:前回对手`) === chara_id
        );
      },
    ],
  );
  ero_derive_check[ero_actions.hit_anal_hard] = true;

  ero_action_names[ero_actions.hit_breast_hard] = '用力打奶光';
  ero_tagged_hooks[ero_actions.hit_breast_hard] = new EroHookTag(
    [ero_action_tags.sadism],
    [
      ero_action_tags.breast,
      (chara_id) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === ero_actions.hit_breast ||
            last_action === ero_actions.hit_breast_hard) &&
          era.get(`tflag:前回对手`) === chara_id
        );
      },
    ],
  );
  ero_derive_check[ero_actions.hit_breast_hard] = true;

  ero_action_names[ero_actions.hit_face_hard] = '用力打耳光';
  ero_tagged_hooks[ero_actions.hit_face_hard] = new EroHookTag(
    [ero_action_tags.sadism],
    [
      (chara_id) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === ero_actions.hit_face ||
            last_action === ero_actions.hit_face_hard) &&
          era.get(`tflag:前回对手`) === chara_id
        );
      },
    ],
  );
  ero_derive_check[ero_actions.hit_face_hard] = true;
};
