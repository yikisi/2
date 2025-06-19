const { add, get, set } = require('#/era-electron');

const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { add_palam } = require('#/system/ero/sys-calc-palam');

const add_attr_exp = require('#/event/ero/snippets/add-attr-exp');
const add_meek_or_hate = require('#/event/ero/snippets/add-meek-or-hate');
const print_ero_gif = require('#/event/ero/snippets/print-ero-gif');
const set_motion = require('#/event/ero/snippets/set-motion');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const {
  motion_enum,
  part_enum,
  towards_enum,
} = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} check
 */
function common_suspended_congress(attacker, defender, check) {
  add(`nowex:${attacker}:体力消耗`, get(`tcvar:${defender}:体重`) / 4);
  add_meek_or_hate(defender, check, (c) => c / 10);
  add_juel(defender, '羞耻', base_emotion_juel / 2);
  add_attr_exp(attacker, attr_enum.strength, 1.5);
  set(`tcvar:${attacker}:体位`, motion_enum.stand);
  set(`tcvar:${defender}:体位`, motion_enum.sit);
  set(`tcvar:${attacker}:朝向`, towards_enum.left);
  set(`tcvar:${defender}:朝向`, towards_enum.right);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} check
 */
function common_ask_cowgirl(attacker, defender, check) {
  add_meek_or_hate(defender, check, (c) => c / 10);
  add_juel(defender, '羞耻', base_emotion_juel);
  add_attr_exp(defender, attr_enum.strength, 1);
  set_motion(attacker, motion_enum.rev, motion_enum.sit);
  set_motion(defender, motion_enum.sit, motion_enum.rev);
  set(`tcvar:${attacker}:朝向`, towards_enum.left);
  set(`tcvar:${defender}:朝向`, towards_enum.right);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} check
 */
function common_cowgirl(attacker, defender, check) {
  add_meek_or_hate(defender, check, (c) => c / 10);
  add_juel(defender, '羞耻', base_emotion_juel);
  add_juel(attacker, '顺从', base_emotion_juel);
  add_attr_exp(defender, attr_enum.strength, 1);
  set_motion(attacker, motion_enum.sit, motion_enum.lie);
  set_motion(defender, motion_enum.lie, motion_enum.sit);
  set(`tcvar:${attacker}:体位`, motion_enum.sit);
  set(`tcvar:${defender}:体位`, motion_enum.lie);
  set(`tcvar:${attacker}:朝向`, towards_enum.left);
  set(`tcvar:${defender}:朝向`, towards_enum.right);
}

/** @param {Record<string,function(number,number,HookArg,{check:number})>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.missionary] = (attacker, defender, hook, extra_flag) => {
    if (hook.arg) {
      print_ero_gif('正常位插入', extra_flag.shown);
    }
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    add_attr_exp(attacker, attr_enum.strength, 1);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    set_motion(attacker, motion_enum.sit, motion_enum.lie);
    set(`tcvar:${defender}:体位`, motion_enum.lie);
    set(`tcvar:${attacker}:朝向`, towards_enum.left);
    set(`tcvar:${defender}:朝向`, towards_enum.right);
  };

  handlers[ero_hooks.doggy_style] = handlers[ero_hooks.doggy_style_anal_sex] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(
        defender,
        hook.hook === ero_hooks.doggy_style ? part_enum.virgin : part_enum.anal,
      ),
    );
    add_attr_exp(attacker, attr_enum.strength, 1);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '恐惧', base_emotion_juel / 4);
    add_juel(defender, '羞耻', base_emotion_juel / 4);
    set_motion(attacker, motion_enum.sit, motion_enum.lie);
    set(`tcvar:${defender}:体位`, motion_enum.lie);
    set(`tcvar:${attacker}:朝向`, towards_enum.left);
    set(`tcvar:${defender}:朝向`, towards_enum.left);
  };

  handlers[ero_hooks.sitting] = (attacker, defender, hook, extra_flag) => {
    print_ero_gif(hook.arg ? '女上位插入' : '女上位重复', extra_flag.shown);
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    add_attr_exp(attacker, attr_enum.strength, 1);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel / 2);
    set(`tcvar:${attacker}:体位`, motion_enum.sit);
    set(`tcvar:${defender}:体位`, motion_enum.sit);
    set(`tcvar:${attacker}:朝向`, towards_enum.left);
    set(`tcvar:${defender}:朝向`, towards_enum.right);
  };

  handlers[ero_hooks.hug_sitting] = handlers[ero_hooks.hug_sitting_anal_sex] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(
        defender,
        hook.hook === ero_hooks.hug_sitting ? part_enum.virgin : part_enum.anal,
      ),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '恐惧', base_emotion_juel / 4);
    add_juel(defender, '羞耻', base_emotion_juel / 4);
    add_attr_exp(attacker, attr_enum.strength, 1);
    set(`tcvar:${attacker}:体位`, motion_enum.sit);
    set(`tcvar:${defender}:体位`, motion_enum.sit);
    set(`tcvar:${attacker}:朝向`, towards_enum.left);
    set(`tcvar:${defender}:朝向`, towards_enum.left);
  };

  handlers[ero_hooks.standing] = handlers[ero_hooks.standing_anal_sex] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(
        defender,
        hook.hook === ero_hooks.standing ? part_enum.virgin : part_enum.anal,
      ),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel / 2);
    add_attr_exp(attacker, attr_enum.strength, 1);
    set(`tcvar:${attacker}:体位`, motion_enum.stand);
    set(`tcvar:${defender}:体位`, motion_enum.stand);
    set(`tcvar:${attacker}:朝向`, towards_enum.left);
    set(`tcvar:${defender}:朝向`, towards_enum.right);
  };

  handlers[ero_hooks.hug_standing] = handlers[ero_hooks.hug_standing_anal_sex] =
    (attacker, defender, hook, extra_flag) => {
      sys_do_sex(
        new EroParticipant(attacker, part_enum.penis),
        new EroParticipant(
          defender,
          hook.hook === ero_hooks.hug_standing
            ? part_enum.virgin
            : part_enum.anal,
        ),
      );
      add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
      add_juel(defender, '恐惧', base_emotion_juel / 2);
      add_attr_exp(attacker, attr_enum.strength, 1);
      set(`tcvar:${attacker}:体位`, motion_enum.stand);
      set(`tcvar:${defender}:体位`, motion_enum.stand);
      set(`tcvar:${attacker}:朝向`, towards_enum.left);
      set(`tcvar:${defender}:朝向`, towards_enum.left);
    };

  handlers[ero_hooks.suspended_congress] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    print_ero_gif(hook.arg ? '女上位插入' : '女上位重复', extra_flag.shown);
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, 0.2),
      new EroParticipant(defender, part_enum.virgin, 0.8),
    );
    common_suspended_congress(attacker, defender, extra_flag.check);
  };

  handlers[ero_hooks.fucked_suspended_congress] = handlers[
    ero_hooks.fucked_suspended_congress_anal_sex
  ] = (attacker, defender, hook, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.virgin, 0.2),
      new EroParticipant(
        defender,
        hook.hook === ero_hooks.fucked_suspended_congress
          ? part_enum.penis
          : part_enum.anal,
        0.8,
      ),
    );
    common_suspended_congress(attacker, defender, extra_flag.check);
  };

  handlers[ero_hooks.hug_suspended_congress] = handlers[
    ero_hooks.hug_suspended_congress_anal_sex
  ] = (attacker, defender, hook, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, 0.2),
      new EroParticipant(
        defender,
        hook.hook === ero_hooks.hug_suspended_congress
          ? part_enum.penis
          : part_enum.anal,
        0.8,
      ),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '恐惧', base_emotion_juel / 2);
    add_juel(defender, '羞耻', base_emotion_juel / 2);
    add_attr_exp(attacker, attr_enum.strength, 1.5);
    add(`nowex:${attacker}:体力消耗`, get(`tcvar:${defender}:体重`) / 4);
    set(`tcvar:${attacker}:体位`, motion_enum.stand);
    set(`tcvar:${defender}:体位`, motion_enum.sit);
    set(`tcvar:${attacker}:朝向`, towards_enum.left);
    set(`tcvar:${defender}:朝向`, towards_enum.left);
  };

  handlers[ero_hooks.ask_cowgirl] = (attacker, defender, hook, extra_flag) => {
    print_ero_gif(hook.arg ? '女上位插入' : '女上位重复', extra_flag.shown);
    sys_do_sex(
      new EroParticipant(defender, part_enum.virgin),
      new EroParticipant(attacker, part_enum.penis),
    );
    common_ask_cowgirl(attacker, defender, extra_flag.check);
  };

  handlers[ero_hooks.ask_stimulate_glans_by_virgin] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    print_ero_gif('女上位重复', extra_flag.shown);
    sys_do_sex(
      new EroParticipant(defender, part_enum.virgin, 0.2),
      new EroParticipant(attacker, part_enum.penis, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel);
    add_attr_exp(defender, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.stimulate_g_spot] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, 0.2),
      new EroParticipant(defender, part_enum.virgin, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_attr_exp(attacker, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.ask_cowgirl_anal_sex] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.anal),
      new EroParticipant(attacker, part_enum.penis),
    );
    common_ask_cowgirl(attacker, defender, extra_flag.check);
  };

  handlers[ero_hooks.ask_stimulate_glans_by_anal] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.anal, 0.2),
      new EroParticipant(attacker, part_enum.penis, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel);
    add_attr_exp(defender, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.stimulate_large_intestine] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, 0.2),
      new EroParticipant(defender, part_enum.anal, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_attr_exp(attacker, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.stimulate_womb] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, 0.2),
      new EroParticipant(defender, part_enum.anal),
    );
    add_palam(defender, part_enum.virgin, 50);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '痛苦', base_emotion_juel / 4);
    add_attr_exp(attacker, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.ask_fuck] = (attacker, defender, hook, extra_flag) => {
    if (hook.arg) {
      print_ero_gif('正常位插入', extra_flag.shown);
    }
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis),
      new EroParticipant(attacker, part_enum.virgin),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel / 2);
    add_juel(attacker, '顺从', base_emotion_juel);
    add_attr_exp(defender, attr_enum.strength, 1);
  };

  handlers[ero_hooks.cowgirl] = (attacker, defender, hook, extra_flag) => {
    print_ero_gif(hook.arg ? '女上位插入' : '女上位重复', extra_flag.shown);
    sys_do_sex(
      new EroParticipant(attacker, part_enum.virgin),
      new EroParticipant(defender, part_enum.penis),
    );
    common_cowgirl(attacker, defender, extra_flag.check);
  };

  handlers[ero_hooks.stimulate_glans_by_virgin] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    print_ero_gif('女上位重复', extra_flag.shown);
    sys_do_sex(
      new EroParticipant(attacker, part_enum.virgin, 0.2),
      new EroParticipant(defender, part_enum.penis, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
    add_attr_exp(attacker, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.ask_stimulate_g_spot] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis, 0.2),
      new EroParticipant(attacker, part_enum.virgin, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel / 4);
    add_attr_exp(defender, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.missionary_anal_sex] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.anal),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_attr_exp(attacker, attr_enum.strength, 1);
    set_motion(attacker, motion_enum.sit, motion_enum.lie);
    set(`tcvar:${defender}:体位`, motion_enum.lie);
    set(`tcvar:${attacker}:朝向`, towards_enum.left);
    set(`tcvar:${defender}:朝向`, towards_enum.right);
  };

  handlers[ero_hooks.sitting_anal_sex] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.anal),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel / 2);
    add_attr_exp(attacker, attr_enum.strength, 1);
    set(`tcvar:${attacker}:体位`, motion_enum.sit);
    set(`tcvar:${defender}:体位`, motion_enum.sit);
    set(`tcvar:${attacker}:朝向`, towards_enum.left);
    set(`tcvar:${defender}:朝向`, towards_enum.right);
  };

  handlers[ero_hooks.suspended_congress_anal_sex] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, 0.2),
      new EroParticipant(defender, part_enum.anal, 0.8),
    );
    common_suspended_congress(attacker, defender, extra_flag.check);
  };

  handlers[ero_hooks.ask_fuck_anal] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis),
      new EroParticipant(attacker, part_enum.anal),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel / 2);
    add_juel(attacker, '顺从', base_emotion_juel);
    add_attr_exp(defender, attr_enum.strength, 1);
  };

  handlers[ero_hooks.cowgirl_anal_sex] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.anal),
      new EroParticipant(defender, part_enum.penis),
    );
    common_cowgirl(attacker, defender, extra_flag.check);
  };

  handlers[ero_hooks.stimulate_glans_by_anal] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.anal, 0.2),
      new EroParticipant(defender, part_enum.penis, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(attacker, '顺从', base_emotion_juel);
    add_attr_exp(attacker, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.ask_stimulate_large_intestine] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis, 0.2),
      new EroParticipant(attacker, part_enum.anal, 0.5),
    );
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_juel(defender, '羞耻', base_emotion_juel / 4);
    add_attr_exp(defender, attr_enum.strength, 1.2);
  };

  handlers[ero_hooks.ask_stimulate_womb] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis, 0.2),
      new EroParticipant(attacker, part_enum.anal, 0.5),
    );
    add_palam(attacker, part_enum.virgin, 50);
    add_meek_or_hate(defender, extra_flag.check, (c) => c / 10);
    add_attr_exp(defender, attr_enum.strength, 1.2);
  };
};
