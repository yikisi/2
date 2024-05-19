const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedMec {
  get_train_buff() {
    if (era.get('cflag:304:招募状态') !== recruit_flags.yes) {
      return -20;
    }
    return 0;
  }
};
