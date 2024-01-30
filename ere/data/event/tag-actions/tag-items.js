const era = require('#/era-electron');

const { ero_actions, ero_action_tags } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 */
module.exports = (ero_action_names, ero_tagged_hooks) => {
  ero_action_names[ero_actions.use_lubricating_fluid] = '使用润滑液';
  ero_tagged_hooks[ero_actions.use_lubricating_fluid] = new EroHookTag(
    [(chara_id) => !chara_id && era.get('item:润滑液')],
    [],
  );

  ero_action_names[ero_actions.use_medicine] = '喂食药物';
  ero_tagged_hooks[ero_actions.use_medicine] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
  );

  ero_action_names[ero_actions.condom] = '戴上避孕套';
  ero_tagged_hooks[ero_actions.condom] = new EroHookTag(
    [
      ero_action_tags.penis,
      (chara_id) =>
        !chara_id &&
        era.get('item:避孕套') &&
        !era.get(`tcvar:${chara_id}:避孕套`) &&
        !era.get(`status:${chara_id}:弗隆K`),
    ],
    [],
  );

  ero_action_names[ero_actions.other_condom] = '给对方戴避孕套';
  ero_tagged_hooks[ero_actions.other_condom] = new EroHookTag(
    [(chara_id) => !chara_id && era.get('item:避孕套')],
    [
      ero_action_tags.penis,
      (chara_id) =>
        !era.get(`tcvar:${chara_id}:避孕套`) &&
        !era.get(`status:${chara_id}:弗隆K`),
    ],
  );

  ero_action_names[ero_actions.use_item] = '使用性玩具';
  ero_tagged_hooks[ero_actions.use_item] = new EroHookTag(
    [ero_action_tags.sadism],
    [],
  );

  ero_action_names[ero_actions.take_off_item] = '撤除性玩具';
  ero_tagged_hooks[ero_actions.take_off_item] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
  );

  ero_action_names[ero_actions.ask_use_item] = '乞求使用性玩具';
  ero_tagged_hooks[ero_actions.ask_use_item] = new EroHookTag(
    [ero_action_tags.awake, (chara_id) => !chara_id],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );
};
