const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const FujikiEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-5');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (
      extra_flag.race === race_enum.begin_race &&
      extra_flag.rank === 1 &&
      extra_flag.contestants.find((e) => e.rank.curr === 1).race.conditionParams
        .bashin_diff_behind >= 8
    ) {
      new FujikiEduMarks().title_check = 1;
    }
  }

  check_and_get_titles(aim_check) {
    const ret = [],
      races = RaceHistory.get(this.id).get();
    if (
      new FujikiEduMarks().title_check &&
      check_aim_race(
        races,
        race_enum.asah_sta,
        0,
        1,
        (extra) => extra.pop === 1,
      ) &&
      check_aim_race(
        races,
        race_enum.sats_sho,
        1,
        1,
        (extra) => extra.pop === 1,
      ) &&
      check_aim_race(
        races,
        race_enum.toky_yus,
        1,
        1,
        (extra) => extra.pop === 1,
      ) &&
      check_aim_race(
        races,
        race_enum.kiku_sho,
        1,
        1,
        (extra) => extra.pop === 1,
      )
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return ret;
  }

  get_aim_races() {
    const aim_races = {};
    aim_races[race_enum.begin_race] = 4;
    aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 4;
    aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 4;
    aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;

    if (new FujikiEduMarks().program) {
      aim_races[get_aim_race_index(race_enum.nhk_cup, 1)] = 4;
      aim_races[get_aim_race_index(race_enum.mile_cha, 1)] = 4;
      aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = -4;
      aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = -4;
    } else {
      aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
      aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
    }

    aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 4;
    aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
    aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
    aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(this.id).get();
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%STATUS%',
        new FujikiEduMarks().title_check > 0 ? i18n().ui_yes2 : i18n().ui_no2,
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.asah_sta, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));

    if (new FujikiEduMarks().program) {
      buffer.push(check_aim_and_get_entry(races, race_enum.nhk_cup, 1, 5));
      buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 1, 3));
    } else {
      buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
      buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 20));
    }

    buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
