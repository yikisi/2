const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const SuzukaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-2');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 1)] = -4;
aim_races[get_aim_race_index(race_enum.kobe_hai, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kink_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.main_oka, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const edu_marks = new SuzukaEduMarks();
    if (race_infos[extra_flag.race].race_class <= class_enum.G3) {
      if (extra_flag.rank === 1 && extra_flag.st === 0) {
        const wins = ++edu_marks.wins;
        if (wins > edu_marks.max_wins) {
          edu_marks.max_wins = wins;
        }
      } else {
        edu_marks.wins = 0;
      }
    }
  }

  check_and_get_titles(aim_check) {
    const ret = [],
      races = new RaceHistory(this.id).get();
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

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = new RaceHistory(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kobe_hai, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kink_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.main_oka, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    return buffer;
  }
};
