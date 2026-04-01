const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const BelieveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-94');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.falc_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kita_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.cent_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.cent_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    if (
      // CFLAGNAME:48 = 育成回合计时
      era.get(`cflag:${this.id}:48`) < 96 &&
      extra.race === race_enum.cent_sta &&
      extra.rank === 1 &&
      extra.contestants.find((e) => e.rank.curr === 1).race.conditionParams
        .bashin_diff_behind >= 4
    ) {
      new BelieveEduMarks().goal = 1;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get();
    const titles = [];
    if (
      new BelieveEduMarks().goal > 0 &&
      (check_aim_race(races, race_enum.sprt_sta, 1, 1) ||
        check_aim_race(races, race_enum.sprt_sta, 2, 1)) &&
      check_aim_race(races, race_enum.takm_kin, 2, 1)
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (aim_check) {
        sys_personal_achievement.set(this.id, 1);
      }
    }
    if (
      CharaTitles.get(this.id)
        .get()
        .some((t) => t.n === 's_dirty')
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[1],
      });
    }
    return titles;
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.falc_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kita_kin, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.cent_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.cent_sta, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
    return buffer;
  }

  get_personal_titles() {
    return ['109501', '109502'];
  }
};
