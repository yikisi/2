const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { gacha } = require('#/utils/list-utils');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const event_hooks = require('#/data/event/event-hooks');
const { fumble_result, attr_enum } = require('#/data/train-const');
const { get_random_value } = require('#/utils/value-utils');

/** @type {Record<string,function(chara_id:number,hook:HookArg,extra_flag:*):Promise<*>>} */
const handlers = {};

handlers[event_hooks.train_success] = async function (chara_id, hook) {
  if (hook.arg === true) {
    return {
      attr: 5,
      relation_change: 5,
      stamina: -50,
    };
  } else if (hook.arg === false) {
    return {
      stamina: 50,
    };
  }
  return {};
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {{args:*,fumble:boolean,train:number}} extra_flag
 */
handlers[event_hooks.train_fail] = async function (chara_id, hook, extra_flag) {
  const args = extra_flag.args || fumble_result.fail;
  let attr_change = new Array(5).fill(0),
    relation_change = args.like,
    stamina = 0;
  if (extra_flag.train !== attr_enum.intelligence) {
    const chara_name = era.get(`callname:${chara_id}:-2`);
    let change_buff = 0;
    if (hook.arg === -1) {
      if (Math.random() < args.ratio.fail_again_talent) {
        change_buff = -1;
      }
      attr_change[extra_flag.train] = args.attr_down_again;
      gacha(
        Object.values(attr_enum).filter((e) => e !== extra_flag.train),
        args.attr_down_times_again - 1,
      ).forEach((e) => (attr_change[e] = args.attr_down_again));
      sys_change_motivation(chara_id, args.motivate_down);
      relation_change = args.like_fail_again;
    } else if (hook.arg === 0) {
      if (Math.random() < args.ratio.accept_talent) {
        change_buff = -1;
      }
      attr_change[extra_flag.train] = args.attr_down;
      gacha(
        Object.values(attr_enum).filter((e) => e !== extra_flag.train),
        args.attr_down_times - 1,
      ).forEach((e) => (attr_change[e] = args.attr_down));
      sys_change_motivation(chara_id, args.motivate_down);
      relation_change = args.like;
    } else {
      change_buff = extra_flag.fumble + 1;
      relation_change = args.like_success;
      if (extra_flag.fumble) {
        stamina = 100;
      }
    }
    if (era.get(`status:${chara_id}:练习X手`) !== change_buff) {
      era.set(`status:${chara_id}:练习X手`, change_buff);
      era.print(
        `${chara_name} 感觉在练习上越来越${
          change_buff > 0 ? '轻松' : '吃力'
        }……`,
      );
    }
  } else if (extra_flag.fumble) {
    attr_change[attr_enum.intelligence] = -10;
  }
  return { attr_change, relation_change, stamina };
};

/**
 * @param {number} chara_id
 * @param {HookArg} _
 * @param {{attr_change:number[],pt_change:number,skill_change:number[],motivation_change:number,relation_change:number,love_change:number,base_change:Record<string,number>}} extra_flag
 */
handlers[event_hooks.race_start] = handlers[event_hooks.race_end] = async (
  chara_id,
  _,
  extra_flag,
) => {
  era.println();
  let ret_flag = false;
  ret_flag =
    sys_change_motivation(chara_id, extra_flag.motivation_change || 0) ||
    ret_flag;
  ret_flag =
    sys_like_chara(
      chara_id,
      0,
      extra_flag.relation_change || get_random_value(0, 50),
      true,
      extra_flag.love_change || 0,
    ) || ret_flag;
  ret_flag =
    get_attr_and_print_in_event(
      chara_id,
      extra_flag.attr_change,
      extra_flag.pt_change,
      extra_flag.base_change,
    ) || ret_flag;
  ret_flag && (await era.waitAnyKey());
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @returns {Promise<*>}
 */
module.exports = async (chara_id, hook, extra_flag) => {
  if (handlers[hook.hook]) {
    return await handlers[hook.hook](chara_id, hook, extra_flag);
  }
};
