const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const select_target_in_storage = require('#/page/storage/select-target');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

/** @param {Record<string,function>} handlers */
module.exports = (handlers) => {
  new Array(15)
    .fill(0)
    .forEach(
      (_, i) =>
        (handlers[i + 810] = () => era.printAndWait('仅能在调教中使用')),
    );

  handlers[825] = async () => {
    if (await select_yes_or_no('要丢弃吗？')) {
      await era.printAndWait('丢弃了【透明棉被】……');
      await era.printAndWait('……但是在丢弃之前从里面翻出了几张纸币……');
      era.set('item:透明棉被', 0);
      era.add('flag:当前马币', get_random_value(10, 50));
    }
  };

  [830, 833, 834, 835, 838, 839, 840].forEach(
    (e) => (handlers[e] = () => era.printAndWait('仅能在调教中使用')),
  );

  handlers[841] = async () => {
    if (await select_yes_or_no('要丢弃吗？')) {
      await era.printAndWait('丢弃了【马跳S家庭装】……');
      await era.printAndWait('……然后因为乱丢化学制剂被处以100马币罚款');
      era.set('item:马跳S家庭装', 0);
      era.add('flag:当前马币', -100);
    }
  };

  handlers[836] = async () => {
    const ret = await select_target_in_storage(
      836,
      (e) => !era.get(`talent:${e}:泌乳`),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 服用了【母乳药剂】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 开始分泌母乳了！',
      ]);
      sys_change_lust(ret, 100);
      era.set(`talent:${ret}:泌乳`, 2);
      era.add('item:母乳药剂', -1);
      return true;
    }
  };

  [831, 832].forEach(
    (e) => (handlers[e] = () => era.printAndWait('仅能在调教前使用')),
  );

  handlers[837] = async () => {
    const me = get_chara_talk(0);
    if (me.sex_code === 1) {
      await era.printAndWait('男性不能使用【避孕套溶解剂】……');
    } else if (era.get('status:0:反避孕套')) {
      await era.printAndWait('已经使用过【避孕套溶解剂】了……');
    } else {
      const ret = await select_yes_or_no('要使用【避孕套溶解剂】吗？');
      if (ret) {
        await era.printAndWait([
          me.get_colored_name(),
          ' 将几滴【避孕套溶解剂】滴在了阴唇附近……',
        ]);
        era.set('status:0:反避孕套', 1);
        era.add('item:避孕套溶解剂', -1);
        return true;
      }
    }
  };
};
