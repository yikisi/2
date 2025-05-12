const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { attr_names } = require('#/data/train-const');

function add_attr_exp(chara_id, attr, val) {
  const in_edu = era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48;
  if (in_edu || !era.get(`cflag:${chara_id}:种族`)) {
    const inmon = CharaInmon.get(chara_id);
    let times = 1;
    if (inmon.on(plugin_enum.sex_1)) {
      times += 4;
    } else if (inmon.on(plugin_enum.sex_2)) {
      times += 14;
    }
    era.add(`nowex:${chara_id}:${attr_names[attr]}获取`, val * times);
    if (in_edu) {
      era.add(`nowex:${chara_id}:技能点获取`, times);
    }
  }
}

module.exports = add_attr_exp;
