const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  is_prison() {
    if (era.get('cflag:343:招募状态') !== recruit_flags.yes) {
      return false;
    }
    return super.is_prison();
  }

  is_rape_in_sleeping() {
    if (era.get('cflag:343:招募状态') !== recruit_flags.yes) {
      return false;
    }
    return super.is_rape_in_sleeping();
  }
};
