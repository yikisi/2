const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_color = require('#/data/chara-colors').chara_colors[7];
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    if (stage === event_hooks.recruit) {
      await i18n().kojo[this.id].recruit.rec(
        get_chara_talk(this.id),
        get_chara_talk(0),
        get_trainer_title().title(),
        chara_color[1],
      );
      // CFLAGNAME:66 = 招募状态
      era.set(`cflag:${this.id}:66`, recruit_flags.yes);
      return true;
    }
    return false;
  }
};
