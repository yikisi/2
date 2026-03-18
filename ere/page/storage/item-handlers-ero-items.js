const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const select_target_in_storage = require('#/page/storage/select-target');

const add_jewel_reward = require('#/event/snippets/add-jewel-reward');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  new Array(13)
    .fill(0)
    .forEach(
      (_, i) =>
        (handlers[i + 70] = () =>
          era.printAndWait([
            { isBr: true },
            i18n().timon.storage.in_ero_item_common_description,
          ])),
    );

  handlers[83] = async () => {
    if (
      await select_yes_or_no(
        i18n().timon.storage.drop_confirm_template.replace(
          '%ITEM%',
          di18n.tb_item.get_name(83),
        ),
      )
    ) {
      await i18n().timon.storage.drop_quilt();
      era.set('item:透明棉被', 0);
      era.add('flag:当前马币', get_random_value(10, 50));
    }
  };

  handlers[84] = handlers[85] = async (iid) => {
    const ret = await select_target_in_storage(
      iid,
      (cid) =>
        cid > 0 &&
        !era.get(`mark:${cid}:淫纹`) &&
        !era.get(`status:${cid}:淫纹贴纸`) &&
        (era.get(`love:${cid}`) >= 25 ||
          era.get(`relation:${cid}:0`) + era.get(`love:${cid}`) * 6 > 225),
    );
    if (ret > 0) {
      i18n().timon.storage.use_inmon_item(
        get_chara_talk(ret),
        di18n.tb_item.get_name(iid),
      );
      era.set(`status:${ret}:淫纹贴纸`, iid - 83);
      if (iid === 85) {
        add_jewel_reward(ret, 10, 1666);
      }
      era.add(`item:${iid}`, -1);
      if (sys_like_chara(ret, 0, -get_random_value(50, 100))) {
        await era.waitAnyKey();
      }
      return true;
    }
  };

  [31, 34, 35, 36, 39, 40, 41].forEach(
    (e) =>
      (handlers[e] = async () => {
        era.println();
        await era.printAndWait(
          i18n().timon.storage.in_ero_item_common_description,
        );
      }),
  );

  handlers[42] = async () => {
    if (
      await select_yes_or_no(
        i18n().timon.storage.drop_confirm_template.replace(
          '%ITEM%',
          di18n.tb_item.get_name(42),
        ),
      )
    ) {
      await i18n().timon.storage.drop_family_uma_s();
      era.set('item:马跳S家庭装', 0);
      era.add('flag:当前马币', -100);
    }
  };

  handlers[37] = async (iid) => {
    const aim = await select_target_in_storage(
      iid,
      (cid) => !era.get(`talent:${cid}:泌乳`),
    );
    if (aim !== void 0) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait(
        i18n().timon.storage.get_chara_use_medicine(
          aim_chara,
          di18n.tb_item.get_name(iid),
        ),
      );
      await era.printAndWait(
        i18n().timon.storage.get_chara_use_milk_medicine(aim_chara),
      );
      sys_change_lust(aim, 100);
      era.set(`talent:${aim}:泌乳`, 2);
      era.add('item:母乳药剂', -1);
      return true;
    }
  };

  [32, 33].forEach(
    (e) =>
      (handlers[e] = () =>
        era.printAndWait([
          { isBr: true },
          i18n().timon.storage.before_ero_item_common_description,
        ])),
  );

  handlers[38] = async () => {
    const me = get_chara_talk(0);
    if (me.sex_code === 1) {
      await era.printAndWait(i18n().timon.storage.anti_condom_for_man);
    } else if (era.get('status:0:反避孕套')) {
      await era.printAndWait(i18n().timon.storage.anti_condom_duplicate);
    } else {
      const ret = await select_yes_or_no(
        i18n().timon.storage.anti_condom_confirm,
      );
      if (ret) {
        await i18n().timon.storage.use_anti_condom(
          me,
          di18n.tb_item.get_name(38),
        );
        era.set('status:0:反避孕套', 1);
        era.add('item:避孕套溶解剂', -1);
        return true;
      }
    }
  };
};
