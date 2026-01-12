const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      new MayLifeMarks().buff = 1;
    }
    return ret;
  }

  check_next_week() {
    if (era.get('flag:当前回合数') === 13) {
      add_event(
        event_hooks.week_start,
        new EventObject(343, cb_enum.edu).set_arg('welcome'),
      );
    }
    if (
      era.get('cflag:343:招募状态') === recruit_flags.no &&
      era.get('love:343') >= 40
    ) {
      era.set('cflag:343:招募状态', -1);
      add_event(
        event_hooks.week_start,
        new EventObject(343, cb_enum.recruit).set_arg('visit'),
      );
    }
    if (
      era.get('flag:回合爱慕惩罚') > 0 &&
      era.get('love:343') >= 50 &&
      new MayLifeMarks().who_am_i < 3
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(343, cb_enum.love, true).set_arg(49),
      );
    }
    super.check_next_week();
  }

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
