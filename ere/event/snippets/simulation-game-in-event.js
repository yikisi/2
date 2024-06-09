const sys_parse_for_race = require('#/system/race/sys-parse-race-uma');
const sys_prepare_race = require('#/system/race/sys-prepare-race');
const sys_sim_race = require('#/system/race/sys-simulate-race');

const fill_race_weather_and_mess = require('#/page/race/fill-race-weather-and-mess');
const page_race_result = require('#/page/race/page-race-result');
const preview_race = require('#/page/race/preview-race');

const RaceInfo = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

/**
 * @param {PseudoUma} chara
 * @param {PseudoUma[]} _contestants
 * @param {number} reference_race
 */
async function simulation_game_in_event(chara, _contestants, reference_race) {
  const reference = race_infos[reference_race],
    info = fill_race_weather_and_mess(
      0,
      chara,
      new RaceInfo(
        'Sim',
        '模拟赛',
        RaceInfo.class_enum.Spe,
        0,
        reference.ground,
        reference.span,
        reference.distance,
        reference.rotation,
        2,
        0,
        reference.limit,
        0,
        0,
        reference.param_id,
      ),
    ),
    contestants = sys_parse_for_race([chara], 0, info, _contestants);
  info.lanes = reference.lanes;
  info.slopes = reference.slopes;
  info.phases = reference.phases;
  info.attr_bonus = reference.attr_bonus;
  await preview_race(info, [chara], contestants);
  sys_prepare_race(contestants, [chara], info);
  await page_race_result(contestants, sys_sim_race(contestants, info), info);
}

module.exports = simulation_game_in_event;
