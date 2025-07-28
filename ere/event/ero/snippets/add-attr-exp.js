const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { attr_names } = require('#/data/train-const');

/**
 * @param {number} cid
 * @param {number} attr
 * @param {number} val
 */
function add_attr_exp(cid, attr, val) {
  const in_edu = era.get(`cflag:${cid}:育成回合计时`) < 3 * 48 || !cid;
  if (in_edu || !era.get(`cflag:${cid}:种族`)) {
    const inmon = CharaInmon.get(cid);
    let times = 1;
    if (inmon.on(plugin_enum.sex_1)) {
      times += 5;
    } else if (inmon.on(plugin_enum.sex_2)) {
      times += 15;
    }
    era.add(`nowex:${cid}:${attr_names[attr]}获取`, val * times);
    if (in_edu && times > 1) {
      era.add(`nowex:${cid}:技能点获取`, times);
    }
  }
}

module.exports = add_attr_exp;
