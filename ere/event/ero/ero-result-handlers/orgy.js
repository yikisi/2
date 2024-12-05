const era = require('#/era-electron');

const sys_do_sex = require('#/system/ero/sys-calc-ero');
const {
  get_nipple_buff,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');

const EroParticipant = require('#/data/ero/ero-participant');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

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
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(
        attacker,
        part_enum.breast,
        get_nipple_buff(attacker) / 2 - 0.5,
      ),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(attacker, part_enum.breast, get_nipple_buff(attacker)),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(
        attacker,
        part_enum.breast,
        get_nipple_buff(attacker) / 2 - 0.5,
      ),
    );
  };

  handlers[ero_hooks.double_suck_nipple] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(
        defender,
        part_enum.breast,
        get_nipple_buff(defender) - 0.5,
      ),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(defender, part_enum.breast, get_nipple_buff(attacker)),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(
        defender,
        part_enum.breast,
        get_nipple_buff(defender) - 0.5,
      ),
    );
  };

  handlers[ero_hooks.ask_double_blow_job] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.penis, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(attacker, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.penis, -0.5),
    );
  };

  handlers[ero_hooks.double_blow_job] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(defender, part_enum.penis, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(defender, part_enum.penis),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.mouth, -0.5),
      new EroParticipant(defender, part_enum.penis, -0.5),
    );
  };

  handlers[ero_hooks.ask_double_cunnilingus] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.clitoris, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(attacker, part_enum.clitoris),
    );
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth, -0.5),
      new EroParticipant(attacker, part_enum.clitoris, -0.5),
    );
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
        era.get(`talent:${attacker}:阴道尺寸`) && !get_penis_size(attacker)
          ? part_enum.clitoris
          : part_enum.virgin,
      ),
    );
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
        era.get(`talent:${defender}:阴道尺寸`) && !get_penis_size(defender)
          ? part_enum.clitoris
          : part_enum.virgin,
      ),
    );
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
  };

  handlers[ero_hooks.ask_cunnilingus_with_fucking] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(defender, part_enum.clitoris),
    );
  };

  handlers[ero_hooks.fuck_69] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.mouth),
      new EroParticipant(
        extra_flag.supporter,
        get_penis_size(extra_flag.supporter)
          ? part_enum.penis
          : part_enum.clitoris,
      ),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.mouth),
      new EroParticipant(
        defender,
        get_penis_size(defender) ? part_enum.penis : part_enum.clitoris,
      ),
    );
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
  };

  handlers[ero_hooks.ask_double_fuck] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis, -0.5),
      new EroParticipant(attacker, part_enum.virgin, -0.5),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.penis),
      new EroParticipant(attacker, part_enum.virgin),
    );
    // 再执行一次防御者对攻击者的do_sex，重新建立攻击者与防御者的接触判定，让防御者拿宝珠
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis, -0.5),
      new EroParticipant(attacker, part_enum.virgin, -0.5),
    );
  };

  handlers[ero_hooks.ask_double_penetration] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis),
      new EroParticipant(attacker, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.penis),
      new EroParticipant(attacker, part_enum.anal),
    );
  };

  handlers[ero_hooks.ask_spit_roast] = (attacker, defender, _, extra_flag) => {
    sys_do_sex(
      new EroParticipant(defender, part_enum.penis),
      new EroParticipant(attacker, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.penis),
      new EroParticipant(attacker, part_enum.mouth),
    );
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
    add_juel(defender, '顺从', base_emotion_juel);
  };

  handlers[ero_hooks.double_penetration] = (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    sys_do_sex(
      new EroParticipant(attacker, part_enum.penis),
      new EroParticipant(defender, part_enum.virgin),
    );
    sys_do_sex(
      new EroParticipant(extra_flag.supporter, part_enum.penis),
      new EroParticipant(defender, part_enum.anal),
    );
    add_juel(defender, '顺从', base_emotion_juel);
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
    add_juel(defender, '顺从', base_emotion_juel);
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
    add_juel(defender, '顺从', base_emotion_juel);
  };
};
