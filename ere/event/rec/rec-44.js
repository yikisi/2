const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const { fill_moho_in_dict } = require('#/event/snippets/104400');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    if (
      (
        await i18n().kojo[this.id].recruit.rec(
          fill_moho_in_dict(generate_dictionary(this.id, { uma: !0 })),
        )
      )['rec'] === 1
    ) {
      era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
      await this.recruit_end();
    }
  }
};
