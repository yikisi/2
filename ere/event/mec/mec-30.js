const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (era.get('cflag:30:招募状态') !== recruit_flags.yes) {
      return super.set_callname();
    }
    era.set(
      'callname:30:0',
      get_chara_talk(0).sex_code - 1 ? '姐姐大人' : '哥哥大人',
    );
  }
};
