const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

/**
 * @param {CharaTalk} chara
 * @param {number} attr
 * @param {boolean} is_fumble
 */
async function print_fail_info_in_train(chara, attr, is_fumble) {
  if (attr === attr_enum.intelligence) {
    await era.printAndWait([
      '不好！',
      chara.get_colored_name(),
      ` 看${is_fumble ? '昏过去' : '睡'}了！`,
    ]);
  } else {
    const buffer = [];
    switch (attr) {
      case attr_enum.speed:
        buffer.push('滑倒了', '滚到地上了', '没力气了');
        break;
      case attr_enum.endurance:
        buffer.push('抽筋了');
        break;
      case attr_enum.strength:
        buffer.push('被泥巴糊眼睛上了', '摔倒了', '被沙袋反击了');
        break;
      case attr_enum.toughness:
        buffer.push('没力气了', '闪着腰了', '滚下去了');
    }
    await era.printAndWait([
      '不好！',
      chara.get_colored_name(),
      ' ',
      get_random_entry(buffer),
      '！',
    ]);
  }
}
module.exports = print_fail_info_in_train;
