const { set } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    await i18n().kojo[this.id].recruit['rec']({
      ...generate_dictionary(this.id),
      K_NAME: get_chara_talk(304).name,
    });
    // CFLAGNAME:66 = 招募状态
    set('cflag:201:66', recruit_flags.yes);
    // FLAGNAME:5 = 当前互动角色
    set('flag:5', 201);
    new MeekEduMarks().all_round = 0;
    await this.recruit_end();
  }
};
