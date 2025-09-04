/**
 * @file 调教地文 - 孩子
 * @author 雞雞
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { medicine_enum, medicine_names } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');

class EroChild extends CustomizedEro {
  async ero_start() {
    const chara = get_chara_talk(this.id);
    const callname = sys_get_callname(this.id, 0);
    if (era.get('flag:惩戒力度') === 3) {
      const my_marks = new MyEduMarks();
      const index = (my_marks.orgy || []).indexOf(this.id);
      if (
        index !== -1 &&
        era
          .getCharactersInTrain()
          .indexOf(era.get(`cflag:${this.id}:父方角色`)) !== -1
      ) {
        my_marks.orgy.splice(index, 1);
        /** @author 黑奴队长 */
        await print_event_name('父子丼', chara);
        const me = get_chara_talk(0);
        const father = get_chara_talk(era.get(`cflag:${this.id}:父方角色`));
        const status = new Array(2)
          .fill(undefined)
          .map(
            () =>
              medicine_names[
                get_random_entry([medicine_enum.fron_k, medicine_enum.fron_p])
              ],
          );
        if (!era.get(`status:${this.id}:${status[0]}`)) {
          era.set(`status:${this.id}:${status[0]}`, 1);
        }
        if (!era.get(`status:${this.id}:${status[1]}`)) {
          era.set(`status:${this.id}:${status[1]}`, 1);
        }
        await era.printAndWait([
          me.get_colored_name(),
          ' 被 ',
          chara.get_colored_name(),
          ' 与 ',
          father.get_colored_name(),
          ' 紧紧夹在中间，',
        ]);
        await era.printAndWait([
          '两根灼热的肉棒一起进攻着 ',
          me.get_colored_name(),
          ' 的前后两穴，每一次插入都带来一阵全新的快感。',
        ]);
        await era.printAndWait([
          '恍惚间，',
          me.get_colored_name(),
          ' 想起 ',
          chara.get_colored_name(),
          ' 刚出生时的事——',
        ]);
        await me.used_to_say_and_wait(
          '甚至，等到孩子长大之后……被孩子与孩子的父亲一起使用，被紧紧夹在中间，沉溺于雄性的肉棒之中……',
          true,
        );
        await era.printAndWait('那时的妄想，已经变成了现实……');
        era.set('tflag:主导权', this.id);
        await quick_make_love(
          new EroParticipant(this.id, part_enum.penis),
          new EroParticipant(0, part_enum.virgin),
          false,
        );
        await quick_make_love(
          new EroParticipant(father.id, part_enum.penis),
          new EroParticipant(0, part_enum.anal),
          false,
        );
      } else if (
        era.get(`status:${this.id}:发情`) > 0 &&
        (era.get(`cflag:${this.id}:父方角色`) === 0 ||
          era.get(`cflag:${this.id}:母方角色`) === 0)
      ) {
        /** @author 雞雞 */
        await chara.say_and_wait([
          '哈啊……哈啊……不知道为什么看到',
          callname,
          '的时候，下面就觉得好热好难受……已经……忍不住了！',
        ]);
      }
    }
  }
}

module.exports = EroChild;
