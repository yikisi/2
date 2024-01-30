const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const { buff_colors } = require('#/data/color-const');
const { race_infos } = require('#/data/race/race-const');

function race_indicator(chara_id) {
  const registered_race = sys_reg_race(chara_id).curr,
    race_delta = registered_race.week - era.get('flag:当前回合数');
  return registered_race.week > 0
    ? race_delta
      ? [
          ' (距 ',
          race_infos[registered_race.race].get_colored_name(),
          ' 还有 ',
          {
            content: race_delta,
            color: buff_colors[3],
          },
          ' 周)',
        ]
      : [' (本周有 ', race_infos[registered_race.race].get_colored_name(), ')']
    : [];
}

module.exports = race_indicator;
