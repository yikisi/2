const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (
      era.get('cflag:204:随机招募') <= -2 &&
      era.get('flag:当前声望') >= 1000
    ) {
      era.set('cflag:204:随机招募', 1);
    }
    super.check_next_week();
  }

  is_prison() {
    if (era.get('cflag:204:招募状态') !== recruit_flags.yes) {
      return false;
    }
    return super.is_prison();
  }

  is_rape_in_sleeping() {
    if (era.get('cflag:204:招募状态') !== recruit_flags.yes) {
      return false;
    }
    return super.is_rape_in_sleeping();
  }
};
