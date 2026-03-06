const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_change_lust,
  sys_change_motivation,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const select_target_in_storage = require('#/page/storage/select-target');

const { add_event, cb_enum } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number, get_random_value } = require('#/utils/value-utils');

const { money_color, palam_colors } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LoveLimitStatus = require('#/data/love-limit-status');
const { pressure_border } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[100] = async () => {
    const me = get_chara_talk(0);
    if (era.get('base:0:体力') < era.get('maxbase:0:体力')) {
      if (await select_yes_or_no(i18n().timon.storage.eat_chocolate_confirm)) {
        get_attr_and_print_in_event(0, void 0, 0, [200]);
        sys_change_weight(0, get_random_value(20, 40, true));
        era.add('item:情人节巧克力', -1);
      }
      return true;
    } else {
      await era.printAndWait(
        i18n().timon.storage.get_eat_chocolate_disabled(me),
      );
    }
  };

  // ITEMNAME:0 = 蔬菜汁
  handlers[0] = async (iid = 0) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) =>
        // BASENAME:0 = 体力
        era.get(`maxbase:${cid}:0`) > era.get(`base:${cid}:0`) * 2 &&
        era.get(`maxbase:${cid}:0`) >= 500,
    );
    if (aim >= 0) {
      const val = era.get(`maxbase:${aim}:0`) / 2;
      era.add(`maxbase:${aim}:0`, -get_random_value(100, 200));
      let wait = get_attr_and_print_in_event(aim, void 0, 0, [val]);
      wait = sys_change_motivation(aim, -1) || wait;
      if (wait) {
        await era.waitAnyKey();
      }
      era.add('item:0', -1);
      return true;
    }
  };

  handlers[1] = async (iid = 1) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) =>
        era.get(`maxbase:${cid}:体力`) > era.get(`base:${cid}:体力`) &&
        era.get(`base:${cid}:耐力`) > 10,
    );
    if (aim >= 0) {
      if (
        get_attr_and_print_in_event(aim, [0, -10], 0, [
          era.get(`maxbase:${aim}:体力`),
        ])
      ) {
        await era.waitAnyKey();
      }
      era.add(`base:${aim}:药物残留`, 8);
      era.add('item:强化青汁', -1);
      return true;
    }
  };

  handlers[2] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) =>
        era.get(`maxbase:${chara_id}:精力`) >
          era.get(`base:${chara_id}:精力`) * 2 &&
        era.get(`maxbase:${chara_id}:精力`) >= 500,
    );
    if (aim !== void 0) {
      const val = era.get(`maxbase:${aim}:精力`) / 2;
      era.add(`maxbase:${aim}:精力`, -get_random_value(100, 200));
      let wait = get_attr_and_print_in_event(aim, void 0, 0, [0, val]);
      wait = sys_change_motivation(aim, -1) || wait;
      if (wait) {
        await era.waitAnyKey();
      }
      era.add(`base:${aim}:药物残留`, 8);
      era.add('item:浓缩咖啡', -1);
      return true;
    }
  };

  handlers[3] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) =>
        (era.get(`maxbase:${chara_id}:精力`) >
          era.get(`base:${chara_id}:精力`) ||
          !sys_check_awake(chara_id)) &&
        era.get(`base:${chara_id}:智力`) > 10,
    );
    if (aim >= 0) {
      if (
        get_attr_and_print_in_event(aim, [0, 0, 0, 0, -10], 0, [
          0,
          era.get(`maxbase:${aim}:精力`),
        ])
      ) {
        await era.waitAnyKey();
      }
      if (!era.get(`base:${aim}:体力`) < 1) {
        era.add(`base:${aim}:体力`, 1);
      }
      era.set(`status:${aim}:沉睡`, 0);
      era.set(`status:${aim}:马跳S`, 0);
      era.add(`base:${aim}:药物残留`, 16);
      era.add('item:提神剂', -1);
      return true;
    }
  };

  handlers[4] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) => era.get(`base:${chara_id}:压力`) >= pressure_border.unhappy,
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_pressure_down(get_chara_talk(aim)),
      );
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add(`base:${aim}:压力`, -2500);
      era.add(`base:${aim}:药物残留`, 50);
      era.add('item:抗抑郁药', -1);
      return true;
    }
  };

  handlers[5] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => era.get(`base:${cid}:性欲`) >= lust_border.itch,
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_lust_down(get_chara_talk(aim)),
      );
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add(`base:${aim}:性欲`, -1500);
      era.add(`base:${aim}:药物残留`, 50);
      era.add('item:镇静剂', -1);
      return true;
    }
  };

  handlers[6] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) =>
        era.get(`base:${cid}:压力`) >= pressure_border.unhappy ||
        era.get(`base:${cid}:性欲`) >= lust_border.itch,
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_all_down(get_chara_talk(aim)),
      );
      era.add(`base:${aim}:压力`, -1200);
      era.add(`base:${aim}:性欲`, -800);
      era.add('item:清心茶', -1);
      return true;
    }
  };

  handlers[7] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => cid > 0 && era.get(`base:${cid}:性欲`) < lust_border.max,
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_lust_up(get_chara_talk(aim)),
      );
      era.add(`base:${aim}:压力`, -500);
      era.add(`base:${aim}:性欲`, 2000);
      era.add('item:催情喷雾', -1);
      return true;
    }
  };

  handlers[10] = async (iid) => {
    const aim = await select_target_in_storage(iid, (cid) =>
      era.get(`status:${cid}:发胖`),
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_remove_fat(get_chara_talk(aim)),
      );
      era.set(`status:${aim}:发胖`, 0);
      era.set(`base:${aim}:体重偏差`, 3200);
      era.add(`base:${aim}:药物残留`, 60);
      era.add('item:速效减肥药', -1);
      return true;
    }
  };

  handlers[11] = async (iid) => {
    const aim = await select_target_in_storage(iid, (cid) =>
      era.get(`status:${cid}:偏头痛`),
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_remove_headache(get_chara_talk(aim)),
      );
      era.set(`status:${aim}:偏头痛`, 0);
      era.set(
        `base:${aim}:药物残留`,
        Math.floor(
          (100 +
            20 * era.get(`talent:${aim}:身体素质`) +
            50 * era.get(`cflag:${aim}:种族`)) *
            0.8,
        ),
      );
      era.add(`base:${aim}:体重偏差`, 2400);
      era.add('item:头痛飞飞', -1);
      return true;
    }
  };

  handlers[12] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => !era.get(`status:${cid}:健康茶`),
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_drink_tea(get_chara_talk(aim)),
      );
      era.set(`status:${aim}:健康茶`, 1);
      era.add('item:健康茶', -1);
      return true;
    }
  };

  handlers[13] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) =>
        cid > 0 &&
        !era.get(`status:${cid}:讨厌药`) &&
        LoveLimitStatus.get(cid).is_empty(),
    );
    if (aim >= 0) {
      await i18n().timon.storage.drink_hate_drug(
        get_chara_talk(aim),
        get_chara_talk(0),
      );
      era.set(`status:${aim}:讨厌药`, 4);
      era.add(`base:${aim}:药物残留`, 50);
      era.add('item:讨厌药', -1);
      return true;
    }
  };

  handlers[14] = async (iid) => {
    const love_setting = era.get('flag:回合爱慕惩罚');
    const aim = await select_target_in_storage(iid, (cid) => {
      const love = era.get(`love:${cid}`),
        reject = era.get(`cflag:${cid}:爱慕暂拒`);
      return (
        cid &&
        love > 40 &&
        (love_setting ||
          (love !== 49 && love !== 74 && love !== 89 && love !== 99) ||
          reject === 49 ||
          reject === 74 ||
          reject === 89 ||
          reject === 99) &&
        !era.get(`status:${cid}:讨厌药`) &&
        !era.get(`status:${cid}:爱意克制`) &&
        LoveLimitStatus.get(cid).is_empty()
      );
    });
    if (aim >= 0) {
      await i18n().timon.storage.drink_limit_drug(
        get_chara_talk(aim),
        get_chara_talk(0),
      );
      LoveLimitStatus.get(aim).set(
        era.get(`love:${aim}`),
        era.get('flag:当前回合数') + 4,
      );
      era.set(`love:${aim}`, 40);
      era.add(`base:${aim}:药物残留`, 50);
      era.add('item:抑制药', -1);
      return true;
    }
  };

  handlers[15] = async (iid) => {
    const aim = await select_target_in_storage(iid, (e) =>
      era.get(`status:${e}:发胖`),
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_temp_remove_fat(get_chara_talk(aim)),
      );
      era.set(`status:${aim}:发胖`, 0);
      era.add('item:量子减肥药', -1);
      return true;
    }
  };

  handlers[16] = async (iid) => {
    const aim = await select_target_in_storage(iid, (cid) =>
      era.get(`status:${cid}:偏头痛`),
    );
    if (aim >= 0) {
      await era.printAndWait(
        i18n().timon.storage.get_chara_temp_remove_headache(
          get_chara_talk(aim),
        ),
      );
      era.set(`status:${aim}:偏头痛`, 0);
      era.add('item:布洛芬', -1);
      return true;
    }
  };

  handlers[45] = handlers[46] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => era.get(`base:${cid}:0`) < era.get(`maxbase:${cid}:0`),
    );
    if (aim >= 0) {
      const chara = get_chara_talk(aim);
      await era.printAndWait(
        i18n().timon.storage.get_chara_use_medicine(
          chara,
          di18n.tb_item.get_name(iid),
        ),
      );
      if (
        get_attr_and_print_in_event(aim, void 0, 0, [iid === 45 ? 400 : 150])
      ) {
        await era.waitAnyKey();
      }
      era.add(`exp:${aim}:吸奶量`, 200);
      sys_change_lust(aim, iid === 45 ? 800 : 300);
      era.add(`item:${iid}`, -1);
      return true;
    }
  };

  handlers[47] = handlers[48] = async (iid) => {
    const item_name = di18n.tb_item.get_name(iid);
    const total = era.get(`item:${iid}`);
    let to_sell = 1,
      flag_sell = true,
      flag_print = true;
    while (flag_sell) {
      era.setAlign('center');
      (flag_print ? era.printInColRows : era.replaceInColRows)(
        [
          {
            config: { align: 'left' },
            content: i18n().timon.storage.to_sell_milk_template.replace(
              '%ITEM%',
              item_name,
            ),
            type: 'text',
          },
        ],
        [
          {
            accelerator: 2,
            config: { disabled: to_sell < 2, width: 2 },
            content: '-10',
            type: 'button',
          },
          {
            accelerator: 4,
            config: { disabled: to_sell === 0, width: 2 },
            content: '-1',
            type: 'button',
          },
          { config: { width: 2 }, content: to_sell.toString(), type: 'text' },
          {
            accelerator: 6,
            config: { disabled: to_sell === total, width: 2 },
            content: '+1',
            type: 'button',
          },
          {
            accelerator: 8,
            config: { disabled: to_sell === total, width: 2 },
            content: '+10',
            type: 'button',
          },
          { content: [], type: 'text' },
          {
            accelerator: 5,
            config: { width: 3 },
            content: i18n().ui_yes,
            type: 'button',
          },
          {
            accelerator: 0,
            config: { width: 3 },
            content: i18n().ui_no,
            type: 'button',
          },
        ],
      );
      era.setAlign('left');
      switch (await era.input({ hideInput: true })) {
        case 2:
          to_sell = Math.max(to_sell - 10, 0);
          break;
        case 4:
          to_sell--;
          break;
        case 6:
          to_sell++;
          break;
        case 8:
          to_sell = Math.min(to_sell + 10, total);
          break;
        case 5:
          flag_sell = false;
          break;
        case 0:
          return;
      }
      flag_print = false;
    }
    await era.clear(1);
    if (
      to_sell > 0 &&
      (await select_yes_or_no(
        i18n().timon.storage.get_sell_milk_confirm(
          {
            color: palam_colors.notifications[1],
            content: to_sell.toString(),
            fontWeight: 'bold',
          },
          item_name,
        ),
      ))
    ) {
      const money = to_sell * era.get(`itemprice:${iid}`);
      global_achievement.play_mil2 = 1;
      await era.printAndWait(
        i18n().timon.storage.get_sell_milk_result(
          {
            color: palam_colors.notifications[1],
            content: to_sell.toString(),
            fontWeight: 'bold',
          },
          item_name,
          {
            ...get_abbr_number(money),
            color: money_color,
            fontWeight: 'bold',
          },
        ),
      );
      const my_marks = new MyEduMarks();
      if (my_marks.sell_milk === 0) {
        my_marks.sell_milk = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(0, cb_enum.edu).set_arg('breakfast'),
        );
      }
      era.add(`item:${iid}`, -to_sell);
      era.add('flag:当前马币', money);
      return true;
    }
  };

  handlers[17] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => era.get(`talent:${cid}:腋毛成长`) < 2,
    );
    if (aim >= 0) {
      await i18n().timon.storage.make_armpit_hair_longer(get_chara_talk(aim));
      era.add(`talent:${aim}:腋毛成长`, 1);
      era.add(`cflag:${aim}:腋毛`, 1);
      era.add('item:生毛膏', -1);
      return true;
    }
  };

  handlers[18] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => era.get(`talent:${cid}:腋毛成长`) > 0,
    );
    if (aim >= 0) {
      const chara = get_chara_talk(aim);
      const talent = era.add(`talent:${aim}:腋毛成长`, -1);
      era.set(
        `cflag:${aim}:腋毛`,
        talent ? Math.max(era.get(`cflag:${chara.id}:腋毛`) - 1, 0) : 0,
      );
      await i18n().timon.storage.make_armpit_hair_shorter(
        get_chara_talk(aim),
        talent,
      );
      era.add('item:脱毛膏', -1);
      return true;
    }
  };

  handlers[19] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => era.get(`talent:${cid}:阴毛成长`) < 2,
    );
    if (aim >= 0) {
      await i18n().timon.storage.make_pubic_hair_longer(get_chara_talk(aim));
      era.add(`talent:${aim}:阴毛成长`, 1);
      era.add(`cflag:${aim}:阴毛`, 1);
      era.add('item:私处生毛膏', -1);
      return true;
    }
  };

  handlers[20] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => era.get(`talent:${cid}:阴毛成长`) > 0,
    );
    if (aim >= 0) {
      const talent = era.add(`talent:${aim}:阴毛成长`, -1);
      era.set(
        `cflag:${aim}:阴毛`,
        talent ? Math.max(era.get(`cflag:${aim}:阴毛`) - 1, 0) : 0,
      );
      await i18n().timon.storage.make_pubic_hair_shorter(
        get_chara_talk(aim),
        talent,
      );
      era.add('item:私处脱毛膏', -1);
      return true;
    }
  };
};
