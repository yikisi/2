const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;

aim_races[get_aim_race_index(race_enum.prix_prb, 1)] = 4;
aim_races[get_aim_race_index(race_enum.prix_dia, 1)] = 4;
aim_races[get_aim_race_index(race_enum.prix_lat, 1)] = 3;
aim_races[get_aim_race_index(race_enum.prix_lat, 2)] = 2;

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(205).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.prix_prb, 1, 1, (e) => e.pop === 1) &&
      check_aim_race(races, race_enum.prix_dia, 1, 1, (e) => e.pop === 1) &&
      check_aim_race(races, race_enum.prix_lat, 1, 1, (e) => e.pop === 1) &&
      check_aim_race(races, race_enum.prix_lat, 2, 1, (e) => e.pop === 1)
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(205, 1);
    }
    return titles;
  }

  check_next_week() {
    if (era.get('cflag:205:招募状态') !== recruit_flags.no) {
      const edu_weeks = era.get('cflag:205:育成回合计时');
      const race_history = RaceHistory.get(205).get();
      if (edu_weeks < 3 * 48) {
        const event_object_special = new EventObject(
          this.id,
          cb_enum.edu,
          true,
        ).set_arg(edu_weeks);
        switch (edu_weeks) {
          case 47 + 24:
            if (
              check_aim_race(race_history, race_enum.prix_prb, 1, 1) &&
              check_aim_race(race_history, race_enum.prix_dia, 1, 1)
            ) {
              add_event(event_hooks.week_start, event_object_special);
            }
            break;
          case 47 + 33:
            if (sys_reg_race(205).curr.race === race_enum.prix_lat) {
              add_event(event_hooks.week_start, event_object_special);
              add_event(event_hooks.week_end, event_object_special);
            }
            break;
          case 47 + 36:
            if (era.get('cflag:205:位置') === location_enum.paris) {
              add_event(event_hooks.foreign_travel, event_object_special);
            }
            break;
          case 95 + 25:
            if (check_aim_race(race_history, race_enum.prix_lat, 1, 1)) {
              add_event(event_hooks.week_start, event_object_special);
              add_event(event_hooks.out_start, event_object_special);
            }
            break;
          case 95 + 26:
            if (new TreveEduMarks().tea) {
              EventMarks.get(0).sub(event_hooks.out_start);
            }
            era.set('cflag:205:招募状态', recruit_flags.yes);
            if (!era.get('flag:当前互动角色')) {
              era.set('flag:当前互动角色', 205);
            }
            break;
          case 95 + 28:
            if (check_aim_race(race_history, race_enum.prix_lat, 1, 1)) {
              add_event(event_hooks.week_end, event_object_special);
            }
            break;
          case 95 + 29:
            if (check_aim_race(race_history, race_enum.prix_lat, 1, 1)) {
              add_event(event_hooks.week_start, event_object_special);
            }
            break;
          case 95 + 33:
            if (era.get('cflag:205:招募状态') !== recruit_flags.yes) {
              add_event(event_hooks.week_end, event_object_special);
            }
            break;
          case 95 + 42:
            if (
              check_aim_race(race_history, race_enum.prix_lat, 1, 1) &&
              check_aim_race(race_history, race_enum.prix_lat, 2, 1)
            ) {
              add_event(event_hooks.week_end, event_object_special);
            }
        }
        check_and_register_aim_race(205, aim_races, edu_weeks);
      } else if (edu_weeks === 143 + 9) {
        add_event(
          event_hooks.week_start,
          new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
        );
      }
    } else if (
      era.get('cflag:205:随机招募') < 0 &&
      era.get('flag:当前声望') >= 1000
    ) {
      era.set('cflag:205:随机招募', 1);
      era.print(
        i18n().kojo[this.id].get_rec_enable_notification(
          get_chara_talk(this.id),
        ),
      );
    }
  }

  is_aim_race(race, edu_weeks, rank) {
    if (race === race_enum.japa_cup) {
      return new TreveEduMarks().japa_cup;
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }

  is_prison() {
    return (
      era.get('cflag:205:招募状态') === recruit_flags.yes && super.is_prison()
    );
  }

  is_rape_in_sleeping() {
    return (
      era.get('cflag:205:招募状态') === recruit_flags.yes &&
      super.is_rape_in_sleeping()
    );
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(205);
    buffer.push(check_aim_and_get_entry(races.get(), race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races.get(), race_enum.prix_prb, 1, 1));
    buffer.push(check_aim_and_get_entry(races.get(), race_enum.prix_dia, 1, 1));
    buffer.push(check_aim_and_get_entry(races.get(), race_enum.prix_lat, 1, 1));
    buffer.push(check_aim_and_get_entry(races.get(), race_enum.prix_lat, 2, 1));
    let g1_count = races
      .get_values()
      .filter(
        (e) =>
          race_infos[e.race].race_class === class_enum.G1 &&
          e.race !== race_enum.prix_lat &&
          e.race !== race_enum.prix_dia &&
          e.race !== race_enum.prix_prb &&
          e.rank === 1,
      ).length;
    buffer.push({
      champion: true,
      check: Math.min(g1_count, 5) - 4,
      color: g1_count >= 5 ? attr_change_colors.up : attr_change_colors.down,
      current: g1_count.toString(),
      desc: i18n().kojo[this.id].aim_desc,
      g1: true,
      mark:
        g1_count >= 5
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '5'),
    });
    return buffer;
  }
};
