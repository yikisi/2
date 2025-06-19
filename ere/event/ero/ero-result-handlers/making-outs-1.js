const era = require('#/era-electron');

const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { clean_part_without_item } = require('#/system/ero/sys-calc-ero-part');
const {
  check_lubrication,
  get_nipple_buff,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { clean_part_stain } = require('#/system/ero/sys-calc-stain');

const add_attr_exp = require('#/event/ero/snippets/add-attr-exp');
const add_juel_from_check = require('#/event/ero/snippets/add-juel-from-check');
const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');
const print_ero_gif = require('#/event/ero/snippets/print-ero-gif');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const {
  motion_enum,
  part_enum,
  towards_enum,
} = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {number} attacker
 * @param {number} defender
 */
function common_blow_job(attacker, defender) {
  clean_part_stain(
    attacker,
    part_enum.mouth,
    stain_enum.saliva,
    stain_enum.semen,
  );
  const remove_stains = clean_part_stain(
    defender,
    part_enum.penis,
    stain_enum.saliva,
    stain_enum.semen,
  );
  if (remove_stains > 0) {
    add_juel(
      defender,
      '顺从',
      (base_emotion_juel * (Math.min(remove_stains, 6) + 4)) / 5,
    );
  }
}

/** @param {Record<string,function(number,number,HookArg,{check:number})>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.pet_ear] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.body),
    );
    add_meek_or_hate(
      defender,
      extra_flag.check,
      (c) => c / (1 + 4 * !era.get(`cflag:${defender}:种族`)),
    );
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.pull_ear] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.body, -0.4),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.body, -0.4),
    );
    add_meek_or_hate(
      defender,
      extra_flag.check,
      (c) => c / (1 + 4 * !era.get(`cflag:${defender}:种族`)),
    );
    add_juel(
      defender,
      '痛苦',
      base_emotion_juel / (1 + era.get(`talent:${defender}:喜欢痛苦`)),
    );
  };

  handlers[ero_hooks.pet_breast] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.breast),
    );
    add_meek_or_hate(
      defender,
      extra_flag.check,
      (c) => c / (1 + (era.get(`cflag:${defender}:性别`) === 1)),
    );
  };

  handlers[ero_hooks.pet_nipple] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.breast, get_nipple_buff(defender)),
    );
    add_meek_or_hate(
      defender,
      extra_flag.check,
      (c) => c / 10 + 10 * get_nipple_buff(defender),
    );
  };

  handlers[ero_hooks.pet_clitoris] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.clitoris),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
  };

  handlers[ero_hooks.finger_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.virgin),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
  };

  handlers[ero_hooks.stimulate_g_spot_by_finger] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.virgin, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
  };

  handlers[ero_hooks.prepare_virgin] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.virgin, 0.1),
    );
    era.add(
      `tcvar:${defender}:阴道扩张`,
      1 + !era.get(`tcvar:${defender}:阴道扩张`),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(
      defender,
      '痛苦',
      base_emotion_juel /
        ((1 + 9 * check_lubrication(defender, part_enum.virgin)) *
          Math.max(era.get(`talent:${defender}:淫壶`) + 1, 1)),
    );
  };

  handlers[ero_hooks.pet_anal] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.anal),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
  };

  handlers[ero_hooks.prepare_anal] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.anal, 0.1),
    );
    era.add(
      `tcvar:${defender}:肛门扩张`,
      1 + !era.get(`tcvar:${defender}:肛门扩张`),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(
      defender,
      '痛苦',
      base_emotion_juel /
        ((1 + 9 * check_lubrication(defender, part_enum.anal)) *
          Math.max(era.get(`talent:${defender}:淫臀`) + 1, 1)),
    );
  };

  handlers[ero_hooks.pet_leg] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.body),
    );
    add_meek_or_hate(
      defender,
      extra_flag.check,
      (c) => c / (1 + 4 * !era.get(`cflag:${defender}:种族`)),
    );
  };

  handlers[ero_hooks.pet_tail] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.body),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c);
  };

  handlers[ero_hooks.pull_tail] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.body, -0.4),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.body, -0.4),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c);
    add_juel(
      defender,
      '痛苦',
      base_emotion_juel / (1 + era.get(`talent:${defender}:喜欢痛苦`)),
    );
  };

  handlers[ero_hooks.cunnilingus] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.clitoris),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.ask_cunnilingus] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(attacker, part_enum.clitoris),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_cunnilingus] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.clitoris),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_meek_or_hate(defender, extra_flag.check - 10, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.suck_virgin] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.virgin),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.ask_suck_virgin] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(attacker, part_enum.virgin),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_suck_virgin] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.virgin),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_meek_or_hate(defender, extra_flag.check - 10, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.ask_blow_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(attacker, part_enum.penis),
    );
    clean_part_stain(
      attacker,
      part_enum.penis,
      stain_enum.saliva,
      stain_enum.semen,
    );
    clean_part_stain(
      defender,
      part_enum.mouth,
      stain_enum.saliva,
      stain_enum.semen,
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.ask_deep_blow_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.2),
      new EroParticipant(attacker, part_enum.penis, 0.2),
    );
    clean_part_stain(
      attacker,
      part_enum.penis,
      stain_enum.saliva,
      stain_enum.semen,
    );
    clean_part_stain(
      defender,
      part_enum.mouth,
      stain_enum.saliva,
      stain_enum.semen,
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(
      defender,
      '痛苦',
      base_emotion_juel /
        ((1 + era.get(`talent:${defender}:喜欢痛苦`)) *
          Math.max(era.get(`talent:${defender}:淫口`) + 1, 1)),
    );
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_blow_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_meek_or_hate(defender, extra_flag.check - 10, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_deep_blow_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, 0.2),
      new EroParticipant(defender, part_enum.mouth, -0.2),
    );
    add_meek_or_hate(defender, extra_flag.check - 10, (c) => c / 10);
    add_juel(
      defender,
      '痛苦',
      base_emotion_juel /
        ((1 + era.get(`talent:${defender}:喜欢痛苦`)) *
          Math.max(era.get(`talent:${defender}:淫口`) + 1, 1)),
    );
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.blow_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
    common_blow_job(attacker, defender);
  };

  handlers[ero_hooks.deep_blow_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.2),
      new EroParticipant(defender, part_enum.penis, 0.2),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
    common_blow_job(attacker, defender);
  };

  handlers[ero_hooks.ask_hand_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.hand),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.ask_hand_and_blow_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.hand),
      new EroParticipant(attacker, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_hand_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.hand),
    );
    add_meek_or_hate(defender, extra_flag.check - 10, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_hand_and_blow_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, -0.3),
      new EroParticipant(defender, part_enum.hand),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, -0.3),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_meek_or_hate(defender, extra_flag.check - 10, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.hand_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.hand_and_blow_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.ask_tit_job] = (attacker, defender, _, extra_flag) => {
    const breast = new EroParticipant(defender, part_enum.breast);
    clean_part_without_item(breast);
    sys_do_sex(breast, new EroParticipant(attacker, part_enum.penis));
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.ask_tit_and_blow_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    const breast = new EroParticipant(defender, part_enum.breast);
    clean_part_without_item(breast);
    sys_do_sex(breast, new EroParticipant(attacker, part_enum.penis));
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.fuck_tit] = (attacker, defender, _, extra_flag) => {
    const breast = new EroParticipant(defender, part_enum.breast);
    clean_part_without_item(breast);
    sys_do_sex(new EroParticipant(attacker, part_enum.penis), breast);
    add_meek_or_hate(defender, extra_flag.check - 10, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.fuck_tit_and_mouth] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    const breast = new EroParticipant(defender, part_enum.breast);
    clean_part_without_item(breast);
    sys_do_sex(new EroParticipant(attacker, part_enum.penis, -0.3), breast);
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, -0.3),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_meek_or_hate(defender, extra_flag.check - 10, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.tit_job] = (attacker, defender, _, extra_flag) => {
    const breast = new EroParticipant(attacker, part_enum.breast);
    clean_part_without_item(breast);
    sys_do_sex(breast, new EroParticipant(defender, part_enum.penis));
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.tit_and_blow_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.breast),
      new EroParticipant(defender, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.suck_anal] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.anal),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      (base_emotion_juel * (1 - extra_flag.check / 50)) /
        Math.max(era.get(`talent:${defender}:淫臀`), 1),
    );
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.suck_nipple] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.breast, get_nipple_buff(defender)),
    );
    add_meek_or_hate(
      defender,
      extra_flag.check,
      (c) => c / 10 + 10 * get_nipple_buff(defender),
    );
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.bite_nipple] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit, -0.5),
      new EroParticipant(
        defender,
        part_enum.breast,
        get_nipple_buff(defender) / 2 - 0.5,
      ),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(
        defender,
        part_enum.breast,
        get_nipple_buff(defender) / 2 - 0.5,
      ),
    );
    add_meek_or_hate(
      defender,
      extra_flag.check,
      (c) => c / 10 + 10 * get_nipple_buff(defender),
    );
    add_juel(
      defender,
      '痛苦',
      base_emotion_juel /
        ((1 + era.get(`talent:${defender}:喜欢痛苦`)) *
          Math.max(era.get(`talent:${defender}:淫壶`) + 1, 1)),
    );
  };

  handlers[ero_hooks.ask_milk_and_hand_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.breast, 0.5),
      new EroParticipant(attacker, part_enum.mouth),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.hand),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(
      defender,
      extra_flag.check,
      (c) => c / 10 + 10 * get_nipple_buff(defender),
    );
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.milk] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.breast, 0.5),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.ask_bite_nipple] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.hit, -0.5),
      new EroParticipant(
        attacker,
        part_enum.breast,
        get_nipple_buff(attacker) / 2 - 0.5,
      ),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(
        attacker,
        part_enum.breast,
        get_nipple_buff(attacker) / 2 - 0.5,
      ),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.milk_and_hand_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.breast, 0.5),
      new EroParticipant(defender, part_enum.mouth),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.ask_non_penetrative] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    print_ero_gif('女上位素股', extra_flag.shown);
    sys_do_sex(
      new EroParticipant(defender, part_enum.body, -0.4),
      new EroParticipant(attacker, part_enum.penis, -0.4),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.clitoris, -0.4),
      new EroParticipant(attacker, part_enum.penis, -0.4),
    );
    add_attr_exp(defender, attr_enum.speed, 1.2);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.non_penetrative] = (attacker, defender, _, extra_flag) => {
    print_ero_gif('女上位素股', extra_flag.shown);
    sys_do_sex(
      new EroParticipant(attacker, part_enum.body, -0.4),
      new EroParticipant(defender, part_enum.penis, -0.4),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.clitoris, -0.4),
      new EroParticipant(defender, part_enum.penis, -0.4),
    );
    add_attr_exp(attacker, attr_enum.speed, 1.2);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.sixty_nine] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(
        attacker,
        get_penis_size(attacker) > 0 ? part_enum.penis : part_enum.clitoris,
      ),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(
        defender,
        get_penis_size(defender) > 0 ? part_enum.penis : part_enum.clitoris,
      ),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    era.set(`tcvar:${attacker}:体位`, motion_enum.rev);
    era.set(`tcvar:${defender}:体位`, motion_enum.lie);
    era.set(`tcvar:${attacker}:朝向`, towards_enum.right);
    era.set(`tcvar:${defender}:朝向`, towards_enum.right);
  };

  handlers[ero_hooks.ask_hair_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.body),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_hair_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.body),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '痛苦',
      base_emotion_juel * (1 - extra_flag.check / 50),
    );
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 20),
    );
  };

  handlers[ero_hooks.hair_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.body),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.ask_armpit_intercourse] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.body),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_armpit_intercourse] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit, -0.5),
      new EroParticipant(defender, part_enum.body, -0.4),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.body, -0.4),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 20),
    );
  };

  handlers[ero_hooks.armpit_intercourse] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.body),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.ask_foot_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.foot),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_attr_exp(defender, attr_enum.speed, 1);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_foot_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit, -0.5),
      new EroParticipant(defender, part_enum.foot, -0.4),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.foot, -0.4),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 20),
    );
  };

  handlers[ero_hooks.foot_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.foot),
      new EroParticipant(defender, part_enum.penis),
    );
    add_attr_exp(attacker, attr_enum.speed, 1);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.ask_tail_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.body),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.force_tail_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit, -0.5),
      new EroParticipant(defender, part_enum.body, -0.4),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.body, -0.4),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
    add_juel_from_check(
      defender,
      '恐惧',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 20),
    );
  };

  handlers[ero_hooks.tail_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.body),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
  };
};
