const era = require('#/era-electron');

const { attr_names } = require('#/data/train-const');

function add_attr_exp(chara_id, attr, val) {
  era.add(`nowex:${chara_id}:${attr_names[attr]}获取`, val);
}

module.exports = add_attr_exp;
