const { set } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    await print_title_with_kojo(
      i18n().kojo[this.id].recruit,
      'recruit',
      get_chara_talk(this.id),
      generate_dictionary(this.id, { call: !0 }),
    );
    set('flag:当前互动角色', this.id);
    set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
    await this.recruit_end();
  }
};
