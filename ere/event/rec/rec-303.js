const { set } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const etsuko = get_chara_talk(303);
    if (stage === event_hooks.week_start) {
      await print_title_with_kojo(
        i18n().kojo[this.id].recruit,
        'rec_1',
        etsuko,
        generate_dictionary(this.id),
      );
    } else {
      await print_title_with_kojo(
        i18n().kojo[this.id].recruit,
        'rec_2',
        etsuko,
        generate_dictionary(this.id),
      );
      set('cflag:303:招募状态', recruit_flags.yes);
      set('callname:303:-2', '900301');
      await this.recruit_end();
    }
  }
};
