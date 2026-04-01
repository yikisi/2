const { get } = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { max_chara_id } = require('#/data/other-const');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    const my_marks = new MyEduMarks();
    const in_team_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    );
    if (my_marks.god > 0) {
      if (--my_marks.god === 0) {
        add_event(
          event_hooks.school_god,
          new EventObject(0, cb_enum.edu).set_arg('god_coin'),
        );
      }
    }
    if (my_marks.experiment > 0) {
      if (
        get('cflag:25:招募状态') === recruit_flags.yes ||
        get('cflag:32:招募状态') === recruit_flags.yes
      ) {
        my_marks.experiment = 0;
      } else if (--my_marks.experiment === 0) {
        if (get('cflag:0:位置') > 0) {
          my_marks.experiment = 1;
        } else {
          add_event(
            event_hooks.week_end,
            new EventObject(0, cb_enum.edu).set_arg('experiment'),
          );
        }
      }
    }
    if (my_marks.custom > 0) {
      if (--my_marks.custom === 0) {
        add_event(
          event_hooks.week_end,
          new EventObject(0, cb_enum.edu).set_arg('custom'),
        );
      }
    }
    if (my_marks.trainer_race > 0) {
      if (
        get('cflag:304:招募状态') === recruit_flags.yes ||
        get('cflag:305:招募状态') === recruit_flags.yes
      ) {
        my_marks.trainer_race = 0;
      } else if (--my_marks.trainer_race === 0) {
        if (get('cflag:0:位置') > 0) {
          my_marks.trainer_race = 1;
        } else {
          add_event(
            event_hooks.week_start,
            new EventObject(0, cb_enum.edu).set_arg('trainer_race'),
          );
        }
      }
    }
    if (get('flag:当前马币') <= 0) {
      if (!my_marks.bankruptcy) {
        my_marks.bankruptcy = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(0, cb_enum.edu).set_arg('bankruptcy'),
        );
      }
    } else {
      my_marks.bankruptcy = 0;
    }
    if (my_marks.reject === 3) {
      my_marks.reject++;
      if (get('cflag:0:位置') > 0) {
        my_marks.reject = 3;
      } else {
        add_event(
          event_hooks.week_start,
          new EventObject(0, cb_enum.edu).set_arg('reject'),
        );
      }
    }
    if (my_marks.work_over > 0 && --my_marks.work_over === 0) {
      if (Math.random() < 0.01 && get('cflag:0:位置') > 0) {
        add_event(
          event_hooks.week_start,
          new EventObject(0, cb_enum.edu).set_arg('work_over'),
        );
      } else {
        my_marks.work_over = 1;
      }
    }
    if (my_marks.sick > 0 && --my_marks.sick === 0) {
      if (Math.random() < 0.01 && get('cflag:0:位置') > 0) {
        add_event(
          event_hooks.week_start,
          new EventObject(0, cb_enum.edu).set_arg('sick'),
        );
      } else {
        my_marks.sick = 1;
      }
    }
    if (my_marks.strange_day > 0 && --my_marks.strange_day === 0) {
      if (
        get('cflag:0:位置') === 0 &&
        get('flag:当前位置') !== location_enum.basement &&
        in_team_list.some(
          (e) => e > 0 && get(`cflag:${e}:成长阶段`) >= 2 && e !== 32,
        )
      ) {
        add_event(
          event_hooks.week_start,
          new EventObject(0, cb_enum.edu).set_arg('strange_day'),
        );
      } else {
        my_marks.strange_day = 1;
      }
    }
    if (get('flag:当前回合数') % 48 === 9 && get('flag:初见重复育成') > 0) {
      add_event(
        event_hooks.week_end,
        new EventObject(0, cb_enum.edu).set_arg('second_chance'),
      );
    }
    if (Math.random() < 0.005) {
      add_event(
        event_hooks.week_start,
        new EventObject(0, cb_enum.edu).set_arg('wind_welcome'),
      );
    }
    if (
      get('flag:当前回合数') % 48 === 6 &&
      in_team_list.every((e) => !e || get(`love:${e}`) < 75)
    ) {
      add_event(
        event_hooks.week_start,
        new EventObject(0, cb_enum.edu).set_arg('chocolate'),
      );
    }
    if (get('flag:当前回合数') % 48 === 47) {
      add_event(
        event_hooks.week_start,
        new EventObject(0, cb_enum.edu).set_arg('sakura_regret'),
      );
    }
    if (my_marks.nice_weekend > 1 && --my_marks.nice_weekend === 1) {
      add_event(
        event_hooks.week_end,
        new EventObject(0, cb_enum.edu).set_arg('nice_weekend'),
      );
    }
    if (my_marks.big_sale > 0 && --my_marks.big_sale === 0) {
      add_event(
        event_hooks.out_shopping,
        new EventObject(0, cb_enum.edu).set_arg('big_sale'),
      );
    }
    if (
      !my_marks.justice &&
      in_team_list.some(
        (cid) =>
          cid > 0 &&
          cid < max_chara_id &&
          get(`cflag:${cid}:成长阶段`) >= 2 &&
          get(`cflag:${cid}:种族`) > 0 &&
          get(`relation:${cid}:0`) <=
            get(`love:${cid}`) * (get('flag:极端行为限制') || 1),
      )
    ) {
      add_event(
        event_hooks.week_start,
        new EventObject(0, cb_enum.edu).set_arg('justice'),
      );
      my_marks.justice = 1;
    }
  }
};
