const { get, set } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RikoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-306');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      new RikoLifeMarks().buff = 1;
    }
    return ret;
  }

  check_next_week() {
    const temp = get('cflag:306:招募状态');
    if (Array.isArray(temp)) {
      if (temp.every((e) => e >= 3)) {
        add_event(
          event_hooks.week_start,
          new EventObject(306, cb_enum.recruit),
        );
      } else if (get('cflag:202:育成回合计时') === 48 * 3) {
        if (
          [202, 203].reduce(
            (p, c) =>
              p ||
              get(`love:${c}`) >= 75 ||
              get(`cflag:${c}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
              get(`exp:${c}:生产次数`) + get(`exp:${c}:孩子数量`) > 0,
            false,
          ) ||
          get('love:306') >= 75
        ) {
          add_event(
            event_hooks.week_start,
            new EventObject(306, cb_enum.recruit),
          );
        } else {
          add_event(
            event_hooks.week_start,
            new EventObject(this.id, cb_enum.edu).set_arg('fail'),
          );
          set(
            'cflag:202:招募状态',
            set('cflag:203:招募状态', recruit_flags.no),
          );
        }
      }
    }
    if (get('flag:当前回合数') === 5 && !get('flag:初见办公室')) {
      add_event(
        event_hooks.week_start,
        new EventObject(306, cb_enum.edu).set_arg('welcome'),
      );
    }
    super.check_next_week();
  }
};
