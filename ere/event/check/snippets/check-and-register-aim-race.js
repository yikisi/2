const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_check_race_ready } = require('#/system/sys-calc-chara-param');

const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {number} cid
 * @param {Record<string,number>} aim_races
 * @param {number} edu_weeks
 */
function check_and_register_aim_race(
  cid,
  aim_races,
  edu_weeks = era.get(`cflag:${cid}:育成回合计时`),
) {
  if (edu_weeks >= 3 * 48) {
    return;
  }
  const temp_key = `${edu_weeks}_`;
  let registered_race;
  if (RaceHistory.get(cid).check_begin()) {
    for (const e of Object.entries(aim_races)) {
      if (e[0].startsWith(temp_key)) {
        const race = Number(e[0].substring(temp_key.length)),
          registered_race = sys_reg_race(cid);
        if (
          sys_check_race_ready(cid, true) &&
          e[1] > 0 &&
          race_infos[race].track < track_enum.longchamp &&
          (era.get(`cflag:${cid}:位置`) === 0 ||
            era.get(`cflag:${cid}:位置`) === location_enum.beach)
        ) {
          registered_race.curr = registered_race.last = {
            race,
            week: era.get('flag:当前回合数'),
          };
        }
        break;
      }
    }
  } else if (
    era.get('flag:当前月') === 6 &&
    era.get('flag:当前周') === 4 &&
    (registered_race = sys_reg_race(cid)).curr.race === -1
  ) {
    registered_race.curr = registered_race.last = {
      race: race_enum.begin_race,
      week: era.get('flag:当前回合数'),
    };
  }
}

module.exports = check_and_register_aim_race;
