const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');

const { i18n } = require('#/i18n/selector');

class EroChild extends CustomizedEro {
  async ero_start() {
    const child = get_chara_talk(this.id);
    // FLAGNAME:35 = 惩戒力度
    if (era.get('flag:35') === 3) {
      const my_marks = new MyEduMarks();
      const index = (my_marks.orgy || []).indexOf(this.id);
      if (
        index !== -1 &&
        // CFLAGNAME:15 = 父方角色
        era.getCharactersInTrain().includes(era.get(`cflag:${this.id}:15`))
      ) {
        const fid = era.get(`cflag:${this.id}:15`);
        my_marks.orgy.splice(index, 1);
        for (const cid of [this.id, fid]) {
          if (
            // STATUSNAME:36 = 弗隆K
            // STATUSNAME:37 = 弗隆P
            era.get(`status:${cid}:36`) > 0 ||
            era.get(`status:${cid}:37`) > 0
          ) {
            continue;
          }
          era.set(`status:${cid}:${36 + (Math.random() < 0.5)}`, 1);
        }
        await print_title_with_kojo(
          i18n().timon.pregnant_slave,
          'oyakodon',
          child,
          get_chara_talk(fid),
          get_chara_talk(0),
        );
        // TFLAGNAME:7 = 主导权
        era.set('tflag:7', this.id);
        await quick_make_love(
          new EroParticipant(this.id, part_enum.penis),
          new EroParticipant(0, part_enum.virgin),
          false,
        );
        await quick_make_love(
          new EroParticipant(fid, part_enum.penis),
          new EroParticipant(0, part_enum.anal),
          false,
        );
      } else if (
        // STATUSNAME:32 = 发情
        era.get(`status:${this.id}:32`) > 0 &&
        (era.get(`cflag:${this.id}:15`) === 0 ||
          // CFLAGNAME:16 = 母方角色
          era.get(`cflag:${this.id}:16`) === 0)
      ) {
        await i18n().timon.ero_child.estrus_for_slave(
          child,
          sys_get_colored_callname(this.id, 0),
        );
      }
    }
  }
}

module.exports = EroChild;
