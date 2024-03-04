const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_weight,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const select_target_in_storage = require('#/page/storage/select-target');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const LimitLoveStatus = require('#/data/love-limit-status');
const { attr_enum, pressure_border } = require('#/data/train-const');
const { lust_border } = require('#/data/ero/orgasm-const');

/** @param {Record<string,function>} handlers */
module.exports = (handlers) => {
  handlers[200] = async () => {
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

  handlers[700] = async () => {
    const aim = await select_target_in_storage(
      700,
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
      sys_change_motivation(aim, era.get(`cflag:${aim}:干劲`) - 1) &&
        (await era.waitAnyKey());
      era.add('item:蔬菜汁', -1);
      return true;
    }
  };

  handlers[701] = async () => {
    const aim = await select_target_in_storage(
      701,
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
      era.add(`base:${aim}:药物残留`, 10);
      era.add('item:强化青汁', -1);
      return true;
    }
  };

  handlers[702] = async () => {
    const aim = await select_target_in_storage(
      702,
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
      sys_change_motivation(aim, era.get(`cflag:${aim}:干劲`) - 1) &&
        (await era.waitAnyKey());
      era.add(`base:${aim}:药物残留`, 5);
      era.add('item:浓缩咖啡', -1);
      return true;
    }
  };

  handlers[703] = async () => {
    const aim = await select_target_in_storage(
      703,
      (chara_id) =>
        era.get(`maxbase:${chara_id}:精力`) >
          era.get(`base:${chara_id}:精力`) &&
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
      era.add(`base:${aim}:药物残留`, 10);
      era.add('item:提神剂', -1);
      return true;
    }
  };

  handlers[705] = async () => {
    const aim = await select_target_in_storage(
      705,
      (chara_id) => era.get(`base:${chara_id}:压力`) >= pressure_border.unhappy,
    );
    if (undefined !== aim) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), ' 的压力降低了……']);
      sys_change_motivation(
        aim,
        Math.max(era.get(`cflag:${aim}:干劲`) - 1, -2),
      ) && (await era.waitAnyKey());
      era.add(`base:${aim}:压力`, -2500);
      era.add(`base:${aim}:药物残留`, 40);
      era.add('item:705', -1);
      return true;
    }
  };

  handlers[706] = async () => {
    const aim = await select_target_in_storage(
      706,
      (chara_id) => era.get(`base:${chara_id}:性欲`) >= lust_border.itch,
    );
    if (undefined !== aim) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), ' 的性欲降低了……']);
      sys_change_motivation(
        aim,
        Math.max(era.get(`cflag:${aim}:干劲`) - 1, -2),
      ) && (await era.waitAnyKey());
      era.add(`base:${aim}:性欲`, -1500);
      era.add(`base:${aim}:药物残留`, 40);
      era.add('item:706', -1);
      return true;
    }
  };

  handlers[707] = async () => {
    const aim = await select_target_in_storage(
      707,
      (chara_id) =>
        era.get(`base:${chara_id}:压力`) >= pressure_border.unhappy ||
        era.get(`base:${chara_id}:性欲`) >= lust_border.itch,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), ' 变得更冷静了……']);
      era.add(`base:${aim}:压力`, -1200);
      era.add(`base:${aim}:性欲`, -800);
      era.add('item:707', -1);
      return true;
    }
  };

  handlers[850] = async () => {
    const ret = await select_target_in_storage(850, (e) =>
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

  handlers[851] = async () => {
    const ret = await select_target_in_storage(851, (e) =>
      era.get(`status:${e}:头风`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        ' 不再偏头痛了……',
      ]);
      era.set(`status:${ret}:头风`, 0);
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

  handlers[852] = async () => {
    const ret = await select_target_in_storage(
      852,
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

  handlers[853] = async () => {
    const ret = await select_target_in_storage(
      853,
      (e) => e && !era.get(`status:${e}:讨厌药`),
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

  handlers[854] = async () => {
    const aim = await select_target_in_storage(
      854,
      (chara_id) =>
        chara_id &&
        era.get(`love:${chara_id}`) > 40 &&
        new LimitLoveStatus(chara_id).is_empty(),
    );
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

  handlers[860] = async () => {
    const aim = await select_target_in_storage(
      860,
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

  handlers[861] = async () => {
    const ret = await select_target_in_storage(
      861,
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

  handlers[870] = async () => {
    const ret = await select_target_in_storage(
      870,
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

  handlers[871] = async () => {
    const ret = await select_target_in_storage(871, (e) =>
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

  handlers[872] = async () => {
    const ret = await select_target_in_storage(
      872,
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

  handlers[873] = async () => {
    const ret = await select_target_in_storage(873, (e) =>
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
