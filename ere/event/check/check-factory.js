const { get } = require('#/era-electron');

const common_cons = require('#/event/check/check-common');
const script_dict = require('#/event/script-dict.json');

const { first_child_id } = require('#/data/other-const');

const cons_dict = {},
  obj_dict = {};

const current = new Date().getTime();

cons_dict[3] = require('#/event/check/check-3');
cons_dict[7] = require('#/event/check/check-7');
cons_dict[8] = require('#/event/check/check-8');
cons_dict[9] = require('#/event/check/check-9');
cons_dict[11] = require('#/event/check/check-11');
cons_dict[13] = require('#/event/check/check-13');
cons_dict[14] = require('#/event/check/check-14');
cons_dict[16] = require('#/event/check/check-16');
cons_dict[17] = require('#/event/check/check-17');
cons_dict[18] = require('#/event/check/check-18');
cons_dict[19] = require('#/event/check/check-19');
cons_dict[25] = require('#/event/check/check-25');
cons_dict[26] = require('#/event/check/check-26');
cons_dict[27] = require('#/event/check/check-27');
cons_dict[30] = require('#/event/check/check-30');
cons_dict[32] = require('#/event/check/check-32');
cons_dict[33] = require('#/event/check/check-33');
cons_dict[34] = require('#/event/check/check-34');
cons_dict[37] = require('#/event/check/check-37');
cons_dict[41] = require('#/event/check/check-41');
cons_dict[45] = require('#/event/check/check-45');
cons_dict[48] = require('#/event/check/check-48');
cons_dict[52] = require('#/event/check/check-52');
cons_dict[60] = require('#/event/check/check-60');
cons_dict[62] = require('#/event/check/check-62');
cons_dict[63] = require('#/event/check/check-63');
cons_dict[67] = require('#/event/check/check-67');
cons_dict[68] = require('#/event/check/check-68');
cons_dict[71] = require('#/event/check/check-71');
cons_dict[76] = require('#/event/check/check-76');
cons_dict[77] = require('#/event/check/check-77');
cons_dict[80] = require('#/event/check/check-80');
cons_dict[82] = require('#/event/check/check-82');
cons_dict[83] = require('#/event/check/check-83');
cons_dict[86] = require('#/event/check/check-86');
cons_dict[87] = require('#/event/check/check-87');
cons_dict[88] = require('#/event/check/check-88');
cons_dict[89] = require('#/event/check/check-89');
cons_dict[91] = require('#/event/check/check-91');
cons_dict[100] = require('#/event/check/check-100');
cons_dict[102] = require('#/event/check/check-102');
cons_dict[104] = require('#/event/check/check-104');
cons_dict[107] = require('#/event/check/check-107');
cons_dict[108] = require('#/event/check/check-108');
cons_dict[109] = require('#/event/check/check-109');
cons_dict[201] = require('#/event/check/check-201');
cons_dict[202] = require('#/event/check/check-202');
cons_dict[203] = require('#/event/check/check-203');
cons_dict[204] = require('#/event/check/check-204');
cons_dict[205] = require('#/event/check/check-205');
cons_dict[206] = require('#/event/check/check-206');
cons_dict[304] = require('#/event/check/check-304');
cons_dict[303] = require('#/event/check/check-303');
cons_dict[306] = require('#/event/check/check-306');
cons_dict[340] = require('#/event/check/check-340');
cons_dict[341] = require('#/event/check/check-341');
cons_dict[342] = require('#/event/check/check-342');
cons_dict[343] = require('#/event/check/check-343');
cons_dict['emperor'] = require('#/event/check/check-emperor');

console.log(
  '[check-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} chara_id
   * @returns {CustomizedCheck}
   */
  get_custom_check(chara_id) {
    if (obj_dict[chara_id]) {
      return obj_dict[chara_id];
    }
    const script_name =
        chara_id >= first_child_id ? get(`callname:${chara_id}:-2`) : chara_id,
      class_cons =
        cons_dict[script_dict[script_name] || script_name] || common_cons;
    return (obj_dict[chara_id] = new class_cons(chara_id));
  },
};
