const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const TanhuizaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-62');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const event_marks = new TanhuizaEduMarks(),
      info = race_infos[extra_flag.race];
    if (info.race_class === class_enum.G1) {
      event_marks.aim_goal += extra_flag.edu_weeks < 48 && extra_flag.rank <= 5;
      event_marks.g1_goal++;
    }
    if (info.race_class <= class_enum.G3 && info.span >= 2500) {
      event_marks.long_count++;
    }
  }

  check_and_get_titles(aim_check) {
    const event_marks = new TanhuizaEduMarks(),
      races = RaceHistory.get(this.id).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1) &&
      event_marks.g1_goal >= 12 &&
      event_marks.long_count >= 4
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

  get_aim_races() {
    const aim_races = {};
    aim_races[race_enum.begin_race] = 4;
    aim_races[get_aim_race_index(race_enum.hope_sta, 0)] = -4;
    aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
    aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
    aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
    aim_races[get_aim_race_index(race_enum.diam_sta, 2)] = 4;
    aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
    aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
    aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
    aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;
    if (new TanhuizaEduMarks().abandon_japa_cup) {
      aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 0;
    }
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(this.id).get();
    const event_marks = new TanhuizaEduMarks();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push({
      check: Math.min(event_marks.aim_goal, 1),
      color:
        event_marks.aim_goal >= 1
          ? attr_change_colors.up
          : attr_change_colors.down,
      current: event_marks.aim_goal.toString(),
      desc: i18n().kojo[this.id].aim_desc,
      mark:
        event_marks.aim_goal >= 1
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '1'),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.diam_sta, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
