const CustomizedCheck = require('#/event/check/check-common');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const { get_chara_color } = require('#/data/chara-colors');
const RaceHistory = require('#/data/race/model/race-history');

/**
 *
 * @param {function(AfterRaceParams)} after_race_cb
 * @param {(function(Record<string,RaceResult>,RaceResult[],boolean):boolean)|undefined} title_check_cb
 * @param {Record<string,number>} aim_races
 * @param {function({check:number,color:string,content:string}[],Record<string,RaceResult>)} fill_edu_aims_cb
 * @param {string[]} [personal_titles]
 * @returns {Class}
 */
module.exports = (
  after_race_cb,
  title_check_cb,
  aim_races,
  fill_edu_aims_cb,
  personal_titles,
) => {
  class A extends CustomizedCheck {
    check_after_race(extra_flag) {
      after_race_cb.bind(this)(extra_flag);
    }

    check_and_get_titles(aim_check) {
      if (!title_check_cb) {
        return super.check_and_get_titles(aim_check);
      }
      const races = new RaceHistory(this.id),
        titles = [];
      if (
        title_check_cb.bind(this)(races.get(), races.get_values(), aim_check)
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
      const buffer = [],
        races = new RaceHistory(this.id).get();
      fill_edu_aims_cb.bind(this)(buffer, races);
      return buffer;
    }

    get_personal_titles() {
      if (personal_titles) {
        return personal_titles;
      }
      return super.get_personal_titles();
    }
  }

  return A;
};
