const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');
const FlashLifeMarks = require('#/data/event/life-event-marks/life-event-marks-37');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 74(flash, me, callname, stage, extra_flag, event_object) {
    if (era.get('relation:37:0') <= 375 || new FlashEduMarks().finish !== 1) {
      return await super[74](
        flash,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const life_marks = new FlashLifeMarks();
    const ret = await print_title_with_kojo(
      this.#kojo,
      '74',
      flash,
      me,
      callname,
      !life_marks.love_again,
    );
    life_marks.love_again = 1;
    if (ret[0] === 2) {
      era.set('cflag:37:爱慕暂拒', 74);
      return;
    }
    if (ret[1] === 1) {
      await sys_love_uma_in_event(37);
    } else {
      era.set('cflag:37:爱慕暂拒', 74);
    }
  }
};
