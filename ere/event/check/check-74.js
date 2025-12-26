const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aims = [
  [race_enum.hope_sta, 0, 5, 4],
  [race_enum.sats_sho, 1, 5, 4],
  [race_enum.toky_yus, 1, 5, 4],
  [race_enum.kiku_sho, 1, 3, 4],
  [race_enum.stay_sta, 1, 3, 4],
  [race_enum.tenn_spr, 2, 1, 4],
  [race_enum.tenn_sho, 2, 3, 4],
  [race_enum.arim_kin, 2, 1, 4],
  [race_enum.takz_kin, 2, 0, -4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id);
    const race_list = races.get_values();
    const titles = [];
    if (
      check_aim_race(races.get(), race_enum.tenn_spr, 2, 1) &&
      race_list.filter(
        (e) =>
          e.rank === 1 &&
          race_infos[e.race].span >= 3000 &&
          race_infos[e.race].race_class <= class_enum.G2,
      ).length >= 4
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
    return aim_races;
  }

  get_edu_aims() {
    const ret = [];
    const races = RaceHistory.get(this.id).get();
    ret.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims
      .filter((a) => a[3] > 0)
      .forEach(([race, year, rank]) =>
        ret.push(check_aim_and_get_entry(races, race, year, rank)),
      );
    return ret;
  }
};
