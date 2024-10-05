const { get } = require('#/era-electron');

const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const { ero_tagged_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {Record<string,*>} extra_flag
 * @returns {{attacker:number,defender:number}}
 */
function get_participants_and_first_action(chara_id, hook, extra_flag) {
  const { attacker, defender } =
    (ero_tagged_hooks[hook.hook] || default_tags).condition ===
    condition_type.active
      ? get('tflag:主导权')
        ? { attacker: chara_id, defender: 0 }
        : { attacker: 0, defender: chara_id }
      : extra_flag;
  hook.arg = true;
  if (attacker === get('tflag:主导权')) {
    hook.arg = get('tflag:前回行动') !== hook.hook;
  } else if (attacker === get('tflag:前回对手')) {
    hook.arg = get('tflag:对手行动') !== hook.hook;
  }
  return { attacker, defender };
}

module.exports = get_participants_and_first_action;
