const era = require('#/era-electron');

const { set_stain } = require('#/system/ero/sys-calc-stain');

const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');

/**
 * @param {number} cid character's id
 * @param {number} amount will be handled with Math.ceil
 * @returns {number} the total amount
 */
function check_nipple_clamps(cid, amount) {
  let ret = Math.ceil(amount);
  if (ret < 0) {
    ret = 0;
  }
  if (era.get(`tequip:${cid}:胸部`) === item_enum.clamps) {
    era.add(`nowex:${cid}:喷奶阻碍`, ret);
    return 0;
  } else {
    set_stain(cid, part_enum.breast, stain_enum.milk);
    ret += era.get(`ex:${cid}:喷奶阻碍`);
    era.add(`exp:${cid}:喷奶量`, ret);
    era.add(`nowex:${cid}:喷奶量`, ret);
  }
  return ret;
}

module.exports = check_nipple_clamps;
