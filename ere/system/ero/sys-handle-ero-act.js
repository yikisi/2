const era = require('#/era-electron');

const update_marks = require('#/system/ero/calc-sex/update-marks');
const change_master = require('#/system/ero/ero-act-handler/change-master');
const print_stain_info = require('#/system/ero/ero-act-handler/print-stain-info');
const print_touch_info = require('#/system/ero/ero-act-handler/print-touch-info');
const take_off_ero_item = require('#/system/ero/ero-act-handler/take-off-ero-item');
const use_ero_item = require('#/system/ero/ero-act-handler/use-ero-item');
const use_ero_medicine = require('#/system/ero/ero-act-handler/use-ero-medicine');
const use_item_by_character = require('#/system/ero/ero-act-handler/use-item-by-chara');
const use_lubricating_fluid = require('#/system/ero/ero-act-handler/use-lubricating-fluid');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const sys_auto_rape = require('#/system/ero/sub/sys-auto-rape');
const sys_auto_react = require('#/system/ero/sub/sys-auto-react');
const {
  sys_check_main_touch,
  sys_clean_oor_parts,
} = require('#/system/ero/sys-calc-distance');
const { clean_part } = require('#/system/ero/sys-calc-ero-part');
const {
  check_want_to_escape,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel, update_juels } = require('#/system/ero/sys-calc-juel');
const check_orgasm = require('#/system/ero/sys-calc-orgasm');
const { add_palam } = require('#/system/ero/sys-calc-palam');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const sys_check_ero_enabled = require('#/system/ero/sys-check-ero-action');
const {
  get_characters_in_train,
  update_juel_buff,
} = require('#/system/ero/sys-prepare-ero');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { print_chara_info } = require('#/page/page-exp');

const { get_custom_ero, run_custom_ero } = require('#/event/ero/ero-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const EroParticipant = require('#/data/ero/ero-participant');
const { tequip_parts } = require('#/data/ero/item-const');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { lust_palam_border } = require('#/data/ero/orgasm-const');
const {
  part2jid,
  part_enum,
  part_gifts,
  part_touch,
  pleasure_list,
} = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const { ero_hooks, ero_tagged_hooks } = require('#/data/event/ero-hooks');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/** @param {boolean} shown */
async function next_turn(shown) {
  era.add('tflag:回合', 1);
  const train_list = get_characters_in_train();
  for (const cid of train_list) {
    if (era.get(`tcvar:${cid}:刚刚受虐`) > 0) {
      era.set(
        `tcvar:${cid}:刚刚受虐`,
        Math.max(0, era.get(`tcvar:${cid}:刚刚受虐`) - 100),
      );
    }
    if (era.get(`tcvar:${cid}:刚刚施虐`) > 0) {
      era.add(`tcvar:${cid}:刚刚施虐`, -1);
    }
    era.set(`tcvar:${cid}:刚刚高潮`, false);
    if (era.get(`ex:${cid}:阴道撕裂`)) {
      set_stain(cid, part_enum.virgin, stain_enum.wound);
      add_juel(cid, 11, base_emotion_juel);
    }
    if (era.get(`ex:${cid}:肛门撕裂`)) {
      set_stain(cid, part_enum.anal, stain_enum.wound);
      add_juel(cid, 11, base_emotion_juel);
    }
    if (era.get(`cflag:${cid}:阴道尺寸`) && !get_penis_size(cid)) {
      era.set(
        `stain:${cid}:外阴`,
        era.get(`stain:${cid}:阴道`) | era.get(`stain:${cid}:外阴`),
      );
    }
    for (const e of tequip_parts.slice(0, 6)) {
      if (era.get(`tequip:${cid}:${part_touch[e]}`) !== -1) {
        const tmp_part = era.get(`tcvar:${cid}:${part_touch[e]}接触部位`);
        if (tmp_part.item === void 0) {
          clean_part(new EroParticipant(cid, e));
        } else {
          await run_custom_ero(cid, ero_hooks.use_item, {
            item: tmp_part.item,
            shown,
            owner: tmp_part.owner,
            part: e,
            stay: cid,
          });
          era.println();
        }
      }
    }
    let body_part;
    // 名器停留效果
    Object.entries(part_gifts).forEach((e) => {
      if (
        era.get(`talent:${cid}:${e[1]}`) &&
        (body_part = era.get(`tcvar:${cid}:${part_touch[e[0]]}接触部位`)) !==
          -1 &&
        body_part.part !== part_enum.item
      ) {
        add_palam(body_part.owner, body_part.part, get_random_value(15, 25));
      }
    });
  }
  await check_orgasm(
    shown,
    ...train_list.map((cid) => {
      const inmon = CharaInmon.get(cid);
      if (era.get(`tcvar:${cid}:高潮抑制`) > 0) {
        era.add(`tcvar:${cid}:高潮抑制`, -1);
      } else if (inmon.on(plugin_enum.org_c1)) {
        era.set(`tcvar:${cid}:高潮抑制`, 1);
      } else if (inmon.on(plugin_enum.org_c2)) {
        era.set(`tcvar:${cid}:高潮抑制`, 2);
      } else if (inmon.on(plugin_enum.org_c3)) {
        era.set(`tcvar:${cid}:高潮抑制`, 4);
      }
      return cid;
    }),
  );
  if (shown) {
    era.println();
  }
  update_juels(shown, ...train_list);
  if (shown) {
    await era.waitAnyKey();
  }
  if (await update_marks(shown, ...train_list)) {
    update_juel_buff(...train_list);
  }
  for (const cid of train_list) {
    era.set(
      `tcvar:${cid}:接近高潮`,
      pleasure_list
        .map((part) => {
          const pname = i18n('zh-CN').tb_param[part2jid[part]];
          return {
            k: part,
            v:
              era.get(`palam:${cid}:${pname}快感`) >
              era.get(`tcvar:${cid}:${pname}快感上限`) * lust_palam_border,
          };
        })
        .filter((e) => e.v)
        .map((e) => e.k),
    );
    if (era.get(`tcvar:${cid}:接近高潮`).length === 0) {
      era.set(`tcvar:${cid}:接近高潮`, 0);
    }
  }
  const master = era.get('tflag:主导权');
  if (
    !sys_check_awake(master) ||
    era.get(`tcvar:${master}:脱力`) > 0 ||
    era.get(`tcvar:${master}:失神`) > 0
  ) {
    change_master(-1, shown);
  }
  for (const cid of train_list) {
    if (cid !== master) {
      sys_check_main_touch(cid, cid > 0 ? 0 : master);
    }
    if (cid > 0) {
      await get_custom_ero(cid).next_round();
    }
  }
}

/**
 * @param {number} command
 * @param {boolean[]} filters
 * @param {boolean} shown
 * @returns {Promise<boolean>}
 */
async function sys_handle_ero_act(command, filters, shown = true) {
  const lover = era.get('tflag:当前对手');
  const chara = get_chara_talk(lover);
  const sup = era.get('tflag:当前助手');
  if (shown) {
    era.drawLine();
  }
  if (command < 900) {
    let a_suc = true;
    const check = sys_check_ero_enabled(lover, sup, command);
    if (command === ero_hooks.use_lubricating_fluid) {
      const to_use_lubricating_fluid = await use_lubricating_fluid(chara);
      if (to_use_lubricating_fluid) {
        to_use_lubricating_fluid.check = check;
        await run_custom_ero(
          lover,
          ero_hooks.use_lubricating_fluid,
          to_use_lubricating_fluid,
        );
      } else {
        a_suc = false;
      }
    } else if (command === ero_hooks.use_medicine) {
      const to_use_medicine = await use_ero_medicine(chara);
      if (to_use_medicine) {
        to_use_medicine.check = check;
        await run_custom_ero(lover, ero_hooks.use_medicine, to_use_medicine);
      } else {
        a_suc = false;
      }
    } else if (command === ero_hooks.use_item) {
      const to_use_item = await use_ero_item(chara);
      if (to_use_item) {
        to_use_item.check = check;
        await run_custom_ero(lover, ero_hooks.use_item, to_use_item);
      } else {
        a_suc = false;
      }
    } else if (command === ero_hooks.take_off_item) {
      const used_item = await take_off_ero_item(chara);
      if (used_item) {
        await run_custom_ero(lover, ero_hooks.take_off_item, used_item);
      } else {
        a_suc = false;
      }
    } else if (command === ero_hooks.ask_use_item) {
      const random_item = use_item_by_character();
      await run_custom_ero(lover, ero_hooks.ask_use_item, {
        item: get_random_entry(random_item.items),
        part: random_item.part,
        attacker: 0,
        defender: lover,
      });
    } else if (
      (ero_tagged_hooks[command] || default_tags).condition !==
      condition_type.active
    ) {
      await run_custom_ero(lover, command, {
        attacker: 0,
        check,
        defender: lover,
        shown,
      });
    } else {
      await run_custom_ero(lover, command, {
        check,
        shown,
        supporter: sup,
      });
    }
    if (a_suc) {
      if (shown) {
        era.println();
      }
      if (!era.get('tflag:主导权')) {
        era.set('tflag:前回行动', command);
        era.set('tflag:前回助手', sup);
        const inmon = CharaInmon.get(lover);
        if (!inmon.on(plugin_enum.tuna) && !inmon.on(plugin_enum.meek)) {
          await sys_auto_react(shown);
        }
      } else {
        era.set('tflag:对手行动', command);
        await sys_auto_rape(shown);
      }
      era.set('tflag:前回对手', lover);
      await next_turn(shown);
    }
  } else if (command === 900) {
    era.set('tcvar:0:朝向', 1 - era.get('tcvar:0:朝向'));
    era.set('tflag:前回行动', -1);
    for (const cid of get_characters_in_train()) {
      if (cid > 0) {
        sys_clean_oor_parts(0, cid);
      }
    }
  } else if (command === 901) {
    let option_flag = 1;
    while (option_flag) {
      (option_flag - 1 ? era.replaceInColRows : era.printInColRows)([
        ...di18n.sex.setting_options.map((n, i) => ({
          accelerator: i,
          config: {
            buttonType: era.get(`flag:${i + 70}`) ? 'warning' : 'info',
            width: 8,
          },
          content: n,
          type: 'button',
        })),
        { accelerator: 999, content: i18n().ui_back, type: 'button' },
      ]);
      option_flag = 2;
      const ret = await era.input({ hideInput: true });
      if (ret === 999) {
        option_flag = 0;
      } else {
        era.set(`flag:${ret + 70}`, !era.get(`flag:${ret + 70}`));
      }
    }
  } else if (command === 902) {
    print_touch_info(lover);
    await era.waitAnyKey();
  } else if (command === 903) {
    print_stain_info(lover);
    await era.waitAnyKey();
  } else if (command === 904) {
    await print_chara_info(0, void 0, 5);
  } else if (command === 905) {
    await print_chara_info(lover, void 0, 5);
  } else if (command === 999) {
    if (
      sys_check_awake(lover) &&
      !era.get(`tcvar:${lover}:脱力`) &&
      !era.get(`tcvar:${lover}:失神`) &&
      sys_get_strength_ratio_in_fight(0, lover) < Math.random()
    ) {
      change_master(0, shown);
    }
    if (era.get('tflag:主导权') > 0) {
      await era.waitAnyKey();
      era.println();
      await sys_auto_rape(shown);
      era.set('tflag:前回对手', era.get('tflag:主导权'));
      await next_turn(shown);
    } else {
      return false;
    }
  } else if (command < 2000) {
    era.set('tflag:当前对手', command - 1000);
    if (sup === command - 1000) {
      era.set('tflag:当前助手', 0);
    }
  } else if (sup === command - 2000) {
    era.set('tflag:当前助手', 0);
  } else {
    era.set('tflag:当前助手', command - 2000);
  }
  const master = era.get('tflag:主导权');
  if (master) {
    if (check_want_to_escape(master)) {
      if (shown) {
        await era.printAndWait(
          i18n().timon.ero_sys.get_escape_info(get_chara_talk(master)),
        );
      }
      era.set(`tcvar:${master}:逃跑`, 1);
    }
    if (lover !== master) {
      era.set('tflag:当前对手', master);
    }
  }
  return true;
}

module.exports = sys_handle_ero_act;
