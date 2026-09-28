const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const SuzukaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-2');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aims = [
  [race_enum.hoch_sho, 1, 5, 4],
  [race_enum.kobe_hai, 1, 3, 0b10],
  [race_enum.kink_sho, 2, 1, 0b10],
  [race_enum.takz_kin, 2, 3, 0b11],
  [race_enum.main_oka, 2, 1, 4],
  [race_enum.tenn_sho, 2, 1, 0b11],
  [race_enum.takz_kin, 1, 0, -4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 0b10;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    const edu_marks = new SuzukaEduMarks();
    if (race_infos[extra.race].race_class <= class_enum.G3) {
      if (extra.rank === 1 && extra.st === 0) {
        const wins = ++edu_marks.wins;
        if (wins > edu_marks.max_wins) {
          edu_marks.max_wins = wins;
        }
      } else {
        edu_marks.wins = 0;
      }
    }
    if (extra.race === race_enum.hoch_sho) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.edu).set_arg('secret_base'),
      );
    }
  }

  check_and_get_titles(aim_check) {
    const ret = [],
      races = RaceHistory.get(this.id).get();
    if (
      new SuzukaEduMarks().max_wins >= 6 &&
      (check_aim_race(
        races,
        race_enum.takz_kin,
        1,
        1,
        (extra) => extra.st === 0,
      ) ||
        check_aim_race(
          races,
          race_enum.takz_kin,
          2,
          1,
          (extra) => extra.st === 0,
        ))
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
    // CFLAGNAME:48 = 育成回合计时
    const edu_weeks = era.get(`cflag:${this.id}:48`);
    const edu_marks = new SuzukaEduMarks();
    if (edu_weeks < 3 * 48) {
      const ebj = new EventObject(this.id, cb_enum.edu, true);
      if (!edu_marks.race_wear) {
        const reg_race = sys_reg_race(this.id).curr;
        if (race_infos[reg_race.race]?.race_class === class_enum.G1) {
          edu_marks.race_wear = 1;
          add_event(event_hooks.week_end, ebj.copy().set_arg('race_clothe'));
        } else if (edu_weeks === 47 + 4) {
          edu_marks.race_wear = 1;
          add_event(event_hooks.week_start, ebj.copy().set_arg('race_clothe'));
        }
      }
      if (!edu_marks.run_together) {
        edu_marks.run_together = 1;
        add_event(event_hooks.week_start, ebj.copy().set_arg('run_together'));
      }
      switch (edu_weeks) {
        case 24:
          if (!RaceHistory.get(this.id).check_begin()) {
            add_event(event_hooks.week_start, ebj.set_arg('begin_race_miss'));
          }
          break;
        case 47 + 1:
          add_event(event_hooks.week_start, ebj.set_arg('new_year_classical'));
          break;
        case 47 + 30:
          add_event(event_hooks.celebration, ebj.set_arg('turn_overcast'));
          break;
        case 47 + 32:
          add_event(event_hooks.week_end, ebj.set_arg('turn_cloudy'));
          break;
        case 47 + 37:
          if (
            RaceHistory.get(this.id).get_result(47 + 36)?.race !==
            race_enum.kobe_hai
          ) {
            add_event(event_hooks.week_start, ebj.set_arg('kobe_hai_lose'));
          }
          add_event(event_hooks.week_start, ebj.copy().set_arg('first_step'));
          break;
        case 95 + 1:
          add_event(event_hooks.week_start, ebj.set_arg('new_year_senior'));
          break;
        case 95 + 11:
          if (
            RaceHistory.get(this.id).get_result(95 + 10)?.race !==
            race_enum.kink_sho
          ) {
            add_event(event_hooks.week_start, ebj.set_arg('kink_sho_miss'));
          }
          add_event(event_hooks.week_start, ebj.copy().set_arg('second_step'));
          break;
        case 95 + 32:
          add_event(event_hooks.week_end, ebj.set_arg('summer_end'));
          break;
        case 95 + 38:
          add_event(event_hooks.week_end, ebj.set_arg('curse'));
          break;
        case 95 + 39:
          add_event(event_hooks.week_start, ebj.set_arg('bad_omen'));
          break;
        case 95 + 40:
          if (
            edu_marks.choice === 1 &&
            era.get(`relation:${this.id}:0`) <= 225
          ) {
            add_event(event_hooks.week_start, ebj.set_arg('wing_clipped'));
            edu_marks.debuff = 4;
            edu_marks.choice = 2;
          } else if (edu_marks.choice > 1) {
            add_event(event_hooks.week_start, ebj.set_arg('tenn_sho_miss'));
          }
          break;
        case 95 + 41:
          if (
            era.get(`cflag:${this.id}:66`) === recruit_flags.temporary_leave
          ) {
            add_event(event_hooks.week_start, ebj.set_arg('ending'));
          } else {
            const tenn_sho = RaceHistory.get(this.id).get_result(95 + 40);
            let key = 'third_step_miss';
            if (tenn_sho?.rank === 1) {
              key = 'third_step_win';
            } else if (tenn_sho?.rank > 1) {
              key = 'third_step_lose';
            }
            add_event(event_hooks.week_start, ebj.set_arg(key));
          }
          break;
        case 95 + 48:
          if (
            era.get(`cflag:${this.id}:66`) === recruit_flags.temporary_leave
          ) {
            add_event(event_hooks.week_start, ebj.set_arg('hope'));
          } else {
            add_event(event_hooks.week_start, ebj.set_arg('christmas'));
          }
          add_event(event_hooks.week_end, ebj.copy().set_arg('edu_ending'));
          break;
      }
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  get_aim_races() {
    if (new SuzukaEduMarks().choice > 1) {
      return {
        ...aim_races,
        [get_aim_race_index(race_enum.tenn_sho, 2)]: void 0,
      };
    }
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    const edu_marks = new SuzukaEduMarks();
    aims
      .filter((a) => a[3] > 0)
      .forEach(([race, year, rank, check]) => {
        if (
          check > 0 &&
          (race !== race_enum.tenn_sho || edu_marks.choice <= 1)
        ) {
          buffer.push(check_aim_and_get_entry(races, race, year, rank));
        }
      });
    return buffer;
  }
};
