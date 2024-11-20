const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const ArdanEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-71');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.aoba_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.main_oka, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_after_race() {
    const event_marks = new ArdanEduMarks();
    if (era.get('cflag:71:干劲') !== 2) {
      event_marks.motivation_count++;
    }
  }

  check_and_get_titles(aim_check) {
    const edu_marks = new ArdanEduMarks(),
      races = new RaceHistory(71).get(),
      titles = [];
    if (
      !edu_marks.motivation_count &&
      !edu_marks.train_fail &&
      check_aim_race(races, race_enum.toky_yus, 1, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 1, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1)
    ) {
      titles.push({
        c: get_chara_talk(71).color,
        n: '不碎的玻璃',
      });
      aim_check && sys_personal_achievement.set(71, 1);
    }
    return titles;
  }

  check_next_week() {
    const event_marks = new ArdanEduMarks();
    if (event_marks.kiku_sho) {
      aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
      aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 0;
    } else {
      aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 0;
      aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 4;
    }
    super.check_next_week();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = new RaceHistory(this.id).get();
    const event_marks = new ArdanEduMarks();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.aoba_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(
      check_aim_and_get_entry(
        races,
        event_marks.kiku_sho ? race_enum.kiku_sho : race_enum.tenn_sho,
        1,
        3,
      ),
    );
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.main_oka, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    return buffer;
  }
};
