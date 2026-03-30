const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const { vp_status_enum } = require('#/data/ero/status-const');
const BrightEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-74');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const BrightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-74');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aims = [
  [race_enum.hope_sta, 0, 5, 0b11],
  [race_enum.sats_sho, 1, 5, 0b11],
  [race_enum.toky_yus, 1, 5, 0b11],
  [race_enum.kiku_sho, 1, 3, 0b11],
  [race_enum.stay_sta, 1, 3, 0b01],
  [race_enum.tenn_spr, 2, 1, 0b11],
  [race_enum.tenn_sho, 2, 3, 0b11],
  [race_enum.arim_kin, 2, 1, 0b11],
  [race_enum.takz_kin, 2, 0, -3],
];
const aim_races = { [race_enum.begin_race]: 0b11 };
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id);
    const race_list = races.get_values();
    const titles = [];
    if (
      check_aim_race(races.get(), race_enum.tenn_spr, 2, 1) &&
      race_list.filter(
        (e) =>
          e.rank === 1 &&
          race_infos[e.race].span >= 3000 &&
          race_infos[e.race].race_class <= class_enum.G2,
      ).length >= 4
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (aim_check) {
        sys_personal_achievement.set(this.id, 1);
      }
    }
    return titles;
  }

  check_love_events() {
    const love = era.get(`love:${this.id}`);
    if (love === 74) {
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.love).set_arg([74]),
      );
    } else {
      super.check_love_events();
    }
  }

  check_next_week() {
    if (era.get(`cflag:${this.id}:招募状态`) === recruit_flags.yes) {
      // CFLAGNAME:48 = 育成回合计时
      const edu_weeks = era.get(`cflag:${this.id}:48`);
      const edu_marks = new BrightEduMarks();
      const life_marks = new BrightLifeMarks();
      const love = era.get(`love:${this.id}`);
      const love_obj = new EventObject(this.id, cb_enum.love);
      if (
        !edu_marks.small_party &&
        love >= 50 &&
        era.get('love:59') >= 25 &&
        era.get('cflag:0:0') > 0 &&
        // FLAGNAME:2 = 当前月
        era.get('flag:2') === 5 &&
        // FLAGNAME:3 = 当前周
        era.get('flag:3') === 1
      ) {
        edu_marks.small_party = 1;
        add_event(event_hooks.week_end, love_obj.copy().set_arg('small_party'));
      }
      if (!edu_marks.all_along && love >= 90) {
        edu_marks.all_along = 1;
        add_event(
          event_hooks.office_rest,
          love_obj.copy().set_arg('all_along'),
        );
      }
      if (
        !edu_marks.miss_tram &&
        love >= 90 &&
        era.get(`cflag:${this.id}:0`) !== 1 &&
        // TALENTNAME:31 = 处女
        era.get(`talent:${this.id}:31`) !== vp_status_enum.virgin &&
        era.get('love:64') >= 75
      ) {
        edu_marks.miss_tram = 1;
        add_event(
          event_hooks.out_station,
          love_obj.copy().set_arg('miss_tram'),
        );
      }
      if (
        !edu_marks.dear_sister &&
        love >= 90 &&
        era.get(`cflag:${this.id}:0`) !== 1 &&
        era.get(`talent:${this.id}:31`) !== vp_status_enum.virgin &&
        era.get('talent:59:31') !== vp_status_enum.virgin &&
        era.get('love:59') >= 75
      ) {
        edu_marks.dear_sister = 1;
        add_event(event_hooks.week_end, love_obj.copy().set_arg('dear_sister'));
      }
      if (
        !edu_marks.the_fruit &&
        love >= 90 &&
        // FLAGNAME:2 = 当前月
        era.get('flag:2') === 2 &&
        // FLAGNAME:3 = 当前周
        era.get('flag:3') === 2
      ) {
        edu_marks.the_fruit = 1;
        add_event(event_hooks.week_start, love_obj.copy().set_arg('the_fruit'));
      }
      if (edu_weeks >= 3 * 48 && !life_marks.know_us && love >= 90) {
        if (
          [13, 27, 59, 64, 71, 74, 86].reduce((p, c) => {
            if (
              era.get(`love:${c}`) >= 75 &&
              // EXPNAME:25 = 性爱次数
              // EXPNAME:26 = 睡奸次数
              era.get(`exp:${c}:25`) > era.get(`exp:${c}:26`)
            ) {
              return p + 1;
            }
            return p;
          }, 0) >= 2
        ) {
          life_marks.know_us = 1;
          add_event(event_hooks.out_start, love_obj.copy().set_arg('know_us'));
        }
      }
      if (
        !edu_marks.dear_elder_sister &&
        love >= 90 &&
        era.get('love:27') >= 90 - 15 * (life_marks.know_us === 2) &&
        era.get('cflag:0:0') > 0 &&
        era.get(`cflag:${this.id}:0`) !== 1
      ) {
        edu_marks.dear_elder_sister = 1;
        add_event(
          event_hooks.week_end,
          love_obj.copy().set_arg('dear_elder_sister'),
        );
      }
      if (edu_weeks < 3 * 48) {
        const edu_obj = new EventObject(this.id, cb_enum.edu, true);
        if (
          !edu_marks.where_is_time &&
          love >= 50 &&
          // STATUSNAME:0 = 练习X手
          era.get(`status:${this.id}:0`) < 0
        ) {
          edu_marks.where_is_time = 1;
          add_event(
            event_hooks.week_start,
            edu_obj.copy().set_arg('where_is_time'),
          );
        }
        // STATUSNAME:1 = 熬夜
        if (!edu_marks.sleep && era.get('status:0:1') > 0) {
          edu_marks.sleep = 1;
          add_event(event_hooks.week_start, edu_obj.set_arg('sleep'));
        }
        switch (edu_weeks) {
          case 22:
            if (
              era.get(`love:${this.id}`) >= 25 &&
              // CFLAGNAME:66 = 招募状态
              era.get('cflag:13:66') === recruit_flags.no &&
              era.get('cflag:27:66') === recruit_flags.no &&
              era.get('cflag:59:66') === recruit_flags.no &&
              era.get('cflag:64:66') === recruit_flags.no &&
              era.get('cflag:71:66') === recruit_flags.no &&
              era.get('cflag:86:66') === recruit_flags.no
            ) {
              add_event(event_hooks.week_end, edu_obj.set_arg('mejiro_tea'));
            }
            break;
          case 28:
            if (!(era.get('cflag:27:48') < 3 * 48)) {
              add_event(event_hooks.week_end, edu_obj.set_arg('inherit'));
            }
            break;
          case 40:
            add_event(event_hooks.week_end, edu_obj.set_arg('my_way'));
            break;
          case 47 + 11:
            add_event(event_hooks.week_start, edu_obj.set_arg('light'));
            break;
          case 95 + 1:
            if (love >= 75) {
              add_event(
                event_hooks.out_shopping,
                edu_obj.set_arg('hot_spring_ticket'),
              );
            }
            break;
          case 95 + 14:
            add_event(event_hooks.week_end, edu_obj.set_arg('for_tenn_spr'));
            break;
          case 95 + 17:
            if (
              check_aim_race(
                RaceHistory.get(this.id).get(),
                race_enum.tenn_spr,
                2,
                1,
              )
            ) {
              add_event(event_hooks.week_start, edu_obj.set_arg('mejiro_name'));
            }
        }
        check_and_register_aim_race(this.id, aim_races, edu_weeks);
      } else if (edu_weeks === 143 + 4) {
        if (edu_marks.main > 4) {
          add_event(
            event_hooks.week_end,
            new EventObject(this.id, cb_enum.edu, true).set_arg('accel_era'),
          );
        }
      } else if (edu_weeks === 143 + 6) {
        if (edu_marks.hot_spring > 0) {
          add_event(
            event_hooks.out_start,
            new EventObject(this.id, cb_enum.edu, true).set_arg('hot_spring'),
          );
        }
      } else if (edu_weeks === 143 + 9) {
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.edu, true).set_arg('palace'),
        );
      }
    }
  }

  is_aim_race(race, edu_weeks, rank) {
    let check = super.is_aim_race(race, edu_weeks, rank);
    if (rank === void 0) {
      if (race === race_enum.begin_race && edu_weeks > 23) {
        return 0;
      }
    } else {
      switch (race) {
        case race_enum.begin_race:
          if (rank > 1) {
            return 0;
          }
          break;
        case race_enum.tenn_spr:
          if (rank > 1) {
            return 0;
          }
          break;
        case race_enum.tenn_sho:
          if (edu_weeks < 96 || rank > 1) {
            return 0;
          }
          break;
        case race_enum.arim_kin:
          if (edu_weeks < 96 || rank > 1) {
            return 0;
          }
      }
    }
    return check;
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const ret = [];
    const races = RaceHistory.get(this.id).get();
    ret.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims
      .filter((a) => a[3] > 0)
      .forEach(([race, year, rank]) =>
        ret.push(check_aim_and_get_entry(races, race, year, rank)),
      );
    return ret;
  }
};
