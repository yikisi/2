const era = require('#/era-electron');

const { action_tags, actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');
const { location_enum } = require('#/data/locations');

/** @param {EroHookTag[]} ero_tagged_hooks */
module.exports = (ero_tagged_hooks) => {
  ero_tagged_hooks[actions.use_lubricating_fluid] = new EroHookTag(
    [
      (cid) =>
        !cid &&
        era.get('item:润滑液') &&
        era.get('flag:当前位置') !== location_enum.basement &&
        era.get('flag:当前位置') !== location_enum.mejiro,
    ],
    [],
  );

  ero_tagged_hooks[actions.use_medicine] = new EroHookTag(
    [
      (cid) =>
        !cid &&
        era.get('flag:当前位置') !== location_enum.basement &&
        era.get('flag:当前位置') !== location_enum.mejiro,
    ],
    [],
  );

  ero_tagged_hooks[actions.condom] = new EroHookTag(
    [
      action_tags.penis,
      (cid) =>
        !cid &&
        era.get('item:避孕套') &&
        !era.get(`tcvar:${cid}:避孕套`) &&
        !era.get(`status:${cid}:弗隆K`) &&
        era.get('flag:当前位置') !== location_enum.basement &&
        era.get('flag:当前位置') !== location_enum.mejiro,
    ],
    [],
  );

  ero_tagged_hooks[actions.other_condom] = new EroHookTag(
    [
      (cid) =>
        !cid &&
        era.get('item:避孕套') &&
        era.get('flag:当前位置') !== location_enum.basement &&
        era.get('flag:当前位置') !== location_enum.mejiro,
    ],
    [
      action_tags.penis,
      (cid) =>
        !era.get(`tcvar:${cid}:避孕套`) && !era.get(`status:${cid}:弗隆K`),
    ],
  );

  ero_tagged_hooks[actions.use_item] = new EroHookTag(
    [
      action_tags.sadism,
      (cid) =>
        cid > 0 ||
        (era.get('flag:当前位置') !== location_enum.basement &&
          era.get('flag:当前位置') !== location_enum.mejiro),
    ],
    [],
  );

  ero_tagged_hooks[actions.take_off_item] = new EroHookTag([(cid) => !cid], []);

  ero_tagged_hooks[actions.ask_use_item] = new EroHookTag(
    [
      action_tags.awake,
      (cid) => !cid && era.get('flag:当前位置') !== location_enum.mejiro,
    ],
    [action_tags.awake],
    EroHookTag.condition_type.no,
  );
};
