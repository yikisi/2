const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {
  [race_enum.begin_race]: 4,
  [get_aim_race_index(race_enum.takz_kin, 1)]: -4,
  [get_aim_race_index(race_enum.prix_lat, 1)]: -4,
  [get_aim_race_index(race_enum.arim_kin, 1)]: -4,
  [get_aim_race_index(race_enum.tenn_spr, 2)]: -4,
  [get_aim_race_index(race_enum.takz_kin, 2)]: -4,
  [get_aim_race_index(race_enum.prix_lat, 2)]: -4,
  [get_aim_race_index(race_enum.arim_kin, 2)]: -4,
};

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get(),
      titles = [];
    if (
      (check_aim_race(races, race_enum.takz_kin, 1, 1) ||
        check_aim_race(races, race_enum.takz_kin, 2, 1)) &&
      (check_aim_race(races, race_enum.prix_lat, 1, 1) ||
        check_aim_race(races, race_enum.prix_lat, 2, 1)) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 1, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (aim_check) {
        sys_personal_achievement.set(this.id, 1);
      }
      LifeEventMarks.get_marks(this.id).buff = 1;
    }
    return titles;
  }

  check_next_week() {
    if (era.get(`cflag:${this.id}:随机招募`) <= -3) {
      era.set(`cflag:${this.id}:招募状态`, -1);
      era.set(`cflag:${this.id}:随机招募`, 0);
      era.print(
        i18n().kojo[this.id].get_visit_notification(
          get_chara_talk(this.id),
          get_chara_talk(0),
        ),
      );
    }
    super.check_next_week();
  }

  get_aim_races() {
    return aim_races;
  }
};
