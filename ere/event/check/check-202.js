const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (
      get('cflag:306:招募状态') !== recruit_flags.yes &&
      extra_flag.rank === 1 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3
    ) {
      get('cflag:306:招募状态')[0]++;
    }
  }

  check_next_week() {
    const edu_weeks = get(`cflag:${this.id}:育成回合计时`);
    if (edu_weeks < 3 * 48) {
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else if (
      edu_weeks === 143 + 9 &&
      get(`cflag:${this.id}:招募状态`) === recruit_flags.yes
    ) {
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.edu).set_arg('palace'),
      );
    }
  }
};
