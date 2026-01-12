const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    if (await this.check_before_rec()) {
      return;
    }
    const ret = await i18n().kojo[this.id].recruit.rec(
      get_chara_talk(3),
      get_chara_talk(0),
      get_trainer_title().prefix(),
    );
    if (ret[1] === 1) {
      if (ret[0] === 1) {
        era.add(`love:${this.id}`, 1);
      } else {
        era.add(`relation:${this.id}:0`, 5);
      }
      // CFLAGNAME:66 = 招募状态
      era.set(`cflag:${this.id}:66`, recruit_flags.yes);
    }
  }
};
