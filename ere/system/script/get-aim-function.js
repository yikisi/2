const era = require('#/era-electron');

const script_dict = require('#/event/script-dict.json');

const { first_child_id } = require('#/data/other-const');

/**
 * @param {string} script_category
 * @param {number} chara_id
 * @param {*} extra_flag
 */
function get_aim_function(script_category, chara_id, extra_flag) {
  const script_name =
    chara_id >= first_child_id ? era.get(`callname:${chara_id}:-2`) : chara_id;
  if (typeof script_name === 'string') {
    (extra_flag || (extra_flag = {})).chara_id = chara_id;
  }
  try {
    const func = require(`#/event/${script_category}/${script_category}-${
      script_dict[script_name] || script_name
    }`);
    return { func, _extra: extra_flag || {} };
  } catch (_) {
    throw new Error('unsupported!');
  }
}

module.exports = get_aim_function;
