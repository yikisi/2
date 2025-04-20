const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { slavery_enum } = require('#/data/ero/mark-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

/** @param {number[]} in_team_list */
async function check_inmon(in_team_list) {
  const milk_list = [];
  const jewel_list = [];

  for (const id of in_team_list) {
    const inmon = CharaInmon.get(id);
    switch (inmon.slave) {
      case slavery_enum.milk:
        milk_list.push(id);
        break;
      case slavery_enum.inherit:
        jewel_list.push(id);
    }
    // 淫纹「忠贞不二」：恢复最大值
    if (inmon.on(plugin_enum.rel_lock)) {
      era.set(`relation:${id}:0`, 600);
    }
  }

  if (milk_list.length > 0 || jewel_list.length > 0) {
    // TODO
    console.log(milk_list.join(','));
    console.log(jewel_list.join(','));
  }
}

module.exports = check_inmon;
