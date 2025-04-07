const { get, set } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (
      get('cflag:304:招募状态') !== recruit_flags.yes &&
      extra_flag.rank === 1 &&
      race_infos[extra_flag.race].race_class === class_enum.G1
    ) {
      set('cflag:304:招募状态', -3);
    }
  }

  check_next_week() {
    const edu_marks = new MeekEduMarks();
    if (get(`cflag:${this.id}:招募状态`) === recruit_flags.yes) {
      edu_marks.all_round = 0;
      super.check_next_week();
    } else if (edu_marks.all_round > 0) {
      if (--edu_marks.all_round === 0) {
        if (get('cflag:0:位置') > 0) {
          edu_marks.all_round = 1;
        } else {
          add_event(
            event_hooks.week_start,
            new EventObject(this.id, cb_enum.edu).set_arg('all_round'),
          );
        }
      }
    }
  }

  check_palace_and_get_aims() {
    if (get('cflag:304:招募状态') !== recruit_flags.yes) {
      if (
        get('love:201') >= 75 ||
        get('cflag:201:妊娠阶段') !== 1 << pregnant_stage_enum.no ||
        get('exp:201:生产次数') + get('exp:201:孩子数量') > 0 ||
        get('love:304') >= 75
      ) {
        set('cflag:304:招募状态', -3);
      } else {
        set('cflag:201:招募状态', recruit_flags.no);
      }
    }
    return super.check_palace_and_get_aims();
  }
};
