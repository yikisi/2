/**
 * @file 爱慕织姬产驹，爱慕彦星的日常口上（临时）
 * 设定是织姬的第一个产驹是妹妹<br>
 * 示例用的日常事件口上<br>
 * 欢迎创作替代
 * @author 无名黑奴（临时）
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const DailyChild = require('#/event/daily/daily-child');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends DailyChild {
  select() {
    if (
      !sys_check_awake(0) ||
      !sys_check_awake(this.id) ||
      era.get(`cflag:${this.id}:成长阶段`) < 1
    ) {
      return super.select();
    }
    const father = era.get(`cflag:${this.id}:父方角色`),
      mother = era.get(`cflag:${this.id}:母方角色`);
    if (father && mother) {
      return super.select();
    }
    get_chara_talk(this.id).say([
      '今天也请多关照啦，',
      era.get('cflag:0:性别') - 1 ? '姐姐' : '哥哥',
      '……啊，应该是这个，',
      father ? '妈妈' : '爸爸',
      '～❤️',
    ]);
  }
};
