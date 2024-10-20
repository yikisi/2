const { get } = require('#/era-electron');

const common_basement = require('#/event/basement/basement-common');
const script_dict = require('#/event/script-dict.json');

const { first_child_id } = require('#/data/other-const');

const cons_dict = {},
  obj_dict = {};

const current = new Date().getTime();

cons_dict[3] = require('#/event/basement/basement-3');
cons_dict[7] = require('#/event/basement/basement-7');
cons_dict[13] = require('#/event/basement/basement-13');
cons_dict[25] = require('#/event/basement/basement-25');
cons_dict[32] = require('#/event/basement/basement-32');
cons_dict[52] = require('#/event/basement/basement-52');
cons_dict[64] = require('#/event/basement/basement-64');
cons_dict[89] = require('#/event/basement/basement-89');
cons_dict[119] = require('#/event/basement/basement-119');

console.log(
  '[basement-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} chara_id
   * @returns {CustomizedBase}
   */
  get_custom_basement(chara_id) {
    if (obj_dict[chara_id]) {
      return obj_dict[chara_id];
    }
    const script_name =
        chara_id >= first_child_id ? get(`callname:${chara_id}:-2`) : chara_id,
      class_cons =
        cons_dict[script_dict[script_name] || script_name] || common_basement;
    return (obj_dict[chara_id] = new class_cons(chara_id));
  },
};
