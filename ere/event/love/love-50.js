const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const TaishinEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-50');
const TaishinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-50');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(taishin, me, callname, stage, extra, ebj) {
    await print_title_with_kojo(
      this.#kojo,
      'os_aquarium',
      taishin,
      generate_dictionary(this.id, { uma: !0 }),
    );
    new TaishinLifeMarks().aquarium = 1;
    if (era.get(`love:${this.id}`) === 49) {
      await sys_love_uma_in_event(this.id);
    }
    return true;
  }

  async 74(taishin, me, callname, stage, extra, ebj) {
    await print_title_with_kojo(
      this.#kojo,
      'os_my_home',
      taishin,
      generate_dictionary(this.id, { call: !0, teen: !0 }),
    );
    await sys_love_uma_in_event(this.id);
    return true;
  }

  async 99(taishin, me, callname, stage, extra, ebj) {
    if (!ebj.arg[1]) {
      return await super[99](taishin, me, callname, stage, extra, ebj);
    }
    await print_title_with_kojo(this.#kojo, 'os_as_before', taishin, {
      ...generate_dictionary(this.id, { call: !0, sir: !0 }),
      before: new TaishinEduMarks().find_taishin > 0,
    });
    await sys_love_uma_in_event(this.id);
    return true;
  }
};
