const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { get_item_action, item_enum } = require('#/data/ero/item-const');
const { get_slang_part_name_key } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

const { __, i18n } = require('#/i18n/selector');

const _desc = {
  c: {
    /**
     * @param {CharaTalk} attacker
     * @param _
     * @param {HookArg} hook
     */
    async [ero_hooks.relax](attacker, _, hook) {
      if (
        sys_check_awake(attacker.id) &&
        !era.get(`tcvar:${attacker.id}:脱力`) > 0 &&
        !era.get(`tcvar:${attacker.id}:失神`) > 0
      ) {
        await i18n().timon.act_desc_c.relax(attacker);
      } else {
        hook.arg = false;
        await i18n().timon.act_desc_c.sleep(attacker);
      }
    },
    /**
     * @param {CharaTalk} attacker
     * @param {CharaTalk} defender
     */
    async [ero_hooks.switch](attacker, defender) {
      if (
        !defender.id &&
        (era.get(`tcvar:${defender.id}:脱力`) > 0 ||
          era.get(`tcvar:${defender.id}:失神`) > 0)
      ) {
        await i18n().timon.act_desc_c.passive_switch(attacker);
      } else {
        await i18n().timon.act_desc_c.active_switch(attacker, defender);
      }
    },
    /**
     * @param {CharaTalk} attacker
     * @param {CharaTalk} defender
     * @param _
     * @param {{part:number,user:number}} extra
     */
    async [ero_hooks.use_lubricating_fluid](attacker, defender, _, extra) {
      await (
        extra.user === attacker.id
          ? i18n().timon.act_desc_c.use_lubricating_fluid_self
          : i18n().timon.act_desc_c.use_lubricating_fluid
      )(attacker, defender, {
        color: buff_colors[2],
        content: i18n().body_part[get_slang_part_name_key(extra.part)],
      });
    },
    /**
     * @param {CharaTalk} attacker
     * @param {CharaTalk} defender
     * @param _
     * @param {{item:number,user:number}} extra
     */
    async [ero_hooks.use_medicine](attacker, defender, _, extra) {
      await (
        extra.user === attacker.id
          ? i18n().timon.act_desc_c.use_medicine_self
          : i18n().timon.act_desc_c.use_medicine
      )(attacker, defender, {
        color: buff_colors[2],
        content: i18n().tb_item[extra.item],
      });
    },
    /**
     * @param {CharaTalk} attacker
     * @param {CharaTalk} defender
     * @param _
     * @param {{item:number,[owner]:number,part:number,[stay]:number}} extra
     */
    async [ero_hooks.use_item](attacker, defender, _, extra) {
      if (extra.stay !== void 0) {
        await i18n().timon.act_desc_c.item_effect(
          get_chara_talk(extra.owner),
          get_chara_talk(extra.stay),
          {
            content: i18n().body_part[get_slang_part_name_key(extra.part)],
            color: buff_colors[2],
          },
          __(`body_part.${get_item_action(extra.item, extra.part)}`),
          { content: i18n().tb_item[extra.item], color: buff_colors[2] },
        );
      } else if (extra.item === item_enum.electric_stunner) {
        await i18n().timon.act_desc_c.use_electric_stunner(attacker, defender, {
          content: i18n().body_part[get_slang_part_name_key(extra.part)],
          color: buff_colors[2],
        });
      } else if (extra.item === item_enum.mirror) {
        await i18n().timon.act_desc_c.use_mirror(attacker);
      } else if (extra.part === 99) {
        await i18n().timon.act_desc_c.equip_other_item(attacker, defender, {
          content: i18n().tb_item[extra.item],
          color: buff_colors[2],
        });
      } else {
        await i18n().timon.act_desc_c.equip_item(
          attacker,
          defender,
          {
            content: i18n().body_part[get_slang_part_name_key(extra.part)],
            color: buff_colors[2],
          },
          __(`body_part.${get_item_action(extra.item, extra.part)}`),
          { content: i18n().tb_item[extra.item], color: buff_colors[2] },
        );
      }
    },
    /**
     * @param {CharaTalk} attacker
     * @param {CharaTalk} defender
     * @param _
     * @param {{item:number,owner:number,part:number|string,user:number}} extra
     */
    async [ero_hooks.take_off_item](attacker, defender, _, extra) {
      if (+extra.part === item_enum.mirror) {
        await i18n().timon.act_desc_c.take_off_mirror(attacker);
      } else if (extra.user === attacker.id) {
        await i18n().timon.act_desc_c.take_off_item_self(
          attacker,
          {
            content: i18n().body_part[get_slang_part_name_key(extra.part)],
            color: buff_colors[2],
          },
          { content: i18n().tb_item[extra.item], color: buff_colors[2] },
        );
      } else {
        await i18n().timon.act_desc_c.take_off_item(
          attacker,
          defender,
          {
            content: i18n().body_part[get_slang_part_name_key(extra.part)],
            color: buff_colors[2],
          },
          { content: i18n().tb_item[extra.item], color: buff_colors[2] },
        );
      }
    },
    /**
     * @param {CharaTalk} attacker
     * @param {CharaTalk} defender
     * @param {HookArg} hook
     * @param extra
     */
    async [ero_hooks.ask_use_item](attacker, defender, hook, extra) {
      await _desc.c[ero_hooks.use_item](defender, attacker, hook, extra);
    },
  },
  r: {},
  s: {},
};

[
  ero_hooks.go_on,
  ero_hooks.kiss,
  ero_hooks.french_kiss,
  ero_hooks.lure,
  ero_hooks.talk,
  ero_hooks.resist,
  ero_hooks.gargle,
  ero_hooks.wipe_body,
  ero_hooks.pet_ear,
  ero_hooks.pull_ear,
  ero_hooks.pet_breast,
  ero_hooks.pet_nipple,
  ero_hooks.pet_clitoris,
  ero_hooks.finger_fuck,
  ero_hooks.prepare_virgin,
  ero_hooks.stimulate_g_spot_by_finger,
  ero_hooks.pet_anal,
  ero_hooks.prepare_anal,
  ero_hooks.pet_leg,
  ero_hooks.pet_tail,
  ero_hooks.pull_tail,
  ero_hooks.cunnilingus,
  ero_hooks.ask_cunnilingus,
  ero_hooks.force_cunnilingus,
  ero_hooks.suck_virgin,
  ero_hooks.ask_suck_virgin,
  ero_hooks.force_suck_virgin,
  ero_hooks.ask_blow_job,
  ero_hooks.ask_deep_blow_job,
  ero_hooks.force_blow_job,
  ero_hooks.force_deep_blow_job,
  ero_hooks.blow_job,
  ero_hooks.deep_blow_job,
  ero_hooks.ask_hand_job,
  ero_hooks.ask_hand_and_blow_job,
  ero_hooks.force_hand_job,
  ero_hooks.force_hand_and_blow_job,
  ero_hooks.hand_job,
  ero_hooks.hand_and_blow_job,
  ero_hooks.ask_tit_job,
  ero_hooks.ask_tit_and_blow_job,
  ero_hooks.fuck_tit,
  ero_hooks.fuck_tit_and_mouth,
  ero_hooks.tit_job,
  ero_hooks.tit_and_blow_job,
  ero_hooks.suck_anal,
  ero_hooks.suck_nipple,
  ero_hooks.bite_nipple,
  ero_hooks.ask_milk_and_hand_job,
  ero_hooks.milk,
  ero_hooks.ask_bite_nipple,
  ero_hooks.milk_and_hand_job,
  ero_hooks.ask_non_penetrative,
  ero_hooks.non_penetrative,
  ero_hooks.sixty_nine,
  ero_hooks.ask_hair_fuck,
  ero_hooks.force_hair_fuck,
  ero_hooks.hair_fuck,
  ero_hooks.ask_armpit_intercourse,
  ero_hooks.force_armpit_intercourse,
  ero_hooks.armpit_intercourse,
  ero_hooks.ask_foot_job,
  ero_hooks.force_foot_job,
  ero_hooks.foot_job,
  ero_hooks.ask_tail_job,
  ero_hooks.force_tail_job,
  ero_hooks.tail_job,
  ero_hooks.tribbing,
  ero_hooks.self_pet_nipple,
  ero_hooks.self_hand_job,
  ero_hooks.self_pet_clitoris,
  ero_hooks.self_finger_fuck,
  ero_hooks.self_pet_anal,
  ero_hooks.missionary_anal_sex,
  ero_hooks.missionary,
  ero_hooks.doggy_style_anal_sex,
  ero_hooks.doggy_style,
  ero_hooks.sitting_anal_sex,
  ero_hooks.sitting,
  ero_hooks.hug_sitting_anal_sex,
  ero_hooks.hug_sitting,
  ero_hooks.standing_anal_sex,
  ero_hooks.standing,
  ero_hooks.hug_standing_anal_sex,
  ero_hooks.hug_standing,
  ero_hooks.suspended_congress_anal_sex,
  ero_hooks.suspended_congress,
  ero_hooks.fucked_suspended_congress_anal_sex,
  ero_hooks.fucked_suspended_congress,
  ero_hooks.hug_suspended_congress_anal_sex,
  ero_hooks.hug_suspended_congress,
  ero_hooks.ask_cowgirl_anal_sex,
  ero_hooks.ask_cowgirl,
  ero_hooks.ask_stimulate_glans_by_anal,
  ero_hooks.ask_stimulate_glans_by_virgin,
  ero_hooks.stimulate_g_spot,
  ero_hooks.stimulate_large_intestine,
  ero_hooks.stimulate_womb,
  ero_hooks.ask_fuck_anal,
  ero_hooks.ask_fuck,
  ero_hooks.cowgirl_anal_sex,
  ero_hooks.cowgirl,
  ero_hooks.stimulate_glans_by_anal,
  ero_hooks.stimulate_glans_by_virgin,
  ero_hooks.ask_stimulate_g_spot,
  ero_hooks.ask_stimulate_large_intestine,
  ero_hooks.ask_stimulate_womb,
  ero_hooks.insult,
  ero_hooks.ask_insult,
  ero_hooks.hit_anal,
  ero_hooks.hit_anal_hard,
  ero_hooks.ask_hit_anal,
  ero_hooks.hit_breast,
  ero_hooks.hit_breast_hard,
  ero_hooks.ask_hit_breast,
  ero_hooks.hit_face,
  ero_hooks.hit_face_hard,
  ero_hooks.hit_face_by_penis,
  ero_hooks.ask_hit_face,
  ero_hooks.virgin_foot_job,
  ero_hooks.ask_virgin_foot_job,
  ero_hooks.condom,
  ero_hooks.other_condom,
].forEach(
  (act) =>
    (_desc.c[act] = (atk, def, hook) =>
      i18n().timon.act_desc_c[ero_hooks.keys[act]](atk, def, hook.arg)),
);

[
  ero_hooks.ask_supporter_prepare_virgin,
  ero_hooks.ask_double_suck_nipple,
  ero_hooks.double_suck_nipple,
  ero_hooks.ask_double_blow_job,
  ero_hooks.double_blow_job,
  ero_hooks.ask_double_cunnilingus,
  ero_hooks.double_cunnilingus,
  ero_hooks.ask_double_suck_virgin,
  ero_hooks.double_suck_virgin,
  ero_hooks.ask_double_tit_job,
  ero_hooks.double_tit_job,
  ero_hooks.ask_double_cowgirl,
  ero_hooks.ask_double_fuck,
  ero_hooks.ask_double_penetration,
  ero_hooks.ask_spit_roast,
  ero_hooks.ask_spit_roast_anal_sex,
  ero_hooks.ask_cunnilingus_with_fucking,
  ero_hooks.fuck_69,
  ero_hooks.double_cowgirl,
  ero_hooks.double_fuck,
  ero_hooks.double_penetration,
  ero_hooks.spit_roast,
  ero_hooks.spit_roast_anal_sex,
].forEach(
  (act) =>
    (_desc.c[act] = (atk, def, hook, extra) =>
      i18n().timon.act_desc_c[ero_hooks.keys[act]](
        atk,
        def,
        get_chara_talk(extra.supporter),
        hook.arg,
      )),
);

[
  ero_hooks.kiss,
  ero_hooks.french_kiss,
  ero_hooks.relax,
  ero_hooks.talk,
  ero_hooks.force_cunnilingus,
  ero_hooks.force_suck_virgin,
  ero_hooks.force_blow_job,
  ero_hooks.force_deep_blow_job,
  ero_hooks.force_hand_job,
  ero_hooks.force_hand_and_blow_job,
  ero_hooks.fuck_tit,
  ero_hooks.force_hair_fuck,
  ero_hooks.force_foot_job,
  ero_hooks.force_tail_job,
].forEach(
  (act) =>
    (_desc.r[act] = (atk, def, hook) =>
      i18n().timon.act_desc_r[ero_hooks.keys[act]](atk, def, hook.arg)),
);

[
  ero_hooks.kiss,
  ero_hooks.french_kiss,
  ero_hooks.pet_ear,
  ero_hooks.pull_ear,
  ero_hooks.pet_breast,
  ero_hooks.pet_nipple,
  ero_hooks.pet_clitoris,
  ero_hooks.finger_fuck,
  ero_hooks.prepare_virgin,
  ero_hooks.stimulate_g_spot_by_finger,
  ero_hooks.pet_anal,
  ero_hooks.prepare_anal,
  ero_hooks.pet_leg,
  ero_hooks.pet_tail,
  ero_hooks.pull_tail,
  ero_hooks.cunnilingus,
  ero_hooks.force_deep_blow_job,
  ero_hooks.blow_job,
  ero_hooks.deep_blow_job,
  ero_hooks.hand_job,
  ero_hooks.hand_and_blow_job,
  ero_hooks.fuck_tit,
  ero_hooks.tit_job,
  ero_hooks.tit_and_blow_job,
  ero_hooks.bite_nipple,
  ero_hooks.force_armpit_intercourse,
  ero_hooks.force_foot_job,
  ero_hooks.foot_job,
  ero_hooks.tail_job,
  ero_hooks.missionary,
  ero_hooks.missionary_anal_sex,
  ero_hooks.doggy_style,
  ero_hooks.doggy_style_anal_sex,
  ero_hooks.stimulate_g_spot,
  ero_hooks.stimulate_womb,
  ero_hooks.cowgirl,
  ero_hooks.cowgirl_anal_sex,
  ero_hooks.stimulate_glans_by_virgin,
  ero_hooks.stimulate_glans_by_anal,
].forEach(
  (act) =>
    (_desc.s[act] = (atk, def, hook) =>
      i18n().timon.act_desc_s[ero_hooks.keys[act]](atk, def, hook.arg)),
);

module.exports = _desc;
