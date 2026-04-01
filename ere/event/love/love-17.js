const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const { add_event } = require('#/event/queue');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(luna, me) {
    await print_title_with_kojo(this.#kojo, '49', luna, me);
    await sys_love_uma_in_event(this.id);
  }

  async 74(luna, me) {
    await print_title_with_kojo(this.#kojo, '74', luna, me);
    await sys_love_uma_in_event(this.id);
  }

  async 89(luna, me) {
    await print_title_with_kojo(this.#kojo, '89', luna, me);
    await sys_love_uma_in_event(this.id);
  }

  async 99(luna, me, callname) {
    await print_title_with_kojo(this.#kojo, '99', luna, me, callname);
    await sys_love_uma_in_event(this.id);
  }

  async run(stage, extra_flag, event_object) {
    if (new LunaEduMarks().emperor) {
      add_event(stage, event_object);
      return;
    }
    return super.run(stage, extra_flag, event_object);
  }
};
