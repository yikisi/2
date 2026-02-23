const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { attr_change_colors } = require('#/data/color-const');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { get_chara_rank } = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { pressure_border } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.new_tro, 1)] = 4;
aim_races[get_aim_race_index(race_enum.nhk_cup, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.mile_cha, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 0b11;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 0b11;

aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = -1;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = -1;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = -1;

aim_races[get_aim_race_index(race_enum.yasu_kin, 1)] = -4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = -4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const edu_marks = new OguriEduMarks();
    if (extra_flag.race === race_enum.sats_sho && extra_flag.rank === 1) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.edu).set_arg('nightmare'),
      );
    } else if (
      // CFLAGNAME:48 = 育成回合计时
      get(`cflag:${this.id}:48`) >= 96 &&
      get(`cflag:${this.id}:48`) <= 95 + 24 &&
      race_infos[extra_flag.race].race_class === class_enum.G1 &&
      extra_flag.rank <= 3 &&
      edu_marks.aim_check < 2
    ) {
      edu_marks.aim_check++;
    }
  }

  check_and_get_titles(aim_check) {
    const race_history = RaceHistory.get(this.id);
    const races = race_history.get();
    const race_list = race_history.get_values();
    const titles = [];
    if (
      race_list.filter(
        (e) => race_infos[e.race].race_class === class_enum.G1 && e.pop === 1,
      ).length >= 6 &&
      check_aim_race(races, race_enum.mile_cha, 1, 1) &&
      (check_aim_race(races, race_enum.yasu_kin, 1, 1) ||
        check_aim_race(races, race_enum.yasu_kin, 2, 1)) &&
      (check_aim_race(races, race_enum.arim_kin, 1, 1) ||
        check_aim_race(races, race_enum.arim_kin, 2, 1))
    ) {
      titles.push({
        c: get_chara_rank(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return titles;
  }

  check_next_week() {
    const edu_weeks = get(`cflag:${this.id}:48`);
    if (edu_weeks < 3 * 48) {
      const edu_marks = new OguriEduMarks();
      const event_special = new EventObject(this.id, cb_enum.edu, true);
      // CFLAGNAME:49 = 育成次数
      const first_edu = get(`cflag:${this.id}:49`) === 0;
      if (edu_marks.train_buff > 0) {
        edu_marks.train_buff--;
      }
      // BASENAME:11 = 压力
      set(
        `base:${this}:11`,
        Math.min(get(`base:${this}:11`), pressure_border.depression),
      );
      // CFLAGNAME:40 = 干劲
      set(`cflag:${this.id}:40`, Math.max(get(`cflag:${this.id}:40`), -1));
      switch (edu_weeks) {
        case 47 + 1:
        case 95 + 1:
          add_event(event_hooks.week_start, event_special.set_arg('new_year'));
          break;
        case 47 + 5:
          add_event(event_hooks.week_start, event_special.set_arg('food'));
          break;
        case 47 + 6:
        case 95 + 6:
          add_event(event_hooks.week_start, event_special.set_arg('valentine'));
          break;
        case 47 + 17:
          add_event(event_hooks.week_start, event_special.set_arg('worry'));
          break;
        case 47 + 18:
          if (first_edu) {
            add_event(event_hooks.week_start, event_special.set_arg('emperor'));
          }
          break;
        case 47 + 29:
          add_event(event_hooks.week_start, event_special.set_arg('sea'));
          break;
        case 47 + 39:
          if (new OguriEduMarks().god === 1) {
            add_event(event_hooks.week_start, event_special.set_arg('prepare'));
          }
          break;
        case 95 + 24:
          add_event(event_hooks.week_end, event_special.set_arg('four_clock'));
          break;
        case 95 + 29:
          add_event(event_hooks.week_start, event_special.set_arg('sea2'));
          break;
        case 95 + 41:
          add_event(event_hooks.week_start, event_special.set_arg('elephant'));
      }
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else {
      super.check_next_week();
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.new_tro, 1, 20));
    buffer.push(check_aim_and_get_entry(races, race_enum.nhk_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    const { aim_check } = new OguriEduMarks();
    buffer.push({
      check: aim_check - 1,
      color: aim_check >= 2 ? attr_change_colors.up : attr_change_colors.down,
      current: aim_check.toString(),
      desc: i18n()
        .detail.edu_aim_desc_template.replace('%EDUTIME%', di18n.n_edu[2])
        .replace('%RACE%', i18n().kojo[this.id].aim_desc),
      g1: true,
      mark:
        aim_check >= 2
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '2'),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }

  is_aim_race(race, edu_weeks, rank) {
    if (
      race === race_enum.toky_yus &&
      !check_aim_race(RaceHistory.get(this.id).get(), race_enum.sats_sho, 1, 1)
    ) {
      return 0;
    } else if (race === race_enum.kiku_sho && new OguriEduMarks().god === 0) {
      return 0;
    } else if (rank !== undefined) {
      switch (race) {
        case race_enum.nhk_cup:
          if (rank > 5) {
            return 0;
          }
          break;
        case race_enum.mile_cha:
          if (rank > 3) {
            return 0;
          }
          break;
        case race_enum.arim_kin:
          if (rank > 3) {
            return 0;
          }
          break;
        case race_enum.sats_sho:
        case race_enum.toky_yus:
        case race_enum.kiku_sho:
        case race_enum.tenn_sho:
          if (rank !== 1) {
            return 0;
          }
      }
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }
};
