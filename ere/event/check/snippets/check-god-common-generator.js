const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {number} god_id
 * @returns {CustomizedCheck}
 */
module.exports = (god_id) => {
  class A extends CustomizedCheck {
    check_love_events() {
      const love = era.get(`love:${god_id}`);
      if (
        love === 49 ||
        era.get(`cflag:${god_id}:招募状态`) === recruit_flags.yes
      ) {
        add_event(
          event_hooks.week_end,
          new EventObject(god_id, cb_enum.love).set_arg(love),
        );
      } else {
        era.set(`cflag:${god_id}:爱慕暂拒`, love);
      }
    }

    check_next_week() {
      const life_marks = new LifeEventMarks(god_id);
      if (era.get(`love:${god_id}`) >= 50 && !life_marks.get('love')) {
        add_event(
          event_hooks.week_end,
          new EventObject(god_id, cb_enum.love).set_arg(49),
        );
      }
      if (era.get(`cflag:${god_id}:招募状态`) < 0) {
        if (!era.add(`cflag:${god_id}:招募状态`, 1)) {
          era.set(`cflag:${god_id}:育成回合计时`, 'x');
          add_event(
            event_hooks.week_start,
            new EventObject(god_id, cb_enum.recruit),
          );
        }
      }
      super.check_next_week();
    }

    is_prison() {
      if (era.get(`cflag:${god_id}:招募状态`) !== recruit_flags.yes) {
        return false;
      }
      return super.is_prison();
    }

    is_rape_in_sleeping() {
      if (era.get(`cflag:${god_id}:招募状态`) !== recruit_flags.yes) {
        return false;
      }
      return super.is_rape_in_sleeping();
    }

    check_and_get_titles(aim_check) {
      const ret = super.check_and_get_titles(aim_check);
      if (aim_check && ret.length > 0) {
        new LifeEventMarks(god_id).set('buff', 1);
      }
      return ret;
    }
  }

  return A;
};
