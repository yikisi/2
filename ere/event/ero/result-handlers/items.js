const era = require('#/era-electron');

const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { remove_item } = require('#/system/ero/sys-calc-ero-item');
const { clean_part } = require('#/system/ero/sys-calc-ero-part');
const { get_nipple_buff } = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { add_palam } = require('#/system/ero/sys-calc-palam');
const { cache_penis_stain, set_stain } = require('#/system/ero/sys-calc-stain');
const {
  get_characters_in_train,
  update_ero_status,
  update_juel_buff,
  update_temp_base,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');

const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');

const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum, medicine_enum } = require('#/data/ero/item-const');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { palam_border } = require('#/data/ero/orgasm-const');
const { part_enum, part_talents } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

const { i18n } = require('#/i18n/selector');

/** @param {Record<string,function(number,number,HookArg,*)>} handlers */
module.exports = (handlers) => {
  /**
   * @param {number} attacker
   * @param _
   * @param __
   * @param {{check:number,part:number,user:number}} extra_flag
   */
  handlers[ero_hooks.use_lubricating_fluid] = (attacker, _, __, extra_flag) => {
    !attacker && era.add('item:润滑液', -1);
    set_stain(extra_flag.user, extra_flag.part, stain_enum.lubricant);
    add_meek_or_hate(extra_flag.user, extra_flag.check, (c) => c / 10);
    add_juel(extra_flag.user, 13, base_emotion_juel / 2);
  };

  /**
   * @param {number} attacker
   * @param __
   * @param ___
   * @param {{check:number,item:number,user:number}} extra_flag
   */
  handlers[ero_hooks.use_medicine] = (attacker, __, ___, extra_flag) => {
    if (!attacker) {
      era.add(`item:${extra_flag.item}`, -1);
    }
    let temp;
    switch (extra_flag.item) {
      case medicine_enum.uma_z:
        if (era.get(`tcvar:${extra_flag.user}:发情`) > 0) {
          era.add(`base:${extra_flag.user}:药物残留`, get_random_value(20, 30));
        } else {
          temp = 0.25;
          era.set(`status:${extra_flag.user}:马跳Z`, 1);
        }
        era.add(
          `nowex:${extra_flag.user}:体力消耗`,
          -get_random_value(200, 400),
        );
        era.add(
          `nowex:${extra_flag.user}:精力消耗`,
          -get_random_value(300, 500),
        );
        break;
      case medicine_enum.uma_s:
        era.set(`status:${extra_flag.user}:马跳S`, 1);
        break;
      case medicine_enum.super_z:
        temp = 0.4;
        era.set(`status:${extra_flag.user}:超马跳Z`, 1);
        break;
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        temp = 0.3;
        clean_part(new EroParticipant(extra_flag.user, part_enum.clitoris));
        era.set(
          `palam:${extra_flag.user}:阴茎快感`,
          Math.max(
            era.get(`palam:${extra_flag.user}:阴茎快感`),
            era.get(`palam:${extra_flag.user}:外阴快感`),
          ),
        );
        era.set(`palam:${extra_flag.user}:外阴快感`, 0);
        era.set(
          `status:${extra_flag.user}:${i18n('zh-CN').tb_item[extra_flag.item]}`,
          1,
        );
        break;
      case medicine_enum.anti_p_s:
        era.set(`status:${extra_flag.user}:短效避孕药`, 1);
        break;
      case medicine_enum.anti_p_l:
        era.set(`status:${extra_flag.user}:长效避孕药`, 4);
        break;
      case medicine_enum.drug_m:
        era.set(`talent:${extra_flag.user}:泌乳`, 2);
        temp =
          era.get(`tcvar:${extra_flag.user}:胸部快感上限`) *
            palam_border.breast -
          era.get(`palam:${extra_flag.user}:胸部快感`);
        if (temp > 0) {
          add_palam(
            extra_flag.user,
            part_enum.breast,
            (temp + 1) *
              (1 + 0.2 * era.get(`talent:${extra_flag.user}:乳房尺寸`)),
          );
        }
        temp = 0;
        break;
      case medicine_enum.drug_p:
        era.set(`status:${extra_flag.user}:排卵期`, 1);
        break;
      case medicine_enum.milk_h:
        era.add(`nowex:${extra_flag.user}:体力消耗`, -150);
        era.add(`nowex:${extra_flag.user}:精力消耗`, -100);
        era.add(`exp:${extra_flag.user}:吸奶量`, 200);
        sys_change_lust(extra_flag.user, 300);
        set_stain(extra_flag.user, part_enum.mouth, stain_enum.milk);
        break;
      case medicine_enum.milk_u:
        era.add(`nowex:${extra_flag.user}:体力消耗`, -400);
        era.add(`nowex:${extra_flag.user}:精力消耗`, -200);
        era.add(`exp:${extra_flag.user}:吸奶量`, 200);
        sys_change_lust(extra_flag.user, 800);
        set_stain(extra_flag.user, part_enum.mouth, stain_enum.milk);
        break;
      case medicine_enum.stop_o:
        era.add(
          `tcvar:${extra_flag.user}:高潮抑制`,
          5 + !era.get(`tcvar:${extra_flag.user}:高潮抑制`),
        );
    }
    if (temp) {
      update_temp_base(extra_flag.user, temp);
    }
    update_ero_status(extra_flag.user);
    add_meek_or_hate(extra_flag.user, extra_flag.check, (c) => c / 10);
    add_juel(extra_flag.user, 13, base_emotion_juel);
  };

  handlers[ero_hooks.condom] = (attacker, defender) => {
    clean_part(new EroParticipant(attacker, part_enum.penis));
    cache_penis_stain(attacker);
    era.set(`tcvar:${attacker}:避孕套`, 1);
    !attacker && era.add('item:避孕套', -1);
    era.get(`status:${defender}:危险期`) &&
      add_juel(defender, 10, base_emotion_juel);
  };

  handlers[ero_hooks.other_condom] = (attacker, defender) => {
    clean_part(new EroParticipant(defender, part_enum.penis));
    cache_penis_stain(defender);
    era.set(`tcvar:${defender}:避孕套`, 1);
    !attacker && era.add('item:避孕套', -1);
  };

  /**
   * @param {number} attacker
   * @param {number} defender
   * @param _
   * @param {{check:number,item:number,owner:number,part:number,stay:number}} extra_flag
   */
  handlers[ero_hooks.use_item] = (attacker, defender, _, extra_flag) => {
    if (extra_flag.item === item_enum.mirror) {
      era.set('tflag:全身镜', 1);
      update_juel_buff(...get_characters_in_train());
      add_juel(defender, 13, base_emotion_juel);
    } else if (extra_flag.part !== 99) {
      sys_do_sex(
        new EroParticipant(extra_flag.owner ?? attacker, part_enum.item),
        new EroParticipant(
          extra_flag.stay ?? defender,
          extra_flag.part,
          extra_flag.part === part_enum.breast ? get_nipple_buff(defender) : 0,
        ),
        extra_flag.item,
      );
      add_juel(
        defender,
        13,
        base_emotion_juel /
          ((2 + era.get(`talent:${defender}:工口意愿`)) *
            (1 +
              era.get(`talent:${defender}:${part_talents[extra_flag.part]}`))),
      );
    } else {
      era.set(
        `tequip:${defender}:${i18n('zh-CN').tb_item[extra_flag.item]}`,
        extra_flag.item,
      );
    }
    if (
      !attacker &&
      extra_flag.stay === void 0 &&
      extra_flag.item !== item_enum.mirror
    ) {
      if (extra_flag.item !== item_enum.electric_stunner) {
        era.add(
          `item:${extra_flag.item}`,
          -1 -
            (extra_flag.part === part_enum.breast &&
              (extra_flag.item === item_enum.clamps ||
                extra_flag.item === item_enum.love_eggs)),
        );
        update_juel_buff(defender);
      }
      add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    }
  };

  /**
   * @param {number} attacker
   * @param _
   * @param __
   * @param {{part:number|string,user:number}} extra_flag
   */
  handlers[ero_hooks.take_off_item] = (attacker, _, __, extra_flag) => {
    if (+extra_flag.part === item_enum.mirror) {
      era.set('tflag:全身镜', 0);
      update_juel_buff(...get_characters_in_train());
    } else {
      remove_item(extra_flag.user, extra_flag.part);
      if (typeof extra_flag.part === 'number') {
        const attacker_part = new EroParticipant(
          attacker,
          part_enum.hand,
          -0.5,
        );
        sys_do_sex(
          attacker_part,
          new EroParticipant(extra_flag.user, extra_flag.part),
        );
        clean_part(attacker_part);
        if (extra_flag.part === part_enum.virgin) {
          era.add(
            `tcvar:${extra_flag.user}:阴道扩张`,
            1 + !era.get(`tcvar:${extra_flag.user}:阴道扩张`),
          );
        } else if (extra_flag.part === part_enum.anal) {
          era.add(
            `tcvar:${extra_flag.user}:肛门扩张`,
            1 + !era.get(`tcvar:${extra_flag.user}:肛门扩张`),
          );
        }
      }
      update_juel_buff(extra_flag.user);
    }
  };

  /**
   * @param {number} attacker
   * @param {number} defender
   * @param {HookArg} hook
   * @param {{item:number,owner:number,part:number}} extra_flag
   */
  handlers[ero_hooks.ask_use_item] = (attacker, defender, hook, extra_flag) => {
    handlers[ero_hooks.use_item](defender, 0, hook, extra_flag);
  };
};
