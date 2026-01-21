const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const kojo = i18n().kojo[this.id].recruit;
    const dict = generate_dictionary(this.id, { call: !0, uma: !0 });
    const dj = get_chara_talk(this.id);
    // CFLAGNAME:66 = 招募状态
    if (era.get(`cflag:${this.id}:66`) === recruit_flags.no) {
      await print_title_with_kojo(kojo, 'rec1', dj, dict);
      // FLAGNAME:33 = 物色对象
      era.set('flag:33', this.id);
      // CFLAGNAME:66 = 招募状态
      era.set(`cflag:${this.id}:66`, -1);
      // CFLAGNAME:67 = 随机招募
      era.set(`cflag:${this.id}:67`, 0);
      return true;
    } else {
      await print_title_with_kojo(kojo, 'rec2', dj, dict);
      EventMarks.get(0).sub(event_hooks.recruit);
      era.set('flag:33', 0);
      era.set(`cflag:${this.id}:66`, recruit_flags.yes);
    }
  }
};
