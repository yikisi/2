const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const hello = get_chara_talk(this.id);
    await print_title_with_kojo(
      i18n().kojo[this.id].recruit,
      'recruit',
      hello,
      generate_dictionary(this.id),
    );
  }
};
