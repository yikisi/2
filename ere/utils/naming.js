const era = require('#/era-electron');

const names = require('#/data/child-names.json');

const { __ } = require('#/i18n/selector');

function get_child_name(chara_id) {
  let chara_name = era.get(`callname:${chara_id}:-1`);
  const index = era.get(`cflag:${chara_id}:后代命名索引`);
  while (names[chara_name] !== void 0 && !Array.isArray(names[chara_name])) {
    chara_name = names[chara_name];
  }
  if (Array.isArray(names[chara_name]) && names[chara_name].length > index) {
    era.add(`cflag:${chara_id}:后代命名索引`, 1);
    return names[chara_name][index];
  }
  return `${__(`name.${chara_name}`)}${era.get('flag:当前年')}`;
}

module.exports = get_child_name;
