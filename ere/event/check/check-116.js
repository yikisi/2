const { get } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const DonnaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-116');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.shin_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (
      extra_flag.race === race_enum.yush_him &&
      extra_flag.rank === 1 &&
      extra_flag.contestants.find((e) => e.rank.curr === 1).race.conditionParams
        .bashin_diff_behind >= 5
    ) {
      new DonnaEduMarks().title_check = 1;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get(),
      ret = [];
    if (
      new DonnaEduMarks().title_check &&
      check_aim_race(races, race_enum.oka_sho, 1, 1) &&
      check_aim_race(races, race_enum.shuk_sho, 1, 1) &&
      check_aim_race(races, race_enum.japa_cup, 1, 1) &&
      check_aim_race(races, race_enum.japa_cup, 2, 1) &&
      get('base:116:力量') >= 1200
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
    return aim_races;
  }

  get_edu_aims() {
    const races = RaceHistory.get(this.id).get(),
      ret = [];
    ret.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%STATUS%',
        new DonnaEduMarks().title_check > 0 ? i18n().ui_yes2 : i18n().ui_no2,
      ),
    });
    ret.push(check_aim_and_get_entry(races, race_enum.begin_race));
    ret.push(check_aim_and_get_entry(races, race_enum.shin_kin, 1, 5));
    ret.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    ret.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    ret.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.japa_cup, 1, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
    return ret;
  }
};
