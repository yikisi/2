const { year_index } = require('#/data/other-const');
const { race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,{race:number,rank:number}|RaceResult>} races
 * @param {number} aim_race
 * @param {number} [year]
 * @param {number} [req_rank]
 * @param {function({race:number,rank:number,st:number,pop:number}):boolean} [additional_check_cb]
 * @returns {boolean}
 */
function check_aim_race(
  races,
  aim_race,
  year = 0,
  req_rank = 20,
  additional_check_cb = () => true,
) {
  let temp;
  return (
    (temp = races[race_infos[aim_race].date + year_index[year]]) &&
    temp.race === aim_race &&
    temp.rank <= req_rank &&
    additional_check_cb(temp)
  );
}

module.exports = check_aim_race;
