const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

/**
 * @param {number} cid
 * @param {number} attr
 * @param {number} val
 */
function add_attr_exp(cid, attr, val) {
  // CFLAGNAME:48 = 育成回合计时
  const in_edu = era.get(`cflag:${cid}:48`) < 3 * 48 || !cid;
  // CFLAGNAME:1 = 种族
  if (in_edu || !era.get(`cflag:${cid}:1`)) {
    const inmon = CharaInmon.get(cid);
    let times = 1;
    if (inmon.on(plugin_enum.sex_1)) {
      times += 5;
    } else if (inmon.on(plugin_enum.sex_2)) {
      times += 15;
    }
    // EXNAME:27 - 31 = 速度获取 - 智力获取
    era.add(`nowex:${cid}:${attr + 27}`, val * times);
    if (in_edu && times > 1) {
      // EXNAME:32 = 技能点获取
      era.add(`nowex:${cid}:32`, times);
    }
  }
}

module.exports = add_attr_exp;
