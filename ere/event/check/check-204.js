const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (
      era.get('cflag:204:随机招募') <= -2 &&
      era.get('flag:当前声望') >= 1000
    ) {
      era.set('cflag:204:招募状态', -1);
      era.set('cflag:204:随机招募', 0);
      era.print(
        i18n().kojo[this.id].get_visit_notification(get_chara_talk(this.id)),
      );
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
