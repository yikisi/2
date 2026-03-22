const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const set_previous_action = require('#/system/ero/ero-act-handler/set-previous-action');
const use_item_by_character = require('#/system/ero/ero-act-handler/use-item-by-chara');
const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const { get_tequip_info } = require('#/system/ero/sys-calc-ero-item');
const {
  check_satisfied,
  check_want_to_escape,
  get_penis_size,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const { get_characters_in_train } = require('#/system/ero/sys-prepare-ero');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_ero, run_custom_ero } = require('#/event/ero/ero-factory');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { medicine_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const {
  ero_hook_tags,
  ero_hooks,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} master
 * @param {number[]} act_list
 * @param {number} last_action
 * @param {function(number):boolean} filters
 * @returns {number}
 */
function get_random_act(master, act_list, last_action, ...filters) {
  const change_action =
    last_action === ero_hooks.relax ? 1 : era.get(`tcvar:${master}:变招`);
  let ret;
  filters.push(undefined);
  let filtered_list;
  for (const f of filters) {
    filtered_list = f ? act_list.filter(f) : act_list;
    if (
      filtered_list.indexOf(last_action) !== -1 &&
      change_action < 1 &&
      Math.random() > change_action
    ) {
      ret = last_action;
      break;
    }
    ret = get_random_entry(filtered_list);
    if (ret !== undefined) {
      break;
    }
  }
  era.logger.debug(
    '角色 ' +
      master +
      ' 思考：\n可用指令：' +
      act_list.map((e) => i18n().train_action[ero_hooks.keys[e]]).join(',') +
      '\n筛选结果：' +
      filtered_list
        .map((e) => i18n().train_action[ero_hooks.keys[e]])
        .join(',') +
      '\n前回行动：' +
      (i18n().train_action[ero_hooks.keys[last_action]] ?? '无') +
      '\n变招概率：' +
      (change_action * 100).toFixed(2) +
      '%\n最终选择：' +
      i18n().train_action[ero_hooks.keys[ret]],
  );
  return ret;
}

const want_list_entry_getter = {};
want_list_entry_getter[part_enum.mouth] = [
  ero_hook_tags.mouth,
  ero_hook_tags.tongue,
];
want_list_entry_getter[part_enum.breast] = [
  ero_hook_tags.breast,
  ero_hook_tags.nipple,
  ero_hook_tags.touched_nipple,
];
want_list_entry_getter[part_enum.body] = [ero_hook_tags.body];
want_list_entry_getter[part_enum.penis] = [ero_hook_tags.insert];
want_list_entry_getter[part_enum.clitoris] = [ero_hook_tags.clitoris];
want_list_entry_getter[part_enum.virgin] = [ero_hook_tags.virgin];
want_list_entry_getter[part_enum.anal] = [ero_hook_tags.anal];
want_list_entry_getter[part_enum.sadism] = [
  ero_hook_tags.hand,
  ero_hook_tags.foot,
  ero_hook_tags.sadism,
];
want_list_entry_getter[part_enum.masochism] = [
  ero_hook_tags.m_abused,
  ero_hook_tags.m_hit,
];

/** @param {boolean} shown */
async function sys_auto_rape(shown) {
  const current = new Date().getTime();
  const master = era.get('tflag:主导权');
  /** @type {number[]} */
  const chara_list_in_train = get_characters_in_train().filter(
    (e) =>
      e > 0 &&
      e !== master &&
      sys_check_awake(e) &&
      !era.get(`tcvar:${e}:脱力`) &&
      !era.get(`tcvar:${e}:失神`),
  );
  if (check_satisfied(master) > 0) {
    await run_custom_ero(master, ero_hooks.switch, {
      attacker: master,
      defender: 0,
      shown,
    });
    if (shown) {
      era.println();
    }
    return;
  }
  let temp;
  if (
    era.get(`mark:${master}:同心`) <= 2 &&
    era.get(`mark:${master}:欢愉`) <= 2 &&
    era.get(`mark:${master}:淫纹`) <= 2 &&
    (era.get(`mark:${master}:反抗`) >= 2 ||
      era.get(`talent:${master}:工口意愿`) === -1 ||
      era.get(`talent:${master}:反感获取`) === 1 ||
      era.get(`talent:${master}:反抗意愿`) === 1 ||
      era.get(`talent:${master}:贞洁看法`) === 1)
  ) {
    const tequip_list = get_tequip_info(master).filter(
      ({ user, item }) => user === master && item !== -1,
    );
    if (tequip_list.length) {
      await run_custom_ero(
        master,
        ero_hooks.take_off_item,
        get_random_entry(tequip_list),
      );
      shown && era.println();
      return;
    }
  }
  if (check_want_to_escape(master)) {
    await run_custom_ero(master, ero_hooks.relax, {
      attacker: master,
      defender: 0,
      shown,
    });
    return;
  }
  let cur_supporter = era.get('tflag:当前助手');
  if (!chara_list_in_train.length) {
    cur_supporter = era.set('tflag:当前助手', 0);
  } else if (chara_list_in_train.indexOf(cur_supporter) === -1) {
    cur_supporter = era.set(
      'tflag:当前助手',
      get_random_entry(chara_list_in_train),
    );
  }
  if (
    era.get(`status:0:沉睡`) > 0 &&
    !era.get('status:0:马跳S') &&
    era.get(`status:${master}:爱意克制`) > 0
  ) {
    await run_custom_ero(master, ero_hooks.use_medicine, {
      item: medicine_enum.uma_s,
      user: 0,
      shown,
    });
    return;
  }
  if ((temp = era.get('flag:惩戒力度')) >= 2) {
    let ret_flag = false;
    if (!get_penis_size(master)) {
      await run_custom_ero(master, ero_hooks.use_medicine, {
        item:
          temp === 3
            ? medicine_enum.fron_p
            : medicine_enum.fron_k + get_random_value(0, 1),
        user: master,
        shown,
      });
      ret_flag = true;
    }
    if (cur_supporter > 0 && !get_penis_size(cur_supporter)) {
      ret_flag && shown && era.println();
      await run_custom_ero(cur_supporter, ero_hooks.use_medicine, {
        item:
          temp === 3
            ? medicine_enum.fron_p
            : medicine_enum.fron_k + get_random_value(0, 1),
        user: cur_supporter,
        shown,
      });
      ret_flag = true;
    }
    if (ret_flag) {
      shown && era.println();
      return;
    }
  }
  const want_list = {};
  const poison_list = { lover: {}, master: {} };
  const sensitive_list = { lover: {}, master: {} };
  const white_list = {};
  const black_list = {};
  const week_list = {};
  get_custom_ero(master).set_preference(white_list, week_list);
  (era.get(`tcvar:${master}:接近高潮`) || []).forEach((p) =>
    want_list_entry_getter[p].forEach((k) => (want_list[k] = true)),
  );
  if (era.get(`talent:${master}:饮精成瘾`)) {
    poison_list.master[ero_hook_tags.mouth] = true;
    poison_list.master[ero_hook_tags.tongue] = true;
    poison_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:榨精成瘾`)) {
    poison_list.master[ero_hook_tags.virgin] = true;
    poison_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:精液灌肠`)) {
    poison_list.master[ero_hook_tags.anal] = true;
    poison_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:浴精成瘾`)) {
    poison_list.master[ero_hook_tags.breast] = true;
    poison_list.master[ero_hook_tags.nipple] = true;
    poison_list.master[ero_hook_tags.touched_nipple] = true;
    poison_list.master[ero_hook_tags.body] = true;
    poison_list.master[ero_hook_tags.hand] = true;
    poison_list.master[ero_hook_tags.foot] = true;
    poison_list.master[ero_hook_tags.clitoris] = true;
    poison_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:喉咙敏感`)) {
    sensitive_list.master[ero_hook_tags.mouth] = true;
    sensitive_list.master[ero_hook_tags.tongue] = true;
    sensitive_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:子宫敏感`)) {
    sensitive_list.master[ero_hook_tags.virgin] = true;
    sensitive_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:肠道敏感`)) {
    sensitive_list.master[ero_hook_tags.anal] = true;
    sensitive_list.lover[ero_hook_tags.insert] = true;
  }
  if (era.get(`talent:${master}:气味敏感`)) {
    sensitive_list.master[ero_hook_tags.breast] = true;
    sensitive_list.master[ero_hook_tags.nipple] = true;
    sensitive_list.master[ero_hook_tags.touched_nipple] = true;
    sensitive_list.master[ero_hook_tags.body] = true;
    sensitive_list.master[ero_hook_tags.hand] = true;
    sensitive_list.master[ero_hook_tags.foot] = true;
    sensitive_list.master[ero_hook_tags.clitoris] = true;
    sensitive_list.lover[ero_hook_tags.insert] = true;
  }
  if (
    (temp = era.get(`talent:${master}:淫口`)) === 2 ||
    era.get(`talent:${master}:荡唇`)
  ) {
    white_list[ero_hook_tags.mouth] = true;
    white_list[ero_hook_tags.tongue] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.mouth] = true;
    black_list[ero_hook_tags.tongue] = true;
  }
  if (
    (temp = era.get(`talent:${master}:淫乳`)) === 2 ||
    era.get(`talent:${master}:妖乳`)
  ) {
    white_list[ero_hook_tags.breast] = true;
    white_list[ero_hook_tags.nipple] = true;
    white_list[ero_hook_tags.touched_nipple] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.breast] = true;
    black_list[ero_hook_tags.nipple] = true;
    black_list[ero_hook_tags.touched_nipple] = true;
  } else if (era.get(`talent:${master}:乳房尺寸`) > 0) {
    white_list[ero_hook_tags.breast] = true;
    white_list[ero_hook_tags.nipple] = true;
    white_list[ero_hook_tags.touched_nipple] = true;
  }
  if ((temp = era.get(`talent:${master}:淫身`)) === 2) {
    white_list[ero_hook_tags.body] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.body] = true;
  }
  if (era.get(`talent:${master}:神之手`)) {
    white_list[ero_hook_tags.hand] = true;
  }
  if (era.get(`talent:${master}:神之足`)) {
    white_list[ero_hook_tags.foot] = true;
  }
  if ((temp = era.get(`talent:${master}:淫核`)) === 2) {
    white_list[ero_hook_tags.clitoris] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.clitoris] = true;
  }
  if (
    (temp = era.get(`talent:${master}:早泄`)) === 2 ||
    era.get(`talent:${master}:凶器`)
  ) {
    white_list[ero_hook_tags.penis] = true;
    white_list[ero_hook_tags.insert] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.penis] = true;
    black_list[ero_hook_tags.insert] = true;
  }
  if (
    (temp = era.get(`talent:${master}:淫壶`)) === 2 ||
    era.get(`talent:${master}:名穴`)
  ) {
    white_list[ero_hook_tags.clitoris] = true;
    white_list[ero_hook_tags.virgin] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.clitoris] = true;
    black_list[ero_hook_tags.virgin] = true;
  }
  if (
    (temp = era.get(`talent:${master}:淫臀`)) === 2 ||
    era.get(`talent:${master}:魔尻`)
  ) {
    white_list[ero_hook_tags.anal] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.anal] = true;
  }
  if (
    Object.keys(week_list).length === 0 &&
    (era.get(`talent:${master}:抖S`) ||
      era.get(`talent:${master}:小恶魔`) ||
      era.get(`talent:${master}:反抗意愿`) > 0 ||
      era.get('tflag:强奸') === master)
  ) {
    if (era.get('talent:0:淫口') > 0) {
      week_list[ero_hook_tags.mouth] = week_list[ero_hook_tags.tongue] = true;
    }
    if (era.get('talent:0:淫乳') > 0 || era.get('talent:0:泌乳')) {
      week_list[ero_hook_tags.breast] =
        week_list[ero_hook_tags.nipple] =
        week_list[ero_hook_tags.touched_nipple] =
          true;
    }
    if (era.get('talent:0:淫身') > 0) {
      week_list[ero_hook_tags.body] =
        week_list[ero_hook_tags.hand] =
        week_list[ero_hook_tags.foot] =
          true;
    }
    if (era.get('talent:0:淫核') > 0) {
      week_list[ero_hook_tags.clitoris] = true;
    }
    if (era.get('talent:0:淫壶') > 0 || era.get('talent:0:子宫敏感')) {
      week_list[ero_hook_tags.clitoris] = true;
      week_list[ero_hook_tags.virgin] = true;
    }
    if (era.get('talent:0:淫臀') > 0 || era.get('talent:0:肠道敏感')) {
      week_list[ero_hook_tags.anal] = true;
    }
    if (era.get('talent:0:早泄') > 0) {
      week_list[ero_hook_tags.insert] = week_list[ero_hook_tags.penis] = true;
    }
  }
  /** @type {(function(number):boolean)[]} */
  const filters = [];
  if (!era.get('tflag:强奸') && get_sex_acceptable(master) < 0) {
    filters.push((e) => e === ero_hooks.insult || e === ero_hooks.hit_face);
  }
  if (cur_supporter > 0) {
    filters.push(
      (e) =>
        e >= ero_hooks.double_cowgirl && e <= ero_hooks.spit_roast_anal_sex,
      (e) =>
        e >= ero_hooks.ask_supporter_prepare_virgin && e <= ero_hooks.fuck_69,
    );
  }
  const second_filter = get_custom_ero(master).filter_in_rape();
  const temp_filters = [];
  if (Object.keys(poison_list.master).length > 0) {
    temp_filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        tags.attacker_tags.some((t) => poison_list.master[t]) &&
        tags.defender_tags.some((t) => poison_list.lover[t])
      );
    });
  }
  if (Object.keys(sensitive_list.master).length) {
    temp_filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        tags.attacker_tags.every((t) => !sensitive_list.master[t]) ||
        tags.defender_tags.every((t) => !sensitive_list.lover[t])
      );
    });
  }
  if (Object.keys(white_list).length > 0 || Object.keys(week_list).length > 0) {
    temp_filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        tags.attacker_tags.some((t) => white_list[t]) ||
        tags.defender_tags.some((t) => week_list[t])
      );
    });
  }
  if (temp_filters.length > 0) {
    filters.push(
      ...temp_filters.map((f) => (a) => second_filter(a) && f(a)),
      second_filter,
      ...temp_filters,
    );
  } else {
    filters.push(second_filter);
  }
  if (Object.keys(black_list).length) {
    filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return tags.attacker_tags.some((t) => black_list[t]);
    });
  }
  const random_list = sys_filter_ero_act(master, 0, [
    false,
    false,
    false,
    false,
    true,
    false,
    false,
  ]).filter(
    (e) =>
      era.get(`love:${master}`) >= 75 ||
      (e !== ero_hooks.kiss && e !== ero_hooks.french_kiss),
  );
  const last_action = era.get('tflag:前回行动');
  let action = get_random_act(master, random_list, last_action, ...filters);
  (last_action === action ? era.add : era.set)(
    `tcvar:${master}:变招`,
    0.16 - 0.08 * era.get(`talent:${master}:工口好奇`),
  );
  era.logger.debug(
    `角色 ${master} 思考主动行为结束！${(new Date().getTime() - current).toLocaleString()}ms`,
  );
  if (
    ero_tagged_hooks[action] !== undefined &&
    !sys_check_yandere(master, (y) => y > 0) &&
    !era.get(`status:${master}:超马跳Z`) &&
    (master < 340 || master > 342)
  ) {
    const ero = era.get(`talent:${master}:工口意愿`),
      love = era.get(`love:${master}`);
    if (
      ero_tagged_hooks[action].attacker_tags.indexOf(ero_hook_tags.virgin) !==
        -1 &&
      ero_tagged_hooks[action].defender_tags.indexOf(ero_hook_tags.insert) !==
        -1
    ) {
      // T插马娘，<经期,非经期>x<炮友,恋人,未婚>x<性保守,普通,好色>
      let relation = 1;
      if (love < 75) {
        relation = 0;
      } else if (love >= 90) {
        relation = 2;
      }
      relation =
        ((ero + 1) << 3) + // 0b00000 0b01000 0b10000
        (relation << 1) + // 0b00000 0b00010 0b00100
        (era.get(`status:${master}:经期`) ||
          era.get(`cflag:${master}:妊娠阶段`) !== 1 << pregnant_stage_enum.no); // 0b00000 0b00001
      /** @type {0|1|2} 0 - 不避孕，1 - 戴套，2 - 吃药 */
      let anti_p_type = 0;
      switch (relation) {
        case 0b01010: // 非经期x恋人x普通
          anti_p_type = 2;
          break;
        case 0b00000: // 非经期x炮友x性保守
        case 0b00001: // 经期x炮友x性保守
        case 0b00010: // 非经期x恋人x性保守
        case 0b00011: // 经期x恋人x性保守
        case 0b01000: // 非经期x炮友x普通
          anti_p_type = 1;
          break;
        case 0b10000: // 非经期x炮友x好色
          if (era.get(`status:${master}:排卵期`)) {
            anti_p_type = 1;
          }
          break;
        case 0b10010: // 非经期x恋人x好色
          if (era.get(`status:${master}:排卵期`)) {
            anti_p_type = 2;
          }
          break;
        case 0b00100: // 非经期x未婚x性保守
        case 0b00101: // 经期x未婚x性保守
        case 0b01001: // 经期x炮友x普通
        case 0b01011: // 经期x恋人x普通
        case 0b01100: // 非经期x未婚x普通
        case 0b01101: // 经期x未婚x普通
        case 0b10001: // 经期x炮友x好色
        case 0b10011: // 经期x恋人x好色
        case 0b10100: // 非经期x未婚x好色
        case 0b10101: // 经期x未婚x好色
      }
      if (anti_p_type > 0) {
        if (era.get(`talent:${master}:榨精成瘾`) > 0) {
          anti_p_type = 2;
        } else if (era.get(`talent:${master}:子宫敏感`) > 0) {
          anti_p_type = 1;
        }
        if (anti_p_type === 1 && !era.get('tcvar:0:避孕套')) {
          await run_custom_ero(master, ero_hooks.other_condom, {
            shown,
          });
          era.set('tflag:前回行动', ero_hooks.other_condom);
        } else if (
          !era.get(`status:${master}:长效避孕药`) &&
          !era.get(`status:${master}:短效避孕药`)
        ) {
          await run_custom_ero(master, ero_hooks.use_medicine, {
            item: medicine_enum.anti_p_s,
            user: master,
            shown,
          });
          era.set('tflag:前回行动', ero_hooks.use_medicine);
        } else {
          anti_p_type = 0;
        }
      }
      if (anti_p_type > 0) {
        era.set('tflag:前回助手', cur_supporter);
        return;
      }
    } else if (
      ero_tagged_hooks[action].attacker_tags.indexOf(ero_hook_tags.insert) !==
        -1 &&
      ero_tagged_hooks[action].defender_tags.indexOf(ero_hook_tags.virgin) !==
        -1 &&
      !era.get(`tcvar:${master}:避孕套`) &&
      (era.get(`cflag:${master}:性别`) || era.get(`status:${master}:弗隆P`)) &&
      ((love < 90 && ero === -1) ||
        (love >= 75 && love < 90 && !era.get('status:0:经期'))) &&
      !era.get(`tcvar:${master}:避孕套`)
    ) {
      await run_custom_ero(master, ero_hooks.condom, {
        shown,
      });
      era.set('tflag:前回行动', ero_hooks.condom);
      era.set('tflag:前回助手', cur_supporter);
      return;
    }
  }
  if (action === ero_hooks.use_item) {
    const random_item = use_item_by_character();
    await run_custom_ero(master, ero_hooks.use_item, {
      item: get_random_entry(random_item.items),
      part: random_item.part,
      shown,
    });
  } else if (
    (ero_tagged_hooks[action] || default_tags).condition !==
    condition_type.active
  ) {
    await run_custom_ero(master, action, {
      attacker: master,
      defender: 0,
      shown,
    });
  } else {
    await run_custom_ero(master, action, {
      supporter: cur_supporter,
      shown,
    });
  }
  set_previous_action('前回行动', action);
  era.set('tflag:前回助手', cur_supporter);
  if (shown) {
    era.println();
  }
}

module.exports = sys_auto_rape;
