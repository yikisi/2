/**
 * @file 爱慕彦星 - 日常（临时）
 * <br>设定是织姬的妹妹同时也是第一个产驹<br>
 * 示例用的日常事件口上<br>
 * 欢迎创作替代
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {boolean} is_father
   */
  select(chara, is_father) {
    chara.say([
      '今天也请多关照啦，',
      era.get('cflag:0:0') === 1 ? '哥哥' : '姐姐',
      '……啊，应该是这个，',
      is_father ? '爸爸' : '妈妈',
      '～❤️',
    ]);
  },
};
