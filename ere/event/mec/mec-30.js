const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (era.get('cflag:30:招募状态') !== recruit_flags.yes) {
      return super.set_callname();
    }
    if (!this.set_callname_from_src()) {
      era.set(
        'callname:30:0',
        era.get('cflag:0:性别') === 1 ? '哥哥大人' : '姐姐大人',
      );
    }
  }

  set_my_name() {}
};
