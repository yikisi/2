const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const { i_pama_yandere } = require('#/event/snippets/106400');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const PamaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-64');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {
  [race_enum.begin_race]: 0b11,
  [get_aim_race_index(race_enum.hako_kin, 1)]: 0b11,
  [get_aim_race_index(race_enum.nikk_hai, 2)]: 0b11,
  [get_aim_race_index(race_enum.tenn_spr, 2)]: 0b11,
  [get_aim_race_index(race_enum.takz_kin, 2)]: 0b11,
  [get_aim_race_index(race_enum.tenn_sho, 2)]: 0b11,
  [get_aim_race_index(race_enum.arim_kin, 2)]: 0b11,

  [get_aim_race_index(race_enum.sats_sho, 1)]: -1,
  [get_aim_race_index(race_enum.toky_yus, 1)]: -1,
  [get_aim_race_index(race_enum.kiku_sho, 1)]: -1,
  [get_aim_race_index(race_enum.arim_kin, 1)]: -1,
};

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const edu_marks = new PamaEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (
      !edu_marks.aim_check &&
      extra_flag.rank === 1 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3 &&
      edu_weeks <= 47 + 22
    ) {
      edu_marks.aim_check = 1;
    }
    if (
      !edu_marks.rain &&
      race_infos[extra_flag.race].race_class === class_enum.G1
    ) {
      edu_marks.rain = 1;
      add_event(
        event_hooks.out_shopping,
        new EventObject(this.id, cb_enum.edu, !0).set_arg('rain'),
      );
    }
    if (
      i_pama_yandere() &&
      extra_flag.race === race_enum.tenn_spr &&
      extra_flag.rank > 1
    ) {
      add_event(
        event_hooks.school_rooftop,
        new EventObject(this.id, cb_enum.love, !0).set_arg('wait_or'),
      );
    }
    if (
      edu_weeks >= 96 &&
      i_pama_yandere() &&
      edu_marks.only_you <= 3 &&
      extra_flag.rank === 1
    ) {
      add_event(
        get_random_entry([event_hooks.school_atrium, event_hooks.out_station]),
        new EventObject(this.id, cb_enum.love, true).set_arg('s_feeling'),
      );
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id);
    const dict = races.get();
    const ret = [];
    const takz_kin =
      check_aim_race(dict, race_enum.takz_kin, 1, 1, (e) => e.st === 0) ||
      check_aim_race(dict, race_enum.takz_kin, 2, 1, (e) => e.st === 0);
    const arim_kin =
      check_aim_race(dict, race_enum.arim_kin, 1, 1, (e) => e.st === 0) +
      check_aim_race(dict, race_enum.arim_kin, 2, 1, (e) => e.st === 0);
    if (
      takz_kin &&
      arim_kin > 0 &&
      era.get(`base:${this.id}:速度`) >= 1200 &&
      era.get(`base:${this.id}:耐力`) >= 1200
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (
        arim_kin === 2 &&
        races
          .get_entries()
          .filter(
            (e) =>
              e.weeks < 96 &&
              race_infos[e.race].race_class <= class_enum.G3 &&
              e.rank === 1,
          ).length <= 5
      ) {
        ret.push({
          c: get_chara_color(this.id),
          n: this.get_personal_titles()[1],
        });
        aim_check && sys_personal_achievement.set(this.id, 1);
      }
      new PamaEduMarks().sports_car = 1;
    }
    return ret;
  }

  check_next_week() {
    if (era.get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      return;
    }
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const edu_marks = new PamaEduMarks();
    const life_marks = new PamaLifeMarks();
    const love = era.get(`love:${this.id}`);
    if (love >= 24 && !life_marks.love_24) {
      life_marks.love_24 = 1;
      add_event(
        event_hooks.out_river,
        new EventObject(this.id, cb_enum.love).set_arg('distance'),
      );
    } else if (love >= 39 && life_marks.love_24 === 2 && !life_marks.love_39) {
      life_marks.love_39 = 1;
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.love).set_arg('happy'),
      );
    }
    if (love >= 50) {
      if (!edu_marks.escape && era.get('flag:当前回合数') % 48 === 6) {
        edu_marks.escape = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.love).set_arg('escape'),
        );
      }
      if (!edu_marks.delicious) {
        edu_marks.delicious = 1;
        add_event(
          event_hooks.office_cook,
          new EventObject(this.id, cb_enum.love).set_arg('delicious'),
        );
      }
      if (era.get(`mark:${this.id}:同心`) >= 1) {
        if (!edu_marks.nap) {
          edu_marks.nap = 1;
          add_event(
            event_hooks.school_rooftop,
            new EventObject(this.id, cb_enum.love).set_arg('nap'),
          );
        }
        if (!edu_marks.leisure) {
          edu_marks.leisure = 1;
          add_event(
            event_hooks.out_shopping,
            new EventObject(this.id, cb_enum.love).set_arg('leisure'),
          );
        }
      }
    }
    if (
      era.get(`cflag:${this.id}:性别`) !== 1 &&
      era.get('cflag:0:性别') > 0 &&
      era.get(`exp:${this.id}:性爱次数`) > era.get(`exp:${this.id}:睡奸次数`) &&
      edu_marks.movie_job < 8 &&
      ++edu_marks.movie_job === 8
    ) {
      if (love >= 75) {
        add_event(
          event_hooks.out_shopping,
          new EventObject(this.id, cb_enum.love).set_arg('here'),
        );
      } else {
        edu_marks.movie_job = 1;
      }
    }
    if (love >= 75) {
      if (!i_pama_yandere()) {
        if (
          !edu_marks.cinema &&
          era.get('cflag:71:招募状态') === recruit_flags.yes &&
          era.get('love:71') >= 75
        ) {
          edu_marks.cinema = 1;
          add_event(
            event_hooks.out_shopping,
            new EventObject(this.id, cb_enum.love).set_arg('cinema'),
          );
        }
        if (
          era.get('cflag:0:性别') > 0 &&
          era.get(`cflag:${this.id}:性别`) !== 1
        ) {
          if (
            !edu_marks.concern &&
            era.get('cflag:27:招募状态') === recruit_flags.yes &&
            era.get('love:27') >= 75
          ) {
            edu_marks.concern = 1;
            add_event(
              event_hooks.week_end,
              new EventObject(this.id, cb_enum.love).set_arg('concern'),
            );
          }
          if (
            !edu_marks.dessert &&
            era.get('cflag:13:招募状态') === recruit_flags.yes &&
            era.get('love:13') >= 75 &&
            check_aim_race(RaceHistory.get(13).get(), race_enum.kiku_sho, 1)
          ) {
            edu_marks.dessert = 1;
            add_event(
              event_hooks.week_end,
              new EventObject(this.id, cb_enum.love).set_arg('dessert'),
            );
          }
          if (
            !edu_marks.party &&
            era.get('cflag:65:招募状态') === recruit_flags.yes &&
            era.get('love:65') >= 75
          ) {
            edu_marks.party = 1;
            add_event(
              event_hooks.out_shopping,
              new EventObject(this.id, cb_enum.love).set_arg('party'),
            );
          }
        }
      }
      if (
        !edu_marks.rest &&
        era.get(`cflag:${this.id}:种族`) > 0 &&
        era.get(`talent:${this.id}:处女`) !== vp_status_enum.virgin &&
        era.get(`talent:${this.id}:处女`) !== vp_status_enum.dont_know
      ) {
        edu_marks.rest = 1;
        add_event(
          event_hooks.office_rest,
          new EventObject(this.id, cb_enum.love).set_arg('rest'),
        );
      }
      if (!edu_marks.travel && era.get('item:善信号') > 0) {
        edu_marks.travel = 1;
        add_event(
          event_hooks.out_start,
          new EventObject(this.id, cb_enum.love).set_arg('travel'),
        );
      }
    }
    if (love >= 85 && !edu_marks.joke) {
      edu_marks.joke = 1;
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.love).set_arg('joke'),
      );
    }
    const e_special = new EventObject(this.id, cb_enum.edu, true);
    if (edu_weeks < 3 * 48) {
      const event_obj = new EventObject(this.id, cb_enum.edu);
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'lunch_break',
        event_hooks.week_end,
        event_obj,
      );
      if (edu_weeks >= 48) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'dis_talent',
          event_hooks.out_start,
          event_obj,
        );
      }
      if (edu_weeks >= 96) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'choice',
          event_hooks.out_start,
          event_obj,
        );
      }
      if (love >= 50 && love < 75 && era.get('love:65') < 50) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'confused',
          event_hooks.week_start,
          event_obj,
        );
      }
      if (
        love >= 75 &&
        era.get(`relation:${this.id}:0`) <=
          love * (era.get('flag:极端行为限制') || 1) * 2
      ) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'a_step',
          event_hooks.week_end,
          event_obj,
        );
      }
      switch (edu_weeks) {
        case 16: // 小小的流言
          add_event(event_hooks.week_start, e_special.set_arg('rumor'));
          break;
        case 17: // 微妙的空间
          add_event(event_hooks.week_start, e_special.set_arg('strange'));
          break;
        case 20: // 要来自由赛吗？
          add_event(event_hooks.week_start, e_special.set_arg('free_race'));
          break;
        case 24: // 名为目白的重压
          add_event(event_hooks.week_start, e_special.set_arg('mejiro'));
          break;
        case 47 + 1: // 新年抱负
          add_event(event_hooks.week_start, e_special.set_arg('new_year_1'));
          if (love >= 50 && !edu_marks.hot_spring) {
            add_event(
              event_hooks.out_shopping,
              new EventObject(this.id, cb_enum.edu).set_arg('lottery'),
            );
          }
          break;
        case 47 + 9: // 三冠要怎么办啊！？
          add_event(event_hooks.week_start, e_special.set_arg('how'));
          break;
        case 47 + 17: // 姐妹亦是对手
          if (
            era.get('cflag:27:招募状态') !== recruit_flags.yes ||
            era.get('cflag:27:育成回合计时') === edu_weeks
          ) {
            add_event(event_hooks.week_start, e_special.set_arg('sister'));
          }
          break;
        case 47 + 29:
          add_event(
            event_hooks.week_start,
            e_special.set_arg('summer_start_1'),
          );
          break;
        case 47 + 30:
          add_event(
            event_hooks.week_start,
            e_special.set_arg('summer_middle_1'),
          );
          break;
        case 47 + 32:
          add_event(event_hooks.week_end, e_special.set_arg('summer_end_1'));
          break;
        case 47 + 45:
          if (edu_marks.hot_spring === 1) {
            add_event(
              event_hooks.out_start,
              new EventObject(this.id, cb_enum.edu).set_arg('hot_spring'),
            );
          }
          break;
        case 95 + 1:
          if (
            love >= 80 &&
            RaceHistory.get(this.id)
              .get_values()
              .filter(
                (r) =>
                  race_infos[r.race].race_class === RaceInfo.class_enum.G1 &&
                  r.rank > 1,
              ).length > 3 &&
            RaceHistory.get(this.id)
              .get_values()
              .filter((r) => r.rank === 1).length < 4
          ) {
            add_event(
              event_hooks.week_end,
              new EventObject(this.id, cb_enum.love).set_arg('trust'),
            );
          }
          // 新年参拜
          add_event(event_hooks.week_start, e_special.set_arg('new_year_2'));
          if (love >= 50 && !edu_marks.hot_spring) {
            add_event(
              event_hooks.out_shopping,
              new EventObject(this.id, cb_enum.edu).set_arg('lottery'),
            );
          }
          break;
        case 95 + 29:
          add_event(
            event_hooks.week_start,
            e_special.set_arg('summer_start_2'),
          );
          break;
        case 95 + 31:
          if (love >= 75) {
            add_event(
              event_hooks.week_start,
              e_special.set_arg('summer_middle_2'),
            );
          }
          break;
        case 95 + 32:
          if (love >= 75) {
            add_event(event_hooks.week_start, e_special.copy().set_arg('walk'));
          }
          add_event(event_hooks.week_end, e_special.set_arg('summer_end_2'));
          break;
        case 95 + 45:
          if (love >= 90 || edu_marks.hot_spring === 1) {
            add_event(
              event_hooks.out_start,
              new EventObject(this.id, cb_enum.edu).set_arg('hot_spring'),
            );
          }
          break;
        case 95 + 48:
          era.set(`cflag:${this.id}:节日事件标记`, 0);
          add_event(event_hooks.week_end, e_special.set_arg('christmas_party'));
          if (love >= 50) {
            add_event(
              event_hooks.out_shopping,
              e_special.copy().set_arg('golf'),
            );
          }
      }
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else if (edu_weeks === 143 + 4) {
      const history = RaceHistory.get(this.id).get();
      if (
        check_aim_race(history, race_enum.takz_kin, 2) &&
        check_aim_race(history, race_enum.arim_kin, 1) &&
        check_aim_race(history, race_enum.arim_kin, 2)
      ) {
        add_event(event_hooks.week_end, e_special.set_arg('winner'));
      }
    } else if (edu_weeks === 143 + 5) {
      if (edu_marks.sports_car === 1) {
        add_event(event_hooks.week_start, e_special.set_arg('sports_car'));
      }
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, e_special.set_arg('palace'));
    }
  }

  is_aim_race(race, edu_weeks, rank) {
    if (rank !== undefined && rank !== 1) {
      switch (race) {
        case race_enum.begin_race:
        case race_enum.hako_kin:
        case race_enum.nikk_hai:
        case race_enum.takz_kin:
          return 0;
        case race_enum.arim_kin:
          if (edu_weeks > 96) {
            return 0;
          }
      }
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const races = RaceHistory.get(this.id).get();
    const ret = [];
    const { aim_check } = new PamaEduMarks();
    ret.push(check_aim_and_get_entry(races, race_enum.begin_race));
    ret.push({
      champion: true,
      check: aim_check > 0,
      color: aim_check > 0 ? attr_change_colors.up : attr_change_colors.down,
      current: aim_check.toString(),
      desc: i18n().kojo[this.id].aim_desc,
      mark:
        aim_check > 0
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '1'),
    });
    ret.push(check_aim_and_get_entry(races, race_enum.hako_kin, 1, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.nikk_hai, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 20));
    ret.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return ret;
  }

  // 大器晚成的逃亡者
  get_personal_achieve() {
    return '106402';
  }

  get_personal_titles() {
    return ['106401', '106402'];
  }
};
