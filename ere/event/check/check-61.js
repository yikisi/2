const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const HaloEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-61');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const HaloLifeMarks = require('#/data/event/life-event-marks/life-event-marks-61');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum, distance_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aims = [
  [race_enum.hope_sta, 0, 5, 0b11],
  [race_enum.sats_sho, 1, 5, 0b11],
  [race_enum.toky_yus, 1, 5, 0b11],
  [race_enum.kiku_sho, 1, 20, 0b11],
  [race_enum.takm_kin, 2, 1, 0b11],
  [race_enum.yasu_kin, 2, 3, 4],
  [race_enum.sprt_sta, 2, 1, 4],
  [race_enum.tenn_sho, 2, 1, 4],
  [race_enum.arim_kin, 2, 20, -4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 0b11;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    if (extra.race === race_enum.takm_kin && extra.rank !== 1) {
      if (
        era.get(`love:${this.id}`) < 75 &&
        era.get(`relation:${this.id}:0`) <= 225
      ) {
        era.set('flag:强制BE', this.id);
      }
    } else {
      const edu_marks = new HaloEduMarks();
      if (
        edu_marks.give_up > 0 &&
        race_infos[extra.race].distance <= distance_enum.mile
      ) {
        if (extra.rank === 1 && --edu_marks.give_up === 0) {
          edu_marks.give_up = -1;
        } else if (extra.rank > 1 && ++edu_marks.give_up === 4) {
          era.set(`cflag:${this.id}:招募状态`, -1);
          era.set('flag:强制BE', this.id);
          if (era.get('flag:当前互动角色') === this.id) {
            era.set('flag:当前互动角色', 0);
          }
        }
      }
    }
  }

  check_next_week() {
    if (!era.get('flag:回合爱慕惩罚')) {
      const life_marks = new HaloLifeMarks();
      if (
        !life_marks.fraternity &&
        era.get('love:61') >= 75 &&
        era.get('love:52') >= 75
      ) {
        life_marks.fraternity = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.love).set_arg('fraternity'),
        );
      }
    }
    if (era.get(`cflag:${this.id}:招募状态`) !== recruit_flags.no) {
      const edu_marks = new HaloEduMarks();
      const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
      const ebj = new EventObject(this.id, cb_enum.edu);
      const ebj_s = new EventObject(this.id, cb_enum.edu, true);
      const takm_kin_win = check_aim_race(
        RaceHistory.get(this.id).get(),
        race_enum.takm_kin,
        2,
        1,
      );
      if (!edu_marks.give_up) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ramen',
          event_hooks.out_start,
          ebj,
        );
        if (edu_marks.ramen === 2) {
          check_and_add_event(
            edu_marks,
            edu_weeks,
            'for_king',
            event_hooks.out_start,
            ebj,
          );
        }
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'fc_train',
          event_hooks.week_start,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'auto_graph',
          event_hooks.out_start,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'laugh',
          event_hooks.week_start,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'art_exhibit',
          event_hooks.out_start,
          ebj,
        );
      }
      switch (edu_weeks) {
        case 41:
          add_event(
            event_hooks.week_start,
            ebj_s.set_arg('ws_first_class_day'),
          );
          break;
        case 47 + 1:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_new_year_c'));
          break;
        case 47 + 29:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_summer_start_c'));
          break;
        case 47 + 30:
          add_event(event_hooks.week_end, ebj_s.set_arg('ws_temple_fair_c'));
          break;
        case 47 + 32:
          add_event(event_hooks.week_end, ebj_s.set_arg('ws_summer_end_c'));
          break;
        case 47 + 41:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_determination'));
          break;
        case 47 + 42:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_the_way'));
          break;
        case 47 + 43:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_break'));
          break;
        case 95 + 1:
          add_event(event_hooks.out_church, ebj_s.set_arg('oc_new_year_s'));
          break;
        case 95 + 13:
          if (takm_kin_win) {
            add_event(
              event_hooks.week_start,
              ebj_s.set_arg('ws_special_letter'),
            );
          } else if (!era.get('flag:强制BE')) {
            era.set(`cflag:${this.id}:招募状态`, recruit_flags.temporary_leave);
            add_event(event_hooks.week_start, ebj_s.set_arg('ws_crisis'));
          }
          break;
        case 95 + 14:
          if (takm_kin_win) {
            add_event(event_hooks.week_start, ebj_s.set_arg('ws_legend'));
          } else if (
            era.get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes
          ) {
            EventMarks.get(0).sub(event_hooks.out_station);
            era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
            edu_marks.give_up = 3;
          }
          break;
        case 95 + 30:
          if (takm_kin_win) {
            add_event(event_hooks.week_end, ebj_s.set_arg('ws_temple_fair_s'));
          }
          break;
        case 95 + 32:
          if (takm_kin_win) {
            add_event(event_hooks.week_end, ebj_s.set_arg('ws_summer_end_s'));
          }
          break;
        case 95 + 37:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_breaking_dawn'));
          break;
        case 95 + 41:
          if (
            !edu_marks.give_up &&
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.tenn_sho,
              2,
              1,
            )
          ) {
            add_event(event_hooks.week_start, ebj_s.set_arg('ws_until_end'));
          }
          break;
        case 143 + 1:
          if (
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.tenn_sho,
              2,
              1,
            ) &&
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.arim_kin,
              2,
              1,
            )
          ) {
            add_event(event_hooks.week_start, ebj_s.set_arg('ws_dawn'));
          }
          break;
        case 143 + 9:
          add_event(event_hooks.week_start, ebj_s.set_arg('palace'));
      }
      if (edu_weeks < 3 * 48) {
        if (era.get(`cstr:${this.id}:决胜服`) === -1) {
          const reg_race = sys_reg_race(this.id).curr;
          if (
            reg_race.week === era.get('flag:当前回合数') &&
            race_infos[reg_race.race].race_class === class_enum.G1
          ) {
            add_event(
              event_hooks.week_start,
              ebj_s.copy().set_arg('ws_race_clothe'),
            );
          }
        }
        check_and_register_aim_race(this.id, aim_races, edu_weeks);
      }
    }
  }

  check_palace_and_get_aims() {
    if (new HaloEduMarks().give_up > 0) {
      era.set('flag:强制BE', this.id);
    }
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims.forEach(([race, year, rank]) =>
      buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
    return buffer;
  }

  is_aim_race(race, edu_weeks, rank) {
    let check = super.is_aim_race(race, edu_weeks, rank);
    if (edu_weeks > 96) {
      if (
        race === race_enum.yasu_kin &&
        rank === 1 &&
        check_aim_race(RaceHistory.get(this.id).get(), race_enum.takm_kin, 2, 1)
      ) {
        return check | 0b10;
      } else if (
        race === race_enum.sprt_sta &&
        check_aim_race(RaceHistory.get(this.id).get(), race_enum.takm_kin, 2, 1)
      ) {
        return check | 0b11;
      } else if (race === race_enum.tenn_sho && !new HaloEduMarks().give_up) {
        return check | 0b11;
      } else if (
        race === race_enum.arim_kin &&
        check_aim_race(
          RaceHistory.get(this.id).get(),
          race_enum.tenn_sho,
          2,
          1,
        ) &&
        !new HaloEduMarks().give_up
      ) {
        return check | 0b11;
      }
    }
    return check;
  }
};
