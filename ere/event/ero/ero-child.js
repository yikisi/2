/**
 * @file 调教地文 - 孩子
 * @author 雞雞
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

class EroChild extends CustomizedEro {
  /** @author 雞雞 */
  async ero_start() {
    const chara = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0);
    if (
      era.get(`status:${this.id}:发情`) &&
      era.get('flag:惩戒力度') === 3 &&
      (era.get(`cflag:${this.id}:父方角色`) === 0 ||
        era.get(`cflag:${this.id}:母方角色`) === 0)
    ) {
      await chara.say_and_wait([
        '哈啊……哈啊……不知道为什么看到',
        callname,
        '的时候，下面就觉得好热好难受……已经……忍不住了！',
      ]);
    }
  }
}

module.exports = EroChild;
