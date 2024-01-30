const era = require('#/era-electron');

const { set_stain } = require('#/system/ero/sys-calc-stain');

const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');

/**
 * @param {number} chara_id
 * @param {number} amount
 * @returns {number}
 */
function check_nipple_clamps(chara_id, amount) {
  let ret = Math.ceil(amount);
  if (ret < 0) {
    ret = 0;
  }
  if (era.get(`tequip:${chara_id}:胸部`) === item_enum.clamps) {
    era.add(`nowex:${chara_id}:喷奶阻碍`, ret);
    return 0;
  } else {
    set_stain(chara_id, part_enum.breast, stain_enum.milk);
    ret += era.get(`ex:${chara_id}:喷奶阻碍`);
    era.add(`exp:${chara_id}:喷奶量`, ret);
    era.add(`nowex:${chara_id}:喷奶量`, ret);
  }
  return ret;
}

module.exports = check_nipple_clamps;
