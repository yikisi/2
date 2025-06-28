const era = require('#/era-electron');

const EroTouch = require('#/data/ero/ero-touch');
const { part_enum } = require('#/data/ero/part-const');
const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_action_names, ero_tagged_hooks, ero_derive_check) => {
  ero_action_names[ero_actions.go_on] = '放弃挣扎';
  ero_tagged_hooks[ero_actions.go_on] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
    EroHookTag.condition_type.in_active,
  );

  ero_action_names[ero_actions.kiss] = '接吻';
  ero_tagged_hooks[ero_actions.kiss] = new EroHookTag(
    [ero_action_tags.mouth],
    [ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.relax] = '什么都不做';
  ero_tagged_hooks[ero_actions.relax] = new EroHookTag(
    [(chara_id) => !chara_id || !era.get('tflag:主导权')],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.lure] = '调情';
  ero_tagged_hooks[ero_actions.lure] = new EroHookTag(
    [ero_action_tags.mouth, EroHookTag.speak_check],
    [ero_action_tags.awake],
  );

  ero_action_names[ero_actions.talk] = '交谈';
  ero_tagged_hooks[ero_actions.talk] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      EroHookTag.speak_check,
      (chara_id) => !chara_id,
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.switch] = '交出主导权';
  ero_tagged_hooks[ero_actions.switch] = new EroHookTag(
    [(chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      (chara_id) =>
        era.get(`mark:${chara_id}:苦痛`) < 2 &&
        era.get(`mark:${chara_id}:羞耻`) < 2 &&
        era.get(`mark:${chara_id}:反抗`) < 2,
    ],
  );

  ero_action_names[ero_actions.resist] = '反抗';
  ero_tagged_hooks[ero_actions.resist] = new EroHookTag(
    [ero_action_tags.awake, (cid) => !cid],
    [],
    EroHookTag.condition_type.in_active,
  );

  ero_action_names[ero_actions.gargle] = '漱口';
  ero_tagged_hooks[ero_actions.gargle] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
  );

  ero_action_names[ero_actions.wipe_body] = '擦拭身体';
  ero_tagged_hooks[ero_actions.wipe_body] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
  );

  // 沟通派生
  ero_action_names[ero_actions.french_kiss] = '舌吻';
  ero_tagged_hooks[ero_actions.french_kiss] = new EroHookTag(
    [ero_action_tags.mouth],
    [
      ero_action_tags.mouth,
      (cid, oid) => {
        const touch = new EroTouch(cid, part_enum.mouth);
        return touch.owner === oid && touch.part === part_enum.mouth;
      },
    ],
  );
  ero_derive_check[ero_actions.french_kiss] = true;
};
