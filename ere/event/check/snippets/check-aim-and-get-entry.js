const { attr_change_colors } = require('#/data/color-const');
const { year_index } = require('#/data/other-const');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

/**
 * @param {Record<string,{race:number,rank:number}|RaceResult>} races
 * @param {number} aim_race
 * @param {number} [year]
 * @param {number} [req_rank]
 * @returns {EduAim}
 */
function check_aim_and_get_entry(races, aim_race, year, req_rank) {
  if (aim_race === race_enum.begin_race) {
    const begin_check = Object.entries(races).filter(
      (e) => Number(e[0]) < 48 && e[1].race === race_enum.begin_race,
    ).length;
    return {
      check: begin_check,
      color: begin_check ? attr_change_colors.up : attr_change_colors.down,
      current: begin_check
        ? i18n().detail.edu_aim_require_20
        : i18n().race.no_result,
      desc: i18n()
        .detail.edu_aim_desc_template.replace('%EDUTIME%', di18n.n_edu[0])
        .replace('%RACE%', i18n().race[0]),
      mark: begin_check
        ? i18n().detail.edu_aim_mark_done
        : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_20,
    };
  }
  let temp;
  const info = race_infos[aim_race];
  const temp_rank =
    (temp = races[info.date + year_index[year]]) && temp.race === aim_race
      ? temp.rank
      : 0;
  temp = temp_rank > 0 && temp.rank <= req_rank;
  return {
    champion: req_rank === 1,
    check: Number(temp),
    color: temp ? attr_change_colors.up : attr_change_colors.down,
    current:
      temp_rank > 0
        ? i18n().race.result_template.replace('%RANK%', temp_rank.toString())
        : i18n().race.no_result,
    desc: i18n()
      .detail.edu_aim_desc_template.replace('%EDUTIME%', di18n.n_edu[year])
      .replace('%RACE%', info.get_colored_name_with_class().content),
    g1: info.race_class === RaceInfo.class_enum.G1,
    mark: temp ? '✔' : '✘',
    require: __(
      `detail.edu_aim_require_${req_rank}`,
      i18n().detail.edu_aim_require_20,
    ),
  };
}

module.exports = check_aim_and_get_entry;
