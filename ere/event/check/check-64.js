const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const PamaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-64');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

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
    if (
      !edu_marks.aim_check &&
      extra_flag.rank === 1 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3 &&
      era.get(`cflag:${this.id}:育成回合计时`) <= 47 + 22
    ) {
      edu_marks.aim_check = 1;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id),
      dict = races.get(),
      ret = [];
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
          ).length <= 3
      ) {
        ret.push({
          c: get_chara_color(this.id),
          n: this.get_personal_titles()[1],
        });
        aim_check && sys_personal_achievement.set(this.id, 1);
      }
    }
    return ret;
  }

  check_next_week() {
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
    if (
      era.get('flag:当前回合数') % 48 === 6 &&
      love >= 50 &&
      !edu_marks.escape
    ) {
      edu_marks.escape = 1;
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.love).set_arg('escape'),
      );
    }
    if (
      era.get(`cflag:${this.id}:性别`) !== 1 &&
      era.get('cflag:0:性别') > 0 &&
      edu_marks.movie_job < 2 &&
      ++edu_marks.movie_job === 2
    ) {
      if (love >= 75) {
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('here'),
        );
      } else {
        edu_marks.movie_job = 1;
      }
    }
    super.check_next_week();
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
    const races = RaceHistory.get(this.id).get(),
      ret = [],
      { aim_check } = new PamaEduMarks();
    ret.push(check_aim_and_get_entry(races, race_enum.begin_race));
    ret.push({
      check: aim_check,
      color: aim_check ? attr_change_colors.up : attr_change_colors.down,
      content: `经典年6月第2周前 G3以上比赛1着 ${aim_check}/1 ${
        aim_check ? '✔' : '✘'
      }`,
    });
    ret.push(check_aim_and_get_entry(races, race_enum.hako_kin, 1, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.nikk_hai, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 20));
    ret.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return ret;
  }

  get_personal_titles() {
    return ['变化不定的逃马娘', '大器晚成的逃亡者'];
  }
};
