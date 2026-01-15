const sys_parse_for_race = require('#/system/race/sys-parse-race-uma');
const sys_prepare_race = require('#/system/race/sys-prepare-race');

const fill_race_weather_and_mess = require('#/page/race/fill-race-weather-and-mess');
const page_race_result = require('#/page/race/page-race-result');
const preview_race = require('#/page/race/preview-race');

const RaceInfo = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {PseudoUma} chara
 * @param {(PseudoUma|LegendUmaSelector|LegendUmaFilter)[]} _contestants
 * @param {number} reference_race
 * @param {string} [race_name]
 */
async function simulation_game_in_event(
  chara,
  _contestants,
  reference_race,
  race_name = i18n().race.sim,
) {
  const reference = race_infos[reference_race];
  const info = fill_race_weather_and_mess(
    0,
    chara,
    new RaceInfo(
      0,
      RaceInfo.class_enum.Spe,
      undefined,
      reference.ground,
      reference.span,
      reference.distance,
      reference.rotation,
      2,
      [],
      reference.limit,
      0,
      0,
      0,
      reference.param_id,
    ),
  );
  info.name = race_name;
  info.lanes = reference.lanes;
  info.slopes = reference.slopes;
  info.phases = reference.phases;
  info.attr_bonus = reference.attr_bonus;
  const contestants = sys_parse_for_race([chara], 0, info, _contestants);
  await preview_race(info, [chara], contestants);
  sys_prepare_race(contestants, [chara], info);
  await page_race_result(contestants, info);
}

module.exports = simulation_game_in_event;
