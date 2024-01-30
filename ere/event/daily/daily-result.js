const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
  sys_change_lust,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const quick_into_sex = require('#/event/snippets/quick-into-sex');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_value } = require('#/utils/value-utils');

const { lust_from_palam } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const { attr_enum } = require('#/data/train-const');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

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

/**
 * @param {number} chara_id
 * @param {number[]} stamina
 * @param {number[]} time
 */
function random_cost_in_action(chara_id, stamina, time) {
  sys_change_attr_and_print(0, '体力', -get_random_value(...stamina));
  sys_change_attr_and_print(0, '精力', -get_random_value(...time));
  if (chara_id) {
    sys_change_attr_and_print(chara_id, '体力', -get_random_value(...stamina));
    sys_change_attr_and_print(chara_id, '精力', -get_random_value(...time));
  }
}

/** @type {Record<string,function(chara_id:number,stage_id:HookArg):Promise<void>>} */
const handlers = {};

handlers[event_hooks.office_gift] = async function (chara_id) {
  era.println();
  sys_change_money(-10);
  sys_change_attr_and_print(0, '精力', -get_random_value(100, 200));
  sys_like_chara(chara_id, 0, get_random_value(20, 40)) &&
    (await era.waitAnyKey());
};

handlers[event_hooks.office_cook] = async (chara_id) => {
  era.println();
  let wait_flag = false;
  let to_print = sys_change_attr_and_print(
    0,
    '体力',
    -get_random_value(50, 100),
  );
  print_attr_change(0, to_print);
  wait_flag = print_attr_change(0, to_print) || wait_flag;
  to_print = sys_change_attr_and_print(0, '精力', get_random_value(0, 20));
  wait_flag = print_attr_change(0, to_print) || wait_flag;
  sys_change_weight(0, get_random_value(20, 40, true));
  if (chara_id) {
    to_print = sys_change_attr_and_print(
      chara_id,
      '体力',
      get_random_value(100, 200),
    );
    wait_flag = print_attr_change(chara_id, to_print) || wait_flag;
    to_print = sys_change_attr_and_print(0, '精力', get_random_value(0, 50));
    wait_flag = print_attr_change(chara_id, to_print) || wait_flag;
    wait_flag =
      sys_like_chara(chara_id, 0, get_random_value(5, 10)) || wait_flag;
    sys_change_weight(chara_id, get_random_value(20, 40, true));
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.office_study] = async function (chara_id) {
  era.println();
  let wait_flag = false;
  random_cost_in_action(chara_id, [0, 0], [100, 300]);
  let to_print = sys_change_attr_and_print(
    chara_id,
    attr_enum.intelligence,
    get_random_value(5, 10),
  );
  wait_flag ||= to_print.length > 0;
  wait_flag = sys_like_chara(chara_id, 0, get_random_value(5, 10)) || wait_flag;
  print_attr_change(chara_id, to_print);
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.office_rest] = async function (chara_id) {
  era.println();
  let wait_flag = false;
  let to_print = sys_change_attr_and_print(
    0,
    '精力',
    -get_random_value(50, 100),
  );
  wait_flag = print_attr_change(0, to_print) || wait_flag;
  to_print = sys_change_attr_and_print(0, '体力', get_random_value(0, 20));
  wait_flag = print_attr_change(0, to_print) || wait_flag;
  if (chara_id) {
    to_print = sys_change_attr_and_print(
      chara_id,
      '精力',
      get_random_value(100, 200),
    );
    wait_flag = print_attr_change(chara_id, to_print) || wait_flag;
    to_print = sys_change_attr_and_print(
      chara_id,
      '体力',
      get_random_value(0, 50),
    );
    wait_flag = print_attr_change(chara_id, to_print) || wait_flag;
    wait_flag =
      sys_like_chara(chara_id, 0, get_random_value(5, 10)) || wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.office_prepare] = async function (chara_id) {
  era.println();
  sys_change_money(-20);
  random_cost_in_action(chara_id, [0, 0], [100, 300]);
  let to_print = sys_change_attr_and_print(
    chara_id,
    attr_enum.intelligence,
    get_random_value(5, 10),
  );
  let wait_flag = to_print.length > 0;
  wait_flag =
    sys_change_motivation(chara_id, get_random_value(0, 1)) || wait_flag;
  print_attr_change(chara_id, to_print);
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.office_game] = async function (chara_id) {
  let wait_flag = false;
  random_cost_in_action(chara_id, [0, 0], [100, 300]);
  if (chara_id) {
    era.println();
    wait_flag =
      sys_like_chara(chara_id, 0, get_random_value(5, 10)) || wait_flag;
    wait_flag =
      (Math.random() < 0.25 && sys_change_motivation(chara_id, 1)) || wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.good_night] = async function (chara_id, hook) {
  if (hook.arg !== undefined) {
    if (hook.arg) {
      await quick_into_sex(chara_id, hook.arg === 2);
      era.set('flag:床伴', chara_id);
    } else {
      sys_change_lust(chara_id, lust_from_palam);
      era.println();
      if (sys_like_chara(chara_id, 0, -100)) {
        await era.waitAnyKey();
      }
    }
  }
};

handlers[event_hooks.school_atrium] = async function (chara_id, hook) {
  if (hook.arg) {
    random_cost_in_action(chara_id, [0, 100], [100, 200]);
  } else {
    random_cost_in_action(chara_id, [100, 200], [0, 100]);
  }
  if (chara_id) {
    era.println();
    let wait_flag = sys_like_chara(chara_id, 0, get_random_value(5, 10));
    wait_flag =
      (Math.random() < 0.25 &&
        sys_change_motivation(chara_id, get_random_value(0, 1))) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  }
};

handlers[event_hooks.school_rooftop] = async function (chara_id) {
  era.println();
  let wait_flag = false;
  let to_print = sys_change_attr_and_print(0, '体力', get_random_value(0, 100));
  wait_flag = print_attr_change(0, to_print) || wait_flag;
  sys_change_weight(0, get_random_value(20, 40, true));
  if (chara_id) {
    to_print = sys_change_attr_and_print(
      chara_id,
      '体力',
      get_random_value(50, 150),
    );
    print_attr_change(chara_id, to_print);
    wait_flag ||= to_print.length > 0;
    wait_flag =
      sys_like_chara(chara_id, 0, get_random_value(5, 15)) || wait_flag;
    sys_change_weight(chara_id, get_random_value(20, 40, true));
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.out_river] = async function (chara_id, hook) {
  let wait_flag = false;
  if (hook.arg) {
    random_cost_in_action(chara_id, [200, 600], [0, 100]);
  } else {
    random_cost_in_action(chara_id, [0, 100], [200, 600]);
  }
  if (hook.arg) {
    // 散步
    if (chara_id) {
      era.println();
      wait_flag =
        sys_like_chara(chara_id, 0, get_random_value(10, 20)) || wait_flag;
    }
  } else {
    era.println();
    // 钓鱼
    const got_jpy = get_random_value(0, 5);
    wait_flag ||= got_jpy > 0;
    got_jpy && era.print(`钓到的鱼卖出了 ${got_jpy} 马币……`);
    sys_change_money(got_jpy);
    wait_flag =
      (chara_id && sys_like_chara(chara_id, 0, get_random_value(5, 10))) ||
      wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.out_shopping] = async function (chara_id, stage_id) {
  let wait_flag = false;
  era.println();
  if (stage_id.arg) {
    // 街机厅和抽奖
    // TODO 随机获得道具
    random_cost_in_action(chara_id, [0, 100], [0, 100]);
    wait_flag =
      (chara_id && sys_like_chara(chara_id, 0, get_random_value(5, 10))) ||
      wait_flag;
  } else {
    // 卡拉OK和看电影
    const temp = era.get(`cflag:${chara_id}:种族`)
      ? sys_change_attr_and_print(
          chara_id,
          attr_enum.intelligence,
          get_random_value(5, 10),
        )
      : [];
    wait_flag =
      (chara_id && sys_like_chara(chara_id, 0, get_random_value(10, 15))) ||
      wait_flag;
    print_attr_change(chara_id, temp);
    wait_flag ||= temp.length > 0;
    random_cost_in_action(chara_id, [0, 100], [200, 600]);
    wait_flag =
      (Math.random() < 0.5 &&
        sys_change_motivation(chara_id, get_random_value(0, 2))) ||
      wait_flag;
  }
  sys_change_money(-10);
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.out_church] = async function (chara_id) {
  const condition_chara = chara_id && era.get(`status:${chara_id}:练习X手`) < 0;
  const condition_me = era.get('status:0:练习X手') < 0;
  if (condition_chara || condition_me) {
    era.println();
  }
  if (condition_chara) {
    era.set(`status:${chara_id}:练习X手`, 0);
    era.print(`${era.get(`callname:${chara_id}:-2`)} 的训练似乎更加顺利了……`);
  }
  if (condition_me) {
    era.set('status:0:练习X手', 0);
    era.print(`${CharaTalk.me.name} 的训练似乎更加顺利了……`);
  }
  if (condition_chara || condition_me) {
    await era.waitAnyKey();
  }
};

handlers[event_hooks.out_station] = async function (chara_id, hook) {
  let temp,
    wait_flag = false;
  sys_change_money(-10);
  era.println();
  switch (hook.arg) {
    case 0:
      // 用餐
      random_cost_in_action(chara_id, [0, 0], [0, 200]);
      sys_change_weight(0, get_random_value(20, 40, true));
      if (chara_id) {
        wait_flag =
          sys_like_chara(chara_id, 0, get_random_value(10, 15)) || wait_flag;
        temp = sys_change_attr_and_print(
          chara_id,
          '体力',
          get_random_value(100, 200),
        );
        wait_flag ||= temp.length > 0;
        print_attr_change(chara_id, temp);
        sys_change_weight(chara_id, get_random_value(20, 40, true));
      }
      break;
    case 1:
      // 约会
      wait_flag =
        sys_like_chara(chara_id, 0, get_random_value(10, 15)) || wait_flag;
      random_cost_in_action(chara_id, [100, 300], [0, 200]);
      break;
    case 2:
      // 购物
      wait_flag =
        (chara_id && sys_like_chara(chara_id, 0, get_random_value(5, 10))) ||
        wait_flag;
      random_cost_in_action(chara_id, [0, 200], [0, 200]);
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.celebration] = async (chara_id) => {
  era.set(`cflag:${chara_id}:节日事件标记`, 0);
  era.println();
  if ((era.get('flag:当前回合数') - 1) % 48 === 5) {
    era.print('获得了【情人节巧克力】！');
    era.add('item:情人节巧克力', 1);
  }
  sys_like_chara(chara_id, 0, get_random_value(40, 80)) &&
    (await era.waitAnyKey());
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {*} extra_flag
 */
module.exports = async (chara_id, hook, extra_flag) => {
  if (handlers[hook.hook]) {
    return await handlers[hook.hook](chara_id, hook, extra_flag);
  }
};
