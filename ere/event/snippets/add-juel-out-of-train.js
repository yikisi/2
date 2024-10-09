const { add_juel, update_juels } = require('#/system/ero/sys-calc-juel');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');

const { palam2juel } = require('#/data/ero/orgasm-const');

/**
 * @param {number} chara_id
 * @param {string|string[]} keys
 * @param {number|number[]} nums
 */
async function add_juel_out_of_train(chara_id, keys, nums) {
  begin_and_init_ero(chara_id);
  const key_list = keys instanceof Array ? keys : [keys];
  const num_list = nums instanceof Array ? nums : [nums];
  for (let i = 0; i < Math.min(key_list.length, num_list.length); ++i) {
    add_juel(chara_id, key_list[i], num_list[i] * palam2juel);
  }
  update_juels(true, chara_id);
  end_ero_and_train(true);
}

module.exports = add_juel_out_of_train;
