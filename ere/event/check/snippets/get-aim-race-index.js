const { year_index } = require('#/event/check/snippets/edu-year-const');

const { race_infos } = require('#/data/race/race-const');

/**
 * @param {number} aim_race
 * @param {number} year
 */
function get_aim_race_index(aim_race, year) {
  return `${race_infos[aim_race].date + year_index[year]}_${aim_race}`;
}

module.exports = get_aim_race_index;
