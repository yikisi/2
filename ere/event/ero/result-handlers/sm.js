const era = require('#/era-electron');

const {
  sys_change_motion_by_base,
  sys_cm_b_and_cop,
} = require('#/system/ero/sys-calc-distance');
const sys_do_sex = require('#/system/ero/sys-calc-ero');
const {
  clean_all_parts_without_item,
  clean_part,
} = require('#/system/ero/sys-calc-ero-part');
const { get_action_base_check } = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { count_part_stain_in_range } = require('#/system/ero/sys-calc-stain');

const add_attr_exp = require('#/event/ero/snippets/add-attr-exp');
const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { base_enum, part_enum, part_talents } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {number} cid
 * @param {number} parts
 * @returns {number}
 */
function get_sm_check(cid, ...parts) {
  return (
    get_action_base_check(cid) +
    50 * era.get(`talent:${cid}:喜欢痛苦`) +
    25 * era.get(`talent:${cid}:圣母`) +
    (20 *
      parts.reduce(
        (p, c) => p + (era.get(`talent:${cid}:${part_talents[c]}`) === 2),
        0,
      )) /
      parts.length +
    10 * era.get('talent:0:抖S') -
    50 * (era.get('tflag:强奸') === 0)
  );
}

/** @param {Record<string,function(number,number,HookArg,{check:number})>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.insult] = (attacker, defender) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.abuse),
      new EroParticipant(defender, part_enum.masochism),
    );
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_action_base_check(defender) +
          50 * era.get(`talent:${defender}:喜欢责骂`) +
          50 * (era.get(`tflag:主导权`) === defender) +
          25 * era.get(`talent:${defender}:圣母`) +
          10 * era.get('talent:0:抖S') -
          50 * (era.get('tflag:强奸') === 0) -
          50,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_juel(
      defender,
      13,
      base_emotion_juel /
        ((era.get(`talent:${defender}:喜欢责骂`) + 1) *
          (era.get(`talent:${defender}:圣母`) + 1)),
    );
  };

  handlers[ero_hooks.ask_insult] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.abuse),
      new EroParticipant(attacker, part_enum.masochism),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
    add_juel(defender, 13, base_emotion_juel / 2);
    add_juel(attacker, 10, base_emotion_juel);
  };

  handlers[ero_hooks.hit_anal] = (attacker, defender) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.anal),
    );
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_sm_check(defender, part_enum.anal) +
          10 *
            count_part_stain_in_range(
              defender,
              part_enum.hand,
              stain_enum.dirt,
              undefined,
              (e) => e + 1,
            ) -
          50,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_attr_exp(attacker, attr_enum.strength, 1);
    add_juel(
      defender,
      11,
      base_emotion_juel /
        ((era.get(`talent:${defender}:喜欢痛苦`) + 1) *
          Math.max(era.get(`talent:${defender}:淫臀`) + 1, 1)),
    );
    sys_cm_b_and_cop(
      attacker,
      defender,
      [
        base_enum.same,
        base_enum.b_same,
        base_enum.diff,
        base_enum.s_tri,
        base_enum.b_tri,
        base_enum.d_tri,
      ],
      {
        a: part_enum.hand,
        d: part_enum.anal,
      },
    );
  };

  handlers[ero_hooks.hit_anal_hard] = (attacker, defender) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.anal, 0.5),
    );
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_sm_check(defender, part_enum.anal) +
          10 *
            count_part_stain_in_range(
              defender,
              part_enum.hand,
              stain_enum.dirt,
              undefined,
              (e) => e + 1,
            ) -
          60,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_juel(
      defender,
      11,
      (base_emotion_juel * 3) /
        ((era.get(`talent:${defender}:喜欢痛苦`) + 1) *
          Math.max(era.get(`talent:${defender}:淫臀`) + 1, 1) *
          2),
    );
    add_attr_exp(attacker, attr_enum.strength, 1.2);
    sys_cm_b_and_cop(
      attacker,
      defender,
      [
        base_enum.same,
        base_enum.b_same,
        base_enum.diff,
        base_enum.s_tri,
        base_enum.b_tri,
        base_enum.d_tri,
      ],
      {
        a: part_enum.hand,
        d: part_enum.anal,
      },
    );
  };

  handlers[ero_hooks.ask_hit_anal] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.hit),
      new EroParticipant(attacker, part_enum.anal),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
    add_juel(defender, 13, base_emotion_juel / 2);
    add_juel(attacker, 10, base_emotion_juel);
    add_attr_exp(defender, attr_enum.strength, 1);
    sys_cm_b_and_cop(attacker, defender, [base_enum.f_same], {
      a: part_enum.anal,
      d: part_enum.hand,
    });
  };

  handlers[ero_hooks.hit_breast] = (attacker, defender) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.breast),
    );
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_sm_check(defender, part_enum.breast) +
          10 *
            count_part_stain_in_range(
              defender,
              part_enum.hand,
              stain_enum.lubricant,
              stain_enum.dirt,
              (e) => 2 + e,
            ) -
          50,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_juel(
      defender,
      11,
      base_emotion_juel /
        ((era.get(`talent:${defender}:喜欢痛苦`) + 1) *
          Math.max(era.get(`talent:${defender}:淫乳`) + 1, 1)),
    );
    add_attr_exp(attacker, attr_enum.strength, 1);
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.s_tri], {
      a: part_enum.hand,
      d: part_enum.breast,
    });
  };

  handlers[ero_hooks.hit_breast_hard] = (attacker, defender) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.breast, 0.5),
    );
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_sm_check(defender, part_enum.breast) +
          10 *
            count_part_stain_in_range(
              defender,
              part_enum.hand,
              stain_enum.lubricant,
              stain_enum.dirt,
              (e) => 2 + e,
            ) -
          60,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_juel(
      defender,
      11,
      (base_emotion_juel * 3) /
        ((era.get(`talent:${defender}:喜欢痛苦`) + 1) *
          Math.max(era.get(`talent:${defender}:淫乳`) + 1, 1) *
          2),
    );
    add_attr_exp(attacker, attr_enum.strength, 1.2);
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.s_tri], {
      a: part_enum.hand,
      d: part_enum.breast,
    });
  };

  handlers[ero_hooks.ask_hit_breast] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.hit),
      new EroParticipant(attacker, part_enum.breast),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
    add_juel(defender, 13, base_emotion_juel / 2);
    add_juel(attacker, 10, base_emotion_juel);
    add_attr_exp(defender, attr_enum.strength, 1);
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.s_tri], {
      a: part_enum.breast,
      d: part_enum.hand,
    });
  };

  handlers[ero_hooks.hit_face] = (attacker, defender) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.body),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.mouth, -0.5),
    );
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_sm_check(defender, part_enum.mouth, part_enum.body) +
          10 *
            count_part_stain_in_range(
              defender,
              part_enum.hand,
              stain_enum.lubricant,
              stain_enum.anal,
              (e) => 1 + e,
            ) -
          50,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_juel(
      defender,
      11,
      (base_emotion_juel * 4) /
        ((era.get(`talent:${defender}:喜欢痛苦`) + 1) *
          Math.max(era.get(`talent:${defender}:淫口`) + 1, 1) *
          Math.max(era.get(`talent:${defender}:淫身`) + 1, 1)),
    );
    add_attr_exp(attacker, attr_enum.strength, 1);
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.s_tri], {
      a: part_enum.hand,
      d: part_enum.mouth,
    });
  };

  handlers[ero_hooks.hit_face_hard] = (attacker, defender) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit, 0.5),
      new EroParticipant(defender, part_enum.body, 0.5),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit, 0.5),
      new EroParticipant(defender, part_enum.mouth),
    );
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_sm_check(defender, part_enum.mouth, part_enum.body) +
          10 *
            count_part_stain_in_range(
              defender,
              part_enum.hand,
              stain_enum.lubricant,
              stain_enum.anal,
              (e) => 1 + e,
            ) -
          60,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_juel(
      defender,
      11,
      (base_emotion_juel * 6) /
        ((era.get(`talent:${defender}:喜欢痛苦`) + 1) *
          Math.max(era.get(`talent:${defender}:淫口`) + 1, 1) *
          Math.max(era.get(`talent:${defender}:淫身`) + 1, 1)),
    );
    add_attr_exp(attacker, attr_enum.strength, 1.2);
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.s_tri], {
      a: part_enum.hand,
      d: part_enum.mouth,
    });
  };

  handlers[ero_hooks.hit_face_by_penis] = (attacker, defender) => {
    const attacker_penis = new EroParticipant(attacker, part_enum.penis);
    sys_do_sex(attacker_penis, new EroParticipant(defender, part_enum.body));
    sys_do_sex(
      new EroParticipant(attacker, part_enum.hit),
      new EroParticipant(defender, part_enum.mouth, -0.5),
    );
    clean_part(attacker_penis);
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_sm_check(defender, part_enum.mouth) +
          10 *
            count_part_stain_in_range(
              defender,
              part_enum.penis,
              stain_enum.lubricant,
              stain_enum.anal,
              (e) => 1 + e,
            ) -
          50,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_juel(
      defender,
      13,
      base_emotion_juel / ((era.get(`talent:${defender}:喜欢痛苦`) + 1) * 2),
    );
    add_juel(
      defender,
      11,
      base_emotion_juel / ((era.get(`talent:${defender}:喜欢痛苦`) + 1) * 2),
    );
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.diff], {
      a: part_enum.penis,
      d: part_enum.mouth,
    });
  };

  handlers[ero_hooks.ask_hit_face] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.abuse),
      new EroParticipant(attacker, part_enum.masochism),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.hit),
      new EroParticipant(attacker, part_enum.body),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.hit),
      new EroParticipant(attacker, part_enum.mouth, -0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
    add_juel(defender, 13, base_emotion_juel / 2);
    add_juel(attacker, 10, base_emotion_juel);
    add_attr_exp(defender, attr_enum.strength, 1);
    sys_cm_b_and_cop(attacker, defender, [base_enum.same, base_enum.s_tri], {
      a: part_enum.mouth,
      d: part_enum.hand,
    });
  };

  handlers[ero_hooks.virgin_foot_job] = (attacker, defender) => {
    clean_all_parts_without_item(attacker);
    sys_do_sex(
      new EroParticipant(attacker, part_enum.foot),
      new EroParticipant(defender, part_enum.clitoris),
    );
    if (defender > 0) {
      add_meek_or_hate(
        defender,
        get_sm_check(defender, part_enum.mouth, part_enum.body) +
          10 *
            count_part_stain_in_range(
              defender,
              part_enum.foot,
              stain_enum.lubricant,
              stain_enum.dirt,
              (e) => 2 + e,
            ) -
          50,
        (c) => c / 5,
      );
    } else {
      add_meek_or_hate(defender, 0, (c) => c / 5);
    }
    add_juel(
      defender,
      13,
      base_emotion_juel / ((era.get(`talent:${defender}:淫核`) === 2) + 1),
    );
    add_attr_exp(attacker, attr_enum.speed, 0.8);
    add_attr_exp(attacker, attr_enum.strength, 0.8);
    sys_change_motion_by_base(attacker, defender, [base_enum.foot]);
  };

  handlers[ero_hooks.ask_virgin_foot_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    clean_all_parts_without_item(defender);
    sys_do_sex(
      new EroParticipant(defender, part_enum.foot),
      new EroParticipant(attacker, part_enum.clitoris),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 5);
    add_juel(defender, 13, base_emotion_juel / 2);
    add_juel(attacker, 10, base_emotion_juel);
    add_attr_exp(attacker, attr_enum.speed, 0.8);
    add_attr_exp(defender, attr_enum.strength, 0.8);
    sys_change_motion_by_base(attacker, defender, [base_enum.b_foot]);
  };
};
