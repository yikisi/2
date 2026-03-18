const era = require('#/era-electron');

const sys_do_sex = require('#/system/ero/sys-calc-ero');
const {
  get_nipple_buff,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');

const set_motion = require('#/event/ero/snippets/set-motion');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const {
  motion_enum,
  part_enum,
  towards_enum,
  up_enum,
} = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} supporter
 */
function set_ask_towards(attacker, defender, supporter) {
  era.set(`tcvar:${attacker}:朝向`, towards_enum.left);
  era.set(`tcvar:${defender}:朝向`, towards_enum.right);
  era.set(`tcvar:${supporter}:朝向`, towards_enum.right);
  era.set(`tcvar:${attacker}:上下`, up_enum.down);
  era.set(`tcvar:${defender}:上下`, up_enum.up);
  era.set(`tcvar:${supporter}:上下`, up_enum.up);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} supporter
 */
function set_towards(attacker, defender, supporter) {
  era.set(`tcvar:${attacker}:朝向`, towards_enum.left);
  era.set(`tcvar:${defender}:朝向`, towards_enum.right);
  era.set(`tcvar:${supporter}:朝向`, towards_enum.left);
  era.set(`tcvar:${attacker}:上下`, up_enum.up);
  era.set(`tcvar:${defender}:上下`, up_enum.down);
  era.set(`tcvar:${supporter}:上下`, up_enum.up);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} supporter
 */
function set_ask_double_lie(attacker, defender, supporter) {
  era.set(`tcvar:${attacker}:体位`, motion_enum.rev);
  era.set(`tcvar:${defender}:体位`, motion_enum.rev);
  era.set(`tcvar:${supporter}:体位`, motion_enum.rev);
  set_ask_towards(attacker, defender, supporter);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} supporter
 */
function set_double_lie(attacker, defender, supporter) {
  era.set(`tcvar:${attacker}:体位`, motion_enum.lie);
  era.set(`tcvar:${defender}:体位`, motion_enum.lie);
  era.set(`tcvar:${supporter}:体位`, motion_enum.lie);
  set_towards(attacker, defender, supporter);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} supporter
 */
function set_ask_double_fuck(attacker, defender, supporter) {
  era.set(`tcvar:${attacker}:体位`, motion_enum.rev);
  set_motion(defender, motion_enum.sit, motion_enum.rev);
  set_motion(supporter, motion_enum.sit, motion_enum.rev);
  era.set(`tcvar:${defender}:体位`, motion_enum.sit);
  era.set(`tcvar:${supporter}:体位`, motion_enum.sit);
  set_ask_towards(attacker, defender, supporter);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} supporter
 */
function set_double_fuck(attacker, defender, supporter) {
  era.set(`tcvar:${attacker}:体位`, motion_enum.sit);
  era.set(`tcvar:${defender}:体位`, motion_enum.lie);
  era.set(`tcvar:${supporter}:体位`, motion_enum.sit);
  set_ask_towards(attacker, defender, supporter);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} supporter
 */
function set_69(attacker, defender, supporter) {
  era.set(`tcvar:${attacker}:体位`, motion_enum.sit);
  era.set(`tcvar:${defender}:体位`, motion_enum.lie);
  era.set(`tcvar:${supporter}:体位`, motion_enum.rev);
  era.set(`tcvar:${attacker}:朝向`, towards_enum.left);
  era.set(`tcvar:${defender}:朝向`, towards_enum.right);
  era.set(`tcvar:${supporter}:朝向`, towards_enum.right);
  era.set(`tcvar:${attacker}:上下`, 2);
  era.set(`tcvar:${defender}:上下`, 0);
  era.set(`tcvar:${supporter}:上下`, 1);
}

/** @param {Record<string,function(number,number,HookArg,{supporter:number})>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.ask_supporter_prepare_virgin] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.hand),
      new EroParticipant(defender, part_enum.virgin, 0.1),
    );
    era.add(
      `tcvar:${defender}:阴道扩张`,
      1 + !era.get(`tcvar:${defender}:阴道扩张`),
    );
  };

  handlers[ero_hooks.ask_double_suck_nipple] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    const nipple_buff = get_nipple_buff(attacker);
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.breast, nipple_buff / 2 - 0.5),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.mouth),
      new EroParticipant(attacker, part_enum.breast, nipple_buff),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.breast, nipple_buff / 2 - 0.5),
    );
    set_ask_double_lie(attacker, defender, supporter);
  };

  handlers[ero_hooks.double_suck_nipple] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    const nipple_buff = get_nipple_buff(defender);
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(defender, part_enum.breast, nipple_buff - 0.5),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.mouth),
      new EroParticipant(defender, part_enum.breast, nipple_buff),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(defender, part_enum.breast, nipple_buff - 0.5),
    );
    set_double_lie(attacker, defender, supporter);
  };

  handlers[ero_hooks.ask_double_blow_job] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.penis, -0.5),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.mouth),
      new EroParticipant(attacker, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.penis, -0.5),
    );
    era.set(`tcvar:${attacker}:体位`, motion_enum.sit);
    era.set(`tcvar:${defender}:体位`, motion_enum.rev);
    era.set(`tcvar:${supporter}:体位`, motion_enum.rev);
    set_ask_towards(attacker, defender, supporter);
  };

  handlers[ero_hooks.double_blow_job] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(defender, part_enum.penis, -0.5),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.mouth),
      new EroParticipant(defender, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(defender, part_enum.penis, -0.5),
    );
    era.set(`tcvar:${attacker}:体位`, motion_enum.lie);
    era.set(`tcvar:${defender}:体位`, motion_enum.sit);
    era.set(`tcvar:${supporter}:体位`, motion_enum.lie);
    set_towards(attacker, defender, supporter);
  };

  handlers[ero_hooks.ask_double_cunnilingus] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.clitoris, -0.5),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.mouth),
      new EroParticipant(attacker, part_enum.clitoris),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.clitoris, -0.5),
    );
    set_ask_double_lie(attacker, defender, supporter);
  };

  handlers[ero_hooks.double_cunnilingus] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(defender, part_enum.clitoris, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(defender, part_enum.clitoris),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(defender, part_enum.clitoris, -0.5),
    );
    set_double_lie(attacker, defender, extra_flag.supporter);
  };

  handlers[ero_hooks.ask_double_suck_virgin] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(attacker, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(
        attacker,
        era.get(`talent:${attacker}:阴道尺寸`) > 0 &&
          !era.get(`status:${attacker}:弗隆K`) &&
          !era.get(`status:${attacker}:弗隆P`)
          ? part_enum.clitoris
          : part_enum.virgin,
      ),
    );
    set_ask_double_lie(attacker, defender, extra_flag.supporter);
  };

  handlers[ero_hooks.double_suck_virgin] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth),
      new EroParticipant(defender, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(
        defender,
        get_penis_size(defender) > 0 ? part_enum.virgin : part_enum.clitoris,
      ),
    );
    set_double_lie(attacker, defender, extra_flag.supporter);
  };

  handlers[ero_hooks.ask_double_tit_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.breast, -0.5),
      new EroParticipant(attacker, part_enum.penis, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.breast),
      new EroParticipant(attacker, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.breast, -0.5),
      new EroParticipant(attacker, part_enum.penis, -0.5),
    );
    set_ask_double_lie(attacker, defender, extra_flag.supporter);
  };

  handlers[ero_hooks.double_tit_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.breast, -0.5),
      new EroParticipant(defender, part_enum.penis, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.breast),
      new EroParticipant(defender, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.breast, -0.5),
      new EroParticipant(defender, part_enum.penis, -0.5),
    );
    set_double_lie(attacker, defender, extra_flag.supporter);
  };

  handlers[ero_hooks.ask_cunnilingus_with_fucking] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.mouth),
      new EroParticipant(defender, part_enum.clitoris),
    );
    set_69(attacker, defender, supporter);
  };

  handlers[ero_hooks.fuck_69] = (attacker, defender, _, { supporter }) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(
        supporter,
        era.get(`cflag:${supporter}:阴茎尺寸`) > 0 ||
          era.get(`status:${supporter}:弗隆K`) > 0 ||
          era.get(`status:${supporter}:弗隆P`) > 0
          ? part_enum.penis
          : part_enum.clitoris,
      ),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.mouth),
      new EroParticipant(
        defender,
        get_penis_size(defender) > 0 ? part_enum.penis : part_enum.clitoris,
      ),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    set_69(attacker, defender, supporter);
  };

  handlers[ero_hooks.ask_double_cowgirl] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.virgin, -0.5),
      new EroParticipant(attacker, part_enum.penis, -0.5),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.virgin),
      new EroParticipant(attacker, part_enum.penis),
    );
    // 再执行一次防御者对攻击者的do_sex，重新建立攻击者与防御者的接触判定，让防御者拿宝珠
    sys_do_sex(
      new EroParticipant(defender, part_enum.virgin, -0.5),
      new EroParticipant(attacker, part_enum.penis, -0.5),
    );
    set_ask_double_fuck(attacker, defender, supporter);
  };

  handlers[ero_hooks.ask_double_fuck] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis, -0.5),
      new EroParticipant(attacker, part_enum.virgin, -0.5),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.penis),
      new EroParticipant(attacker, part_enum.virgin),
    );
    // 再执行一次防御者对攻击者的do_sex，重新建立攻击者与防御者的接触判定，让防御者拿宝珠
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis, -0.5),
      new EroParticipant(attacker, part_enum.virgin, -0.5),
    );
    set_ask_double_fuck(attacker, defender, supporter);
  };

  handlers[ero_hooks.ask_double_penetration] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis),
      new EroParticipant(attacker, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.penis),
      new EroParticipant(attacker, part_enum.anal),
    );
    era.set(`tcvar:${attacker}:体位`, motion_enum.rev);
    era.set(`tcvar:${defender}:体位`, motion_enum.sit);
    era.set(`tcvar:${supporter}:体位`, motion_enum.rev);
    era.set(`tcvar:${attacker}:朝向`, towards_enum.left);
    era.set(`tcvar:${defender}:朝向`, towards_enum.right);
    era.set(`tcvar:${supporter}:朝向`, towards_enum.left);
    era.set(`tcvar:${attacker}:上下`, 1);
    era.set(`tcvar:${defender}:上下`, 2);
    era.set(`tcvar:${supporter}:上下`, 0);
  };

  handlers[ero_hooks.ask_spit_roast] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis),
      new EroParticipant(attacker, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.penis),
      new EroParticipant(attacker, part_enum.mouth),
    );
    set_ask_double_fuck(attacker, defender, supporter);
  };

  handlers[ero_hooks.ask_spit_roast_anal_sex] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis),
      new EroParticipant(attacker, part_enum.anal),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.penis),
      new EroParticipant(attacker, part_enum.mouth),
    );
    set_ask_double_fuck(attacker, defender, extra_flag.supporter);
  };

  handlers[ero_hooks.double_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, -0.5),
      new EroParticipant(defender, part_enum.virgin, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    // 再执行一次攻击者对防御者的do_sex，重新建立攻击者与防御者的接触判定，让攻击者拿宝珠
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis, -0.5),
      new EroParticipant(defender, part_enum.virgin, -0.5),
    );
    add_juel(defender, 10, base_emotion_juel);
    set_double_fuck(attacker, defender, extra_flag.supporter);
  };

  handlers[ero_hooks.double_cowgirl] = (atk, def, _, extra) => {
    sys_do_sex(
      new EroParticipant(atk, part_enum.virgin, -0.5),
      new EroParticipant(def, part_enum.penis, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra.supporter, part_enum.virgin),
      new EroParticipant(def, part_enum.penis),
    );
    // 再执行一次攻击者对防御者的do_sex，重新建立攻击者与防御者的接触判定，让攻击者拿宝珠
    sys_do_sex(
      new EroParticipant(atk, part_enum.virgin, -0.5),
      new EroParticipant(def, part_enum.penis, -0.5),
    );
    add_juel(def, 10, base_emotion_juel);
    set_double_fuck(atk, def, extra.supporter);
  };

  handlers[ero_hooks.double_penetration] = (
    attacker,
    defender,
    _,
    { supporter },
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(supporter, part_enum.penis),
      new EroParticipant(defender, part_enum.anal),
    );
    add_juel(defender, 10, base_emotion_juel);
    era.set(`tcvar:${attacker}:体位`, motion_enum.sit);
    era.set(`tcvar:${defender}:体位`, motion_enum.lie);
    era.set(`tcvar:${supporter}:体位`, motion_enum.lie);
    era.set(`tcvar:${attacker}:朝向`, towards_enum.left);
    era.set(`tcvar:${defender}:朝向`, towards_enum.right);
    era.set(`tcvar:${supporter}:朝向`, towards_enum.right);
    era.set(`tcvar:${attacker}:上下`, 2);
    era.set(`tcvar:${defender}:上下`, 1);
    era.set(`tcvar:${supporter}:上下`, 0);
  };

  handlers[ero_hooks.spit_roast] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.penis),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_juel(defender, 10, base_emotion_juel);
    set_double_fuck(attacker, defender, extra_flag.supporter);
  };

  handlers[ero_hooks.spit_roast_anal_sex] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.anal),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.penis),
      new EroParticipant(defender, part_enum.mouth),
    );
    add_juel(defender, 10, base_emotion_juel);
    set_double_fuck(attacker, defender, extra_flag.supporter);
  };
};
