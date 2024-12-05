const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { get_nipple_buff } = require('#/system/ero/sys-calc-ero-status');

const add_juel_from_check = require('#/event/ero/snippets/add-juel-from-check');
const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(number,number,HookArg,{check:number})>} handlers */
module.exports = (handlers) => {
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
