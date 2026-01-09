const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    await i18n().kojo[this.id].recruit.rec(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, this.id),
    );
    // CFLAGNAME:66 = 招募状态
    era.set(`cflag:${this.id}:66`, recruit_flags.yes);
    return false;
  }
};
