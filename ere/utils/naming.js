const era = require('#/era-electron');

const names = require('#/data/child-names.json');

function get_child_name(chara_id) {
  let chara_name = era.get(`callname:${chara_id}:-1`);
  const index = era.get(`cflag:${chara_id}:后代命名索引`);
  era.add(`cflag:${chara_id}:后代命名索引`, 1);
  while (names[chara_name] && !(names[chara_name] instanceof Array)) {
    chara_name = names[chara_name];
  }
  if (names[chara_name] && names[chara_name].length > index) {
    return names[chara_name][index];
  }
  return `${chara_name}${era.get(`exp:${chara_id}:生产次数`) + 1}`;
}

module.exports = get_child_name;
