const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    if (await this.check_before_rec()) {
      return;
    }

    await i18n().kojo[this.id].recruit.rec(
      generate_dictionary(this.id, { teen: !0, uma: !0 }),
    );
    era.set(`cflag:1:66`, recruit_flags.yes);
    await this.recruit_end();
  }
};
