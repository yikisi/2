const era = require('#/era-electron');

const update_marks = require('#/system/ero/calc-sex/update-marks');
const change_master = require('#/system/ero/ero-act-handler/change-master');
const print_touch_info = require('#/system/ero/ero-act-handler/print-touch-info');
const print_stain_info = require('#/system/ero/ero-act-handler/print-stain-info');
const take_off_ero_item = require('#/system/ero/ero-act-handler/take-off-ero-item');
const use_ero_item = require('#/system/ero/ero-act-handler/use-ero-item');
const use_ero_medicine = require('#/system/ero/ero-act-handler/use-ero-medicine');
const use_item_by_character = require('#/system/ero/ero-act-handler/use-item-by-chara');
const use_lubricating_fluid = require('#/system/ero/ero-act-handler/use-lubricating-fluid');
const sys_auto_rape = require('#/system/ero/sub/sys-auto-rape');
const sys_auto_react = require('#/system/ero/sub/sys-auto-react');
const {
  get_penis_size,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const { update_juels, add_juel } = require('#/system/ero/sys-calc-juel');
const check_orgasm = require('#/system/ero/sys-calc-orgasm');
const { add_palam } = require('#/system/ero/sys-calc-palam');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const sys_check_ero_enabled = require('#/system/ero/sys-check-ero-action');
const {
  update_juel_buff,
  get_characters_in_train,
} = require('#/system/ero/sys-prepare-ero');
const sys_call_ero_event = require('#/system/script/sys-call-ero-script');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const print_exp_page = require('#/page/page-exp');

const { lust_palam_border } = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  part_touch,
  pleasure_list,
  part_gifts,
} = require('#/data/ero/part-const');
const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const { ero_hooks, ero_tagged_hooks } = require('#/data/event/ero-hooks');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { tequip_parts } = require('#/data/ero/item-const');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { stain_enum } = require('#/data/ero/stain-const');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');

let shown = true;

async function next_turn() {
  era.add('tflag:回合', 1);
  const chara_list_in_train = get_characters_in_train();
  for (const chara_id of chara_list_in_train) {
    era.get(`tcvar:${chara_id}:刚刚受虐`) &&
      era.set(
        `tcvar:${chara_id}:刚刚受虐`,
        Math.max(0, era.get(`tcvar:${chara_id}:刚刚受虐`) - 100),
      );
    era.get(`tcvar:${chara_id}:刚刚施虐`) &&
      era.add(`tcvar:${chara_id}:刚刚施虐`, -1);
    era.set(`tcvar:${chara_id}:刚刚高潮`, false);
    if (era.get(`ex:${chara_id}:阴道撕裂`)) {
      set_stain(chara_id, part_enum.virgin, stain_enum.wound);
      add_juel(chara_id, '痛苦', base_emotion_juel);
    }
    if (era.get(`ex:${chara_id}:肛门撕裂`)) {
      set_stain(chara_id, part_enum.anal, stain_enum.wound);
      add_juel(chara_id, '痛苦', base_emotion_juel);
    }
    if (era.get(`cflag:${chara_id}:阴道尺寸`) && !get_penis_size(chara_id)) {
      era.set(
        `stain:${chara_id}:外阴`,
        era.get(`stain:${chara_id}:阴道`) | era.get(`stain:${chara_id}:外阴`),
      );
    }
    for (const e of tequip_parts.slice(0, 6)) {
      if (era.get(`tequip:${chara_id}:${part_touch[e]}`) !== -1) {
        const tmp_part = era.get(`tcvar:${chara_id}:${part_touch[e]}接触部位`);
        await sys_call_ero_event(chara_id, ero_hooks.use_item, {
          item: tmp_part.item,
          shown,
          owner: tmp_part.owner,
          part: e,
          stay: chara_id,
        });
      }
    }
    let body_part;
    // 名器停留效果
    Object.entries(part_gifts).forEach((e) => {
      if (
        era.get(`talent:${chara_id}:${e[1]}`) &&
        (body_part = era.get(
          `tcvar:${chara_id}:${part_touch[e[0]]}接触部位`,
        )) !== -1 &&
        body_part.part !== part_enum.item
      ) {
        add_palam(body_part.owner, body_part.part, get_random_value(15, 25));
      }
    });
  }
  await check_orgasm(shown, ...chara_list_in_train);
  shown && era.println();
  update_juels(shown, ...chara_list_in_train);
  shown && (await era.waitAnyKey());
  (await update_marks(shown, ...chara_list_in_train)) &&
    update_juel_buff(...chara_list_in_train);
  chara_list_in_train.forEach((chara_id) => {
    era.set(
      `tcvar:${chara_id}:接近高潮`,
      pleasure_list
        .map((part) => {
          return {
            k: part,
            v:
              era.get(`palam:${chara_id}:${part_names[part]}快感`) >
              era.get(`tcvar:${chara_id}:${part_names[part]}快感上限`) *
                lust_palam_border,
          };
        })
        .filter((e) => e.v)
        .map((e) => e.k),
    );
    !era.get(`tcvar:${chara_id}:接近高潮`).length &&
      era.set(`tcvar:${chara_id}:接近高潮`, 0);
  });
  const master = era.get('tflag:主导权');
  if (
    !sys_check_awake(master) ||
    era.get(`tcvar:${master}:脱力`) ||
    era.get(`tcvar:${master}:失神`)
  ) {
    change_master(-1, shown);
  }
}

/**
 * @param {number} command
 * @param {boolean[]} filters
 * @param {boolean} [_shown]
 * @returns {Promise<boolean>}
 */
async function sys_handle_ero_act(command, filters, _shown) {
  shown = _shown !== false;
  const cur_lover = era.get('tflag:当前对手');
  const chara = get_chara_talk(cur_lover);
  const supporter = era.get('tflag:当前助手');
  shown && era.drawLine();
  if (command < 900) {
    let action_success = true;
    const check = sys_check_ero_enabled(cur_lover, supporter, command);
    if (command === ero_hooks.use_lubricating_fluid) {
      const to_use_lubricating_fluid = await use_lubricating_fluid(chara);
      if (to_use_lubricating_fluid) {
        to_use_lubricating_fluid.check = check;
        await sys_call_ero_event(
          cur_lover,
          ero_hooks.use_lubricating_fluid,
          to_use_lubricating_fluid,
        );
      } else {
        action_success = false;
      }
    } else if (command === ero_hooks.use_medicine) {
      const to_use_medicine = await use_ero_medicine(chara);
      if (to_use_medicine) {
        to_use_medicine.check = check;
        await sys_call_ero_event(
          cur_lover,
          ero_hooks.use_medicine,
          to_use_medicine,
        );
      } else {
        action_success = false;
      }
    } else if (command === ero_hooks.use_item) {
      const to_use_item = await use_ero_item(chara);
      if (to_use_item) {
        to_use_item.check = check;
        await sys_call_ero_event(cur_lover, ero_hooks.use_item, to_use_item);
      } else {
        action_success = false;
      }
    } else if (command === ero_hooks.take_off_item) {
      const used_item = await take_off_ero_item(chara);
      if (used_item) {
        await sys_call_ero_event(cur_lover, ero_hooks.take_off_item, used_item);
      } else {
        action_success = false;
      }
    } else if (command === ero_hooks.ask_use_item) {
      const random_item = use_item_by_character();
      await sys_call_ero_event(cur_lover, ero_hooks.ask_use_item, {
        item: get_random_entry(random_item.items),
        part: random_item.part,
        attacker: 0,
        defender: cur_lover,
      });
    } else if (
      (ero_tagged_hooks[command] || default_tags).condition !==
      condition_type.active
    ) {
      await sys_call_ero_event(cur_lover, command, {
        attacker: 0,
        check,
        defender: cur_lover,
        shown,
      });
    } else {
      await sys_call_ero_event(cur_lover, command, {
        check,
        shown,
        supporter,
      });
    }
    if (action_success) {
      shown && era.println();
      if (!era.get('tflag:主导权')) {
        era.set('tflag:前回行动', command);
        era.set('tflag:前回助手', supporter);
        await sys_auto_react(shown);
      } else {
        await sys_auto_rape(shown);
      }
      era.set('tflag:前回对手', cur_lover);
      await next_turn();
    }
  } else if (command === 900) {
    let option_flag = true;
    while (option_flag) {
      era.printMultiColumns([
        ...new Array(8).fill(0).map((_, i) => {
          return {
            accelerator: i,
            config: {
              buttonType: era.get(`flag:${i + 950}`) ? 'warning' : 'info',
              width: 8,
            },
            content: era.get(`flagname:${i + 950}`).toUpperCase(),
            type: 'button',
          };
        }),
        { accelerator: 999, content: '返回', type: 'button' },
      ]);
      const ret = await era.input();
      if (ret === 999) {
        option_flag = false;
      } else {
        era.set(`flag:${ret + 950}`, !era.get(`flag:${ret + 950}`));
      }
    }
  } else if (command === 901) {
    print_touch_info(cur_lover);
    await era.waitAnyKey();
  } else if (command === 902) {
    print_stain_info(cur_lover);
    await era.waitAnyKey();
  } else if (command === 903) {
    await print_exp_page(0);
  } else if (command === 904) {
    await print_exp_page(cur_lover);
  } else if (command === 999) {
    if (
      sys_check_awake(cur_lover) &&
      !era.get(`tcvar:${cur_lover}:脱力`) &&
      !era.get(`tcvar:${cur_lover}:失神`) &&
      sys_get_strength_ratio_in_fight(0, cur_lover) < Math.random()
    ) {
      change_master(0, shown);
    }
    if (era.get('tflag:主导权')) {
      await era.waitAnyKey();
      era.println();
      await sys_auto_rape(shown);
      era.set('tflag:前回对手', era.get('tflag:主导权'));
      await next_turn();
    } else {
      return false;
    }
  } else if (command < 2000) {
    era.set('tflag:当前对手', command - 1000);
    if (supporter === command - 1000) {
      era.set('tflag:当前助手', 0);
    }
  } else if (supporter === command - 2000) {
    era.set('tflag:当前助手', 0);
  } else {
    era.set('tflag:当前助手', command - 2000);
  }
  const master = era.get('tflag:主导权');
  if (master) {
    if (
      (!era.get('tflag:强奸') && get_sex_acceptable(master) < 0) ||
      Math.max(era.get(`mark:${master}:苦痛`), era.get(`mark:${master}:羞耻`)) -
        era.get(`mark:${master}:欢愉`) >=
        1 ||
      era.get(`mark:${master}:反抗`) >= 2
    ) {
      shown &&
        (await era.printAndWait([
          get_chara_talk(master).get_colored_name(),
          ' 逃离了……',
        ]));
      era.set(`tcvar:${master}:逃跑`, 1);
    }
    if (cur_lover !== master) {
      era.set('tflag:当前对手', master);
    }
  }
  return true;
}

module.exports = sys_handle_ero_act;
