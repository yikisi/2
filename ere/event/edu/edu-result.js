const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const {
  sys_change_motivation,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const { sys_change_money } = require('#/system/sys-calc-flag');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const all_reward_in_event = require('#/event/snippets/all-reward-in-event');

const { buff_colors } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const {
  attr_enum,
  base_attr_list,
  fumble_result,
} = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

/** @param {number} cid */
function handle_rest_cost(cid) {
  all_reward_in_event(cid, { base: [0, -get_random_value(50, 200)] });
  let debuff = era.get(`status:${cid}:水土不服`);
  era.set(
    `status:${cid}:水土不服`,
    Math.max(debuff - 1 - (Math.random() < debuff / 5), 0),
  );
  debuff = era.get(`status:${cid}:疲惫`);
  era.set(
    `status:${cid}:疲惫`,
    Math.max(debuff - 1, Number(era.get(`status:${cid}:疲惫`) > 0)),
  );
}

/** @param {number} cid */
function handle_travel_cost(cid) {
  all_reward_in_event(cid, {
    base: [-get_random_value(50, 200), -get_random_value(200, 400)],
    motivation: +(
      cid > 0 &&
      era.get(`cflag:${cid}:种族`) > 0 &&
      Math.random() > 0.2
    ),
  });
  sys_change_pressure(cid, -get_random_value(-500, 1000));
}

/**
 * @param {number} cid
 * @param {number} aid
 * @param {boolean} learnt
 */
function learn_language(cid, aid, learnt) {
  all_reward_in_event(cid, {
    attr: [0, 0, 0, 0, +(learnt && get_random_value(10, 20))],
    base: [0, -get_random_value(200, 400)],
  });
  if (!learnt) {
    return;
  }
  let level = era.get(`abl:${cid}:${aid}`);
  if (level === 0) {
    level = era.add(`abl:${cid}:${aid}`, 1);
    i18n().timon.edu.fs_learn_language(get_chara_talk(cid), {
      content: i18n().tb_abl[aid],
      fontWeight: 'bold',
    });
  } else if (level < 5) {
    level = era.add(`abl:${cid}:${aid}`, 1);
    i18n().timon.edu.fs_update_language(
      get_chara_talk(cid),
      {
        content: i18n().tb_abl[aid],
        fontWeight: 'bold',
      },
      {
        content: i18n().tb_abl.lv_template.replace('%LEVEL%', level.toString()),
        fontWeight: 'bold',
      },
    );
  }
  const debuff = era.get(`status:${cid}:语言不通`);
  debuff &&
    era.set(`status:${cid}:语言不通`, Math.max(debuff - 1, Number(level < 5)));
  if (
    era.get(`abl:${cid}:粤语`) === 5 &&
    era.get(`abl:${cid}:英语`) === 5 &&
    era.get(`abl:${cid}:法语`) === 5
  ) {
    sys_add_titles(cid, {
      n: 'l_hello_world',
      c: buff_colors[1],
    });
  }
}

/** @type {Record<string,function(number,HookArg,*):Promise<*>>} */
const handlers = {};

handlers[event_hooks.foreign_rest] = async (cid) => {
  era.println();
  sys_change_money(-50, cid);
  handle_rest_cost(cid);
  if (cid > 0) {
    handle_rest_cost(0);
  }
  await era.waitAnyKey();
};

/**
 * @param {number} cid
 * @param {HookArg} hook
 * @param {{lan:number}} extra_flag
 */
handlers[event_hooks.foreign_study] = async (cid, hook, extra_flag) => {
  learn_language(cid, extra_flag.lan, hook.arg);
  cid > 0 && learn_language(0, extra_flag.lan, hook.arg);
  await era.waitAnyKey();
};

handlers[event_hooks.foreign_train] = async (cid) => {
  const attr = new Array(5).fill(0);
  attr[get_random_value(0, 3)] = get_random_value(5, 10);
  all_reward_in_event(cid, {
    attr,
    base: [-get_random_value(100, 200), -get_random_value(50, 100)],
  });
  if (cid > 0) {
    all_reward_in_event(0, {
      base: [0, -get_random_value(50, 100)],
    });
  }
  const debuff = era.get(`status:${cid}:客场作战`);
  era.set(
    `status:${cid}:客场作战`,
    Math.max(
      debuff - 1 - (Math.random() > era.get(`base:${cid}:压力`) / 10000),
      0,
    ),
  );
  await era.waitAnyKey();
};

handlers[event_hooks.foreign_travel] = async (cid) => {
  era.println();
  sys_change_money(-50, cid);
  handle_travel_cost(cid);
  cid > 0 && handle_travel_cost(0);
  await era.waitAnyKey();
};

/**
 * @param {number} cid
 * @param {HookArg} _
 * @param {RaceEventParams} extra
 */
handlers[event_hooks.race_start] = handlers[event_hooks.race_end] = async (
  cid,
  _,
  extra,
) => {
  if (
    all_reward_in_event(cid, {
      attr: extra.attr_change,
      pt: extra.pt_change,
      base: extra.base_change,
      skills: extra.skill_change,
      motivation: extra.motivation_change,
      relation: extra.relation_change,
      love: extra.love_change,
    })
  ) {
    await era.waitAnyKey();
  }
};

/**
 * @param {number} cid
 * @param {HookArg} hook
 * @param {TrainFailParams} extra
 */
handlers[event_hooks.train_fail] = async (cid, hook, extra) => {
  const args = extra.args || fumble_result.fail;
  let attr_change = new Array(5).fill(0);
  let pressure_change = get_random_value(200, 500) + extra.fumble * 500;
  let relation_change = args.like;
  let stamina = 0;
  if (extra.train !== attr_enum.intelligence) {
    era.println();
    let change_buff = 0,
      hurt = 1 + extra.fumble;
    switch (hook.arg) {
      case 1:
        change_buff = extra.fumble + 1;
        relation_change = args.like_success;
        if (extra.fumble) {
          stamina = 100;
        }
        pressure_change = 0;
        hurt = 0;
        break;
      case -1:
        if (Math.random() < args.ratio.fail_again_talent) {
          change_buff = -1;
        }
        attr_change[extra.train] = args.attr_down_again;
        gacha(
          base_attr_list.filter((e) => e !== extra.train),
          args.attr_down_times_again - 1,
        ).forEach((e) => (attr_change[e] = args.attr_down_again));
        sys_change_motivation(cid, args.motivate_down);
        relation_change = args.like_fail_again;
        pressure_change += 500;
        hurt *= 2;
        break;
      default:
        if (Math.random() < args.ratio.accept_talent) {
          change_buff = -1;
        }
        attr_change[extra.train] = args.attr_down;
        gacha(
          base_attr_list.filter((e) => e !== extra.train),
          args.attr_down_times - 1,
        ).forEach((e) => (attr_change[e] = args.attr_down));
        sys_change_motivation(cid, args.motivate_down);
        relation_change = args.like;
        pressure_change /= 2;
        hurt -= 1;
    }
    if (era.get(`status:${cid}:练习X手`) !== change_buff) {
      era.set(`status:${cid}:练习X手`, change_buff);
      i18n().timon.edu.tf_change_debuff(get_chara_talk(cid), change_buff);
    }
    sys_hurt_uma(cid, hurt);
  } else if (extra.fumble) {
    attr_change[attr_enum.intelligence] = -10;
  }
  sys_change_pressure(cid, pressure_change);
  return { attr_change, relation_change, stamina };
};

/**
 * @param {number} cid
 * @param {HookArg} hook
 * @param {TrainSuccessParams} extra
 */
handlers[event_hooks.train_success] = async (cid, hook, extra) => {
  sys_change_pressure(cid, -get_random_value(50, 100));
  if (hook.arg === true) {
    sys_change_pressure(cid, -50);
    extra.attr += 5;
    extra.relation_change += 5;
    extra.stamina -= 50;
  } else if (hook.arg === false) {
    sys_change_pressure(cid, 50);
    extra.stamina += 50;
  }
  return extra;
};

/**
 * @param {number} cid
 * @param {HookArg} hook
 * @param {*} extra
 * @returns {Promise<*>}
 */
module.exports = async (cid, hook, extra) => {
  if (handlers[hook.hook]) {
    return await handlers[hook.hook](cid, hook, extra);
  }
};
