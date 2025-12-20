const era = require('#/era-electron');

const EroTouch = require('#/data/ero/ero-touch');
const { mark_enum } = require('#/data/ero/mark-const');
const { part_enum } = require('#/data/ero/part-const');
const { action_tags, actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_tagged_hooks, ero_derive_check) => {
  ero_tagged_hooks[actions.go_on] = new EroHookTag(
    [(cid) => !cid],
    [],
    EroHookTag.condition_type.in_active,
  );

  ero_tagged_hooks[actions.kiss] = new EroHookTag(
    [action_tags.mouth],
    [action_tags.mouth],
  );

  ero_tagged_hooks[actions.relax] = new EroHookTag(
    // TFLAGNAME:7 = 主导权
    [(cid) => !cid || !era.get('tflag:7')],
    [],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.lure] = new EroHookTag(
    [action_tags.mouth, EroHookTag.speak_check],
    [action_tags.awake],
  );

  ero_tagged_hooks[actions.talk] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.mouth,
      EroHookTag.speak_check,
      (cid) => !cid,
    ],
    [action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.switch] = new EroHookTag(
    [(cid) => !cid],
    [
      action_tags.awake,
      (cid) =>
        era.get(`mark:${cid}:${mark_enum.pain}`) < 2 &&
        era.get(`mark:${cid}:${mark_enum.shame}`) < 2 &&
        era.get(`mark:${cid}:${mark_enum.hate}`) < 2,
    ],
  );

  ero_tagged_hooks[actions.resist] = new EroHookTag(
    [action_tags.awake, (cid) => !cid],
    [],
    EroHookTag.condition_type.in_active,
  );

  ero_tagged_hooks[actions.gargle] = new EroHookTag([(cid) => !cid], []);

  ero_tagged_hooks[actions.wipe_body] = new EroHookTag([(cid) => !cid], []);

  // 沟通派生
  ero_tagged_hooks[actions.french_kiss] = new EroHookTag(
    [action_tags.mouth],
    [
      action_tags.mouth,
      (cid, oid) => {
        const touch = new EroTouch(cid, part_enum.mouth);
        return touch.owner === oid && touch.part === part_enum.mouth;
      },
    ],
  );
  ero_derive_check[actions.french_kiss] = true;
};
