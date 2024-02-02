const era = require('#/era-electron');

const use_item_by_character = require('#/system/ero/ero-act-handler/use-item-by-chara');
const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const {
  check_satisfied,
  get_penis_size,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const { get_characters_in_train } = require('#/system/ero/sys-prepare-ero');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_call_ero_event = require('#/system/script/sys-call-ero-script');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const { medicine_enum, tequip_parts } = require('#/data/ero/item-const');
const { part_enum, part_names } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const {
  ero_hook_tags,
  ero_hooks,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');

/**
 * @param {number} master
 * @param {number[]} act_list
 * @param {number} last_action
 * @param {function(number):boolean} filters
 */
function get_random_act(master, act_list, last_action, ...filters) {
  const change_action = era.get(`tcvar:${master}:变招`);
  let ret;
  filters.push(undefined);
  for (const f of filters) {
    const filtered_list = f ? act_list.filter(f) : act_list;
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
  const current = new Date().getTime(),
    master = era.get('tflag:主导权');
  /** @type {number[]} */
  const chara_list_in_train = get_characters_in_train().filter(
    (e) =>
      e &&
      e !== master &&
      sys_check_awake(e) &&
      !era.get(`tcvar:${e}:脱力`) &&
      !era.get(`tcvar:${e}:失神`),
  );
  if (check_satisfied(master)) {
    await sys_call_ero_event(master, ero_hooks.switch, {
      attacker: master,
      defender: 0,
      shown,
    });
    shown && era.println();
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
    const tequip_list = tequip_parts
      .map((part) => {
        return {
          part,
          user: master,
          item: era.get(`tequip:${master}:${part_names[part] || part}`),
        };
      })
      .filter((e) => e.item !== -1);
    if (tequip_list.length) {
      await sys_call_ero_event(
        master,
        ero_hooks.take_off_item,
        get_random_entry(tequip_list),
      );
      shown && era.println();
      return;
    }
  }
  if (
    era.get(`mark:${master}:苦痛`) >= 2 ||
    era.get(`mark:${master}:羞耻`) >= 2 ||
    era.get(`mark:${master}:反抗`) >= 2
  ) {
    await sys_call_ero_event(master, ero_hooks.relax, {
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
  if ((temp = era.get('flag:惩戒力度')) >= 2) {
    let ret_flag = false;
    if (!get_penis_size(master)) {
      await sys_call_ero_event(master, ero_hooks.use_medicine, {
        item:
          temp === 3
            ? medicine_enum.fron_p
            : medicine_enum.fron_k + get_random_value(0, 1),
        user: master,
        shown,
      });
      ret_flag = true;
    }
    if (cur_supporter && !get_penis_size(cur_supporter)) {
      ret_flag && shown && era.println();
      await sys_call_ero_event(cur_supporter, ero_hooks.use_medicine, {
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
  const want_list = {},
    poison_list = { lover: {}, master: {} },
    sensitive_list = { lover: {}, master: {} },
    white_list = {},
    black_list = {},
    week_list = {};
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
    era.get(`talent:${master}:妖乳`) ||
    era.get(`talent:${master}:乳房尺寸`) > 0
  ) {
    white_list[ero_hook_tags.breast] = true;
    white_list[ero_hook_tags.nipple] = true;
    white_list[ero_hook_tags.touched_nipple] = true;
  } else if (temp === 1) {
    black_list[ero_hook_tags.breast] = true;
    black_list[ero_hook_tags.nipple] = true;
    black_list[ero_hook_tags.touched_nipple] = true;
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
    era.get(`talent:${master}:抖S`) ||
    era.get(`talent:${master}:小恶魔`) ||
    era.get(`talent:${master}:反抗意愿`) > 0
  ) {
    if (era.get('talent:0:淫口') > 0) {
      week_list[ero_hook_tags.mouth] = week_list[ero_hook_tags.tongue] = true;
    }
    if (era.get('talent:0:淫乳') > 0) {
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
  let second_filter;
  if (era.get('flag:惩戒力度') >= 2) {
    second_filter = chara_list_in_train.length
      ? (e) => e >= ero_hooks.double_fuck && e <= ero_hooks.spit_roast_anal_sex
      : (e) => e >= ero_hooks.missionary && e <= ero_hooks.stimulate_womb;
  } else {
    second_filter = await sys_call_ero_event(master, ero_hooks.filter_in_rape);
  }
  if (Object.keys(poison_list.master).length) {
    filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        tags.attacker_tags.filter((t) => poison_list.master[t]).length > 0 &&
        tags.defender_tags.filter((t) => poison_list.lover[t]).length > 0
      );
    });
  }
  if (Object.keys(sensitive_list.master).length) {
    temp = (e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        !tags.attacker_tags.filter((t) => sensitive_list.master[t]).length >
          0 ||
        !tags.defender_tags.filter((t) => sensitive_list.lover[t]).length > 0
      );
    };
    filters.push((e) => second_filter(e) && temp(e), temp);
  }
  if (Object.keys(white_list).length + Object.keys(week_list).length) {
    temp = (e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return (
        tags.attacker_tags.filter((t) => white_list[t]).length > 0 ||
        tags.defender_tags.filter((t) => week_list[t]).length > 0
      );
    };
    filters.push((e) => second_filter(e) && temp(e), second_filter, temp);
  } else {
    filters.push(second_filter);
  }
  if (Object.keys(black_list).length) {
    filters.push((e) => {
      const tags = ero_tagged_hooks[e] || default_tags;
      return !tags.attacker_tags.filter((t) => black_list[t]).length > 0;
    });
  }
  const random_list = sys_filter_ero_act(master, 0, [
    false,
    false,
    false,
    false,
    true,
  ]).filter(
    (e) =>
      era.get(`love:${master}`) >= 75 ||
      (e !== ero_hooks.kiss && e !== ero_hooks.french_kiss),
  );
  const last_action = era.get('tflag:前回行动'),
    action = get_random_act(master, random_list, last_action, ...filters),
    change_ratio = 0.16 - 0.08 * era.get(`talent:${master}:工口好奇`);
  (last_action === action ? era.add : era.set)(
    `tcvar:${master}:变招`,
    change_ratio,
  );
  era.logger.debug(
    `raping done! ${(new Date().getTime() - current).toLocaleString()}ms`,
  );
  if (ero_tagged_hooks[action] && !era.get(`talent:${master}:病娇`)) {
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
        ((ero + 1) << 3) +
        (relation << 1) +
        (era.get(`status:${master}:经期`) ||
          era.get(`cflag:${master}:妊娠阶段`) !== 1 << pregnant_stage_enum.no);
      switch (relation) {
        case 10: // 非经期x恋人x普通
          if (
            !era.get(`status:${master}:长效避孕药`) &&
            !era.get(`status:${master}:短效避孕药`)
          ) {
            await sys_call_ero_event(master, ero_hooks.use_medicine, {
              item: medicine_enum.anti_p_s,
              user: master,
              shown,
            });
            era.set('tflag:前回行动', ero_hooks.use_medicine);
            era.set('tflag:前回助手', cur_supporter);
            return;
          }
          break;
        case 0: // 非经期x炮友x性保守
        case 1: // 经期x炮友x性保守
        case 2: // 非经期x恋人x性保守
        case 3: // 经期x恋人x性保守
        case 8: // 非经期x炮友x普通
          if (!era.get('tcvar:0:避孕套')) {
            await sys_call_ero_event(master, ero_hooks.other_condom, {
              shown,
            });
            era.set('tflag:前回行动', ero_hooks.other_condom);
            era.set('tflag:前回助手', cur_supporter);
            return;
          }
          break;
        case 16: // 非经期x炮友x好色
          if (
            era.get(`status:${master}:排卵期`) &&
            !era.get('tcvar:0:避孕套')
          ) {
            await sys_call_ero_event(master, ero_hooks.other_condom, {
              shown,
            });
            era.set('tflag:前回行动', ero_hooks.other_condom);
            era.set('tflag:前回助手', cur_supporter);
            return;
          }
          break;
        case 18: // 非经期x恋人x好色
          if (
            era.get(`status:${master}:排卵期`) &&
            !era.get(`status:${master}:长效避孕药`) &&
            !era.get(`status:${master}:短效避孕药`)
          ) {
            await sys_call_ero_event(master, ero_hooks.use_medicine, {
              item: medicine_enum.anti_p_s,
              user: master,
              shown,
            });
            era.set('tflag:前回行动', ero_hooks.use_medicine);
            era.set('tflag:前回助手', cur_supporter);
            return;
          }
          break;
        case 4: // 非经期x未婚x性保守
        case 5: // 经期x未婚x性保守
        case 9: // 经期x炮友x普通
        case 11: // 经期x恋人x普通
        case 12: // 非经期x未婚x普通
        case 13: // 经期x未婚x普通
        case 17: // 经期x炮友x好色
        case 19: // 经期x恋人x好色
        case 20: // 非经期x未婚x好色
        case 21: // 经期x未婚x好色
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
      await sys_call_ero_event(master, ero_hooks.condom, {
        shown,
      });
      era.set('tflag:前回行动', ero_hooks.condom);
      era.set('tflag:前回助手', cur_supporter);
      return;
    }
  }
  if (action === ero_hooks.use_item) {
    const random_item = use_item_by_character();
    await sys_call_ero_event(master, ero_hooks.use_item, {
      item: get_random_entry(random_item.items),
      part: random_item.part,
      shown,
    });
  } else if (
    (ero_tagged_hooks[action] || default_tags).condition !==
    condition_type.active
  ) {
    await sys_call_ero_event(master, action, {
      attacker: master,
      defender: 0,
      shown,
    });
  } else {
    await sys_call_ero_event(master, action, {
      supporter: cur_supporter,
      shown,
    });
  }
  shown && era.println();
  era.set('tflag:前回行动', action);
  era.set('tflag:前回助手', cur_supporter);
}

module.exports = sys_auto_rape;
