const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_change_pressure,
  sys_change_attr_and_print,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const event_hooks = require('#/data/event/event-hooks');
const { fumble_result, attr_enum } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {[]} to_print
 */
function print_attr_change(chara_id, to_print) {
  to_print.length &&
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      ' 的 ',
      ...to_print,
      '！',
    ]);
  return to_print.length > 0;
}

/** @type {Record<string,function(chara_id:number,hook:HookArg,extra_flag:*):Promise<*>>} */
const handlers = {};

handlers[event_hooks.train_success] = async (chara_id, hook) => {
  sys_change_pressure(chara_id, -get_random_value(50, 100));
  if (hook.arg === true) {
    sys_change_pressure(chara_id, -50);
    return {
      attr: 5,
      relation_change: 5,
      stamina: -50,
    };
  } else if (hook.arg === false) {
    sys_change_pressure(chara_id, 50);
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
handlers[event_hooks.train_fail] = async (chara_id, hook, extra_flag) => {
  const args = extra_flag.args || fumble_result.fail;
  let attr_change = new Array(5).fill(0),
    pressure_change = get_random_value(200, 500) + extra_flag.fumble * 500,
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
      pressure_change += 500;
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
      pressure_change /= 2;
    } else {
      change_buff = extra_flag.fumble + 1;
      relation_change = args.like_success;
      if (extra_flag.fumble) {
        stamina = 100;
      }
      pressure_change = 0;
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
  sys_change_pressure(chara_id, pressure_change);
  return { attr_change, relation_change, stamina };
};

/**
 * @param {number} chara_id
 * @param {string} lan_name
 */
function learn_language(chara_id, lan_name) {
  print_attr_change(
    chara_id,
    sys_change_attr_and_print(chara_id, '精力', -get_random_value(200, 400)),
  );
  print_attr_change(
    chara_id,
    sys_change_attr_and_print(
      chara_id,
      attr_enum.intelligence,
      get_random_value(10, 20),
    ),
  );
  let level = era.get(`abl:${chara_id}:${lan_name}语`);
  if (level === 0) {
    level = era.add(`abl:${chara_id}:${lan_name}语`, 1);
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      ' 学会了 ',
      {
        content: `${lan_name}语`,
        fontWeight: 'bold',
      },
      '！',
    ]);
  } else if (level < 5) {
    level = era.add(`abl:${chara_id}:${lan_name}语`, 1);
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      ' 的 ',
      {
        content: `${lan_name}语`,
        fontWeight: 'bold',
      },
      ' 更加熟练了，现在是 ',
      {
        content: `Lv.${level.toString()}`,
        fontWeight: 'bold',
      },
      '！',
    ]);
  }
  const debuff = era.get(`status:${chara_id}:语言不通`);
  debuff &&
    era.set(
      `status:${chara_id}:语言不通`,
      Math.max(debuff - 1, Number(level < 5)),
    );
}

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {{lan:string}} extra_flag
 */
handlers[event_hooks.foreign_study] = async (chara_id, hook, extra_flag) => {
  if (hook.arg) {
    era.println();
    learn_language(chara_id, extra_flag.lan);
    chara_id && learn_language(0, extra_flag.lan);
    await era.waitAnyKey();
  }
};

/** @param {number} chara_id */
function handle_rest_cost(chara_id) {
  print_attr_change(
    chara_id,
    sys_change_attr_and_print(chara_id, '精力', -get_random_value(50, 200)),
  );
  let debuff = era.get(`status:${chara_id}:水土不服`);
  era.set(
    `status:${chara_id}:水土不服`,
    Math.max(debuff - 1 - (Math.random() < debuff / 5), 0),
  );
  debuff = era.get(`status:${chara_id}:疲惫`);
  era.set(`status:${chara_id}:疲惫`, Math.max(debuff - 1, 1));
}

handlers[event_hooks.foreign_rest] = async (chara_id) => {
  era.println();
  sys_change_money(-50, chara_id);
  handle_rest_cost(chara_id);
  chara_id > 0 && handle_rest_cost(0);
  await era.waitAnyKey();
};

handlers[event_hooks.foreign_train] = async (chara_id) => {
  era.println();
  era.print([
    get_chara_talk(chara_id).get_colored_name(),
    ' 的 ',
    ...sys_change_attr_and_print(chara_id, '体力', -get_random_value(100, 200)),
    '，',
    ...sys_change_attr_and_print(chara_id, '精力', -get_random_value(50, 100)),
    '！',
  ]);
  print_attr_change(
    chara_id,
    sys_change_attr_and_print(
      chara_id,
      get_random_value(0, 3),
      get_random_value(5, 10),
    ),
  );
  chara_id > 0 &&
    print_attr_change(
      0,
      sys_change_attr_and_print(0, '精力', -get_random_value(50, 100)),
    );
  const debuff = era.get(`status:${chara_id}:客场作战`);
  era.set(
    `status:${chara_id}:客场作战`,
    Math.max(
      debuff - 1 - (Math.random() > era.get(`base:${chara_id}:压力`) / 10000),
      0,
    ),
  );
  await era.waitAnyKey();
};

/** @param {number} chara_id */
function handle_travel_cost(chara_id) {
  era.print([
    get_chara_talk(chara_id).get_colored_name(),
    ' 的 ',
    ...sys_change_attr_and_print(chara_id, '体力', -get_random_value(50, 200)),
    '，',
    ...sys_change_attr_and_print(chara_id, '精力', -get_random_value(200, 400)),
    '！',
  ]);
  sys_change_pressure(chara_id, -get_random_value(-500, 1000));
  get_random_value(0, 4) > 1 && sys_change_motivation(chara_id, 1);
}

handlers[event_hooks.foreign_travel] = async (chara_id) => {
  era.println();
  sys_change_money(-50, chara_id);
  handle_travel_cost(chara_id);
  chara_id > 0 && handle_travel_cost(0);
  await era.waitAnyKey();
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
      extra_flag.relation_change === undefined
        ? 0
        : extra_flag.relation_change || get_random_value(0, 25),
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
