const { attr_change_colors } = require('#/data/color-const');
const { year_index } = require('#/data/other-const');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const req_desc = ['1着', '2着以内', '3着以内', '4着以内', '入着', '出走'];

/**
 * @param {Record<string,{race:number,rank:number}|RaceResult>} races
 * @param {number} aim_race
 * @param {number} [year]
 * @param {number} [req_rank]
 * @returns {{check:number,color:string,content:string}}
 */
function check_aim_and_get_entry(races, aim_race, year, req_rank) {
  if (aim_race === race_enum.begin_race) {
    const begin_check = Object.entries(races).filter(
      (e) => Number(e[0]) < 48 && e[1].race === race_enum.begin_race,
    ).length;
    return {
      check: begin_check,
      color: begin_check ? attr_change_colors.up : attr_change_colors.down,
      content: `${di18n.n_edu[0]} ${i18n().race[0]} ${begin_check ? '出走' : '未出走'}/出走 ${
        begin_check ? '✔' : '✘'
      }`,
    };
  } else {
    let temp;
    const info = race_infos[aim_race];
    const temp_rank =
      (temp = races[info.date + year_index[year]]) && temp.race === aim_race
        ? temp.rank
        : 0;
    temp = temp_rank > 0 && temp.rank <= req_rank;
    return {
      check: Number(temp),
      color: temp ? attr_change_colors.up : attr_change_colors.down,
      content: `${di18n.n_edu[year]} ${info.name} (${
        Object.keys(RaceInfo.class_enum)[info.race_class]
      }) ${temp_rank ? `${temp_rank}着` : '未出走'}/${
        req_desc[Math.min(req_rank - 1, 5)]
      } ${temp ? '✔' : '✘'}`,
    };
  }
}

module.exports = check_aim_and_get_entry;
