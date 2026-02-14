const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const { buff_colors } = require('#/data/color-const');
const { race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

/** @param {number} cid */
function race_indicator(cid) {
  const registered_race = sys_reg_race(cid).curr,
    race_delta = registered_race.week - era.get('flag:当前回合数');
  if (registered_race.week < 0) {
    return [];
  }
  if (race_delta > 0) {
    return i18n().get_ui_race_indicator(
      race_infos[registered_race.race].get_colored_name(),
      {
        content: race_delta,
        color: buff_colors[3],
      },
    );
  }
  return i18n().get_ui_curr_race_indicator(
    race_infos[registered_race.race].get_colored_name(),
  );
}

module.exports = race_indicator;
