const era = require('#/era-electron');

const {
  part_head,
  part_shoulder,
  sys_cm_b_and_cop,
} = require('#/system/ero/sys-calc-distance');
const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { get_nipple_buff } = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');

const add_attr_exp = require('#/event/ero/snippets/add-attr-exp');
const add_juel_from_check = require('#/event/ero/snippets/add-juel-from-check');
const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { base_enum, part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { attr_enum } = require('#/data/train-const');

/** @param {number} cid */
function get_hair_part(cid) {
  switch (era.get(`cflag:${cid}:头发长度`)) {
    case 0:
      return part_head;
    case 1:
      return part_shoulder;
    case 2:
      return part_enum.clitoris;
  }
}

/** @param {number} cid */
function get_hair_base_motions(cid) {
  const ret = [base_enum.same];
  if (era.get(`cflag:${cid}:头发长度`) === 2) {
    ret.push(base_enum.s_tri);
  }
  return ret;
}

/** @param {Record<string,function(number,number,HookArg,{check:number})>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.ask_hair_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.body),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      13,
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    sys_cm_b_and_cop(attacker, defender, get_hair_base_motions(defender), {
      a: part_enum.penis,
      d: get_hair_part(defender),
    });
  };

  handlers[ero_hooks.force_hair_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.body),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      11,
      base_emotion_juel * (1 - extra_flag.check / 50),
    );
    add_juel_from_check(
      defender,
      13,
      base_emotion_juel * (1 - extra_flag.check / 20),
    );
    sys_cm_b_and_cop(
      attacker,
      defender,
      [base_enum.b_same, ...get_hair_base_motions(defender)],
      {
        a: part_enum.penis,
        d: get_hair_part(defender),
      },
    );
  };

  handlers[ero_hooks.hair_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.body),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, 10, base_emotion_juel);
    sys_cm_b_and_cop(
      attacker,
      defender,
      [base_enum.b_same, ...get_hair_base_motions(attacker)],
      {
        a: get_hair_part(attacker),
        d: part_enum.penis,
      },
    );
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
      13,
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.b_same], {
      a: part_enum.penis,
      d: part_enum.breast,
    });
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
      12,
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    add_juel_from_check(
      defender,
      13,
      base_emotion_juel * (1 - extra_flag.check / 20),
    );
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.b_same], {
      a: part_enum.penis,
      d: part_enum.breast,
    });
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
    add_juel(attacker, 10, base_emotion_juel);
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.f_same], {
      a: part_enum.breast,
      d: part_enum.penis,
    });
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
      13,
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    sys_cm_b_and_cop(
      attacker,
      defender,
      [
        base_enum.same,
        base_enum.b_same,
        base_enum.diff,
        base_enum.b_tri,
        base_enum.b_foot,
      ],
      {
        a: part_enum.penis,
        d: part_enum.foot,
      },
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
      12,
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    add_juel_from_check(
      defender,
      13,
      base_emotion_juel * (1 - extra_flag.check / 20),
    );
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.diff], {
      a: part_enum.penis,
      d: part_enum.foot,
    });
  };

  handlers[ero_hooks.foot_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.foot),
      new EroParticipant(defender, part_enum.penis),
    );
    add_attr_exp(attacker, attr_enum.speed, 1);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, 10, base_emotion_juel);
    sys_cm_b_and_cop(
      attacker,
      defender,
      [base_enum.diff, base_enum.d_tri, base_enum.foot],
      {
        a: part_enum.foot,
        d: part_enum.penis,
      },
    );
  };

  handlers[ero_hooks.ask_tail_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.body),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
    add_juel_from_check(
      defender,
      13,
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    sys_cm_b_and_cop(
      attacker,
      defender,
      [base_enum.same, base_enum.b_same, base_enum.b_tri],
      { a: part_enum.penis, d: part_enum.anal },
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
      12,
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    add_juel_from_check(
      defender,
      13,
      base_emotion_juel * (1 - extra_flag.check / 20),
    );
    sys_cm_b_and_cop(
      attacker,
      defender,
      [base_enum.same, base_enum.b_same, base_enum.b_tri],
      { a: part_enum.penis, d: part_enum.anal },
    );
  };

  handlers[ero_hooks.tail_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.body),
      new EroParticipant(defender, part_enum.penis),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, 10, base_emotion_juel);
    sys_cm_b_and_cop(
      attacker,
      defender,
      [base_enum.same, base_enum.f_same, base_enum.d_tri],
      {
        a: part_enum.anal,
        d: part_enum.penis,
      },
    );
  };

  handlers[ero_hooks.tribbing] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.clitoris),
      new EroParticipant(defender, part_enum.clitoris),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel_from_check(
      defender,
      13,
      base_emotion_juel * (1 - extra_flag.check / 10),
    );
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.diff], {
      a: part_enum.clitoris,
      d: part_enum.clitoris,
    });
  };

  handlers[ero_hooks.self_pet_nipple] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.breast, get_nipple_buff(attacker)),
    );
    add_juel_from_check(attacker, 13, base_emotion_juel);
  };

  handlers[ero_hooks.self_hand_job] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.penis),
    );
    add_juel_from_check(attacker, 13, base_emotion_juel);
  };

  handlers[ero_hooks.self_pet_clitoris] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.clitoris),
    );
    add_juel_from_check(attacker, 13, base_emotion_juel);
  };

  handlers[ero_hooks.self_finger_fuck] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.virgin),
    );
    add_juel_from_check(attacker, 13, base_emotion_juel);
  };

  handlers[ero_hooks.self_pet_anal] = (attacker) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hand),
      new EroParticipant(attacker, part_enum.anal),
    );
    add_juel_from_check(attacker, 13, base_emotion_juel);
  };
};
