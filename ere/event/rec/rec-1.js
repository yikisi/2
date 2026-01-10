const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    if (await this.check_before_rec()) {
      return;
    }

    await i18n().kojo[this.id].recruit.rec(
      get_chara_talk(1),
      get_chara_talk(0),
    );
    era.set(`cflag:1:66`, recruit_flags.yes);
    await this.recruit_end();
  }
};
