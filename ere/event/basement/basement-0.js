/**
 * @file 玩家 - 地下室
 *
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedBase {
  welcome() {
    era.print([
      '不知过了多久，',
      get_chara_talk(0).get_colored_name(),
      ' 在一张简单的小床上悠悠醒转……',
    ]);
    era.print('眼前是陌生的天花板……');
  }
};
