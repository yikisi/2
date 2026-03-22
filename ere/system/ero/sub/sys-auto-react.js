const era = require('#/era-electron');

const set_previous_action = require('#/system/ero/ero-act-handler/set-previous-action');
const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { run_custom_ero } = require('#/event/ero/ero-factory');

const { get_random_entry } = require('#/utils/list-utils');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {boolean} shown */
async function sys_auto_react(shown) {
  const current = new Date().getTime();
  const lover = era.get('tflag:当前对手');
  let action;
  if (
    !sys_check_awake(lover) ||
    era.get(`tcvar:${lover}:脱力`) ||
    era.get(`tcvar:${lover}:失神`)
  ) {
    action = ero_hooks.relax;
  } else {
    const filtered_actions = sys_filter_ero_act(lover, 0, [
      false,
      false,
      false,
      false,
      true,
      false,
      false,
    ]);
    let resist_ratio = 0;
    if (era.get(`status:${lover}:超马跳Z`) || era.get('tcvar:0:失神')) {
      resist_ratio = 1;
    } else if (era.get('flag:强奸抵抗') > 0) {
      resist_ratio =
        0.25 * Math.max(era.get('flag:惩戒力度') - 1, 0) +
        0.2 * !era.get('tflag:强奸') -
        0.05 * era.get(`mark:${lover}:同心`) -
        0.1 * era.get(`mark:${lover}:苦痛`) +
        0.1 * era.get(`mark:${lover}:羞耻`) +
        0.2 * era.get(`mark:${lover}:反抗`) +
        0.15 * era.get(`talent:${lover}:反抗意愿`) +
        0.1 * era.get(`talent:${lover}:抖S`) -
        0.05 *
          (era.get(`talent:${lover}:喜欢责骂`) +
            era.get(`talent:${lover}:喜欢痛苦`)) +
        Math.pow(2, era.get(`base:${lover}:性欲`) / 1000 - 10) +
        (era.get(`base:${lover}:压力`) * 3) / 40000;
    }
    const dice =
      resist_ratio >= 1 ? 100 : resist_ratio <= 0 ? 0 : Math.random();
    era.logger.debug(
      `角色 ${lover} 反抗：${(resist_ratio * 100).toFixed(2)}%；掷骰：${(dice * 100).toFixed(2)}`,
    );
    if (dice < resist_ratio) {
      action = ero_hooks.resist;
    } else if (
      (!era.get('tflag:强奸') && get_sex_acceptable(lover) < 0) ||
      era.get(`mark:${lover}:反抗`) >= 2
    ) {
      if (filtered_actions.indexOf(ero_hooks.insult) !== -1) {
        action = ero_hooks.insult;
      } else {
        action = ero_hooks.relax;
      }
    } else {
      action = get_random_entry(filtered_actions);
    }
  }
  era.logger.debug(
    `角色 ${lover} 思考反应结束！${(new Date().getTime() - current).toLocaleString()}ms`,
  );
  await run_custom_ero(lover, action, {
    attacker: lover,
    defender: 0,
    shown,
  });
  set_previous_action('对手行动', action);
  shown && era.println();
}

module.exports = sys_auto_react;
