const { get } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const RaceInfo = require('#/data/race/model/race-info');
const { mess_enum, weather_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const adaptability2race = [
  race_enum.aoi_sta,
  race_enum.shin_kin,
  race_enum.toky_sta,
  race_enum.kyot_sta,
  race_enum.negi_sta,
  race_enum.unic_sta,
  race_enum.miya_sta,
  race_enum.heia_sta,
];

/**
 * @param {number} race
 * @param {PseudoUma} chara
 * @param {RaceInfo} [_info]
 * @returns {RaceInfo}
 */
function fill_race_weather_and_mess(race, chara, _info) {
  let info;
  if (_info) {
    info = _info;
  } else {
    info = race_infos[race];
    if (race === race_enum.begin_race) {
      const max_ground = Math.max(...chara.adapt_ground_list),
        max_span = Math.max(...chara.adapt_distance_list),
        tmp = [];
      chara.adapt_ground_list.forEach(
        (eg, ig) =>
          eg === max_ground &&
          chara.adapt_distance_list.forEach((es, is) => {
            es === max_span && tmp.push(adaptability2race[(ig << 2) + is]);
          }),
      );
      const race_id = get_random_entry(tmp);
      const aim_info = race_infos[race_id];
      const name = info.name;
      info = new RaceInfo(
        info.id,
        info.race_class,
        aim_info.track,
        aim_info.ground,
        aim_info.span,
        adaptability2race.indexOf(race_id) % 4,
        aim_info.rotation,
        info.gates,
        [],
        info.limit,
        0,
        0,
        info.prize,
        aim_info.param_id,
      );
      info.name = name;
      info.attr_bonus = aim_info.attr_bonus;
      info.lanes = aim_info.lanes;
      info.slopes = aim_info.slopes;
      info.phases = aim_info.phases;
    }
  }
  const dice = get_random_value(0, 99);
  if (dice < 45) {
    info.mess = mess_enum.well;
  } else if (dice < 75) {
    info.mess = mess_enum.semi;
  } else if (dice < 90) {
    info.mess = mess_enum.heavy;
  } else {
    info.mess = mess_enum.bad;
  }
  switch (info.mess) {
    case mess_enum.well:
      if (Math.random() < 0.8) {
        info.weather = weather_enum.sunny;
      } else {
        info.weather = weather_enum.cloudy;
      }
      break;
    case mess_enum.semi:
      if (Math.random() < 0.4) {
        info.weather = weather_enum.sunny;
      } else {
        info.weather = weather_enum.cloudy;
      }
      break;
    case mess_enum.heavy:
    case mess_enum.bad:
      info.weather =
        get('flag:当前月') % 12 < 3 && info.track !== RaceInfo.track_enum.shatin
          ? weather_enum.snow
          : weather_enum.rain;
  }
  return info;
}

module.exports = fill_race_weather_and_mess;
