const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;

aim_races[get_aim_race_index(race_enum.hako_kin, 1)] = 4;

aim_races[get_aim_race_index(race_enum.nikk_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const edu_marks = new PamaEduMarks();
    if (
      era.get(`cflag:${this.id}:育成回合计时`) < 47 + 22 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3 &&
      extra_flag.rank === 1 &&
      !edu_marks.aim_check
    ) {
      edu_marks.aim_check = 1;
    }
  }

  check_and_get_titles(aim_check) {
    const races = new RaceHistory(this.id),
      ret = [];
    if (
      (check_aim_race(
        races.get(),
        race_enum.takz_kin,
        1,
        1,
        (e) => e.st === 0,
      ) ||
        check_aim_race(
          races.get(),
          race_enum.takz_kin,
          2,
          1,
          (e) => e.st === 0,
        )) &&
      (check_aim_race(
        races.get(),
        race_enum.arim_kin,
        1,
        1,
        (e) => e.st === 0,
      ) ||
        check_aim_race(
          races.get(),
          race_enum.arim_kin,
          2,
          1,
          (e) => e.st === 0,
        )) &&
      era.get(`base:${this.id}:速度`) >= 1200 &&
      era.get(`base:${this.id}:耐力`) >= 1200
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (
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

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const races = new RaceHistory(this.id).get(),
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
