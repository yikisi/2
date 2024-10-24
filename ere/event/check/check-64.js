const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
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
  check_and_get_titles(aim_check) {
    const races = new RaceHistory(this.id),
      ret = [];
    if (
      races
        .get_values()
        .findIndex(
          (e) =>
            race_infos[e.race].race_class === class_enum.G1 &&
            e.rank === 1 &&
            e.pop >= 4 &&
            e.st === 0,
        ) !== -1 &&
      check_aim_race(
        races.get(),
        race_enum.tenn_spr,
        2,
        1,
        (e) => e.st === 0,
      ) &&
      check_aim_race(
        races.get(),
        race_enum.takz_kin,
        2,
        1,
        (e) => e.st === 0,
      ) &&
      check_aim_race(races.get(), race_enum.arim_kin, 2, 1, (e) => e.st === 0)
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
    const races = new RaceHistory(this.id).get(),
      ret = [];
    ret.push(check_aim_and_get_entry(races, race_enum.begin_race));
    ret.push(check_aim_and_get_entry(races, race_enum.hako_kin, 1, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.nikk_hai, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return ret;
  }
};
