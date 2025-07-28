const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');

/** @type {Record<string,number>} */
const aim_races = {
  [race_enum.begin_race]: 0b11,
  [get_aim_race_index(race_enum.kobe_hai, 1)]: 0b100,
  [get_aim_race_index(race_enum.kiku_sho, 1)]: 0b11,
  [get_aim_race_index(race_enum.tenn_spr, 2)]: 0b11,
  [get_aim_race_index(race_enum.takz_kin, 2)]: 0b11,
  [get_aim_race_index(race_enum.tenn_sho, 2)]: 0b11,
};

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (extra_flag.race === race_enum.tenn_spr && extra_flag.rank > 1) {
      new McqueenEduMarks().love_89 = 1;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get(),
      ret = [];
    if (
      check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      era.get('base:13:耐力') >= 1200
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return ret;
  }

  check_next_week() {
    if (era.get(`cflag:${this.id}:招募状态`) === recruit_flags.yes) {
      const love = era.get(`love:${this.id}`);
      const life_marks = new McqueenLifeMarks();
      if (!life_marks.love_20 && love >= 20) {
        life_marks.love_20 = 1;
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('movie'),
        );
      }
      if (!life_marks.love_40 && love >= 40 && life_marks.love_20 === 2) {
        life_marks.love_40 = 1;
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('baseball'),
        );
      }
    }
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (edu_weeks < 3 * 48) {
      const event_obj_s = new EventObject(this.id, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
      check_and_add_event(
        new McqueenEduMarks(),
        edu_weeks,
        'dessert',
        event_hooks.out_shopping,
        new EventObject(this.id, cb_enum.edu),
      );
      switch (edu_weeks) {
        case 12:
        case 47 + 1:
        case 47 + 6:
        case 47 + 40:
          add_event(event_hooks.week_start, event_obj_s);
      }
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else {
      return super.check_next_week();
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.kobe_hai, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    return buffer;
  }
};
