const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_motivation,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const select_target_in_storage = require('#/page/storage/select-target');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { lust_border } = require('#/data/ero/orgasm-const');
const LimitLoveStatus = require('#/data/love-limit-status');
const { attr_enum, pressure_border } = require('#/data/train-const');

/** @param {Record<string,function>} handlers */
module.exports = (handlers) => {
  handlers[100] = async () => {
    const me = get_chara_talk(0);
    if (era.get('base:0:体力') < era.get('maxbase:0:体力')) {
      const ret = await select_yes_or_no('要吃【情人节巧克力】吗？');
      if (ret) {
        await era.printAndWait([
          me.get_colored_name(),
          ' 的 ',
          ...sys_change_attr_and_print(0, '体力', 200),
        ]);
        sys_change_weight(0, get_random_value(20, 40, true));
        era.add('item:情人节巧克力', -1);
      }
      return true;
    } else {
      await era.printAndWait([me.get_colored_name(), ' 已经很饱了……']);
    }
  };

  handlers[0] = async () => {
    const aim = await select_target_in_storage(
      '蔬菜汁',
      (chara_id) =>
        era.get(`maxbase:${chara_id}:体力`) >
          era.get(`base:${chara_id}:体力`) * 2 &&
        era.get(`maxbase:${chara_id}:体力`) >= 500,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim),
        val = era.get(`maxbase:${aim}:体力`) / 2;
      era.add(`maxbase:${aim}:体力`, -get_random_value(100, 200));
      await era.printAndWait([
        aim_chara.get_colored_name(),
        ' 的 ',
        ...sys_change_attr_and_print(aim, '体力', val),
      ]);
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add('item:蔬菜汁', -1);
      return true;
    }
  };

  handlers[1] = async () => {
    const aim = await select_target_in_storage(
      '强化青汁',
      (chara_id) =>
        era.get(`maxbase:${chara_id}:体力`) >
          era.get(`base:${chara_id}:体力`) &&
        era.get(`base:${chara_id}:耐力`) > 10,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([
        aim_chara.get_colored_name(),
        ' 的 ',
        ...sys_change_attr_and_print(
          aim,
          attr_enum.endurance,
          -get_random_value(10, Math.min(20, era.get(`base:${aim}:耐力`) - 1)),
        ),
        '，',
        ...sys_change_attr_and_print(aim, '体力', 2000),
      ]);
      era.add(`base:${aim}:药物残留`, 5);
      era.add('item:强化青汁', -1);
      return true;
    }
  };

  handlers[2] = async () => {
    const aim = await select_target_in_storage(
      '浓缩咖啡',
      (chara_id) =>
        era.get(`maxbase:${chara_id}:精力`) >
          era.get(`base:${chara_id}:精力`) * 2 &&
        era.get(`maxbase:${chara_id}:精力`) >= 500,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim),
        val = era.get(`maxbase:${aim}:精力`) / 2;
      era.add(`maxbase:${aim}:精力`, -get_random_value(100, 200));
      await era.printAndWait([
        aim_chara.get_colored_name(),
        ' 的 ',
        ...sys_change_attr_and_print(aim, '精力', val),
      ]);
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add(`base:${aim}:药物残留`, 5);
      era.add('item:浓缩咖啡', -1);
      return true;
    }
  };

  handlers[3] = async () => {
    const aim = await select_target_in_storage(
      '提神剂',
      (chara_id) =>
        (era.get(`maxbase:${chara_id}:精力`) >
          era.get(`base:${chara_id}:精力`) ||
          !sys_check_awake(chara_id)) &&
        era.get(`base:${chara_id}:智力`) > 10,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([
        aim_chara.get_colored_name(),
        ' 的 ',
        ...sys_change_attr_and_print(
          aim,
          attr_enum.intelligence,
          -get_random_value(10, Math.min(20, era.get(`base:${aim}:智力`) - 1)),
        ),
        '，',
        ...sys_change_attr_and_print(aim, '精力', 2000),
      ]);
      if (!era.get(`base:${aim}:体力`) < 1) {
        era.add(`base:${aim}:体力`, 1);
      }
      era.set(`status:${aim}:沉睡`, 0);
      era.set(`status:${aim}:马跳S`, 0);
      era.add(`base:${aim}:药物残留`, 10);
      era.add('item:提神剂', -1);
      return true;
    }
  };

  handlers[4] = async () => {
    const aim = await select_target_in_storage(
      '抗抑郁药',
      (chara_id) => era.get(`base:${chara_id}:压力`) >= pressure_border.unhappy,
    );
    if (undefined !== aim) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), ' 的压力降低了……']);
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add(`base:${aim}:压力`, -2500);
      era.add(`base:${aim}:药物残留`, 40);
      era.add('item:抗抑郁药', -1);
      return true;
    }
  };

  handlers[5] = async () => {
    const aim = await select_target_in_storage(
      '镇静剂',
      (chara_id) => era.get(`base:${chara_id}:性欲`) >= lust_border.itch,
    );
    if (undefined !== aim) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), ' 的性欲降低了……']);
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add(`base:${aim}:性欲`, -1500);
      era.add(`base:${aim}:药物残留`, 40);
      era.add('item:镇静剂', -1);
      return true;
    }
  };

  handlers[6] = async () => {
    const aim = await select_target_in_storage(
      '清心茶',
      (chara_id) =>
        era.get(`base:${chara_id}:压力`) >= pressure_border.unhappy ||
        era.get(`base:${chara_id}:性欲`) >= lust_border.itch,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), ' 变得更冷静了……']);
      era.add(`base:${aim}:压力`, -1200);
      era.add(`base:${aim}:性欲`, -800);
      era.add('item:清心茶', -1);
      return true;
    }
  };

  handlers[7] = async () => {
    const aim = await select_target_in_storage(
      '催情喷雾',
      (chara_id) =>
        chara_id > 0 && era.get(`base:${chara_id}:性欲`) < lust_border.max,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), ' 变得有点兴奋……']);
      era.add(`base:${aim}:压力`, -500);
      era.add(`base:${aim}:性欲`, 2000);
      era.add('item:催情喷雾', -1);
      return true;
    }
  };

  handlers[10] = async () => {
    const ret = await select_target_in_storage('速效减肥药', (e) =>
      era.get(`status:${e}:发胖`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        ' 不再发胖了……',
      ]);
      era.set(`status:${ret}:发胖`, 0);
      era.set(`base:${ret}:体重偏差`, 3200);
      era.add(`base:${ret}:药物残留`, 50);
      era.add('item:速效减肥药', -1);
      return true;
    }
  };

  handlers[11] = async () => {
    const ret = await select_target_in_storage('头痛飞飞', (e) =>
      era.get(`status:${e}:偏头痛`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        ' 不再偏头痛了……',
      ]);
      era.set(`status:${ret}:偏头痛`, 0);
      era.set(
        `base:${ret}:药物残留`,
        Math.floor(
          (100 +
            20 * era.get(`talent:${ret}:身体素质`) +
            50 * era.get(`cflag:${ret}:种族`)) *
            0.8,
        ),
      );
      era.add(`base:${ret}:体重偏差`, 2000);
      era.add('item:头痛飞飞', -1);
      return true;
    }
  };

  handlers[12] = async () => {
    const ret = await select_target_in_storage(
      '健康茶',
      (e) => !era.get(`status:${e}:健康茶`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        ' 饮用了【健康茶】……',
      ]);
      era.set(`status:${ret}:健康茶`, 1);
      era.add('item:健康茶', -1);
      return true;
    }
  };

  handlers[13] = async () => {
    const ret = await select_target_in_storage(
      '讨厌药',
      (id) =>
        id &&
        !era.get(`status:${id}:讨厌药`) &&
        new LimitLoveStatus(id).is_empty(),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        '给 ',
        chara.get_colored_name(),
        ' 偷偷下了【讨厌药】……',
        { isBr: true },
        chara.sex,
        '对 ',
        get_chara_talk(0).get_colored_name(),
        ' 的好感开始消散……',
      ]);
      era.set(`status:${ret}:讨厌药`, 4);
      era.add(`base:${ret}:药物残留`, 40);
      era.add('item:讨厌药', -1);
      return true;
    }
  };

  handlers[14] = async () => {
    const love_setting = era.get('flag:回合爱慕惩罚');
    const aim = await select_target_in_storage('抑制药', (id) => {
      const love = era.get(`love:${id}`),
        reject = era.get(`cflag:${id}:爱慕暂拒`);
      return (
        id &&
        love > 40 &&
        (love_setting ||
          (love !== 49 && love !== 74 && love !== 89 && love !== 99) ||
          reject === 49 ||
          reject === 74 ||
          reject === 89 ||
          reject === 99) &&
        !era.get(`status:${id}:讨厌药`) &&
        !era.get(`status:${id}:爱意克制`) &&
        new LimitLoveStatus(id).is_empty()
      );
    });
    if (aim !== undefined) {
      const chara = get_chara_talk(aim);
      await era.printAndWait([
        '给 ',
        chara.get_colored_name(),
        ' 偷偷下了【抑制药】……',
        { isBr: true },
        chara.sex,
        '对 ',
        get_chara_talk(0).get_colored_name(),
        ' 的恋心被抑制了……',
      ]);
      new LimitLoveStatus(aim).set(
        era.get(`love:${aim}`),
        era.get('flag:当前回合数') + 4,
      );
      era.set(`love:${aim}`, 40);
      era.add(`base:${aim}:药物残留`, 40);
      era.add('item:抑制药', -1);
      return true;
    }
  };

  handlers[15] = async () => {
    const ret = await select_target_in_storage('量子减肥药', (e) =>
      era.get(`status:${e}:发胖`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        ' 暂时不发胖了……',
      ]);
      era.set(`status:${ret}:发胖`, 0);
      era.add('item:量子减肥药', -1);
      return true;
    }
  };

  handlers[16] = async () => {
    const ret = await select_target_in_storage('布洛芬', (e) =>
      era.get(`status:${e}:偏头痛`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        ' 暂时不偏头痛了……',
      ]);
      era.set(`status:${ret}:偏头痛`, 0);
      era.add('item:布洛芬', -1);
      return true;
    }
  };

  handlers[45] = async () => {
    const aim = await select_target_in_storage(
      '马奶',
      (chara_id) =>
        era.get(`base:${chara_id}:体力`) !==
        era.get(`maxbase:${chara_id}:体力`),
    );
    if (aim !== undefined) {
      const chara = get_chara_talk(aim);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 服用了【马奶】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的 ',
        ...sys_change_attr_and_print(aim, '体力', 400),
      ]);
      sys_change_lust(aim, 800);
      era.add('item:马奶', -1);
      return true;
    }
  };

  handlers[46] = async () => {
    const ret = await select_target_in_storage(
      '人奶',
      (e) => era.get(`base:${e}:体力`) !== era.get(`maxbase:${e}:体力`),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 服用了【人奶】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的 ',
        ...sys_change_attr_and_print(ret, '体力', 150),
      ]);
      sys_change_lust(ret, 300);
      era.add('item:人奶', -1);
      return true;
    }
  };

  handlers[17] = async () => {
    const ret = await select_target_in_storage(
      '生毛膏',
      (e) => era.get(`talent:${e}:腋毛成长`) < 2,
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 使用了【生毛膏】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的腋毛生长得更旺盛了……',
      ]);
      era.add(`talent:${chara.id}:腋毛成长`, 1);
      era.add(`cflag:${chara.id}:腋毛`, 1);
      era.add('item:生毛膏', -1);
      return true;
    }
  };

  handlers[18] = async () => {
    const ret = await select_target_in_storage('脱毛膏', (e) =>
      era.get(`talent:${e}:腋毛成长`),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 使用了【脱毛膏】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的腋毛生长得更慢了……',
      ]);
      const talent = era.add(`talent:${chara.id}:腋毛成长`, -1);
      era.set(
        `cflag:${chara.id}:腋毛`,
        talent ? Math.max(era.get(`cflag:${chara.id}:腋毛`) - 1, 0) : 0,
      );
      era.add('item:脱毛膏', -1);
      return true;
    }
  };

  handlers[19] = async () => {
    const ret = await select_target_in_storage(
      '私处生发膏',
      (e) => era.get(`talent:${e}:阴毛成长`) < 2,
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 使用了【私处生发膏】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的阴毛生长得更旺盛了……',
      ]);
      era.add(`talent:${chara.id}:阴毛成长`, 1);
      era.add(`cflag:${chara.id}:阴毛`, 1);
      era.add('item:私处生发膏', -1);
      return true;
    }
  };

  handlers[20] = async () => {
    const ret = await select_target_in_storage('私处脱毛膏', (e) =>
      era.get(`talent:${e}:阴毛成长`),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 使用了【私处脱毛膏】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的阴毛生长得更慢了……',
      ]);
      const talent = era.add(`talent:${chara.id}:阴毛成长`, -1);
      era.set(
        `cflag:${chara.id}:阴毛`,
        talent ? Math.max(era.get(`cflag:${chara.id}:阴毛`) - 1, 0) : 0,
      );
      era.add('item:私处脱毛膏', -1);
      return true;
    }
  };
};
