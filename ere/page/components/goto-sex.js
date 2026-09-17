const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const update_marks = require('#/system/ero/calc-sex/update-marks');
const sys_get_intelligence_ratio_in_fight = require('#/system/ero/fight/sys-get-intelligence-ratio');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const { add_juel, update_juels } = require('#/system/ero/sys-calc-juel');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  update_juel_buff,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const print_ero_page = require('#/page/page-ero');

const game_guides = require('#/event/others/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/** @returns {number|undefined} */
async function select_medicine() {
  const item_list = [33, 32]
    .map((iid) => ({
      iid,
      n: i18n().tb_item[iid],
      c: era.get(`item:${iid}`),
    }))
    .filter((e) => e.c > 0);
  if (item_list.length) {
    const button_width = 24 / (item_list.length + 1);
    era.printMultiColumns([
      { content: i18n().timon.ero_sys.use_medicine_header, type: 'text' },
      ...item_list.map((e, i) => ({
        accelerator: i,
        config: { align: 'center', width: button_width },
        content: `${e.n} (${e.c})`,
        type: 'button',
      })),
      {
        accelerator: 999,
        config: { align: 'center', width: button_width },
        content: i18n().ui_cancel,
        type: 'button',
      },
    ]);
    const ret = await era.input();
    return ret < item_list.length ? item_list[ret].iid : void 0;
  } else {
    await era.printAndWait(i18n().timon.ero_sys.no_medicine_notification);
  }
}

/**
 * @param {CharaTalk} chara
 * @returns {Promise<boolean>} if don't use
 */
async function ask_drink_medicine(chara) {
  const ret = await select_medicine();
  if (!ret) {
    return true;
  }
  await (
    ret === 32
      ? i18n().timon.ero_sys.use_uma_s
      : i18n().timon.ero_sys.use_super_uma_z
  )(chara, di18n.tb_item.get_name(ret));
  era.set(`status:${chara.id}:${i18n('zh-CN').tb_item[ret]}`, 1);
  era.add(`item:${ret}`, -1);
}

/** @param {CharaTalk} chara */
async function fail(chara) {
  sys_change_attr_and_print(0, attr_enum.hp, -100);
  sys_like_chara(chara.id, 0, -400) && (await era.waitAnyKey());
  sys_change_fame(-100);
  era.set('flag:变态行为', 1);
  if (era.get('flag:当前互动角色') === chara.id) {
    era.set('flag:当前互动角色', 0);
  }
  switch (era.get('flag:当前位置')) {
    case location_enum.chairman:
    case location_enum.gate:
    case location_enum.trainer:
    case location_enum.visitor:
    case location_enum.clinic:
      return 2;
  }
}

/**
 * @param {number} cid
 * @param {number} sex_loc
 * @returns {Promise<boolean|number|undefined>} if skip the week
 */
async function goto_sex(cid, sex_loc) {
  era.drawLine();
  if (await game_guides.office_sex()) {
    return;
  }
  const chara = get_chara_talk(cid);
  const me = get_chara_talk(0);
  if (!sys_check_awake(cid)) {
    era.printMultiColumns([
      {
        content: i18n().timon.ero_sys.get_want_sex_sleep(chara),
        type: 'text',
      },
      {
        accelerator: 0,
        config: { align: 'center', width: 12 },
        content: i18n().timon.ero_sys.bt_rape_in_sleeping,
        type: 'button',
      },
      {
        accelerator: 100,
        config: { align: 'center', width: 12 },
        content: i18n().ui_cancel,
        type: 'button',
      },
    ]);
    const ret = await era.input();
    if (!ret) {
      era.set('flag:当前位置', sex_loc);
      begin_and_init_ero(0, cid);
      await print_ero_page(cid);
      await end_ero_and_show_result(true);
    }
  } else {
    const love_check = era.get(`love:${cid}`) >= 50;
    const check =
      love_check ||
      (era.get(`cflag:${cid}:种族`) > 0 && era.get('flag:惩戒力度') >= 2)
        ? get_sex_acceptable(cid)
        : -1;
    let ret, dice;
    if (check >= 0) {
      const [confirm_info, bt_sex] = (
        love_check
          ? i18n().timon.ero_sys.get_want_sex_as_lover
          : i18n().timon.ero_sys.get_want_sex_as_slave
      )(chara, me);
      era.printMultiColumns(
        [
          {
            content: confirm_info,
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 4 },
            content: bt_sex,
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', disabled: !love_check, width: 4 },
            content: i18n().timon.ero_sys.bt_back_home,
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 4 },
            content: i18n().timon.ero_sys.bt_rape_play,
            type: 'button',
          },
          {
            accelerator: 3,
            config: { align: 'center', disabled: !love_check, width: 4 },
            content: i18n().timon.ero_sys.bt_use_medicine,
            type: 'button',
          },
          {
            accelerator: 4,
            config: { align: 'center', width: 4 },
            content: i18n().ui_cancel,
            type: 'button',
          },
        ],
        { horizontalAlign: 'space-around' },
      );
      ret = await era.input();
      if (ret === 4) {
        return;
      } else if (ret === 1) {
        era.set('flag:床伴', cid);
        return true;
      } else {
        era.set('flag:当前位置', sex_loc);
      }
      let is_rape = 0;
      switch (ret) {
        case 2:
          if (
            love_check &&
            (await i18n().timon.ero_sys.choose_who_to_rape(chara, me))
          ) {
            is_rape = 1;
          } else {
            is_rape = 2;
          }
          break;
        case 3:
          if (await ask_drink_medicine(chara)) {
            return;
          }
      }
      begin_and_init_ero(0, cid);
      if (is_rape === 1) {
        era.set('tflag:强奸', 0);
        update_juel_buff(cid);
      } else if (is_rape === 2) {
        era.set('tflag:强奸', cid);
      }
      if (
        era.get(`status:${cid}:超马跳Z`) > 0 ||
        is_rape === 2 ||
        !love_check
      ) {
        era.set('tflag:主导权', cid);
      }
      await print_ero_page(cid);
      await end_ero_and_show_result(true);
    } else {
      const l_pleasure =
        era.get(`mark:${cid}:淫纹`) ||
        era.get(`mark:${cid}:欢愉`) -
          Math.max(era.get(`mark:${cid}:苦痛`), era.get(`mark:${cid}:羞耻`));
      const l_meek = era.get(`mark:${cid}:同心`) - era.get(`mark:${cid}:反抗`);
      const is_pleasure = l_pleasure > l_meek;
      const accept = Math.max(l_pleasure, l_meek) / 3 > Math.random();
      if (accept) {
        era.printMultiColumns([
          {
            content: (is_pleasure > 0
              ? i18n().timon.ero_sys.get_want_sex_as_master_by_pleasure
              : i18n().timon.ero_sys.get_want_sex_as_master_by_meek)(chara, me),
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 6 },
            content: i18n().timon.ero_sys.bt_start_train,
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', width: 6 },
            content: i18n().timon.ero_sys.bt_train_back_home,
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 6 },
            content: i18n().timon.ero_sys.bt_use_medicine,
            type: 'button',
          },
          {
            accelerator: 3,
            config: { align: 'center', width: 6 },
            content: i18n().ui_cancel,
            type: 'button',
          },
        ]);
        ret = await era.input();
        if (ret === 3) {
          return;
        } else if (ret === 1) {
          era.set('flag:床伴', cid);
          return true;
        } else {
          era.set('flag:当前位置', sex_loc);
        }
        if (ret === 2 && (await ask_drink_medicine(chara))) {
          return;
        }
        begin_and_init_ero(0, cid);
      } else {
        era.printMultiColumns([
          {
            content: i18n().timon.ero_sys.get_want_sex_as_raper(chara, me),
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 8 },
            content: i18n().timon.ero_sys.bt_rape,
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', width: 8 },
            content: i18n().timon.ero_sys.bt_drug,
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 8 },
            content: i18n().ui_cancel,
            type: 'button',
          },
        ]);
        ret = await era.input();
        if (ret === 2) {
          return;
        } else if (ret === 0) {
          sys_change_attr_and_print(0, attr_enum.hp, -get_random_value(0, 200));
          sys_change_attr_and_print(
            cid,
            attr_enum.hp,
            -get_random_value(0, 200),
          );
          const success =
            !era.get('flag:强奸抵抗') ||
            sys_get_strength_ratio_in_fight(0, cid) > (dice = Math.random());
          await i18n().timon.ero_sys.rape(chara, me, success);
          if (success) {
            sys_like_chara(cid, 0, -400) && (await era.waitAnyKey());
            era.set('flag:当前位置', sex_loc);
            begin_and_init_ero(0, cid);
            era.set('tflag:强奸', 0);
            update_juel_buff(cid);
          } else {
            return await fail(chara);
          }
        } else {
          ret = await select_medicine();
          // 下药迷奸的情况作为非合意的标记
          if (!ret) {
            return;
          }
          sys_change_attr_and_print(
            0,
            attr_enum.tp,
            -get_random_value(0, Math.min(era.get('base:0:精力'), 200)),
          );
          era.add(`item:${ret}`, -1);
          const success =
            !era.get('flag:强奸抵抗') ||
            sys_get_intelligence_ratio_in_fight(0, cid) >
              (dice = Math.random());
          await i18n().timon.ero_sys.drug(chara, me, 1 + (ret === 32), success);
          if (success) {
            era.set(`status:${cid}:${i18n('zh-CN').tb_item[ret]}`, 1);
            era.set('flag:当前位置', sex_loc);
            begin_and_init_ero(0, cid);
            era.set('tflag:强奸', 0);
          } else {
            return await fail(chara);
          }
        }
      }
      if (era.get(`status:${cid}:超马跳Z`) > 0) {
        era.set('tflag:主导权', cid);
      }
      await print_ero_page(cid);
      if (check < 0) {
        if (era.get(`status:${cid}:超马跳Z`) > 0) {
          await i18n().timon.ero_sys.after_rape_by_super_uma_z(chara);
          sys_like_chara(cid, 0, -400) && (await era.waitAnyKey());
          if (
            era.get(`mark:${cid}:羞耻`) < 3 &&
            !era.get(`ex:${cid}:羞耻获取`)
          ) {
            era.set(`nowex:${cid}:羞耻获取`, 1);
          }
          if (
            era.get(`mark:${cid}:反抗`) < 3 &&
            !era.get(`ex:${cid}:反抗获取`)
          ) {
            era.set(`nowex:${cid}:反抗获取`, 1);
          }
          await update_marks(true, cid);
          if (dice < 0.95) {
            era.add(`status:${cid}:疲惫`, 3 + (dice < 0.05));
          }
        } else if (era.get(`status:${cid}:马跳S`) > 0) {
          if (dice < 0.95) {
            era.add(`status:${cid}:疲惫`, 2 + (dice < 0.05));
          }
        } else if (era.get('tflag:强奸') === 0) {
          // JEWELNAME:11 - 12 = 痛苦 - 恐惧
          add_juel(cid, 11, 6000);
          add_juel(cid, 12, 4800);
          // JEWELANEM:14 = 反感
          add_juel(cid, 14, 1500);
          update_juels(true, cid);
          await update_marks(true, cid);
          if (dice < 0.95) {
            sys_hurt_uma(cid, 1 + (dice < 0.05));
          }
        }
      }
      await end_ero_and_show_result(true);
    }
  }
}

module.exports = goto_sex;
