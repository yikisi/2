const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { get_nipple_buff } = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');

const add_attr_exp = require('#/event/ero/snippets/add-attr-exp');
const add_juel_from_check = require('#/event/ero/snippets/add-juel-from-check');
const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(number,number,HookArg,{check:number})>} handlers */
module.exports = (handlers) => {
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

  handlers[ero_hooks.tribbing] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.clitoris),
      new EroParticipant(defender, part_enum.clitoris),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      '羞耻',
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
  };

  handlers[ero_hooks.self_pet_nipple] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.breast, get_nipple_buff(attacker)),
    );
    add_juel_from_check(attacker, '羞耻', base_emotion_juel);
  };

  handlers[ero_hooks.self_hand_job] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_juel_from_check(attacker, '羞耻', base_emotion_juel);
  };

  handlers[ero_hooks.self_pet_clitoris] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.clitoris),
    );
    add_juel_from_check(attacker, '羞耻', base_emotion_juel);
  };

  handlers[ero_hooks.self_finger_fuck] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.virgin),
    );
    add_juel_from_check(attacker, '羞耻', base_emotion_juel);
  };

  handlers[ero_hooks.self_pet_anal] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.anal),
    );
    add_juel_from_check(attacker, '羞耻', base_emotion_juel);
  };
};
