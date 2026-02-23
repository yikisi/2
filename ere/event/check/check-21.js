const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const {
  sys_change_motivation,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {
  [race_enum.begin_race]: 0b10,
  [get_aim_race_index(race_enum.sats_sho, 1)]: -2,
  [get_aim_race_index(race_enum.toky_yus, 1)]: -1,
  [get_aim_race_index(race_enum.kiku_sho, 1)]: -1,
  [get_aim_race_index(race_enum.hans_dai, 2)]: 0b10,
  [get_aim_race_index(race_enum.tenn_spr, 2)]: 0b10,
  [get_aim_race_index(race_enum.takz_kin, 2)]: 0b11,
  [get_aim_race_index(race_enum.tenn_sho, 2)]: 0b11,
  [get_aim_race_index(race_enum.arim_kin, 2)]: 0b10,
};

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    const edu_marks = new TamaEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (extra.rank === 1) {
      const { race_class } = race_infos[extra.race];
      if (race_class <= class_enum.OP && edu_weeks <= 47 + 8) {
        edu_marks.op_count++;
      }
      if (race_class <= class_enum.G3 && edu_weeks < 96) {
        edu_marks.g3_count++;
      }
    }
  }

  check_and_get_titles(aim_check) {
    const ret = [],
      race_history = RaceHistory.get(this.id),
      races = race_history.get(),
      race_list = race_history.get_values();
    if (
      race_list.filter(
        (r) => race_infos[r.race].race_class <= class_enum.G3 && r.rank === 1,
      ).length >= 8 &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      check_aim_race(races, race_enum.takz_kin, 2, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1)
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
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (edu_weeks < 3 * 48) {
      const edu_event = new EventObject(this.id, cb_enum.edu);
      const edu_marks = new TamaEduMarks();
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'whats_adult',
        event_hooks.week_start,
        edu_event,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'gymnastics',
        event_hooks.week_end,
        edu_event,
      );
      if (era.get(`cflag:${this.id}:性别`) !== 1) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'clothe',
          event_hooks.week_end,
          edu_event,
        );
      }
      edu_event.special = true;
      switch (edu_weeks) {
        case 28:
          add_event(event_hooks.week_start, edu_event.set_arg('misfortune'));
          break;
        case 36:
          add_event(event_hooks.week_start, edu_event.set_arg('cloudy1'));
          break;
        case 40:
          edu_marks.heal = 0;
          add_event(event_hooks.week_start, edu_event.set_arg('cloudy2'));
          break;
        case 41:
          add_event(event_hooks.week_start, edu_event.set_arg('cloudy3'));
          break;
        case 47 + 1:
          add_event(event_hooks.week_start, edu_event.set_arg('new_year'));
          break;
        case 47 + 9:
          if (edu_marks.op_count >= 2) {
            add_event(event_hooks.week_start, edu_event.set_arg('seems'));
          }
          if (era.get(`cflag:${this.id}:育成次数`) > 0) {
            edu_marks.lightning = 0;
          } else {
            edu_marks.lightning = 3;
          }
          break;
        case 47 + 15:
          if (sys_reg_race(this.id).curr.race === race_enum.sats_sho) {
            add_event(
              event_hooks.week_start,
              edu_event.set_arg('lightning_heart1'),
            );
          }
          break;
        case 47 + 29:
        case 95 + 29:
          add_event(event_hooks.week_start, edu_event.set_arg('summer'));
          break;
        case 95 + 1:
          if (edu_marks.g3_count >= 4) {
            add_event(
              event_hooks.week_start,
              edu_event.set_arg('spring_thunder'),
            );
          }
          edu_marks.lightning = 0;
          break;
        case 95 + 14:
          add_event(event_hooks.week_start, edu_event.set_arg('threaten'));
      }
      if (edu_marks.heal === -1) {
        sys_change_motivation(this.id, 1);
      }
      check_and_register_aim_race(this.id, aim_races, edu_weeks);
    } else {
      super.check_next_week();
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    const { op_count, g3_count } = new TamaEduMarks();
    buffer.push({
      check: Math.min(op_count - 1, 1),
      color: op_count >= 2 ? attr_change_colors.up : attr_change_colors.down,
      current: op_count.toString(),
      desc: i18n().kojo[this.id].aim_desc_1,
      champion: true,
      mark:
        op_count >= 2
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '2'),
    });
    buffer.push({
      check: Math.min(g3_count - 3, 1),
      color: g3_count >= 4 ? attr_change_colors.up : attr_change_colors.down,
      current: g3_count.toString(),
      desc: i18n().kojo[this.id].aim_desc_2,
      champion: true,
      mark:
        g3_count >= 4
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '4'),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_dai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }

  is_aim_race(race, edu_weeks, rank) {
    if (rank !== void 0 && rank !== 1) {
      return 0;
    }
    const history = RaceHistory.get(this.id).get();
    switch (race) {
      case race_enum.toky_yus:
        if (
          (rank !== void 0 && rank !== 1) ||
          !check_aim_race(history, race_enum.sats_sho, 1, 1)
        ) {
          return 0;
        }
        break;
      case race_enum.kiku_sho:
        if (
          (rank !== void 0 && rank !== 1) ||
          !check_aim_race(history, race_enum.sats_sho, 1, 1) ||
          !check_aim_race(history, race_enum.toky_yus, 1, 1)
        ) {
          return 0;
        }
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }
};
